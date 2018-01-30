var $container = document.getElementById("container");
var WIDTH = $container.clientWidth, HEIGHT = $container.clientHeight;
var FRUSTUMSIZE = window.innerHeight / window.innerWidth / 736 * 414 * 60;
var aspect = WIDTH / HEIGHT;

var BASE_CACHE = {};

function initCache() {
    BASE_CACHE.bg = new Image();
    BASE_CACHE.bg.src = "./res/bg1.jpg";
}

function main() {
    initCache();
    var render = new THREE.WebGLRenderer({
        antialias : true,
        preserveDrawingBuffer : true
    });
    render.setSize(WIDTH, HEIGHT);
    render.localClippingEnabled = true;
    $container.appendChild(render.domElement);

    var scene = new THREE.Scene();

    var camera = new THREE.OrthographicCamera(FRUSTUMSIZE * aspect / -2, FRUSTUMSIZE * aspect / 2, FRUSTUMSIZE / 2,
            FRUSTUMSIZE / -2, -10, 85);
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

    for (var i = 0; i < 10; i++) {
        var box = boxes();
        box.position.x = i * 4;
        box.position.y = i * 4 * 2;
        box.position.z = i * 4;
        scene.add(box);
    }

    function renderA() {
        render.render(scene, camera);
    }
    window.setTimeout(renderA, 300);
};

function groundInit() {
    this.obj = new THREE.Object3D();
    this.obj.name = 'ground';
    var geometry = new THREE.PlaneGeometry(WIDTH / HEIGHT * _config.FRUSTUMSIZE, _config.FRUSTUMSIZE);
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
        // var texture = new THREE.Texture(BASE_CACHE.bg);
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
    for (var i = 1; i < 7; ++i) {
        this.obj.children[i].visible = false;
    }
    this.current = 0;
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

var boxes = function() {
    var faces = function() {
        var faces = [];
        for (var i = 0; i < 6; i++) {
            faces.push(new THREE.MeshBasicMaterial({
                color : Math.ceil(Math.random() * 0xffffff)
            }));
        }
        return faces;
    };
    return new THREE.Mesh(new THREE.CubeGeometry(4, 4, 4), faces());
};

main();