var $container = document.getElementById("container");
var config = {};
config.FRUSTUMSIZE = window.innerHeight / window.innerWidth / 736 * 414 * 60;
var Dpr = window.devicePixelRatio > 2 ? 1 : window.devicePixelRatio;
var W = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var H = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var HEIGHT = H * Dpr; // 设备像素
var WIDTH = W * Dpr; // 设备像素
var aspect = WIDTH / HEIGHT;
var render, secne, camera;
var statusDefine = {
    init : 'init',// 初始化
    ready : 'ready',// 准备好了
    start : 'start',// 游戏开始
    press : 'press',// 屏幕按下，准备起跳
    moving : 'moving',// 蓄力结束，开始跳
    end : 'end',// 游戏结束
};
var currentStatus = '';
var nextLeft = false;

function main() {
    render = new THREE.WebGLRenderer({
        antialias : true,
        preserveDrawingBuffer : true
    });
    render.setSize(WIDTH, HEIGHT);
    render.localClippingEnabled = true;
    $container.appendChild(render.domElement);

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(config.FRUSTUMSIZE * aspect / -2, config.FRUSTUMSIZE * aspect / 2,
            config.FRUSTUMSIZE / 2, config.FRUSTUMSIZE / -2, -10, 85);
    camera.position.set(-17, 30, 26);
    camera.lookAt(new THREE.Vector3(13, 0, -4));
    scene.add(camera);
    var AxesHelper = new THREE.AxesHelper(1000);
    scene.add(AxesHelper);

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    var shadowLight = new THREE.DirectionalLight(0xffffff, 0.28);
    shadowLight.position.set(0, 15, 10);
    scene.add(shadowLight);
    scene.add(ambientLight);

    var ground = groundInit();
    ground.obj.position.z = -84;
    camera.add(ground.obj);

    game.initUI();

    render.render(scene, camera);
    currentStatus = statusDefine['ready'];
    audio.begin('start');
}

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

var ui = {};
ui.startShow = function() {
    $('#start').show();
};
ui.startHide = function() {
    $('#start').hide();
};

$("#front").delegate('.start', 'click', function() {
    game.start();
});

var BOTTLE = {
    headRadius : 0.945,
    bodyWidth : 2.34,
    bodyDepth : 2.34,

    bodyHeight : 3.2,

    reduction : 0.005,
    minScale : 0.5,
    velocityYIncrement : 15,
    velocityY : 135,
    velocityZIncrement : 70
};
var bottle = {};
bottle.build = function() {

    var man = {};
    man.obj = new THREE.Object3D();
    man.obj.name = 'bottle';
    man.trail = null;

    man.bottle = new THREE.Object3D();
    var basicMaterial = new THREE.MeshBasicMaterial({
        map : new THREE.TextureLoader().load('res/head.png')
    });

    var headRadius = 2.1 * 0.45;
    man.human = new THREE.Object3D();
    man.head = new THREE.Mesh(new THREE.SphereGeometry(headRadius, 20, 20), basicMaterial);
    man.head.castShadow = true;
    man.bottom = new THREE.Mesh(
            new THREE.CylinderGeometry(0.88 * headRadius, 1.27 * headRadius, 2.68 * headRadius, 20),
            new THREE.MeshBasicMaterial({
                map : new THREE.TextureLoader().load('res/bottom.png')
            }));
    man.bottom.rotation.y = 4.7;
    man.bottom.castShadow = true;
    var middleGeometry = new THREE.CylinderGeometry(headRadius, 0.88 * headRadius, 1.2 * headRadius, 20);
    var middleMaterial = new THREE.MeshBasicMaterial({
        map : new THREE.TextureLoader().load('res/top.png')
    });
    var materials = [ middleMaterial, basicMaterial ];
    var totalGeometry = new THREE.Geometry();
    middleGeometry.rotateY(4.7);
    bottle.merge(totalGeometry, middleGeometry, 0, [ {
        x : 0,
        y : man.bottom.position.y + 1.94 * headRadius,
        z : 0
    } ]);
    var topGeometry = new THREE.SphereGeometry(headRadius, 20, 20);
    topGeometry.scale(1, 0.54, 1);
    bottle.merge(totalGeometry, topGeometry, 1, [ {
        x : 0,
        y : man.bottom.position.y + 2.54 * headRadius,
        z : 0
    } ]);
    man.middle = new THREE.Mesh(totalGeometry, materials);
    man.middle.castShadow = true;
    man.body = new THREE.Object3D();
    man.body.add(man.bottom);
    man.body.add(man.middle);
    man.human.add(man.body);
    man.head.position.y = 4.725;
    man.human.add(man.head);
    man.bottle.add(man.human);

    man.bottle.position.y = BOTTLE.bodyHeight / 2 - 0.25;
    man.bottle.position.x = 0;
    man.bottle.castShadow = true;

    // 粒子
    man.particles = [];
    var whiteParticleMaterial = new THREE.MeshBasicMaterial({
        map : new THREE.TextureLoader().load('res/white.png'),
        alphaTest : 0.5
    });
    var greenParticleMaterial = new THREE.MeshBasicMaterial({
        map : new THREE.TextureLoader().load('res/green.png'),
        alphaTest : 0.5
    });
    var particleGeometry = new THREE.PlaneGeometry(1, 1);
    for (var i = 0; i < 15; ++i) {
        var particle = new THREE.Mesh(particleGeometry, whiteParticleMaterial);
        particle.rotation.y = -Math.PI / 4;
        particle.rotation.x = -Math.PI / 5;
        particle.rotation.z = -Math.PI / 5;
        man.particles.push(particle);
        man.bottle.add(particle);
    }
    for (var i = 0; i < 5; ++i) {
        var particle = new THREE.Mesh(particleGeometry, greenParticleMaterial);
        particle.rotation.y = -Math.PI / 4;
        particle.rotation.x = -Math.PI / 5;
        particle.rotation.z = -Math.PI / 5;
        man.particles.push(particle);
        man.bottle.add(particle);
    }

    return man;
};
bottle.merge = function merge(totalGeometry, geometry, index, positions) {
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
bottle._prepare = function() {
    game.man.scale -= BOTTLE.reduction;
    game.man.scale = Math.max(BOTTLE.minScale, game.man.scale);
    if (game.man.scale <= BOTTLE.minScale) {
        return;
    }
    game.man.body.scale.y = game.man.scale;
    game.man.body.scale.x += 0.007;
    game.man.body.scale.z += 0.007;
    game.man.head.position.y -= 0.018;
    var distance = 0.027;
    game.man.obj.position.y -= config.BLOCK.reduction / 2 * config.BLOCK.height / 2 + distance;
};

var move = {};
move.camera = function() {
    camera.position.x = camera.position.x + 20;
    render.render(scene, camera);
};
move.people = function(x, y) {
};

var game = {};
game.heap = [];
game.initUI = function() {
    var first = Block.first;
    first.obj.position.x = 0;
    game.current = first;
    game.heap.push(first);
    scene.add(first.obj);

    var next = Block.second;
    next.obj.position.x = 20;
    game.next = next;
    game.heap.push(next);
    scene.add(next.obj);

    game.third = Block.next();

    var man = bottle.build();
    man.bottle.position.x = 0;
    man.bottle.position.y = 4;
    man.name = 'man';
    game['man'] = man;
    scene.add(man.bottle);
};
game.start = function() {
    currentStatus = statusDefine['start'];
};

game.getBox = function() {
    var faces = function() {
        var faces = [];
        for (var i = 0; i < 6; i++) {
            faces.push(new THREE.MeshBasicMaterial({
                color : Math.ceil(Math.random() * 0xffffff)
            }));
        }
        return faces;
    };
    return new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), faces());
};

var imgLoader = {
    container : {},
    loaded : 0,
    imgs : [ './res/top.png', './res/head.png', './res/bottom.png' ],
    load : function() {
        for (var i = 0; i < this.imgs.length; i++) {
            var img = new Image();
            img.src = this.imgs[i];
            img.onload = this.ready();
            this.container[this.imgs[i]] = img;
        }
    },
    ready : function() {
        this.loaded++;
        console.info(this.loaded);
        if (this.loaded != this.imgs.length) {
            return;
        }
        people();
    }
};
$(document).ready(function() {
    main();
    game.start();
    bindEvent();
});
