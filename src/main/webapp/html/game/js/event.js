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

function clickEnd(e) {
    var pageX = e.changedTouches[0].pageX;
    var pageY = e.changedTouches[0].pageY;

    pageX = tools.cxp(pageX);
    pageY = tools.cyp(pageY);
    if (currentStatus == statusDefine['ready']) {
        // 点击开始
        if (pageX > 100 && pageX < 320 && pageY > 515 && pageY < 645) {
            plane.hideForStart();
            game.start();
        }
    } else if (currentStatus == statusDefine['over']) {
        // 点击重新开始
        if (pageX > 100 && pageX < 320 && pageY > 515 && pageY < 645) {
            plane.hideForReplay();
            game.reset();
        }
    }

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
    var h = Math.min(Math.ceil(t / 1000), 4);
    var startV = game['man'].bottle.position.clone();
    var diff = destination.clone().sub(startV);

    // 先判断有没有跳出当前的block
    var hit = gameEvent.hit(game.current.obj.position.clone(), destination.clone());
    var deviation = config.BLOCK.width / 2 - hit;
    if (game.next.order == 29) {
        deviation = config.BLOCK.width / 4 - hit;
    }
    if (deviation > 0) {
        jump(diff, diff.length() / 15, null, h);
        currentStatus = statusDefine['start'];
        return;
    }
    // 然后判断有没有调到下一个block
    hit = gameEvent.hit(game.next.obj.position.clone(), destination.clone());
    game.deviation = config.BLOCK.width / 2 - hit;
    if (game.next.order == 29) {
        game.deviation = config.BLOCK.width / 4 - hit;
    }
    if (game.deviation > 0) {
        jump(diff, diff.length() / 15, gameEvent.jumpSuccess, h);
        game.beforeLeft = game.left;
    } else {
        audio.begin('fall');
        jump(diff, diff.length() / 15, bottle.fall, h);
        currentStatus = statusDefine['over'];
        setTimeout(plane.drawOver, 1000);
    }
};

gameEvent.hit = function(p0, p1) {
    return Math.abs((p0.x - p1.x) + (p0.z - p1.z));
};

gameEvent.jumpSuccess = function() {
    game.level++;
    if (game.deviation > 3) {
        // 命中靶心
        game.doubleHit++;
        game.doubleHit = Math.min(game.doubleHit, 8);
        audio.begin('combo' + game.doubleHit);
    } else {
        audio.begin('success');
        game.doubleHit = 0;
    }
    game.score += game.doubleHit > 0 ? game.doubleHit * 2 : 1;
    var next = game.third;
    var left = next.number < game.current.number;
    var length = parseInt(Math.random() * (config.BLOCK.maxDistance - config.BLOCK.minDistance)
            + config.BLOCK.minDistance);
    if (left) {
        next.obj.position.x = game.next.obj.position.x;
        next.obj.position.z = game.next.obj.position.z - length;
    } else {
        next.obj.position.x = game.next.obj.position.x + length;
        next.obj.position.z = game.next.obj.position.z;
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
        scene.remove(unuse.obj);
    }
    scene.add(next.obj);
    moveGradually(cameraV, duration);
    Block.egg(game.current);
    plane.drawLevel();
};