var planeList = [ 'level', 'btn', 'start', 'level1', 'level2', 'level3', 'level4', 'over' ];

var plane = {
    canvas : {},
    context : {},
    texture : {},
    material : {},
    geometry : {}
};
plane.create = function() {
    for (var i = 0; i < planeList.length; i++) {
        var p = planeList[i];
        plane.canvas[p] = document.createElement('canvas');
        plane.context[p] = plane.canvas[p].getContext('2d');
        plane.canvas[p].width = WIDTH;
        if (p == 'level') {
            plane.canvas[p].height = HEIGHT / 4;
        } else {
            plane.canvas[p].height = HEIGHT;
        }

        plane.texture[p] = new THREE.Texture(plane.canvas[p]);
        plane.material[p] = new THREE.MeshBasicMaterial({
            map : plane.texture[p],
            transparent : true
        });
        plane.material[p].map.minFilter = THREE.LinearFilter;
        plane.geometry[p] = new THREE.PlaneGeometry(frustumSizeWidth, frustumSizeHeight);
        plane[p] = new THREE.Mesh(plane.geometry[p], plane.material[p]);
        plane[p].position.set(0, 0, 9 - i * 0.001);
    }
};

plane.updatePlane = function(p) {
    plane.texture[p].needsUpdate = true;
    plane[p].visible = true;
    camera.add(plane[p]);
};

plane.drawImageCenter = function(src, x, y, width, height, type) {
    var img = new Image();
    img.onload = function() {
        plane.context[type].drawImage(img, x - width / 2, y - height / 2, width, height);
        plane.updatePlane(type);
    };
    img.src = src;

};

plane.hide = function(p) {
    plane.texture[p].needsUpdate = true;
    plane[p].visible = false;
};

plane.drawStart = function() {
    var p = 'start';
    var ctx = plane.context[p];
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = 'rgba(0,0,0, 0.3)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    plane.drawImageCenter('res/title.png', tools.cx(204), tools.cy(168), tools.cwh(207), tools.cwh(52), p, p);

    var ctx1 = plane.context['btn'];
    ctx1.clearRect(0, 0, WIDTH, HEIGHT);
    plane.drawImageCenter('res/play.png', tools.cx(207), tools.cy(587), tools.cwh(208), tools.cwh(78), 'btn', 'btn');
};

plane.hideForStart = function() {
    plane.hide('start');
    plane.hide('over');
    plane.hide('btn');
};

plane.drawLevel = function() {
    var p = 'level';
    var ctx = plane.context[p];
    ctx.clearRect(0, 0, WIDTH, HEIGHT / 3);
    ctx.fillStyle = 'rgba(0,0,0, 0)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT / 3);

    ctx.font = "1em 微软雅黑";
    ctx.fillStyle = '#000';
    ctx.fillText('Lv ' + game.level, tools.cx(20), tools.cy(20));
    ctx.fillText(game.score, tools.cx(310), tools.cy(20));
    plane.updatePlane(p);
};

plane.drawOver = function() {
    var p = 'over';
    var ctx = plane.context[p];
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = 'rgba(0,0,0, 0.3)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    plane.drawImageCenter('res/title.png', tools.cx(204), tools.cy(168), tools.cwh(207), tools.cwh(52), p, p);

    var ctx1 = plane.context['btn'];
    ctx1.clearRect(0, 0, WIDTH, HEIGHT);
    plane.drawImageCenter('res/replay.png', tools.cx(207), tools.cy(587), tools.cwh(208), tools.cwh(78), 'btn', 'btn');
};

plane.hideForReplay = function() {
    plane.hide('over');
    plane.hide('btn');
};