var audio = {
    start : document.getElementById('start'),
    press : document.getElementById('press'),
    success : document.getElementById('success'),
    fall : document.getElementById('fall'),
    combo1 : document.getElementById('combo1'),
    combo2 : document.getElementById('combo2'),
    combo3 : document.getElementById('combo3'),
    combo4 : document.getElementById('combo4'),
    combo5 : document.getElementById('combo5'),
    combo6 : document.getElementById('combo6'),
    combo7 : document.getElementById('combo7'),
    combo8 : document.getElementById('combo8'),
    sing : document.getElementById('sing'),
    store : document.getElementById('store'),
    water : document.getElementById('water'),
    begin : function(target, callback) {
        target = target == 'combo' ? 'combo' + Math.ceil(Math.random() * 8) : target;
        if (audio[target]) {
            audio[target].currentTime = 0;
            audio[target].play();
            if (typeof callback == 'function') {
                audio[target].onended = callback;
            }
        }
    },
    delay : function(target, time) {
        function t() {
            if (audio[target]) {
                audio[target].currentTime = 0;
                audio[target].play();
                if (typeof callback == 'function') {
                    audio[target].onended = callback;
                }
            }
        }
        window.setTimeout(t, time);
    },
    end : function(target) {
        if (audio[target]) {
            audio[target].pause();
            audio[target].currentTime = 0;
        }
    },
    stop : function() {
        audio.end('sing');
        audio.end('water');
        audio.end('store');
    }
};
