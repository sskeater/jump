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
    Block.rebound();
    audio.end('press');
    audio.stop();
    currentStatus = statusDefine['moving'];
    var length = parseInt(Math.random() * 10 + 20);

    var desX = game.next.obj.position.x;
    var desZ = game.next.obj.position.z;

    var startV = game['man'].bottle.position.clone();
    var diff = game.next.obj.position.clone().sub(startV);

    audio.begin('success');
    jump(diff, diff.length() / 15, jumpOver);

    function jumpOver() {
        audio.begin('combo');
        var left = Math.random() > 0.7;
        index++;
        var next = game.third;
        if (left) {
            next.obj.position.x = desX;
            next.obj.position.z = desZ - length;
        } else {
            next.obj.position.x = desX + length;
            next.obj.position.z = desZ;
        }
        nextLeft = left;
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
