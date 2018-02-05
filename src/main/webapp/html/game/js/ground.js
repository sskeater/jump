function groundInit() {
    this.obj = new THREE.Object3D();
    this.obj.name = 'ground';
    var geometry = new THREE.PlaneGeometry(WIDTH / HEIGHT * config.FRUSTUMSIZE, config.FRUSTUMSIZE);
    this.materials = [];
    var colors = [ [ 'rgba(215, 219, 230, 1)', 'rgba(188, 190, 199, 1)' ],
            [ 'rgba(255, 231, 220, 1)', 'rgba(255, 196, 204, 1)' ],
            [ 'rgba(255, 224, 163, 1)', 'rgba(255, 202, 126, 1)' ],
            [ 'rgba(255, 248, 185, 1)', 'rgba(255, 245, 139, 1)' ],
            [ 'rgba(218, 244, 255, 1)', 'rgba(207, 233, 210, 1)' ],
            [ 'rgba(219, 235, 255, 1)', 'rgba(185, 213, 235, 1)' ],
            [ 'rgba(216, 218, 255, 1)', 'rgba(165, 176, 232, 1)' ],
            [ 'rgba(207, 207, 207, 1)', 'rgba(199, 196, 201, 1)' ] ];
    for (var i = 0; i < 7; ++i) {
        var texture = new THREE.Texture(groundBg(colors[i][0], colors[i][1]));
        texture.needsUpdate = true;
        var material = new THREE.MeshBasicMaterial({
            map : texture,
            opacity : 1,
            transparent : true
        });
        this.materials.push(material);
        var ground = new THREE.Mesh(geometry, material);
        ground.position.z = -(i + 1) * 0.1;
        ground.name = i;
        ground.updateMatrix();
        ground.matrixAutoUpdate = false;
        this.obj.add(ground);

    }
    for (var i = 0; i < 7; ++i) {
        this.obj.children[i].visible = false;
    }
    this.obj.children[2].visible = true;
    this.current = 2;
    return this;
}

function groundBg(start, stop) {
    var canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, start);
    gradient.addColorStop(1, stop);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
}
