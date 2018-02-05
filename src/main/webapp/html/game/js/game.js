var $container = document.getElementById("container");
var config = {};
config.FRUSTUMSIZE = window.innerHeight / window.innerWidth / 736 * 414 * 60;
var Dpr = window.devicePixelRatio > 2 ? 1 : window.devicePixelRatio;
var W = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var H = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var HEIGHT = H * Dpr; // 设备像素
var WIDTH = W * Dpr; // 设备像素
var frustumSizeHeight = config.FRUSTUMSIZE; // 动画的尺寸单位坐标高度
var frustumSizeWidth = WIDTH / HEIGHT * frustumSizeHeight; // 动画的尺寸单位坐标高度
var aspect = WIDTH / HEIGHT;
var render, secne, camera, shadowLight;
var statusDefine = {
    init : 'init',// 初始化
    ready : 'ready',// 准备好了
    start : 'start',// 游戏开始
    press : 'press',// 屏幕按下，准备起跳
    moving : 'moving',// 蓄力结束，开始跳
    over : 'over',// 失败
    end : 'end',// 游戏结束
};
config.speed = 40 / 1000;
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
    shadowLight = new THREE.DirectionalLight(0xffffff, 0.28);
    shadowLight.position.set(0, 15, 10);
    scene.add(shadowLight);
    scene.add(ambientLight);

    var ground = groundInit();
    ground.obj.position.z = -84;
    camera.add(ground.obj);

    game.initUI();

    plane.create();
    plane.drawStart();
    render.render(scene, camera);
    currentStatus = statusDefine['ready'];
    audio.begin('start');
}

var game = {};
game.heap = [];
game.initUI = function() {
    var first = Block.first;
    first.obj.position.x = 0;
    game.current = first;
    game.current.number = Math.random() / 2;
    game.heap.push(first);
    scene.add(first.obj);

    var next = Block.second;
    next.obj.position.x = 20;
    game.left = false;
    game.beforeLeft = false;
    game.next = next;
    game.next.number = Math.random() / 2 + 0.5;
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
    game.doubleHit = 0;
    game.level = 1;
    game.score = 0;
    plane.drawLevel();
};

game.reset = function() {
    scene.remove(game['man'].bottle);
    for (var i = 0, len = scene.children.length; i < len; i++) {
        if (scene.children[i]['name'] == 'block') {
            scene.remove(scene.children[i]);
            i--;
            len--;
        }
    }
    Block.poolInit();
    camera.position.set(-17, 30, 26);
    camera.lookAt(new THREE.Vector3(13, 0, -4));
    shadowLight.position.set(0, 15, 10);

    game.initUI();
    game.start();
};

var imgLoader = {
    container : {},
    loaded : 0,
    imgs : [ './res/top.png', './res/head.png', './res/bottom.png', './res/title.png', './res/play.png' ],
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
    // game.start();
    bindEvent();
});
