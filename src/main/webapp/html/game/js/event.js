function bindEvent() {
    document.addEventListener('touchstart', function(event) {
        clickStart(event);
    });
    document.addEventListener('touchend', function(event) {
        clickEnd(event);
    });
};

function clickStart(e) {
}

var index = 0;
function clickEnd(e) {
    if (CURRENT_STATUS == STATUS['START']) {

        var length = parseInt(Math.random() * 10 + 20);

        var desX = game.next.position.x;
        var desZ = game.next.position.z;

        var startV = game['man'].position.clone();
        var diff = game.next.position.clone().sub(startV);
        jump(diff, diff.length() / 10, jumpOver);

        function jumpOver() {

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

        // render.render(scene, camera);
    }
}

move.moveBg = function(from, to, duration) {

};