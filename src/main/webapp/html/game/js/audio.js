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
    begin : function(target) {
        target = target == 'combo' ? 'combo' + Math.ceil(Math.random() * 8) : target;
        if (audio[target]) {
            audio[target].play();
        }
    },
    end : function(target) {
        if (audio[target]) {
            audio[target].play();
            audio[target].pause();
            audio[target].currentTime = 0;
        }
    }
};
