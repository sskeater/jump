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
    game.man.bottle.position.y -= config.BLOCK.reduction / 2 * config.BLOCK.height / 2 + distance;
};
bottle.reset = function() {
    game.man.bottle.position.y = 4;
};
bottle.fall = function() {
    if (game.deviation >= -BOTTLE.bodyWidth) {
        setTimeout(rotationOver, 200);
        function rotationOver() {
            TweenAnimation(game.man.bottle.position.y, 0, 400, 'Linear', function(value, complete) {
                game.man.bottle.position.y = value;
            });
        }
        if (game.left) {
            var to = game.next.obj.position.z < game.man.bottle.position.z ? Math.PI / 2 : -Math.PI / 2;
            TweenAnimation(game.man.bottle.rotation.x, to, 1000, 'Linear', function(value, complete) {
                game.man.bottle.rotation.x = value;
            });
        } else {
            var to = game.next.obj.position.x < game.man.bottle.position.x ? -Math.PI / 2 : Math.PI / 2;
            TweenAnimation(game.man.bottle.rotation.z, to, 1000, 'Linear', function(value, complete) {
                game.man.bottle.rotation.z = value;
            });
        }
    } else {
        // 没碰着
        TweenAnimation(game.man.bottle.position.y, config.BLOCK.height / 2 - 0.3, 400, 'Linear', function(value,
                complete) {
            game.man.bottle.position.y = value;
        });
    }
}