var $container = document.getElementById("container");
var hb = {
    width : $container.clientWidth,
    height : $container.clientHeight,
    render : {},
    camera : {},
    scene : {},
    light : {},
};

hb.config = {
    FRUSTUMSIZE : window.innerHeight / window.innerWidth / 736 * 414 * 60,
};

hb.initThree = function() {
    hb.render = new THREE.WebGLRenderer({
        antialias : true,
        preserveDrawingBuffer : true
    });
    hb.render.setSize(hb.width, hb.height);
    $container.appendChild(hb.render.domElement);
};

hb.initCamera = function() {
    var frustumSize = hb.config.FRUSTUMSIZE;
    var aspect = hb.width / hb.height;
    hb.camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2,
            frustumSize / -2, -10, 85);
    hb.camera.position.set(-17, 30, 26);
    hb.camera.lookAt(new THREE.Vector3(13, 0, -4));
};

hb.initScene = function() {
    hb.scene = new THREE.Scene();
};

hb.initLight = function() {
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    hb.shadowLight = new THREE.DirectionalLight(0xffffff, 0.28);
    hb.shadowLight.position.set(0, 15, 10);
    if (hb.render.shadowMap.enabled) {
        hb.shadowLight.castShadow = true;
        hb.shadowLight.target = hb.shadowTarget;
        hb.shadowLight.shadow.camera.near = 5;
        hb.shadowLight.shadow.camera.far = 30;
        hb.shadowLight.shadow.camera.left = -10;
        hb.shadowLight.shadow.camera.right = 10;
        hb.shadowLight.shadow.camera.top = 10;
        hb.shadowLight.shadow.camera.bottom = -10;
        hb.shadowLight.shadow.mapSize.width = 512;
        hb.shadowLight.shadow.mapSize.height = 512;
        var shadowGeometry = new THREE.PlaneGeometry(65, 25);
        hb.shadowGround = new THREE.Mesh(shadowGeometry, new THREE.ShadowMaterial({
            transparent : true,
            color : 0x000000,
            opacity : 0.3
        }));
        hb.shadowGround.receiveShadow = true;
        hb.shadowGround.position.x = -25;
        hb.shadowGround.position.y = -18;
        hb.shadowGround.position.z = -15;
        hb.shadowGround.rotation.x = -Math.PI / 2;
        hb.shadowLight.add(hb.shadowGround);
    }
    hb.scene.add(hb.shadowLight);
    hb.scene.add(ambientLight);
};

hb.ground = {};
hb.ground.generateLaserBodyCanvas = function(colorStart, colorStop) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;
    context.clearRect(0, 0, canvas.width, canvas.height);
    var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorStop);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
};

hb.ground.changeColor = function() {
    var next = hb.current + 1 > 6 ? 0 : hb.current + 1;
};

hb.ground.init = function() {
    var geometry = new THREE.PlaneGeometry(hb.width / hb.height * hb.config.FRUSTUMSIZE, hb.config.FRUSTUMSIZE);
    hb.materials = [];
    var colors = [ 'rgba(215, 219, 230, 1)', 'rgba(188, 190, 199, 1)' ];
    var texture = new THREE.Texture(hb.ground.generateLaserBodyCanvas(colors[0], colors[1]));
    texture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial({
        map : texture,
        opacity : 1,
        transparent : true
    });
    hb.materials.push(material);
    var ground = new THREE.Mesh(geometry, material);
    ground.position.z = -0.1;
    ground.name = 0;
    ground.updateMatrix();
    ground.matrixAutoUpdate = false;
    hb.scene.add(ground);
};

hb.init = function() {
    hb.initThree();
    hb.initCamera();
    hb.initScene();
    hb.initLight();
    hb.ground.init();

    hb.render.clear();
    hb.render.localClippingEnabled = true;
    hb.render.render(hb.scene, hb.camera);
};

hb.init();