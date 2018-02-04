function bindEvent() {
    document.addEventListener('touchstart', function(event) {
        clickStart(event);
    });
    document.addEventListener('touchend', function(event) {
        clickEnd(event);
    });
};

function clickStart(e) {
    if (currentStatus == statusDefine['start']) {
        gameEvent.start();
    }
}

var index = 0;
function clickEnd(e) {
    // 蓄力结束，准备起跳
    if (currentStatus == statusDefine['press']) {
        gameEvent.press(e);
    }
}

var gameEvent = {};
// 蓄力开始
gameEvent.start = function(e) {
    if (currentStatus != statusDefine['start']) {
        return;
    }
    Block.shrink();
    Block.eggEnd(game.current);
    audio.begin('press');
    gameEvent.startTime = new Date().getTime();
    currentStatus = statusDefine['press'];
};
// 蓄力结束，准备起跳
gameEvent.press = function(e) {
    if (currentStatus != statusDefine['press']) {
        return;
    }
    gameEvent.endTime = new Date().getTime();
    Block.rebound();
    audio.end('press');
    audio.stop();
    currentStatus = statusDefine['moving'];
    var length = parseInt(Math.random() * (config.BLOCK.maxDistance - config.BLOCK.minDistance)
            + config.BLOCK.minDistance);

    var desX = game.next.obj.position.x;
    var desZ = game.next.obj.position.z;

    var t = (gameEvent.endTime - gameEvent.startTime);
    var distance = config.speed * t;

    var destination = game['man'].bottle.position.clone().add(
            game.left ? new THREE.Vector3(0, 0, -distance) : new THREE.Vector3(distance, 0, 0));
    // 换方向时，要对坐标进行修正，以防拐弯时跑偏
    if (game.left != game.beforeLeft) {
        if (game.left) {
            destination.x = desX;
        } else {
            destination.z = desZ;
        }
    }

    var startV = game['man'].bottle.position.clone();

    var hit = gameEvent.hit(game.next.obj.position.clone(), destination.clone());
    // hit = gameEvent.hit(game.next.obj.position.clone(),
    // game.next.obj.position.clone());

    var diff = destination.clone().sub(startV);
    // diff = game.next.obj.position.clone().sub(startV);
    var deviation = config.BLOCK.width / 2 - hit;
    if (deviation > 0) {
        jump(diff, diff.length() / 15, jumpSuccessOver);
        game.beforeLeft = game.left;
    } else {
        audio.begin('fall');
        game.deviation = deviation;
        jump(diff, diff.length() / 15, bottle.fall);
    }

    function jumpSuccessOver() {
        if (deviation > 4) {
            // 命中靶心
            game.doubleHit++;
            game.doubleHit = Math.min(game.doubleHit, 8);
            audio.begin('combo' + game.doubleHit);
        } else {
            audio.begin('success');
            game.doubleHit = 0;
        }
        var left = Math.random() > 0.5;
        index++;
        var next = game.third;
        if (left) {
            next.obj.position.x = desX;
            next.obj.position.z = desZ - length;
        } else {
            next.obj.position.x = desX + length;
            next.obj.position.z = desZ;
        }
        game.left = left;
        var firstV = game.next.obj.position.clone().sub(game.current.obj.position);
        var secondV = next.obj.position.clone().sub(game.next.obj.position);
        var cameraV = firstV.add(secondV);
        cameraV.x /= 2;
        cameraV.z /= 2;
        game.current = game.next;
        game.next = next;
        Block.change(game.next, null, null, 1);
        game.heap.push(next);
        game.third = Block.next();
        Block.change(game.third, null, null, 1);
        var duration = cameraV.length() / 10;
        if (game.heap.length > 5) {
            var unuse = game.heap.shift();
            scene.remove(unuse);
        }
        scene.add(next.obj);
        moveGradually(cameraV, duration);
        Block.egg(game.current);
    }
};

gameEvent.hit = function(p0, p1) {
    return Math.abs((p0.x - p1.x) + (p0.z - p1.z));
};
