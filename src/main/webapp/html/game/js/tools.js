
var tools = {};
tools.cwh = function(x) {
    var realx = x * W / 414;
    if (H / W < 736 / 414) {
        realx = x * H / 736;
    }
    return realx * Dpr;
};
tools.cx = function(x) {
    var realx = x * W / 414;
    if (H / W < 736 / 414) {
        realx = x * H / 736 + (W - H * 414 / 736) / 2;
    }
    return realx * Dpr;
};
tools.cy = function(y) {
    var really;
    if (H / W > 736 / 414) {
        really = y * W / 414 + (H - W * 736 / 414) / 2;
    } else {
        really = y * H / 736;
    }
    return really * Dpr;
};
tools.cf = function(size, is_num) {
    // font size
    var realf = size * Dpr * W / 414;
    if (H / W < 736 / 414) {
        realf = size * Dpr * H / 736;
    }
    if (!!is_num && !!family)
        return realf + ('px ' + family);
    else
        return realf + 'px Helvetica';
};
tools.cxp = function(x) {
    return x / W * 414;
};
tools.cyp = function(y) {
    var really;
    if (H / W > 736 / 414) {
        really = (y - (H - W * 736 / 414) / 2) / W * 414;
    } else {
        really = y / H * 736;
    }
    return really;
};