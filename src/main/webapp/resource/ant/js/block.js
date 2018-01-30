
var colors = {
    green: 0x619066,
    white: 0xeeeeee,
    lightGreen: 0x7ba980,
    gray: 0x9e9e9e,
    black: 0x6d6d6d,
    lightGray: 0xdbdbdb,
    lightBlack: 0xcbcbcb,
    brown: 0x676767,
    middleLightGreen: 0x774a379,
    middleLightGray: 0xbbbbbb,
    middleLightBlack: 0x888888
};

var biggerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 + 0.02, _config.BLOCK.height + 0.04, _config.BLOCK.radius * 2 + 0.02);
var staticGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height, _config.BLOCK.radius * 2);
var shadowGeometry = new THREE.PlaneGeometry(11, 11);
var stripeMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/stripe.png') });
var customMaterial = _config.GAME.canShadow ? THREE.MeshLambertMaterial : THREE.MeshBasicMaterial;

var Block = function () {
    var Block=function(type, number) {
        var _this = this;

        this.radius = _config.BLOCK.radius;
        this.status = 'stop';
        this.scale = 1;
        this.type = 'green';
        this.types = ['green', 'black', 'gray'];
        this.radiusScale = 1;
        this.obj = new THREE.Object3D();
        this.obj.name = 'block';
        this.body = new THREE.Object3D();
        if (type <= 8 || type == 27) {
            this.greenMaterial = new THREE.MeshLambertMaterial({ color: colors.green });
            this.whiteMaterial = new THREE.MeshLambertMaterial({ color: colors.white });
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
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            var innerHeight = 3;
            var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
            var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
            this.geometry = outerGeometry;
            var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
            this.merge(totalGeometry, outerGeometry, 0, [{ x: 0, y: -innerHeight / 2 - outerHeight / 2, z: 0 }, { x: 0, y: innerHeight / 2 + outerHeight / 2, z: 0 }]);
            this.merge(totalGeometry, innerGeometry, 1, [{ x: 0, y: 0, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 1) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            var bottomHeight = _config.BLOCK.height / 5;
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, bottomHeight, _config.BLOCK.radius * 2);
            this.geometry = geometry;
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }, { x: 0, y: -2 * bottomHeight, z: 0 }, { x: 0, y: 2 * bottomHeight, z: 0 }]);
            this.merge(totalGeometry, geometry, 1, [{ x: 0, y: -bottomHeight, z: 0 }, { x: 0, y: bottomHeight, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 2) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            this.radiusSegments = 50;
            var bottomHeight = 5;
            var topHeight = _config.BLOCK.height - bottomHeight;
            var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius - 4, _config.BLOCK.radius - 2, bottomHeight, 50);
            var topGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, topHeight, 50);
            this.geometry = topGeometry;
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -(_config.BLOCK.height - bottomHeight) / 2, z: 0 }]);
            this.merge(totalGeometry, topGeometry, 0, [{ x: 0, y: bottomHeight + topHeight / 2 - _config.BLOCK.height / 2, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 3) {
            this.radiusSegments = 50;
            this.middleLightGreenMaterial = new THREE.MeshLambertMaterial({ color: colors.middleLightGreen });
            var materials = [this.greenMaterial, this.whiteMaterial, this.middleLightGreenMaterial];
            var totalGeometry = new THREE.Geometry();
            var bottomHeight = 5;
            var topHeight = _config.BLOCK.height - bottomHeight;
            var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, bottomHeight, 50);
            var topGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, topHeight, 50);
            this.geometry = topGeometry;
            var ringGeometry = new THREE.RingGeometry(_config.BLOCK.radius * 0.6, _config.BLOCK.radius * 0.8, 30);
            ringGeometry.rotateX(-Math.PI / 2);
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -(_config.BLOCK.height - bottomHeight) / 2, z: 0 }]);
            this.merge(totalGeometry, topGeometry, 0, [{ x: 0, y: bottomHeight + topHeight / 2 - _config.BLOCK.height / 2, z: 0 }]);
            this.merge(totalGeometry, ringGeometry, 2, [{ x: 0, y: _config.BLOCK.height / 2 + 0.01, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 4) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            var geometry = staticGeometry;
            this.geometry = geometry;
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            var ringGeometry = new THREE.RingGeometry(1, 2, 30, 1);
            this.merge(totalGeometry, ringGeometry, 1, [{ x: 0, y: 0, z: _config.BLOCK.radius + 0.01 }]);
            ringGeometry.rotateY(-Math.PI / 2);
            this.merge(totalGeometry, ringGeometry, 1, [{ x: -_config.BLOCK.radius - 0.01, y: 0, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 5) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            var innerHeight = 3;
            var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
            var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
            var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
            this.merge(totalGeometry, outerGeometry, 0, [{ x: 0, y: -innerHeight / 2 - outerHeight / 2, z: 0 }, { x: 0, y: innerHeight / 2 + outerHeight / 2, z: 0 }]);
            this.merge(totalGeometry, innerGeometry, 1, [{ x: 0, y: 0, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 6) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            var innerHeight = 3;
            var outerHeight = (_config.BLOCK.height - innerHeight) / 2;
            var outerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, outerHeight, _config.BLOCK.radius * 2);
            var innerGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, innerHeight, _config.BLOCK.radius * 2);
            this.merge(totalGeometry, outerGeometry, 0, [{ x: 0, y: -innerHeight / 2 - outerHeight / 2, z: 0 }, { x: 0, y: innerHeight / 2 + outerHeight / 2, z: 0 }]);
            this.merge(totalGeometry, innerGeometry, 1, [{ x: 0, y: 0, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 7) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            this.radiusSegments = 50;
            var bottomHeight = 5;
            var topHeight = _config.BLOCK.height - bottomHeight;
            var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius - 4, _config.BLOCK.radius - 2, bottomHeight, 50);
            var topGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius, _config.BLOCK.radius, topHeight, 50);
            this.geometry = topGeometry;
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -(_config.BLOCK.height - bottomHeight) / 2, z: 0 }]);
            this.merge(totalGeometry, topGeometry, 0, [{ x: 0, y: bottomHeight + topHeight / 2 - _config.BLOCK.height / 2, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 8) {
            var materials = [this.greenMaterial, this.whiteMaterial];
            var totalGeometry = new THREE.Geometry();
            var bottomHeight = _config.BLOCK.height / 5;
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, bottomHeight, _config.BLOCK.radius * 2);
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }, { x: 0, y: -2 * bottomHeight, z: 0 }, { x: 0, y: 2 * bottomHeight, z: 0 }]);
            this.merge(totalGeometry, geometry, 1, [{ x: 0, y: -bottomHeight, z: 0 }, { x: 0, y: bottomHeight, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 9) {
            var pinkMaterial = new THREE.MeshLambertMaterial({ color: 0xed7c38 });
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/game.png'),
                transparent: true
            });
            var materials = [pinkMaterial, planeMaterial];
            var totalGeometry = new THREE.Geometry();
            var geometry = staticGeometry;
            this.geometry = geometry;
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, new THREE.PlaneGeometry(5, 5), 1, [{ x: 0, y: 0.1, z: _config.BLOCK.radius + 0.01 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 10) {
            var yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xfbe65e });
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/emotion.png'),
                transparent: true
            });
            var materials = [yellowMaterial, planeMaterial];
            var totalGeometry = new THREE.Geometry();
            var geometry = staticGeometry;
            var faceGeometry = new THREE.CylinderGeometry(2, 2, 1, 50);
            var planeGeometry = new THREE.PlaneGeometry(1.5, 1.5);
            this.geometry = geometry;
            // var yellowLambertMaterial = new THREE.MeshLambertMaterial({
            // color: 0xfbe65e });
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            faceGeometry.rotateX(Math.PI / 2);
            this.merge(totalGeometry, faceGeometry, 0, [{ x: 0, y: 0, z: _config.BLOCK.radius + 0.51 }]);
            faceGeometry.rotateZ(Math.PI / 2);
            faceGeometry.rotateY(Math.PI / 2);
            this.merge(totalGeometry, faceGeometry, 0, [{ x: -_config.BLOCK.radius - 0.51, y: 0, z: 0 }]);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: 0, y: 0, z: _config.BLOCK.radius + 1.02 }]);
            planeGeometry.rotateY(-Math.PI / 2);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: -_config.BLOCK.radius - 1.02, y: 0, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 11) {
            var geometry = staticGeometry;
            var earGeometry = new THREE.BoxGeometry(3, 2, 4);
            this.geometry = geometry;
            var greenMaterial = new THREE.MeshLambertMaterial({ color: 0xb4e842 });
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/green_face.png'),
                transparent: true
            });
            var planeGeometry = new THREE.PlaneGeometry(6, 3);
            var materials = [greenMaterial, planeMaterial];
            var totalGeometry = new THREE.Geometry();
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: 0.5, y: -1, z: _config.BLOCK.radius + 0.01 }]);
            earGeometry.rotateZ(Math.PI / 5);
            this.merge(totalGeometry, earGeometry, 0, [{ x: -_config.BLOCK.radius - 1, y: 1, z: 2.5 }]);
            earGeometry.rotateZ(-2 * Math.PI / 5);
            this.merge(totalGeometry, earGeometry, 0, [{ x: _config.BLOCK.radius, y: 1, z: 2.5 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 12) {
            var geometry = staticGeometry;
            var earGeometry = new THREE.BoxGeometry(3, 2, 4);
            this.geometry = geometry;
            var greenMaterial = new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
            var planeMaterial = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/white_face.png')
            });
            var planeGeometry = new THREE.PlaneGeometry(6, 3);
            var materials = [greenMaterial, planeMaterial];
            var totalGeometry = new THREE.Geometry();
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: 0.5, y: -1, z: _config.BLOCK.radius + 0.01 }]);
            earGeometry.rotateZ(Math.PI / 5);
            this.merge(totalGeometry, earGeometry, 0, [{ x: -_config.BLOCK.radius - 1, y: 1, z: 2.5 }]);
            earGeometry.rotateZ(-2 * Math.PI / 5);
            this.merge(totalGeometry, earGeometry, 0, [{ x: _config.BLOCK.radius, y: 1, z: 2.5 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 13) {
            var geometry = staticGeometry;
            this.geometry = geometry;
            var planeMaterial = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/money.png')
            });
            var planeGeometry = new THREE.PlaneGeometry(3, 3);
            var materials = [planeMaterial];
            var totalGeometry = new THREE.Geometry();
            this.mapUv(64, 64, geometry, 1, 2, 2, 4, 4);
            this.mapUv(64, 64, geometry, 2, 2, 2, 4, 4);
            this.mapUv(64, 64, geometry, 4, 2, 2, 4, 4);
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, planeGeometry, 0, [{ x: 0, y: 0, z: _config.BLOCK.radius + 0.01 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 14) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            this.geometry = geometry;
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/tit.png')
            });
            this.mapUv(310, 310, geometry, 1, 0, 0, 200, 110);
            this.mapUv(310, 310, geometry, 2, 0, 110, 200, 310); // top
            this.mapUv(310, 310, geometry, 4, 200, 110, 310, 310); // right

            this.hitObj = new THREE.Mesh(geometry, material);
        } else if (type == 15) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            this.map = _config.loader.load('res/bag.png');
            var material = new THREE.MeshLambertMaterial({
                map: this.map
            });
            this.glowMap = _config.loader.load('res/glow_bag.png');
            this.hitObj = new THREE.Mesh(geometry, material);
        } else if (type == 16) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/dict.png')
            });
            this.mapUv(428, 428, geometry, 1, 0, 148, 280, 0);
            this.mapUv(428, 428, geometry, 2, 0, 148, 280, 428); // top
            this.mapUv(428, 428, geometry, 4, 280, 148, 428, 428); // right
            this.hitObj = new THREE.Mesh(geometry, material);
        } else if (type == 17) {
            this.height /= 3;
            var topMaterial = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/box_top.png')
            });
            var bottomMaterial = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/box_bottom.png')
            });
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            this.geometry = geometry;
            var middleGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            var materials = [topMaterial, bottomMaterial];
            var totalGeometry = new THREE.Geometry();
            this.mapUv(198, 198, geometry, 1, 0, 0, 148, 50);
            this.mapUv(198, 198, geometry, 2, 0, 50, 148, 198); // top
            this.mapUv(198, 198, geometry, 4, 148, 50, 198, 198); // right

            this.mapUv(444, 50, middleGeometry, 4, 148, 0, 296, 50, true);
            this.mapUv(444, 50, middleGeometry, 1, 0, 0, 148, 50);
            this.mapUv(444, 50, middleGeometry, 2, 0, 0, 1, 1); // top
            this.mapUv(444, 50, middleGeometry, 0, 296, 50, 444, 0);
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, middleGeometry, 1, [{ x: 0, y: -2 * this.height, z: 0 }]);

            var middleMaterial = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/box_middle.png')
            });
            this.middle = new THREE.Mesh(middleGeometry, middleMaterial);
            this.middle.position.y = -this.height;
            this.body.add(this.middle);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 18) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/express.png')
            });
            this.mapUv(428, 428, geometry, 1, 0, 0, 280, 148);
            this.mapUv(428, 428, geometry, 2, 0, 148, 280, 428); // top
            this.mapUv(428, 428, geometry, 4, 280, 148, 428, 428); // right
            this.hitObj = new THREE.Mesh(geometry, material);
        } else if (type == 19) {
            this.min = 0.9;
            this.height = _config.BLOCK.height / 21 * 4;
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height + 0.1, _config.BLOCK.radius * 2);
            this.geometry = geometry;
            var material = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.3
            });
            var bottomGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2.05, _config.BLOCK.height / 21 * 17, _config.BLOCK.radius * 2.05);
            var bottomMaterial = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/sing.png')
            });
            var materials = [material, bottomMaterial];
            var totalGeometry = new THREE.Geometry();
            this.mapUv(416, 416, bottomGeometry, 1, 0, 0, 256, 160);
            this.mapUv(416, 416, bottomGeometry, 2, 0, 160, 256, 416); // top
            this.mapUv(416, 416, bottomGeometry, 4, 256, 160, 416, 416); // right
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -_config.BLOCK.height / 21 * 10.5, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
            this.record = new THREE.Object3D();

            this.record.add(new THREE.Mesh(new THREE.CylinderGeometry(_config.BLOCK.radius * 0.9, _config.BLOCK.radius * 0.9, 0.4, 50), new THREE.MeshBasicMaterial({ color: 0x2c2c2c })));
            var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 0.9, 40);
            var planeMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/record.png') });
            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.rotation.x = -Math.PI / 2;
            plane.position.y = 0.26;
            this.record.add(plane);
            this.body.add(this.record);
            var planeGeometry = new THREE.PlaneGeometry(2, 2);
            this.musicIcon = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({ map: _config.loader.load('res/music_icon.png'), transparent: true }));
            this.musicIcon.position.set(0, 0, 0);
            this.musicIcon.rotation.y = -Math.PI / 4;
            this.musicIcon.rotation.x = -Math.PI / 5;
            this.musicIcon.rotation.z = -Math.PI / 5;
            this.musicIcon.visible = false;
            this.secondMusicIcon = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({ map: _config.loader.load('res/music_icon_two.png'), transparent: true }));
            this.secondMusicIcon.rotation.y = -Math.PI / 4;
            this.secondMusicIcon.rotation.x = -Math.PI / 5;
            this.secondMusicIcon.rotation.z = -Math.PI / 5;
            this.secondMusicIcon.visible = false;
            this.icons = [];
            this.icons.push(this.musicIcon, this.secondMusicIcon);
            for (var i = 0; i < 2; ++i) {
                this.body.add(this.icons[i]);
            }
        } else if (type == 20) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2 / 38 * 48);
            this.geometry = geometry;
            this.shadow.scale.set(1, 61 / 38, 48 / 38);
            // this.shadow.position.z += ;
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/disk.png')
            });
            var darkMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/disk_dark.png'), transparent: true });
            var planeGeometry = new THREE.PlaneGeometry(3, 3);
            var materials = [darkMaterial, material];
            var totalGeometry = new THREE.Geometry();
            this.mapUv(236, 300, geometry, 1, 0, 250, 10, 260);
            this.mapUv(236, 300, geometry, 2, 0, 300, 236, 0); // top
            this.mapUv(236, 300, geometry, 4, 0, 250, 10, 260); // right
            this.merge(totalGeometry, geometry, 1, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, planeGeometry, 0, [{ x: 3.5, y: 0.5, z: _config.BLOCK.radius / 38 * 48 + 0.01 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
            this.plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({ map: _config.loader.load('res/disk_light.png'), transparent: true }));
            this.plane.position.set(3.5, 0.5, _config.BLOCK.radius / 38 * 48 + 0.03);
            this.plane.updateMatrix();
            this.plane.matrixAutoUpdate = false;
            this.body.add(this.plane);
            this.timer = setInterval(function () {
                _this.plane.visible = !_this.plane.visible;
            }, 1000);
        } else if (type == 21) {
            this.radiusSegments = 50;
            this.min = 0.8;
            this.height = _config.BLOCK.height / 21 * 4;
            var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.7, _config.BLOCK.radius * 0.8, this.height, 50);
            this.geometry = geometry;
            var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 0.7, 50);
            var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.7, _config.BLOCK.radius * 0.5, _config.BLOCK.height / 21 * 17, 50);
            var material = new THREE.MeshBasicMaterial({ color: 0x4d4d4d });
            var planeMaterial = new THREE.MeshLambertMaterial({ map: _config.loader.load('res/westore_desk.png') });
            var bottomMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/westore.png') });
            this.shadow.scale.set(0.55, 0.9, 0.7);
            var materials = [material, bottomMaterial, planeMaterial];
            var totalGeometry = new THREE.Geometry();
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            bottomGeometry.rotateY(2.3);
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -_config.BLOCK.height / 21 * 10.5, z: 0 }]);
            planeGeometry.rotateX(-Math.PI / 2);
            planeGeometry.rotateY(-0.7);
            this.merge(totalGeometry, planeGeometry, 2, [{ x: 0, y: this.height / 2 + 0.01, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 22) {
            this.height = _config.BLOCK.height / 21 * 6;
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2.1, this.height, _config.BLOCK.radius * 2.1);
            this.geometry = geometry;
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/gift.png')
            });
            var bottomGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height / 21 * 15, _config.BLOCK.radius * 2);
            var bottomMaterial = new THREE.MeshLambertMaterial({
                color: 0xb193f5
            });
            this.mapUv(300, 370, geometry, 1, 0, 0, 300, 70);
            this.mapUv(300, 370, geometry, 2, 0, 70, 300, 370); // top
            this.mapUv(300, 370, geometry, 4, 0, 0, 300, 70, true); // right
            var materials = [material, bottomMaterial];
            var totalGeometry = new THREE.Geometry();
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -_config.BLOCK.height / 21 * 10.5, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 23) {
            this.height = _config.BLOCK.height / 21 * 5;
            var geometry = new THREE.Geometry();
            var deskGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2 / 38 * 40);
            geometry.merge(deskGeometry);
            this.shadow.scale.set(1, 48 / 38, 48 / 38);
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
                map: _config.loader.load('res/stool.png')
            });
            this.hitObj = new THREE.Mesh(geometry, material);
            this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(this.shadowWidth, this.shadowWidth), new THREE.MeshBasicMaterial({ map: _config.loader.load('res/stool_shadow.png'), transparent: true, alphaTest: 0.01 }));
            this.shadow.position.set(-0.76, -_config.BLOCK.height / 2 - 0.001 * type, -3.6);
            this.shadow.scale.y = 1.4;
            this.shadow.scale.x = 0.9;
            this.shadow.rotation.x = -Math.PI / 2;
        } else if (type == 24) {
            this.height = _config.BLOCK.height / 21 * 6;
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 / 38 * 45, this.height, _config.BLOCK.radius * 2 / 38 * 45);
            this.geometry = geometry;
            var bottomGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2 / 38 * 40, _config.BLOCK.height / 21 * 15, _config.BLOCK.radius * 2 / 38 * 40);
            this.shadow.scale.set(40 / 38, 1.4, 1);
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/store_top.png')
            });
            var bottomMaterial = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/store_bottom.png'),
                transparent: true
            });
            var planeMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/indoor.png'), transparent: true });
            var materials = [material, bottomMaterial, planeMaterial];
            var planeGeometry = new THREE.PlaneGeometry(3.1, 3.1);
            var totalGeometry = new THREE.Geometry();
            this.mapUv(340, 340, geometry, 1, 0, 0, 280, 60);
            this.mapUv(340, 340, geometry, 2, 0, 60, 280, 340); // top
            this.mapUv(340, 340, geometry, 4, 280, 60, 340, 340); // right
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            this.mapUv(434, 164, bottomGeometry, 1, 0, 0, 217, 164);
            this.mapUv(434, 164, bottomGeometry, 4, 217, 0, 434, 164, true); // right
            this.merge(totalGeometry, bottomGeometry, 1, [{ x: 0, y: -_config.BLOCK.height / 21 * 10.5, z: 0 }]);
            planeGeometry.rotateY(-Math.PI / 2);
            this.merge(totalGeometry, planeGeometry, 2, [{ x: -_config.BLOCK.radius / 38 * 40 - 0.01, y: -3.3, z: -2.5 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
            var doorGeometry = new THREE.PlaneGeometry(1.55, 3.1);
            this.door = new THREE.Mesh(doorGeometry, new THREE.MeshBasicMaterial({ map: _config.loader.load('res/door.png'), transparent: true }));
            this.door.rotation.y = -Math.PI / 2;
            this.door.position.set(-_config.BLOCK.radius / 38 * 40 - 0.02, -3.3, -3.3);
            this.body.add(this.door);
            this.secondDoor = new THREE.Mesh(doorGeometry, new THREE.MeshBasicMaterial({ map: _config.loader.load('res/second_door.png'), transparent: true }));
            this.secondDoor.rotation.y = -Math.PI / 2;
            this.secondDoor.position.set(-_config.BLOCK.radius / 38 * 40 - 0.02, -3.3, -1.7);
            this.body.add(this.secondDoor);
            // this.shadow.position.x += 0.6;
            // this.shadow.position.z += 1;
        } else if (type == 25) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            this.geometry = geometry;
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/clock.png')
            });
            this.mapUv(320, 200, geometry, 1, 0, 0, 5, 5);
            this.mapUv(320, 200, geometry, 2, 0, 0, 5, 5); // top
            this.mapUv(320, 200, geometry, 4, 0, 200, 320, 0, true); // right
            var buttonMaterial = stripeMaterial;
            var buttonGeometry = new THREE.CylinderGeometry(1, 1, 1, 30);
            var materials = [material, buttonMaterial];
            var totalGeometry = new THREE.Geometry();
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            buttonGeometry.rotateZ(Math.PI / 2);
            this.merge(totalGeometry, buttonGeometry, 1, [{ x: -_config.BLOCK.radius - 0.5, y: 0, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
            this.plane = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({ map: _config.loader.load('res/point.png'), transparent: true }));
            this.plane.position.set(0, 0, _config.BLOCK.radius + 0.04);
            this.body.add(this.plane);
            this.timer = setInterval(function () {
                _this.plane.visible = !_this.plane.visible;
            }, 1000);
            this.numbers = [];
            var numberGeometry = new THREE.PlaneGeometry(3, 3);
            for (var i = 0; i < 10; ++i) {
                var clockNumberMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/' + i + '.png'), alphaTest: 0.5 });
                var arr = [];
                for (var j = 0; j < 4; ++j) {
                    var time = new THREE.Mesh(numberGeometry, clockNumberMaterial);
                    time.position.z = _config.BLOCK.radius + 0.01;
                    time.visible = false;
                    arr.push(time);
                    this.body.add(time);
                }
                this.numbers.push(arr);
            }
            var date = new Date();
            var hour = ('0' + date.getHours()).slice(-2);
            var minute = ('0' + date.getMinutes()).slice(-2);
            this.numbers[hour[0]][0].position.x = -3.2 * this.radiusScale;
            this.numbers[hour[0]][0].visible = true;
            this.numbers[hour[1]][1].position.x = -1.3 * this.radiusScale;
            this.numbers[hour[1]][1].visible = true;
            this.numbers[minute[0]][2].position.x = 1.3 * this.radiusScale;
            this.numbers[minute[0]][2].visible = true;
            this.numbers[minute[1]][3].position.x = 3.2 * this.radiusScale;
            this.numbers[minute[1]][3].visible = true;
        } else if (type == 26) {
            var geometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, this.height, _config.BLOCK.radius * 2);
            var material = new THREE.MeshLambertMaterial({
                map: _config.loader.load('res/well.png')
            });
            this.mapUv(280, 428, geometry, 1, 0, 0, 280, 148);
            this.mapUv(280, 428, geometry, 2, 0, 148, 280, 428); // top
            this.mapUv(280, 428, geometry, 4, 0, 0, 280, 148, true); // right
            this.hitObj = new THREE.Mesh(geometry, material);
        } else if (type == 27) {
            this.radiusSegments = 50;
            var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 2 / 38 * 25, _config.BLOCK.radius * 2 / 38 * 25, this.height, 50);
            this.geometry = geometry;
            this.shadow.scale.set(50 / 38, 50 / 38, 50 / 38);
            var material = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/golf_bottom.png')
            });
            var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 2 / 38 * 25 + 0.01, 30);
            var planeMaterial = new customMaterial({ map: _config.loader.load('res/golf_top.png') });
            var totalGeometry = new THREE.Geometry();
            var materials = [material, planeMaterial];
            geometry.rotateY(3);
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            planeGeometry.rotateX(-Math.PI / 2);
            planeGeometry.rotateY(-0.7);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: 0, y: this.height / 2 + 0.01, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
            this.sphere = new THREE.Mesh(new THREE.SphereGeometry(0.6, 10, 10), this.whiteMaterial);
            this.sphere.position.set(-8, -1, -1.5);
            this.obj.add(this.sphere);
        } else if (type == 28) {
            this.radiusSegments = 50;
            var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 2 / 38 * 15, _config.BLOCK.radius * 2 / 38 * 15, this.height, 50);
            this.geometry = geometry;
            this.shadow.scale.set(30 / 38, 30 / 38, 30 / 38);
            var material = new THREE.MeshBasicMaterial({
                map: _config.loader.load('res/paper_bottom.png')
            });
            var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 2 / 38 * 15 + 0.01, 30);
            var planeMaterial = new customMaterial({ map: _config.loader.load('res/paper_top.png') });
            var totalGeometry = new THREE.Geometry();
            var materials = [material, planeMaterial];
            geometry.rotateY(4);
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            planeGeometry.rotateX(-Math.PI / 2);
            planeGeometry.rotateY(-0.7);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: 0, y: this.height / 2 + 0.01, z: 0 }]);
            this.shadow.scale.y = 1.1;
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
        } else if (type == 29) {
            this.radiusSegments = 50;
            this.min = 0.8;
            this.height = _config.BLOCK.height / 21 * 4;
            var geometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.4, _config.BLOCK.radius * 0.4, this.height, 50);
            this.geometry = geometry;
            var material = stripeMaterial;
            var planeGeometry = new THREE.CircleGeometry(_config.BLOCK.radius * 0.4, 50);
            var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            var middleGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.4, _config.BLOCK.radius * 0.5, _config.BLOCK.height / 21 * 1, 50);
            var bottomGeometry = new THREE.CylinderGeometry(_config.BLOCK.radius * 0.5, _config.BLOCK.radius * 0.5, _config.BLOCK.height / 21 * 16, 50);
            var bottomMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/medicine.png') });
            var totalGeometry = new THREE.Geometry();
            var materials = [material, planeMaterial, bottomMaterial];
            this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
            planeGeometry.rotateX(-Math.PI / 2);
            this.merge(totalGeometry, planeGeometry, 1, [{ x: 0, y: this.height / 2 + 0.01, z: 0 }]);
            this.merge(totalGeometry, middleGeometry, 1, [{ x: 0, y: -_config.BLOCK.height / 21 * 2.5, z: 0 }]);
            bottomGeometry.rotateY(2.3);
            this.merge(totalGeometry, bottomGeometry, 2, [{ x: 0, y: -_config.BLOCK.height / 21 * 11, z: 0 }]);
            this.hitObj = new THREE.Mesh(totalGeometry, materials);
            this.shadow.scale.set(0.55, 0.9, 0.7);
        } else if (type == -1) {
            var color = [0xee6060, 0xe4965e, 0xefbf57, 0x8ab34e, 0x71b4c4, 0x637cbd, 0xa461d4];
            var geometry = biggerGeometry;
            var material = new THREE.MeshLambertMaterial({ color: color[number], transparent: true });
            this.hitObj = new THREE.Mesh(geometry, material);
            var grayGeometry = new THREE.BoxGeometry(_config.BLOCK.radius * 2, _config.BLOCK.height, _config.BLOCK.radius * 2);
            this.mapUv(100, 88, grayGeometry, 2, 0, 0, 5, 5);
            var gray = new THREE.Mesh(grayGeometry, _config.grayMaterial);
            if (number == 0) gray.receiveShadow = true;
            this.body.add(gray);
            var planeGeometry = new THREE.PlaneGeometry(4, 8);
            var x1, y1, x2, y2;
            x1 = 64 * (number % 4);
            x2 = x1 + 64;
            y1 = parseInt(number / 4) * 128;
            y2 = y1 + 128;
            this.mapUv(256, 256, planeGeometry, 0, x1, y2, x2, y1);
            var plane = new THREE.Mesh(planeGeometry, _config.numberMaterial);
            plane.rotation.x = -Math.PI / 2;
            plane.rotation.z = -Math.PI / 2;
            plane.position.y = _config.BLOCK.height / 2 + 0.05;
            this.body.add(plane);
            this.obj.scale.set(0.7, 1, 0.7);
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
    };

    return Block;
};

Block.mrege= function (totalGeometry, geometry, index, positions) {
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
Block.mapUv = function (textureWidth, textureHeight, geometry, faceIdx, x1, y1, x2, y2, flag) {
        var tileUvW = 1 / textureWidth;
        var tileUvH = 1 / textureHeight;
        if (geometry.faces[faceIdx] instanceof THREE.Face3) {
            var UVs = geometry.faceVertexUvs[0][faceIdx * 2];
            if (faceIdx == 4 && !flag) {
                UVs[0].x = x1 * tileUvW;UVs[0].y = y1 * tileUvH;
                UVs[2].x = x1 * tileUvW;UVs[2].y = y2 * tileUvH;
                UVs[1].x = x2 * tileUvW;UVs[1].y = y1 * tileUvH;
            } else {
                UVs[0].x = x1 * tileUvW;UVs[0].y = y1 * tileUvH;
                UVs[1].x = x1 * tileUvW;UVs[1].y = y2 * tileUvH;
                UVs[2].x = x2 * tileUvW;UVs[2].y = y1 * tileUvH;
            }
            var UVs = geometry.faceVertexUvs[0][faceIdx * 2 + 1];
            if (faceIdx == 4 && !flag) {
                UVs[2].x = x1 * tileUvW;UVs[2].y = y2 * tileUvH;
                UVs[1].x = x2 * tileUvW;UVs[1].y = y2 * tileUvH;
                UVs[0].x = x2 * tileUvW;UVs[0].y = y1 * tileUvH;
            } else {
                UVs[0].x = x1 * tileUvW;UVs[0].y = y2 * tileUvH;
                UVs[1].x = x2 * tileUvW;UVs[1].y = y2 * tileUvH;
                UVs[2].x = x2 * tileUvW;UVs[2].y = y1 * tileUvH;
            }
        }
    };
Block.getBox = function () {
        if (this.boundingBox) return this.boundingBox;
        this.boundingBox = new THREE.Box3().setFromObject(this.body);
        return this.boundingBox;
    };
Block.glow = function () {
        this.hitObj.material.map = this.glowMap;
    };
Block.openDoor = function () {
        _animation.customAnimation.to(this.door.position, 1, { z: -4.5 });
        _animation.customAnimation.to(this.secondDoor.position, 1, { z: -0.5 });
    };
Block.closeDoor= function () {
        _animation.customAnimation.to(this.door.position, 1, { z: -3.3 });
        _animation.customAnimation.to(this.secondDoor.position, 1, { z: -1.7 });
    };
Block.rotateBox =function () {
        _animation.customAnimation.to(this.middle.rotation, 0.5, { y: -Math.PI / 2 });
    };
Block.playMusic= function () {
        var _this2 = this;
        for (var i = 0; i < 2; ++i) {
            setTimeout(function (icon) {
                return function () {
                    icon.visible = true;
                    icon.position.set(0, 0, 0);
                    icon.material.opacity = 1;
                    _animation.customAnimation.to(icon.position, 2, { x: 5 * (1 - 2 * Math.random()), y: 15, z: 5 * (1 - 2 * Math.random()) });
                    _animation.customAnimation.to(icon.material, 2, { opacity: 0 });
                };
            }(this.icons[i]), i * 1000);
        }
        this.musicTimer = setTimeout(function () {
            _this2.playMusic();
        }, 2500);
    };
Block.stopMusic= function () {
        if (this.musicTimer) {
            clearTimeout(this.musicTimer);
            this.musicTimer = null;
        }
    };
Block.change= function (radius, t, radiusScale) {
        if (!this.canChange) return;
        if (this.order >= 9) {
            var min = this.order >= 13 ? 0.7 : 0.6;
            this.radiusScale = radiusScale || Math.max((0, _random.random)() * (_config.BLOCK.maxRadiusScale - _config.BLOCK.minRadiusScale) + _config.BLOCK.minRadiusScale, this.min || min);
            this.radiusScale = +this.radiusScale.toFixed(2);
            this.radius = radius || this.radiusScale * _config.BLOCK.radius;
            this.radius = +this.radius.toFixed(2);
            this.obj.scale.set(this.radiusScale, 1, this.radiusScale);
            if (this.order == 27) {
                this.sphere.scale.set(1 / this.radiusScale, 1, 1 / this.radiusScale);
                this.sphere.updateMatrix();
            }
            // this.plane.scale.z = this.radiusScale;
            return;
        }
        this.radiusScale = radiusScale || (0, _random.random)() * (_config.BLOCK.maxRadiusScale - _config.BLOCK.minRadiusScale) + _config.BLOCK.minRadiusScale;
        this.radiusScale = +this.radiusScale.toFixed(2);
        this.radius = radius || this.radiusScale * _config.BLOCK.radius;
        this.radius = +this.radius.toFixed(2);
        this.obj.scale.set(this.radiusScale, 1, this.radiusScale);
        this.changeColor(t);
    };
Block.changeColor= function (t) {
        var type = t || this.types[Math.floor(Math.random() * 3)];
        if (this.type != type) {
            this.type = type;
            if (type == 'green') {
                this.greenMaterial.color.setHex(colors.green);
                this.whiteMaterial.color.setHex(colors.white);
                if (this.middleLightGreenMaterial) {
                    this.middleLightGreenMaterial.color.setHex(colors.middleLightGreen);
                }
            } else if (type == 'gray') {
                this.greenMaterial.color.setHex(colors.white);
                this.whiteMaterial.color.setHex(colors.gray);
                if (this.middleLightGreenMaterial) {
                    this.middleLightGreenMaterial.color.setHex(colors.middleLightGray);
                }
            } else if (type == 'black') {
                this.greenMaterial.color.setHex(colors.black);
                this.whiteMaterial.color.setHex(colors.lightBlack);
                if (this.middleLightGreenMaterial) {
                    this.middleLightGreenMaterial.color.setHex(colors.middleLightBlack);
                }
            }
        }
    };
Block.getVertices= function () {
        var _this3 = this;

        // this.hitObj.updateMatrixWorld();
        var vertices = [];
        var geometry = this.geometry || this.hitObj.geometry;
        if (this.radiusSegments === 4) {
            [0, 1, 4, 5].forEach(function (index) {
                var vertice = geometry.vertices[index].clone().applyMatrix4(_this3.hitObj.matrixWorld);
                vertices.push([vertice.x, vertice.z]);
            });
        } else {
            for (var i = 0; i < this.radiusSegments; ++i) {
                var vertice = geometry.vertices[i].clone().applyMatrix4(this.hitObj.matrixWorld);
                vertices.push([vertice.x, vertice.z]);
            }
        }
        return vertices;
    };
Block.shrink= function () {
        this.status = 'shrink';
    };
Block._shrink= function () {
        this.scale -= _config.BLOCK.reduction;
        this.scale = Math.max(_config.BLOCK.minScale, this.scale);
        if (this.scale <= _config.BLOCK.minScale) {
            this.status = 'stop';
            return;
        }
        this.body.scale.y = this.scale;
        this.shadow.scale.y -= _config.BLOCK.reduction / 2;
        this.shadow.position.z += _config.BLOCK.reduction / 4 * this.shadowWidth;
        var distance = _config.BLOCK.reduction / 2 * _config.BLOCK.height * (_config.BLOCK.height - this.height / 2) / _config.BLOCK.height * 2;
        this.body.position.y -= distance;
    };
Block.showup= function (i) {
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
        (0, _animation.TweenAnimation)(this.body.position.y, _config.BLOCK.height / 2 - this.height / 2, 500, 'Bounce.easeOut', function (value, complete) {
            this.body.position.y = value;
        }.bind(this));
        (0, _animation.TweenAnimation)(this.shadow.position.z, shadowZ, 500, 'Bounce.easeOut', function (value, complete) {
            this.shadow.position.z = value;
        }.bind(this));
    };
Block.hideGlow= function () {
        this.hitObj.material.map = this.map;
    };
Block.popup=function () {
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
        _animation.customAnimation.to(this.body.position, 0.5, { y: _config.BLOCK.height / 2 - this.height / 2, ease: 'Bounce.easeOut' });
        _animation.customAnimation.to(this.shadow.position, 0.5, { z: shadowZ, ease: 'Bounce.easeOut' });
    };
Block.reset= function () {
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
Block.rebound= function () {
        this.status = 'stop';
        this.scale = 1;
        _animation.customAnimation.to(this.body.scale, 0.5, { ease: 'Elastic.easeOut', y: 1 });
        _animation.customAnimation.to(this.body.position, 0.5, { ease: 'Elastic.easeOut', y: _config.BLOCK.height / 2 - this.height / 2 });

        _animation.customAnimation.to(this.shadow.scale, 0.5, { ease: 'Elastic.easeOut', y: this.shadow.initScale });
        _animation.customAnimation.to(this.shadow.position, 0.5, { ease: 'Elastic.easeOut', z: this.shadow.initZ });
    };
Block.update= function () {
        if (this.order == 19) {
            this.record.rotation.y += 0.01;
        }
        if (this.status === 'stop') return;
        if (this.status === 'shrink') {
            this._shrink();
        } else if (this.status === 'popup') {
            // this._popup();
        }
    };
