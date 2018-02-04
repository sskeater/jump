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
    minDistance : 20,
    maxDistance : 30,
    minScale : BOTTLE.minScale,
    reduction : BOTTLE.reduction,
    moveDownVelocity : 0.07,
    fullHeight : 5.5 / 21 * 40
};
config.loader = new THREE.TextureLoader();
config.cylinder_shadow = new THREE.MeshBasicMaterial({
    map : new THREE.TextureLoader().load('res/cylinder_shadow.png'),
    transparent : true,
    alphaTest : 0.01
});
config.desk_shadow = new THREE.MeshBasicMaterial({
    map : new THREE.TextureLoader().load('res/desk_shadow.png'),
    transparent : true,
    alphaTest : 0.01
});
config.shadow = new THREE.MeshBasicMaterial({
    map : new THREE.TextureLoader().load('res/shadow.png'),
    transparent : true,
    alphaTest : 0.01
});
config.grayMaterial = new THREE.MeshLambertMaterial({
    map : new THREE.TextureLoader().load('res/gray.png')
});
config.numberMaterial = new THREE.MeshLambertMaterial({
    map : new THREE.TextureLoader().load('res/number.png'),
    alphaTest : 0.6
});
var _config = config;
var biggerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 + 0.02, _config.BLOCK.height + 0.04,
        _config.BLOCK.radius * 2 + 0.02);
var staticGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height, _config.BLOCK.radius * 2);
var shadowGeometry = new THREE.PlaneGeometry(11, 11);
var stripeMaterial = new THREE.MeshBasicMaterial({
    map : new THREE.TextureLoader().load('res/stripe.png')
});
var customMaterial = THREE.MeshLambertMaterial;
var Block = function(type, number) {
    var block = {};
    block.radius = _config.BLOCK.radius;
    block.status = 'stop';
    block.scale = 1;
    block.type = 'green';
    block.types = [ 'green', 'black', 'gray' ];
    block.radiusScale = 1;
    block.obj = new THREE.Object3D();
    block.obj.order = type;
    block.obj.name = 'block';
    block.body = new THREE.Object3D();
    if (type <= 8 || type == 27) {
        block.greenMaterial = new THREE.MeshLambertMaterial({
            color : colors.green
        });
        block.whiteMaterial = new THREE.MeshLambertMaterial({
            color : colors.white
        });
    }
    block.shadowWidth = 11;
    if (type == 2 || type == 7) {
        block.shadow = new THREE.Mesh(shadowGeometry, _config.desk_shadow);
        block.shadow.position.set(0, -_config.BLOCK.height / 2 - 0.001 * type, -4.5);
        block.shadow.scale.y = 1.2;
    } else if (type == 3 || type == 21 || type == 27 || type == 28 || type == 29 || type == 31) {
        block.shadow = new THREE.Mesh(shadowGeometry, _config.cylinder_shadow);
        block.shadow.position.set(-0.1, -_config.BLOCK.height / 2 - 0.001 * type, -2.8);
        block.shadow.scale.y = 1.4;
        block.shadow.scale.x = 1;
    } else {
        block.shadow = new THREE.Mesh(shadowGeometry, _config.shadow);
        block.shadow.position.set(-0.74, -_config.BLOCK.height / 2 - 0.001 * type, -2.73);
        block.shadow.scale.y = 1.4;
    }
    block.shadow.rotation.x = -Math.PI / 2;
    block.order = type;
    block.radiusSegments = 4;
    block.height = _config.BLOCK.height;
    block.canChange = true;
    if (type == 0) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var innerHeight = 3;
        var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
        var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
        block.geometry = outerGeometry;
        var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
        Block.merge(totalGeometry, outerGeometry, 0, [ {
            x : 0,
            y : -innerHeight / 2 - outerHeight / 2,
            z : 0
        }, {
            x : 0,
            y : innerHeight / 2 + outerHeight / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, innerGeometry, 1, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 1) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var bottomHeight = _config.BLOCK.height / 5;
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, bottomHeight, _config.BLOCK.radius * 2);
        block.geometry = geometry;
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        }, {
            x : 0,
            y : -2 * bottomHeight,
            z : 0
        }, {
            x : 0,
            y : 2 * bottomHeight,
            z : 0
        } ]);
        Block.merge(totalGeometry, geometry, 1, [ {
            x : 0,
            y : -bottomHeight,
            z : 0
        }, {
            x : 0,
            y : bottomHeight,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 2) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        block.radiusSegments = 50;
        var bottomHeight = 5;
        var topHeight = _config.BLOCK.height - bottomHeight;
        var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius - 4, _config.BLOCK.radius - 2,
                bottomHeight, 50);
        var topGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, topHeight, 50);
        block.geometry = topGeometry;
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -(_config.BLOCK.height - bottomHeight) / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, topGeometry, 0, [ {
            x : 0,
            y : bottomHeight + topHeight / 2 - _config.BLOCK.height / 2,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 3) {
        block.radiusSegments = 50;
        block.middleLightGreenMaterial = new THREE.MeshLambertMaterial({
            color : colors.middleLightGreen
        });
        var materials = [ block.greenMaterial, block.whiteMaterial, block.middleLightGreenMaterial ];
        var totalGeometry = new THREE.Geometry();
        var bottomHeight = 5;
        var topHeight = _config.BLOCK.height - bottomHeight;
        var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, bottomHeight, 50);
        var topGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, topHeight, 50);
        block.geometry = topGeometry;
        var ringGeometry = new THREE.RingGeometry(_config.BLOCK.radius * 0.6, _config.BLOCK.radius * 0.8, 30);
        ringGeometry.rotateX(-Math.PI / 2);
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -(_config.BLOCK.height - bottomHeight) / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, topGeometry, 0, [ {
            x : 0,
            y : bottomHeight + topHeight / 2 - _config.BLOCK.height / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, ringGeometry, 2, [ {
            x : 0,
            y : _config.BLOCK.height / 2 + 0.01,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 4) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var geometry = staticGeometry;
        block.geometry = geometry;
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        var ringGeometry = new THREE.RingGeometry(1, 2, 30, 1);
        Block.merge(totalGeometry, ringGeometry, 1, [ {
            x : 0,
            y : 0,
            z : _config.BLOCK.radius + 0.01
        } ]);
        ringGeometry.rotateY(-Math.PI / 2);
        Block.merge(totalGeometry, ringGeometry, 1, [ {
            x : -_config.BLOCK.radius - 0.01,
            y : 0,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 5) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var innerHeight = 3;
        var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
        var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
        var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
        Block.merge(totalGeometry, outerGeometry, 0, [ {
            x : 0,
            y : -innerHeight / 2 - outerHeight / 2,
            z : 0
        }, {
            x : 0,
            y : innerHeight / 2 + outerHeight / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, innerGeometry, 1, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 6) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var innerHeight = 3;
        var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
        var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
        var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
        Block.merge(totalGeometry, outerGeometry, 0, [ {
            x : 0,
            y : -innerHeight / 2 - outerHeight / 2,
            z : 0
        }, {
            x : 0,
            y : innerHeight / 2 + outerHeight / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, innerGeometry, 1, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 7) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        block.radiusSegments = 50;
        var bottomHeight = 5;
        var topHeight = _config.BLOCK.height - bottomHeight;
        var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius - 4, _config.BLOCK.radius - 2,
                bottomHeight, 50);
        var topGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, topHeight, 50);
        block.geometry = topGeometry;
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -(_config.BLOCK.height - bottomHeight) / 2,
            z : 0
        } ]);
        Block.merge(totalGeometry, topGeometry, 0, [ {
            x : 0,
            y : bottomHeight + topHeight / 2 - _config.BLOCK.height / 2,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 8) {
        var materials = [ block.greenMaterial, block.whiteMaterial ];
        var totalGeometry = new THREE.Geometry();
        var bottomHeight = _config.BLOCK.height / 5;
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, bottomHeight, _config.BLOCK.radius * 2);
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        }, {
            x : 0,
            y : -2 * bottomHeight,
            z : 0
        }, {
            x : 0,
            y : 2 * bottomHeight,
            z : 0
        } ]);
        Block.merge(totalGeometry, geometry, 1, [ {
            x : 0,
            y : -bottomHeight,
            z : 0
        }, {
            x : 0,
            y : bottomHeight,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 9) {
        var pinkMaterial = new THREE.MeshLambertMaterial({
            color : 0xed7c38
        });
        var planeMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/game.png'),
            transparent : true
        });
        var materials = [ pinkMaterial, planeMaterial ];
        var totalGeometry = new THREE.Geometry();
        var geometry = staticGeometry;
        block.geometry = geometry;
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, new THREE.PlaneGeometry(5, 5), 1, [ {
            x : 0,
            y : 0.1,
            z : _config.BLOCK.radius + 0.01
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 10) {
        var yellowMaterial = new THREE.MeshLambertMaterial({
            color : 0xfbe65e
        });
        var planeMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/emotion.png'),
            transparent : true
        });
        var materials = [ yellowMaterial, planeMaterial ];
        var totalGeometry = new THREE.Geometry();
        var geometry = staticGeometry;
        var faceGeometry = new THREE.CylinderGeometry(2, 2, 1, 50);
        var planeGeometry = new THREE.PlaneGeometry(1.5, 1.5);
        block.geometry = geometry;
        // var yellowLambertMaterial = new THREE.MeshLambertMaterial({
        // color: 0xfbe65e });
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        faceGeometry.rotateX(Math.PI / 2);
        Block.merge(totalGeometry, faceGeometry, 0, [ {
            x : 0,
            y : 0,
            z : _config.BLOCK.radius + 0.51
        } ]);
        faceGeometry.rotateZ(Math.PI / 2);
        faceGeometry.rotateY(Math.PI / 2);
        Block.merge(totalGeometry, faceGeometry, 0, [ {
            x : -_config.BLOCK.radius - 0.51,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : 0,
            y : 0,
            z : _config.BLOCK.radius + 1.02
        } ]);
        planeGeometry.rotateY(-Math.PI / 2);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : -_config.BLOCK.radius - 1.02,
            y : 0,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 11) {
        var geometry = staticGeometry;
        var earGeometry = new THREE.BoxGeometry(3, 2, 4);
        block.geometry = geometry;
        var greenMaterial = new THREE.MeshLambertMaterial({
            color : 0xb4e842
        });
        var planeMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/green_face.png'),
            transparent : true
        });
        var planeGeometry = new THREE.PlaneGeometry(6, 3);
        var materials = [ greenMaterial, planeMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : 0.5,
            y : -1,
            z : _config.BLOCK.radius + 0.01
        } ]);
        earGeometry.rotateZ(Math.PI / 5);
        Block.merge(totalGeometry, earGeometry, 0, [ {
            x : -_config.BLOCK.radius - 1,
            y : 1,
            z : 2.5
        } ]);
        earGeometry.rotateZ(-2 * Math.PI / 5);
        Block.merge(totalGeometry, earGeometry, 0, [ {
            x : _config.BLOCK.radius,
            y : 1,
            z : 2.5
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 12) {
        var geometry = staticGeometry;
        var earGeometry = new THREE.BoxGeometry(3, 2, 4);
        block.geometry = geometry;
        var greenMaterial = new THREE.MeshLambertMaterial({
            color : 0xf2f2f2
        });
        var planeMaterial = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/white_face.png')
        });
        var planeGeometry = new THREE.PlaneGeometry(6, 3);
        var materials = [ greenMaterial, planeMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : 0.5,
            y : -1,
            z : _config.BLOCK.radius + 0.01
        } ]);
        earGeometry.rotateZ(Math.PI / 5);
        Block.merge(totalGeometry, earGeometry, 0, [ {
            x : -_config.BLOCK.radius - 1,
            y : 1,
            z : 2.5
        } ]);
        earGeometry.rotateZ(-2 * Math.PI / 5);
        Block.merge(totalGeometry, earGeometry, 0, [ {
            x : _config.BLOCK.radius,
            y : 1,
            z : 2.5
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 13) {
        var geometry = staticGeometry;
        block.geometry = geometry;
        var planeMaterial = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/money.png')
        });
        var planeGeometry = new THREE.PlaneGeometry(3, 3);
        var materials = [ planeMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.mapUv(64, 64, geometry, 1, 2, 2, 4, 4);
        Block.mapUv(64, 64, geometry, 2, 2, 2, 4, 4);
        Block.mapUv(64, 64, geometry, 4, 2, 2, 4, 4);
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, planeGeometry, 0, [ {
            x : 0,
            y : 0,
            z : _config.BLOCK.radius + 0.01
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 14) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        block.geometry = geometry;
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/tit.png')
        });
        Block.mapUv(310, 310, geometry, 1, 0, 0, 200, 110);
        Block.mapUv(310, 310, geometry, 2, 0, 110, 200, 310); // top
        Block.mapUv(310, 310, geometry, 4, 200, 110, 310, 310); // right

        block.hitObj = new THREE.Mesh(geometry, material);
    } else if (type == 15) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        block.map = new THREE.TextureLoader().load('res/bag.png');
        var material = new THREE.MeshLambertMaterial({
            map : block.map
        });
        block.glowMap = new THREE.TextureLoader().load('res/glow_bag.png');
        block.hitObj = new THREE.Mesh(geometry, material);
    } else if (type == 16) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/dict.png')
        });
        Block.mapUv(428, 428, geometry, 1, 0, 148, 280, 0);
        Block.mapUv(428, 428, geometry, 2, 0, 148, 280, 428); // top
        Block.mapUv(428, 428, geometry, 4, 280, 148, 428, 428); // right
        block.hitObj = new THREE.Mesh(geometry, material);
    } else if (type == 17) {
        block.height /= 3;
        var topMaterial = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/box_top.png')
        });
        var bottomMaterial = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/box_bottom.png')
        });
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        block.geometry = geometry;
        var middleGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        var materials = [ topMaterial, bottomMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.mapUv(198, 198, geometry, 1, 0, 0, 148, 50);
        Block.mapUv(198, 198, geometry, 2, 0, 50, 148, 198); // top
        Block.mapUv(198, 198, geometry, 4, 148, 50, 198, 198); // right

        Block.mapUv(444, 50, middleGeometry, 4, 148, 0, 296, 50, true);
        Block.mapUv(444, 50, middleGeometry, 1, 0, 0, 148, 50);
        Block.mapUv(444, 50, middleGeometry, 2, 0, 0, 1, 1); // top
        Block.mapUv(444, 50, middleGeometry, 0, 296, 50, 444, 0);
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, middleGeometry, 1, [ {
            x : 0,
            y : -2 * block.height,
            z : 0
        } ]);

        var middleMaterial = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/box_middle.png')
        });
        block.middle = new THREE.Mesh(middleGeometry, middleMaterial);
        block.middle.position.y = -block.height;
        block.body.add(block.middle);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 18) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/express.png')
        });
        Block.mapUv(428, 428, geometry, 1, 0, 0, 280, 148);
        Block.mapUv(428, 428, geometry, 2, 0, 148, 280, 428); // top
        Block.mapUv(428, 428, geometry, 4, 280, 148, 428, 428); // right
        block.hitObj = new THREE.Mesh(geometry, material);
    } else if (type == 19) {
        block.min = 0.9;
        block.height = _config.BLOCK.height / 21 * 4;
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height + 0.1, _config.BLOCK.radius * 2);
        block.geometry = geometry;
        var material = new THREE.MeshLambertMaterial({
            color : 0xffffff,
            transparent : true,
            opacity : 0.3
        });
        var bottomGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2.05, _config.BLOCK.height / 21 * 17,
                _config.BLOCK.radius * 2.05);
        var bottomMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/sing.png')
        });
        var materials = [ material, bottomMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.mapUv(416, 416, bottomGeometry, 1, 0, 0, 256, 160);
        Block.mapUv(416, 416, bottomGeometry, 2, 0, 160, 256, 416); // top
        Block.mapUv(416, 416, bottomGeometry, 4, 256, 160, 416, 416); // right
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -_config.BLOCK.height / 21 * 10.5,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
        block.record = new THREE.Object3D();

        block.record.add(new THREE.Mesh(new THREE.CylinderGeometry(_config.BLOCK.radius * 0.9,
                _config.BLOCK.radius * 0.9, 0.4, 50), new THREE.MeshBasicMaterial({
            color : 0x2c2c2c
        })));
        var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 0.9, 40);
        var planeMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/record.png')
        });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = 0.26;
        block.record.add(plane);
        block.body.add(block.record);
        var planeGeometry = new THREE.PlaneGeometry(2, 2);
        block.musicIcon = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/music_icon.png'),
            transparent : true
        }));
        block.musicIcon.position.set(0, 0, 0);
        block.musicIcon.rotation.y = -Math.PI / 4;
        block.musicIcon.rotation.x = -Math.PI / 5;
        block.musicIcon.rotation.z = -Math.PI / 5;
        block.musicIcon.visible = false;
        block.secondMusicIcon = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/music_icon_two.png'),
            transparent : true
        }));
        block.secondMusicIcon.rotation.y = -Math.PI / 4;
        block.secondMusicIcon.rotation.x = -Math.PI / 5;
        block.secondMusicIcon.rotation.z = -Math.PI / 5;
        block.secondMusicIcon.visible = false;
        block.icons = [];
        block.icons.push(block.musicIcon, block.secondMusicIcon);
        for (var i = 0; i < 2; ++i) {
            block.body.add(block.icons[i]);
        }
    } else if (type == 20) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2 / 38 * 48);
        block.geometry = geometry;
        block.shadow.scale.set(1, 61 / 38, 48 / 38);
        // block.shadow.position.z += ;
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/disk.png')
        });
        var darkMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/disk_dark.png'),
            transparent : true
        });
        var planeGeometry = new THREE.PlaneGeometry(3, 3);
        var materials = [ darkMaterial, material ];
        var totalGeometry = new THREE.Geometry();
        Block.mapUv(236, 300, geometry, 1, 0, 250, 10, 260);
        Block.mapUv(236, 300, geometry, 2, 0, 300, 236, 0); // top
        Block.mapUv(236, 300, geometry, 4, 0, 250, 10, 260); // right
        Block.merge(totalGeometry, geometry, 1, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, planeGeometry, 0, [ {
            x : 3.5,
            y : 0.5,
            z : _config.BLOCK.radius / 38 * 48 + 0.01
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
        block.plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/disk_light.png'),
            transparent : true
        }));
        block.plane.position.set(3.5, 0.5, _config.BLOCK.radius / 38 * 48 + 0.03);
        block.plane.updateMatrix();
        block.plane.matrixAutoUpdate = false;
        block.body.add(block.plane);
        block.timer = setInterval(function() {
            block.plane.visible = !block.plane.visible;
        }, 1000);
    } else if (type == 21) {
        block.radiusSegments = 50;
        block.min = 0.8;
        block.height = _config.BLOCK.height / 21 * 4;
        var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.7, _config.BLOCK.radius * 0.8, block.height,
                50);
        block.geometry = geometry;
        var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 0.7, 50);
        var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.7, _config.BLOCK.radius * 0.5,
                _config.BLOCK.height / 21 * 17, 50);
        var material = new THREE.MeshBasicMaterial({
            color : 0x4d4d4d
        });
        var planeMaterial = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/westore_desk.png')
        });
        var bottomMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/westore.png')
        });
        block.shadow.scale.set(0.55, 0.9, 0.7);
        var materials = [ material, bottomMaterial, planeMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        bottomGeometry.rotateY(2.3);
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -_config.BLOCK.height / 21 * 10.5,
            z : 0
        } ]);
        planeGeometry.rotateX(-Math.PI / 2);
        planeGeometry.rotateY(-0.7);
        Block.merge(totalGeometry, planeGeometry, 2, [ {
            x : 0,
            y : block.height / 2 + 0.01,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 22) {
        block.height = _config.BLOCK.height / 21 * 6;
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2.1, block.height, _config.BLOCK.radius * 2.1);
        block.geometry = geometry;
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/gift.png')
        });
        var bottomGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height / 21 * 15,
                _config.BLOCK.radius * 2);
        var bottomMaterial = new THREE.MeshLambertMaterial({
            color : 0xb193f5
        });
        Block.mapUv(300, 370, geometry, 1, 0, 0, 300, 70);
        Block.mapUv(300, 370, geometry, 2, 0, 70, 300, 370); // top
        Block.mapUv(300, 370, geometry, 4, 0, 0, 300, 70, true); // right
        var materials = [ material, bottomMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -_config.BLOCK.height / 21 * 10.5,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 23) {
        block.height = _config.BLOCK.height / 21 * 5;
        var geometry = new THREE.Geometry();
        var deskGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height,
                _config.BLOCK.radius * 2 / 38 * 40);
        geometry.merge(deskGeometry);
        block.shadow.scale.set(1, 48 / 38, 48 / 38);
        var legGeometry = new THREE.BoxGeometry(1.5, 3.5, 1.5);
        legGeometry.rotateZ(-0.3);
        legGeometry.vertices[7].y -= 0.4;
        legGeometry.vertices[6].y -= 0.4;
        legGeometry.translate(-4, -3, -3.5);
        geometry.merge(legGeometry);
        legGeometry.vertices[6].y += 0.5;
        legGeometry.translate(0, 0, 7);
        legGeometry.rotateX(-0.2);
        geometry.merge(legGeometry);
        legGeometry.vertices[7].y += 0.4;
        legGeometry.translate(5, -1, 0);
        legGeometry.rotateZ(0.4);
        geometry.merge(legGeometry);
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/stool.png')
        });
        block.hitObj = new THREE.Mesh(geometry, material);
        block.shadow = new THREE.Mesh(new THREE.PlaneGeometry(block.shadowWidth, block.shadowWidth),
                new THREE.MeshBasicMaterial({
                    map : new THREE.TextureLoader().load('res/stool_shadow.png'),
                    transparent : true,
                    alphaTest : 0.01
                }));
        block.shadow.position.set(-0.76, -_config.BLOCK.height / 2 - 0.001 * type, -3.6);
        block.shadow.scale.y = 1.4;
        block.shadow.scale.x = 0.9;
        block.shadow.rotation.x = -Math.PI / 2;
    } else if (type == 24) {
        block.height = _config.BLOCK.height / 21 * 6;
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 / 38 * 45, block.height,
                _config.BLOCK.radius * 2 / 38 * 45);
        block.geometry = geometry;
        var bottomGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 / 38 * 40, _config.BLOCK.height / 21 * 15,
                _config.BLOCK.radius * 2 / 38 * 40);
        block.shadow.scale.set(40 / 38, 1.4, 1);
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/store_top.png')
        });
        var bottomMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/store_bottom.png'),
            transparent : true
        });
        var planeMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/indoor.png'),
            transparent : true
        });
        var materials = [ material, bottomMaterial, planeMaterial ];
        var planeGeometry = new THREE.PlaneGeometry(3.1, 3.1);
        var totalGeometry = new THREE.Geometry();
        Block.mapUv(340, 340, geometry, 1, 0, 0, 280, 60);
        Block.mapUv(340, 340, geometry, 2, 0, 60, 280, 340); // top
        Block.mapUv(340, 340, geometry, 4, 280, 60, 340, 340); // right
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        Block.mapUv(434, 164, bottomGeometry, 1, 0, 0, 217, 164);
        Block.mapUv(434, 164, bottomGeometry, 4, 217, 0, 434, 164, true); // right
        Block.merge(totalGeometry, bottomGeometry, 1, [ {
            x : 0,
            y : -_config.BLOCK.height / 21 * 10.5,
            z : 0
        } ]);
        planeGeometry.rotateY(-Math.PI / 2);
        Block.merge(totalGeometry, planeGeometry, 2, [ {
            x : -_config.BLOCK.radius / 38 * 40 - 0.01,
            y : -3.3,
            z : -2.5
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
        var doorGeometry = new THREE.PlaneGeometry(1.55, 3.1);
        block.door = new THREE.Mesh(doorGeometry, new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/door.png'),
            transparent : true
        }));
        block.door.rotation.y = -Math.PI / 2;
        block.door.position.set(-_config.BLOCK.radius / 38 * 40 - 0.02, -3.3, -3.3);
        block.body.add(block.door);
        block.secondDoor = new THREE.Mesh(doorGeometry, new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/second_door.png'),
            transparent : true
        }));
        block.secondDoor.rotation.y = -Math.PI / 2;
        block.secondDoor.position.set(-_config.BLOCK.radius / 38 * 40 - 0.02, -3.3, -1.7);
        block.body.add(block.secondDoor);
        // block.shadow.position.x += 0.6;
        // block.shadow.position.z += 1;
    } else if (type == 25) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        block.geometry = geometry;
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/clock.png')
        });
        Block.mapUv(320, 200, geometry, 1, 0, 0, 5, 5);
        Block.mapUv(320, 200, geometry, 2, 0, 0, 5, 5); // top
        Block.mapUv(320, 200, geometry, 4, 0, 200, 320, 0, true); // right
        var buttonMaterial = stripeMaterial;
        var buttonGeometry = new THREE.CylinderGeometry(1, 1, 1, 30);
        var materials = [ material, buttonMaterial ];
        var totalGeometry = new THREE.Geometry();
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        buttonGeometry.rotateZ(Math.PI / 2);
        Block.merge(totalGeometry, buttonGeometry, 1, [ {
            x : -_config.BLOCK.radius - 0.5,
            y : 0,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
        block.plane = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/point.png'),
            transparent : true
        }));
        block.plane.position.set(0, 0, _config.BLOCK.radius + 0.04);
        block.body.add(block.plane);
        block.timer = setInterval(function() {
            block.plane.visible = !block.plane.visible;
        }, 1000);
        block.numbers = [];
        var numberGeometry = new THREE.PlaneGeometry(3, 3);
        for (var i = 0; i < 10; ++i) {
            var clockNumberMaterial = new THREE.MeshBasicMaterial({
                map : new THREE.TextureLoader().load('res/' + i + '.png'),
                alphaTest : 0.5
            });
            var arr = [];
            for (var j = 0; j < 4; ++j) {
                var time = new THREE.Mesh(numberGeometry, clockNumberMaterial);
                time.position.z = _config.BLOCK.radius + 0.01;
                time.visible = false;
                arr.push(time);
                block.body.add(time);
            }
            block.numbers.push(arr);
        }
        var date = new Date();
        var hour = ('0' + date.getHours()).slice(-2);
        var minute = ('0' + date.getMinutes()).slice(-2);
        block.numbers[hour[0]][0].position.x = -3.2 * block.radiusScale;
        block.numbers[hour[0]][0].visible = true;
        block.numbers[hour[1]][1].position.x = -1.3 * block.radiusScale;
        block.numbers[hour[1]][1].visible = true;
        block.numbers[minute[0]][2].position.x = 1.3 * block.radiusScale;
        block.numbers[minute[0]][2].visible = true;
        block.numbers[minute[1]][3].position.x = 3.2 * block.radiusScale;
        block.numbers[minute[1]][3].visible = true;
    } else if (type == 26) {
        var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, block.height, _config.BLOCK.radius * 2);
        var material = new THREE.MeshLambertMaterial({
            map : new THREE.TextureLoader().load('res/well.png')
        });
        Block.mapUv(280, 428, geometry, 1, 0, 0, 280, 148);
        Block.mapUv(280, 428, geometry, 2, 0, 148, 280, 428); // top
        Block.mapUv(280, 428, geometry, 4, 0, 0, 280, 148, true); // right
        block.hitObj = new THREE.Mesh(geometry, material);
    } else if (type == 27) {
        block.radiusSegments = 50;
        var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 2 / 38 * 25,
                _config.BLOCK.radius * 2 / 38 * 25, block.height, 50);
        block.geometry = geometry;
        block.shadow.scale.set(50 / 38, 50 / 38, 50 / 38);
        var material = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/golf_bottom.png')
        });
        var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 2 / 38 * 25 + 0.01, 30);
        var planeMaterial = new customMaterial({
            map : new THREE.TextureLoader().load('res/golf_top.png')
        });
        var totalGeometry = new THREE.Geometry();
        var materials = [ material, planeMaterial ];
        geometry.rotateY(3);
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        planeGeometry.rotateX(-Math.PI / 2);
        planeGeometry.rotateY(-0.7);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : 0,
            y : block.height / 2 + 0.01,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
        block.sphere = new THREE.Mesh(new THREE.SphereGeometry(0.6, 10, 10), block.whiteMaterial);
        block.sphere.position.set(-8, -1, -1.5);
        block.obj.add(block.sphere);
    } else if (type == 28) {
        block.radiusSegments = 50;
        var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 2 / 38 * 15,
                _config.BLOCK.radius * 2 / 38 * 15, block.height, 50);
        block.geometry = geometry;
        block.shadow.scale.set(30 / 38, 30 / 38, 30 / 38);
        var material = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/paper_bottom.png')
        });
        var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 2 / 38 * 15 + 0.01, 30);
        var planeMaterial = new customMaterial({
            map : new THREE.TextureLoader().load('res/paper_top.png')
        });
        var totalGeometry = new THREE.Geometry();
        var materials = [ material, planeMaterial ];
        geometry.rotateY(4);
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        planeGeometry.rotateX(-Math.PI / 2);
        planeGeometry.rotateY(-0.7);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : 0,
            y : block.height / 2 + 0.01,
            z : 0
        } ]);
        block.shadow.scale.y = 1.1;
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
    } else if (type == 29) {
        block.radiusSegments = 50;
        block.min = 0.8;
        block.height = _config.BLOCK.height / 21 * 4;
        var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.4, _config.BLOCK.radius * 0.4, block.height,
                50);
        block.geometry = geometry;
        var material = stripeMaterial;
        var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 0.4, 50);
        var planeMaterial = new THREE.MeshBasicMaterial({
            color : 0xffffff
        });
        var middleGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.4, _config.BLOCK.radius * 0.5,
                _config.BLOCK.height / 21 * 1, 50);
        var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.5, _config.BLOCK.radius * 0.5,
                _config.BLOCK.height / 21 * 16, 50);
        var bottomMaterial = new THREE.MeshBasicMaterial({
            map : new THREE.TextureLoader().load('res/medicine.png')
        });
        var totalGeometry = new THREE.Geometry();
        var materials = [ material, planeMaterial, bottomMaterial ];
        Block.merge(totalGeometry, geometry, 0, [ {
            x : 0,
            y : 0,
            z : 0
        } ]);
        planeGeometry.rotateX(-Math.PI / 2);
        Block.merge(totalGeometry, planeGeometry, 1, [ {
            x : 0,
            y : block.height / 2 + 0.01,
            z : 0
        } ]);
        Block.merge(totalGeometry, middleGeometry, 1, [ {
            x : 0,
            y : -_config.BLOCK.height / 21 * 2.5,
            z : 0
        } ]);
        bottomGeometry.rotateY(2.3);
        Block.merge(totalGeometry, bottomGeometry, 2, [ {
            x : 0,
            y : -_config.BLOCK.height / 21 * 11,
            z : 0
        } ]);
        block.hitObj = new THREE.Mesh(totalGeometry, materials);
        block.shadow.scale.set(0.55, 0.9, 0.7);

    } else if (type == -1) {
        var color = [ 0xee6060, 0xe4965e, 0xefbf57, 0x8ab34e, 0x71b4c4, 0x637cbd, 0xa461d4 ];
        var geometry = biggerGeometry;
        var material = new THREE.MeshLambertMaterial({
            color : color[number],
            transparent : true
        });
        block.hitObj = new THREE.Mesh(geometry, material);
        var grayGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height,
                _config.BLOCK.radius * 2);
        Block.mapUv(100, 88, grayGeometry, 2, 0, 0, 5, 5);
        var gray = new THREE.Mesh(grayGeometry, _config.grayMaterial);
        if (number == 0)
            gray.receiveShadow = true;
        block.body.add(gray);
        var planeGeometry = new THREE.PlaneGeometry(4, 8);
        var x1, y1, x2, y2;
        x1 = 64 * (number % 4);
        x2 = x1 + 64;
        y1 = parseInt(number / 4) * 128;
        y2 = y1 + 128;
        Block.mapUv(256, 256, planeGeometry, 0, x1, y2, x2, y1);
        var plane = new THREE.Mesh(planeGeometry, _config.numberMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.rotation.z = -Math.PI / 2;
        plane.position.y = _config.BLOCK.height / 2 + 0.05;
        block.body.add(plane);
        block.obj.scale.set(0.7, 1, 0.7);
    } else {
    }
    block.shadow.initZ = block.shadow.position.z;
    block.hitObj.receiveShadow = true;
    block.hitObj.name = 'hitObj';
    block.body.add(block.hitObj);
    block.hitObj.matrixAutoUpdate = false;
    block.shadow.initScale = block.shadow.scale.y;
    block.body.position.y = _config.BLOCK.height / 2 - block.height / 2;
    block.obj.add(block.shadow);
    block.obj.add(block.body);
    return block;
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

Block.mapUv = function(textureWidth, textureHeight, geometry, faceIdx, x1, y1, x2, y2, flag) {
    var tileUvW = 1 / textureWidth;
    var tileUvH = 1 / textureHeight;
    if (geometry.faces[faceIdx] instanceof THREE.Face3) {
        var UVs = geometry.faceVertexUvs[0][faceIdx * 2];
        if (faceIdx == 4 && !flag) {
            UVs[0].x = x1 * tileUvW;
            UVs[0].y = y1 * tileUvH;
            UVs[2].x = x1 * tileUvW;
            UVs[2].y = y2 * tileUvH;
            UVs[1].x = x2 * tileUvW;
            UVs[1].y = y1 * tileUvH;
        } else {
            UVs[0].x = x1 * tileUvW;
            UVs[0].y = y1 * tileUvH;
            UVs[1].x = x1 * tileUvW;
            UVs[1].y = y2 * tileUvH;
            UVs[2].x = x2 * tileUvW;
            UVs[2].y = y1 * tileUvH;
        }
        var UVs = geometry.faceVertexUvs[0][faceIdx * 2 + 1];
        if (faceIdx == 4 && !flag) {
            UVs[2].x = x1 * tileUvW;
            UVs[2].y = y2 * tileUvH;
            UVs[1].x = x2 * tileUvW;
            UVs[1].y = y2 * tileUvH;
            UVs[0].x = x2 * tileUvW;
            UVs[0].y = y1 * tileUvH;
        } else {
            UVs[0].x = x1 * tileUvW;
            UVs[0].y = y2 * tileUvH;
            UVs[1].x = x2 * tileUvW;
            UVs[1].y = y2 * tileUvH;
            UVs[2].x = x2 * tileUvW;
            UVs[2].y = y1 * tileUvH;
        }
    }
};
Block.getBox = function() {
    if (this.boundingBox)
        return this.boundingBox;
    this.boundingBox = new THREE.Box3().setFromObject(this.body);
    return this.boundingBox;
};
Block.glow = function(block) {
    block.hitObj.material.map = block.glowMap;
};
Block.openDoor = function(block) {
    customAnimation.to(block.door.position, 1, {
        z : -4.5
    });
    customAnimation.to(block.secondDoor.position, 1, {
        z : -0.5
    });
};
Block.closeDoor = function(block) {
    customAnimation.to(block.door.position, 1, {
        z : -3.3
    });
    customAnimation.to(block.secondDoor.position, 1, {
        z : -1.7
    });
};
Block.rotateBox = function(block) {
    customAnimation.to(block.middle.rotation, 0.5, {
        y : -Math.PI / 2
    });
};
Block.change = function(block, radius, t, radiusScale) {
    if (!block.canChange) {
        return;
    }
    if (block.order >= 9) {
        var min = block.order >= 13 ? 0.7 : 0.6;
        block.radiusScale = radiusScale
                || Math.max(Math.random() * (_config.BLOCK.maxRadiusScale - _config.BLOCK.minRadiusScale)
                        + _config.BLOCK.minRadiusScale, this.min || min);
        block.radiusScale = +block.radiusScale.toFixed(2);
        block.radius = radius || block.radiusScale * _config.BLOCK.radius;
        block.radius = +block.radius.toFixed(2);
        block.obj.scale.set(block.radiusScale, 1, block.radiusScale);
        if (block.order == 27) {
            block.sphere.scale.set(1 / block.radiusScale, 1, 1 / block.radiusScale);
            block.sphere.updateMatrix();
        }
        // this.plane.scale.z = this.radiusScale;
        return;
    }
    block.radiusScale = radiusScale || Math.random() * (_config.BLOCK.maxRadiusScale - _config.BLOCK.minRadiusScale)
            + _config.BLOCK.minRadiusScale;
    block.radiusScale = +block.radiusScale.toFixed(2);
    block.radius = radius || block.radiusScale * _config.BLOCK.radius;
    block.radius = +block.radius.toFixed(2);
    block.obj.scale.set(block.radiusScale, 1, block.radiusScale);
    Block.changeColor(block, t);
};
Block.changeColor = function(block, t) {
    var type = t || block.types[Math.floor(Math.random() * 3)];
    if (block.type != type) {
        block.type = type;
        if (type == 'green') {
            block.greenMaterial.color.setHex(colors.green);
            block.whiteMaterial.color.setHex(colors.white);
            if (block.middleLightGreenMaterial) {
                block.middleLightGreenMaterial.color.setHex(colors.middleLightGreen);
            }
        } else if (type == 'gray') {
            block.greenMaterial.color.setHex(colors.white);
            block.whiteMaterial.color.setHex(colors.gray);
            if (block.middleLightGreenMaterial) {
                block.middleLightGreenMaterial.color.setHex(colors.middleLightGray);
            }
        } else if (type == 'black') {
            block.greenMaterial.color.setHex(colors.black);
            block.whiteMaterial.color.setHex(colors.lightBlack);
            if (block.middleLightGreenMaterial) {
                block.middleLightGreenMaterial.color.setHex(colors.middleLightBlack);
            }
        }
    }
};
Block.getVertices = function() {
    var _this3 = this;

    // this.hitObj.updateMatrixWorld();
    var vertices = [];
    var geometry = this.geometry || this.hitObj.geometry;
    if (this.radiusSegments === 4) {
        [ 0, 1, 4, 5 ].forEach(function(index) {
            var vertice = geometry.vertices[index].clone().applyMatrix4(_this3.hitObj.matrixWorld);
            vertices.push([ vertice.x, vertice.z ]);
        });
    } else {
        for (var i = 0; i < this.radiusSegments; ++i) {
            var vertice = geometry.vertices[i].clone().applyMatrix4(this.hitObj.matrixWorld);
            vertices.push([ vertice.x, vertice.z ]);
        }
    }
    return vertices;
};
Block.shrink = function() {
    game.current.status = 'shrink';
};
Block._shrink = function() {
    game.current.scale -= _config.BLOCK.reduction;
    game.current.scale = Math.max(_config.BLOCK.minScale, game.current.scale);
    if (game.current.scale <= _config.BLOCK.minScale) {
        game.current.status = 'stop';
        return;
    }
    game.current.body.scale.y = game.current.scale;
    game.current.shadow.scale.y -= _config.BLOCK.reduction / 2;
    game.current.shadow.position.z += _config.BLOCK.reduction / 4 * game.current.shadowWidth;
    var distance = _config.BLOCK.reduction / 2 * _config.BLOCK.height
            * (_config.BLOCK.height - game.current.height / 2) / _config.BLOCK.height * 2;
    game.current.body.position.y -= distance;
};
Block.showup = function(i) {
    var shadowZ = this.shadow.position.z;
    this.body.position.set(0, 20, 0);
    this.shadow.position.z = -15;
    this.obj.visible = true;
    if (i == 3 || i == 4 || i == 6) {
        this.obj.position.set((i == 6 ? 5 : 3) * 7.5, 0, (i == 3 || i == 6 ? -1 : 1) * 3.8);
    } else if (i == 5) {
        this.obj.position.set(4 * 7.5, 0, 0);
    } else {
        this.obj.position.set(i * 7.5, 0, 0);
    }
    // TweenMax.to(this.obj.position, 0.5, { ease: Bounce.easeOut, y: 0
    // });
    _animation.TweenAnimation(this.body.position.y, _config.BLOCK.height / 2 - this.height / 2, 500, 'Bounce.easeOut',
            function(value, complete) {
                this.body.position.y = value;
            }.bind(this));
    _animation.TweenAnimation(this.shadow.position.z, shadowZ, 500, 'Bounce.easeOut', function(value, complete) {
        this.shadow.position.z = value;
    }.bind(this));
};
Block.hideGlow = function() {
    this.hitObj.material.map = this.map;
};
Block.popup = function() {
    // this.status = 'popup';
    if (this.order == 15) {
        this.hideGlow();
    } else if (this.order == 25) {
        for (var i = 0; i < 10; ++i) {
            for (var j = 0; j < 4; ++j) {
                this.numbers[i][j].visible = false;
            }
        }
        var date = new Date();
        var hour = ('0' + date.getHours()).slice(-2);
        var minute = ('0' + date.getMinutes()).slice(-2);
        this.numbers[hour[0]][0].position.x = -3.1 * this.radiusScale;
        this.numbers[hour[0]][0].visible = true;
        this.numbers[hour[1]][1].position.x = -1.2 * this.radiusScale;
        this.numbers[hour[1]][1].visible = true;
        this.numbers[minute[0]][2].position.x = 1.2 * this.radiusScale;
        this.numbers[minute[0]][2].visible = true;
        this.numbers[minute[1]][3].position.x = 3.1 * this.radiusScale;
        this.numbers[minute[1]][3].visible = true;
    } else if (this.order == 17) {
        this.middle.rotation.y = 0;
    }
    var shadowZ = this.shadow.position.z;
    this.body.position.y = 20;
    this.shadow.position.z = -15;
    this.obj.visible = true;
    this.boundingBox = null;
    _animation.customAnimation.to(this.body.position, 0.5, {
        y : _config.BLOCK.height / 2 - this.height / 2,
        ease : 'Bounce.easeOut'
    });
    _animation.customAnimation.to(this.shadow.position, 0.5, {
        z : shadowZ,
        ease : 'Bounce.easeOut'
    });
};
Block.reset = function() {
    this.status = 'stop';
    this.scale = 1;
    this.obj.scale.y = 1;
    this.body.scale.y = 1;
    this.obj.position.y = 0;
    this.body.position.y = _config.BLOCK.height / 2 - this.height / 2;
    this.shadow.scale.y = this.shadow.initScale;
    this.shadow.position.z = this.shadow.initZ;
    this.boundingBox = null;
};
Block.rebound = function() {
    game.current.status = 'stop';
    game.current.scale = 1;
    customAnimation.to(game.current.body.scale, 0.5, {
        ease : 'Elastic.easeOut',
        y : 1
    });
    customAnimation.to(game.current.body.position, 0.5, {
        ease : 'Elastic.easeOut',
        y : _config.BLOCK.height / 2 - game.current.height / 2
    });

    customAnimation.to(game.current.shadow.scale, 0.5, {
        ease : 'Elastic.easeOut',
        y : game.current.shadow.initScale
    });
    customAnimation.to(game.current.shadow.position, 0.5, {
        ease : 'Elastic.easeOut',
        z : game.current.shadow.initZ
    });
};
Block.update = function() {
    if (game.current.order == 19) {
        game.current.record.rotation.y += 0.01;
    }
    if (currentStatus != statusDefine['press'])
        return;
    if (game.current.status === 'shrink') {
        Block._shrink();
    } else if (game.current.status === 'popup') {
    }
};

Block.pool = [];
Block.poolInit = function() {
    for (var i = 2; i < 96; i++) {
//        Block.pool.push(Block(21));
        Block.pool.push(Block(Math.floor(Math.random() * 30)));
    }
    shuffleArray(Block.pool);
};
Block.first = Block(0);
Block.change(Block.first, null, null, 1);
Block.second = Block(1);
Block.change(Block.second, null, null, 1);
Block.poolInit();
Block.next = function() {
    var b = Block.pool.pop();
    Block.change(b);
    return b;
};
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

Block.egg = function(block) {
    if (block.order == 19) {
        audio.delay('sing', 2000);
    } else if (block.order == 24) {
        function callback() {
            Block.closeDoor(block);
        }
        function e() {
            Block.openDoor(game.current);
            audio.begin('store', callback);
        }
        window.setTimeout(e, 2000);
    } else if (block.order == 26) {
        audio.delay('water', 2000);
    } else if (block.order == 17) {
        Block.rotateBox(block);
    } else if (block.order == 15) {
        Block.glow(block);
    }
};
Block.eggEnd = function(block) {
    if (block.order == 19) {
        audio.end('sing');
    } else if (block.order == 24) {
        audio.end('store');
    } else if (block.order == 26) {
        audio.end('water');
    }
};