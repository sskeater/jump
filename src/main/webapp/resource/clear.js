	define("game.js", function(require, module, exports){ 			
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(30);

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _block = __webpack_require__(12);

var _block2 = _interopRequireDefault(_block);

var _ui = __webpack_require__(26);

var _ui2 = _interopRequireDefault(_ui);

var _wave = __webpack_require__(29);

var _wave2 = _interopRequireDefault(_wave);

var _ground = __webpack_require__(18);

var _ground2 = _interopRequireDefault(_ground);

var _bottle = __webpack_require__(13);

var _bottle2 = _interopRequireDefault(_bottle);

var _config = __webpack_require__(2);

var _audioManager = __webpack_require__(27);

var _audioManager2 = _interopRequireDefault(_audioManager);

var _tailSystem = __webpack_require__(25);

var _tailSystem2 = _interopRequireDefault(_tailSystem);

var _pointInPolygon = __webpack_require__(31);

var _pointInPolygon2 = _interopRequireDefault(_pointInPolygon);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _session = __webpack_require__(6);

var _session2 = _interopRequireDefault(_session);

var _rankSystem = __webpack_require__(23);

var _rankSystem2 = _interopRequireDefault(_rankSystem);

var _socket = __webpack_require__(20);

var _socket2 = _interopRequireDefault(_socket);

var _full2D = __webpack_require__(21);

var _full2D2 = _interopRequireDefault(_full2D);

var _singleSettlementPage = __webpack_require__(22);

var _singleSettlementPage2 = _interopRequireDefault(_singleSettlementPage);

var _shareApp = __webpack_require__(7);

var _viewer = __webpack_require__(28);

var _viewer2 = _interopRequireDefault(_viewer);

var _animation = __webpack_require__(4);

var _historyTimes = __webpack_require__(24);

var _historyTimes2 = _interopRequireDefault(_historyTimes);

var _reporter = __webpack_require__(19);

var _reporter2 = _interopRequireDefault(_reporter);

var _gameCtrl = __webpack_require__(15);

var _gameCtrl2 = _interopRequireDefault(_gameCtrl);

var _gameView = __webpack_require__(17);

var _gameView2 = _interopRequireDefault(_gameView);

var _gameModel = __webpack_require__(16);

var _gameModel2 = _interopRequireDefault(_gameModel);

var _random = __webpack_require__(9);

var _instructionCtrl = __webpack_require__(14);

var _instructionCtrl2 = _interopRequireDefault(_instructionCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//window.console = { log: function() {}, error: function() {}, warn: function() {} };
var HEIGHT = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
var WIDTH = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
var TIMEOUT = 9000;
var SERVERCONFIG = 60000;
// const SERVERCONFIG = 1000
var SYCTIME = 10000;
var REPORTERTIMEOUT = 60001;
// const REPORTERTIMEOUT = 1000
var system = wx.getSystemInfoSync() || {};
var isIPhone = system.platform == 'ios';
var model = system.model;

var Game = function () {
  function Game(options) {
    _classCallCheck(this, Game);

    // 模式：单机，围观(玩家，观察者），挑战，首屏，loading, viewerWating, viewer,viewergg,viewerout
    //console.log('options', options)
    this.options = options;
    this.is_from_wn = 0;
    // this.is_from_wn = 1

    this.firstInit = true;
    this.distance = 0;

    this.heightestScore = 0;

    // 目前stage有 game,friendRankList,singleSettlementPgae,groupShareList,battlePage
    this.stage = '';
    this.succeedTime = 0;
    this.lastAddBonus = -2;

    this.lastStage = '';

    // 定时器，死亡碰撞
    this.deadTimeout = null;

    // 本小局分数
    this.currentScore = 0;
    this.seq = 0;

    this.thirdBlock = null;

    this.straight = true;

    this.firstBlood = false;

    this.lastHardLevel = 200;
    this.guider = false;

    this.hardDistances = [];

    this.duration = [];
    this.quickArr = [];
    this.socketFirstSync = false;
    this.init();

    this.randomSeed = Date.now();
    (0, _random.setRandomSeed)(this.randomSeed);
    this.actionList = [];
    this.musicList = [];
    this.touchList = [];
    this.blocks = [];

    this.liveTime = 0;

    wx.setKeepScreenOn && wx.setKeepScreenOn({
      keepScreenOn: true
    });
  }

  _createClass(Game, [{
    key: 'moveGradually',
    value: function moveGradually(vector, duration) {
      if (this.animating && !this.guider) {
        //console.log("moveGradually", vector, duration);
        (0, _animation.TweenAnimation)(this.bottle.obj.position.x, this.bottle.obj.position.x - vector.x, duration * 500, 'Linear', function (value, complete) {
          this.bottle.obj.position.x = value;
          if (complete) {
            this.bottle.obj.position.x = -0.098;
          }
        }.bind(this));

        // TweenAnimation(this.bottle.obj.position.z, this.bottle.obj.position.z - vector.z, duration * 500, 'Linear', function (value) {
        //   this.bottle.obj.position.z = value
        // }.bind(this))

        for (var i = 0, len = this.blocksInUse.length; i < len; ++i) {
          (0, _animation.TweenAnimation)(this.blocksInUse[i].obj.position.x, this.blocksInUse[i].obj.position.x - vector.x, duration * 500, 'Linear', function (value) {
            this.obj.position.x = value;
          }.bind(this.blocksInUse[i]));
          // TweenAnimation(this.blocksInUse[i].obj.position.z, this.blocksInUse[i].obj.position.z - vector.z, duration * 500, 'Linear', function (value) {
          //   this.obj.position.z = value
          // }.bind(this.blocksInUse[i]))
        }
        if (this.blocks[0]) {
          (0, _animation.TweenAnimation)(this.blocks[0].obj.position.x, this.blocks[0].obj.position.x - vector.x, duration * 500, 'Linear', function (value) {
            this.obj.position.x = value;
          }.bind(this.blocks[0]));
        }
      } else {
        (0, _animation.TweenAnimation)(this.camera.position.x, this.camera.position.x + vector.x, duration * 500, 'Quad.easeOut', function (value) {
          this.camera.position.x = value;
        }.bind(this));
        (0, _animation.TweenAnimation)(this.camera.position.z, this.camera.position.z + vector.z, duration * 500, 'Quad.easeOut', function (value) {
          this.camera.position.z = value;
        }.bind(this));
        //TweenMax.to(this.camera.position, duration, { ease: Power2.easeOut, x: this.camera.position.x + vector.x, z: this.camera.position.z + vector.z });
      }
    }
  }, {
    key: 'update',
    value: function update(tickTime) {
      var _this = this;

      // 更新尾巴
      if (this.tailSystem) {
        this.tailSystem.update(tickTime * 1000);
      }

      this.bottle.update(tickTime);
      this.UI.update();
      if (this.renderer.shadowMap.enabled) {
        this.shadowTarget.position.x = this.bottle.obj.position.x;
        this.shadowTarget.position.z = this.bottle.obj.position.z;
        this.shadowLight.position.x = this.bottle.obj.position.x + 0;
        this.shadowLight.position.z = this.bottle.obj.position.z + 10;
      }
      for (var i = 0, len = this.blocksInUse.length; i < len; ++i) {
        this.blocksInUse[i].update();
      }

      if (this.guider && this.blocks[0]) this.blocks[0].update();

      if ((this.bottle.status === 'forerake' || this.bottle.status === 'hypsokinesis') && this.hit != 5) {
        var boxes = this.bottle.getBox();
        var blockBox = this.bottle.status === 'forerake' ? this.nextBlock.getBox() : this.currentBlock.getBox();
        for (var i = 0, len = boxes.length; i < len; ++i) {
          if (boxes[i].intersectsBox(blockBox)) {
            //   var box = new THREE.BoxHelper(this.bottle.middle, 0xffff00 );
            // var box2 = new THREE.BoxHelper(this.bottle.head, 0xffff00 );
            // var box3 = new THREE.BoxHelper(this.currentBlock.body, 0xffff00);
            // this.scene.add(box3);
            // this.scene.add(box2);
            // this.scene.add( box );
            if (i == 0) {
              this.bottle.rotate();
              if (this.suspendTimer) {
                clearTimeout(this.suspendTimer);
                this.suspendTimer = null;
              }
            } else if (i == 1) {
              this.bottle.suspend();
              if (this.suspendTimer) {
                clearTimeout(this.suspendTimer);
                this.suspendTimer = null;
              }
            } else if (i == 2 && !this.suspendTimer) {
              this.suspendTimer = setTimeout(function () {
                _this.bottle.suspend();
                _this.suspendTimer = null;
              }, 90 * this.distance);
            }
            break;
          }
        }
      }

      // 物理碰撞
      if (this.bottle.obj.position.y <= _config.BLOCK.height / 2 + 0.1 && this.bottle.status === 'jump' && this.bottle.flyingTime > 0.3 && !this.pendingReset) {
        if (this.hit === 1 || this.hit === 7) {
          this.bottle.stop();
          this.succeed();
          if (this.animating) return;
          //this.addWave(Math.min(1, 4));
          if (this.hit === 1) {
            //this.bottle.showAddScore(1, true);
            // 播放命中靶心
            this.audioManager['combo' + Math.min(this.doubleHit + 1, 8)].seek(0);
            this.audioManager['combo' + Math.min(this.doubleHit + 1, 8)].play();

            ++this.doubleHit;
            this.addWave(Math.min(this.doubleHit, 4));
            this.bottle.showAddScore(1, true, this.quick);
            this.UI.addScore(1, true, this.quick);
            this.currentScore = this.UI.score;

            if (this.mode != 'observe') {
              this.showCombo();
            }
          } else {

            // 播放成功音乐
            this.doubleHit = 0;
            this.UI.addScore(1, false, this.quick);
            this.currentScore = this.UI.score;
            this.bottle.showAddScore(1, false, this.quick);
          }
          this.audioManager.success.seek(0);
          this.audioManager.success.play();

          if (this.mode != 'observe') {

            // 更新超越头像
            this.rankSystem.update();
          }
        } else if (this.hit === 2) {
          this.bottle.stop();
          this.bottle.obj.position.y = _config.BLOCK.height / 2;
          this.bottle.obj.position.x = this.bottle.destination[0];
          this.bottle.obj.position.z = this.bottle.destination[1];
        } else if (this.hit === 3) {
          this.bottle.hypsokinesis();
          this.audioManager.fall_2.play();
          this.bottle.obj.position.y = _config.BLOCK.height / 2;
        } else if (this.hit === 4 || this.hit === 5) {
          this.bottle.forerake();
          this.audioManager.fall_2.play();
          this.bottle.obj.position.y = _config.BLOCK.height / 2;
        } else if (this.hit === 0) {
          this.bottle.fall();
          this.audioManager.fall.play();
          this.bottle.obj.position.y = _config.BLOCK.height / 2;
        } else if (this.hit === 6) {
          this.bottle.stop();
          this.audioManager.fall.play();
          this.bottle.obj.position.y = _config.BLOCK.height / 2;
        } else if (this.hit === -1) {
          this.bottle.stop();
          this.bottle.obj.position.y = _config.BLOCK.height / 2;
          this.bottle.obj.position.x = 0;
        }
        if (this.hit === 0 || this.hit === 3 || this.hit === 4 || this.hit === 5 || this.hit === 6) {
          if (this.guider) {
            if (this.UI.score > 0) {
              this.guider = false;
            } else {
              if (this.liveTime > 3) {
                this.guider = false;
                this.full2D.hide2DGradually();
              } else {
                this.live();
                return;
              }
            }
          }
          this.pendingReset = true;
          this.currentScore = this.UI.score;
          this.gameCtrl.gameOver(this.currentScore);
          this.deadTimeout = setTimeout(function () {
            _animation.TweenAnimation.killAll();
            _this.gameCtrl.gameOverShowPage();
            _this.pendingReset = false;
            if (_this.mode == 'observe') {
              _this.instructionCtrl.onCmdComplete();
            }
          }, 2000);
        } else {
          if (this.mode == 'observe') {
            this.instructionCtrl.onCmdComplete();
          }
        }
      }
      //var a = Date.now();
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: 'succeed',
    value: function succeed() {
      var _this2 = this;

      ++this.succeedTime;
      this.musicScore = false;
      this.lastSucceedTime = Date.now();
      if (this.succeedTime % 15 == 0) {
        this.ground.changeColor();
      }
      if (this.blocksInUse.length >= 9) {
        var temp = this.blocksInUse.shift();
        temp.obj.visible = false;
        this.blocksPool.push(temp);
      }
      var firstV = this.nextBlock.obj.position.clone().sub(this.currentBlock.obj.position);
      this.bottle.obj.position.x = this.bottle.destination[0];
      this.bottle.obj.position.z = this.bottle.destination[1];
      this.bottle.squeeze();
      var block = this.thirdBlock;
      if (this.firstAnimating) return;
      if (this.guider) {
        this.guider = false;
        this.full2D.hide2DGradually();
      }
      if (this.animating) {} else {
        if (this.nextBlock.order == 15) {
          this.nextBlock.glow();
        } else if (this.nextBlock.order == 19) {
          var box = this.nextBlock;
          // this.audioManager.register('sing', () => {
          //    box.playMusic();
          //  });
          this.musicTimer = setTimeout(function () {
            _this2.audioManager.sing.seek(0);
            _this2.audioManager.sing.play();
            box.playMusic();
            _this2.musicScore = true;
            _this2.UI.addScore(30, false, false, true);
            _this2.bottle.showAddScore(30, false, false, true);
          }, 2000);
        } else if (this.nextBlock.order == 24) {
          var box = this.nextBlock;
          this.audioManager.register('store', function () {
            box.openDoor();
          }, function () {
            box.closeDoor();
          });
          this.musicTimer = setTimeout(function () {
            _this2.audioManager.store.seek(0);
            _this2.audioManager.store.play();
            _this2.musicScore = true;
            _this2.UI.addScore(15, false, false, true);
            _this2.bottle.showAddScore(15, false, false, true);
          }, 2000);
        } else if (this.nextBlock.order == 26) {
          this.musicTimer = setTimeout(function () {
            _this2.audioManager.water.seek(0);
            _this2.audioManager.water.play();
            _this2.UI.addScore(5, false, false, true);
            _this2.musicScore = true;
            _this2.bottle.showAddScore(5, false, false, true);
          }, 2000);
        } else if (this.nextBlock.order == 17) {
          var box = this.nextBlock;
          this.musicTimer = setTimeout(function () {
            box.rotateBox();
            _this2.musicScore = true;
            _this2.UI.addScore(10, false, false, true);
            _this2.bottle.showAddScore(10, false, false, true);
          }, 2000);
        }
        var nextPosition = this.nextBlock.obj.position.clone();
        var distance = this.nextBlock.radius + this.distance + block.radius;
        var straight = this.straight;
        var straight = this.straight;
        if (straight) {
          nextPosition.x += distance;
          this.bottle.lookAt('straight', nextPosition.clone());
        } else {
          nextPosition.z -= distance;
          this.bottle.lookAt('left', nextPosition.clone());
        }
        block.obj.position.x = nextPosition.x;
        block.obj.position.z = nextPosition.z;
        this.audioManager['pop'].seek(0);
        this.audioManager['pop'].play();
      }
      block.popup();
      var secondV = block.obj.position.clone().sub(this.nextBlock.obj.position);
      var cameraV = firstV.add(secondV);
      cameraV.x /= 2;
      cameraV.z /= 2;
      // this.blocksInUse.push(block);
      this.scene.add(block.obj);
      this.currentBlock = this.nextBlock;
      this.nextBlock = block;

      var duration = cameraV.length() / 10;
      if (_config.GAME.canShadow) this.bottle.scatterParticles();
      if (this.animating) cameraV.x = 19.8;
      this.moveGradually(cameraV, duration);
      this.bottle.human.rotation.z = 0;
      this.bottle.human.rotation.x = 0;
    }
  }, {
    key: 'handleWxOnHideEvent',
    value: function handleWxOnHideEvent() {
      this.show = false;

      if (this.animateTimer) {
        clearTimeout(this.animateTimer);
        this.animateTimer = null;
      }

      if (this.onshowAnimateTimer) {
        clearTimeout(this.onshowAnimateTimer);
        this.onshowAnimateTimer = null;
      }

      this.gameCtrl.wxOnhide();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this3 = this;

      var fb = _storage2.default.getFirstBlood();
      if (!fb && !this.options.query.mode) {
        this.guider = true;
      }
      this.gameCtrl = new _gameCtrl2.default(this);
      this.gameView = new _gameView2.default(this);
      this.gameModel = new _gameModel2.default(this);
      this.instructionCtrl = new _instructionCtrl2.default(this);

      /**
       * 历史玩过的次数
       */
      this.historyTimes = new _historyTimes2.default(this);

      /**
       * 数据上报
       */
      this.reporter = new _reporter2.default();

      /**
       * 数据初始化
       */
      this.audioManager = new _audioManager2.default(this);
      this.gameSocket = new _socket2.default(this);

      /**
       * 初始化场景
       */
      this.scene = new THREE.Scene();
      //this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

      var frustumSize = _config.FRUSTUMSIZE;
      var aspect = WIDTH / HEIGHT;
      this.camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -10, 85);
      this.camera.position.set(-17, 30, 26);
      this.camera.lookAt(new THREE.Vector3(13, 0, -4));
      this.scene.add(this.camera);

      // var CameraHelper = new THREE.CameraHelper(this.camera);
      // this.scene.add(CameraHelper);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas, preserveDrawingBuffer: true });
      window.renderer = this.renderer;
      //this.renderer.sortObjects = false
      //this.renderer.setPixelRatio(1)
      //this.renderer.setPixelRatio(window.devicePixelRatio ? (isIPhone ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio) : 1);


      // 坐标轴
      //var AxesHelper = new THREE.AxesHelper(1000);
      //this.scene.add(AxesHelper);

      this.blocksPool = [];
      this.blocksInUse = [];
      this.doubleHit = 0;
      if (isIPhone && (model.indexOf('iPhone 4') >= 0 || model.indexOf('iPhone 5') >= 0 || system.system.indexOf('iOS 9') >= 0 || system.system.indexOf('iOS 8') >= 0 || model.indexOf('iPhone 6') >= 0 && model.indexOf('iPhone 6s') < 0)) {
        this.renderer.shadowMap.enabled = false;
        _config.GAME.canShadow = false;
        this.renderer.setPixelRatio(1.5);
        //wx.setPreferredFramesPerSecond && wx.setPreferredFramesPerSecond(45); 
      } else {
        if (typeof system.benchmarkLevel != 'undefined' && system.benchmarkLevel < 5 && system.benchmarkLevel != -1) {
          _config.GAME.canShadow = false;
          this.renderer.shadowMap.enabled = false;
          this.renderer.setPixelRatio(window.devicePixelRatio ? isIPhone ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio : 1);
        } else {
          //GAME.canShadow = false;
          this.renderer.setPixelRatio(window.devicePixelRatio ? isIPhone ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio : 1);
          this.renderer.shadowMap.enabled = true;
        }
      }
      this.renderer.setSize(WIDTH, HEIGHT);
      this.renderer.localClippingEnabled = true;
      //this.renderer.setClearColor( 0x000000, 0 );
      this.ground = new _ground2.default();
      this.ground.obj.position.z = -84;
      //this.ground.obj.rotation.x = -0.8;
      // window.rrr = this.ground.obj.position;

      this.camera.add(this.ground.obj);

      this.waves = [];
      for (var i = 0; i < 4; ++i) {
        var wave = new _wave2.default();
        this.waves.push(wave);
        wave.obj.visible = false;
        this.scene.add(wave.obj);
      }
      var basicMaterial = new THREE.MeshBasicMaterial({ color: 0xF5F5F5 });
      this.combo = new THREE.Mesh(new THREE.CircleGeometry(0.6, 40), basicMaterial);
      this.combo.name = 'combo';
      this.combo.position.x = -50;
      this.combo.rotation.x = -Math.PI / 2;
      this.scene.add(this.combo);

      if (this.renderer.shadowMap.enabled) {
        this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), basicMaterial);
        this.shadowTarget.visible = false;
        this.shadowTarget.name = 'shadowTarget';
        this.scene.add(this.shadowTarget);
      }
      this.currentBlock = new _block2.default(0);

      this.initNextBlock = this.nextBlock = new _block2.default(1);
      this.nextBlock.obj.position.x = 20;
      this.bottle = new _bottle2.default();
      this.bottle.obj.position.set(-10, -_config.BLOCK.height / 2, 0);
      this.scene.add(this.bottle.obj);
	  // 自动跳
      if (this.guider) {
        this.bottle.obj.position.set(-11, 50, 0);
        this.camera.position.x -= 19;
        setTimeout(function () {
          _this3.bottle.showup();
        }, 800);
        this.currentBlock.obj.position.x = -11;
        this.currentBlock.change(null, 'gray', 0.7);
        this.scene.add(this.currentBlock.obj);
        this.guiderTimer = setInterval(function () {
          _this3.bottle.velocity.vz = 0;
          _this3.bottle.velocity.vy = 150;
          _this3.direction = new THREE.Vector2(1, 0);
          var direction = new THREE.Vector3(1, 0, 0);
          _this3.bottle.jump(direction.normalize());
          _this3.hit = _this3.checkHit2(_this3.bottle, _this3.currentBlock);
        }, 3000);
      }
      this.blocksInUse.push(this.nextBlock);
      this.blocksInUse.push(this.currentBlock);

      for (var i = 2; i < 30; ++i) {
        var block = new _block2.default(i);
        this.blocksPool.push(block);
        //this.scene.add(block.obj);
      }

      this.full2D = new _full2D2.default({
        camera: this.camera,
        // --- 结算页：点击排行榜的回调
        onClickRank: this.gameCtrl.clickRank.bind(this.gameCtrl),
        // 在玩一局
        onClickReplay: this.gameCtrl.clickReplay.bind(this.gameCtrl),
        // 分享挑战
        onClickShare: this.gameCtrl.shareBattleCard.bind(this.gameCtrl),
        // -- 首页：游戏开始
        onClickStart: this.gameCtrl.clickStart.bind(this.gameCtrl),
        // 点击排行
        onShowFriendRank: this.gameCtrl.showFriendRank.bind(this.gameCtrl),
        // -- 挑战页面
        onBattlePlay: this.gameCtrl.onBattlePlay.bind(this.gameCtrl),
        // -- 好友排行，群分享
        onGroupShare: this.gameCtrl.shareGroupRank.bind(this.gameCtrl),
        // 返回上一页
        friendRankReturn: this.gameCtrl.friendRankReturn.bind(this.gameCtrl),
        // -- 群排行，我也玩一局
        groupPlayGame: this.gameCtrl.groupPlayGame.bind(this.gameCtrl),
        // -- 围观页，开启新的一局
        onLookersStart: this.gameCtrl.onViewerStart.bind(this.gameCtrl),
        // -- 返回微信
        onReturnWechat: function onReturnWechat() {
          wx.exitMiniProgram();
        },
        // -- 纯分享
        onClickPureShare: function onClickPureShare(type) {
          (0, _shareApp.pureShare)(type, _this3.gameModel.currentScore);
        }
      });

      this.UI = new _ui2.default(this.scene, this.camera, this.full2D, this);

      if (_config.GAME.canShadow) {
        this.tailSystem = new _tailSystem2.default(this.scene, this.bottle);
      }

      this.addLight();
      this.bindEvent();
      // this.moveCamera = new Camera(this.camera, [this.shadowLight]);

      // 围观群众
      this.viewer = new _viewer2.default(this.camera);

      // 初始化好友超越机制
      this.rankSystem = new _rankSystem2.default(this);

      // 绑定当服务器
      // Network.onServerConfigForbid(this.gameCtrl.onServerConfigForbid.bind(this.gameCtrl))

      this.audioManager.icon.play();
      this.UI.hideScore();

      // 这个一定要放在最底下
      this.gameModel.init();
      this.gameCtrl.init();
      this.gameView.init();

      /**
       * 系统事件绑定
      */
      wx.onShow(this.handleWxOnShowEvent.bind(this));
      wx.onHide(this.handleWxOnHideEvent.bind(this));
      wx.onError(this.handleWxOnError.bind(this));
      wx.onAudioInterruptionBegin && wx.onAudioInterruptionBegin(this.handleInterrupt.bind(this));

      this.gameCtrl.firstInitGame(this.options);
    }
  }, {
    key: 'loopAnimate',
    value: function loopAnimate() {
      var _this4 = this;

      var duration = 0.7;
      this.bottle.velocity.vz = Math.min(duration * _config.BOTTLE.velocityZIncrement, 180);
      this.bottle.velocity.vy = Math.min(_config.BOTTLE.velocityY + duration * _config.BOTTLE.velocityYIncrement, 180);
      var direction = new THREE.Vector3(this.nextBlock.obj.position.x - this.bottle.obj.position.x, 0, this.nextBlock.obj.position.z - this.bottle.obj.position.z);
      this.direction = new THREE.Vector2(this.nextBlock.obj.position.x - this.bottle.obj.position.x, this.nextBlock.obj.position.z - this.bottle.obj.position.z);
      this.hit = this.checkHit2(this.bottle, this.currentBlock, this.nextBlock);
      this.thirdBlock = this.generateNextBlock();
      this.thirdBlock.obj.position.set(39.7, 0, 0);
      if (this.tailSystem) {

        this.tailSystem.correctPosition();
      }
      this.bottle.jump(direction.normalize());
      this.animateTimer = setTimeout(function () {
        _this4.loopAnimate();
      }, 3000);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this5 = this;

      this.firstAnimating = true;
      var that = this;
      for (var i = 0; i < 7; ++i) {
        setTimeout(function (i) {
          return function () {
            if ((that.mode == 'single' && (that.stage == 'startPage' || that.stage == 'friendRankList') || that.guider) && that.blocks && that.blocks.length < 7) {
              var block = new _block2.default(-1, i);
              block.showup(i);
              that.scene.add(block.obj);
              that.blocks.push(block);
              if (i == 0) this.nextBlock = block;
            }
          };
        }(i), i * 200);
      }
      setTimeout(function () {
        if (!(that.mode == 'single' && (that.stage == 'startPage' || that.stage == 'friendRankList')) && !that.guider) return;
        var duration = 0.4;
        _this5.bottle.velocity.vz = Math.min(duration * _config.BOTTLE.velocityZIncrement, 180);
        _this5.bottle.velocity.vy = Math.min(_config.BOTTLE.velocityY + duration * _config.BOTTLE.velocityYIncrement, 180);
        _this5.direction = new THREE.Vector2(_this5.nextBlock.obj.position.x - _this5.bottle.obj.position.x, _this5.nextBlock.obj.position.z - _this5.bottle.obj.position.z);
        var direction = new THREE.Vector3(_this5.nextBlock.obj.position.x - _this5.bottle.obj.position.x, 0, _this5.nextBlock.obj.position.z - _this5.bottle.obj.position.z);
        _this5.bottle.jump(direction.normalize());
        _this5.hit = -1;
        _this5.nextBlock = _this5.initNextBlock;
        for (var i = 0, len = _this5.blocks.length; i < len; ++i) {
          _animation.customAnimation.to(_this5.blocks[i].hitObj.material, 1, { opacity: 0, delay: i * 0.2 + 0.5 });
        }
        for (var i = 1, len = _this5.blocks.length; i < len; ++i) {
          _animation.customAnimation.to(_this5.blocks[i].obj.position, 0.5, { z: i % 2 == 0 ? 60 : -60, delay: i * 0.1 + 2.2 });
        }
        if (_this5.guider) {
          _animation.customAnimation.to(_this5.currentBlock.obj.position, 0.5, { z: -60, delay: 2.1 });
          var currentBlock = _this5.currentBlock;
          setTimeout(function () {
            currentBlock.obj.visible = false;
          }, 3000);
        }
        _this5.currentBlock = _this5.blocks[0];
        setTimeout(function () {
          if (!(that.mode == 'single' && (that.stage == 'startPage' || that.stage == 'friendRankList')) && !that.guider) return;
          if (that.guider) {
            //this.nextBlock.change(null, null, 1);
            //this.nextBlock.obj.position.x = 14;
            _this5.full2D.showBeginnerPage();
          }
          _this5.nextBlock.popup();
          _this5.nextBlock.greenMaterial.color.setHex(0x5d5d5d);
          _this5.nextBlock.whiteMaterial.color.setHex(0xaaaaaa);
          _this5.scene.add(_this5.nextBlock.obj);
          for (var i = 1, len = _this5.blocks.length; i < len; ++i) {
            _this5.blocks[i].obj.visible = false;
          }
          if (_this5.guider) {
            _this5.animating = false;
          }
          _this5.firstAnimating = false;
        }, 3000);
        setTimeout(function () {
          if (!(that.mode == 'single' && (that.stage == 'startPage' || that.stage == 'friendRankList'))) return;
          if (!that.show) return;
          _this5.loopAnimate();
        }, 4500);
      }, 1500);
    }
  }, {
    key: 'handleWxOnShowEvent',
    value: function handleWxOnShowEvent(options) {
      //this.handleInterrupt();

      var that = this;
      wx.setKeepScreenOn && wx.setKeepScreenOn({ keepScreenOn: true });
      this.show = true;

      this.reporter.enterReport(options.scene);

      if (!this.firstInit) this.guider = false;

      if (this.guiderTimer && !this.guider) {
        clearInterval(this.guiderTimer);
        this.guiderTimer = null;
      }

      // 处理第一次提交

      this.onshowAnimateTimer = setTimeout(function (firstInit) {
        return function () {
          if (that.mode == 'single' && that.stage == 'startPage' && !that.animateTimer && that.show) {
            if (that.blocks && that.blocks.length > 0 && !that.firstAnimating) {
              that.loopAnimate();
            } else if (!that.animating && firstInit && !that.guider) {

              that.animating = true;
              that.animate();
            }
          }
        };
      }(this.firstInit), 1000);

      if (this.firstInit) {
        this.firstInit = false;
        return;
      }

      this.gameCtrl.wxOnShow(options);
    }
  }, {
    key: 'showCombo',
    value: function showCombo() {
      var _this6 = this;

      setTimeout(function () {
        _this6.combo.position.set(_this6.nextBlock.obj.position.x, _config.BLOCK.height / 2 + 0.15, _this6.nextBlock.obj.position.z);
      }, 200);
    }
  }, {
    key: 'hideCombo',
    value: function hideCombo() {
      this.combo.position.set(-30, 0, 0);
    }
  }, {
    key: 'replayGame',
    value: function replayGame(seed) {
      this.currentScore = 0;
      this.gameCtrl.onReplayGame();
      this.audioManager.restart.seek(0);
      this.audioManager.restart.play();
      if (this.guider) {
        if (this.guiderTimer) {
          clearInterval(this.guiderTimer);
          this.guiderTimer = null;
        }
        this.animating = true;
        this.animate();
        this.moveGradually(new THREE.Vector3(19, 0, 0), 3);
      } else {
        // 播放重新开始音效
        this.resetScene(seed);
        this.bottle.showup();
      }
    }
  }, {
    key: 'addWave',
    value: function addWave(amount) {
      var that = this;
      for (var i = 0; i < amount; ++i) {
        setTimeout(function (i) {
          return function () {
            that.waves[i].obj.visible = true;
            //that.waves[i].obj.material.opacity = 1;
            that.waves[i].obj.position.set(that.bottle.obj.position.x, _config.BLOCK.height / 2 + i * 0.1 + 1, that.bottle.obj.position.z);

            (0, _animation.TweenAnimation)(that.waves[i].obj.scale.x, 4, 2 / (i / 2.5 + 2) * 500, 'Linear', function (value, complete) {
              that.waves[i].obj.scale.x = value;
              that.waves[i].obj.scale.y = value;
              that.waves[i].obj.scale.z = value;
            });

            (0, _animation.TweenAnimation)(that.waves[i].obj.material.opacity, 0, 2 / (i / 2.5 + 2) * 500, 'Linear', function (value, complete) {
              that.waves[i].obj.material.opacity = value;
              if (complete) {
                that.waves[i].reset();
              }
            });

            /*           TweenMax.to(that.waves[i].obj.scale, 2 / (i / 2.5 + 2), { x: 4, y: 4, z: 4 }); */
            // TweenMax.to(that.waves[i].obj.material, 2 / (i / 2.5 + 2), {
            // opacity: 0, onComplete: function () {
            // that.waves[i].reset();
            // }
            /* }); */
          };
        }(i), i * 200);
      }
    }
  }, {
    key: 'addLight',
    value: function addLight() {
      var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      this.shadowLight = new THREE.DirectionalLight(0xffffff, 0.28);
      this.shadowLight.position.set(0, 15, 10);
      if (this.renderer.shadowMap.enabled) {
        this.shadowLight.castShadow = true;
        this.shadowLight.target = this.shadowTarget;
        this.shadowLight.shadow.camera.near = 5;
        this.shadowLight.shadow.camera.far = 30;
        this.shadowLight.shadow.camera.left = -10;
        this.shadowLight.shadow.camera.right = 10;
        this.shadowLight.shadow.camera.top = 10;
        this.shadowLight.shadow.camera.bottom = -10;
        this.shadowLight.shadow.mapSize.width = 512;
        this.shadowLight.shadow.mapSize.height = 512;
        var shadowGeometry = new THREE.PlaneGeometry(65, 25);
        this.shadowGround = new THREE.Mesh(shadowGeometry, new THREE.ShadowMaterial({ transparent: true, color: 0x000000, opacity: 0.3 }));
        this.shadowGround.receiveShadow = true;
        //this.shadowGround.position.z = 0;
        this.shadowGround.position.x = -25;
        this.shadowGround.position.y = -18;
        this.shadowGround.position.z = -15;
        this.shadowGround.rotation.x = -Math.PI / 2;
        this.shadowLight.add(this.shadowGround);
      }
      //this.shadowLight.shadow.radius = 1024;
      // var helper = new THREE.CameraHelper(this.shadowLight.shadow.camera);
      // this.scene.add( helper );

      // var light = new THREE.DirectionalLight(0xffffff, 0.15);
      // light.position.set(-5, 2, 20);
      // this.scene.add(light);

      //this.scene.add(hemisphereLight);
      this.scene.add(this.shadowLight);

      this.scene.add(ambientLight);
    }
  }, {
    key: 'checkHit2',
    value: function checkHit2(bottle, currentBlock, nextBlock, initY) {
      var flyingTime = bottle.velocity.vy / _config.GAME.gravity * 2;
      initY = initY || +bottle.obj.position.y.toFixed(2);
      var destinationY = _config.BLOCK.height / 2;

      var differenceY = destinationY - initY;
      var time = +((-bottle.velocity.vy + Math.sqrt(Math.pow(bottle.velocity.vy, 2) - 2 * _config.GAME.gravity * differenceY)) / -_config.GAME.gravity).toFixed(2);
      flyingTime -= time;
      flyingTime = +flyingTime.toFixed(2);
      var destination = [];
      var bottlePosition = new THREE.Vector2(bottle.obj.position.x, bottle.obj.position.z);
      var translate = this.direction.setLength(bottle.velocity.vz * flyingTime);
      bottlePosition.add(translate);
      bottle.destination = [+bottlePosition.x.toFixed(2), +bottlePosition.y.toFixed(2)];
      destination.push(+bottlePosition.x.toFixed(2), +bottlePosition.y.toFixed(2));
      if (this.animating) return 7;
      if (nextBlock) {
        var nextDiff = Math.pow(destination[0] - nextBlock.obj.position.x, 2) + Math.pow(destination[1] - nextBlock.obj.position.z, 2);
        var nextPolygon = nextBlock.getVertices();
        var result1;
        if ((0, _pointInPolygon2.default)(destination, nextPolygon)) {
          if (Math.abs(nextDiff) < 0.5) {
            return 1;
          } else {
            return 7;
          }
        } else if ((0, _pointInPolygon2.default)([destination[0] - _config.BOTTLE.bodyWidth / 2, destination[1]], nextPolygon) || (0, _pointInPolygon2.default)([destination[0], destination[1] + _config.BOTTLE.bodyDepth / 2], nextPolygon)) {
          result1 = 5;
        } else if ((0, _pointInPolygon2.default)([destination[0], destination[1] - _config.BOTTLE.bodyDepth / 2], nextPolygon) || (0, _pointInPolygon2.default)([destination[0] + _config.BOTTLE.bodyDepth / 2, destination[1]], nextPolygon)) {
          result1 = 3;
        }
      }

      var currentPolygon = currentBlock.getVertices();
      var result2;
      if ((0, _pointInPolygon2.default)(destination, currentPolygon)) {
        return 2;
      } else if ((0, _pointInPolygon2.default)([destination[0], destination[1] + _config.BOTTLE.bodyDepth / 2], currentPolygon) || (0, _pointInPolygon2.default)([destination[0] - _config.BOTTLE.bodyWidth / 2, destination[1]], currentPolygon)) {
        if (result1) return 6;
        return 4;
      }
      return result1 || result2 || 0;
    }
  }, {
    key: 'shuffleArray',
    value: function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor((0, _random.random)() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }, {
    key: 'generateNextBlock',
    value: function generateNextBlock() {
      var block;
      var interval = 5;
      if (this.UI.score > 1000) {
        interval = 6;
      } else if (this.succeedTime > 3000) {
        interval = 7;
      }
      if (!this.animating) {
        this.shuffleArray(this.blocksPool);
      }
      for (var i = 0, len = this.blocksPool.length; i < len; ++i) {
        if (this.succeedTime - this.lastAddBonus >= interval && this.blocksPool[i].order >= 13 || this.succeedTime - this.lastAddBonus < interval && this.blocksPool[i].order < 13) {
          block = this.blocksPool[i];
          if (block.order >= 13) {
            if (this.lastBonusOrder && this.lastBonusOrder == block.order || this.UI.score < 100 && block.order == 29) {
              continue;
            }
            this.lastAddBonus = this.succeedTime;
            this.lastBonusOrder = block.order;
          }
          this.blocksInUse.push(block);
          this.blocksPool.splice(i, 1);
          break;
        }
      }
      if (!block) {
        var temp = this.blocksInUse.shift();
        while (temp.order >= 13) {
          temp.obj.visible = false;
          this.blocksPool.push(temp);
          temp = this.blocksInUse.shift();
        }
        block = temp;
        this.blocksInUse.push(block);
      }
      block.obj.visible = false;
      block.change();
      return block;
    }
  }, {
    key: 'live',
    value: function live() {
      var _this7 = this;

      ++this.liveTime;
      this.firstAnimating = false;
      if (this.animateTimer) {
        clearTimeout(this.animateTimer);
        this.animateTimer = null;
      }
      _animation.TweenAnimation.killAll();
      this.animating = false;
      _config.BLOCK.minRadiusScale = 0.8;
      _config.BLOCK.maxRadiusScale = 1;
      _config.BLOCK.minDistance = 1;
      _config.BLOCK.maxDistance = 17;
      setTimeout(function () {
        _this7.bottle.reset();
        _this7.bottle.obj.position.x = 0;
        _this7.bottle.showup();
      }, 2000);
      this.actionList = [];
      this.musicList = [];
      this.touchList = [];
      wx.triggerGC && wx.triggerGC();
    }
  }, {
    key: 'resetScene',
    value: function resetScene(seed) {
      this.firstAnimating = false;
      for (var i = 0, len = this.blocks.length; i < len; ++i) {
        this.scene.remove(this.blocks[i].obj);
      }
      this.blocks = [];
      if (this.mode == 'observe') {
        this.audioManager.scale_intro.stop();
        this.audioManager.scale_loop.stop();
      }
      this.randomSeed = seed || Date.now();
      (0, _random.setRandomSeed)(this.randomSeed);
      this.actionList = [];
      this.musicList = [];
      this.touchList = [];
      if (this.animateTimer) {
        clearTimeout(this.animateTimer);
        this.animateTimer = null;
      }

      // 修复围观在蓄力到一半的情况下resetScene底座压缩到一半没回弹的情况
      if (this.currentBlock) {
        this.currentBlock.reset();
      }
      _animation.TweenAnimation.killAll();
      this.animating = false;
      _config.BLOCK.minRadiusScale = 0.8;
      _config.BLOCK.maxRadiusScale = 1;
      _config.BLOCK.minDistance = 1;
      _config.BLOCK.maxDistance = 17;
      // this.AudioManager.restart.currentTime = 0
      // this.audioManager.restart.play()
      for (var i = 0, len = this.blocksInUse.length; i < len; ++i) {
        var block = this.blocksInUse.pop();
        block.obj.visible = false;
        block.reset();
        this.blocksPool.push(block);
      }
      for (var i = 0, len = this.waves.length; i < len; ++i) {
        this.waves[i].reset();
      }

      this.blocksPool.sort(function (a, b) {
        return a.order - b.order;
      });
      this.currentBlock = this.blocksPool.shift();
      this.currentBlock.obj.visible = true;
      this.scene.add(this.currentBlock.obj);
      this.blocksInUse.push(this.currentBlock);
      this.shadowTarget && this.shadowTarget.position.set(0, 0, 0);
      this.nextBlock = this.blocksPool.shift();
      this.currentBlock.change(null, null, 1);
      this.nextBlock.change(null, null, 1);
      this.nextBlock.obj.position.set(20, 0, 0);
      this.currentBlock.obj.position.set(0, 0, 0);
      this.nextBlock.obj.visible = true;
      this.scene.add(this.nextBlock.obj);
      this.blocksInUse.push(this.nextBlock);
      this.bottle.reset();

      this.thirdBlock = null;

      this.UI.reset();

      this.rankSystem.reset();

      this.lastAddBonus = -2;
      this.succeedTime = 0;

      //this.moveCamera.reset();
      this.doubleHit = 0;
      this.camera.position.set(-17, 30, 26);
      this.shadowLight.position.set(0, 15, 10);
      // this.UI.showScore();
      wx.triggerGC && wx.triggerGC();
    }
  }, {
    key: 'generateHardDistances',
    value: function generateHardDistances() {
      var amount = 2 + Math.floor((0, _random.random)() * 2);
      var distances = [];
      for (var i = 0; i < amount; ++i) {
        if (i < amount - 1) {
          distances.push(_config.BLOCK.minDistance + (0, _random.random)() * 2);
        } else {
          distances.push(_config.BLOCK.maxDistance - (0, _random.random)() * 2);
        }
      }
      return distances;
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var that = this;
      that.instructionCtrl.bindCmdHandler(function (data) {
        if (data.type == -1) {
          that.gameCtrl.showPlayerGG(data.s);
          that.instructionCtrl.onCmdComplete();
          return;
        } else if (data.type == 0) {
          // that.gameCtrl.showPlayerWaiting()
          // that.replayGame(data.seed)
          that.socketFirstSync = true;
          that.bottle.reset();
          that.UI.scoreText.changeStyle({ textAlign: 'center' });
          that.UI.setScore(0);
          that.instructionCtrl.onCmdComplete();
          return;
        } else {
          that.gameCtrl.showPlayerWaiting();
          if (data.score != that.UI.score) {
            that.UI.score = data.score;
            that.UI.setScore(data.score);
          }
        }

        if (!data || !data.b || !data.b.vy) {
          that.instructionCtrl.onCmdComplete();
          return;
        }
        if (that.socketFirstSync) {
          that.socketFirstSync = false;
          that.camera.position.set(data.ca.x, data.ca.y, data.ca.z);
          that.ground.obj.position.set(data.gd.x, data.gd.y, data.gd.z);
        }
        // 如果两个序号不一样，就重置两个队列
        if (that.currentBlock.order != data.c.order || that.nextBlock.order != data.n.order) {
          for (var i = 0, len = that.blocksInUse.length; i < len; ++i) {
            var block = that.blocksInUse.pop();
            that.scene.remove(block.obj);
            that.blocksPool.push(block);
          }
          var cIn = that.blocksPool.findIndex(function (el) {
            return el.order == data.c.order;
          });
          that.currentBlock = that.blocksPool[cIn];
          var temp = that.blocksPool.splice(cIn, 1);
          that.blocksInUse.push(temp[0]);

          var nIn = that.blocksPool.findIndex(function (el) {
            return el.order == data.n.order;
          });
          that.nextBlock = that.blocksPool[nIn];
          var temp = that.blocksPool.splice(nIn, 1);
          that.blocksInUse.push(temp[0]);
        }
        that.scene.add(that.currentBlock.obj);
        that.scene.add(that.nextBlock.obj);
        that.currentBlock.obj.visible = true;
        that.nextBlock.obj.visible = true;
        that.currentBlock.obj.position.x = data.c.x;
        that.currentBlock.obj.position.z = data.c.z;
        that.currentBlock.change(data.c.r, data.c.type, data.c.rs);

        that.nextBlock.obj.position.x = data.n.x;
        that.nextBlock.obj.position.z = data.n.z;
        that.nextBlock.change(data.n.r, data.n.type, data.n.rs);

        that.bottle.obj.position.set(data.b.x, _config.BLOCK.height / 2, data.b.z);
        that.bottle.velocity.vz = data.b.vz;
        that.bottle.velocity.vy = data.b.vy;
        that.distance = data.di;
        that.straight = data.s;
        var direction = new THREE.Vector3(that.nextBlock.obj.position.x - that.bottle.obj.position.x, 0, that.nextBlock.obj.position.z - that.bottle.obj.position.z);
        that.direction = new THREE.Vector2(that.nextBlock.obj.position.x - that.bottle.obj.position.x, that.nextBlock.obj.position.z - that.bottle.obj.position.z);
        that.checkHit2(that.bottle, that.currentBlock, that.nextBlock, data.b.y);
        that.quick = data.q;
        // 先在pool里面找第三块
        if (data.t) {

          var tIn = that.blocksPool.findIndex(function (el) {
            return el.order == data.t.order;
          });
          if (tIn > -1) {
            that.thirdBlock = that.blocksPool[tIn];
            var temp = that.blocksPool.splice(tIn, 1);
            that.blocksInUse.push(that.thirdBlock);
          } else {
            that.thirdBlock = that.blocksInUse.find(function (el) {
              return el.order == data.t.order;
            });
            that.scene.remove(that.thirdBlock.obj);
          }

          that.thirdBlock.change(data.t.r, data.t.type, data.t.rs);
        }
        that.hit = data.h;
        if (that.tailSystem) {

          that.tailSystem.correctPosition();
        }

        //that.audioManager.scale_intro.stop();
        that.audioManager.scale_intro.seek(0);
        that.audioManager.scale_intro.play();
        that.bottle.prepare();
        that.currentBlock.shrink();

        var caPos = {
          x: data.ca.x,
          y: data.ca.y,
          z: data.ca.z
        };
        var gdPos = {
          x: data.gd.x,
          y: data.gd.y,
          z: data.gd.z
        };
        that.stopBlockMusic();
        that.instructionCtrl.icTimeout = setTimeout(function () {
          that.audioManager.scale_intro.stop();
          that.audioManager.scale_loop.stop();
          if (that.currentBlock.order == 15) {
            that.currentBlock.hideGlow();
          }
          that.currentBlock.rebound();
          that.camera.position.set(caPos.x, caPos.y, caPos.z);
          that.ground.obj.position.set(gdPos.x, gdPos.y, gdPos.z);
          caPos = null;
          gdPos = null;
          that.bottle.jump(direction.normalize());
        }, data.d * 1000);
        data = null;
      });
      that.gameSocket.onReciveCommand(function (seq, data) {
        if (that.mode != 'observe') {
          return;
        }
        that.instructionCtrl.onReceiveCommand(data, seq);
      });

      that.gameSocket.onPeopleCome(function (data) {
        that.gameCtrl.onPeopleCome(data);
      });

      that.gameSocket.onPlayerOut(function () {
        that.gameCtrl.onPlayerOut();
      });

      that.gameSocket.onJoinSuccess(function (success) {
        that.gameCtrl.socketJoinSuccess(success);
        if (that.mode == 'observe') {
          // 展示初始画面
          that.bottle.obj.position.set(8, -_config.BLOCK.height / 2, 0);
          that.camera.position.set(-17, 30, 26);
          that.shadowLight.position.set(0, 15, 10);
          if (that.currentBlock) {
            that.currentBlock.obj.visible = false;
          }
          if (that.nextBlock) {
            that.nextBlock.obj.visible = false;
          }
        }
      });

      canvas.addEventListener('touchstart', function (e) {
        // that.full2D.doTouchStartEvent(e); return;
        /**
         * 全局都能触发的事件
         */

        if (that.mode == 'single' || that.mode == 'player') {
          if (that.stage == 'game' && !that.is_from_wn && !that.guider) {
            if (e.changedTouches[0].clientX < WIDTH * 0.13 && e.changedTouches[0].clientY > HEIGHT * (1 - 0.12)) {
              that.gameCtrl.shareObservCard();
              return;
            }
          }
        }

        /**
         *  根据stage来改变派发事件
         */
        if (that.stage == 'friendRankList' || that.stage == 'battlePage' || that.stage == 'groupRankList' || that.stage == 'singleSettlementPgae' || that.stage == 'startPage') {
          that.full2D.doTouchStartEvent(e);
          return;
        }

        if (that.stage == 'viewerWaiting' || that.stage == 'viewerGG' || that.stage == 'viewerOut') {
          that.full2D.doTouchEndEvent(e);
          return;
        }

        if (that.stage == 'game') {
          if (that.mode === 'observe') return;
          //that.audioManager.scale_loop.stop()
          //that.audioManager.scale_intro.stop()
          if (that.bottle.status === 'stop' && !that.pendingReset && !(that.guider && that.animating)) {
            // 缩放声音开始
            // that.audioManager.scale.currentTime = 0
            that.stopBlockMusic();
            that.audioManager.scale_intro.seek(0);
            that.audioManager.scale_intro.play();
            that.bottle.prepare();
            that.currentBlock.shrink();
            that.mouseDownTime = Date.now();
            //console.log("touchend", that.mouseDownTime)
          }
          return;
        }
      });

      var touchEnd = function touchEnd(e) {
        //console.log('touchEnd', that.stage, that.mode)
        // that.full2D.doTouchEndEvent(e); return;
        var x = e.changedTouches[0].clientX;
        var y = e.changedTouches[0].clientY;

        if (that.bottle.status === 'prepare' && !that.pendingReset && !(that.guider && that.animating) && that.stage != 'game') {
          that.handleWxOnError({
            'message': 'touchstart triggered and bottle prepare but touchend error.  stage: ' + that.stage,
            'stack': ''
          });
        }

        if (that.stage == 'singleSettlementPgae' || that.stage == 'startPage') {
          that.full2D.doTouchEndEvent(e);
          return;
        }
        if (that.stage == 'viewerWaiting' || that.stage == 'viewerGG' || that.stage == 'viewerOut') {
          that.full2D.doTouchEndEvent(e);
          return;
        }

        if (that.stage == 'friendRankList') {
          that.full2D.doTouchEndEvent(e);
          return;
        }

        if (that.stage == 'battlePage') {
          that.full2D.doTouchEndEvent(e);
          return;
        }

        if (that.stage == 'groupRankList') {
          // console.log('groupRankList', 'touch')
          that.full2D.doTouchEndEvent(e);
        }

        if (that.stage == 'game') {
          if (that.bottle.status === 'prepare' && !that.pendingReset && !(that.guider && that.animating)) {
            // console.log(that.blocksPool, that.blocksInUse)
            // 缩放声音结束
            that.audioManager.scale_intro.stop();
            that.audioManager.scale_loop.stop();
            // that.audioManager['jump_' + jumpType].seek(0);
            // that.audioManager['jump_' + jumpType].play();
            that.currentBlock.rebound();
            var duration = (Date.now() - that.mouseDownTime) / 1000;
            // that.duration.push(duration);

            that.bottle.velocity.vz = Math.min(duration * _config.BOTTLE.velocityZIncrement, 150);
            that.bottle.velocity.vz = +that.bottle.velocity.vz.toFixed(2);
            that.bottle.velocity.vy = Math.min(_config.BOTTLE.velocityY + duration * _config.BOTTLE.velocityYIncrement, 180);
            that.bottle.velocity.vy = +that.bottle.velocity.vy.toFixed(2);
            that.direction = new THREE.Vector2(that.nextBlock.obj.position.x - that.bottle.obj.position.x, that.nextBlock.obj.position.z - that.bottle.obj.position.z);
            that.direction.x = +that.direction.x.toFixed(2);
            that.direction.y = +that.direction.y.toFixed(2);
            var direction = new THREE.Vector3(that.direction.x, 0, that.direction.y);
            that.bottle.jump(direction.normalize());
            that.hideCombo();
            that.hit = that.checkHit2(that.bottle, that.currentBlock, that.nextBlock);
            if (that.currentBlock.order == 15) {
              that.currentBlock.hideGlow();
            }
            // if (that.UI.score - that.lastHardLevel > 15000 && that.hardDistances.length == 0) {
            //   that.lastHardLevel = that.UI.score;
            //   that.hardDistances = that.generateHardDistances();
            // }
            // if (that.hardDistances.length > 0) {
            //   that.distance = that.hardDistances.shift();
            // }
            // else {

            that.distance = _config.BLOCK.minDistance + (0, _random.random)() * (_config.BLOCK.maxDistance - _config.BLOCK.minDistance);
            that.distance = +that.distance.toFixed(2);
            that.straight = (0, _random.random)() > 0.5 ? 1 : 0;

            if (that.hit === 1 || that.hit === 7) {
              var block = that.generateNextBlock();
              that.thirdBlock = block;
              that.quick = Date.now() - that.lastSucceedTime < 800 || false;
              that.quickArr.push(that.quick);
              if (that.mode === 'player') {
                ++that.seq;
                that.gameSocket.sendCommand(that.seq, {
                  type: 1,
                  c: { x: that.currentBlock.obj.position.x, z: that.currentBlock.obj.position.z, order: that.currentBlock.order, type: that.currentBlock.type, r: that.currentBlock.radius, rs: that.currentBlock.radiusScale },
                  n: { x: that.nextBlock.obj.position.x, z: that.nextBlock.obj.position.z, order: that.nextBlock.order, type: that.nextBlock.type, r: that.nextBlock.radius, rs: that.nextBlock.radiusScale },
                  d: duration,
                  b: { x: that.bottle.obj.position.x, y: +that.bottle.obj.position.y.toFixed(2), z: that.bottle.obj.position.z, vy: that.bottle.velocity.vy, vz: that.bottle.velocity.vz },
                  t: { order: that.thirdBlock.order, type: that.thirdBlock.type, r: that.thirdBlock.radius, rs: that.thirdBlock.radiusScale },
                  h: that.hit,
                  di: that.distance,
                  s: that.straight,
                  q: that.quick,
                  ca: { x: that.camera.position.x, y: that.camera.position.y, z: that.camera.position.z },
                  gd: { x: that.ground.obj.position.x, y: that.ground.obj.position.y, z: that.ground.obj.position.z },
                  score: that.UI.score
                  // nickname: myUserInfo.nickname,
                  // img: myUserInfo.headimg
                });
              }
            } else {
              if (that.mode === 'player') {
                ++that.seq;
                that.gameSocket.sendCommand(that.seq, {
                  type: 1,
                  c: { x: that.currentBlock.obj.position.x, z: that.currentBlock.obj.position.z, order: that.currentBlock.order, type: that.currentBlock.type, r: that.currentBlock.radius, rs: that.currentBlock.radiusScale },
                  n: { x: that.nextBlock.obj.position.x, z: that.nextBlock.obj.position.z, order: that.nextBlock.order, type: that.nextBlock.type, r: that.nextBlock.radius, rs: that.nextBlock.radiusScale },
                  d: duration,
                  b: { x: that.bottle.obj.position.x, y: +that.bottle.obj.position.y.toFixed(2), z: that.bottle.obj.position.z, vy: that.bottle.velocity.vy, vz: that.bottle.velocity.vz },
                  // t: { order: that.thirdBlock.order, type: that.thirdBlock.type, r: that.thirdBlock.radius, rs: that.thirdBlock.radiusScale },
                  h: that.hit,
                  di: that.distance,
                  s: that.straight,
                  q: that.quick,
                  ca: { x: that.camera.position.x, y: that.camera.position.y, z: that.camera.position.z },
                  gd: { x: that.ground.obj.position.x, y: that.ground.obj.position.y, z: that.ground.obj.position.z },
                  score: that.UI.score
                  // nickname: myUserInfo.nickname,
                  // img: myUserInfo.headimg
                });
              }
            }
            if (that.mode != 'observe') {
              that.actionList.push([duration, +that.bottle.obj.position.y.toFixed(2), that.quick]);
              that.musicList.push(that.musicScore);
              if (e.changedTouches && e.changedTouches[0]) {
                that.touchList.push([e.changedTouches[0].clientX, e.changedTouches[0].clientY]);
              }
            }
          }
        }
      };

      canvas.addEventListener('touchend', touchEnd);
      canvas.addEventListener('touchmove', function (e) {
        // that.full2D.doTouchMoveEvent(e); return;
        if (that.stage == 'battlePage' || that.stage == 'friendRankList' || that.stage == 'groupRankList') {
          that.full2D.doTouchMoveEvent(e);
          return;
        }
      });
    }
  }, {
    key: 'stopBlockMusic',
    value: function stopBlockMusic() {
      if (this.currentBlock.order == 19) {
        this.audioManager.sing.stop();
        this.currentBlock.stopMusic();
      } else if (this.currentBlock.order == 24) {
        this.audioManager.store.stop();
        this.currentBlock.closeDoor();
      } else if (this.currentBlock.order == 26) {
        this.audioManager.water.stop();
      }
      this.audioManager.clearTimer();
      if (this.musicTimer) {
        clearTimeout(this.musicTimer);
        this.musicTimer = null;
      }
    }
  }, {
    key: 'handleNetworkFucked',
    value: function handleNetworkFucked(show) {
      var word = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '网络异常,点击确定进入游戏';

      this.rollBackToSingle();

      if (show) {
        wx.showModal({
          title: '提示',
          content: word,
          showCancel: false
        });
      }
    }
  }, {
    key: 'handleSocketFucked',
    value: function handleSocketFucked() {
      // console.log('handleSocketFucked')
      this.gameSocket.close();
      if (this.mode == 'player') {
        this.shareObservCardFail();
        this.updateUI();
      }
      if (this.mode == 'observe') {
        this.handleNetworkFucked(true);
      }
    }
  }, {
    key: 'handleInterrupt',
    value: function handleInterrupt() {
      if (this.bottle.status == 'prepare') {
        this.bottle.stopPrepare();
        this.currentBlock.reset();
        this.audioManager.scale_loop.stop();
      }
    }
  }, {
    key: 'handleWxOnError',
    value: function handleWxOnError(error) {
      var serverRation = _session2.default.serverConfig.bad_js_ratio == undefined ? 1000000 : _session2.default.serverConfig.bad_js_ratio;
      var ratio = serverRation / 1000000 || 1;
      // var ratio = 1;
      if (Math.random() <= ratio) {
        _network2.default.badReport(error.message, error.stack);
      }
    }
  }, {
    key: 'sendServerError',
    value: function sendServerError(word) {
      _network2.default.sendServerError(word);
    }
  }]);

  return Game;
}();

if (wx.getLaunchOptionsSync) {
  var options = wx.getLaunchOptionsSync();

  var controller = new Game(options);
} else {

  var controller = new Game();
}

var lastFrameTime = Date.now();

var oRequestAnimation = requestAnimationFrame;
var frameCallbacks = [];
var lastestFrameCallback = void 0;

var requestAnimationFrameHandler = function requestAnimationFrameHandler() {
  var _frameCallbacks = [];
  var _lastestFrameCallback = lastestFrameCallback;

  frameCallbacks.forEach(function (cb) {
    _frameCallbacks.push(cb);
  });
  lastestFrameCallback = undefined;
  frameCallbacks.length = 0;

  _frameCallbacks.forEach(function (cb) {
    typeof cb === 'function' && cb();
  });
  if (typeof _lastestFrameCallback === 'function') {
    _lastestFrameCallback();
  }

  oRequestAnimation(requestAnimationFrameHandler);
};

window.requestAnimationFrame = function (callback, isLastest) {
  if (!isLastest) {
    frameCallbacks.push(callback);
  } else {
    lastestFrameCallback = callback;
  }
};

requestAnimationFrameHandler();

animate();
function animate() {
  //stats.begin();
  var now = Date.now();
  var tickTime = now - lastFrameTime;
  lastFrameTime = now;
  requestAnimationFrame(animate, true);
  if (tickTime > 100) return;
  controller.update(tickTime / 1000);
  //stats.end();
}

// setTimeout(() => {
//   stats.stop();
// }, 5000)

/***/ }),

/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.REPORTERTIMEOUT = exports.numberMaterial = exports.grayMaterial = exports.shadow = exports.desk_shadow = exports.cylinder_shadow = exports.loader = exports.FRUSTUMSIZE = exports.BLOCK = exports.AUDIO = exports.CAMERA = exports.WAVE = exports.GAME = exports.PARTICLE = exports.BOTTLE = exports.COLORS = undefined;

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var COLORS = exports.COLORS = {
	red: 0xCC463D,
	pureRed: 0xff0000,
	white: 0xd8d0d1,
	brown: 0x59332e,
	pink: 0xf39ab7,
	brownDark: 0x23190f,
	blue: 0x009FF7,
	yellow: 0xFFBE00,
	pureWhite: 0xffffff,
	orange: 0xf7aa6c,
	orangeDark: 0xFF8C00,
	black: 0x000000,
	cream: 0xF5F5F5,
	green: 0x2C9F67,
	lightBlue: 0xD1EEEE,
	cyan: 0x93e4ce,
	yellowBrown: 0xffcf8b,
	purple: 0x8a9ad6

};

var BOTTLE = exports.BOTTLE = {
	// bodyWidth: 2.8,
	// bodyDepth: 2.8,
	headRadius: 0.945,
	bodyWidth: 2.34,
	bodyDepth: 2.34,

	bodyHeight: 3.2,

	reduction: 0.005,
	minScale: 0.5,
	velocityYIncrement: 15,
	velocityY: 135,
	velocityZIncrement: 70
};

var PARTICLE = exports.PARTICLE = {
	radius: 0.3,
	detail: 2
};

var GAME = exports.GAME = {
	BOTTOMBOUND: -55,
	TOPBOUND: 41,
	gravity: 720,
	//gravity: 750,
	touchmoveTolerance: 20,
	LEFTBOUND: -140,
	topTrackZ: -30,
	rightBound: 90,
	HEIGHT: window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
	WIDTH: window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
	canShadow: true
};

var WAVE = exports.WAVE = {
	innerRadius: 2.2,
	outerRadius: 3,
	thetaSeg: 25
};

var CAMERA = exports.CAMERA = {
	fov: 60
};

var AUDIO = exports.AUDIO = {
	success: 'res/success.mp3',
	perfect: 'res/perfect.mp3',
	scale_loop: 'res/scale_loop.mp3',
	scale_intro: 'res/scale_intro.mp3',
	restart: 'res/start.mp3',
	fall: 'res/fall.mp3',
	fall_2: 'res/fall_2.mp3',
	combo1: 'res/combo1.mp3',
	combo2: 'res/combo2.mp3',
	combo3: 'res/combo3.mp3',
	combo4: 'res/combo4.mp3',
	combo5: 'res/combo5.mp3',
	combo6: 'res/combo6.mp3',
	combo7: 'res/combo7.mp3',
	combo8: 'res/combo8.mp3',
	icon: 'res/icon.mp3',
	pop: 'res/pop.mp3',
	sing: 'res/sing.mp3',
	store: 'res/store.mp3',
	water: 'res/water.mp3'
};

var BLOCK = exports.BLOCK = {
	radius: 5,
	width: 10,
	minRadiusScale: 0.8,
	maxRadiusScale: 1,
	height: 5.5,
	radiusSegments: [4, 50],
	floatHeight: 0,
	minDistance: 1,
	maxDistance: 17,
	minScale: BOTTLE.minScale,
	reduction: BOTTLE.reduction,
	moveDownVelocity: 0.07,
	fullHeight: 5.5 / 21 * 40
};

var FRUSTUMSIZE = exports.FRUSTUMSIZE = window.innerHeight / window.innerWidth / 736 * 414 * 60;

var loader = exports.loader = new THREE.TextureLoader();

var cylinder_shadow = exports.cylinder_shadow = new THREE.MeshBasicMaterial({ map: loader.load('res/cylinder_shadow.png'), transparent: true, alphaTest: 0.01 });
var desk_shadow = exports.desk_shadow = new THREE.MeshBasicMaterial({ map: loader.load('res/desk_shadow.png'), transparent: true, alphaTest: 0.01 });
var shadow = exports.shadow = new THREE.MeshBasicMaterial({ map: loader.load('res/shadow.png'), transparent: true, alphaTest: 0.01 });
var grayMaterial = exports.grayMaterial = new THREE.MeshLambertMaterial({ map: loader.load('res/gray.png') });
var numberMaterial = exports.numberMaterial = new THREE.MeshLambertMaterial({ map: loader.load('res/number.png'), alphaTest: 0.6 });

var REPORTERTIMEOUT = exports.REPORTERTIMEOUT = 60001;

/***/ }),

/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TweenAnimation = exports.customAnimation = undefined;

var _tween = __webpack_require__(41);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animationId = -1;
var killAnimationId = animationId - 1;

var customAnimation = exports.customAnimation = {};
customAnimation.to = function (obj, duration, options) {
    duration *= 1000;
    var delay = options.delay || 0;
    for (var name in options) {
        if (name === 'delay') {
            delay = options[name];
        } else if (name === 'onComplete') {} else if (name === 'ease') {} else {
            setTimeout(function (name) {
                return function () {
                    //console.log("name", name, obj[name], options[name], duration, delay, obj)
                    TweenAnimation(obj[name], options[name], duration, options.ease || 'Linear', function (value, complete) {
                        obj[name] = value;
                        if (complete) {
                            options.onComplete && options.onComplete();
                        }
                    });
                };
            }(name), delay * 1000);
        }
    }
};

// 对运动方法进行封装
var TweenAnimation = exports.TweenAnimation = function TweenAnimation(from, to, duration, easing, callback) {
    var selfAnimationId = ++animationId;
    var isUndefined = function isUndefined(obj) {
        return typeof obj == 'undefined';
    };
    var isFunction = function isFunction(obj) {
        return typeof obj == 'function';
    };
    var isNumber = function isNumber(obj) {
        return typeof obj == 'number';
    };
    var isString = function isString(obj) {
        return typeof obj == 'string';
    };

    // 转换成毫秒
    var toMillisecond = function toMillisecond(obj) {
        if (isNumber(obj)) {
            return obj;
        } else if (isString(obj)) {
            if (/\d+m?s$/.test(obj)) {
                if (/ms/.test(obj)) {
                    return 1 * obj.replace('ms', '');
                }
                return 1000 * obj.replace('s', '');
            } else if (/^\d+$/.test(obj)) {
                return +obj;
            }
        }
        return -1;
    };

    if (!isNumber(from) || !isNumber(to)) {
        if (window.console) {
            console.error('from和to两个参数必须且为数值');
        }
        return 0;
    }

    // 缓动算法
    var tween = _tween2.default;

    if (!tween) {
        if (window.console) {
            console.error('缓动算法函数缺失');
        }
        return 0;
    }

    // duration, easing, callback均为可选参数
    // 而且顺序可以任意
    var options = {
        duration: 300,
        easing: 'Linear',
        callback: function callback() {}
    };

    var setOptions = function setOptions(obj) {
        if (isFunction(obj)) {
            options.callback = obj;
        } else if (toMillisecond(obj) != -1) {
            options.duration = toMillisecond(obj);
        } else if (isString(obj)) {
            options.easing = obj;
        }
    };
    setOptions(duration);
    setOptions(easing);
    setOptions(callback);

    // requestAnimationFrame的兼容处理
    if (!window.requestAnimationFrame) {
        requestAnimationFrame = function requestAnimationFrame(fn) {
            setTimeout(fn, 17);
        };
    }

    // 算法需要的几个变量
    var start = -1;
    // during根据设置的总时间计算
    var during = Math.ceil(options.duration / 17);

    // 当前动画算法
    // 确保首字母大写
    options.easing = options.easing.slice(0, 1).toUpperCase() + options.easing.slice(1);
    var arrKeyTween = options.easing.split('.');
    var fnGetValue;

    if (arrKeyTween.length == 1) {
        fnGetValue = tween[arrKeyTween[0]];
    } else if (arrKeyTween.length == 2) {
        fnGetValue = tween[arrKeyTween[0]] && tween[arrKeyTween[0]][arrKeyTween[1]];
    }
    if (isFunction(fnGetValue) == false) {
        console.error('没有找到名为"' + options.easing + '"的动画算法');
        return;
    }

    var startTime = Date.now();
    var lastTime = Date.now();
    // 运动
    var step = function step() {
        var currentTime = Date.now();
        var interval = currentTime - lastTime;
        var fps = Math.ceil(1000 / interval);
        lastTime = currentTime;
        if (interval > 100) {
            requestAnimationFrame(step);
            return;
        }
        if (fps >= 30) {
            start++;
        } else {
            var _start = Math.floor((currentTime - startTime) / 17);
            start = _start > start ? _start : start + 1;
        }

        // 当前的运动位置
        var value = fnGetValue(start, from, to - from, during);

        // 如果还没有运动到位，继续
        if (start <= during && selfAnimationId > killAnimationId) {
            options.callback(value);
            requestAnimationFrame(step);
        } else if (start > during && selfAnimationId > killAnimationId) {
            // 动画结束，这里可以插入回调...
            options.callback(to, true);
        } else {}
    };
    // 开始执行动画
    step();
};

TweenAnimation.killAll = function () {
    killAnimationId = animationId;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, null, [{
    key: 'getFriendsScore',
    value: function getFriendsScore() {
      try {
        var value = wx.getStorageSync('friends_score') || [];
        if (value && value.ts) {
          if (value.ts < Date.now()) {
            value = [];
          } else {
            value = value.data;
          }
        } else {
          value = [];
        }
        // console.log('Storage get getFriendsScore success', value)
        return value;
      } catch (e) {
        // console.log('Storage get getFriendsScore fail', e)
        return [];
      }
    }
  }, {
    key: 'saveFriendsScore',
    value: function saveFriendsScore(data) {
      wx.setStorage({
        key: 'friends_score',
        data: data,
        success: function success(res) {
          // console.log('Storage save friend score success', data)
        },
        fail: function fail(err) {
          // console.log('Storage save friend score fail', data)
        }
      });
    }
  }, {
    key: 'saveMyUserInfo',
    value: function saveMyUserInfo(myUserInfo) {
      wx.setStorage({
        key: 'my_user_info',
        data: myUserInfo,
        success: function success(res) {
          // console.log('Storage save my user info success', res)
        },
        fail: function fail(err) {
          // console.log('Storage save  my user info fail ', err)
        }
      });
    }
  }, {
    key: 'saveHeighestScore',
    value: function saveHeighestScore(data) {
      wx.setStorage({
        key: 'my_heighest_score',
        data: data,
        success: function success(res) {
          // console.log('Storage save my heighest score success', data, res)
        },
        fail: function fail(err) {
          // console.log('Storage save  my heighest score fail ', err)
        }
      });
    }
  }, {
    key: 'getHeighestScore',
    value: function getHeighestScore() {
      try {
        var value = wx.getStorageSync('my_heighest_score') || false;
        // console.log('Storage get Heighest Score success', value)
        return value;
      } catch (e) {
        // console.log('Storage get Heighest Score fail', e)
        return false;
      }
    }
  }, {
    key: 'getMyUserInfo',
    value: function getMyUserInfo() {
      try {
        var value = wx.getStorageSync('my_user_info') || false;
        // console.log('Storage get my user info success', value)
        return value;
      } catch (e) {
        // console.log('Storage get my user info fail', e)
        return false;
      }
    }
  }, {
    key: 'saveSessionId',
    value: function saveSessionId(sessionId) {
      wx.setStorage({
        key: 'session_id',
        data: sessionId,
        success: function success(res) {
          // console.log('Storage session ID success', res)
        },
        fail: function fail(err) {
          // console.log('Storage save session ID fail ', err)
        }
      });
    }
  }, {
    key: 'getSessionId',
    value: function getSessionId(callback) {
      // wx.getStorage({
      //   key: 'session_id',
      //   success: function (res) {
      //     console.log('Storage get session ID success', res)
      //     callback(res.data)
      //   },
      //   fail: function (err) {
      //     console.log('Storage get session ID fail', err)
      //     callback(false)
      //   }
      // })
      try {
        var value = wx.getStorageSync('session_id') || '';
        // console.log('Storage get sessionid success', value)
        return value;
      } catch (e) {
        // console.log('Storage get sessionid fail')
        return "";
      }
    }
  }, {
    key: 'clearSessionId',
    value: function clearSessionId() {
      wx.removeStorage({
        key: 'session_id',
        success: function success(res) {
          // console.log('Storage clear session_id success')
        },
        fail: function fail(res) {
          // console.log('Storage clear session_id fail')
        }
      });
    }
  }, {
    key: 'saveServerConfig',
    value: function saveServerConfig(data) {
      wx.setStorage({
        key: 'server_config',
        data: data,
        success: function success(res) {
          // console.log('Storage save ServerConfig success', res)
        },
        fail: function fail(err) {
          // console.log('Storage save ServerConfig fail ', err)
        }
      });
    }
  }, {
    key: 'getServerConfig',
    value: function getServerConfig() {
      try {
        var value = wx.getStorageSync('server_config') || 0;
        // console.log('Storage get getServerConfig success', value)
        return value;
      } catch (e) {
        // console.log('Storage get getServerConfig fail')
        return 0;
      }
    }
  }, {
    key: 'getFirstBlood',
    value: function getFirstBlood() {
      try {
        var value = wx.getStorageSync('first_blood') || 0;
        // console.log('Storage get first_blood success', value)
        return value;
      } catch (e) {
        // console.log('Storage get first_blood fail')
        return 0;
      }
    }
  }, {
    key: 'saveFirstBlood',
    value: function saveFirstBlood() {
      wx.setStorage({
        key: 'first_blood',
        data: 1,
        success: function success(res) {
          // console.log('Storage save first_blood success', res)
        },
        fail: function fail(err) {
          // console.log('Storage save first_blood fail', err)
        }
      });
    }
  }, {
    key: 'getHistoryTimes',
    value: function getHistoryTimes() {
      try {
        var value = wx.getStorageSync('history_Times2') || false;
        // console.log('Storage get history_Times success', value)
        return value;
      } catch (e) {
        // console.log('Storage get history_Times fail')
        return false;
      }
    }
  }, {
    key: 'saveHistoryTimes',
    value: function saveHistoryTimes(data) {
      wx.setStorage({
        key: 'history_Times2',
        data: data,
        success: function success(res) {
          // console.log('Storage save history_Times success', res)
        },
        fail: function fail(err) {
          // console.log('Storage save history_Times fail', err)
        }
      });
    }
  }, {
    key: 'saveActionData',
    value: function saveActionData(data) {
      wx.setStorage({
        key: 'action_data0',
        data: data,
        success: function success(res) {
          console.log('Storage save actionData0 success', res);
        },
        fail: function fail(err) {
          console.log('Storage save actionData0 fail', err);
        }
      });
    }
  }, {
    key: 'getActionData',
    value: function getActionData() {
      try {
        var value = wx.getStorageSync('action_data0') || false;
        // console.log('Storage get history_Times success', value)
        return value;
      } catch (e) {
        // console.log('Storage get history_Times fail')
        return false;
      }
    }
  }, {
    key: 'saveWeekBestScore',
    value: function saveWeekBestScore(data) {
      wx.setStorage({
        key: 'weeek_best_score0',
        data: data,
        success: function success(res) {
          // console.log('Storage save weeek_best_score0 success', res)
        },
        fail: function fail(err) {
          // console.log('Storage save weeek_best_score0 fail', err)
        }
      });
    }
  }, {
    key: 'getWeekBestScore',
    value: function getWeekBestScore() {
      try {
        var value = wx.getStorageSync('weeek_best_score0') || 0;
        if (value && value.ts) {
          if (value.ts < Date.now()) {
            value = 0;
          } else {
            value = value.data;
          }
        }
        console.log('Storage get weeek_best_score0 success', value);
        return value;
      } catch (e) {
        // console.log('Storage get history_Times fail')
        return 0;
      }
    }
  }]);

  return Storage;
}();

exports.default = Storage;

/***/ }),

/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _config = __webpack_require__(2);

var _font = __webpack_require__(39);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = function () {
	function Text(text, options) {
		_classCallCheck(this, Text);

		this.material = new THREE.MeshBasicMaterial({ color: options.fillStyle || 0xffffff, transparent: true });
		if (options.opacity) this.material.opacity = options.opacity;
		this.options = options || {};
		this.obj = new THREE.Object3D();
		this.obj.name = 'text';
		if (options.chinese) {
			var chinese = new THREE.Mesh(new THREE.TextGeometry(text, { 'font': _font2.default, 'size': 1.0, 'height': 0.1 }), this.material);
			this.obj.add(chinese);
			if (options.textAlign == 'center') chinese.position.x = text.length * 1.1 / -2;
			// var chinese = new THREE.Mesh(new THREE.TextGeometry(text, { 'font': FONT, 'size': 1.0, 'height': 0.1 }), this.material);
			// this.obj.add(chinese);
			// if (options.textAlign == 'center') chinese.position.x = text.length * 1.1 / -2; 
		} else {
			this.scores = [];
			this.plus = new THREE.Mesh(new THREE.TextGeometry('+', { 'font': _font2.default, 'size': 3.0, 'height': 0.1 }), this.material);
			var amount = this.options.sumScore ? 5 : 2;
			for (var i = 0; i < 10; ++i) {
				var duplicateArr = [];
				var geometry = new THREE.TextGeometry(i, { 'font': _font2.default, 'size': 3.0, 'height': 0.1 });
				for (var j = 0; j < amount; ++j) {
					var score = new THREE.Mesh(geometry, this.material);
					score.using = false;
					duplicateArr.push(score);
				}
				this.scores.push(duplicateArr);
			}
			this.setScore(text);
		}
	}

	_createClass(Text, [{
		key: 'setScore',
		value: function setScore(score) {
			var perWidth = 2.5;
			score = score.toString();
			var lengthSum = score.length * perWidth;
			var amount = this.options.sumScore ? 5 : 2;
			var sum = this.options.textAlign == 'center' ? -lengthSum / 2 : 0;
			if (this.options.plusScore) {
				sum = -(lengthSum + perWidth) / 2;
				this.plus.position.x = sum;
				this.obj.add(this.plus);
				sum += perWidth;
			}
			for (var i = 0, len = this.scores.length; i < len; ++i) {
				for (var j = 0; j < amount; ++j) {
					if (this.scores[i][j].using) {
						this.obj.remove(this.scores[i][j]);
						this.scores[i][j].using = false;
					}
				}
			}
			for (var i = 0, len = score.length; i < len; ++i) {
				var scores = this.scores[score[i]];
				for (var j = 0; j < amount; ++j) {
					if (!scores[j].using) {
						scores[j].position.x = sum;
						scores[j].using = true;
						this.obj.add(scores[j]);
						break;
					}
				}
				sum += perWidth;
			}
		}
	}, {
		key: 'changeStyle',
		value: function changeStyle(obj) {
			Object.assign(this.options, obj);
			this.obj.updateMatrix();
		}
	}]);

	return Text;
}();

exports.default = Text;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var seed = void 0;

var setRandomSeed = function setRandomSeed(s) {
  seed = s;
};

var rand = function rand() {
  seed = (seed * 9301 + 49297) % 233280;
  return Math.floor(seed / 233280.0 * 100) / 100;
};

var random = function random() {
  if (arguments.length === 0) {
    return rand();
  } else if (arguments.length === 1) {
    var e = arguments[0];
    return Math.floor(rand() * e);
  } else {
    var s = arguments[0];
    var _e = arguments[1];
    return Math.floor(rand() * (_e - s)) + s;
  }
};
/**
 * 用法：random(a,b)随机产生一个a到b之间的整数
 * 
 */
exports.setRandomSeed = setRandomSeed;
exports.random = random;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singleStartPage = __webpack_require__(54);

var _singleStartPage2 = _interopRequireDefault(_singleStartPage);

var _singleGamePage = __webpack_require__(53);

var _singleGamePage2 = _interopRequireDefault(_singleGamePage);

var _singleGameOverPage = __webpack_require__(52);

var _singleGameOverPage2 = _interopRequireDefault(_singleGameOverPage);

var _singleFriendRankPage = __webpack_require__(51);

var _singleFriendRankPage2 = _interopRequireDefault(_singleFriendRankPage);

var _shareApp = __webpack_require__(7);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleCtrl = function () {
  function singleCtrl(game, modeCtrl) {
    _classCallCheck(this, singleCtrl);

    this.name = 'single';
    this.game = game;
    this.gameCtrl = this.game.gameCtrl;
    this.model = this.game.gameModel;
    this.view = this.game.gameView;
    this.modeCtrl = modeCtrl;
    this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
    this.gameSocket = this.game.gameSocket;

    this.startPage = new _singleStartPage2.default(game);
    this.gamePage = new _singleGamePage2.default(game);
    this.gameOverPage = new _singleGameOverPage2.default(game);
    this.friendRankPage = new _singleFriendRankPage2.default(game);
    this.currentPage = null;
    this.lastPage = null;

    this.socketTimeout = null;
  }

  _createClass(singleCtrl, [{
    key: 'init',
    value: function init(options) {
      this.startPage.show();
      this.model.setStage(this.startPage.name);
      this.currentPage = this.startPage;
    }
  }, {
    key: 'clickStart',
    value: function clickStart() {
      this.hideCurrentPage();
      this.gamePage.show();
      this.game.replayGame();
      this.model.setStage(this.gamePage.name);
      this.currentPage = this.gamePage;
    }
  }, {
    key: 'showGameOverPage',
    value: function showGameOverPage() {
      this.hideCurrentPage();
      this.gameOverPage.show();

      // 清空上次留存的pkId
      this.model.clearPkId();
      this.model.setStage(this.gameOverPage.name);
      this.currentPage = this.gameOverPage;
    }
  }, {
    key: 'gameOverClickReplay',
    value: function gameOverClickReplay() {
      this.clickStart();
    }
  }, {
    key: 'showFriendRank',
    value: function showFriendRank() {
      this.lastPage = this.currentPage;
      this.hideCurrentPage();
      this.friendRankPage.show();
      this.model.setStage(this.friendRankPage.name);
      this.currentPage = this.friendRankPage;
    }
  }, {
    key: 'friendRankReturn',
    value: function friendRankReturn() {
      this.hideCurrentPage();
      this.lastPage.show();

      this.model.setStage(this.lastPage.name);
      this.currentPage = this.lastPage;
      // this.lastPage = null
    }
  }, {
    key: 'shareGroupRank',
    value: function shareGroupRank() {
      var _this = this;

      (0, _shareApp.shareGroupRank)(function (success, isGroup) {
        _this.gameCtrl.afterShareGroupRank(success, isGroup);
      });
    }
  }, {
    key: 'clickRank',
    value: function clickRank() {
      this.showFriendRank();
    }
  }, {
    key: 'shareBattleCard',
    value: function shareBattleCard() {
      var _this2 = this;

      var sessionId = this.model.getSessionId();
      var currentScore = this.model.currentScore;
      var pkId = this.model.getPkId();
      if (!sessionId) {
        this.view.showNoSession();
        return;
      }

      if (!pkId) {
        _network2.default.createPK(currentScore).then(function () {
          _this2.afterHavePkId();
        }, function () {
          _this2.getPKErr();
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        this.afterHavePkId();
      }
    }
  }, {
    key: 'afterHavePkId',
    value: function afterHavePkId() {
      var _this3 = this;

      var pkId = this.model.getPkId();
      var score = this.model.currentScore;

      (0, _shareApp.shareBattle)(pkId, score, function (success, isGroup) {
        _this3.gameCtrl.afterShareBattle(success, isGroup);
      });
    }
  }, {
    key: 'getPKErr',
    value: function getPKErr() {
      this.view.showGetPkIdFail();
    }
  }, {
    key: 'shareObservCard',
    value: function shareObservCard() {
      this.gamePage.hideLookersShare();
      this.model.setStage('loading');
      wx.showLoading();
      var sessionId = this.model.getSessionId();
      if (!sessionId) {
        this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
      } else {
        this.afterLogin(true);
      }
    }
  }, {
    key: 'afterLogin',
    value: function afterLogin(success) {
      var _this4 = this;

      if (success) {
        // 连接socket和请求gameId
        _network2.default.requestCreateGame(function (success, res) {
          if (success) {
            _this4.model.setGameId(res.data.game_id);
            _this4.model.setGameTicket(res.data.up_op_ticket);
            _this4.shareObservCardA();
          } else {
            _this4.shareObservCardFail(res);
          }
        });
      } else {
        this.shareObservCardFail();
      }
    }
  }, {
    key: 'shareObservCardFail',
    value: function shareObservCardFail(res) {

      // 提示wording弹窗
      this.view.showShareObserveCardFail(res);

      // 清理gameId，gameTicket
      this.model.clearGameId();
      this.model.clearGameTicket();

      // 切回stage loading -> game
      if (this.model.stage == 'loading') {
        this.model.setStage('game');
      }

      // 清除定时器
      this.clearSocketTimeout();

      // 关闭socket 回到游戏页面
      this.gameSocket.close();

      // 清除wx.showloading
      wx.hideLoading();
    }
  }, {
    key: 'shareObservCardA',
    value: function shareObservCardA() {
      this.socketTimeout = setTimeout(this.shareObservCardFail.bind(this), 5000);

      /**
       * 连接网络
       * socket连接上自动joingame，中间出错，直接调用分享失败,关闭socket
       */
      this.gameSocket.connectSocket();
    }
  }, {
    key: 'socketJoinSuccess',
    value: function socketJoinSuccess(success) {
      wx.hideLoading();
      if (success) {

        // 取消定时器
        this.clearSocketTimeout();
        this.shareObservCardB();
      } else {
        this.shareObservCardFail();
      }
    }
  }, {
    key: 'shareObservCardB',
    value: function shareObservCardB() {
      var _this5 = this;

      (0, _shareApp.shareObserve)(function (success, num) {
        if (!!success) {
          _this5.gameCtrl.afterShareObserveCard(num);
        }
        setTimeout(function () {
          // console.log('!!!!!shareObservCardB,stage', this.model.stage)
          if (_this5.model.stage == 'loading') {
            _this5.model.setStage('game');
          }
          _this5.modeCtrl.singleChangeToPlayer();
          _this5.currentPage = null;
        }, 50);
      });
    }
  }, {
    key: 'clearSocketTimeout',
    value: function clearSocketTimeout() {
      if (this.socketTimeout != null) {
        clearTimeout(this.socketTimeout);
        this.socketTimeout = null;
      }
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      return;
    }
  }, {
    key: 'wxOnshow',
    value: function wxOnshow() {
      return;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.hideCurrentPage();
      this.currentPage = null;
      this.model.setStage('');
      // 清理gameId，gameTicket
      this.model.clearGameId();
      this.model.clearGameTicket();

      // 清除定时器
      this.clearSocketTimeout();

      this.game.resetScene();
    }
  }, {
    key: 'hideCurrentPage',
    value: function hideCurrentPage() {
      if (this.currentPage) {
        this.currentPage.hide();
      }
    }
  }]);

  return singleCtrl;
}();

exports.default = singleCtrl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scroll = __webpack_require__(57);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UNDERSCROLL_TRACKING = 0.5;

var ScrollHandler = function () {
  function ScrollHandler(options) {
    _classCallCheck(this, ScrollHandler);

    options = options || {};

    // this._element = element; // element 是内部的列表
    this._options = options;

    this._itemSize = options.itemSize || 0;

    this._innerOffsetHeight = options.innerOffsetHeight || 0; // 内部列表高度
    this._outterOffsetHeight = options.outterOffsetHeight || 0; // 外部容器高度

    this._extent = this._innerOffsetHeight - this._outterOffsetHeight; // 可滚动的高度

    this._position = 0;
    this._scroll = new _scroll2.default(this._extent);
    this.updatePosition();
  }

  _createClass(ScrollHandler, [{
    key: 'onTouchStart',
    value: function onTouchStart() {
      this._startPosition = this._position;
      this._lastChangePos = this._startPosition;

      // Ensure that we don't jump discontinuously when applying the underscroll
      // tracking in onTouchMove if the view is currently outside of the valid
      // scroll constraints.
      if (this._startPosition > 0) this._startPosition /= UNDERSCROLL_TRACKING;else if (this._startPosition < -this._extent) this._startPosition = (this._startPosition + this._extent) / UNDERSCROLL_TRACKING - this._extent;

      if (this._animation) {
        this._animation.cancel();
        this._scrolling = false;
      }
      this.updatePosition();
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(dx, dy) {
      // 
      var pos = this._startPosition;
      pos += dy;
      if (pos > 0) pos *= UNDERSCROLL_TRACKING;else if (pos < -this._extent) pos = (pos + this._extent) * UNDERSCROLL_TRACKING - this._extent;
      this._position = pos;

      this.updatePosition();
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(dx, dy, velocity) {
      var that = this;

      this._scroll.set(this._position, velocity.y);

      this._scrolling = true;
      this._lastChangePos = this._position;

      this._animation = this.animation(this._scroll, function () {
        var now = Date.now();
        var t = (now - that._scroll._startTime) / 1000.0;
        var pos = that._scroll.x(t);
        // console.log('t: ', t, ' pos: ', pos);
        that._position = pos;
        // The translateZ is to help older WebKits not collapse this layer into a non-composited layer
        // since they're also slow at repaints.
        that.updatePosition();
      }, function done() {
        that._scrolling = false;
      });
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(pos) {
      if (this._animation) {
        this._animation.cancel();
        this._scrolling = false;
      }

      if (typeof pos === 'number') {
        this._position = -pos;
      }

      if (this._position < -this._extent) {
        this._position = -this._extent;
      } else if (this._position > 0) {
        this._position = 0;
      }
      this.updatePosition();
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      this._options.updatePosition(this._position);
    }
  }, {
    key: 'animation',
    value: function animation(physicsModel, callback, doneFn) {

      function onFrame(handle, model, cb, doneFn) {
        if (handle && handle.cancelled) return;
        cb(model);
        var done = physicsModel.done();
        if (!done && !handle.cancelled) {
          handle.id = requestAnimationFrame(onFrame.bind(null, handle, model, cb, doneFn));
        }
        if (done && doneFn) {
          doneFn(model);
        }
      }
      function cancel(handle) {
        if (handle && handle.id) cancelAnimationFrame(handle.id);
        if (handle) handle.cancelled = true;
      }

      var handle = { id: 0, cancelled: false };
      onFrame(handle, physicsModel, callback, doneFn);

      return { cancel: cancel.bind(null, handle), model: physicsModel };
    }
  }]);

  return ScrollHandler;
}();

exports.default = ScrollHandler;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _config = __webpack_require__(2);

var _animation = __webpack_require__(4);

var _random = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	function Block(type, number) {
		var _this = this;

		_classCallCheck(this, Block);

		//this.radiusSegments = BLOCK.radiusSegments[Math.floor(Math.random() * BLOCK.radiusSegments.length)];
		//this.geometry = new THREE.CylinderGeometry(BLOCK.radius, BLOCK.radius, BLOCK.height, this.radiusSegments);	
		//this.colors = ['pink', 'cyan', 'yellowBrown', 'purple', 'orange'];
		//this.material = new THREE.MeshLambertMaterial({ color: COLORS[this.colors[Math.floor(5 * Math.random())]], shading: THREE.FlatShading });
		//this.obj = new THREE.Mesh(this.geometry, this.material);
		//this.obj.castShadow = true;
		this.radius = _config.BLOCK.radius;
		this.status = 'stop';
		this.scale = 1;
		this.type = 'green';
		this.types = ['green', 'black', 'gray'];
		this.radiusScale = 1;
		//this.obj.castShadow = true;
		//this.obj.receiveShadow = true;
		//if (this.radiusSegments === 4) this.obj.rotation.y = Math.PI / 4;
		//this.obj.scale.set(this.radiusScale, 1, this.radiusScale);
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
			//var yellowLambertMaterial = new THREE.MeshLambertMaterial({ color: 0xfbe65e });
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
			this.mapUv(310, 310, geometry, 2, 0, 110, 200, 310); //top
			this.mapUv(310, 310, geometry, 4, 200, 110, 310, 310); //right

			this.hitObj = new THREE.Mesh(geometry, material);

			// var materials = [material,  new THREE.ShadowMaterial({ transparent: true, color: 0x000000, opacity: 0.3, })];
			// var totalGeometry = new THREE.Geometry();
			// this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
			// var planeGeometry = new THREE.PlaneGeometry(BLOCK.radius * 2, BLOCK.radius * 2);
			// planeGeometry.rotateX(-Math.PI / 2);
			// this.merge(totalGeometry, planeGeometry, 1, [{ x: 0, y: BLOCK.height / 2 + 0.1, z: 0 }]);
			// this.hitObj = new THREE.Mesh(totalGeometry, materials);
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
			this.mapUv(428, 428, geometry, 2, 0, 148, 280, 428); //top
			this.mapUv(428, 428, geometry, 4, 280, 148, 428, 428); //right
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
			this.mapUv(198, 198, geometry, 2, 0, 50, 148, 198); //top
			this.mapUv(198, 198, geometry, 4, 148, 50, 198, 198); //right

			this.mapUv(444, 50, middleGeometry, 4, 148, 0, 296, 50, true);
			this.mapUv(444, 50, middleGeometry, 1, 0, 0, 148, 50);
			this.mapUv(444, 50, middleGeometry, 2, 0, 0, 1, 1); //top
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
			this.mapUv(428, 428, geometry, 2, 0, 148, 280, 428); //top
			this.mapUv(428, 428, geometry, 4, 280, 148, 428, 428); //right
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
			this.mapUv(416, 416, bottomGeometry, 2, 0, 160, 256, 416); //top
			this.mapUv(416, 416, bottomGeometry, 4, 256, 160, 416, 416); //right
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
			//this.shadow.position.z += ;
			var material = new THREE.MeshLambertMaterial({
				map: _config.loader.load('res/disk.png')
			});
			var darkMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/disk_dark.png'), transparent: true });
			var planeGeometry = new THREE.PlaneGeometry(3, 3);
			var materials = [darkMaterial, material];
			var totalGeometry = new THREE.Geometry();
			this.mapUv(236, 300, geometry, 1, 0, 250, 10, 260);
			this.mapUv(236, 300, geometry, 2, 0, 300, 236, 0); //top
			this.mapUv(236, 300, geometry, 4, 0, 250, 10, 260); //right
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
			this.mapUv(300, 370, geometry, 2, 0, 70, 300, 370); //top
			this.mapUv(300, 370, geometry, 4, 0, 0, 300, 70, true); //right
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
			this.mapUv(340, 340, geometry, 2, 0, 60, 280, 340); //top
			this.mapUv(340, 340, geometry, 4, 280, 60, 340, 340); //right
			this.merge(totalGeometry, geometry, 0, [{ x: 0, y: 0, z: 0 }]);
			this.mapUv(434, 164, bottomGeometry, 1, 0, 0, 217, 164);
			this.mapUv(434, 164, bottomGeometry, 4, 217, 0, 434, 164, true); //right
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
			this.mapUv(320, 200, geometry, 2, 0, 0, 5, 5); //top
			this.mapUv(320, 200, geometry, 4, 0, 200, 320, 0, true); //right
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
			this.mapUv(280, 428, geometry, 2, 0, 148, 280, 428); //top
			this.mapUv(280, 428, geometry, 4, 0, 0, 280, 148, true); //right
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

			// } else if (type == 30) {
			// 	this.canChange = false;
			// 	this.height = 0;
			// 	this.blackMaterial = new THREE.MeshLambertMaterial({ color: 0x4d4d4d, side: THREE.DoubleSide });
			// 	var radius = BLOCK.height;
			// 	var width = radius * 2;
			// 	this.radiusSegments = 4;
			// 	var body = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 32, 1, false, 0, Math.PI), new THREE.MeshLambertMaterial({ color: 0x679ae4 }));
			// 	body.rotation.z = -Math.PI / 2;
			// 	this.body.add(body);
			// 	this.hitObj = new THREE.Mesh(new THREE.BoxGeometry(width, 0.01, radius * 2), new THREE.MeshLambertMaterial({ color: 0x679ae2 }));
			// 	//desk.position.z = radius;
			// 	//desk.rotation.x = -Math.PI / 2;
			// 	var small = new THREE.Mesh(new THREE.CylinderGeometry(radius / 3, radius / 3, 0.5, 32, 1, false, 0, Math.PI), new THREE.MeshLambertMaterial({ color: 0xffd67e }));
			// 	small.rotation.z = -Math.PI / 2;
			// 	small.position.x = -width / 2 - 0.25;
			// 	small.position.y -= 1;
			// 	this.body.add(small);
			// 	var smallDesk = new THREE.Mesh(new THREE.PlaneGeometry(0.5, radius * 2 / 3), new THREE.MeshLambertMaterial({ color: 0xffd67e }));
			// 	smallDesk.rotation.x = -Math.PI / 2;
			// 	smallDesk.position.x = -width / 2 - 0.25;
			// 	smallDesk.position.y -= 1;
			// 	this.body.add(smallDesk);
			// } else if (type == 31) {
			// 	this.height = 0;
			// 	this.radiusSegments = 50;
			// 	var radius = BLOCK.radius;
			// 	var width = BLOCK.width;
			// 	this.hitObj = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 0.5, 50),  new THREE.MeshLambertMaterial({ color: 0xffd67e }));
			// 	this.hitObj.receiveShadow = true;
			// 	this.body.add(this.hitObj);
			// 	var redSphere = new THREE.Mesh(new THREE.CylinderGeometry( radius + 0.5, radius + 1, 1, 50), new THREE.MeshLambertMaterial({ color: 0xdd5858 }));
			// 	redSphere.position.y = -1;
			// 	this.body.add(redSphere);
			// 	var middle = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 2, 50), new THREE.MeshLambertMaterial({ color: 0x4d4d4d }));
			// 	middle.position.y = -3.5;
			// 	this.body.add(middle);
			// 	this.bottomSphere = this.hitObj.clone();
			// 	this.bottomSphere.scale.set(0.7, 0.7, 0.7);
			// 	this.bottomSphere.position.y = -6;
			// 	this.body.add(this.bottomSphere);
			// 	var body = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0x4d4d4d }));
			// 	body.rotation.x = Math.PI;
			// 	body.position.y = -6;
			// 	this.body.position.y = BLOCK.height / 2 - 0.5;
			// 	this.body.add(body);
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
		// else if (type == 26) {
		// 	this.radiusSegments = 50;
		// 	this.canChange = false;
		// 	this.height = BLOCK.height / 21 * 4;
		// 	var geometry = new THREE.CylinderGeometry(BLOCK.radius * 2 / 38 * 6.5, BLOCK.radius * 2 / 38 * 6.5, this.height, 50, 50);
		// 	var material = new THREE.MeshLambertMaterial({
		// 	 	color: 0xea8d9a
		// 	});
		// 	this.hitObj = new THREE.Mesh(geometry, material);
		// 	var middle = new THREE.Mesh(new THREE.CylinderGeometry(BLOCK.radius * 2 / 38 * 7, BLOCK.radius * 2 / 38 * 7, BLOCK.height / 21 * 22, 50, 50), new THREE.MeshLambertMaterial({ map: loader.load('res/pencil_middle.png') }));
		// 	var bottom = new THREE.Mesh(new THREE.CylinderGeometry(BLOCK.radius * 2 / 38 * 7, 0.01, BLOCK.height / 21 * 14, 50, 50), new THREE.MeshLambertMaterial({ map: loader.load('res/pencil_bottom.png') }));
		// 	this.shadow.scale.set(14 / 38, 14 / 38, 14 / 38);
		// 	this.shadow.position.z += 1.9;
		// 	middle.rotation.y = 0.9;
		// 	middle.position.y = -BLOCK.height / 21 * 13;
		// 	bottom.position.y =  -BLOCK.height / 21 * 31;
		// 	this.body.add(middle);
		// 	this.body.add(bottom);
		// 	var planeGeometry = new THREE.CircleGeometry(BLOCK.radius * 2 / 38 * 7 + 0.02, 50);
		// 	var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xf9d929 });
		// 	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
		// 	plane.rotation.x = -Math.PI / 2;
		// 	plane.rotation.z = -0.7;
		// 	plane.position.y = -this.height / 2 + 0.01;
		// 	this.body.add(plane);
		// }
		this.shadow.initZ = this.shadow.position.z;
		this.hitObj.receiveShadow = true;
		this.hitObj.name = 'hitObj';
		this.body.add(this.hitObj);
		this.hitObj.matrixAutoUpdate = false;
		this.shadow.initScale = this.shadow.scale.y;
		this.body.position.y = _config.BLOCK.height / 2 - this.height / 2;
		this.obj.add(this.shadow);
		this.obj.add(this.body);
	}

	_createClass(Block, [{
		key: 'merge',
		value: function merge(totalGeometry, geometry, index, positions) {
			for (var i = 0, len = geometry.faces.length; i < len; ++i) {
				geometry.faces[i].materialIndex = 0;
			}
			var mesh = new THREE.Mesh(geometry);
			for (var i = 0, len = positions.length; i < len; ++i) {
				mesh.position.set(positions[i].x, positions[i].y, positions[i].z);
				mesh.updateMatrix();
				totalGeometry.merge(mesh.geometry, mesh.matrix, index);
			}
		}
	}, {
		key: 'mapUv',
		value: function mapUv(textureWidth, textureHeight, geometry, faceIdx, x1, y1, x2, y2, flag) {
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
		}
	}, {
		key: 'getBox',
		value: function getBox() {
			if (this.boundingBox) return this.boundingBox;
			this.boundingBox = new THREE.Box3().setFromObject(this.body);
			return this.boundingBox;
		}
	}, {
		key: 'glow',
		value: function glow() {
			this.hitObj.material.map = this.glowMap;
		}
	}, {
		key: 'openDoor',
		value: function openDoor() {
			_animation.customAnimation.to(this.door.position, 1, { z: -4.5 });
			_animation.customAnimation.to(this.secondDoor.position, 1, { z: -0.5 });
		}
	}, {
		key: 'closeDoor',
		value: function closeDoor() {
			_animation.customAnimation.to(this.door.position, 1, { z: -3.3 });
			_animation.customAnimation.to(this.secondDoor.position, 1, { z: -1.7 });
		}
	}, {
		key: 'rotateBox',
		value: function rotateBox() {
			_animation.customAnimation.to(this.middle.rotation, 0.5, { y: -Math.PI / 2 });
		}
	}, {
		key: 'playMusic',
		value: function playMusic() {
			var _this2 = this;

			for (var i = 0; i < 2; ++i) {
				setTimeout(function (icon) {
					return function () {
						icon.visible = true;
						icon.position.set(0, 0, 0);
						icon.material.opacity = 1;
						_animation.customAnimation.to(icon.position, 2, { x: 5 * (1 - 2 * Math.random()), y: 15, z: 5 * (1 - 2 * Math.random()) });
						// customAnimation.to(this.icons[i].position, 3, { y: 15,  delay: i * 1 });
						// customAnimation.to(this.icons[i].position, 3, { z: 10 * (1 - 2 * Math.random()),  delay: i * 1 });
						_animation.customAnimation.to(icon.material, 2, { opacity: 0 });
					};
				}(this.icons[i]), i * 1000);
			}
			this.musicTimer = setTimeout(function () {
				_this2.playMusic();
			}, 2500);
		}
	}, {
		key: 'stopMusic',
		value: function stopMusic() {
			if (this.musicTimer) {
				clearTimeout(this.musicTimer);
				this.musicTimer = null;
			}
		}
	}, {
		key: 'change',
		value: function change(radius, t, radiusScale) {
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
				//this.plane.scale.z = this.radiusScale;
				return;
			}
			this.radiusScale = radiusScale || (0, _random.random)() * (_config.BLOCK.maxRadiusScale - _config.BLOCK.minRadiusScale) + _config.BLOCK.minRadiusScale;
			this.radiusScale = +this.radiusScale.toFixed(2);
			this.radius = radius || this.radiusScale * _config.BLOCK.radius;
			this.radius = +this.radius.toFixed(2);
			this.obj.scale.set(this.radiusScale, 1, this.radiusScale);
			this.changeColor(t);
		}
	}, {
		key: 'changeColor',
		value: function changeColor(t) {
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
		}
	}, {
		key: 'getVertices',
		value: function getVertices() {
			var _this3 = this;

			//this.hitObj.updateMatrixWorld();
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
		}
	}, {
		key: 'shrink',
		value: function shrink() {
			this.status = 'shrink';
		}
	}, {
		key: '_shrink',
		value: function _shrink() {
			//if (this.obj.position.y <= -BLOCK.floatHeight + 25) {
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
			//}
			//this.obj.position.y -=  BLOCK.moveDownVelocity;
		}
	}, {
		key: 'showup',
		value: function showup(i) {
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
			//TweenMax.to(this.obj.position, 0.5, { ease: Bounce.easeOut, y: 0 });
			(0, _animation.TweenAnimation)(this.body.position.y, _config.BLOCK.height / 2 - this.height / 2, 500, 'Bounce.easeOut', function (value, complete) {
				this.body.position.y = value;
			}.bind(this));
			(0, _animation.TweenAnimation)(this.shadow.position.z, shadowZ, 500, 'Bounce.easeOut', function (value, complete) {
				this.shadow.position.z = value;
			}.bind(this));
		}
	}, {
		key: 'hideGlow',
		value: function hideGlow() {
			this.hitObj.material.map = this.map;
		}
	}, {
		key: 'popup',
		value: function popup() {
			//this.status = 'popup';
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
			//TweenMax.to(this.obj.position, 0.5, { ease: Bounce.easeOut, y: 0 });
			// TweenAnimation(this.body.position.y, BLOCK.height / 2 - this.height / 2, 500, 'Bounce.easeOut', function(value, complete) {
			// 	this.body.position.y = value
			// }.bind(this))
			// TweenAnimation(this.shadow.position.z, shadowZ, 500, 'Bounce.easeOut', function(value, complete) {
			// 	this.shadow.position.z = value
			// }.bind(this))
			_animation.customAnimation.to(this.body.position, 0.5, { y: _config.BLOCK.height / 2 - this.height / 2, ease: 'Bounce.easeOut' });
			_animation.customAnimation.to(this.shadow.position, 0.5, { z: shadowZ, ease: 'Bounce.easeOut' });
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.status = 'stop';
			this.scale = 1;
			this.obj.scale.y = 1;
			this.body.scale.y = 1;
			this.obj.position.y = 0;
			this.body.position.y = _config.BLOCK.height / 2 - this.height / 2;
			this.shadow.scale.y = this.shadow.initScale;
			this.shadow.position.z = this.shadow.initZ;
			this.boundingBox = null;
		}
	}, {
		key: 'rebound',
		value: function rebound() {
			this.status = 'stop';
			this.scale = 1;
			_animation.customAnimation.to(this.body.scale, 0.5, { ease: 'Elastic.easeOut', y: 1 });
			_animation.customAnimation.to(this.body.position, 0.5, { ease: 'Elastic.easeOut', y: _config.BLOCK.height / 2 - this.height / 2 });

			_animation.customAnimation.to(this.shadow.scale, 0.5, { ease: 'Elastic.easeOut', y: this.shadow.initScale });
			_animation.customAnimation.to(this.shadow.position, 0.5, { ease: 'Elastic.easeOut', z: this.shadow.initZ });
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.order == 19) {
				this.record.rotation.y += 0.01;
			}
			if (this.status === 'stop') return;
			if (this.status === 'shrink') {
				this._shrink();
			} else if (this.status === 'popup') {
				//this._popup();
			}
		}
	}]);

	return Block;
}();

exports.default = Block;

/***/ }),

/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _config = __webpack_require__(2);

var _animation = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEIGHT = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
var WIDTH = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;

var Ground = function () {
	function Ground() {
		_classCallCheck(this, Ground);

		this.obj = new THREE.Object3D();
		this.obj.name = 'ground';
		var geometry = new THREE.PlaneGeometry(WIDTH / HEIGHT * _config.FRUSTUMSIZE, _config.FRUSTUMSIZE);
		this.materials = [];
		var colors = [['rgba(215, 219, 230, 1)', 'rgba(188, 190, 199, 1)'], ['rgba(255, 231, 220, 1)', 'rgba(255, 196, 204, 1)'], ['rgba(255, 224, 163, 1)', 'rgba(255, 202, 126, 1)'], ['rgba(255, 248, 185, 1)', 'rgba(255, 245, 139, 1)'], ['rgba(218, 244, 255, 1)', 'rgba(207, 233, 210, 1)'], ['rgba(219, 235, 255, 1)', 'rgba(185, 213, 235, 1)'], ['rgba(216, 218, 255, 1)', 'rgba(165, 176, 232, 1)'], ['rgba(207, 207, 207, 1)', 'rgba(199, 196, 201, 1)']];
		var that = this;
		for (var i = 0; i < 7; ++i) {
			var texture = new THREE.Texture(that.generateLaserBodyCanvas(colors[i][0], colors[i][1]));
			texture.needsUpdate = true;
			var material = new THREE.MeshBasicMaterial({
				map: texture,
				opacity: 1,
				transparent: true
			});
			that.materials.push(material);
			var ground = new THREE.Mesh(geometry, material);
			ground.position.z = -(i + 1) * 0.1;
			ground.name = i;
			ground.updateMatrix();
			ground.matrixAutoUpdate = false;
			that.obj.add(ground);
			//if ( i >= 1) ground.visible = false;

		}
		for (var i = 1; i < 7; ++i) {
			this.obj.children[i].visible = false;
		}
		this.current = 0;
		//this.obj.receiveShadow = true;
		//this.obj.rotation.x = -Math.PI / 2 ;
		//this.obj.rotation.z = -Math.PI / 3 ;
		//this.obj.matrixAutoUpdate = false;
	}

	_createClass(Ground, [{
		key: 'generateLaserBodyCanvas',
		value: function generateLaserBodyCanvas(colorStart, colorStop) {
			// init canvas
			// set gradient
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			canvas.width = 64;
			canvas.height = 64;
			context.clearRect(0, 0, canvas.width, canvas.height);
			var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
			//gradient.addColorStop( 0.3, 'rgba(40, 40, 40, 1)' );
			//gradient.addColorStop( 0.5, 'rgba(255, 255, 255, 1)' );
			//gradient.addColorStop( 0.7, 'rgba(40, 40, 40, 1)' );
			gradient.addColorStop(0, colorStart);
			gradient.addColorStop(1, colorStop);
			// fill the rectangle
			context.fillStyle = gradient;
			context.fillRect(0, 0, canvas.width, canvas.height);
			// return the just built canvas 

			return canvas;
		}
	}, {
		key: 'changeColor',
		value: function changeColor() {
			var _this = this;

			var next = this.current + 1 > 6 ? 0 : this.current + 1;
			var current = this.current;
			_animation.customAnimation.to(this.materials[this.current], 5, { opacity: 0, onComplete: function onComplete() {
					_this.obj.children[current].visible = false;
				} });
			this.obj.children[next].visible = true;
			_animation.customAnimation.to(this.materials[next], 4, { opacity: 1 });
			this.current = next;
		}
	}]);

	return Ground;
}();

exports.default = Ground;

/***/ }),
