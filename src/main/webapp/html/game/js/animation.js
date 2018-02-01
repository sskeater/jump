if (!window.requestAnimationFrame) {
    requestAnimationFrame = function requestAnimationFrame(fn) {
        setTimeout(fn, 17);
    };
}
var customAnimation  = {};
customAnimation.to = function (obj, duration, options) {
    duration *= 1000;
    var delay = options.delay || 0;
    for (var name in options) {
        if (name === 'delay') {
            delay = options[name];
        } else if (name === 'onComplete') {} else if (name === 'ease') {} else {
            setTimeout(function (name) {
                return function () {
                    //console.log("name", name, obj[name], options[name], duration, delay, obj)
                    TweenAnimation(obj[name], options[name], duration, options.ease || 'Linear', function (value, complete) {
                        obj[name] = value;
                        if (complete) {
                            options.onComplete && options.onComplete();
                        }
                    });
                };
            }(name), delay * 1000);
        }
    }
};
function TweenAnimation(from, to, duration, easing, callback) {
    var options = {
        duration : duration || 300,
        easing : 'Linear',
        callback : function callback() {
        }
    };
    if (typeof callback == 'function') {
        options.callback = callback;
    }
    // 算法需要的几个变量
    var start = -1;
    // during根据设置的总时间计算
    var during = Math.ceil(options.duration / 17);

    // 当前动画算法
    // 确保首字母大写
    options.easing = options.easing.slice(0, 1).toUpperCase() + options.easing.slice(1);
    var arrKeyTween = options.easing.split('.');
    var fnGetValue;

    if (arrKeyTween.length == 1) {
        fnGetValue = Tween[arrKeyTween[0]];
    } else if (arrKeyTween.length == 2) {
        fnGetValue = Tween[arrKeyTween[0]] && tween[arrKeyTween[0]][arrKeyTween[1]];
    }

    var startTime = Date.now();
    var lastTime = Date.now();
    // 运动
    var step = function() {
        var currentTime = Date.now();
        var interval = currentTime - lastTime;
        var fps = Math.ceil(1000 / interval);
        lastTime = currentTime;
        if (interval > 100) {
            requestAnimationFrame(step);
            return;
        }
        if (fps >= 30) {
            start++;
        } else {
            var _start = Math.floor((currentTime - startTime) / 17);
            start = _start > start ? _start : start + 1;
        }

        // 当前的运动位置
        var value = fnGetValue(start, from, to - from, during);

        // 如果还没有运动到位，继续
        if (start <= during) {
            options.callback(value);
            requestAnimationFrame(step);
        } else if (start > during) {
            // 动画结束，这里可以插入回调...
            options.callback(to, true);
        } else {
        }
    };
    // 开始执行动画
    step();
}

function moveGradually(vector, duration) {
    TweenAnimation(camera.position.x, camera.position.x + vector.x, duration * 500, 'Quad.easeOut', function(value) {
        camera.position.x = value;
    });
    TweenAnimation(camera.position.z, camera.position.z + vector.z, duration * 500, 'Quad.easeOut', function(value,
            complete) {
        camera.position.z = value;
        if (complete) {
            currentStatus = statusDefine['start'];
        }
    });
}

function jump(vector, duration, callback) {
    var c = 160;
    TweenAnimation(game.man.position.y, game.man.position.y + 4, duration * c / 2, 'Linear', function(value, complete) {
        game.man.position.y = value;
        if (complete) {
            TweenAnimation(game.man.position.y, game.man.position.y - 4, duration * c / 2, 'Linear', function(value,
                    complete) {
                game.man.position.y = value;
            });
        }
    });
    TweenAnimation(game.man.position.x, game.man.position.x + vector.x, duration * c, 'Linear', function(value,
            complete) {
        game.man.position.x = value;
        if (complete) {
            callback();
        }
    });
    TweenAnimation(game.man.position.z, game.man.position.z + vector.z, duration * c, 'Linear', function(value,
            complete) {
        game.man.position.z = value;
    });

}

function refresh() {
    render.render(scene, camera);
}
lastFrameTime = 0;
function animate() {
    var now = Date.now();
    var tickTime = now - lastFrameTime;
    lastFrameTime = now;
    requestAnimationFrame(animate, true);
    if (tickTime > 100)
        return;
    refresh();
}
animate();
