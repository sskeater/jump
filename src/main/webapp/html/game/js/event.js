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
        var lastDirection = nextLeft;

        if (lastDirection) {
            game['man'].position.z -= game.current.position.z - game.next.position.z;
        } else {
            game['man'].position.x -= game.current.position.x - game.next.position.x;
        }
        var left = Math.random() > 0.5;
        left = true;
        index++;
        // var next = game.getBox();
        var next = Block.pool[index].clone();
        console.info(next.order)
        if (left) {
            next.position.x = game['man'].position.x;
            next.position.z = game['man'].position.z - length;
            if (lastDirection) {
                console.info('left-left')
                camera.position.z -= length * 2;
            } else {
                console.info('right-left')
                // camera.position.x += length/2;
            }
        } else {
            next.position.x = game['man'].position.x + length;
            next.position.z = game['man'].position.z;
            if (lastDirection) {
                console.info('left-right')
                camera.position.z -= length;
                camera.position.x += length;
            } else {
                camera.position.x += length;
                console.info('right-right')
            }
        }
        nextLeft = left;
        game.current = game.next;
        game.next = next;
        game.heap.push(next);
        if (game.heap.length > 5) {
            var unuse = game.heap.shift();
            scene.remove(unuse);
        }
        scene.add(next);
        render.render(scene, camera);
    }
}

move.moveBg = function(from, to, duration) {

};