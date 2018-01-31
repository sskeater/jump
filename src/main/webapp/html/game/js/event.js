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
    audio.begin('press');
    gameEvent.startTime = new Date().getTime();
    currentStatus = statusDefine['press'];
};
// 蓄力结束，准备起跳
gameEvent.press = function(e) {
    if (currentStatus != statusDefine['press']) {
        return;
    }
    audio.end('press');
    currentStatus = statusDefine['moving'];
    var length = parseInt(Math.random() * 10 + 20);

    var desX = game.next.position.x;
    var desZ = game.next.position.z;

    var startV = game['man'].position.clone();
    var diff = game.next.position.clone().sub(startV);

    audio.begin('success');
    jump(diff, diff.length() / 15, jumpOver);

    function jumpOver() {
        audio.begin('combo');
        var left = Math.random() > 0.5;
        index++;
        var next = game.third;
        if (left) {
            next.position.x = desX;
            next.position.z = desZ - length;
        } else {
            next.position.x = desX + length;
            next.position.z = desZ;
        }
        nextLeft = left;
        var firstV = game.next.position.clone().sub(game.current.position);
        var secondV = next.position.clone().sub(game.next.position);
        var cameraV = firstV.add(secondV);
        cameraV.x /= 2;
        cameraV.z /= 2;
        game.current = game.next;
        game.next = next;
        game.heap.push(next);
        game.third = Block.next();
        var duration = cameraV.length() / 10;
        if (game.heap.length > 5) {
            var unuse = game.heap.shift();
            scene.remove(unuse);
        }
        scene.add(next);
        moveGradually(cameraV, duration);
    }
};
