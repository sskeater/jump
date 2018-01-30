var colors = {
    green : 0x619066,
    white : 0xeeeeee,
    lightGreen : 0x7ba980,
    gray : 0x9e9e9e,
    black : 0x6d6d6d,
    lightGray : 0xdbdbdb,
    lightBlack : 0xcbcbcb,
    brown : 0x676767,
    middleLightGreen : 0x774a379,
    middleLightGray : 0xbbbbbb,
    middleLightBlack : 0x888888
};
config.BLOCK = {
    radius : 5,
    width : 10,
    minRadiusScale : 0.8,
    maxRadiusScale : 1,
    height : 5.5,
    radiusSegments : [ 4, 50 ],
    floatHeight : 0,
    minDistance : 1,
    maxDistance : 17,
    minScale : BOTTLE.minScale,
    reduction : BOTTLE.reduction,
    moveDownVelocity : 0.07,
    fullHeight : 5.5 / 21 * 40
};
var _config = config;
var biggerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 + 0.02, _config.BLOCK.height + 0.04,
        _config.BLOCK.radius * 2 + 0.02);
var staticGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height, _config.BLOCK.radius * 2);
var shadowGeometry = new THREE.PlaneGeometry(11, 11);
var stripeMaterial = new THREE.MeshBasicMaterial({
    map : new THREE.TextureLoader().load('res/stripe.png')
});
var customMaterial =  THREE.MeshLambertMaterial ;
var Block = {};
Block.build = function(type, number) {
    this.radius = _config.BLOCK.radius;
    this.status = 'stop';
    this.scale = 1;
    this.type = 'green';
    this.types = [ 'green', 'black', 'gray' ];
    this.radiusScale = 1;
    this.obj = new THREE.Object3D();
    this.obj.name = 'block';
    this.body = new THREE.Object3D();
    if (type <= 8 || type == 27) {
        this.greenMaterial = new THREE.MeshLambertMaterial({
            color : colors.green
        });
        this.whiteMaterial = new THREE.MeshLambertMaterial({
            color : colors.white
        });
    }
    this.shadowWidth = 11;
    if (type == 2 || type == 7) {
        this.shadow = new THREE.Mesh(shadowGeometry, _config.desk_shadow);
        this.shadow.position.set(0, -_config.BLOCK.height / 2 - 0.001 * type, -4.5);
        this.shadow.scale.y = 1.2;
    } else if (type == 3 || type == 21 || type == 27 || type == 28 || type == 29 || type == 31) {
        this.shadow = new THREE.Mesh(shadowGeometry, _config.cylinder_shadow);
        this.shadow.position.set(-0.1, -_config.BLOCK.height / 2 - 0.001 * type, -2.8);
        this.shadow.scale.y = 1.4;
        this.shadow.scale.x = 1;
    } else {
        this.shadow = new THREE.Mesh(shadowGeometry, _config.shadow);
        this.shadow.position.set(-0.74, -_config.BLOCK.height / 2 - 0.001 * type, -2.73);
        this.shadow.scale.y = 1.4;
    }
    this.shadow.rotation.x = -Math.PI / 2;
    this.order = type;
    this.radiusSegments = 4;
    this.height = _config.BLOCK.height;
    this.canChange = true;
    if (type == 0) {
        var materials = [ this.greenMaterial, this.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var innerHeight = 3;
        var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
        var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
        this.geometry = outerGeometry;
        var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
        this.merge(totalGeometry, outerGeometry, 0, [ {
            x : 0,
            y : -innerHeight / 2 - outerHeight / 2,
            z : 0
        }, {
            x : 0,
            y : innerHeight / 2 + outerHeight / 2,
            z : 0
        } ]);
        this.merge(totalGeometry, innerGeometry, 1, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        this.hitObj = new THREE.Mesh(totalGeometry, materials);
    }
    this.shadow.initZ = this.shadow.position.z;
    this.hitObj.receiveShadow = true;
    this.hitObj.name = 'hitObj';
    this.body.add(this.hitObj);
    this.hitObj.matrixAutoUpdate = false;
    this.shadow.initScale = this.shadow.scale.y;
    this.body.position.y = _config.BLOCK.height / 2 - this.height / 2;
    this.obj.add(this.shadow);
    this.obj.add(this.body);
    return this.obj;
};
Block.merge = function(totalGeometry, geometry, index, positions) {
    for (var i = 0, len = geometry.faces.length; i < len; ++i) {
        geometry.faces[i].materialIndex = 0;
    }
    var mesh = new THREE.Mesh(geometry);
    for (var i = 0, len = positions.length; i < len; ++i) {
        mesh.position.set(positions[i].x, positions[i].y, positions[i].z);
        mesh.updateMatrix();
        totalGeometry.merge(mesh.geometry, mesh.matrix, index);
    }
};