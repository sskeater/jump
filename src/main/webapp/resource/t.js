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

// var Stats = function () {

//   var beginTime = Date.now(), prevTime = beginTime, frames = 0, count = 0, flag = true;

//   return {

//     begin: function () {

//       beginTime = Date.now();

//     },

//     stop: function () {
//       flag = false;
//       if (count > 3) controller.removeShadow();
//     },

//     end: function () {
//       //if (!flag) return;
//       frames++;

//       var time = Date.now();

//       //console.log("prevy", prevTime, time);
//       if (time >= prevTime + 1000) {
//         console.log("frames", frames * 1000 / (time - prevTime));

//         prevTime = time;
//         frames = 0;

//       }

//       return time;

//     }

//   };

// };

// var stats = new Stats();

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _session = __webpack_require__(6);

var _session2 = _interopRequireDefault(_session);

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _encryption = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 配置目前有：
 * {
 *  audience_mode_switch:0, // 围观模式，围观在前端拦截
 *  friends_score_switch:0,
 *  group_score_switch:0,
 *  game_center_entry_switch, // 目前没有
 *  bad_js_ratio
 * }
 */

var networkConfig = {
  // AJAX_URL: 'https://wxardm.weixin.qq.com',
  AJAX_URL: 'https://mp.weixin.qq.com'
};

var Network = function () {
  function Network() {
    _classCallCheck(this, Network);
  }

  _createClass(Network, null, [{
    key: 'onServerConfigForbid',
    value: function onServerConfigForbid(cb) {
      this.emmitServerConfigForbid = cb;
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        }
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_getuserinfo',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // // console.log('Network getUserInfo not ok', res)
            return;
          }

          // 当sessionId过期的逻辑 待测
          // if (res.data.base_resp.errcode === -5) {

          //   this.reGetSessionId('getUserInfo')
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network getUserInfo not ok', res)
            return;
          }

          // console.log('Network getUserInfo success', res)
          _storage2.default.saveMyUserInfo(res.data);
        },
        fail: function fail(err) {
          // console.log('Network getUserInfo fail', err)
        }
      });
    }
  }, {
    key: 'requestLogin',
    value: function requestLogin(afterLoginProcess) {
      if (!afterLoginProcess) {
        afterLoginProcess = function afterLoginProcess() {
          // console.log('Network requestLogin parameter')
        };
      }
      wx.login({
        success: function success(res) {
          if (res.code) {
            // console.log('Network login ok', res.code)

            // 存session
            _session2.default.setLoginState(res.code);

            // 存sessionId到缓存里
            // Storage.saveSessionId(res.code)
            afterLoginProcess(true);
          } else {
            // console.log('Network wx.login fail', res)
            afterLoginProcess(false);
          }
        },
        fail: function fail(res) {

          // 处理失败逻辑
          // console.log('Network wx.login fail: ', res)
          afterLoginProcess(false);
        }
      });
    }
  }, {
    key: 'requestFriendsScore',
    value: function requestFriendsScore() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (_session2.default.serverConfig) {
        if (!_session2.default.serverConfig.friends_score_switch) {
          // console.log('Network requestFriendsScore server forbidden')
          // this.errHandler()
          return;
        }
      }

      if (!_session2.default.sessionId) {
        // console.log('Network requestFriendsScore abort for no sessionId')
        callback(false);
        return;
      }
      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        }

        // 数据格式 testData = {
        //   user_info: [
        //     {
        //       nickname: 'juto',
        //       headimg: 'http://wx.qlogo.cn/mmhead/qE9MKluetOlFQg1u4bfs14LFdlRu2MSFKzj5iceWeia4ibZCngaibibE1NQ/0',
        //       score_info: [
        //         {type: 0, score: 1000}
        //       ],
        //     }
        //   ]
        // }
      };wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_getfriendsscore',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network getfriendsscore not ok', res)
            if (callback) {
              callback(false);
            }
            return;
          }

          // 当sessionId过期的逻辑 待测
          // if (res.data.base_resp.errcode === -5) {
          //   this.reGetSessionId('requestFriendsScore', callback)
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network getfriendsscore not ok', res)
            if (callback) {
              callback(false);
            }
            return;
          }

          // console.log('Network requestFriendsScore success', res)

          callback(true, res.data);
        },
        fail: function fail(err) {
          // console.log('Network getfriendsscore fail', err)
          callback(false, false);
        }
      });
    }
  }, {
    key: 'requestSettlement',
    value: function requestSettlement() {
      var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var verifyData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (!_session2.default.sessionId) {
        // console.log('Network requestSettlement abort for no sessionId')
        callback(false);
        return;
      }
      // var scoreInfo = [
      //   { type: 0, score: score },
      //   { type: 2, score: times }
      // ]
      var scoreInfo = {
        score: score,
        times: times,
        game_data: JSON.stringify(verifyData)
      };

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        // score_info: scoreInfo,
        action_data: (0, _encryption.encrypt)(scoreInfo, _session2.default.sessionId)
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_settlement',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network requestCreateGame not ok', res)
            callback(false);
            return;
          }
          if (res.data.base_resp.errcode === 0) {
            // console.log('Network request settlement success', res)
            callback(true);
          } else {
            // console.log('Network request settlement fail', res)
            callback(false);
          }
        },
        fail: function fail(res) {
          // console.log('Network request settlement fail', res)
          callback(false);
        }
      });
    }
  }, {
    key: 'requestCreateGame',
    value: function requestCreateGame() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (_session2.default.serverConfig) {
        // 0是关，1是开  !0 true !1 false
        if (!_session2.default.serverConfig.audience_mode_switch) {
          // console.log('requestCreateGame server forbidden')
          callback(false, '当前围观人数过多，请稍后再试');
          return;
        }
      }

      if (!_session2.default.sessionId) {
        this.reGetSessionId('requestCreateGame', callback);
        // console.log('Network create game request sessionId')
      }

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        }
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_creategame',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network requestCreateGame not ok', res)
            callback(false);
            return;
          }
          if (res.data.base_resp.errcode === 0) {
            // console.log('Network createGame success', res)
            callback(true, res);
          } else {
            // console.log('Network createGame fail', res)
            callback(false);
          }
        },
        fail: function fail(res) {
          // console.log('Network createGame fail', res)
          callback(false);
        }
      });

      // { 返回包示例
      //   data:{
      //     base_resp:{errcode},
      //     game_id:''
      //   }
      // }
    }
  }, {
    key: 'reGetSessionId',
    value: function reGetSessionId(name, cb) {
      var _this = this;

      // console.log('network reGetSessionId:', name)
      _storage2.default.clearSessionId();
      this.requestLogin(function (success) {
        if (success) {
          if (cb) {
            _this[name](cb);
          } else {
            _this[name]();
          }
        } else {
          if (cb) {
            cb(false);
          }
        }
      });
    }

    /**
    * 服务器发的配置存在内存和缓存里
    */

  }, {
    key: 'requestInit',
    value: function requestInit() {
      if (!_session2.default.sessionId) {
        // console.log('Network requestInit request sessionId')
        return;
        this.reGetSessionId('requestInit');
      }

      if (_session2.default.serverConfig) {
        var v = _session2.default.serverConfig.version;
        this.requestServerInit(v);
      } else {
        this.requestServerInit(0);
      }
    }
  }, {
    key: 'requestServerInit',
    value: function requestServerInit(version) {
      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        version: version
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_init',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network requestInit not ok', res)
            return;
          }

          // 当sessionId过期的逻辑
          // if (res.data.base_resp.errcode === -5) {

          //   this.reGetSessionId('requestInit')
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network requestInit not ok', res)
            return;
          }

          // console.log('Network requestInit success', res)
          if (res.data.version > _session2.default.serverConfig.version || !_session2.default.serverConfig.version) {
            _session2.default.setServerConfig(res.data);
            _storage2.default.saveServerConfig(res.data);
          }
        },
        fail: function fail(err) {
          // console.log('Network requestInit fail', err)
        }
      });
    }
  }, {
    key: 'getGroupScore',
    value: function getGroupScore() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (!_session2.default.sessionId) {
        // console.log('Network getGroupScore not ok need sessionID')
        callback(false);
        return;
      }
      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1,
          group_info: {
            share_ticket: _session2.default.shareTicket
          }
        }
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_getgrouprank',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network getGroupScore not ok', res)
            callback(false);
            return;
          }

          // 当sessionId过期的逻辑
          // if (res.data.base_resp.errcode === -5) {

          //   this.reGetSessionId('getGroupScore', callback)
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network getGroupScore not ok', res)
            callback(false);
            return;
          }
          // console.log('Network getGroupScore success', res)
          callback(true, res);
        },
        fail: function fail(err) {
          // console.log('Network getGroupScore fail', err)
          callback(false);
        }
      });
    }
  }, {
    key: 'createPK',
    value: function createPK(score) {
      return new Promise(function (resolve, reject) {
        if (!_session2.default.sessionId) {
          // console.log('Network getGroupScore not ok need sessionID')
          reject();
          return;
        }
        wx.showLoading();
        var obj = {
          base_req: {
            session_id: _session2.default.sessionId,
            fast: 1
          },
          score: score
        };

        wx.request({
          url: networkConfig.AJAX_URL + '/wxagame/wxagame_createpk',
          method: 'POST',
          data: obj,
          success: function success(res) {
            if (res.statusCode !== 200) {
              // console.log('Network getPKID not ok', res)
              reject();
              return;
            }

            // // 当sessionId过期的逻辑
            // if (res.data.base_resp.errcode === -5) {

            //   this.reGetSessionId('getGroupScore', callback)
            //   return
            // }

            if (res.data.base_resp.errcode !== 0) {
              // console.log('Network getPKID not ok', res)
              reject();
              return;
            }

            _session2.default.setPkId(res.data.pk_id);
            // console.log('Network getPKID success', res.data.pk_id, res)
            resolve();
          },
          fail: function fail(err) {
            // console.log('Network getPKID fail', err)
            reject();
          },
          complete: function complete() {
            wx.hideLoading();
          }
        });
      });
    }
  }, {
    key: 'getBattleData',
    value: function getBattleData() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var pkId = arguments[1];

      if (!_session2.default.sessionId || !pkId) {
        // console.log('Network getBattleData not ok need sessionID pkId')
        callback(false);
        return;
      }

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        pk_id: pkId
      };

      if (_session2.default.shareTicket) {
        obj.base_req.group_info = {
          share_ticket: _session2.default.shareTicket
        };
      }

      // console.log('getBattleDatagetBattleDatagetBattleData', obj)
      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_getpkinfo',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network getBattleData not ok', res)
            callback(false);
            return;
          }

          // 当sessionId过期的逻辑
          // if (res.data.base_resp.errcode === -5) {

          //   this.reGetSessionId('getGroupScore', callback)
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network getBattleData not ok', res)
            callback(false);
            return;
          }

          // console.log('Network getBattleData success', res)
          callback(true, res);
        },
        fail: function fail(err) {
          // console.log('Network getBattleData fail', err)
          callback(false);
        }
      });
    }
  }, {
    key: 'updatepkinfo',
    value: function updatepkinfo() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var pkId = arguments[1];
      var score = arguments[2];

      if (!_session2.default.sessionId || !pkId) {
        // console.log('Network getBattleData not ok need sessionID pkId')
        callback(false);
        return;
      }

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        pk_id: pkId,
        score: score

        // console.log('updatepkinfoupdatepkinfoupdatepkinfo', obj)
      };wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_updatepkinfo',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network updatepkinfo not ok', res)
            callback(false);
            return;
          }

          // // 当sessionId过期的逻辑
          // if (res.data.base_resp.errcode === -5) {

          //   this.reGetSessionId('getGroupScore', callback)
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network updatepkinfo not ok', res)
            callback(false);
            return;
          }

          // console.log('Network updatepkinfo success', res)
          callback(true, res);
        },
        fail: function fail(err) {
          // console.log('Network updatepkinfo fail', err)
          callback(false);
        }
      });
    }
  }, {
    key: 'quitGame',
    value: function quitGame() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (!_session2.default.gameId && !_session2.default.sessionId) {
        // console.log('Network quitGame not ok need sessionID gameId')
        callback(false);
        return;
      }

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        game_id: _session2.default.gameId
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_quitgame',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network updatepkinfo not ok', res)
            callback(false);
            return;
          }

          // 当sessionId过期的逻辑
          // if (res.data.base_resp.errcode === -5) {

          //   this.reGetSessionId('quitGame', callback)
          //   return
          // }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network quitGame not ok', res)
            callback(false);
            return;
          }

          // console.log('Network quitGame success', res)
          callback(true, res);
        },
        fail: function fail(err) {
          // console.log('Network quitGame fail', err)
          callback(false);
        }
      });
    }
  }, {
    key: 'syncop',
    value: function syncop() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (!_session2.default.gameId && !_session2.default.sessionId) {
        // console.log('Network quitGame not ok need sessionID gameId')
        callback(false);
        return;
      }
      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        game_id: _session2.default.gameId
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_syncop',
        method: 'POST',
        data: obj,
        success: function success(res) {
          if (res.statusCode !== 200) {
            // console.log('Network syncop not ok', res)
            cb(false);
            return;
          }

          if (res.data.base_resp.errcode !== 0) {
            // console.log('Network syncop not ok', res)
            cb(false);
            return;
          }

          // console.log('Network syncop success', res)
          cb(true, res);
        },
        fail: function fail(err) {
          cb(false);
          // console.log('Network syncop fail', err)
        }
      });
    }
  }, {
    key: 'sendReport',
    value: function sendReport() {
      var reportList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var clientInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!_session2.default.sessionId) {
        // console.log('sendReport need session ID')
        return;
      }

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1,
          client_info: clientInfo
        },
        report_list: reportList
      };
      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_bottlereport',
        method: 'POST',
        data: obj,
        success: function success(res) {
          // console.log('Network sendReport success', res)
        },
        fail: function fail() {
          // console.log('Network sendReport fail')
        }
      });
    }
  }, {
    key: 'badReport',
    value: function badReport(msg, stack) {
      var res = wx.getSystemInfoSync();
      var sessionId = _session2.default.sessionId || '';
      var msg = 'model:' + res.model + ',SDKVersion:' + res.SDKVersion + ',version:' + res.version + ',sessionId:' + sessionId + ',errmsg:' + msg + ',stack:' + stack;
      wx.request({
        url: 'https://badjs.weixinbridge.com/badjs',
        data: {
          id: 130,
          level: 4,
          msg: msg
        },
        success: function success(res) {
          // console.log('Network badjs', res)
        },
        fail: function fail(res) {
          // console.log('Network badjs', res)
        }
      });
    }
  }, {
    key: 'sendServerError',
    value: function sendServerError(key) {
      if (!_session2.default.sessionId) {
        // console.log('sendReport need session ID')
        return;
      }

      var obj = {
        base_req: {
          session_id: _session2.default.sessionId,
          fast: 1
        },
        id: 1,
        key: key
      };

      wx.request({
        url: networkConfig.AJAX_URL + '/wxagame/wxagame_jsreport',
        method: 'POST',
        data: obj,
        success: function success(res) {
          // console.log('Network sendServerError success', res)
        },
        fail: function fail() {
          // console.log('Network sendServerError fail')
        }
      });
    }
  }]);

  return Network;
}();

exports.default = Network;

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Session = function () {
  function Session() {
    _classCallCheck(this, Session);
  }

  _createClass(Session, null, [{
    key: 'init',
    value: function init() {
      this.sessionId = '';
      this.gameId = '';
      this.gameTicket = '';
      this.serverConfig = '';
      this.shareTicket = '';
      this.pkId = '';
      this.serverConfig = '';
    }
  }, {
    key: 'setLoginState',
    value: function setLoginState(sessionId) {
      this.sessionId = sessionId;
    }
  }, {
    key: 'setGameId',
    value: function setGameId(gameId) {
      this.gameId = gameId;
    }
  }, {
    key: 'setGameTicket',
    value: function setGameTicket(gameTicket) {
      this.gameTicket = gameTicket;
    }
  }, {
    key: 'setServerConfig',
    value: function setServerConfig(config) {
      this.serverConfig = config;
    }
  }, {
    key: 'setShareTicket',
    value: function setShareTicket(ticket) {
      this.shareTicket = ticket;
    }
  }, {
    key: 'setPkId',
    value: function setPkId(id) {
      this.pkId = id;
    }
  }, {
    key: 'clearPkId',
    value: function clearPkId() {
      this.pkId = '';
    }
  }, {
    key: 'clearGameId',
    value: function clearGameId() {
      this.gameId = '';
    }
  }, {
    key: 'clearShareTicket',
    value: function clearShareTicket() {
      this.ShareTicket = '';
    }
  }, {
    key: 'clearGameTicket',
    value: function clearGameTicket() {
      this.gameTicket = '';
    }
  }, {
    key: 'setServerConfig',
    value: function setServerConfig(config) {
      this.serverConfig = config;
    }
  }]);

  return Session;
}();

exports.default = Session;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareGroupRank = shareGroupRank;
exports.shareBattle = shareBattle;
exports.shareObserve = shareObserve;
exports.pureShare = pureShare;

var _session = __webpack_require__(6);

var _session2 = _interopRequireDefault(_session);

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _shareCard = __webpack_require__(50);

var _shareCard2 = _interopRequireDefault(_shareCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shareCard = new _shareCard2.default({});
function shareGroupRank() {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  wx.getNetworkType({
    success: function success(res) {
      if (res.networkType !== 'none') {
        wx.updateShareMenu({
          withShareTicket: true,
          success: function success() {
            wx.shareAppMessage({

              title: '群雄逐鹿，看看你第几',
              query: 'mode=groupShare',
              imageUrl: 'http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNQ0ia79enzYJBrAavqMRykpovYxSA9RRTwIjde6a68ZCczLMBBd8eSoOyTRyp2Codc5IObdeqZVFyw/0?wx_fmt=png',
              success: function success(res) {
                cb(true, 1);
                // let shareTicket = ''
                // if (res.shareTickets) {
                //   shareTicket = res.shareTickets[0]
                // }
                // // console.log('#####res', res)
                // wx.getShareInfo({
                //   shareTicket,
                //   success(res) {
                //     cb(true, 1)
                //     // console.log('###res', res)
                //   },
                //   fail(e) {
                //     wx.showModal({
                //       title: '提示',
                //       content: '分享至群聊才能查看群排行哦~',
                //       showCancel: false
                //     })
                //     cb(true, 0)
                //     // console.log('###res e', e)
                //   }
                // })
              },
              fail: function fail(err) {
                cb(false);
                // console.log('send invitation fail:', err)
              }
            });
          }
        });
      } else {
        cb(false);
        wx.showModal({
          title: '提示',
          content: '网络状态异常',
          showCancel: false
        });
      }
    }
  });
}

function shareBattle(pkId, score) {
  var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  shareCard.getShareCard({
    score: score,
    type: 'shareBattle'
  }, function (canvas) {
    var path = '';
    try {
      path = canvas.toTempFilePathSync();
    } catch (e) {
      console.log('shareBattle: ', e);
    }
    if (!pkId) {
      return;
    }
    wx.updateShareMenu({
      withShareTicket: true,
      success: function success() {

        wx.shareAppMessage({
          title: '小试牛刀，不服来战',
          query: 'mode=battle&pkId=' + pkId,
          imageUrl: path,
          success: function success(res) {
            cb(true, 1);
            // let shareTicket = ''
            // if (res.shareTickets) {
            //   shareTicket = res.shareTickets[0]
            // }
            // wx.getShareInfo({
            //   shareTicket,
            //   success(res) {
            //     // console.log('shareBattle', res)
            //     cb(true, 1)
            //   },
            //   fail(e) {
            //     // console.log('shareBattle e', e)
            //     cb(true, 0)
            //   }
            // })
            console.log('mode=battle&pkId=' + pkId);
          },
          fail: function fail() {
            cb(false);
          }
        });
      },
      fail: function fail(err) {
        // console.log('shareBattle e', e)
        cb(false);
      }
    });
  });
}

function shareObserve() {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  var myUserInfo = _storage2.default.getMyUserInfo();
  if (!myUserInfo) {
    myUserInfo = {
      nickname: '',
      headimg: ''
    };
  }
  console.log('query: ', 'gameId=' + _session2.default.gameId + '&mode=observe&nickName=' + myUserInfo.nickname + '&headimg=' + myUserInfo.headimg);
  wx.updateShareMenu({
    withShareTicket: true,
    success: function success() {
      wx.shareAppMessage({
        title: '即刻起跳，速来围观',
        query: 'gameId=' + _session2.default.gameId + '&mode=observe&nickName=' + myUserInfo.nickname + '&headimg=' + myUserInfo.headimg,
        imageUrl: 'http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNQ0ia79enzYJBiaBtXsYrvBsYBdBdDtKE7y638J84JKPckcOtFMp4QunIWFGc7pibQLm13s9fKZ9ic9ew/0?wx_fmt=png',
        success: function success(res) {
          // console.log('send invitation success')
          cb(true, 1);
          // let shareTicket = ''
          // if (res.shareTickets) {
          //   shareTicket = res.shareTickets[0]
          // }
          // wx.getShareInfo({
          //   shareTicket,
          //   success(res) {
          //     cb(true, 1)
          //     // console.log('###res', res)
          //   },
          //   fail(e) {
          //     cb(true, 0)
          //     // console.log('###res e', e)
          //   }
          // })
        },
        fail: function fail(err) {
          // console.log('send invitation fail', err)
          cb(false);
        }
      });
    },
    fail: function fail() {
      cb(false);
    }
  });
}

function pureShare(type, score) {
  shareCard.getShareCard({ type: type, score: score }, function (canvas) {
    // console.log('???', canvas)
    var path = '';
    try {
      path = canvas.toTempFilePathSync();
    } catch (e) {
      console.log('pureShare: ', e);
    }
    // wx.updateShareMenu({
    // withShareTicket: true,
    // success() {
    var title = '';
    if (type == 'rank') {
      title = '跳遍天下，已无敌手';
    } else {
      // history week
      title = '不好意思，又破纪录了';
    }
    wx.shareAppMessage({
      title: title,
      // query: `gameId=${Session.gameId}&mode=observe&nickName=${myUserInfo.nickname}&headimg=${myUserInfo.headimg}`,
      imageUrl: path,
      success: function success(res) {
        // console.log('send invitation success')
        // // cb()
        // let shareTicket = ''
        // if (res.shareTickets) {
        //   shareTicket = res.shareTickets[0]
        // }
        // wx.getShareInfo({
        //   shareTicket,
        //   success(res) {
        //     cb(true, 1)
        //     // console.log('###res', res)
        //   },
        //   fail(e) {
        //     cb(true, 0)
        //     // console.log('###res e', e)
        //   }
        // })
      },
      fail: function fail(err) {
        //cb(false)
      }
    });
    // },
    // fail() {}
    // })
  });
}

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _animation = __webpack_require__(4);

var _config = __webpack_require__(2);

var _text = __webpack_require__(8);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bottle = function () {
	function Bottle() {
		_classCallCheck(this, Bottle);

		this.obj = new THREE.Object3D();
		this.obj.name = 'bottle';
		this.trail = null;

		this.bottle = new THREE.Object3D();
		var basicMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/head.png') });

		var headRadius = 2.1 * 0.45;
		this.human = new THREE.Object3D();
		this.head = new THREE.Mesh(new THREE.SphereGeometry(headRadius, 20, 20), basicMaterial);
		// this.head.rotation.y = 3.4;
		// this.head.rotation.x = -1;
		// window.hhh = this.head;
		this.head.castShadow = true;
		this.bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.88 * headRadius, 1.27 * headRadius, 2.68 * headRadius, 20), new THREE.MeshBasicMaterial({ map: _config.loader.load('res/bottom.png') }));
		this.bottom.rotation.y = 4.7;
		this.bottom.castShadow = true;
		var middleGeometry = new THREE.CylinderGeometry(headRadius, 0.88 * headRadius, 1.2 * headRadius, 20);
		var middleMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/top.png') });
		var materials = [middleMaterial, basicMaterial];
		var totalGeometry = new THREE.Geometry();
		middleGeometry.rotateY(4.7);
		this.merge(totalGeometry, middleGeometry, 0, [{ x: 0, y: this.bottom.position.y + 1.94 * headRadius, z: 0 }]);
		var topGeometry = new THREE.SphereGeometry(headRadius, 20, 20);
		topGeometry.scale(1, 0.54, 1);
		this.merge(totalGeometry, topGeometry, 1, [{ x: 0, y: this.bottom.position.y + 2.54 * headRadius, z: 0 }]);
		this.middle = new THREE.Mesh(totalGeometry, materials);
		this.middle.castShadow = true;
		// this.top.rotation.y = 3.4;
		// this.top.rotation.x = -1;
		this.body = new THREE.Object3D();
		this.body.add(this.bottom);
		this.body.add(this.middle);
		this.human.add(this.body);
		this.head.position.y = 4.725;
		this.human.add(this.head);
		//this.human.scale.set(0.45, 0.45, 0.45)
		this.bottle.add(this.human);

		this.bottle.position.y = _config.BOTTLE.bodyHeight / 2 - 0.25;

		this.obj.add(this.bottle);

		// 状态量
		this.status = 'stop';
		this.scale = 1;
		this.double = 1;
		this.velocity = {};
		this.flyingTime = 0;
		this.direction = 'straight';
		this.jumpStatus = 'init';

		// 粒子
		this.particles = [];
		var whiteParticleMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/white.png'), alphaTest: 0.5 });
		var greenParticleMaterial = new THREE.MeshBasicMaterial({ map: _config.loader.load('res/green.png'), alphaTest: 0.5 });
		var particleGeometry = new THREE.PlaneGeometry(1, 1);
		for (var i = 0; i < 15; ++i) {
			var particle = new THREE.Mesh(particleGeometry, whiteParticleMaterial);
			particle.rotation.y = -Math.PI / 4;
			particle.rotation.x = -Math.PI / 5;
			particle.rotation.z = -Math.PI / 5;
			this.particles.push(particle);
			this.obj.add(particle);
		}
		for (var i = 0; i < 5; ++i) {
			var particle = new THREE.Mesh(particleGeometry, greenParticleMaterial);
			particle.rotation.y = -Math.PI / 4;
			particle.rotation.x = -Math.PI / 5;
			particle.rotation.z = -Math.PI / 5;
			this.particles.push(particle);
			this.obj.add(particle);
		}
		this.scoreText = new _text2.default('0', { fillStyle: 0x252525, textAlign: 'center', plusScore: true });
		this.scoreText.obj.visible = false;
		this.scoreText.obj.rotation.y = -Math.PI / 4;
		this.scoreText.obj.scale.set(0.5, 0.5, 0.5);
		this.obj.add(this.scoreText.obj);
	}

	_createClass(Bottle, [{
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
		key: 'showAddScore',
		value: function showAddScore(score, double, quick, keepDouble) {
			if (keepDouble) {
				this.scoreText.setScore(score.toString());
			} else {
				if (double) {
					if (this.double === 1) this.double = 2;else this.double += 2;
				} else {
					this.double = 1;
				}
				if (quick && this.double <= 2) {
					this.double *= 2;
				}
				this.double = Math.min(32, this.double);
				score = score * this.double;

				this.scoreText.setScore(score.toString());
				/*if (this.direction === 'left') {
    	addScore.rotation.y = -Math.PI / 2;
    }*/
			}
			this.scoreText.obj.visible = true;
			this.scoreText.obj.position.y = 3;
			this.scoreText.material.opacity = 1;
			(0, _animation.TweenAnimation)(this.scoreText.obj.position.y, _config.BOTTLE.bodyHeight + 6, 700, function (value) {
				this.scoreText.obj.position.y = value;
			}.bind(this));
			(0, _animation.TweenAnimation)(this.scoreText.material.opacity, 0, 700, function (value, complete) {
				this.scoreText.material.opacity = value;
				if (complete) {
					this.scoreText.obj.visible = false;
				}
			}.bind(this));
		}
	}, {
		key: 'changeScorePos',
		value: function changeScorePos(z) {
			this.scoreText.obj.position.z = z;
		}
	}, {
		key: 'resetParticles',
		value: function resetParticles() {
			if (this.gatherTimer) clearTimeout(this.gatherTimer);
			this.gatherTimer = null;
			for (var i = 0, len = this.particles.length; i < len; ++i) {
				this.particles[i].gathering = false;
				this.particles[i].visible = false;
				this.particles[i].scattering = false;
			}
		}
	}, {
		key: 'scatterParticles',
		value: function scatterParticles() {
			for (var i = 0; i < 10; ++i) {
				this.particles[i].scattering = true;
				this.particles[i].gathering = false;
				this._scatterParticles(this.particles[i]);
			}
		}
	}, {
		key: '_scatterParticles',
		value: function _scatterParticles(particle) {
			var that = this;
			var minDistance = _config.BOTTLE.bodyWidth / 2;
			var maxDistance = 2;
			var x = (minDistance + Math.random() * (maxDistance - minDistance)) * (1 - 2 * Math.random());
			var z = (minDistance + Math.random() * (maxDistance - minDistance)) * (1 - 2 * Math.random());
			particle.scale.set(1, 1, 1);
			particle.visible = false;
			particle.position.x = x;
			particle.position.y = -0.5;
			particle.position.z = z;
			setTimeout(function (particle) {
				return function () {
					if (!particle.scattering) return;
					particle.visible = true;
					var duration = 0.3 + Math.random() * 0.2;
					//TweenMax.to(particle.rotation, duration, { x: Math.random() * 12, y: Math.random() * 12 });
					_animation.customAnimation.to(particle.scale, duration, { x: 0.2, y: 0.2, z: 0.2 });
					_animation.customAnimation.to(particle.position, duration, {
						x: 2 * x, y: 2.5 * Math.random() + 2, z: 2 * z, onComplete: function onComplete() {
							particle.scattering = false;
							particle.visible = false;
						}
					});
				};
			}(particle), 0);
		}
	}, {
		key: 'gatherParticles',
		value: function gatherParticles() {
			var _this = this;

			for (var i = 10; i < 20; ++i) {
				this.particles[i].gathering = true;
				this.particles[i].scattering = false;
				this._gatherParticles(this.particles[i]);
			}
			this.gatherTimer = setTimeout(function () {
				for (var i = 0; i < 10; ++i) {
					_this.particles[i].gathering = true;
					_this.particles[i].scattering = false;
					_this._gatherParticles(_this.particles[i]);
				}
			}, 500 + 1000 * Math.random());
		}
	}, {
		key: '_gatherParticles',
		value: function _gatherParticles(particle) {
			var that = this;
			var minDistance = 1;
			var maxDistance = 8;
			particle.scale.set(1, 1, 1);
			particle.visible = false;
			var x = Math.random() > 0.5 ? 1 : -1;
			var z = Math.random() > 0.5 ? 1 : -1;
			particle.position.x = (minDistance + Math.random() * (maxDistance - minDistance)) * x;
			particle.position.y = minDistance + Math.random() * (maxDistance - minDistance);
			particle.position.z = (minDistance + Math.random() * (maxDistance - minDistance)) * z;
			setTimeout(function (particle) {
				return function () {
					if (!particle.gathering) return;
					particle.visible = true;
					var duration = 0.5 + Math.random() * 0.4;
					//TweenMax.to(particle.rotation, duration, { x: Math.random() * 12, y: Math.random() * 12 });
					(0, _animation.TweenAnimation)(particle.scale.x, 0.8 + Math.random(), duration * 1000, function (value) {
						particle.scale.x = value;
					});
					(0, _animation.TweenAnimation)(particle.scale.y, 0.8 + Math.random(), duration * 1000, function (value) {
						particle.scale.y = value;
					});
					(0, _animation.TweenAnimation)(particle.scale.z, 0.8 + Math.random(), duration * 1000, function (value) {
						particle.scale.z = value;
					});

					(0, _animation.TweenAnimation)(particle.position.x, Math.random() * x, duration * 1000, function (value) {
						particle.position.x = value;
					});
					(0, _animation.TweenAnimation)(particle.position.y, Math.random() * 2.5, duration * 1000, function (value) {
						particle.position.y = value;
					});
					(0, _animation.TweenAnimation)(particle.position.z, Math.random() * z, duration * 1000, function (value, complete) {
						particle.position.z = value;
						if (complete && particle.gathering) {
							that._gatherParticles(particle);
						}
					});
				};
			}(particle), Math.random() * 500);
		}
	}, {
		key: 'update',
		value: function update(tickTime) {
			if (this.status == 'stop') {
				return;
			}
			if (this.status == 'prepare') {
				this._prepare();
			} else if (this.status == 'jump') {
				this._jump(tickTime);
			} else if (this.status == 'turn') {
				this.turn();
			}
		}
	}, {
		key: 'lookAt',
		value: function lookAt(direction, targetPosition) {
			if (direction !== this.direction) {
				if (direction === 'straight') {
					this.turnAngle = -(Math.PI / 2);
					this.angle = 0;
				} else {
					this.turnAngle = Math.PI / 2;
					this.angle = Math.PI / 2;
				}
				this.direction = direction;
				//this.status = 'turn';
			}

			// targetPosition.y = (BOTTLE.bodyHeight + BLOCK.height) / 2
			// this.status = 'turn';
			// this.direction = direction;
			// this.angle = targetPosition.clone().sub(this.obj.position.clone()).angleTo(new THREE.Vector3(1, 0, 0));
			// if (this.obj.position.z < targetPosition.z) this.angle *= -1;
			// this.turnAngle = this.angle - this.obj.rotation.y;
		}
	}, {
		key: 'turn',
		value: function turn() {
			var angle = this.turnAngle > 0 ? 0.2 : -0.2;
			this.bottle.rotation.y += angle;
			this.turnAngle -= angle;
			if (this.turnAngle >= -0.2 && this.turnAngle <= 0.2) {
				this.bottle.rotation.y = this.angle;
				this.status = 'stop';
			}
		}
	}, {
		key: 'fall',
		value: function fall() {
			var _this2 = this;

			this.stop();
			setTimeout(function () {
				_this2.status = 'fall';
				(0, _animation.TweenAnimation)(_this2.obj.position.y, -_config.BLOCK.height / 2 - 0.3, 400, function (value) {
					this.obj.position.y = value;
				}.bind(_this2));
			}, 0);
		}
	}, {
		key: 'forerake',
		value: function forerake() {
			var _this3 = this;

			this.stop();
			this.status = 'forerake';
			setTimeout(function () {
				if (_this3.direction === 'straight') {
					(0, _animation.TweenAnimation)(_this3.obj.rotation.z, -Math.PI / 2, 1000, function (value) {
						this.obj.rotation.z = value;
					}.bind(_this3));

					//TweenMax.to(this.obj.position, 0.3, { x: this.obj.position.x + BOTTLE.bodyWidth });
				} else {
					(0, _animation.TweenAnimation)(_this3.obj.rotation.x, -Math.PI / 2, 1000, function (value) {
						this.obj.rotation.x = value;
					}.bind(_this3));
					//TweenMax.to(this.obj.position, 0.3, { z: this.obj.position.z - BOTTLE.bodyWidth });
				}
				// TweenAnimation(this.obj.position.y, this.obj.position.y - 0.5, 500, function(value) {
				// 	this.obj.position.y = value;
				// }.bind(this));
				setTimeout(function () {
					if (_this3.status == 'suspend') {
						_this3.status = 'stop';return;
					}
					(0, _animation.TweenAnimation)(_this3.obj.position.y, -_config.BLOCK.height / 2 + 1.2, 400, function (value, complete) {
						this.obj.position.y = value;
						if (complete) this.status = 'stop';
					}.bind(_this3));
					_animation.customAnimation.to(_this3.head.position, 0.2, { x: -1.125 });
					_animation.customAnimation.to(_this3.head.position, 0.2, { x: 0, delay: 0.2 });
				}, 200);
			}, 200);
		}
	}, {
		key: 'hypsokinesis',
		value: function hypsokinesis() {
			var _this4 = this;

			this.stop();
			this.status = 'hypsokinesis';
			setTimeout(function () {
				if (_this4.direction === 'straight') {
					(0, _animation.TweenAnimation)(_this4.obj.rotation.z, Math.PI / 2, 800, function (value) {
						this.obj.rotation.z = value;
					}.bind(_this4));
				} else {
					(0, _animation.TweenAnimation)(_this4.obj.rotation.x, Math.PI / 2, 800, function (value) {
						this.obj.rotation.x = value;
					}.bind(_this4));
				}
				setTimeout(function () {
					if (_this4.status == 'suspend') {
						_this4.status = 'stop';return;
					}
					(0, _animation.TweenAnimation)(_this4.obj.position.y, -_config.BLOCK.height / 2 + 1.2, 400, function (value, complete) {
						this.obj.position.y = value;
						if (complete) this.status = 'stop';
					}.bind(_this4));
					_animation.customAnimation.to(_this4.head.position, 0.2, { x: 1.125 });
					_animation.customAnimation.to(_this4.head.position, 0.2, { x: 0, delay: 0.2 });
				}, 350);
			}, 200);
		}
	}, {
		key: '_jump',
		value: function _jump(tickTime) {
			var translateV = new THREE.Vector3(0, 0, 0);
			translateV.z = this.velocity.vz * tickTime;
			translateV.y = this.velocity.vy * tickTime - _config.GAME.gravity / 2 * tickTime * tickTime - _config.GAME.gravity * this.flyingTime * tickTime;
			this.flyingTime += tickTime;
			this.obj.translateY(translateV.y);
			this.obj.translateOnAxis(this.axis, translateV.z);

			// if (this.jumpStatus == 'init' && this.flyingTime > 0.05) {
			// 	this.jumpStatus = 'rotate1';
			// }
			// if (this.jumpStatus == 'still' && this.flyingTime - this.stillStartTime > 0.05) {
			// 	this.jumpStatus = 'rotate2';
			// }
			// if (this.jumpStatus == 'rotate1') {
			// 	this.bottle.rotateZ(Math.PI / 4);
			// }
			// if (this.jumpStatus == 'rotate2') {
			// 	this.bottle.rotateZ(Math.PI / 8);
			// }
			// if (this.jumpStatus == 'rotate1' && this.bottle.rotation.z <= 0) {
			// 	this.jumpStatus = 'still';
			// 	this.stillStartTime = this.flyingTime;
			// }
			// if (this.jumpStatus == 'rotate2' && this.bottle.rotation.z >= 0) {
			// 	this.jumpStatus = 'stop';
			// 	this.bottle.rotation.z = 0;
			// }
		}
	}, {
		key: 'squeeze',
		value: function squeeze() {
			this.obj.position.y = _config.BLOCK.height / 2;
			_animation.customAnimation.to(this.body.scale, 0.15, { y: 0.9, x: 1.07, z: 1.07 });
			_animation.customAnimation.to(this.body.scale, 0.15, { y: 1, x: 1, z: 1, delay: 0.15 });
			_animation.customAnimation.to(this.head.position, 0.15, { y: 4.725, delay: 0.15 });
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.status = 'stop';
			this.flyingTime = 0;
			this.scale = 1;
			this.velocity = {};
			this.jumpStatus = 'init';
		}
	}, {
		key: 'suspend',
		value: function suspend() {
			this.status = 'suspend';
			_animation.TweenAnimation.killAll();
		}
	}, {
		key: 'rotate',
		value: function rotate() {
			_animation.TweenAnimation.killAll();
			if (this.direction === 'straight') {
				(0, _animation.TweenAnimation)(this.obj.rotation.z, 0, 300, function (value) {
					this.obj.rotation.z = value;
				}.bind(this));
				var offset;
				if (this.status.indexOf('forerake') >= 0) {
					offset = 2;
				} else {
					offset = -2;
				}
				(0, _animation.TweenAnimation)(this.obj.position.x, this.obj.position.x + offset, 300, function (value) {
					this.obj.position.x = value;
				}.bind(this));
			} else {
				(0, _animation.TweenAnimation)(this.obj.rotation.x, 0, 300, function (value) {
					this.obj.rotation.x = value;
				}.bind(this));
				if (this.status.indexOf('forerake') >= 0) {
					offset = -2;
				} else {
					offset = 2;
				}
				(0, _animation.TweenAnimation)(this.obj.position.z, this.obj.position.z + offset, 300, function (value) {
					this.obj.position.z = value;
				}.bind(this));
			}
			(0, _animation.TweenAnimation)(this.head.position.x, 0, 100, function (value) {
				this.head.position.x = value;
			}.bind(this));
			(0, _animation.TweenAnimation)(this.obj.position.y, -_config.BLOCK.height / 2, 300, function (value, complete) {
				this.obj.position.y = value;
				if (complete) this.status = 'stop';
			}.bind(this));
			this.status = 'rotate';
		}
	}, {
		key: '_prepare',
		value: function _prepare() {

			this.scale -= _config.BOTTLE.reduction;
			this.scale = Math.max(_config.BOTTLE.minScale, this.scale);
			if (this.scale <= _config.BOTTLE.minScale) {
				return;
			}
			// this.bottle.scale.y = this.scale;
			// this.bottle.scale.x += 0.007;
			// this.bottle.scale.z += 0.007;
			this.body.scale.y = this.scale;
			this.body.scale.x += 0.007;
			this.body.scale.z += 0.007;
			this.head.position.y -= 0.018;
			var distance = 0.027;
			this.obj.position.y -= _config.BLOCK.reduction / 2 * _config.BLOCK.height / 2 + distance;
			//if (this.obj.position.y <= BLOCK.height / 2 + BOTTLE.bodyHeight / 2 - (1 - this.scale) * BOTTLE.bodyHeight / 2) return;
			//this.obj.position.y -= distance + BLOCK.moveDownVelocity;
			// this.obj.position.y -= BLOCK.moveDownVelocity;
			//this.obj.position.y -= distance;
		}
	}, {
		key: 'prepare',
		value: function prepare() {
			this.status = 'prepare';
			this.gatherParticles();
		}
	}, {
		key: 'jump',
		value: function jump(axis) {
			this.resetParticles();
			this.status = 'jump';
			this.axis = axis;
			_animation.customAnimation.to(this.body.scale, 0.25, { x: 1, y: 1, z: 1 });
			this.head.position.y = 4.725;
			this.scale = 1;

			/**
    * 注释掉体操旋转
    */

			// if (this.direction === 'straight') {
			// 	TweenMax.to(this.bottle.rotation, 0.1, { ease: Power1.easeIn, z: this.bottle.rotation.z - Math.PI });
			// 	TweenMax.to(this.bottle.rotation, 0.2, { z: this.bottle.rotation.z - 2 * Math.PI, delay: 0.15 });
			// } else {
			// 	TweenMax.to(this.bottle.rotation, 0.1, { ease: Power1.easeIn, x: this.bottle.rotation.x - Math.PI });
			// 	TweenMax.to(this.bottle.rotation, 0.2, { x: this.bottle.rotation.x - 2 * Math.PI, delay: 0.15 });
			// }

			// if (this.direction === 'straight') {
			// 	TweenMax.to(this.timer.rotation, 0.3, { ease: Power1.easeIn, z: this.timer.rotation.z - Math.PI, onComplete: () =>{
			// 		this.timer.rotation.z = this.timer.rotation.x = 0;
			// 	}});
			// 	//TweenMax.to(this.bottle.rotation, 0.2, { z: this.bottle.rotation.z + 2 * Math.PI, delay: 0.15 });
			// } else {
			// 	TweenMax.to(this.timer.rotation, 0.3, { ease: Power1.easeIn, x: this.timer.rotation.x - Math.PI, onComplete: () => {
			// 		this.timer.rotation.z = this.timer.rotation.x = 0;
			// 	} });
			// 	//TweenMax.to(this.bottle.rotation, 0.2, { x: this.bottle.rotation.x + 2 * Math.PI, delay: 0.15 });
			// }

			// if (this.direction === 'straight') {
			// 	TweenMax.to(this.body.rotation, 1, { ease: Power1.easeIn, z: this.body.rotation.z  + Math.PI });
			// 	TweenMax.to(this.body.rotation, 0.2, { z: this.body.rotation.z + 2 * Math.PI, delay: 0.15 });
			// } else {
			// 	TweenMax.to(this.body.rotation, 0.1, { ease: Power1.easeIn, x: this.body.rotation.x + Math.PI });
			// 	TweenMax.to(this.body.rotation, 0.2, { x: this.body.rotation.x + 2 * Math.PI, delay: 0.15 });
			// }
			// TweenMax.to(this.head.position, 0.1, { z: this.head.position.z  - 1, delay: 0.15 });
			// TweenMax.to(this.head.position, 0.1, { z: this.head.position.z, y: this.head.position.y, delay: 0.25 });


			var scale = Math.min(Math.max(this.velocity.vz / 35, 1.2), 1.4);
			this.human.rotation.z = this.human.rotation.x = 0;
			if (this.direction === 'straight') {
				_animation.customAnimation.to(this.human.rotation, 0.14, { z: this.human.rotation.z - Math.PI });
				_animation.customAnimation.to(this.human.rotation, 0.18, { z: this.human.rotation.z - 2 * Math.PI, delay: 0.14 });
				_animation.customAnimation.to(this.head.position, 0.1, { y: this.head.position.y + 0.9 * scale, x: this.head.position.x + 0.45 * scale });
				_animation.customAnimation.to(this.head.position, 0.1, { y: this.head.position.y - 0.9 * scale, x: this.head.position.x - 0.45 * scale, delay: 0.1 });
				_animation.customAnimation.to(this.head.position, 0.15, { y: 4.725, x: 0, delay: 0.25 });
				// TweenMax.to(this.head.position, 0.1, { z: this.head.position.z , delay: 0.3 });
				_animation.customAnimation.to(this.body.scale, 0.1, { y: Math.max(scale, 1), x: Math.max(Math.min(1 / scale, 1), 0.7), z: Math.max(Math.min(1 / scale, 1), 0.7) });
				_animation.customAnimation.to(this.body.scale, 0.1, { y: Math.min(0.9 / scale, 0.7), x: Math.max(scale, 1.2), z: Math.max(scale, 1.2), delay: 0.1 });
				_animation.customAnimation.to(this.body.scale, 0.3, { y: 1, x: 1, z: 1, delay: 0.2 });
			} else {
				_animation.customAnimation.to(this.human.rotation, 0.14, { x: this.human.rotation.x - Math.PI });
				_animation.customAnimation.to(this.human.rotation, 0.18, { x: this.human.rotation.x - 2 * Math.PI, delay: 0.14 });

				_animation.customAnimation.to(this.head.position, 0.1, { y: this.head.position.y + 0.9 * scale, z: this.head.position.z - 0.45 * scale });
				_animation.customAnimation.to(this.head.position, 0.1, { z: this.head.position.z + 0.45 * scale, y: this.head.position.y - 0.9 * scale, delay: 0.1 });
				_animation.customAnimation.to(this.head.position, 0.15, { y: 4.725, z: 0, delay: 0.25 });
				// TweenMax.to(this.head.position, 0.1, { z: this.head.position.z , delay: 0.3 });
				_animation.customAnimation.to(this.body.scale, 0.05, { y: Math.max(scale, 1), x: Math.max(Math.min(1 / scale, 1), 0.7), z: Math.max(Math.min(1 / scale, 1), 0.7) });
				_animation.customAnimation.to(this.body.scale, 0.05, { y: Math.min(0.9 / scale, 0.7), x: Math.max(scale, 1.2), z: Math.max(scale, 1.2), delay: 0.1 });
				_animation.customAnimation.to(this.body.scale, 0.2, { y: 1, x: 1, z: 1, delay: 0.2 });
			}

			//TweenMax.to(this.bottle.rotation, 1, { z: 2 * Math.PI, delay: 2 });
		}
	}, {
		key: 'showup',
		value: function showup() {
			this.status = 'showup';
			this.obj.position.y = 25;
			this.human.rotation.x = this.human.rotation.z = 0;
			(0, _animation.TweenAnimation)(this.obj.position.y, _config.BLOCK.height / 2, 500, 'Bounce.easeOut', function (value, complete) {
				this.obj.position.y = value;
				if (complete) {
					this.status = 'stop';
				}
			}.bind(this));

			/*    TweenMax.to(this.obj.position, 0.5, { ease: Bounce.easeOut, y: (BLOCK.height) / 2 , onComplete: () => { */
			// this.status = 'stop';
			/* }}); */
		}
	}, {
		key: 'stopPrepare',
		value: function stopPrepare() {
			this.obj.position.y = _config.BLOCK.height / 2;
			this.stop();
			this.body.scale.set(1, 1, 1);
			this.head.position.y = 4.725;
			this.head.position.x = 0;
			this.resetParticles();
		}
	}, {
		key: 'getBox',
		value: function getBox() {
			return [new THREE.Box3().setFromObject(this.head), new THREE.Box3().setFromObject(this.middle), new THREE.Box3().setFromObject(this.bottom)];
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.stop();
			this.obj.position.y = _config.BLOCK.height / 2;
			this.obj.position.x = this.obj.position.z = 0;
			this.obj.rotation.z = 0;
			this.obj.rotation.y = 0;
			this.obj.rotation.x = 0;
			this.bottle.rotation.y = 0;
			this.bottle.rotation.z = 0;
			this.bottle.rotation.x = 0;
			if (this.body && this.head) {
				this.body.scale.set(1, 1, 1);
				this.body.rotation.z = 0;
				this.body.rotation.x = 0;
				this.head.position.y = 4.725;
				this.head.position.x = 0;
				this.human.rotation.z = this.human.rotation.x = 0;
			}
			this.direction = 'straight';
			this.jumpStatus = 'init';
			this.double = 1;
			this.resetParticles();
			this.scoreText.obj.visible = false;
		}
	}]);

	return Bottle;
}();

exports.default = Bottle;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InstuctionCtrl = function () {
  function InstuctionCtrl(game) {
    _classCallCheck(this, InstuctionCtrl);

    this.game = game;
    this.commandList = [];

    this.isRunning = false;
    this.icTimeout = null;
    this.cmdHandler = function () {
      // console.log('InstuctionCtrl receive No handler')
    };

    this.gameId = 0;

    this.seq = 0;
  }

  _createClass(InstuctionCtrl, [{
    key: "onReceiveCommand",
    value: function onReceiveCommand(data, seq) {
      // console.log('seq', seq)
      if (this.gameId != this.game.gameCtrl.modeCtrl.observeCtrl.gameId) {
        // console.log('矫正gameId')
        this.gameId = this.game.gameCtrl.modeCtrl.observeCtrl.gameId;
        this.seq = seq - 1;
      }

      // 正常情况下 deltaNum = 1
      var deltaNum = seq - this.seq;

      if (deltaNum != 1) {
        var word;
        if (deltaNum > 1) {
          // 掉帧
          word = 0;
        }
        if (deltaNum < 1) {
          // 帧乱
          word = 1;
        }
        this.game.sendServerError(word);
        this.game.socketFirstSync = true;
      }

      this.seq = seq;
      this.commandList.push(data);
      this.checkRunningState();
    }
  }, {
    key: "checkRunningState",
    value: function checkRunningState() {
      if (!this.isRunning) {
        this.runCommand();
      }
    }
  }, {
    key: "runCommand",
    value: function runCommand() {
      var cmd = this.commandList.pop();
      // 这个地方一定要在cmdHandler前面，否则会引起循环调用的坑
      this.isRunning = true;
      this.cmdHandler(cmd);
    }
  }, {
    key: "bindCmdHandler",
    value: function bindCmdHandler(func) {
      this.cmdHandler = func;
    }
  }, {
    key: "onCmdComplete",
    value: function onCmdComplete() {
      if (this.commandList.length) {
        this.runCommand();
      } else {
        this.isRunning = false;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.commandList = [];
      this.gameId = 0;
      this.seq = 0;
      if (this.icTimeout) {
        clearTimeout(this.icTimeout);
      }
      this.icTimeout = null;
      this.isRunning = false;
    }
  }]);

  return InstuctionCtrl;
}();

exports.default = InstuctionCtrl;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryCtrl = __webpack_require__(38);

var _queryCtrl2 = _interopRequireDefault(_queryCtrl);

var _modeCtrl = __webpack_require__(34);

var _modeCtrl2 = _interopRequireDefault(_modeCtrl);

var _networkCtrl = __webpack_require__(35);

var _networkCtrl2 = _interopRequireDefault(_networkCtrl);

var _animation = __webpack_require__(4);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameCtrl = function () {
  function GameCtrl(game) {
    _classCallCheck(this, GameCtrl);

    this.game = game;
  }

  _createClass(GameCtrl, [{
    key: 'init',
    value: function init() {
      this.gameView = this.game.gameView;
      this.queryCtrl = new _queryCtrl2.default(this.game);
      this.netWorkCtrl = new _networkCtrl2.default(this.game);
      this.modeCtrl = new _modeCtrl2.default(this.game);
      this.model = this.game.gameModel;

      this.reporter = this.game.reporter;
      this.historyTimes = this.game.historyTimes;
      this.viewer = this.game.viewer;
    }
  }, {
    key: 'firstInitGame',
    value: function firstInitGame(options) {
      this.queryCtrl.identifyMode(options);
      this.modeCtrl.initFirstPage(options);
    }
  }, {
    key: 'identifyModeErr',
    value: function identifyModeErr(wording) {
      this.gameView.showIdentifyModeErr(wording);
    }
  }, {
    key: 'onLoginSuccess',
    value: function onLoginSuccess() {
      this.reporter.setTimer(_config.REPORTERTIMEOUT);
    }

    // 首页：开始游戏

  }, {
    key: 'clickStart',
    value: function clickStart() {
      this.modeCtrl.clickStart();
    }

    // 首页：点击排行

  }, {
    key: 'showFriendRank',
    value: function showFriendRank() {
      this.modeCtrl.showFriendRank();
    }

    // 结算页：点击排行

  }, {
    key: 'clickRank',
    value: function clickRank() {
      this.modeCtrl.clickRank();
    }
  }, {
    key: 'gameOver',
    value: function gameOver(score) {
      this.model.setScore(score);
      if (this.model.mode != 'observe') {
        var highestScore = this.model.getHighestScore();
        var weekBestScore = this.model.weekBestScore;

        // 加一局玩过的次数
        this.historyTimes.addOne();
        var gameTimes = this.historyTimes.getTimes();

        this.reporter.playGameReport(score, highestScore, gameTimes);
        //console.log("wtf", JSON.stringify(this.game.actionList), JSON.stringify(this.game.musicList), this.game.randomSeed,  JSON.stringify(this.game.touchList));
        // !!! 这里因为调用的都是同一个接口，为了节省服务器资源，最高分跟回合次数耦合在一起了
        if (weekBestScore < score) {
          // 如果产生了最高分
          // !!! 这里上传了最高分和历史回合次数
          var verifyData = {
            seed: this.game.randomSeed,
            action: this.game.actionList,
            musicList: this.game.musicList,
            touchList: this.game.touchList,
            version: 1
          };
          this.historyTimes.upLoadHistoryTimes(score, verifyData);
          // this.model.weekBestScore = score
          // if (highestScore < score) {
          //   this.model.saveHeighestScore(score)
          // }
        } else {

          // 检查是否需要上传次数
          this.historyTimes.checkUp();
        }

        // 更新排行榜分数
        this.netWorkCtrl.upDateFriendsScoreList();
      }

      if (this.mode == 'player') {
        this.reporter.playAudienceReport();
      }

      if (this.mode == 'battle') {
        this.reporter.playPKReport(score);
      }
    }
  }, {
    key: 'gameOverShowPage',
    value: function gameOverShowPage() {
      this.modeCtrl.showGameOverPage();
      if (this.model.mode != 'observe') {
        if (this.model.currentScore >= this.model.weekBestScore) {
          this.model.weekBestScore = this.model.currentScore;
          this.model.saveWeekBestScore(this.model.currentScore);
          if (this.model.currentScore > this.model.getHighestScore()) {
            var verifyData = {
              seed: this.game.randomSeed,
              action: this.game.actionList
            };
            this.model.saveHeighestScore(this.model.currentScore, verifyData);
          }
        }
      }
    }

    // 结算页面：重新玩

  }, {
    key: 'clickReplay',
    value: function clickReplay() {
      this.reporter.playAudienceReportStart();
      this.modeCtrl.gameOverClickReplay();
    }

    // 好友排行：返回上一页

  }, {
    key: 'friendRankReturn',
    value: function friendRankReturn() {
      this.modeCtrl.friendRankReturn();
    }
  }, {
    key: 'netWorkLogin',
    value: function netWorkLogin() {
      this.netWorkCtrl.netWorkLogin();
    }

    // 好友排行页面：群分享

  }, {
    key: 'shareGroupRank',
    value: function shareGroupRank() {
      this.modeCtrl.shareGroupRank();
    }
  }, {
    key: 'afterShareGroupRank',
    value: function afterShareGroupRank(success, isGroup) {
      // console.log(success, isGroup)
      this.reporter.shareGroupReport(isGroup);
    }

    // 结算页面：

  }, {
    key: 'shareBattleCard',
    value: function shareBattleCard() {
      this.modeCtrl.shareBattleCard();
    }
  }, {
    key: 'afterShareBattle',
    value: function afterShareBattle(success, isGroup) {
      // console.log(success, isGroup)
      if (success) {
        this.reporter.sharePKReport(isGroup);
      }
    }
  }, {
    key: 'groupPlayGame',
    value: function groupPlayGame() {
      this.modeCtrl.groupPlayGame();
    }

    // 加入挑战模式事件

  }, {
    key: 'loginBattle',
    value: function loginBattle(isGroup) {
      // console.log('loginBattle', isGroup)
      this.reporter.joinPKReport(isGroup);
      this.reporter.playPKReportStart(isGroup);
    }

    // 获取PK的信息之后触发事件

  }, {
    key: 'showPkPage',
    value: function showPkPage(ownerScore) {
      // console.log('showPkPage', ownerScore)
      this.reporter.playPKScore(ownerScore);
    }

    // 挑战页面：点击挑战

  }, {
    key: 'onBattlePlay',
    value: function onBattlePlay(pk) {
      this.modeCtrl.battlePlay(pk);
    }
  }, {
    key: 'battleToSingle',
    value: function battleToSingle() {
      this.reporter.resetPKReport();
    }

    // 事件

  }, {
    key: 'shareObservCard',
    value: function shareObservCard() {
      this.modeCtrl.shareObservCard();
    }
  }, {
    key: 'socketJoinSuccess',
    value: function socketJoinSuccess(success) {
      this.modeCtrl.socketJoinSuccess(success);
      if (this.model.mode == 'observe') {
        if (success) {
          this.game.socketFirstSync = true;
          this.reporter.joinAudienceReportStart();
        }
      } else {
        this.reporter.joinAudienceReport();
      }

      if (this.model.mode == 'player') {
        this.reporter.playAudienceReportStart();
      }
    }

    // 分享卡片之后

  }, {
    key: 'afterShareObserveCard',
    value: function afterShareObserveCard(isGroup) {
      this.reporter.shareAudienceReport(isGroup);
    }
  }, {
    key: 'showPlayerGG',
    value: function showPlayerGG(data) {
      this.modeCtrl.showPlayerGG(data);
    }
  }, {
    key: 'showPlayerWaiting',
    value: function showPlayerWaiting() {
      this.modeCtrl.showPlayerWaiting();
    }
  }, {
    key: 'onPlayerOut',
    value: function onPlayerOut() {
      this.modeCtrl.onPlayerOut();
    }
  }, {
    key: 'onViewerStart',
    value: function onViewerStart() {
      this.game.audioManager.scale_intro.stop();
      if (this.game.deadTimeout) {
        clearTimeout(this.game.deadTimeout);
        this.game.deadTimeout = null;
      }
      this.game.pendingReset = false;
      // TweenAnimation.killAll();
      this.modeCtrl.onViewerStart();
      this.reporter.joinAudienceReport();
    }
  }, {
    key: 'wxOnShow',
    value: function wxOnShow(options) {
      var _this = this;

      this.netWorkCtrl.requestServerInit();
      this.reporter.setTimer(_config.REPORTERTIMEOUT);
      setTimeout(function () {

        // 根据传进来的mode参数判断，如果有mode说明需要更换场景
        if (!!options.query && options.query.hasOwnProperty('mode')) {
          _this.modeCtrl.reInitFirstPage(options);
        } else if (_this.model.mode != 'single' && _this.model.mode != 'player' && _this.model.mode != 'battle') {
          // 进来没有参数onshow，单人，围观，挑战，有可能在分享时候回来
          _this.modeCtrl.changeMode('singleCtrl');
        }
      }, 300);
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      this.reporter.quitReport();
      if (this.model.mode == 'observe') {
        this.reporter.joinAudienceReport();
      }

      // 清除定时器，1、服务器下发配置的定时器，2、上报的定时器
      this.netWorkCtrl.clearServerInit();
      this.reporter.clearTimer();

      this.modeCtrl.wxOnhide();
    }
  }, {
    key: 'onReplayGame',
    value: function onReplayGame() {
      var mode = this.model.mode;
      if (mode != 'observe') {
        this.reporter.playGameReportStart();
      }
    }
  }, {
    key: 'onPeopleCome',
    value: function onPeopleCome(data) {
      if (data.audience_cmd == 0) {

        // 来人了
        this.viewer.peopleCome(data);
        this.reporter.playAudienceReportMaxPeople(this.viewer.num);
      } else if (data.audience_cmd == 1) {

        // 人走了
        this.viewer.peopleOut(data);
      }
    }
  }, {
    key: 'onServerConfigForbid',
    value: function onServerConfigForbid() {}
  }, {
    key: 'onSocketCloseErr',
    value: function onSocketCloseErr() {
      this.gameView.showSocketCloseErr();
      this.modeCtrl.changeMode('singleCtrl');
    }
  }]);

  return GameCtrl;
}();

exports.default = GameCtrl;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _session = __webpack_require__(6);

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameModel = function () {
  function GameModel(game) {
    _classCallCheck(this, GameModel);

    this.game = game;
    this.mode = '';
    this.stage = '';
    this.is_from_wn = 0;
    this.firstBlood = false;
    this.currentScore = 0;
    this.highestScore = 0;
    this.observeInfo = {};
    this.friendsScore = [];
    this.weekBestScore = 0;
    this.startTime = Math.floor(Date.now() / 1000);
  }

  _createClass(GameModel, [{
    key: 'setMode',
    value: function setMode(mode) {
      this.mode = mode;
      this.game.mode = mode;
    }
  }, {
    key: 'setStage',
    value: function setStage(stage) {
      this.stage = stage;
      this.game.stage = stage;
    }
  }, {
    key: 'init',
    value: function init() {
      _session2.default.init();

      var fb = _storage2.default.getFirstBlood();
      if (!fb) {
        this.setFirstBlood(true);
        _storage2.default.saveFirstBlood();
      }

      this.highestScore = _storage2.default.getHeighestScore() || 0;
      _session2.default.setServerConfig(_storage2.default.getServerConfig());

      this.weekBestScore = _storage2.default.getWeekBestScore() || 0;
      this.friendsScore = _storage2.default.getFriendsScore();
    }
  }, {
    key: 'getServerConfig',
    value: function getServerConfig() {
      return _session2.default.serverConfig;
    }
  }, {
    key: 'setIsFromWn',
    value: function setIsFromWn(number) {
      this.is_from_wn = number;
      this.game.is_from_wn = number;
    }
  }, {
    key: 'setFirstBlood',
    value: function setFirstBlood(bool) {
      this.firstBlood = bool;
      this.game.firstBlood = bool;
    }
  }, {
    key: 'getMode',
    value: function getMode() {
      return this.mode;
    }
  }, {
    key: 'setScore',
    value: function setScore(score) {
      this.currentScore = score;
      // if (score > this.highestScore) {
      //   this.saveHeighestScore(score)
      // }
    }
  }, {
    key: 'saveHeighestScore',
    value: function saveHeighestScore(score) {
      var verifyData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (verifyData) {
        var expire = this.getNextSunday();
        var vData = {
          ts: expire,
          data: verifyData
        };
      } else {
        var vData = '';
      }

      _storage2.default.saveHeighestScore(score);
      _storage2.default.saveActionData(vData);
      this.highestScore = score;
    }
  }, {
    key: 'saveWeekBestScore',
    value: function saveWeekBestScore() {
      var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var data = {
        ts: this.getNextSunday(),
        data: score
      };
      _storage2.default.saveWeekBestScore(data);
    }
  }, {
    key: 'getActionData',
    value: function getActionData() {
      return _storage2.default.getActionData();
    }
  }, {
    key: 'getHighestScore',
    value: function getHighestScore() {
      return this.highestScore;
    }
  }, {
    key: 'saveFriendsScore',
    value: function saveFriendsScore(data) {
      this.friendsScore = data;
      var formatData = {
        ts: this.getNextSunday(),
        data: data
      };
      _storage2.default.saveFriendsScore(formatData);
    }
  }, {
    key: 'getSessionId',
    value: function getSessionId() {
      return _session2.default.sessionId;
    }
  }, {
    key: 'getPkId',
    value: function getPkId() {
      return _session2.default.pkId;
    }
  }, {
    key: 'clearPkId',
    value: function clearPkId() {
      _session2.default.clearPkId();
    }
  }, {
    key: 'setShareTicket',
    value: function setShareTicket(rawData) {
      _session2.default.setShareTicket(rawData);
    }
  }, {
    key: 'getShareTicket',
    value: function getShareTicket() {
      return _session2.default.shareTicket;
    }
  }, {
    key: 'clearShareTicket',
    value: function clearShareTicket() {
      _session2.default.clearShareTicket();
    }
  }, {
    key: 'setGameId',
    value: function setGameId(id) {
      _session2.default.setGameId(id);
    }
  }, {
    key: 'setGameTicket',
    value: function setGameTicket(ticket) {
      _session2.default.setGameTicket(ticket);
    }
  }, {
    key: 'clearGameId',
    value: function clearGameId() {
      _session2.default.clearGameId();
    }
  }, {
    key: 'clearGameTicket',
    value: function clearGameTicket() {
      _session2.default.clearGameTicket();
    }
  }, {
    key: 'setObserveInfo',
    value: function setObserveInfo(opt) {
      this.observeInfo.headimg = opt.headimg;
      this.observeInfo.nickName = opt.nickName;
    }
  }, {
    key: 'clearObserveInfo',
    value: function clearObserveInfo() {
      this.observeInfo.headimg = null;
      this.observeInfo.nickName = null;
    }
  }, {
    key: 'getNextSunday',
    value: function getNextSunday() {
      var now = new Date();
      var day = now.getDay();
      now.setHours(0, 0, 0, 0);
      var expire = now.valueOf() + (8 - day) % 7 * 24 * 60 * 60 * 1000;
      return expire;
    }
  }]);

  return GameModel;
}();

exports.default = GameModel;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game) {
    _classCallCheck(this, GameView);

    this.game = game;
  }

  _createClass(GameView, [{
    key: 'init',
    value: function init() {}
  }, {
    key: 'showIdentifyModeErr',
    value: function showIdentifyModeErr(wording) {
      this.showModal(wording);
    }
  }, {
    key: 'showNoSession',
    value: function showNoSession() {
      this.showModal();
    }
  }, {
    key: 'showGetPkIdFail',
    value: function showGetPkIdFail() {
      this.showModal();
    }
  }, {
    key: 'showGroupShareFail',
    value: function showGroupShareFail() {
      var wording = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '网络异常,点击确定回到游戏';

      this.showModal(wording);
    }
  }, {
    key: 'showGoToBattleFail',
    value: function showGoToBattleFail() {
      this.showModal();
    }
  }, {
    key: 'showUploadPkScoreFail',
    value: function showUploadPkScoreFail() {
      this.showModal('数据上传失败');
    }
  }, {
    key: 'showShareObserveCardFail',
    value: function showShareObserveCardFail(res) {
      this.showModal(res);
    }
  }, {
    key: 'showObserveStateFail',
    value: function showObserveStateFail() {
      this.showModal('服务器异常');
    }
  }, {
    key: 'showModal',
    value: function showModal() {
      var wording = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '网络异常,点击确定回到游戏';

      wx.showModal({
        title: '提示',
        content: wording,
        showCancel: false
      });
    }
  }, {
    key: 'showServeConfigForbiddenObserveMode',
    value: function showServeConfigForbiddenObserveMode() {
      this.showModal('当前围观人数过多，请稍后再试');
    }
  }, {
    key: 'showServeConfigForbiddenGroupShare',
    value: function showServeConfigForbiddenGroupShare() {
      this.showModal('查看群排行人数过多，请稍后再试');
    }
  }, {
    key: 'showSocketCloseErr',
    value: function showSocketCloseErr() {
      // this.showModal('网络连接异常，点击确定回到游戏')
    }
  }, {
    key: 'showSyncopErr',
    value: function showSyncopErr() {
      return;
    }
  }]);

  return GameView;
}();

exports.default = GameView;

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

		/*var vertexShader = [
      'varying vec3 vWorldPosition;',
      'void main()',
      '{',
      '  vec4 worldPosition = modelMatrix * vec4(position, 1.0);',
      '  worldPosition = worldPosition.xyz;',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
      '}'
    ].join('\n');
  	var fragmentShader = [    
      'uniform vec3 topColor;',
      'uniform vec3 bottomColor;',
      'uniform float offset;',
      'uniform float exponent;',
  	    'varying vec3 vWorldPosition;',
      'void main()',
      '{',
      '  float h = normalize(vWorldPosition + offset).y;',
      '  gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);',
      '}'
    ].join('\n')
  	var uniforms = {
  	topColor: { type: "c", value: new THREE.Color(0x0077ff) },
  	bottomColor: { type: "c", value: new THREE.Color(0xffffff) },
  	offset: { type: "f", value: 400 },
  	exponent: {type: "f", value: 0.6 }
  }*/
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reporter = function () {
  function reporter() {
    _classCallCheck(this, reporter);

    this.timeOut = null;
    this.reportList = [];
    this.pkState = {
      isGroup: 0,
      score: 0
    };
    this.singleState = 0;
    this.observeState = {
      startTime: 0,
      success: 0
    };
    this.playerState = {
      startTime: 0,
      maxAudience: 0
    };
    this.gameStartTime = 0;

    try {
      var res = wx.getSystemInfoSync();
      this.clientInfo = {
        platform: res.platform,
        brand: res.brand,
        model: res.model,
        system: res.system
      };
    } catch (error) {
      console.log(error);
    }
  }

  _createClass(reporter, [{
    key: 'getTime',
    value: function getTime() {
      var time = Date.now();
      time = Math.floor(time / 1000);
      return time;
    }

    // EnterReport:     //进入小程序
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填0
    // scene         //uint32, 小程序进入场景

  }, {
    key: 'enterReport',
    value: function enterReport(scene) {
      this.gameStartTime = this.getTime();
      if (!scene) {
        // console.log('enterReport need scene')
        return;
      }
      var data = {
        ts: this.getTime(),
        type: 0,
        scene: scene
      };
      this.reportList.push(data);
    }

    // QuitReport:     //退出小程序
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填1

  }, {
    key: 'quitReport',
    value: function quitReport() {
      if (!this.gameStartTime) {
        return;
      }
      var data = {
        ts: this.getTime(),
        type: 1,
        duration: this.getTime() - this.gameStartTime
      };
      this.reportList.push(data);
    }

    // PlayGameReport:  //游戏局内上报
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填2
    // score         //uint32, 当局分数
    // best_score    //uint32, 历史最高分（包括当局）
    // break_record  //uint32, 当局是否打破记录
    // duration      //uint32，秒级游戏时长
    // times         //unit32，次数

  }, {
    key: 'playGameReport',
    value: function playGameReport(score, bestScore, times) {
      if (!this.singleState) {
        return;
      }
      var data = {
        ts: this.getTime(),
        type: 2,
        score: score,
        best_score: bestScore,
        break_record: score > bestScore ? 1 : 0,
        duration: this.getTime() - this.singleState,
        times: times
      };
      this.reportList.push(data);
      this.singleState = 0;
    }
  }, {
    key: 'playGameReportStart',
    value: function playGameReportStart() {
      this.singleState = this.getTime();
    }

    // ShareAudienceReport:   //分享围观上报
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填3
    // is_group      //uint32，是否分享到群聊，单聊：0，群聊：1

  }, {
    key: 'shareAudienceReport',
    value: function shareAudienceReport(isGroup) {
      var data = {
        ts: this.getTime(),
        type: 3,
        is_group: isGroup
      };
      this.reportList.push(data);
    }

    // PlayAudienceReport:    //围观中玩游戏,以局为单位
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填4
    // duration      //uint32，在围观中玩游戏持续时长，秒级
    // max_audience  //uint32，累计围观观众人数

  }, {
    key: 'playAudienceReport',
    value: function playAudienceReport() {
      if (!this.playerState.startTime) {
        return;
      }
      var data = {
        ts: this.getTime(),
        type: 4,
        duration: this.getTime() - this.playerState.startTime,
        max_audience: this.playerState.maxAudience
      };
      this.reportList.push(data);
      this.playerState.startTime = 0;
      this.playerState.maxAudience = 0;
    }

    // 新增上报，每次游戏开始都加一条
    // type 10

  }, {
    key: 'playAudienceReportStart',
    value: function playAudienceReportStart() {
      this.playerState.startTime = this.getTime();
      var data = {
        ts: this.getTime(),
        type: 10
      };
      this.reportList.push(data);
    }
  }, {
    key: 'playAudienceReportMaxPeople',
    value: function playAudienceReportMaxPeople(n) {
      if (this.playerState.maxAudience < n) {

        this.playerState.maxAudience = n;
      }
    }

    // JoinAudienceReport:    //观众进入围观
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填5
    // duration      //uint32，围观时长
    // join_audience_success //uint32，是否成功看到玩家玩游戏，0：没看到；1：看到
    // 出口，再来一句，join失败

  }, {
    key: 'joinAudienceReport',
    value: function joinAudienceReport() {
      var time = this.observeState.startTime == 0 ? 0 : this.getTime() - this.observeState.startTime;
      var data = {
        ts: this.getTime(),
        type: 5,
        duration: time,
        join_audience_success: this.observeState.success
      };
      this.reportList.push(data);
      this.observeState.startTime = 0;
      this.observeState.success = 0;
    }

    // 入口joinSuccess

  }, {
    key: 'joinAudienceReportStart',
    value: function joinAudienceReportStart() {
      this.observeState.startTime = this.getTime();
      this.observeState.success = 1;
    }

    // ShareRankReport:       //分享排行榜
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填6
    // is_group      //uint32，是否分享到群聊，单聊：0，群聊：1

  }, {
    key: 'shareGroupReport',
    value: function shareGroupReport(isGroup) {
      var data = {
        ts: this.getTime(),
        type: 6,
        is_group: isGroup
      };
      this.reportList.push(data);
    }

    // SharePKReport：        //分享PK
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填7
    // is_group      //uint32，是否分享到群聊，单聊：0，群聊：1

  }, {
    key: 'sharePKReport',
    value: function sharePKReport(isGroup) {
      var data = {
        ts: this.getTime(),
        type: 7,
        is_group: isGroup
      };
      this.reportList.push(data);
    }

    // JoinPKReport:          //点击卡片进入PK页面
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填8
    // is_group      //uint32，是否分享到群聊，单聊：0，群聊：1

  }, {
    key: 'joinPKReport',
    value: function joinPKReport(isGroup) {
      var data = {
        ts: this.getTime(),
        type: 8,
        is_group: isGroup
      };
      this.reportList.push(data);
    }

    // PlayPKReport：
    // ts            //uint32，秒级日志时间戳
    // type          //uint32，填9
    // is_group      //uint32，是否来自群聊，单聊：0，群聊：1
    // result        //uint32，0：挑战失败；1：平局；3：挑战成功

  }, {
    key: 'playPKReport',
    value: function playPKReport(currentScore) {
      var result = 0;
      if (currentScore == this.pkState.score) {
        result = 1;
      }
      if (currentScore > this.pkState.score) {
        result = 3;
      }
      var data = {
        ts: this.getTime(),
        type: 9,
        is_group: this.pkState.isGroup,
        result: result
      };
      this.reportList.push(data);
    }
  }, {
    key: 'playPKReportStart',
    value: function playPKReportStart(isGroup) {
      this.pkState.isGroup = isGroup;
    }
  }, {
    key: 'playPKScore',
    value: function playPKScore(score) {
      this.pkState.score = score;
    }
  }, {
    key: 'resetPKReport',
    value: function resetPKReport() {
      this.pkState.isGroup = 0;
      this.pkState.score = 0;
    }
  }, {
    key: 'sendReport',
    value: function sendReport() {
      //console.log(this.reportList)
      // return
      if (this.reportList.length) {
        _network2.default.sendReport(this.reportList, this.clientInfo);
        this.reportList = [];
      }
    }
  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      if (this.timeOut) {
        clearInterval(this.timeOut);
      }
    }
  }, {
    key: 'setTimer',
    value: function setTimer(REPORTERTIMEOUT) {
      this.timeOut = setInterval(this.sendReport.bind(this), REPORTERTIMEOUT);
    }
  }]);

  return reporter;
}();

exports.default = reporter;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _session = __webpack_require__(6);

var _session2 = _interopRequireDefault(_session);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameSocket = function () {
  function GameSocket(game) {
    var _this = this;

    _classCallCheck(this, GameSocket);

    this.alive = false;
    this.noErr = false;
    // this.joinGame = false
    this.game = game;

    this.handlers = {};
    this.handleSocketErr = '';
    // 用来清除心跳，防止发送过多心跳
    this.heartBeat = [];

    /**
     * 命令池,数据格式
     * cmdPool = {
     *  'gameId': {
     *    n:当前帧序号
     *    arr:[]序号指令池
     *  }
     * }
     */
    this.cmdPool = {};

    wx.onSocketOpen(function (res) {
      // console.log('Socket open', res)
      _this.joinGame();
    });

    wx.onSocketClose(function (res) {
      if (_this.game.mode == 'player' && !_this.noErr) {
        _network2.default.quitGame();
        _this.game.gameCtrl.onSocketCloseErr();
      }
      if (_this.game.mode == 'observe' && !_this.noErr) {
        _this.game.gameCtrl.onSocketCloseErr();
      }
      _this.alive = false;
      // console.log('Socket close', res)
    });

    wx.onSocketError(function (res) {
      // console.log('Socket connect fail', res)

      // 错误处理
      // if (typeof this.handleSocketErr == 'function') {
      //   this.handleSocketErr()
      // }
    });

    wx.onSocketMessage(function (res) {
      // console.log('Socket receive message1', res)
      // wx.hideLoading()

      // 清空心跳队列
      _this.cleanHeartBeat();

      var data;
      try {
        data = JSON.parse(res.data);
      } catch (error) {
        // console.log('onSocketMessage err: ', error, 'socket will be close')
        _this.game.handleWxOnError({
          message: 'socket receive wrong msg JSON.parse(res.data) error',
          stack: ''
        });
        wx.closeSocket();
        return;
      }

      // 发送帧的确认帧
      if (data.cmd === 106) {
        _this.handleACK(data);
      }

      // 加入游戏响应 
      if (data.cmd === 101) {
        _this.handleJoinGame(data);
      }

      if (data.cmd === 104) {
        // console.log('receive heart beat')
      }

      if (data.cmd === 108) {
        _this.handlePeopleCome(data);
      }

      if (data.cmd === 102) {
        _this.receiveCommand(data);
      }

      // 围观模式下
      if (data.cmd == 109) {
        _this.close();
      }

      // 主播退出直播了
      if (data.cmd == 107) {
        _this.handlePlayerOut();
      }

      _this.heartBeat.push(setTimeout(_this.sendHeartBeat.bind(_this), 5000));
      // this.heartBeat.push(setTimeout(this.sendHeartBeat.bind(this), 1000))
    });
  }

  _createClass(GameSocket, [{
    key: 'cleanHeartBeat',
    value: function cleanHeartBeat() {
      if (this.heartBeat.length) {
        while (this.heartBeat.length) {
          var heartBeat = this.heartBeat.pop();
          clearTimeout(heartBeat);
        }
      }
    }
  }, {
    key: 'handleSocketOpen',
    value: function handleSocketOpen() {
      this.joinGame();
      this.alive = true;
    }
  }, {
    key: 'connectSocket',
    value: function connectSocket() {
      var _this2 = this;

      this.alive = true;
      wx.connectSocket({
        // url: 'ws://mptest.weixin.qq.com/game/',
        url: 'wss://wxagame.weixin.qq.com',
        fail: function fail() {
          _this2.alive = false;
          // this.handleConnectSocketFail()
        }
      });
    }

    // handleConnectSocketFail() {
    //   this.alive = false
    //   if (this.game.mode == 'player') {
    //     this.game.shareObservCardFail()
    //   }
    //   if (this.game.mode == 'observe') {
    //     this.handleSocketErr(true)
    //   }
    // }

  }, {
    key: 'addHandler',
    value: function addHandler(cmd, cb) {
      if (!this.handlers[cmd]) {
        this.handlers[cmd] = [cb];
      } else {
        this.handlers[cmd].push(cb);
      }
    }

    // 发送指令

  }, {
    key: 'sendCommand',
    value: function sendCommand(cmdSequence, data) {
      var gameId = _session2.default.gameId;
      var gameTicket = _session2.default.gameTicket;
      if (!gameId || !gameTicket || !cmdSequence) {
        return;
      }
      if (typeof gameId !== 'string') {
        console.warn('Socket send cmd need gameId');
        return;
      }

      var obj = {
        cmd: 102,
        i: gameId,
        n: cmdSequence,
        k: gameTicket,
        o: [JSON.stringify(data)]
        // const obj = {
        //   cmd: 102,
        //   i: gameId,
        //   k: gameTicket,
        //   o: []
        // }
        // console.log('send Message', JSON.stringify(obj))
      };wx.sendSocketMessage({
        data: JSON.stringify(obj)
      });
    }
  }, {
    key: 'sendNullCommand',
    value: function sendNullCommand() {
      var gameId = _session2.default.gameId;
      var gameTicket = _session2.default.gameTicket;
      if (!gameId || !gameTicket) {
        return;
      }
      if (typeof gameId !== 'string') {
        console.warn('Socket send cmd need gameId');
        return;
      }

      var obj = {
        cmd: 102,
        i: gameId,
        k: gameTicket,
        o: []
        // console.log('send heartBeat Message', JSON.stringify(obj))
      };wx.sendSocketMessage({
        data: JSON.stringify(obj)
      });
    }
  }, {
    key: 'getCommand',
    value: function getCommand(gameId) {}
  }, {
    key: 'onPeopleCome',
    value: function onPeopleCome(cb) {
      this.peopleCome = cb;
    }
  }, {
    key: 'onReciveCommand',
    value: function onReciveCommand(cb) {
      this.observerMessage = cb;
    }
  }, {
    key: 'onJoinSuccess',
    value: function onJoinSuccess(cb) {
      this.joinSuccess = cb;
    }
  }, {
    key: 'onPlayerOut',
    value: function onPlayerOut(cb) {
      this.playerOutHandler = cb;
    }

    // 接收到指令

  }, {
    key: 'receiveCommand',
    value: function receiveCommand(res) {
      // console.log('receiveCommand',res)
      if (typeof this.observerMessage !== 'function') {
        return;
      }
      if (!res.o) {
        return;
      }
      if (!res.o[0]) {
        return;
      }
      if (!res.o[0].o) {
        return;
      }
      this.observerMessage(res.n, JSON.parse(res.o[0].o));
      return;
    }
  }, {
    key: 'handlePeopleCome',
    value: function handlePeopleCome(res) {
      if (typeof this.peopleCome !== 'function') {
        return;
      }
      this.peopleCome(res);
      return;
    }

    // 接收到指令确认帧

  }, {
    key: 'receiveACK',
    value: function receiveACK() {}

    // 加入游戏
    /**
     *  observe : handleConnectSocketfail => handleSocketFucked
     */

  }, {
    key: 'joinGame',
    value: function joinGame() {
      // console.log('Socket open success')
      var gameId = _session2.default.gameId;
      if (!_session2.default.sessionId || !gameId) {
        // console.log('Socket join game fail')
        // this.handleConnectSocketFail()
        return;
      }
      var obj = {
        cmd: 101,
        game_id: gameId,
        fast: 1,
        session_id: _session2.default.sessionId
      };

      wx.sendSocketMessage({
        data: JSON.stringify(obj)
      });
      // console.log('Socket join game', obj)
    }
  }, {
    key: 'handleACK',
    value: function handleACK(data) {
      if (this.handlers['ack']) {
        this.handlers['ack'].forEach(function (cb) {
          cb(data);
        });
      }
    }
  }, {
    key: 'handleJoinGame',
    value: function handleJoinGame(data) {
      // console.log(data)
      if (this.game.mode == 'observe') {
        switch (data.ret) {
          // 成功
          case 0:
            this.joinSuccess(true);
            break;
          // 不活跃
          case 2:
            this.joinSuccess(true);
            break;
          default:
            this.joinSuccess(false);
            break;
        }
      } else {
        if (data.ret != 0) {
          this.joinSuccess(false);
        } else {
          this.joinSuccess(true);
        }
      }

      // if (this.game.mode == 'player') {
      //   if (data.ret != 0) {
      //     this.close()
      //     this.handleConnectSocketFail()
      //   } else {
      //     this.joinSuccess()
      //   }
      // }
    }
  }, {
    key: 'sendHeartBeat',
    value: function sendHeartBeat() {
      if (this.game.mode == 'player') {
        this.sendNullCommand();
      } else {

        var obj = {
          cmd: 104
        };
        wx.sendSocketMessage({
          data: JSON.stringify(obj)
        });
      }
    }

    // reset() {
    //   this.handlers = {}
    //   this.heartBeat = []
    //   this.cmdPool = {}
    // }

  }, {
    key: 'quitObserve',
    value: function quitObserve() {
      if (!this.alive) {
        return;
      }
      // console.log('quitObservequitObserve')
      var obj = {
        cmd: 109,
        fast: 1,
        game_id: _session2.default.gameId,
        session_id: _session2.default.sessionId
        // console.log(obj)
      };wx.sendSocketMessage({
        data: JSON.stringify(obj)
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      if (!this.alive) {
        return;
      }

      this.alive = false;
      this.noErr = true;
      // console.log('emmit close')
      wx.closeSocket();

      _session2.default.clearShareTicket();
      _session2.default.clearGameId();

      setTimeout(function () {
        _this3.reset();
      }, 1000);
    }
  }, {
    key: 'onSocketErr',
    value: function onSocketErr(cb) {
      this.handleSocketErr = cb;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.alive = false;
      this.noErr = false;
    }
  }, {
    key: 'handlePlayerOut',
    value: function handlePlayerOut() {
      if (typeof this.playerOutHandler == 'function') {
        this.playerOutHandler();
      }
    }
  }]);

  return GameSocket;
}();

exports.default = GameSocket;

/***/ }),
/* 21 */
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

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _scrollHandler = __webpack_require__(11);

var _scrollHandler2 = _interopRequireDefault(_scrollHandler);

var _report = __webpack_require__(55);

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dpr = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio; // 当前屏幕的Dpr， i7p 设置3 会挂
var W = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var H = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var HEIGHT = H * Dpr; // 设备像素
var WIDTH = W * Dpr; // 设备像素
var planList = ['btn', 'bg', 'list1', 'list2'];
var CANVASTYPE = { // 当前绘制的2D场景
	'friendRank': 0, // 好友排行榜
	'groupRank': 1,
	'gameOver': 2,
	'start': 3,
	'pk': 4,
	'lookers': 5,
	'gameOverNew': 6, //结算页显示新手引导
	'gameOverHighest': 7, // 结算页达到排行榜最高 / 历史最高
	'beginner': 8 //新手引导页
};
var frustumSizeHeight = _config.FRUSTUMSIZE; // 动画的尺寸单位坐标高度
var frustumSizeWidth = WIDTH / HEIGHT * frustumSizeHeight; // 动画的尺寸单位坐标高度

var DEBUG = false;
var showDebugImg = false;

var ListLineHeight = 60;

var family = wx.loadFont('res/num.ttf');

var Rank = function () {
	function Rank(options) {
		_classCallCheck(this, Rank);

		this.texture = {};
		this.material = {};
		this.geometry = {};
		this.obj = {};
		this.canvas = {};
		this.context = {};
		this._touchInfo = { trackingID: -1, maxDy: 0, maxDx: 0 };
		this.options = Object.assign({}, {}, options);
		this.imgid = {
			'btn': 0,
			'bg': 0,
			'list1': 0,
			'list2': 0
		};

		// 相关回调
		// --- 好友排行榜：
		this.options.onGroupShare = options.onGroupShare; // 群分享的时候的回调
		this.options.friendRankReturn = options.friendRankReturn; // 好友排行榜返回上一层， 点击右上角X的回调

		// --- 群排行榜
		this.options.groupPlayGame = options.groupPlayGame; // 我也来玩一局的回调

		// --- 结算页：
		this.options.onClickRank = options.onClickRank; // 点击排行榜的回调
		this.options.onClickReplay = options.onClickReplay; // 点击在玩一局的回调, 排行榜再晚一局的回调
		this.options.onClickShare = options.onClickShare; // 点击分享挑战的回调
		this.options.onClickPureShare = options.onClickPureShare; // 纯分享，用户点击将打开首页

		// --- 首页：
		this.options.onClickStart = options.onClickStart; // 点击开始游戏回调
		this.options.onShowFriendRank = options.onShowFriendRank; // 点击排行榜的回调

		// --- 挑战页：
		this.options.onBattlePlay = options.onBattlePlay; // 玩一局， pk 表示当前分数是pk的， '' 表示当前只是自己玩一局

		// --- 围观页：
		this.options.onLookersStart = options.onLookersStart; // 围观页面，开启新的一局


		// 裁剪区域的大小 - 好友/群排行榜
		this.p0 = new THREE.Vector3(0, 0, 9);
		this.p1 = new THREE.Vector3(-frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), (0.5 - this._cy(143) / HEIGHT) * frustumSizeHeight, 9);
		this.p2 = new THREE.Vector3(frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), frustumSizeHeight * (0.5 - this._cy(143) / HEIGHT), 9);
		this.p3 = new THREE.Vector3(frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), -frustumSizeHeight * (0.5 - this._cy(144) / HEIGHT), 9);
		this.p4 = new THREE.Vector3(-frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), -frustumSizeHeight * (0.5 - this._cy(144) / HEIGHT), 9);

		// 裁剪区域大小 - 挑战
		this.p5 = new THREE.Vector3(-frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), (0.5 - this._cy(205) / HEIGHT) * frustumSizeHeight, 9);
		this.p6 = new THREE.Vector3(frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), frustumSizeHeight * (0.5 - this._cy(205) / HEIGHT), 9);
		this.p7 = new THREE.Vector3(frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), -frustumSizeHeight * (0.5 - this._cy(104) / HEIGHT), 9);
		this.p8 = new THREE.Vector3(-frustumSizeWidth * (0.5 - this._cx(30) / WIDTH), -frustumSizeHeight * (0.5 - this._cy(104) / HEIGHT), 9);

		// DEBUG 的时候多加一层
		if (DEBUG) {
			planList = ['sample', 'btn', 'bg', 'list1', 'list2'];
		}

		// 接口测试：
		// --- 新手指引
		// this.showBeginnerPage();
		// --- 排行榜:
		// this.showFriendRankList(); // 显示好友排行榜 
		// this.showGroupRankList(); // 显示群排行 
		// --- 结算页：
		// this.showGameOverPage({
		//  	score : 0, // 当局分数
		//  	highest_score : 1078, // 历史最高分
		//  	start_time : 2511922923, // 起始时间的秒级时间戳
		//  	week_best_score : 0, // 本周最高分
		//  	game_cnt : 5
		// });

		// --- 首页：
		// this.showStartPage(); 
		// --- 挑战页：
		// this.showPkPage({
		// 	data : {
		// 		organizerInfo : { // 擂主
		// 			headimg : '', // 擂主的头像
		// 			nickname : '游戏小子11111111111111111111111', // 擂主的名字
		// 			score_info : [{
		// 				score : 912 // 擂主的分数
		// 			}],
		// 			left_time : 10, // 创建时间的秒级时间戳
		// 			is_self : 0, // 0 - 不是当前用户，1- 是当前用户
		// 		},
		// 		pkListInfo : [{ // 挑战记录， 不包含当前用户的成绩
		// 			headimg : '', 
		// 			nickname : 'bbbbbbbbbbbbbbbbbb',
		// 			score_info : [{
		// 				score : 4567
		// 			}],
		// 			is_self : 0, // 0 - 不是当前用户，1- 是当前用户
		// 		},{
		// 			headimg : '',
		// 			nickname : 'vvv',
		// 			score_info : [{
		// 				score : 233
		// 			}],
		// 			is_self : 0, // 0 - 不是当前用户，1- 是当前用户
		// 		},{
		// 			headimg : '',
		// 			nickname : 'vvv',
		// 			score_info : [{
		// 				score : 233
		// 			}],
		// 			is_self : 0, // 0 - 不是当前用户，1- 是当前用户
		// 		},{
		// 			headimg : '',
		// 			nickname : 'vvv',
		// 			score_info : [{
		// 				score : 233
		// 			}],
		// 			is_self : 0, // 0 - 不是当前用户，1- 是当前用户
		// 		}],
		// 		gg_score : 1032 // 任何num 都是合法的， 如果没有结算，则传个 undefined 过来
		// 	}
		// })
		// --- 围观页面  按钮居中/背景换成切片/头像白色描边/ 正在玩的分数间距拉大
		// this.showLookersPage({
		// 	headimg : '',
		// 	nickname : 'bbbb',
		// 	type : 'out', // in - 正在玩, gg - 结算, out - 退出    
		// 	score : 666
		// }); // 围观者的游戏中的画面
		// 隐藏这个界面：
		// this.hide2D()
	}

	// ----------------- show/hide 方法 -----------------


	_createClass(Rank, [{
		key: 'showFriendRankList',
		value: function showFriendRankList(opt) {
			this.hide2D();
			this.showState = true;
			opt = opt || {};
			this.canvasType = CANVASTYPE['friendRank']; // 当前绘制的2D场景
			this.myUserInfo = _storage2.default.getMyUserInfo() || {}; // 更新用户信息
			this.myUserInfo.week_best_score = opt.week_best_score || 0;
			this._createPlane();
			this._updateClip();
			this._drawRankListBg(); // 背景绘制
			this.renderRankList(_storage2.default.getFriendsScore());
		}
	}, {
		key: 'showGroupRankList',
		value: function showGroupRankList(list, myUserInfo) {
			this.hide2D();
			this.showState = true;
			this.canvasType = CANVASTYPE['groupRank'];
			this.myUserInfo = myUserInfo || {
				headimg: '',
				nickname: '',
				week_best_score: 0,
				grade: 1
			};
			this._createPlane();
			this._updateClip();
			this.renderRankList(list);
			this._drawRankListBg(); // 背景绘制
		}
	}, {
		key: 'showGameOverPage',
		value: function showGameOverPage(opt) {
			this.hide2D();
			// Report.frameReport('xxxxx', 60);
			this.showState = true;
			/*opt = {
    	score : 1100, // 当局分数
    	highest_score : 90, // 历史最高分
    	start_time : 2511922923, // 起始时间的秒级时间戳
    	week_best_score : 0, // 本周最高分
    	game_cnt : 5
   }*/
			opt = opt || {};
			this.opt = opt || this.opt;

			this._createPlane();

			// 找出那个排行 - 
			this.myUserInfo = _storage2.default.getMyUserInfo() || { headimg: '', nickname: '', week_best_score: 0, score_info: [{ score: 0 }] // 更新用户信息
			};this.myUserInfo.last_week_best_score = opt.week_best_score;
			this.myUserInfo.week_best_score = Math.max(opt.week_best_score, opt.score) || 0;
			var friendRankList = _storage2.default.getFriendsScore() || [];
			friendRankList.push(this.myUserInfo); // 把自己的最高分放进去
			var rank_list = this._rerank(friendRankList);
			this.sotedRankList = rank_list;
			// console.log('vicky 拿到的结算页的数据： ')
			// console.log(opt)
			// console.log(this.myUserInfo)
			// console.log(friendRankList)
			this.myidx = rank_list.findIndex(this._findSelfIndex.bind(this)) + 1; // 找到自己的index

			// 超越了多少人
			if (opt.score >= opt.highest_score || opt.score >= this.myUserInfo.last_week_best_score) {
				// 达到历史最高分 或者 本周最高分， 计算 超越的人数
				var userInfo = _storage2.default.getMyUserInfo() || { headimg: '', nickname: '', week_best_score: 0, score_info: [{ score: 0 }] };
				userInfo.week_best_score = opt.score;
				var friendRank1 = _storage2.default.getFriendsScore() || [];
				this.changlleList = [];
				for (var j = 0; j < friendRank1.length; j++) {
					if (friendRank1[j].week_best_score < opt.score && friendRank1[j].week_best_score > this.myUserInfo.last_week_best_score) {
						// 显示新超越的人数， 
						this.changlleList.push(friendRank1[j]);
					}
				}
			}
			// console.log(' 超越好友数：', this.changlleList)
			// 新手指引，走普通结算
			/*if(opt.score < 5 && opt.game_cnt < 5){
   	this.canvasType = CANVASTYPE['gameOver']
   	this._drawGameOver();
   } else */if (opt.score > opt.highest_score) {
				// 历史最高分
				this.canvasType = CANVASTYPE['gameOverHighest'];
				this.opt.type = 'history';
				this.opt.msg = '历史最高分';
				this._drawGameOverHighest(this.opt, 'history');
			} else if (rank_list.length > 1 && opt.score >= rank_list[0].week_best_score) {
				// 达到排行榜冠军
				this.canvasType = CANVASTYPE['gameOverHighest'];
				this.opt.type = 'rank';
				this._drawGameOverHighest(this.opt, 'rank');
			} else if (opt.score > this.myUserInfo.last_week_best_score) {
				// 本周最高分
				this.canvasType = CANVASTYPE['gameOverHighest'];
				this.opt.type = 'history';
				this.opt.msg = '本周最高分';
				this._drawGameOverHighest(this.opt, 'history');
			} else {
				// 普通结算
				this.canvasType = CANVASTYPE['gameOver'];
				this._drawGameOver();
			}
		}
	}, {
		key: 'showStartPage',
		value: function showStartPage(opt) {
			this.hide2D();
			if (DEBUG) return;
			this.showState = true;
			this.canvasType = CANVASTYPE['start'];
			this._createPlane();
			this._drawStart(opt);
		}
	}, {
		key: 'showPkPage',
		value: function showPkPage(opt) {
			this.hide2D();
			// console.log('vicky 拿到的pk数据')
			// console.log(opt)
			this.showState = true;
			opt = opt || {};
			this.data = opt.data;
			this.canvasType = CANVASTYPE['pk'];
			this._createPlane();
			this._updateClip();
			this.myidx = this.data.pkListInfo.findIndex(this._findPartner) + 1;
			this.myUserInfo = this.data.pkListInfo[this.myidx - 1] || _storage2.default.getMyUserInfo();
			this.renderRankList(this.data.pkListInfo);
			this._drawPKListBg();
		}
	}, {
		key: 'showLookersPage',
		value: function showLookersPage(opt) {
			this.hide2D();
			this.showState = true;
			this.canvasType = CANVASTYPE['lookers'];
			this._createPlane();
			this._drawLookers(opt);
		}
	}, {
		key: 'showBeginnerPage',
		value: function showBeginnerPage() {
			this.hide2D();
			this.showState = true;
			this.canvasType = CANVASTYPE['beginner'];
			this._createPlane();
			this._drawBeginner();
		}
	}, {
		key: 'hide2D',
		value: function hide2D() {
			if (DEBUG) return;
			this.showState = false;
			for (var i = 0; i < planList.length; i++) {
				if (!this.obj[planList[i]]) continue;
				this.obj[planList[i]].visible = false;
				this.options.camera.remove(this.obj[planList[i]]);
			}
		}
	}, {
		key: 'hide2DGradually',
		value: function hide2DGradually() {
			if (DEBUG) return;
			var that = this;
			for (var i = 0; i < planList.length; i++) {
				if (!this.obj[planList[i]]) continue;
				_animation.customAnimation.to(this.material[planList[i]], 1, { opacity: 0, onComplete: function (i) {
						return function () {
							that.material[planList[i]].opacity = 1;
							that.obj[planList[i]].visible = false;
							that.showState = false;
							that.options.camera.remove(that.obj[planList[i]]);
						};
					}(i) });
			}
		}

		// ----------------- 滑动事件处理 -----------------

	}, {
		key: '_findDelta',
		value: function _findDelta(e) {
			var touchInfo = this._touchInfo;
			var touches = e.touches[0] || e.changedTouches[0];
			if (touches) return { x: touches.pageX - touchInfo.x, y: touches.pageY - touchInfo.y };
			return null;
		}
	}, {
		key: 'doTouchStartEvent',
		value: function doTouchStartEvent(e) {
			if (!this.showState) return;
			var pageX = e.changedTouches[0].pageX;
			var pageY = e.changedTouches[0].pageY;
			this.startX = pageX;
			this.startY = pageY;
			if (this.canvasType == CANVASTYPE['friendRank'] || this.canvasType == CANVASTYPE['groupRank'] || this.canvasType == CANVASTYPE['pk']) {
				var touchInfo = this._touchInfo;
				var listener = this.scrollHandler;
				if (!listener) return;

				touchInfo.trackingID = 'touch';
				touchInfo.x = e.touches[0].pageX;
				touchInfo.y = e.touches[0].pageY;

				touchInfo.maxDx = 0;
				touchInfo.maxDy = 0;
				touchInfo.historyX = [0];
				touchInfo.historyY = [0];
				touchInfo.historyTime = [+new Date()];
				touchInfo.listener = listener;

				if (listener.onTouchStart) {
					listener.onTouchStart();
				}
			} else if (this.canvasType == CANVASTYPE['gameOver']) {
				pageX = this._cxp(pageX);
				pageY = this._cyp(pageY);
				if ((!this.noplay_time || this.noplay_time < 0) && pageX > 117 && pageX < 297 && pageY > 540 && pageY < 660) {
					// console.log('click replay');
					this._drawGameOverBtnClick();
				}
			} else if (this.canvasType == CANVASTYPE['start']) {
				pageX = this._cxp(pageX);
				pageY = this._cyp(pageY);
				if (pageX > 100 && pageX < 320 && pageY > 515 && pageY < 645) {
					this._drawStartClick();
				}
			}
		}
	}, {
		key: 'doTouchMoveEvent',
		value: function doTouchMoveEvent(e) {
			if (!this.showState) return;
			if (this.canvasType == CANVASTYPE['friendRank'] || this.canvasType == CANVASTYPE['groupRank'] || this.canvasType == CANVASTYPE['pk']) {
				var touchInfo = this._touchInfo;
				if (touchInfo.trackingID == -1) return;
				e.preventDefault();
				var delta = this._findDelta(e);
				if (!delta) return;
				touchInfo.maxDy = Math.max(touchInfo.maxDy, Math.abs(delta.y));
				touchInfo.maxDx = Math.max(touchInfo.maxDx, Math.abs(delta.x));

				// This is all for our crummy velocity computation method. We really
				// should do least squares or anything at all better than just taking
				// the difference between two random samples.
				var timeStamp = +new Date();
				touchInfo.historyX.push(delta.x);
				touchInfo.historyY.push(delta.y);
				touchInfo.historyTime.push(timeStamp);
				while (touchInfo.historyTime.length > 10) {
					touchInfo.historyTime.shift();
					touchInfo.historyX.shift();
					touchInfo.historyY.shift();
				}
				if (touchInfo.listener && touchInfo.listener.onTouchMove) touchInfo.listener.onTouchMove(delta.x, delta.y, timeStamp);
			}
		}
	}, {
		key: 'doTouchEndEvent',
		value: function doTouchEndEvent(e) {
			if (!this.showState) return;
			// 触摸返回按钮
			var pageX = e.changedTouches[0].pageX;
			var pageY = e.changedTouches[0].pageY;
			var isClick = true;
			if ((this.canvasType == CANVASTYPE['friendRank'] || this.canvasType == CANVASTYPE['groupRank'] || this.canvasType == CANVASTYPE['pk'] || this.canvasType == CANVASTYPE['gameOver']) && (Math.abs(pageX - this.startX) > 5 || Math.abs(pageY - this.startY) > 5)) {
				// 不认为是一次 click
				isClick = false;
			}
			pageX = this._cxp(pageX);
			pageY = this._cyp(pageY);

			if (isClick) {
				if (this.canvasType == CANVASTYPE['groupRank']) {
					if (pageX > 134 && pageX < 283 && pageY > 640 && pageY < 727) {
						this.hide2D();
						!!this.options.groupPlayGame && this.options.groupPlayGame();
						return;
					}
				}
				if (this.canvasType == CANVASTYPE['friendRank']) {
					if (pageX > 120 && pageX < 300 && pageY > 640 && pageY < 720) {
						// console.log('查看群排行');
						!!this.options.onGroupShare && this.options.onGroupShare();
						return;
					} else if (pageX > 330 && pageX < 408 && pageY > 100 && pageY < 200) {
						if (!!this.opt) {
							this.hide2D();
							this.showState = true;
							this.canvasType = CANVASTYPE['gameOver'];
							this._drawGameOver();
						} else {
							!!this.options.friendRankReturn && this.options.friendRankReturn('');
						}
						return;
					}
				}
				if (this.canvasType == CANVASTYPE['gameOver']) {
					if (this.opt.type != 'beginner' && this.opt.type != 'tired' && pageX > 25 && pageX < 385 && pageY > 290 && pageY < 500) {
						// console.log('click rank');
						!!this.options.onClickRank && this.options.onClickRank();
					} else if (pageX > 150 && pageX < 260 && pageY > 199 && pageY < 260) {
						// console.log('click share');
						!!this.options.onClickShare && this.options.onClickShare();
					} else if ((!this.noplay_time || this.noplay_time < 0) && pageX > 117 && pageX < 297 && pageY > 540 && pageY < 660) {
						// console.log('click replay');
						!!this.options.onClickReplay && this.options.onClickReplay();
					} else if (!this.noplay_time || this.noplay_time < 0) {
						this._drawGameOverBtnClickRevert();
					}
					return;
				}
				if (this.canvasType == CANVASTYPE['gameOverHighest']) {
					if (pageX > 340 && pageX < 407 && pageY > 76 && pageY < 138) {
						// console.log('click return');
						this.canvasType = CANVASTYPE['gameOver'];
						this._drawGameOver();
					} else if (pageX > 111 && pageX < 380 && pageY > 540 && pageY < 660) {
						// console.log('click replay');
						!!this.options.onClickReplay && this.options.onClickReplay();
					} else if (this.changlleList.length > 0 && pageX > 170 && pageX < 230 && pageY > 330 && pageY < 390) {
						// 有超越好友的分享
						// console.log('click pure share');
						var typ = this.opt.type;
						if (this.opt.msg == '本周最高分') typ = 'week';
						!!this.options.onClickPureShare && this.options.onClickPureShare(typ);
					} else if (this.changlleList.length == 0 && pageX > 170 && pageX < 230 && pageY > 410 && pageY < 470) {
						// 没有超越好友的分享 
						var typ = this.opt.type;
						if (this.opt.msg == '本周最高分') typ = 'week';
						!!this.options.onClickPureShare && this.options.onClickPureShare(typ);
					} else if (this.changlleList.length > 7 && pageX > 55 && pageX < 115 && pageY > 437 && pageY < 497) {
						// 左翻页
						this._reDrawChangeAva(-1);
					} else if (this.changlleList.length > 7 && pageX > 297 && pageX < 357 && pageY > 437 && pageY < 497) {
						// 右翻页
						this._reDrawChangeAva(1);
					}
				}
				if (this.canvasType == CANVASTYPE['start']) {
					if (pageX > 100 && pageX < 320 && pageY > 515 && pageY < 645) {
						// console.log('-click 开始游戏')
						!!this.options.onClickStart && this.options.onClickStart();
					} else if (pageX > 110 && pageX < 290 && pageY > 645 && pageY < 705) {
						// console.log('-click 排行榜')
						!!this.options.onShowFriendRank && this.options.onShowFriendRank();
					} else {
						this._drawStartClickRevert();
					}
					return;
				}
				if (this.canvasType == CANVASTYPE['pk']) {
					if (pageX > 110 && pageX < 310 && pageY > 650 && pageY < 730) {
						// console.log('不挑战 直接开始');
						!!this.options.onBattlePlay && this.options.onBattlePlay(''); // 自己玩一局
						return;
					}
					if (this.data.organizerInfo.left_time > 0 && this.data.organizerInfo.is_self == 0 && pageX > 140 && pageX < 280 && pageY > 325 && pageY < 405) {
						// console.log('挑战按钮');
						!!this.options.onBattlePlay && this.options.onBattlePlay('pk'); // 再次挑战
						return;
					}
				}

				if (this.canvasType == CANVASTYPE['lookers']) {
					if (pageX > 130 && pageX < 280 && pageY > 650 && pageY < 720) {
						!!this.options.onLookersStart && this.options.onLookersStart();
					}
					return;
				}
			}
			var touchInfo = this._touchInfo;
			if (touchInfo.trackingID == -1) return;
			e.preventDefault();
			var delta = this._findDelta(e);
			if (!delta) return;
			var listener = touchInfo.listener;
			touchInfo.trackingID = -1;
			touchInfo.listener = null;

			// Compute velocity in the most atrocious way. Walk backwards until we find a sample that's 30ms away from
			// our initial sample. If the samples are too distant (nothing between 30 and 50ms away then blow it off
			// and declare zero velocity. Same if there are no samples.
			var sampleCount = touchInfo.historyTime.length;
			var velocity = { x: 0, y: 0 };
			if (sampleCount > 2) {
				var idx = touchInfo.historyTime.length - 1;
				var lastTime = touchInfo.historyTime[idx];
				var lastX = touchInfo.historyX[idx];
				var lastY = touchInfo.historyY[idx];
				var found = false;
				while (idx > 0) {
					idx--;
					var t = touchInfo.historyTime[idx];
					var dt = lastTime - t;
					if (dt > 30 && dt < 50) {
						// Ok, go with this one.
						velocity.x = (lastX - touchInfo.historyX[idx]) / (dt / 1000);
						velocity.y = (lastY - touchInfo.historyY[idx]) / (dt / 1000);
						break;
					}
				}
			}
			touchInfo.historyTime = [];
			touchInfo.historyX = [];
			touchInfo.historyY = [];

			if (listener && listener.onTouchEnd) listener.onTouchEnd(delta.x, delta.y, velocity);
		}
	}, {
		key: 'updatePosition',
		value: function updatePosition(scrollY) {
			var viewS; // 好友/ 群排行
			if (scrollY > 0) {
				// 表头下拉效果
				scrollY = 0;
			}
			var listlength = 10 * this._cwh(ListLineHeight) / HEIGHT * frustumSizeHeight; // list length 在 fust 下的尺寸
			var listlength1 = 10 * this._cwh(ListLineHeight);

			if (this.canvasType == CANVASTYPE['friendRank'] || this.canvasType == CANVASTYPE['groupRank']) {
				// 736/2 - 448/2  
				viewS = -(this._cy(143) + listlength1 / 2 - HEIGHT / 2) / HEIGHT * frustumSizeHeight; //这个坐标计算好像有点问题，设计稿是143
			}
			if (this.canvasType == CANVASTYPE['pk']) {
				viewS = -(this._cy(437) + listlength1 / 2 - HEIGHT / 2) / HEIGHT * frustumSizeHeight;
			}

			// 滑到第几屏的list

			var n = Math.floor((viewS - frustumSizeHeight * scrollY / H) / listlength);
			if (this.lastN != n && this.lastN - n < 0) {
				// 下移
				if (n % 2 == 0) {
					this._drawList((n + 1) * 10, 'list2');
				} else {
					this._drawList((n + 1) * 10, 'list1');
				}
			} else if (this.lastN != n && this.lastN - n > 0) {
				// 上移
				var x = n;
				if (x == -1) x = 1;
				if (n % 2 == 0) {
					this._drawList(n * 10, 'list1');
				} else {
					this._drawList(x * 10, 'list2');
				}
			}

			if (n % 2 == 0) {
				this.obj['list1'].position.y = viewS - frustumSizeHeight * scrollY / H - n * listlength;
				this.obj['list2'].position.y = viewS - frustumSizeHeight * scrollY / H - (n + 1) * listlength;
			} else {
				this.obj['list2'].position.y = viewS - frustumSizeHeight * scrollY / H - n * listlength;
				this.obj['list1'].position.y = viewS - frustumSizeHeight * scrollY / H - (n + 1) * listlength;
			}
			this.lastN = n;
			this.lastScrollY = scrollY;
		}
		// ----------------- 列表绘制 -----------------

	}, {
		key: '_drawList',
		value: function _drawList(offset, type) {
			var _this = this;

			if (type == 'list1') {
				// 两个list互不干扰，只在一个list显示时候++
				this.imgid['list1']++;
			} else if (type == 'list2') {
				this.imgid['list2']++;
			}

			var limit = 10;
			var list = this.sotedRankList.slice(offset, offset + limit);
			// 绘制列表 从 m 开始到 n 结束的列表
			var ctx = this.context[type];
			ctx.clearRect(0, 0, WIDTH, 10 * this._cwh(ListLineHeight));

			ctx.fillStyle = 'rgba(0,0,0,0.9)';
			if (this.canvasType == CANVASTYPE['pk']) {
				ctx.fillStyle = 'white';
			}
			ctx.textBaseline = "middle";
			ctx.fillRect(0, 0, WIDTH, 10 * this._cwh(ListLineHeight)); //list 底色为白色

			if (offset != 0 && list.length == 0) {
				// 最后面列表结束显示白色屏幕就可以，不显示
				this._updatePlane(type);
				return;
			}
			if (offset < 0) {
				// 这种情况下不要更新列表
				return;
			}

			var len = list.length;

			var _loop = function _loop() {
				if (_this.canvasType != CANVASTYPE['pk']) {
					if (i % 2 == 1) {
						ctx.fillStyle = 'rgba(255,255,255, 0.03)';
						ctx.fillRect(0, i * _this._cwh(ListLineHeight), _this._cwh(414), _this._cwh(ListLineHeight));
					}
				}

				// 写一个大的数字
				var y = (i + 0.5) * _this._cwh(ListLineHeight); // 每一行中间的y值
				ctx.textAlign = "center";
				n = i + 1 + offset;

				if (n == 1) {
					ctx.fillStyle = 'rgb(250,126,0)';
				} else if (n == 2) {
					ctx.fillStyle = 'rgb(254,193,30)';
				} else if (n == 3) {
					ctx.fillStyle = 'rgb(251,212,19)';
				} else {
					ctx.fillStyle = '#aaa';
				}
				ctx.font = "italic bold " + _this._cf(17);
				ctx.fillText(n, _this._cx(58.5), y);

				// 绘制头像
				var that = _this;

				var g = list[i].grade || 0;
				_this._drawImageRound(list[i].headimg, _this._cx(107), y, _this._cwh(34), _this._cwh(34), type, function () {
					if (that.canvasType == CANVASTYPE['pk']) {
						that._drawImageCenter('res/ava_lookers.png', that._cx(107), y, that._cwh(37), that._cwh(37), type, null, that.imgid[type]);
					} else that._drawImageCenter('res/ava_rank.png', that._cx(107), y, that._cwh(47), that._cwh(47), type, null, that.imgid[type]);
				}, _this.imgid[type], true);

				if (_this.canvasType == CANVASTYPE['pk']) {
					// 写名字
					ctx.textAlign = "left";
					ctx.fillStyle = '#000';
					ctx.font = 'bold ' + _this._cf(17);
					ctx.fillText(_this._cname(list[i].nickname, 16), _this._cx(144), y - _this._cwh(10));

					if (list[i].score_info[0].score > _this.data.organizerInfo.score_info[0].score) {
						ctx.font = _this._cf(12);
						ctx.fillStyle = '#FC4814';
						ctx.fillText('挑战成功', _this._cx(144), y + _this._cwh(12));
						ctx.fillStyle = '#000';
					} else {
						ctx.font = _this._cf(12);
						ctx.fillStyle = '#888';
						ctx.fillText('挑战失败', _this._cx(144), y + _this._cwh(12));
					}

					ctx.textAlign = "right";
					ctx.font = _this._cf(22, true);
					ctx.fillText(list[i].score_info[0].score || 0, _this._cx(364), y);
				} else {
					// 写名字
					ctx.textAlign = "left";
					ctx.fillStyle = '#fff';
					ctx.font = _this._cf(17);
					list[i].nickname = list[i].nickname || '';
					ctx.fillText(_this._cname(list[i].nickname, 16), _this._cx(144), y);

					// 写分数
					ctx.textAlign = "right";
					ctx.font = _this._cf(22, true);
					ctx.fillText(list[i].week_best_score || 0, _this._cx(364), y);
				}
			};

			for (var i = 0; i < len; i++) {
				var n;

				_loop();
			}

			if (len == 0) {
				// 没有任何数据
				ctx.textAlign = "center";
				ctx.fillStyle = '#ccc';
				ctx.font = this._cf(14);
				if (this.canvasType == CANVASTYPE['pk']) {
					ctx.fillText('暂无人应战', this._cx(207), this._cwh(100));
				} else {
					ctx.fillText('暂无排行数据', this._cx(207), this._cy(429));
				}
			}
			this._updatePlane(type);
		}
	}, {
		key: 'renderRankList',
		value: function renderRankList(res) {
			var rank_list = [];
			this.myUserInfo = this.myUserInfo || { headimg: '', nickname: '', week_best_score: 0, score_info: [{ score: 0 }] };

			if (this.canvasType == CANVASTYPE['friendRank'] || this.canvasType == CANVASTYPE['groupRank']) {
				res = res || [];
				res.push(this.myUserInfo); // 把自己的最高分放进去
				rank_list = this._rerank(res);
				this.sotedRankList = rank_list; // 存下来，滑动的时候用到
			} else {
				this.sotedRankList = res; // 存下来，滑动的时候用到
			}
			var innerHeight = this.sotedRankList.length * this._cwh(ListLineHeight) / Dpr;
			var outterOffsetHeight;

			if (this.canvasType == CANVASTYPE['friendRank'] || this.canvasType == CANVASTYPE['groupRank']) {
				this.myidx = rank_list.findIndex(this._findSelfIndex.bind(this)) + 1; // 找到自己的index
				outterOffsetHeight = this._cwh(445) / Dpr;
			}
			if (this.canvasType == CANVASTYPE['pk']) {
				outterOffsetHeight = this._cwh(194) / Dpr;
			}
			// scroll handler
			this.scrollHandler = new _scrollHandler2.default({
				innerOffsetHeight: innerHeight, // 个数 * 每一行的高度百分比 * 总高度
				outterOffsetHeight: outterOffsetHeight,
				updatePosition: this.updatePosition.bind(this)
			});
			this._drawList(0, 'list1'); // 绘制滚动列表
			this._drawList(10, 'list2'); // 绘制滚动列表
		}
		// ----------------- 点击态 -----------------

	}, {
		key: '_drawGameOverBtnClick',
		value: function _drawGameOverBtnClick() {
			// 再玩一局的点击态
			var ctx = this.context['btn'];
			ctx.clearRect(this._cx(91), this._cy(567), this._cwh(232), this._cwh(94));
			this._drawImageCenter('res/replay.png', this._cx(207), this._cy(607), this._cwh(190), this._cwh(75), 'btn', null, this.imgid['btn']);
		}
	}, {
		key: '_drawGameOverBtnClickRevert',
		value: function _drawGameOverBtnClickRevert() {
			// 再玩一局的点击态
			var ctx = this.context['btn'];
			ctx.clearRect(this._cx(91), this._cy(567), this._cwh(232), this._cwh(94));
			this._drawImageCenter('res/replay.png', this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), 'btn', null, this.imgid['btn']);
		}
	}, {
		key: '_drawStartClick',
		value: function _drawStartClick() {
			// 再玩一局的点击态
			var ctx = this.context['btn'];
			ctx.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
			this._drawImageCenter('res/play.png', this._cx(207), this._cy(587), this._cwh(190), this._cwh(75), 'btn', null, this.imgid['btn']);
		}
	}, {
		key: '_drawStartClickRevert',
		value: function _drawStartClickRevert() {
			// 再玩一局的点击态
			var ctx = this.context['btn'];
			ctx.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
			this._drawImageCenter('res/play.png', this._cx(207), this._cy(587), this._cwh(212), this._cwh(84), 'btn', null, this.imgid['btn']);
		}

		// ----------------- 背景绘制 -----------------

	}, {
		key: '_drawPKListBg',
		value: function _drawPKListBg() {
			// 绘制背景图
			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
			ctx.fillStyle = 'rgba(0,0,0, 0.8)';
			ctx.fillRect(0, 0, (WIDTH - this._cwh(354)) / 2, HEIGHT); // 左
			ctx.fillRect(this._cx(384), 0, (WIDTH - this._cwh(354)) / 2, HEIGHT); // 右

			ctx.fillRect(this._cx(30), 0, this._cwh(354), this._cy(110)); // 上
			ctx.fillRect(this._cx(30), this._cy(632), this._cwh(354), this._cy(144)); // 下

			// 显示擂主分数
			// 列表背景
			ctx.fillStyle = 'rgb(250,250,250)';
			ctx.fillRect(this._cx(31), this._cy(103), this._cwh(354), this._cwh(335));

			ctx.lineWidth = 2 * Dpr;
			ctx.strokeStyle = '#fff';
			this._roundedRectR(this._cx(30), this._cy(102), this._cwh(354), this._cwh(530), 1 * Dpr, 'bg');

			ctx.textBaseline = "middle";
			// 绘制头像
			var that = this;

			if (this.data.gg_score == undefined) {
				// 显示擂主信息
				this._drawImageCenter(this.data.organizerInfo.headimg, this._cx(207), this._cy(158), this._cwh(50), this._cwh(50), 'bg', null, this.imgid['bg']);
				// 写名字
				ctx.textAlign = "center";
				ctx.fillStyle = 'rgba(0,0,0,0.8)';
				ctx.font = this._cf(14);
				ctx.fillText(this.data.organizerInfo.nickname, this._cx(207), this._cy(195));
				ctx.fillText('擂主得分', this._cx(207), this._cy(242));
				// 一条线
				ctx.lineWidth = 0.5 * Dpr;
				ctx.strokeStyle = 'rgba(0,0,0,0.06)';
				ctx.beginPath();
				ctx.moveTo(this._cx(160), this._cy(217));
				ctx.lineTo(this._cx(254), this._cy(217));
				ctx.closePath();
				ctx.stroke();

				// 小方块
				ctx.fillStyle = 'rgba(0,0,0,0.2)';
				ctx.fillRect(this._cx(162), this._cy(239), this._cwh(9), this._cwh(3));
				ctx.fillRect(this._cx(162), this._cy(244), this._cwh(9), this._cwh(3));
				ctx.fillRect(this._cx(241), this._cy(239), this._cwh(9), this._cwh(3));
				ctx.fillRect(this._cx(241), this._cy(244), this._cwh(9), this._cwh(3));

				// 写分数
				ctx.fillStyle = '#000';
				ctx.font = this._cf(66, true);
				ctx.fillText(this.data.organizerInfo.score_info[0].score, this._cx(207), this._cy(298));
			} else {
				// 显示挑战结果
				var suc_src = void 0,
				    suc_word = void 0,
				    c1 = void 0,
				    c2 = void 0;
				if (this.data.gg_score > this.data.organizerInfo.score_info[0].score) {
					// 挑战成功
					suc_src = 'res/suc.png';
					suc_word = '挑战成功';
					c1 = 'rgba(0,0,0,1)';
					c2 = 'rgba(0,0,0,0.3)';
					// 烟花
					this._drawImageCenter('res/flower_small.png', this._cx(207), this._cy(175), this._cwh(140), this._cwh(53), 'bg', null, this.imgid['bg']);
				} else {
					// 挑战失败
					suc_src = 'res/fail.png';
					suc_word = '挑战失败';
					c1 = 'rgba(0,0,0,0.3)';
					c2 = 'rgba(0,0,0,1)';
				}

				// 顶部icon
				this._drawImageCenter(suc_src, this._cx(207), this._cy(135), this._cwh(20), this._cwh(15), 'bg', null, this.imgid['bg']);
				ctx.textAlign = 'center';
				ctx.fillStyle = '#000';
				ctx.font = 'bold ' + this._cf(30);
				ctx.fillText(suc_word, this._cx(207), this._cy(178));

				// 头像
				this._drawImageCenter(this.myUserInfo.headimg, this._cx(158), this._cy(289), this._cwh(26), this._cwh(26), 'bg', null, this.imgid['bg']);
				this._drawImageCenter(this.data.organizerInfo.headimg, this._cx(260), this._cy(289), this._cwh(26), this._cwh(26), 'bg', null, this.imgid['bg']);
				// 名字
				ctx.textAlign = 'center';
				ctx.fillStyle = 'rgba(0,0,0,0.8)';
				ctx.font = this._cf(11);
				ctx.fillText(this._cname(this.myUserInfo.nickname, 16), this._cx(158), this._cy(318));
				ctx.fillText(this._cname(this.data.organizerInfo.nickname, 16), this._cx(260), this._cy(318));

				// 分数
				ctx.fillStyle = c1;
				ctx.font = this._cf(44, true);
				if (this.data.gg_score > 999) {
					ctx.textAlign = 'right';
					ctx.fillText(this.data.gg_score, this._cx(190), this._cy(253));
				} else {
					ctx.textAlign = 'center';
					ctx.fillText(this.data.gg_score, this._cx(158), this._cy(253));
				}

				ctx.textAlign = 'center';
				ctx.fillStyle = 'rgba(0,0,0,0.3)';

				ctx.fillRect(this._cx(202), this._cy(242), this._cwh(10), this._cwh(4));

				ctx.fillStyle = c2;
				ctx.font = this._cf(44, true);
				if (this.data.organizerInfo.score_info[0].score > 999) {
					ctx.textAlign = 'left';
					ctx.fillText(this.data.organizerInfo.score_info[0].score, this._cx(231), this._cy(253));
				} else {
					ctx.textAlign = 'center';
					ctx.fillText(this.data.organizerInfo.score_info[0].score, this._cx(260), this._cy(253));
				}
			}

			// 列表有一条分界线
			ctx.strokeStyle = 'rgba(0,0,0,0.06)';
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(this._cx(30), this._cy(437));
			ctx.lineTo(this._cx(384), this._cy(437));
			ctx.stroke();
			ctx.closePath();

			// 挑战btn
			var msg = '挑战';
			var that = this;
			if (this.data.organizerInfo.left_time > 0 && this.data.organizerInfo.is_self == 0) {
				// 剩余时间 > 0 并且不是擂主，就可以挑战
				if (this.myidx > 0) {
					// 有名次的一定是 [1, ~)
					msg = '再次挑战';
				}
				this._drawImageCenter('res/btn_bg_g.png', this._cx(207), this._cy(368), this._cwh(130), this._cwh(63), 'bg', function () {
					ctx.textAlign = "center";
					ctx.fillStyle = '#fff';
					ctx.font = that._cf(14);
					ctx.fillText(msg, that._cx(207), that._cy(368));
					that._updatePlane('bg');
				}, this.imgid['bg']);
				// 显示有效时间
				ctx.font = this._cf(12);;
				ctx.textAlign = "right";
				ctx.fillStyle = '#000';
				ctx.fillText('有效时间至', this._cx(223), this._cy(403.5));
				ctx.textAlign = "left";
				ctx.fillStyle = '#fc4814';
				var nt = +new Date();
				var lt = nt + this.data.organizerInfo.left_time * 1000;
				nt = new Date(lt);
				var ho = nt.getHours();
				ho = ho < 10 ? '0' + ho : ho;
				var m = nt.getMinutes();
				m = m < 10 ? '0' + m : m;
				ctx.fillText(ho + ':' + m, this._cx(225), this._cy(403.5));
			} else if (this.data.organizerInfo.left_time == 0 && this.data.organizerInfo.is_self == 0) {
				// 没有剩余时间并且不是擂主， 显示失效
				var that = this;
				this._drawImageCenter('res/btn_bg_h.png', this._cx(207), this._cy(368), this._cwh(130), this._cwh(63), 'bg', function () {
					ctx.font = that._cf(14);
					ctx.textAlign = "center";
					ctx.fillStyle = 'rgba(0,0,0,0.3)';
					ctx.fillText('挑战结束', that._cx(207), that._cy(368));
					that._updatePlane('bg');
				}, this.imgid['bg']);
				ctx.font = this._cf(14);
				ctx.textAlign = "center";
				ctx.fillStyle = '#888';
				ctx.fillText('已失效', this._cx(207), this._cy(403.5));
			} else if (this.data.organizerInfo.left_time > 0 && this.data.organizerInfo.is_self == 1) {
				// 有剩余时间，是擂主，擂主看到失效时间
				ctx.font = this._cf(14);
				ctx.textAlign = "right";
				ctx.fillStyle = '#888';
				ctx.fillText('有效时间至', this._cx(223), this._cy(369));
				ctx.textAlign = "left";
				ctx.fillStyle = '#2c9f67';
				var nt = +new Date();
				var lt = nt + this.data.organizerInfo.left_time * 1000;
				nt = new Date(lt);
				var ho = nt.getHours();
				ho = ho < 10 ? '0' + ho : ho;
				var m = nt.getMinutes();
				m = m < 10 ? '0' + m : m;
				ctx.fillText(ho + ':' + m, this._cx(225), this._cy(369));
			}

			ctx.textAlign = "center";
			ctx.fillStyle = '#fff';
			ctx.font = this._cf(17);
			ctx.fillText('不挑战，直接开始', this._cx(199), this._cy(688));
			this._drawImageCenter('res/r_arr.png', this._cx(280), this._cy(688), this._cwh(6.5), this._cwh(12.5), 'bg', null, this.imgid['bg']);

			this._updatePlane('bg');
		}
	}, {
		key: '_drawRankListBg',
		value: function _drawRankListBg() {
			// 绘制背景图
			this.imgid['bg']++; // 从另一个bg场景，到这一个bg场景，为了不渲染上一个bg场景的图片，这里应该++
			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
			ctx.fillStyle = 'rgba(0,0,0, 0.8)';
			ctx.fillRect(0, 0, (WIDTH - this._cwh(354)) / 2, HEIGHT); // 左
			ctx.fillRect(this._cx(384), 0, (WIDTH - this._cwh(354)) / 2, HEIGHT); // 右

			ctx.fillRect(this._cx(30), 0, this._cwh(354), this._cy(110)); // 上
			ctx.fillRect(this._cx(30), this._cy(592), this._cwh(354), this._cy(144)); // 下

			ctx.textBaseline = "middle";
			ctx.textAlign = "center";

			// 列表里面的半透明的蒙层
			/*var grd=ctx.createLinearGradient(this._cx(30), this._cy(185), this._cx(30), this._cy(191)); // xyxy
   grd.addColorStop(0, "rgba(0,0,0, 0.04)");
   grd.addColorStop(1,"rgba(255,255,255, 0.1)");
   ctx.fillStyle=grd;
   ctx.fillRect(this._cx(30), this._cy(185), this._cx(354), this._cx(6)); // xy wh*/

			ctx.fillStyle = 'rgba(0,0,0,0.9)';
			ctx.fillRect(this._cx(30), this._cy(110), this._cwh(354), this._cwh(33));

			// 列表有一条分界线
			ctx.strokeStyle = 'rgba(255,255,255,0.2)';
			ctx.lineWidth = 1 * Dpr;
			ctx.beginPath();
			ctx.moveTo(this._cx(30), this._cy(143));
			ctx.lineTo(this._cx(384), this._cy(143));
			ctx.stroke();
			ctx.closePath();

			ctx.fillStyle = '#fff';
			ctx.font = 'bold ' + this._cf(12);
			ctx.textAlign = "left";
			ctx.fillText('每周一凌晨刷新', this._cx(54), this._cy(126.5));

			ctx.lineWidth = 1 * Dpr;
			ctx.strokeStyle = 'rgba(255,255,255,0.2)';
			this._roundedRectR(this._cx(30), this._cy(110), this._cwh(354), this._cwh(482), 1 * Dpr, 'bg');

			this._updatePlane('bg');

			if (this.canvasType == CANVASTYPE['groupRank']) {
				var that = this;
				ctx.font = that._cf(17);
				ctx.fillStyle = '#fff';
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText('玩一局', that._cx(207), that._cy(680));
				this._drawImageCenter('res/r_arr.png', this._cx(244), this._cy(680), this._cwh(6.6), this._cwh(10), 'bg', null, this.imgid['bg']);
			}
			if (this.canvasType == CANVASTYPE['friendRank']) {
				ctx.fillStyle = '#fff';
				ctx.font = this._cf(17);
				ctx.textAlign = "left";
				ctx.fillText('查看群排行', this._cx(177), this._cy(674));
				this._drawImageCenter('res/r_arr.png', this._cx(270), this._cy(674), this._cwh(6.6), this._cwh(10), 'bg', null, this.imgid['bg']);
				this._drawImageCenter('res/rank.png', this._cx(154), this._cy(674), this._cwh(22), this._cwh(22), 'bg', null, this.imgid['bg']);
				this._drawImageCenter('res/close.png', this._cx(375), this._cy(114), this._cwh(48), this._cwh(48), 'bg', null, this.imgid['bg']);
			}
		}
	}, {
		key: '_drawGameOver',
		value: function _drawGameOver() {
			var _this2 = this;

			this.imgid['bg'];
			var opt = this.opt;
			opt.score = opt.score || 0;
			opt.highest_score = opt.highest_score || 0;
			var that = this;
			// 绘制背景图
			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
			ctx.fillStyle = 'rgba(0,0,0, 0.8)';
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			ctx.textBaseline = "middle";

			// 分数
			ctx.textAlign = "center";
			ctx.fillStyle = '#fff';
			ctx.font = this._cf(14);
			ctx.fillText('本次得分', this._cx(207), this._cy(84));

			ctx.fillStyle = '#fff';
			ctx.font = this._cf(88, true);
			ctx.fillText(opt.score, this._cx(207 + 5), this._cy(150));

			// 本次得分的小方块
			ctx.fillStyle = 'rgba(255,255,255,0.2)';
			ctx.fillRect(this._cx(162), this._cy(78), this._cwh(9), this._cwh(3));
			ctx.fillRect(this._cx(162), this._cy(84), this._cwh(9), this._cwh(3));
			ctx.fillRect(this._cx(241), this._cy(78), this._cwh(9), this._cwh(3));
			ctx.fillRect(this._cx(241), this._cy(84), this._cwh(9), this._cwh(3));

			// 发起挑战
			this._drawImageCenter('res/btn.png', this._cx(207), this._cy(214), this._cwh(86), this._cwh(32), 'bg', null, this.imgid['bg']);
			ctx.font = this._cf(13);
			ctx.fillStyle = '#fff';
			ctx.fillText('发起挑战', this._cx(207), this._cy(214));

			var showTired = false; // 是否显示温馨提示
			if ((opt.game_cnt > 5 || opt.score > 5) && // 不是新手引导
			opt.score < opt.highest_score && // 不是历史最高分
			this.myidx != 1 && // 不是排行榜第一
			!this._has_show_tired && // 从未显示过
			+new Date() / 1000 - opt.start_time > 1800 // 玩的时间超过半小时
			) {
					showTired = true;
					this._has_show_tired = true;
				}

			if (showTired) {
				// this._has_show_tired = true;
				// 游戏时间超过30min
				ctx.lineWidth = 4 * Dpr;
				ctx.strokeStyle = '#fff';
				ctx.fillStyle = '#fff';
				this._roundedRectR(this._cx(31), this._cy(298), this._cwh(354), this._cwh(210), 1 * Dpr, 'bg');
				ctx.fill();

				ctx.fillStyle = 'black';
				ctx.font = this._cf(17);
				ctx.textAlign = 'left';
				ctx.fillText('玩了这么久', this._cx(80), this._cy(370));
				ctx.fillText('休息一下吧', this._cx(80), this._cy(410));

				this._drawImageCenter('res/tired.png', this._cx(297), this._cy(397), this._cwh(179), this._cwh(185), 'bg', null, that.imgid['bg']);
				this.opt.type = 'tired';
			} else {
				ctx.lineWidth = 0.5 * Dpr;
				ctx.fillStyle = 'rgba(0,0,0,0.3)';
				ctx.strokeStyle = 'rgba(255,255,255,0.3)';
				this._roundedRectR(this._cx(30), this._cy(297), this._cwh(354), this._cwh(192), 4 * Dpr, 'bg');
				ctx.fill();
				// 排行榜背景
				ctx.fillStyle = 'rgba(255,255,255,0.06)';
				ctx.fillRect(this._cx(150), this._cy(336), this._cwh(115), this._cwh(153));

				/*// 左右投影
    var grd=ctx.createLinearGradient(this._cx(90), this._cy(336), this._cx(150), this._cy(336)); // xyxy
    grd.addColorStop(0, "rgba(0,0,0, 0.1)");
    grd.addColorStop(1, "rgba(0,0,0, 0.4)");
    ctx.fillStyle=grd;
    ctx.fillRect(this._cx(90), this._cy(336), this._cwh(60), this._cwh(153)); // xy wh
    	// 左右投影
    var grd=ctx.createLinearGradient(this._cx(264), this._cy(336), this._cx(324), this._cy(336)); // xyxy
    grd.addColorStop(0, "rgba(0,0,0, 0.4)");
    grd.addColorStop(1, "rgba(0,0,0, 0.1)");
    ctx.fillStyle=grd;
    ctx.fillRect(this._cx(264), this._cy(336), this._cwh(60), this._cwh(153)); // xy wh*/

				// 排行榜文字
				ctx.beginPath();
				ctx.lineWidth = 0.5 * Dpr;
				ctx.strokeStyle = 'rgba(255,255,255,0.4)';
				ctx.moveTo(this._cx(30), this._cy(336));
				ctx.lineTo(this._cx(384), this._cy(336));
				ctx.stroke();
				ctx.closePath();

				ctx.font = this._cf(12);
				ctx.textAlign = "left";
				ctx.fillStyle = 'rgba(255,255,255,0.6)';
				ctx.fillText('排行榜 · 每周一凌晨刷新', this._cx(46), this._cy(316));
				ctx.fillStyle = '#fff';
				ctx.fillText('查看全部排行', this._cx(291), this._cy(316));
				this._drawImageCenter('res/r_arr.png', this._cx(371), this._cy(315), this._cwh(6.6), this._cwh(10), 'bg', null, this.imgid['bg']);

				// 排行榜数据
				// 个人要居中
				var start = this.myidx - 2;
				var no_friend_idx = 0;
				if (this.sotedRankList.length == 1) {
					// 该用户没有好友，自己要显示在中间
					no_friend_idx = 1;
				}
				for (var i = 0; i < 3; i++) {
					ctx.font = "italic bold " + this._cf(16);
					ctx.textAlign = "center";

					if (this.myidx == 1 && i == 0) {
						start++;
					}
					if (this.myidx == this.sotedRankList.length && i == 2) {
						// 最后一名，第三个格子空出
						continue;
					}
					if (this.myidx == start + 1 + i) {
						// 自己的名次是绿色
						ctx.fillStyle = '#41bf8c';
					} else {
						ctx.fillStyle = '#888';
					}
					if (!!this.sotedRankList[start + i]) {
						var that;

						(function () {
							ctx.fillText(start + 1 + i, _this2._cx(90 + 118 * (i + no_friend_idx)), _this2._cy(356));
							ctx.font = _this2._cf(14);
							ctx.fillStyle = '#888';
							ctx.fillText(_this2._cname(_this2.sotedRankList[start + i].nickname, 14), _this2._cx(90 + 118 * (i + no_friend_idx)), _this2._cy(435));

							ctx.font = _this2._cf(22, true);
							ctx.fillStyle = '#fff';
							ctx.fillText(_this2.sotedRankList[start + i].week_best_score || 0, _this2._cx(90 + 118 * (i + no_friend_idx)), _this2._cy(463));
							that = _this2;

							var x0 = _this2._cx(90 + 118 * (i + no_friend_idx));
							_this2._drawImageRound(_this2.sotedRankList[start + i].headimg, x0, _this2._cy(393), _this2._cwh(42), _this2._cwh(42), 'bg', function () {
								that._drawImageCenter('res/ava_rank.png', x0, that._cy(393), that._cwh(58), that._cwh(58), 'bg', null, that.imgid['bg']);
							}, _this2.imgid['bg'], true);
						})();
					}
				}
			}

			// 在玩一局， 返回的时候不要重新渲染
			var ctx1 = this.context['btn'];
			ctx1.clearRect(0, 0, WIDTH, HEIGHT);
			if (showTired) {
				this._drawImageCenter('res/noplay.png', this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), 'btn', function () {
					ctx1.fillStyle = '#00C777';
					ctx1.textBaseline = 'middle';
					ctx1.font = that._cf(22);
					that.noplay_time = 5;
					ctx1.fillText(that.noplay_time, that._cx(140), that._cy(607));
					that._updatePlane('btn');
					that.timer = setInterval(function () {
						that.noplay_time--;
						if (that.noplay_time <= 0) {
							clearInterval(that.timer);
							ctx1.clearRect(0, 0, WIDTH, HEIGHT);
							that._drawImageCenter('res/replay.png', that._cx(207), that._cy(607), that._cwh(212), that._cwh(84), 'btn', null, that.imgid['btn']);
						} else {
							ctx1.fillStyle = 'white';
							ctx1.fillRect(that._cx(125), that._cy(590), that._cwh(30), that._cwh(30));
							ctx1.fillStyle = '#00C777';
							ctx1.textBaseline = 'middle';
							ctx1.font = that._cf(22);
							ctx1.fillText(that.noplay_time, that._cx(140), that._cy(607));
							that._updatePlane('btn');
						}
					}, 1000);
				}, this.imgid['btn']);
			} else {
				var ctx1 = this.context['btn'];
				ctx1.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
				this._drawImageCenter('res/replay.png', this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), 'btn', null, this.imgid['btn']);
			}

			// 历史最高分
			ctx.font = this._cf(14);
			ctx.textAlign = "center";
			ctx.fillStyle = '#fff';
			ctx.fillText('历史最高分：' + Math.max(opt.highest_score, opt.score), this._cx(207), this._cy(703));

			this._updatePlane('bg');
		}
	}, {
		key: '_drawStart',
		value: function _drawStart(opt) {
			opt = opt || {};
			// 绘制背景图
			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
			ctx.fillStyle = 'rgba(0,0,0, 0.3)';
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			var that = this;
			this._drawImageCenter('res/title.png', this._cx(204), this._cy(168), this._cwh(207), this._cwh(52), 'bg', null, this.imgid['bg']);

			var ctx1 = this.context['btn'];
			ctx1.clearRect(0, 0, WIDTH, HEIGHT);
			this._drawImageCenter('res/play.png', that._cx(207), that._cy(587), that._cwh(208), that._cwh(78), 'btn', null, this.imgid['btn']);

			ctx.font = this._cf(17);
			ctx.textBaseline = 'middle';
			ctx.textAlign = 'center';
			ctx.fillStyle = '#fff';
			ctx.fillText('排行榜', this._cx(213.5), that._cy(684));

			// 246 684
			this._drawImageCenter('res/r_arr.png', this._cx(250), this._cy(684), this._cwh(6.6), this._cwh(10), 'bg', null, this.imgid['bg']);

			this._drawImageCenter('res/rank.png', this._cx(165), this._cy(684), this._cwh(22), this._cwh(22), 'bg', null, this.imgid['bg']);

			this._updatePlane('bg');
		}
	}, {
		key: '_drawLookers',
		value: function _drawLookers(opt) {
			// 绘制背景图
			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);

			// 绘制头像
			var that = this;

			var score = opt.score || 0;
			var name = opt.nickname || '';
			ctx.textAlign = "center";

			ctx.textBaseline = "middle";
			if (opt.type == 'in') {
				this._drawImageRound(opt.headimg, this._cx(207), this._cy(91), this._cx(50), this._cx(50), 'bg', function () {
					that._drawImageCenter('res/ava_lookers.png', that._cx(207), that._cy(91), that._cx(53), that._cx(53), 'bg', null, that.imgid['bg']);
				}, this.imgid['bg'], true);
				ctx.font = this._cf(17);
				ctx.fillStyle = 'black';
				ctx.fillText(name + ' 正在游戏中', this._cx(207), this._cy(144));
			} else if (opt.type == 'gg') {
				ctx.fillStyle = 'rgba(0,0,0, 0.4)';
				ctx.fillRect(0, 0, WIDTH, HEIGHT);

				this._drawImageRound(opt.headimg, this._cx(207), this._cy(91), this._cwh(50), this._cwh(50), 'bg', function () {
					that._drawImageCenter('res/ava_lookers.png', that._cx(207), that._cy(91), that._cwh(53), that._cwh(53), 'bg', null, that.imgid['bg']);
				}, this.imgid['bg'], true);
				ctx.fillStyle = '#fff';
				ctx.strokeStyle = 'white';
				ctx.font = this._cf(17);
				ctx.fillText(name + ' 游戏已结束', this._cx(207), this._cy(144));
				ctx.lineWidth = 0.5 * Dpr;
				ctx.strokeStyle = 'rgba(255,255,255,0.5)';
				ctx.beginPath();
				ctx.moveTo(this._cx(157), this._cy(176));
				ctx.lineTo(this._cx(257), this._cy(176));
				ctx.closePath();
				ctx.stroke();
				ctx.font = this._cf(14);
				ctx.fillText('游戏得分', this._cx(207), this._cy(207));
				// 小方块
				ctx.fillStyle = 'rgba(255,255,255,0.2)';
				ctx.fillRect(this._cx(156), this._cy(203), this._cwh(9), this._cwh(3));
				ctx.fillRect(this._cx(156), this._cy(209), this._cwh(9), this._cwh(3));
				ctx.fillRect(this._cx(243), this._cy(203), this._cwh(9), this._cwh(3));
				ctx.fillRect(this._cx(243), this._cy(209), this._cwh(9), this._cwh(3));
				ctx.fillStyle = '#fff';
				ctx.font = this._cf(80, true);
				ctx.fillText(score || 0, this._cx(212), this._cy(267));
			} else if (opt.type == 'out') {
				ctx.fillStyle = 'rgba(0,0,0, 0.4)';
				ctx.fillRect(0, 0, WIDTH, HEIGHT);

				this._drawImageRound(opt.headimg, this._cx(207), this._cy(221), this._cwh(50), this._cwh(50), 'bg', function () {
					that._drawImageCenter('res/ava_lookers.png', that._cx(207), that._cy(221), that._cwh(53), that._cwh(53), 'bg', null, that.imgid['bg']);
				}, this.imgid['bg'], true);

				ctx.fillStyle = '#fff';
				ctx.font = this._cf(17);
				ctx.fillText(name + ' 游戏已结束', this._cx(207), this._cy(278));
			}

			var that = this;
			this._drawImageCenter('res/btn_iplay.png', this._cx(207), this._cy(663), this._cwh(131), this._cwh(54), 'bg', null, this.imgid['bg']);

			this._updatePlane('bg');
		}
	}, {
		key: '_drawGameOverHighest',
		value: function _drawGameOverHighest(opt, type) {
			this.imgid['bg']++;
			opt.score = opt.score || 0;

			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
			ctx.fillStyle = 'rgba(0,0,0, 0.8)';
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			// 避免一次触发了超越，一次没有触发超越，显示了上一次的头像
			var ctx1 = this.context['btn'];
			ctx1.clearRect(this._cx(30), this._cy(448), this._cwh(354), this._cwh(55));

			// 历史最高分
			ctx.font = this._cf(14);
			ctx.textAlign = "center";
			ctx.fillStyle = '#fff';
			ctx.fillText('历史最高分：' + Math.max(opt.highest_score, opt.score), this._cx(207), this._cy(703));

			// 历史最高分 / 本周最高分 / 各种称号
			if (type == 'history') {
				if (this.changlleList.length == 0) {
					// 没有超越好友
					ctx.lineWidth = 2 * Dpr;
					ctx.strokeStyle = 'rgba(255,255,255,0.06)';
					ctx.fillStyle = 'rgba(0,0,0,0.6)';
					this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(371), 4 * Dpr, 'bg');
					ctx.fill();
					// 分享
					this._drawImageCenter('res/pure_share.png', this._cx(207), this._cy(440), this._cwh(18), this._cwh(24), 'bg', null, this.imgid['bg']);
				} else {
					// 有超越的好友
					ctx.lineWidth = 2 * Dpr;
					ctx.strokeStyle = 'rgba(255,255,255,0.06)';
					ctx.fillStyle = 'rgba(0,0,0,0.6)';
					this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(401), 4 * Dpr, 'bg');
					ctx.fill();
					// 线
					ctx.lineWidth = 0.5 * Dpr;
					ctx.strokeStyle = 'rgba(255,255,255,0.2)';
					ctx.beginPath();
					ctx.moveTo(this._cx(127), this._cy(406));
					ctx.lineTo(this._cx(287), this._cy(406));
					ctx.stroke();
					ctx.closePath();

					ctx.font = this._cf(14);
					ctx.fillStyle = '#fff';
					ctx.fillText('排名新超越' + this.changlleList.length + '位好友', this._cx(207), this._cy(429));

					// 好友头像
					this.changlleListStart = 0;
					this._reDrawChangeAva(0);

					// 分享
					this._drawImageCenter('res/pure_share.png', this._cx(207), this._cy(368), this._cwh(18), this._cwh(24), 'bg', null, this.imgid['bg']);
				}
				// 开始一坨称号的表演
				var other_msg = '';
				var color = '';
				var w = 80;
				if (this.opt.msg == '历史最高分') {
					/*if(this.opt.highest_score < 100 && this.opt.score >= 100) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 200 && this.opt.score >= 200) {
     	other_msg = '初窥门径';
     } 
     if(this.opt.highest_score < 300 && this.opt.score >= 300) {
     	other_msg = '初窥门径';
     } 
     if(this.opt.highest_score < 400 && this.opt.score >= 400) {
     	other_msg = '初窥门径'; 
     } 
     if(this.opt.highest_score < 500 && this.opt.score >= 500) {
     	other_msg = '初窥门径'; 
     } 
     if(this.opt.highest_score < 600 && this.opt.score >= 600) {
     	other_msg = '初窥门径'; 
     } 
     if(this.opt.highest_score < 700 && this.opt.score >= 700) {
     	other_msg = '初窥门径'; 
     } 
     if(this.opt.highest_score < 800 && this.opt.score >= 800) {
     	other_msg = '初窥门径'; 
     }
     if(this.opt.highest_score < 900 && this.opt.score >= 900) {
     	other_msg = 'hel';
     } 
     if(this.opt.highest_score < 1000 && this.opt.score >= 1000) {
     	other_msg = '0000000000000000';
     } 
     if(this.opt.highest_score < 1500 && this.opt.score >= 1500) {
     	other_msg = '初窥门径';
     } 
     if(this.opt.highest_score < 2000 && this.opt.score >= 2000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 2500 && this.opt.score >= 2500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 3000 && this.opt.score >= 3000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 3500 && this.opt.score >= 3500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 4000 && this.opt.score >= 4000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 4500 && this.opt.score >= 4500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 5000 && this.opt.score >= 5000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 5500 && this.opt.score >= 5500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 6000 && this.opt.score >= 6000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 6500 && this.opt.score >= 6500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 7000 && this.opt.score >= 7000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 7500 && this.opt.score >= 7500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 8000 && this.opt.score >= 8000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 8500 && this.opt.score >= 8500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 9000 && this.opt.score >= 9000) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 9500 && this.opt.score >= 9500) {
     	other_msg = '初窥门径';
     }
     if(this.opt.highest_score < 10000 && this.opt.score >= 10000) {
     	other_msg = '初窥门径';
     }*/
					if (this.opt.highest_score < 100 && this.opt.score >= 100) {
						// 第一次达到100分
						other_msg = '初窥门径';
						color = '#509FC9';
					}
					if (this.opt.highest_score < 500 && this.opt.score >= 500) {
						other_msg = '耐得寂寞';
						color = '#E67600';
					}
					if (this.opt.highest_score < 1000 && this.opt.score >= 1000) {
						other_msg = '登堂入室';
						color = '#009D5E';
					}
					if (this.opt.highest_score < 2000 && this.opt.score >= 2000) {
						other_msg = '无聊大师';
						color = '#7A0096';
					}
					if (this.opt.highest_score < 3000 && this.opt.score >= 3000) {
						other_msg = '一指禅';
						color = '#555555';
					}
					if (this.opt.highest_score < 5000 && this.opt.score >= 5000) {
						other_msg = '立地成佛';
						color = '#AC8742';
					}
					// 结束一坨称号的表演
				}
				if (!!other_msg) {
					/*if(this.opt.score > 9000){
     	color = '#AC8742';
     } else if(this.opt.score > 6000){
     	color = '#555555';
     } else if(this.opt.score > 3000){
     	color = '#7A0096';
     } else if(this.opt.score > 1000){
     	color = '#009D5E';
     } else if(this.opt.score > 500){
     	color = '#E67600';
     } else {
     	color = '#509FC9';
     }
     	if( other_msg.length <= 4){
     	w = 80
     } else if(other_msg.length <= 6){
     	w = 120
     } else {
     	w = 160
     }*/
					ctx.fillStyle = color;
					ctx.strokeStyle = color;
					ctx.lineWidth = 1 * Dpr;

					// ctx.fillRect( this._cx(163), this._cy(154), this._cx(88), this._cx(26) );
					this._roundedRectR(this._cx(207 - w / 2), this._cy(154), this._cwh(w), this._cwh(26), 2 * Dpr, 'bg');
					ctx.fill();
					ctx.fillStyle = 'white';
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.font = 'bold ' + this._cf(14);
					ctx.fillText(other_msg, this._cx(207), this._cy(167));
				} else this._drawImageCenter('res/new.png', this._cx(207), this._cy(167), this._cwh(58), this._cwh(26), 'bg', null, this.imgid['bg']);

				ctx.font = this._cf(14);
				ctx.textAlign = "center";
				ctx.fillStyle = '#fff';
				ctx.textBaseline = 'middle';

				ctx.fillText(this.opt.msg || '本周最高分', this._cx(207), this._cy(224));

				ctx.font = this._cf(86, true);
				ctx.fillStyle = '#00c777';
				ctx.fillText(opt.score, this._cx(207), this._cy(292.5));
			}

			// 排行榜最高分
			if (type == 'rank') {
				this._drawImageCenter('res/new.png', this._cx(207), this._cy(167), this._cwh(58), this._cwh(26), 'bg', null, this.imgid['bg']);

				ctx.lineWidth = 2 * Dpr;
				ctx.strokeStyle = 'rgba(255,255,255,0.06)';
				ctx.fillStyle = 'rgba(0,0,0,0.6)';
				this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(371), 4 * Dpr, 'bg');
				ctx.fill();

				var that = this;
				this._drawImageRound(this.myUserInfo.headimg, this._cx(207), this._cy(291), this._cwh(56), this._cwh(56), 'bg', function () {
					that._drawImageCenter('res/gold.png', that._cx(207), that._cy(253), that._cwh(40), that._cwh(40), 'bg', null, that.imgid['bg']);
				}, this.imgid['bg']);

				ctx.font = this._cf(14);
				ctx.textAlign = "center";
				ctx.fillStyle = '#fff';
				ctx.textBaseline = 'middle';
				ctx.fillText('排行榜冠军', this._cx(207), this._cy(224));

				ctx.font = this._cf(40, true);
				ctx.fillStyle = '#00c777';
				ctx.fillText(opt.score, this._cx(207), this._cy(349));

				// 分享
				this._drawImageCenter('res/pure_share.png', this._cx(207), this._cy(415), this._cwh(18), this._cwh(24), 'bg', null, this.imgid['bg']);
			}

			// title的小方块
			ctx.fillStyle = 'rgba(255,255,255,0.2)';
			ctx.fillRect(this._cx(155), this._cy(218.5), this._cwh(9), this._cwh(3));
			ctx.fillRect(this._cx(155), this._cy(224.5), this._cwh(9), this._cwh(3));
			ctx.fillRect(this._cx(248), this._cy(218.5), this._cwh(9), this._cwh(3));
			ctx.fillRect(this._cx(248), this._cy(224.5), this._cwh(9), this._cwh(3));

			// 关闭 - 回到正常结算页
			this._drawImageCenter('res/close.png', this._cx(375), this._cy(112), this._cwh(43), this._cwh(43), 'bg', null, this.imgid['bg']);

			// 头像会改变层级，所以要在头像之后显示
			var ctx1 = this.context['btn'];
			ctx1.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
			this._drawImageCenter('res/replay.png', this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), 'btn', null, this.imgid['btn']);

			// 礼花
			this._drawImageCenter('res/flower.png', this._cx(207), this._cy(290), this._cwh(260), this._cwh(141), 'bg', null, this.imgid['bg']);

			/*var that = this;
   this.particles = {};
   setInterval(function(){
   	that.explode(-7, 9, 1);// 烟花动画
   	that.explode(7, 9, 2);// 烟花动画
   	that.explode(0, 2, 3);// 烟花动画
   }, 3000)*/
			this._updatePlane('bg');
		}
	}, {
		key: '_reDrawChangeAva',
		value: function _reDrawChangeAva(pos) {
			var _this3 = this;

			this.imgid['btn']++; // 避免上一次的头像显示在这里
			if (this.changlleListStart + pos * 5 < 0 || this.changlleListStart + pos * 5 >= this.changlleList.length) {
				return;
			}
			this.changlleListStart = this.changlleListStart + pos * 5;

			var show_ava_list = this.changlleList.slice(this.changlleListStart, this.changlleListStart + 5);
			var n = show_ava_list.length,
			    w = 32,
			    p = 10;
			var startx = 207 - (n * 32 + (n - 1) * 10) / 2;

			var ctx = this.context['btn'];
			ctx.clearRect(this._cx(30), this._cy(448), this._cwh(354), this._cwh(55));

			var _loop2 = function _loop2() {
				var x0 = _this3._cx(startx + w / 2 + i * (w + p));
				that = _this3;

				_this3._drawImageRound(show_ava_list[i].headimg, x0, _this3._cy(469), _this3._cwh(w), _this3._cwh(w), 'btn', function () {
					that._drawImageCenter('res/ava_rank.png', x0, that._cy(469), that._cwh(w + 14), that._cwh(w + 14), 'btn', null, that.imgid['btn']);
				}, _this3.imgid['btn'], true);
			};

			for (var i = 0; i < n; i++) {
				var that;

				_loop2();
			}

			// 是否显示左右箭头
			if (this.changlleList.length > 5 && this.changlleListStart + 5 < Math.floor(this.changlleList.length / 5) * 5) {
				this._drawImageCenter('res/r_arr1.png', this._cx(339), this._cy(469), this._cwh(6), this._cwh(8), 'btn', null, this.imgid['btn']);
			}
			if (this.changlleList.length > 5 && this.changlleListStart != 0) {
				this._drawImageCenter('res/l_arr.png', this._cx(69), this._cy(469), this._cwh(6), this._cwh(8), 'btn', null, this.imgid['btn']);
			}
		}
	}, {
		key: '_drawBeginner',
		value: function _drawBeginner() {
			var ctx = this.context['bg'];
			ctx.clearRect(0, 0, WIDTH, HEIGHT);

			ctx.fillStyle = 'rgba(255,255,255,0.3)';
			ctx.fillRect(this._cx(103), this._cy(134), this._cwh(206), this._cwh(115));

			ctx.fillStyle = 'black';
			ctx.textBaseline = 'middle';
			ctx.textAlign = 'center';
			ctx.font = this._cf(17);
			ctx.fillText('长按屏幕并释放', this._cx(207), this._cy(172));

			ctx.textAlign = 'left';
			ctx.fillText('控制', this._cx(149), this._cy(213));

			ctx.textAlign = 'right';
			ctx.fillText('向前跳', this._cx(265), this._cy(213));

			this._drawImageCenter('res/i.png', this._cx(198), this._cy(211), this._cwh(13.2), this._cwh(35.6), 'bg', null, this.imgid['bg']);

			this._updatePlane('bg');
		}
		// ----------------- 画布创建与更新 -----------------

	}, {
		key: '_createPlane',
		value: function _createPlane() {
			// 创建画布
			if (!!this.canvas['bg']) return;
			for (var i = 0; i < planList.length; i++) {
				this.canvas[planList[i]] = document.createElement('canvas');
				this.context[planList[i]] = this.canvas[planList[i]].getContext('2d');
				this.canvas[planList[i]].width = WIDTH;
				if (planList[i] == 'list1' || planList[i] == 'list2') {
					// 高度是10倍的列表高度
					this.canvas[planList[i]].height = 10 * this._cwh(ListLineHeight);
				} else {
					this.canvas[planList[i]].height = HEIGHT;
				}

				this.texture[planList[i]] = new THREE.Texture(this.canvas[planList[i]]);
				// this.texture[i].needsUpdate = true;
				this.material[planList[i]] = new THREE.MeshBasicMaterial({ map: this.texture[planList[i]], transparent: true });
				if (planList[i] == 'list1' || planList[i] == 'list2') {
					this.geometry[planList[i]] = new THREE.PlaneGeometry(frustumSizeWidth, 10 * this._cwh(ListLineHeight) / HEIGHT * frustumSizeHeight);
				} else {
					this.geometry[planList[i]] = new THREE.PlaneGeometry(frustumSizeWidth, frustumSizeHeight);
				}
				this.obj[planList[i]] = new THREE.Mesh(this.geometry[planList[i]], this.material[planList[i]]);
				this.material[planList[i]].map.minFilter = THREE.LinearFilter;
				this.obj[planList[i]].position.y = 0; // 上下
				this.obj[planList[i]].position.x = 0; // 左右
				this.obj[planList[i]].position.z = 9 - i * 0.001; // 前后 -1 - scrollBar , -2 background, -3 list 1, -4 list 2
			}

			if (DEBUG && showDebugImg) {
				var ctx = this.context['sample'];
				ctx.globalAlpha = 0.4;
				var that = this;
				setTimeout(function () {
					that._drawImageCenter('res/sample.png', that._cx(207), that._cy(368), that._cwh(414), that._cwh(736), 'sample', null, that.imgid);
				}, 2000);
			}
		}
	}, {
		key: '_updatePlane',
		value: function _updatePlane(type) {
			// 画布更新
			if (!this.showState) {
				return;
			}

			if (this.canvasType == CANVASTYPE['gameOver'] && type != 'bg' && type != 'btn' && type != 'sample') {
				return;
			}
			if (this.canvasType == CANVASTYPE['start'] && type != 'bg' && type != 'btn' && type != 'sample') {
				return;
			}
			this.texture[type].needsUpdate = true;
			this.obj[type].visible = true;
			this.options.camera.add(this.obj[type]);
		}
	}, {
		key: '_updateClip',
		value: function _updateClip() {
			// 更新切面位置
			var cp0 = this.p0.clone();
			var cp1 = this.p1.clone();
			var cp2 = this.p2.clone();
			var cp3 = this.p3.clone();
			var cp4 = this.p4.clone();
			if (this.canvasType == CANVASTYPE['pk']) {
				cp1 = this.p5.clone();
				cp2 = this.p6.clone();
				cp3 = this.p7.clone();
				cp4 = this.p8.clone();
			}

			this.options.camera.updateMatrixWorld();
			var matrixWorld = this.options.camera.matrixWorld;

			cp0.applyMatrix4(matrixWorld);
			cp1.applyMatrix4(matrixWorld);
			cp2.applyMatrix4(matrixWorld);
			cp3.applyMatrix4(matrixWorld);
			cp4.applyMatrix4(matrixWorld);

			var triangle = new THREE.Triangle(cp2, cp1);
			var cutA = triangle.plane();
			this._negatePlane(cutA, cp0.clone());

			triangle = new THREE.Triangle(cp3, cp2);
			var cutB = triangle.plane();
			this._negatePlane(cutB, cp0.clone());

			triangle = new THREE.Triangle(cp4, cp3);
			var cutC = triangle.plane();
			this._negatePlane(cutC, cp0.clone());

			triangle = new THREE.Triangle(cp1, cp4);
			var cutD = triangle.plane();
			this._negatePlane(cutD, cp0.clone());

			this.material['list1'].clippingPlanes = [cutA, cutB, cutC, cutD];
			this.material['list1'].needsUpdate = true;
			this.material['list2'].clippingPlanes = [cutA, cutB, cutC, cutD];
			this.material['list2'].needsUpdate = true;

			// 更新切面位置结束
		}

		// ----------------- 工具函数 -----------------

	}, {
		key: '_cname',
		value: function _cname(x, namelen) {
			namelen = namelen || 16;
			x = x || '';
			var len = x.replace(/[^\x00-\xff]/g, '**').length;
			if (len > namelen) {
				x = this._sliceName(x, namelen) + '...';
			}
			return x;
		}
	}, {
		key: '_sliceName',
		value: function _sliceName(x, namelen) {
			x = x || '';
			var len = x.replace(/[^\x00-\xff]/g, '**').length;
			if (len > namelen) {
				x = x.substring(0, x.length - 1);
				x = this._sliceName(x, namelen);
			}
			return x;
		}
	}, {
		key: '_cwh',
		value: function _cwh(x) {
			var realx = x * W / 414;
			if (H / W < 736 / 414) {
				// 某4
				realx = x * H / 736;
			}
			return realx * Dpr;
		}
	}, {
		key: '_cx',
		value: function _cx(x) {
			// change x 
			// x 为 在 414*736 屏幕下的，标准像素的 x ，即为设计图的x的px值
			// realx 表示在当前屏幕下，应该得到的x值，这里所有屏幕画布将按照x轴缩放
			var realx = x * W / 414;
			if (H / W < 736 / 414) {
				// 某4
				realx = x * H / 736 + (W - H * 414 / 736) / 2;
			}
			return realx * Dpr;
		}
	}, {
		key: '_cy',
		value: function _cy(y) {
			// change y
			// y 位在 414*736 屏幕下的，标准像素的y，即为设计图的y的px值
			// realy表示在当前屏幕下，应该得到的y值，如果屏幕的长宽值特别大（某X，某note8），那么就上下留白
			var really;
			if (H / W > 736 / 414) {
				// 某X
				// 屏幕显示区域的高度h: WIDTH*736/414, 上下留白是  (HEIGHT - h)/2
				really = y * W / 414 + (H - W * 736 / 414) / 2;
			} else {
				really = y * H / 736;
			}
			return really * Dpr;
		}
	}, {
		key: '_cf',
		value: function _cf(size, is_num) {
			// font size 
			var realf = size * Dpr * W / 414;
			if (H / W < 736 / 414) {
				// 某4
				realf = size * Dpr * H / 736;
			}
			if (!!is_num && !!family) return realf + ('px ' + family);else return realf + 'px Helvetica';
		}
	}, {
		key: '_cxp',
		value: function _cxp(x) {
			// 根据坐标反推出x
			return x / W * 414;
		}
	}, {
		key: '_cyp',
		value: function _cyp(y) {
			// 根据坐标反推出y
			var really;
			if (H / W > 736 / 414) {
				// 某X
				// 屏幕显示区域的高度h: WIDTH*736/414, 上下留白是  (HEIGHT - h)/2
				really = (y - (H - W * 736 / 414) / 2) / W * 414;
			} else {
				really = y / H * 736;
			}
			return really;
		}
	}, {
		key: '_negatePlane',
		value: function _negatePlane(plane, point) {
			if (!plane || !point) {
				return;
			}
			var distance = plane.distanceToPoint(point);
			if (distance < 0) {
				plane.negate();
			}
		}
	}, {
		key: '_drawImageCenter',
		value: function _drawImageCenter(src, x, y, width, height, type, cb, imgid, noupdate) {
			// imgid 是渲染时候的imgid， 在每次改变画布的时候自增
			// 以xy为中心来显示一副图片

			if (src == '/0' || src == '/96' || src == '/64' || !src) {
				src = 'res/ava.png';
			}
			var img = new Image();
			var that = this;
			img.onload = function () {
				if (that.imgid[type] == imgid) {
					that.context[type].drawImage(img, x - width / 2, y - height / 2, width, height);
					!!cb && cb();
					if (!noupdate) that._updatePlane(type); // 更新画布
				} else {}
					//console.log(that.imgid[type], imgid, type, src, '出现了时序错误!!!')

					// 切到了其他场景，自然cb也就不需要了
			};
			img.onerror = function () {
				!!cb && cb();
			};
			img.src = src;
		}
	}, {
		key: '_drawImageRound',
		value: function _drawImageRound(src, x, y, width, height, type, cb, imgid, noupdate) {
			// imgid 是渲染时候的imgid， 在每次改变画布的时候自增
			// 以xy为中心来显示一副图片
			if (src == '/0' || src == '/96' || src == '/64' || !src) {
				src = 'res/ava.png';
			}
			// src = 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM73y96lOXERaFVGib5ENtBXAVQ1Zn9Wk1oNIAEKibq7jMTA/96'
			var img = new Image();
			var that = this;
			var ctx = this.context[type];
			var can = this.canvas[type];
			img.onload = function () {
				if (that.imgid[type] == imgid) {
					ctx.save();
					that._roundedRectR(x - width / 2, y - height / 2, width, height, 2, type);
					ctx.clip();
					ctx.drawImage(img, x - width / 2, y - height / 2, width, height);
					ctx.closePath();
					ctx.restore();
					!!cb && cb();
					if (!noupdate) that._updatePlane(type); // 更新画布
				} else {}
					//console.log(that.imgid[type], imgid, type, src, '出现了时序错误!!!')

					// 切到了其他场景，自然cb也就不需要了
			};
			img.onerror = function () {
				!!cb && cb();
			};
			img.src = src;
		}
	}, {
		key: '_rerank',
		value: function _rerank(array) {
			// 排行榜重新排序
			var i = 0,
			    len = array.length,
			    j,
			    d;
			for (; i < len; i++) {
				for (j = 0; j < len; j++) {
					if (array[i].week_best_score > array[j].week_best_score) {
						d = array[j];
						array[j] = array[i];
						array[i] = d;
					}
				}
			}
			return array;
		}
	}, {
		key: '_findSelfIndex',
		value: function _findSelfIndex(element, index, array) {
			// 从排行列表中找出自己的排名
			return element.nickname === this.myUserInfo.nickname;
		}
	}, {
		key: '_findPartner',
		value: function _findPartner(element, index, array) {
			// 从排行列表中找出自己的排名
			return element.is_self === 1;
		}
	}, {
		key: '_roundedRectR',
		value: function _roundedRectR(x, y, width, height, radius, type) {
			var ctx = this.context[type];
			ctx.beginPath();
			ctx.moveTo(x, y + radius - 1);
			ctx.lineTo(x, y + height - radius);
			ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
			ctx.lineTo(x + width - radius, y + height);
			ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
			ctx.lineTo(x + width, y + radius);
			ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
			ctx.lineTo(x + radius, y); // 终点
			ctx.quadraticCurveTo(x, y, x, y + radius);
			ctx.stroke();
			ctx.closePath();
		}
	}, {
		key: 'explode',
		value: function explode(x, y, idx) {
			if (!this.particles[idx]) {
				var colors = [0x00B6F1, 0x1800FF, 0xFF0000, 0xFEFF00, 0x00FF00];
				this.materials = [];
				var geometry = new THREE.PlaneGeometry(0.4, 0.4);
				for (var i = 0; i < colors.length; ++i) {
					this.materials.push(new THREE.MeshBasicMaterial({ color: colors[i], transparent: true }));
				}
				this.particles[idx] = [];
				for (var i = 0; i < 25; ++i) {
					var particle = new THREE.Mesh(geometry, this.materials[i % colors.length]);
					// particle.position.set(0, 0, 9.9);
					this.options.camera.add(particle);
					this.particles[idx].push(particle);
				}
			}
			var t1 = 0.35;
			var t2 = 0.35;

			for (var i = 0; i < this.particles[idx].length; ++i) {
				var x0 = x,
				    y0 = y;
				this.particles[idx][i].position.set(x0, y0, 9.9);

				// 快速 随机左右散开，占 2/3
				var x1 = (1 - 2 * Math.random()) * 5 + x0;
				var y1 = (1 - 2 * Math.random()) * 5 + y0;

				var x11 = x0 + (x1 - x0) * 0.95;
				var y11 = y0 + (y1 - y0) * 0.95;

				_animation.customAnimation.to(this.particles[idx][i].position, t1, {
					x: x11,
					y: y11
				});

				_animation.customAnimation.to(this.particles[idx][i].position, t2, {
					x: x1,
					y: y1,
					delay: t1
				});
			}
			/*for (var i = 0; i < this.materials.length; ++i) {
   	this.materials[i].opacity = 1;
   	customAnimation.to(this.materials[i], t2, { opacity: 0, delay: t1});
   }*/
		}
	}, {
		key: 'showFinger',
		value: function showFinger() {
			var _this4 = this;

			return;
			if (!this.hand) {
				this.hand = new THREE.Mesh(new THREE.PlaneGeometry(2, 3.4), new THREE.MeshBasicMaterial({ map: _config.loader.load('res/hand.png'), transparent: true }));
				this.hand.position.set(11, -8, 9.9);
				this.circle = new THREE.Mesh(new THREE.RingGeometry(1, 1.2, 30), new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true }));
				this.circle.position.set(10.5, -6.8, 9.9);
			}
			this.options.camera.add(this.hand);
			this.options.camera.add(this.circle);
			_animation.customAnimation.to(this.circle.material, 0.1, { opacity: 1 });
			_animation.customAnimation.to(this.circle.scale, 0.3, { x: 1.5, y: 1.5, z: 1.5 });
			_animation.customAnimation.to(this.circle.material, 0.1, { opacity: 0, delay: 1.3 });

			_animation.customAnimation.to(this.hand.scale, 0.5, { x: 1, y: 1, delay: 1 });
			_animation.customAnimation.to(this.hand.scale, 0.5, { x: 1.5, y: 1.5, delay: 2 });

			this.fingerTimer = setTimeout(function () {
				_this4.showFinger();
				_this4.circle.scale.set(1, 1, 1);
			}, 3000);
		}
	}, {
		key: 'clearFinger',
		value: function clearFinger() {
			if (this.fingerTimer) {
				clearTimeout(this.fingerTimer);
				this.fingerTimer = null;
			}
			this.opts.camera.remove(this.hand);
		}
	}]);

	return Rank;
}();

exports.default = Rank;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleSettlementPage = function () {
  function singleSettlementPage(camera) {
    _classCallCheck(this, singleSettlementPage);

    var material = new THREE.MeshBasicMaterial({ color: 0x0080c0 });
    var rankList = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
    var replay = rankList.clone();
    var challenge = rankList.clone();

    replay.position.set(0, -20, -1);
    rankList.position.set(-10, -20, -1);
    challenge.position.set(10, -20, -1);

    this.ui = [replay, rankList, challenge];
    this.camera = camera;
  }

  _createClass(singleSettlementPage, [{
    key: 'show',
    value: function show() {
      var _this = this;

      this.ui.forEach(function (ui) {
        _this.camera.add(ui);
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      this.ui.forEach(function (ui) {
        _this2.camera.remove(ui);
      });
    }
  }]);

  return singleSettlementPage;
}();

exports.default = singleSettlementPage;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _config = __webpack_require__(2);

var _text = __webpack_require__(8);

var _text2 = _interopRequireDefault(_text);

var _animation = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 间隔时常
// const minDistance = 0
var minDistance = 5;

// 启动步数
// const minStartDistance = 10
var minStartDistance = 2;

var AvatorRadius = 1.3;
var OuterRadius = AvatorRadius / 20 * 21;
var InnerRadius = OuterRadius - 0.5;
var AvatorY = 10;
var AnimateDuration = 0.8;
var AnimateHeight = 3;

var startScale = 0;

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  return ctx;
}

function reMapUv(geometry) {
  geometry.computeBoundingBox();

  var max = geometry.boundingBox.max,
      min = geometry.boundingBox.min;
  var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
  var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
  var faces = geometry.faces;

  geometry.faceVertexUvs[0] = [];

  for (var i = 0; i < faces.length; i++) {

    var v1 = geometry.vertices[faces[i].a],
        v2 = geometry.vertices[faces[i].b],
        v3 = geometry.vertices[faces[i].c];

    geometry.faceVertexUvs[0].push([new THREE.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y), new THREE.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y), new THREE.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)]);
  }
  geometry.uvsNeedUpdate = true;
}

var RankSystem = function () {
  function RankSystem(game) {
    _classCallCheck(this, RankSystem);

    this.game = game;
    this.seed = 0;
    this.startDist = 0;

    this.hitPoint = {
      uuid: '',
      ready: false,
      texture: null
    };

    this.loader = new THREE.TextureLoader();

    this.text = new _text2.default('超越！', {
      fillStyle: 0x252525,
      chinese: true,
      textAlign: 'center'
    });
    // this.avatorFrame = new THREE.Mesh(new THREE.PlaneGeometry(AvatorRadius * 2, AvatorRadius * 2), new THREE.MeshBasicMaterial({
    //   transparent: true,
    //   opacity: 1
    // }))

    var shape = new THREE.Shape();
    shape = roundedRect(shape, -OuterRadius, -OuterRadius, OuterRadius * 2, OuterRadius * 2, 0.5);
    var shape2 = new THREE.Shape();
    shape2 = roundedRect(shape2, -AvatorRadius, -AvatorRadius, AvatorRadius * 2, AvatorRadius * 2, 0.5);

    var geometry = new THREE.ShapeGeometry(shape2);
    reMapUv(geometry);

    this.avatorFrame = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 1
    }));

    this.avatorOuter = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1
    }));

    this.text.obj.scale.set(0.8, 0.8, 0.8);
    this.text.obj.position.set(0, 2.2, 0.1);

    this.avatorFrame.position.set(0, 0, 0.1);
    // this.avatorFrame.scale.set(startScale, startScale, startScale)
    this.avatorFrame.material.opacity = 0;

    this.avatorOuter.position.set(0, 0, 0);
    // this.avatorOuter.scale.set(startScale, startScale, startScale)
    this.avatorOuter.material.opacity = 0;
    this.text.material.opacity = 0;

    this.obj = new THREE.Object3D();

    this.text.obj.visible = false;
    this.obj.add(this.avatorOuter);
    this.obj.add(this.avatorFrame);
    this.obj.add(this.text.obj);

    this.obj.rotateY(-Math.PI / 4);
    this.obj.rotateX(-Math.PI / 16 * 3);
    this.game.scene.add(this.obj);
    this.obj.visible = false;
  }

  _createClass(RankSystem, [{
    key: 'update',
    value: function update() {

      // 没有好友数据就不更新了
      if (!this.game.gameModel.friendsScore) {
        return;
      }
      if (!this.game.gameModel.friendsScore.length) {
        return;
      }

      // 计步器++
      this.seed++;

      if (this.hitPoint.uuid == this.game.currentBlock.obj.uuid && this.hitPoint.ready && this.hitPoint.texture) {
        if (this.startDist < minStartDistance) {
          this.startDist++;
          // this.obj.add(this.text.obj)
          this.text.obj.visible = true;
        }
        this.playAnimate();
        this.seed = 0;
      }

      // 如果开始走过的步数小于最小出现步数
      // if (this.startDist < minStartDistance) {
      //   this.startDist++
      //   return
      // }

      // 计算计步器是不是大于间隔步伐
      if (this.seed >= minDistance) {
        // if (this.game.UI.score >= this.game.heightestScore) {
        this.checkScore();
        // }
      }
      // console.log('seed', this.seed)
    }
  }, {
    key: 'checkScore',
    value: function checkScore() {
      // 获取当前分数，找出下一个分数与你差别在1的人
      var score = this.game.UI.score;
      var friends = this.game.gameModel.friendsScore;

      // 遍历数组，获取人-----待优化性能
      try {
        for (var i = 0; i < friends.length; i++) {
          // !! roy 这里有风险，score_info[0]可能会是次数
          if (friends[i].week_best_score == score) {
            this.hitPoint.uuid = this.game.nextBlock.obj.uuid;
            this.hitPoint.ready = false;
            // this.showAvator(friends[i])
            this.animateAvator(friends[i]);
            break;
          }
        }
      } catch (e) {
        console.log('RankSystem checkScore err:', e);
      }
    }
  }, {
    key: 'animateAvator',
    value: function animateAvator(user) {
      var _this = this;

      this.loader.load(user.headimg, function (texture) {
        if (_this.hitPoint.uuid == _this.game.nextBlock.obj.uuid) {
          _this.hitPoint.ready = true;
          texture.minFilter = THREE.LinearFilter;
          _this.hitPoint.texture = texture;
        }
      });
    }
  }, {
    key: 'playAnimate',
    value: function playAnimate() {
      var _this2 = this;

      /**
       * 更改加分位置
       */
      // console.log('showAvator')
      this.game.bottle.changeScorePos(3);

      var _game$bottle$obj$posi = this.game.bottle.obj.position.clone(),
          x = _game$bottle$obj$posi.x,
          z = _game$bottle$obj$posi.z;

      this.obj.position.set(x, AvatorY, z);

      this.avatorFrame.material.map = this.hitPoint.texture;

      this.obj.visible = true;

      // TweenMax.to(this.obj.position, 1.6, {
      //   y: AnimateHeight + AvatorY,
      //   // onComplete: () => {
      //   //   this.resetAvator()
      //   //   this.game.bottle.changeScorePos(0)
      //   // }
      // });

      // TweenMax.to([this.text.obj.material, this.avatorOuter.material, this.avatorFrame.material], 1.6, {
      //   opacity: 0,
      //   onComplete: () => {
      //     this.resetAvator()
      //     this.game.bottle.changeScorePos(0)
      //   }
      // });

      _animation.customAnimation.to(this.obj.position, 0.4, {
        y: AnimateHeight + AvatorY
      });
      _animation.customAnimation.to(this.text.material, 0.4, {
        opacity: 1
      });
      _animation.customAnimation.to(this.avatorOuter.material, 0.4, {
        opacity: 1
      });
      _animation.customAnimation.to(this.avatorFrame.material, 0.4, {
        opacity: 1
      });

      _animation.customAnimation.to(this.text.material, 0.4, {
        opacity: 0,
        delay: 0.6,
        onComplete: function onComplete() {
          _this2.resetAvator();
          _this2.game.bottle.changeScorePos(0);
        }
      });
      _animation.customAnimation.to(this.avatorOuter.material, 0.4, {
        opacity: 0,
        delay: 0.6
      });
      _animation.customAnimation.to(this.avatorFrame.material, 0.4, {
        opacity: 0,
        delay: 0.6
      });

      this.hitPoint.uuid = '';
      this.hitPoint.ready = false;
      this.hitPoint.texture = null;
    }
  }, {
    key: 'resetAvator',
    value: function resetAvator() {
      this.obj.visible = false;
      this.text.obj.visible = false;
      // this.obj.remove(this.text.obj)

      this.avatorFrame.material.opacity = 0;
      // this.avatorFrame.material.opacity = 1
      // this.avatorFrame.scale.set(startScale, startScale, startScale)
      this.avatorFrame.material.map = '';

      // this.avatorOuter.scale.set(startScale, startScale, startScale)
      this.avatorOuter.material.opacity = 0;
      // this.avatorOuter.material.opacity = 1

      // this.text.obj.material.opacity = 1
      this.text.material.opacity = 0;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.seed = 0;
      this.seed = 0;
      this.startDist = 0;
      this.startDist = 0;
      this.hitPoint = {
        uuid: '',
        ready: false,
        texture: null
      };
      this.obj.visible = false;
    }
  }]);

  return RankSystem;
}();

exports.default = RankSystem;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var data = {
//   accurate: 0,
//   bonus: 0
// }

var historyTimes = function () {
  function historyTimes(game) {
    _classCallCheck(this, historyTimes);

    this.times = _storage2.default.getHistoryTimes();
    if (!this.times) {
      this.times = {
        accurate: 0,
        bonus: 0
      };
    }
    this.game = game;
    this.limitScore = 5;
  }

  // 与服务器的数据进行比较


  _createClass(historyTimes, [{
    key: 'verifyScore',
    value: function verifyScore(onlineScore) {
      if (onlineScore >= this.times.accurate) {

        // 如果网上的分数比当前分数大，则赋值，更新本地缓存
        this.times.accurate = onlineScore;

        if (this.times.bonus >= this.limitScore) {

          // 如果累加分数超过5分
          this.upLoadHistoryTimes();
        } else {

          _storage2.default.saveHistoryTimes(this.times);
        }
      } else {
        this.upLoadHistoryTimes();
      }
    }
  }, {
    key: 'addOne',
    value: function addOne() {
      // console.log('score add one')
      this.times.bonus++;
      // this.checkUp()
    }
  }, {
    key: 'checkUp',
    value: function checkUp() {
      if (this.times.bonus >= this.limitScore) {

        // 如果累加分数超过5分
        this.upLoadHistoryTimes();
      } else {
        _storage2.default.saveHistoryTimes(this.times);
      }
    }
  }, {
    key: 'upLoadHistoryTimes',
    value: function upLoadHistoryTimes() {
      var highestScore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var verifyData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var times = this.times.accurate + this.times.bonus;
      // 上传分数
      _network2.default.requestSettlement(highestScore, times, this.afterUpload.bind(this), verifyData);
    }
  }, {
    key: 'afterUpload',
    value: function afterUpload(success) {
      if (success) {
        this.times.accurate += this.times.bonus;
        this.times.bonus = 0;
      }
      _storage2.default.saveHistoryTimes(this.times);
    }
  }, {
    key: 'getTimes',
    value: function getTimes() {
      return this.times.accurate + this.times.bonus;
    }
  }]);

  return historyTimes;
}();

exports.default = historyTimes;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cellTailConfig = {
  duration: 100,
  height: 2.0,
  width: 0.5,
  distance: 0.5
};

var TailSystem = function () {
  function TailSystem(scene, bottle) {
    _classCallCheck(this, TailSystem);

    this.scene = scene;
    this.bottle = bottle;
    this.tailsRemainPool = [];
    this.tailsUsingPool = [];
    this.lastDotPosition = this.bottle.obj.position.clone();
    this.nowPosition = this.bottle.obj.position.clone();

    this.distance = cellTailConfig.distance;

    this.init();
  }

  _createClass(TailSystem, [{
    key: 'init',
    value: function init() {
      var width = cellTailConfig.width;
      var height = cellTailConfig.height;
      this.geometry = new THREE.PlaneGeometry(width, height);
      this.material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3
      });
      //this.cloneMesh = new THREE.Mesh(geometry, material)
      //this.cloneMesh.visible = false
      // this.cloneMesh.visible = true

      // 创造50个尾巴单元,平面和圆柱，先选择平面
      for (var i = 0; i < 20; i++) {
        var cellTail = new CellTail(this.geometry, this.material);

        this.scene.add(cellTail.mesh);
        this.tailsRemainPool.push(cellTail);
      }
    }
  }, {
    key: 'update',
    value: function update(tickTime) {
      // console.log(tickTime)
      this.updateActiveCell(tickTime);
      if (this.bottle.status == 'prepare') {
        this.nowPosition = this.bottle.obj.position.clone();
        this.lastDotPosition = this.bottle.obj.position.clone();
      }

      if (this.bottle.status == 'jump') {
        var distance = void 0;

        // 更新位置
        this.nowPosition = this.bottle.obj.position.clone();

        distance = this.nowPosition.clone().distanceTo(this.lastDotPosition.clone());
        if (distance < 5) {
          if (distance >= this.distance) {
            // 距离过大问题
            var m = distance / this.distance;
            var n = Math.floor(m);
            var lastPosition = this.lastDotPosition.clone();
            var nowPosition = this.nowPosition.clone();
            var tickScale = tickTime / cellTailConfig.duration;
            for (var i = 1; i <= n; i++) {
              nowPosition = this.lastDotPosition.clone().lerp(this.nowPosition.clone(), i / m);
              var scale = 1 + tickScale * (i / m - 1);
              scale = scale <= 0 ? 0 : scale;
              this.layEgg(lastPosition.clone(), nowPosition.clone(), scale);
              lastPosition = nowPosition.clone();
              if (i == n) {
                this.lastDotPosition = nowPosition.clone();
              }
            }
          }
        } else {
          this.lastDotPosition = this.nowPosition.clone();
        }
      }
    }
  }, {
    key: 'updateActiveCell',
    value: function updateActiveCell(tickTime) {
      var array = this.tailsUsingPool;
      var deltaScaleY = 1 / cellTailConfig.duration;
      var delatAlpha = 1 / cellTailConfig.duration;
      for (var i = 0; i < array.length; i++) {
        // 更新时间
        array[i].tickTime += tickTime;

        // 压缩所有cell的高度
        var newScale = array[i].mesh.scale.y - deltaScaleY * tickTime;
        if (newScale > 0) {

          array[i].mesh.scale.y = newScale > 0 ? newScale : 0;

          // array[i].mesh.material.opacity = 0.3

          // 判断透明度和高度，剔除用完的
          if (array[i].tickTime >= cellTailConfig.duration) {
            array[i].reset();
            var cell = array.shift();
            this.tailsRemainPool.push(cell);
            i--;
          }
        } else {
          array[i].reset();
          var _cell = array.shift();
          this.tailsRemainPool.push(_cell);
          i--;
        }
      }
    }
  }, {
    key: 'correctPosition',
    value: function correctPosition() {
      this.lastDotPosition = this.bottle.obj.position.clone();
    }
  }, {
    key: 'layEgg',
    value: function layEgg(lastDotPosition, nowPosition) {
      var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      // 获取一个
      var cellTail = this.getMesh();

      this.tailsUsingPool.push(cellTail);

      // 摆放位置
      cellTail.mesh.position.set(nowPosition.x, nowPosition.y, nowPosition.z);

      cellTail.mesh.scale.y = scale;

      // 修正方向
      cellTail.mesh.lookAt(lastDotPosition);

      cellTail.mesh.rotateY(Math.PI / 2);

      // 变可见
      cellTail.mesh.visible = true;
    }
  }, {
    key: 'getMesh',
    value: function getMesh() {
      var res = this.tailsRemainPool.shift();
      if (!res) {
        res = new CellTail(this.geometry, this.material);
        this.scene.add(res.mesh);
      }
      return res;
    }
  }, {
    key: 'allReset',
    value: function allReset() {
      this.tailsRemainPool.forEach(function (el) {
        el.reset();
      });
    }
  }]);

  return TailSystem;
}();

exports.default = TailSystem;

var CellTail = function () {
  function CellTail(geometry, material) {
    _classCallCheck(this, CellTail);

    this.tickTime = 0;
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.visible = false;
    this.mesh.name = 'tail';
  }

  _createClass(CellTail, [{
    key: 'reset',
    value: function reset() {
      this.tickTime = 0;
      this.mesh.scale.set(1, 1, 1);
      this.mesh.visible = false;
    }
  }]);

  return CellTail;
}();

/***/ }),
/* 26 */
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

var _text = __webpack_require__(8);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEIGHT = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
var WIDTH = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
var ASPECT = WIDTH / HEIGHT;

var UI = function () {
	function UI(scene, camera, full2D, game) {
		_classCallCheck(this, UI);

		var that = this;
		this.game = game;
		this.full2D = full2D;
		this.scene = scene;
		this.camera = camera;
		this.score = 0;
		this.double = 1;

		// var observeGeometry = new THREE.PlaneGeometry(FRUSTUMSIZE * ASPECT * 0.034, FRUSTUMSIZE * ASPECT * 0.034 / 42 * 48);
		// var observeMaterial = new THREE.MeshBasicMaterial({
		// 	map: loader.load('res/observShare.png'),
		// 	transparent: true,
		// });

		// var observeBg = new THREE.Mesh(new THREE.PlaneGeometry(9.5, 9.5), new THREE.MeshBasicMaterial({
		// 	map: loader.load('res/share2x.png'),
		// 	transparent: true,
		// }))
		// observeBg.position.set(-1.1, -1.8, 0)

		// this.observe = new THREE.Mesh(observeGeometry, observeMaterial);
		// var res = wx.getSystemInfoSync()
		// var sys = (res.system).toLowerCase()
		// if (res.screenHeight >= 812 && sys.indexOf('ios') > -1) {
		// 	this.observe.position.set(-FRUSTUMSIZE * ASPECT * 0.38, - FRUSTUMSIZE * 0.464, -1)
		// } else {
		// 	this.observe.position.set(-FRUSTUMSIZE * ASPECT * 0.435, - FRUSTUMSIZE * 0.464, -1)
		// }
		// // this.observe.position.set(-FRUSTUMSIZE / 2 * ASPECT, -FRUSTUMSIZE / 2, -1)
		// this.observe.updateMatrix();
		// this.observe.matrixAutoUpdate = false;
		// this.observe.visible = false

		// this.observe.add(observeBg)
		// this.camera.add(this.observe);

		//this.createSky();
		this.scoreText = new _text2.default('0', { fillStyle: 0x252525, sumScore: true, opacity: 0.8 });
		this.scoreText.obj.position.set(0, 21, -10);
		//this.scoreText.obj.scale.set(1.4, 1.4, 1.4);
		this.scoreText.obj.updateMatrix();
		this.scoreText.obj.matrixAutoUpdate = false;
		this.camera.add(this.scoreText.obj);
		this.quickText = new _text2.default('好快！', { fillStyle: 0x252525, chinese: true });
		this.quickText.obj.position.set(-13, 18, -10);
		this.quickText.obj.updateMatrix();
		this.quickText.obj.matrixAutoUpdate = false;
		this.quickText.obj.visible = false;
		this.perfectText = new _text2.default('很好！', { fillStyle: 0x252525, chinese: true });
		this.perfectText.obj.position.set(-13, 16, -10);
		this.perfectText.obj.updateMatrix();
		this.perfectText.obj.matrixAutoUpdate = false;
		this.perfectText.obj.visible = false;
		this.camera.add(this.quickText.obj);
		this.camera.add(this.perfectText.obj);
	}

	_createClass(UI, [{
		key: 'reset',
		value: function reset() {
			this.scoreText.setScore(0);
			//var bonus = this.gameOverPage.getObjectByName('bonus');
			//if (bonus) this.gameOverPage.remove(bonus);
			//this.camera.remove(this.gameOverPage);
			//this.bgAudio.currentTime = 0;
			//this.bgAudio.play();
			this.score = 0;
			this.double = 1;
			this.perfectText.obj.visible = false;
			this.quickText.obj.visible = false;
		}
	}, {
		key: 'update',
		value: function update() {
			//if (!this.bgAudio.paused) this.music.rotation.z -= 0.02;

		}
	}, {
		key: 'hideScore',
		value: function hideScore() {
			this.scoreText.obj.visible = false;
		}
	}, {
		key: 'showScore',
		value: function showScore() {
			this.scoreText.obj.visible = true;
		}
	}, {
		key: 'addScore',
		value: function addScore(score, double, quick, keepDouble) {
			if (keepDouble) {
				this.score += score;
				this.setScore(this.score);
				return;
			}
			if (double) {
				if (this.double === 1) this.double = 2;else this.double += 2;
			} else {
				this.double = 1;
			}
			if (quick && this.double <= 2) {
				this.double *= 2;
			}
			this.double = Math.min(32, this.double);
			score = score * this.double;
			this.score += score;
			this.setScore(this.score);
			// var showToast = Math.random() < 0.4;
			// if (double && showToast && (this.game.mode != 'observe')) {
			// 	//this.perfectText.obj.scale.set(0, 0, 0)
			// 	//TweenMax.to(this.perfectText.obj.scale, 0.4, { x: 0.8, y: 0.8, z: 0.8  });
			// 	var text = ['太棒了！', '很好！', '稳住！'];
			// 	//this.perfectText.setText(text[Math.floor(Math.random() * 3)]);
			// 	this.perfectText.obj.visible = true;
			// 	customAnimation.to(this.perfectText.material, 0.4, { opacity: 1 });
			// 	customAnimation.to(this.perfectText.material, 0.4, { opacity: 0, delay: 0.6, onComplete: () => {
			// 		this.perfectText.obj.visible = false;
			// 	}});
			// 	if (double && !quick) {
			// 		this.perfectText.obj.position.y = 18;
			// 	} else {
			// 		this.perfectText.obj.position.y = 16;
			// 	}
			// 	this.perfectText.obj.updateMatrix();
			// }
			// if (quick && showToast && (this.game.mode != 'observe')) {
			// 	//this.quickText.obj.scale.set(0, 0, 0)
			// 	//TweenMax.to(this.quickText.obj.scale, 0.4, { x: 0.8, y: 0.8, z: 0.8 });
			// 	var text = ['好快！', '给力！'];
			// 	//this.quickText.setText(text[Math.floor(Math.random() * 2)]);
			// 	this.quickText.obj.visible = true;
			// 	customAnimation.to(this.quickText.material, 0.4, { opacity: 1 });
			// 	customAnimation.to(this.quickText.material, 0.4, { opacity: 0, delay: 0.6, onComplete: () => {
			// 		this.quickText.obj.visible = false;
			// 	}});
			// }
		}
	}, {
		key: 'setScore',
		value: function setScore(score) {
			//console.log("setScore");
			this.scoreText.setScore(score);
			_config.BLOCK.minRadiusScale -= 0.005;
			//console.log("BBB", BLOCK.minRadiusScale, BLOCK.maxRadiusScale)
			_config.BLOCK.minRadiusScale = Math.max(0.25, _config.BLOCK.minRadiusScale);
			_config.BLOCK.maxRadiusScale -= 0.005;
			_config.BLOCK.maxRadiusScale = Math.max(_config.BLOCK.maxRadiusScale, 0.6);
			_config.BLOCK.maxDistance += 0.03;
			_config.BLOCK.maxDistance = Math.min(22, _config.BLOCK.maxDistance);

			// BLOCK.minRadiusScale = +BLOCK.minRadiusScale.toFixed(2);
			// BLOCK.maxRadiusScale = +BLOCK.maxRadiusScale.toFixed(2);
			// BLOCK.maxDistance = +BLOCK.maxDistance.toFixed(2);
		}
	}]);

	return UI;
}();

exports.default = UI;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioManager = function () {
  function AudioManager(game) {
    var _this = this;

    _classCallCheck(this, AudioManager);

    this.game = game;
    this.musicPool = ['success', 'combo1', 'combo2', 'combo3', 'combo4', 'combo5', 'combo6', 'combo7', 'combo8', 'scale_intro', 'scale_loop', 'restart', 'fall', 'fall_2', 'pop', 'icon', 'sing', 'store', 'water'];
    this.musicPool.forEach(function (key) {
      _this[key] = wx.createInnerAudioContext();
      _this[key].src = _config.AUDIO[key];
    });
    this.scale_loop.loop = true;
    this.store.onPlay(function () {
      _this.store.before && _this.store.before();
    });
    this.store.onEnded(function () {
      _this.store.after && _this.store.after();
      _this.timer = setTimeout(function () {
        _this.store.seek(0);
        _this.store.play();
      }, 3000);
    });
    this.sing.onEnded(function () {
      _this.timer = setTimeout(function () {
        _this.sing.seek(0);
        _this.sing.play();
      }, 3000);
    });

    this.water.onEnded(function () {
      _this.timer = setTimeout(function () {
        _this.water.seek(0);
        _this.water.play();
      }, 3000);
    });
    // this.sing.onPlay(() => {
    //   this.sing.before && this.sing.before();
    // });
    this.scale_intro.onEnded(function () {
      if (_this.game.bottle.status == 'prepare') _this.scale_loop.play();
    });
  }

  _createClass(AudioManager, [{
    key: 'resetAudio',
    value: function resetAudio() {
      var _this2 = this;

      this.musicPool.forEach(function (key) {
        _this2[key].stop();
      });
    }
  }, {
    key: 'register',
    value: function register(key, before, after) {
      this[key].before = before;
      this[key].after = after;
    }
  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: 'replay',
    value: function replay(key) {
      var music = this[key];
      if (music) {
        music.stop();
        music.play();
      } else {
        console.warn('there is no music', key);
      }
    }
  }]);

  return AudioManager;
}();

exports.default = AudioManager;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _lookers = __webpack_require__(45);

var _lookers2 = _interopRequireDefault(_lookers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var viewer = function () {
  function viewer(camera) {
    _classCallCheck(this, viewer);

    this.num = 0;
    this.list = [];
    this.imgPlanes = [];
    this.camera = camera;
    this.lookers = new _lookers2.default({ camera: camera });
    this.isOpen = false;
  }

  _createClass(viewer, [{
    key: 'peopleCome',
    value: function peopleCome(data) {

      var index = this.list.findIndex(function (el) {
        if (el) {
          return el.audience_openid == data.audience_openid;
        } else {
          return false;
        }
      });

      // 如果存在就返回
      if (index > -1) {
        return;
      }

      this.list.push(data);
      this.num++;
      if (this.isOpen) {
        this.showAvatar();
      }
    }
  }, {
    key: 'peopleOut',
    value: function peopleOut(data) {
      var index = this.list.findIndex(function (el) {
        if (el) {
          return el.audience_openid == data.audience_openid;
        } else {
          return false;
        }
      });

      // 没找到就算了
      if (index < 0) {
        return;
      }

      this.num = this.num - 1 < 0 ? 0 : this.num - 1;
      this.list.splice(index, 1);

      if (this.isOpen) {
        this.showAvatar();
      }
    }
  }, {
    key: 'showAvatar',
    value: function showAvatar() {
      if (this.num > 0) {

        var avatar = [];
        for (var i = 1; i < 4; i++) {
          if (this.list.length - i >= 0) {
            avatar.unshift(this.list[this.list.length - i].audience_headimg);
          }
        }
        this.lookers.showLookers({
          avaImg: true,
          icon: true,
          wording: false,
          num: this.num,
          avatar: avatar
        });
      } else {
        this.lookers.showLookers({
          avaImg: false,
          icon: true,
          wording: false
        });
      }
    }
  }, {
    key: 'open',
    value: function open() {
      this.isOpen = true;
      this.showAvatar();
    }
  }, {
    key: 'close',
    value: function close() {
      this.isOpen = false;
      this.hideAll();
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.num = 0;
      this.list = [];
      this.lookers.hideLookers();
    }
  }, {
    key: 'hideAll',
    value: function hideAll() {
      this.lookers.hideLookers();
    }
  }]);

  return viewer;
}();
// {
//   udience_cmd: 0
//   audience_headimg: "http://wx.qlogo.cn/mmhead/Q3auHgzwzM4zFTRfibLzc9yiao5pcYygKRf3BKMYLiaEc8eavxSjEnIIA/0"
//   audience_nickname: "荣钦， …"
//   audience_openid: "ofCYP0eere2xI5Nyxw5Suq5yxS_g"
//   cmd: 108
//   game_id: "2352595985513730"
// }


exports.default = viewer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _config = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var geometry = new THREE.RingGeometry(_config.WAVE.innerRadius, _config.WAVE.outerRadius, _config.WAVE.thetaSeg);

var Wave = function () {
	function Wave() {
		_classCallCheck(this, Wave);

		var material = new THREE.MeshBasicMaterial({ color: _config.COLORS.pureWhite, transparent: true });
		this.obj = new THREE.Mesh(geometry, material);
		this.obj.rotation.x = -Math.PI / 2;
		this.obj.name = 'wave';
		//this.obj.visible = false;
	}

	_createClass(Wave, [{
		key: 'reset',
		value: function reset() {
			this.obj.scale.set(1, 1, 1);
			this.obj.material.opacity = 1;
			this.obj.visible = false;
		}
	}]);

	return Wave;
}();

exports.default = Wave;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _window2 = __webpack_require__(1);

	var _window = _interopRequireWildcard(_window2);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	var global = GameGlobal;

	function inject() {
		_window.addEventListener = _window.canvas.addEventListener = function (type, listener) {
			_window.document.addEventListener(type, listener);
		};
		_window.removeEventListener = _window.canvas.removeEventListener = function (type, listener) {
			_window.document.removeEventListener(type, listener);
		};

		var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
		    platform = _wx$getSystemInfoSync.platform;

		// 开发者工具无法重定义 window


		if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
			for (var key in _window) {
				var descriptor = Object.getOwnPropertyDescriptor(global, key);

				if (!descriptor || descriptor.configurable === true) {
					Object.defineProperty(window, key, {
						value: _window[key]
					});
				}
			}

			for (var _key in _window.document) {
				var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);

				if (!_descriptor || _descriptor.configurable === true) {
					Object.defineProperty(global.document, _key, {
						value: _window.document[_key]
					});
				}
			}
			window.parent = window;
		} else {
			for (var _key2 in _window) {
				global[_key2] = _window[_key2];
			}
			global.window = _window;
			window = global;
			window.top = window.parent = window;
		}
	}

	if (!GameGlobal.__isAdapterInjected) {
		GameGlobal.__isAdapterInjected = true;
		inject();
	}

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;

	var _WindowProperties = __webpack_require__(2);

	Object.keys(_WindowProperties).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _WindowProperties[key];
			}
		});
	});

	var _constructor = __webpack_require__(3);

	Object.keys(_constructor).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _constructor[key];
			}
		});
	});

	var _Canvas = __webpack_require__(9);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _document2 = __webpack_require__(10);

	var _document3 = _interopRequireDefault(_document2);

	var _navigator2 = __webpack_require__(17);

	var _navigator3 = _interopRequireDefault(_navigator2);

	var _XMLHttpRequest2 = __webpack_require__(18);

	var _XMLHttpRequest3 = _interopRequireDefault(_XMLHttpRequest2);

	var _WebSocket2 = __webpack_require__(19);

	var _WebSocket3 = _interopRequireDefault(_WebSocket2);

	var _Image2 = __webpack_require__(11);

	var _Image3 = _interopRequireDefault(_Image2);

	var _Audio2 = __webpack_require__(12);

	var _Audio3 = _interopRequireDefault(_Audio2);

	var _FileReader2 = __webpack_require__(20);

	var _FileReader3 = _interopRequireDefault(_FileReader2);

	var _HTMLElement2 = __webpack_require__(4);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	var _localStorage2 = __webpack_require__(21);

	var _localStorage3 = _interopRequireDefault(_localStorage2);

	var _location2 = __webpack_require__(22);

	var _location3 = _interopRequireDefault(_location2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.document = _document3.default;
	exports.navigator = _navigator3.default;
	exports.XMLHttpRequest = _XMLHttpRequest3.default;
	exports.WebSocket = _WebSocket3.default;
	exports.Image = _Image3.default;
	exports.Audio = _Audio3.default;
	exports.FileReader = _FileReader3.default;
	exports.HTMLElement = _HTMLElement3.default;
	exports.localStorage = _localStorage3.default;
	exports.location = _location3.default;

	// 暴露全局的 canvas
	var canvas = new _Canvas2.default();

	exports.canvas = canvas;
	exports.setTimeout = setTimeout;
	exports.setInterval = setInterval;
	exports.clearTimeout = clearTimeout;
	exports.clearInterval = clearInterval;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.cancelAnimationFrame = cancelAnimationFrame;

	/***/
},
/* 2 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	    screenWidth = _wx$getSystemInfoSync.screenWidth,
	    screenHeight = _wx$getSystemInfoSync.screenHeight,
	    devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;

	var innerWidth = exports.innerWidth = screenWidth;
	var innerHeight = exports.innerHeight = screenHeight;
	exports.devicePixelRatio = devicePixelRatio;
	var screen = exports.screen = {
		availWidth: innerWidth,
		availHeight: innerHeight
	};
	var performance = exports.performance = {
		now: function now() {
			return Date.now() / 1000;
		}
	};
	var ontouchstart = exports.ontouchstart = null;
	var ontouchmove = exports.ontouchmove = null;
	var ontouchend = exports.ontouchend = null;

	/***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HTMLCanvasElement = exports.HTMLImageElement = undefined;

	var _HTMLElement3 = __webpack_require__(4);

	var _HTMLElement4 = _interopRequireDefault(_HTMLElement3);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLImageElement = exports.HTMLImageElement = function (_HTMLElement) {
		_inherits(HTMLImageElement, _HTMLElement);

		function HTMLImageElement() {
			_classCallCheck(this, HTMLImageElement);

			return _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, 'img'));
		}

		return HTMLImageElement;
	}(_HTMLElement4.default);

	var HTMLCanvasElement = exports.HTMLCanvasElement = function (_HTMLElement2) {
		_inherits(HTMLCanvasElement, _HTMLElement2);

		function HTMLCanvasElement() {
			_classCallCheck(this, HTMLCanvasElement);

			return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'));
		}

		return HTMLCanvasElement;
	}(_HTMLElement4.default);

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _Element2 = __webpack_require__(5);

	var _Element3 = _interopRequireDefault(_Element2);

	var _util = __webpack_require__(8);

	var _WindowProperties = __webpack_require__(2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLElement = function (_Element) {
		_inherits(HTMLElement, _Element);

		function HTMLElement() {
			var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			_classCallCheck(this, HTMLElement);

			var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

			_this.className = '';
			_this.childern = [];
			_this.style = {
				width: _WindowProperties.innerWidth + 'px',
				height: _WindowProperties.innerHeight + 'px'
			};
			_this.insertBefore = _util.noop;
			_this.innerHTML = '';

			_this.tagName = tagName.toUpperCase();
			return _this;
		}

		_createClass(HTMLElement, [{
			key: 'setAttribute',
			value: function setAttribute(name, value) {
				this[name] = value;
			}
		}, {
			key: 'getAttribute',
			value: function getAttribute(name) {
				return this[name];
			}
		}, {
			key: 'getBoundingClientRect',
			value: function getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: _WindowProperties.innerWidth,
					height: _WindowProperties.innerHeight
				};
			}
		}, {
			key: 'focus',
			value: function focus() {}
		}, {
			key: 'clientWidth',
			get: function get() {
				var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;

				return Number.isNaN(ret) ? 0 : ret;
			}
		}, {
			key: 'clientHeight',
			get: function get() {
				var ret = parseInt(this.style.fontSize, 10);

				return Number.isNaN(ret) ? 0 : ret;
			}
		}]);

		return HTMLElement;
	}(_Element3.default);

	exports.default = HTMLElement;

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Node2 = __webpack_require__(6);

	var _Node3 = _interopRequireDefault(_Node2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ELement = function (_Node) {
		_inherits(ELement, _Node);

		function ELement() {
			_classCallCheck(this, ELement);

			var _this = _possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));

			_this.className = '';
			_this.children = [];
			return _this;
		}

		return ELement;
	}(_Node3.default);

	exports.default = ELement;

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _EventTarget2 = __webpack_require__(7);

	var _EventTarget3 = _interopRequireDefault(_EventTarget2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Node = function (_EventTarget) {
		_inherits(Node, _EventTarget);

		function Node() {
			_classCallCheck(this, Node);

			var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

			_this.childNodes = [];
			return _this;
		}

		_createClass(Node, [{
			key: 'appendChild',
			value: function appendChild(node) {
				if (node instanceof Node) {
					this.childNodes.push(node);
				} else {
					throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
				}
			}
		}, {
			key: 'cloneNode',
			value: function cloneNode() {
				var copyNode = Object.create(this);

				Object.assign(copyNode, this);
				return copyNode;
			}
		}, {
			key: 'removeChild',
			value: function removeChild(node) {
				var index = this.childNodes.findIndex(function (child) {
					return child === node;
				});

				if (index > -1) {
					return this.childNodes.splice(index, 1);
				}
				return null;
			}
		}]);

		return Node;
	}(_EventTarget3.default);

	exports.default = Node;

	/***/
},
/* 7 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _events = new WeakMap();

	var EventTarget = function () {
		function EventTarget() {
			_classCallCheck(this, EventTarget);

			_events.set(this, {});
		}

		_createClass(EventTarget, [{
			key: 'addEventListener',
			value: function addEventListener(type, listener) {
				var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				var events = _events.get(this);

				if (!events) {
					events = {};
					_events.set(this, events);
				}
				if (!events[type]) {
					events[type] = [];
				}
				events[type].push(listener);

				if (options.capture) {
					console.warn('EventTarget.addEventListener: options.capture is not implemented.');
				}
				if (options.once) {
					console.warn('EventTarget.addEventListener: options.once is not implemented.');
				}
				if (options.passive) {
					console.warn('EventTarget.addEventListener: options.passive is not implemented.');
				}
			}
		}, {
			key: 'removeEventListener',
			value: function removeEventListener(type, listener) {
				var listeners = _events.get(this)[type];

				if (listeners && listeners.length > 0) {
					for (var i = listeners.length; i--; i > 0) {
						if (listeners[i] === listener) {
							listeners.splice(i, 1);
							break;
						}
					}
				}
			}
		}, {
			key: 'dispatchEvent',
			value: function dispatchEvent() {
				var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var listeners = _events.get(this)[event.type];

				if (listeners) {
					for (var i = 0; i < listeners.length; i++) {
						listeners[i](event);
					}
				}
			}
		}]);

		return EventTarget;
	}();

	exports.default = EventTarget;

	/***/
},
/* 8 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.noop = noop;
	function noop() {}

	/***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Canvas;

	var _constructor = __webpack_require__(3);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _document = __webpack_require__(10);

	var _document2 = _interopRequireDefault(_document);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var hasModifiedCanvasPrototype = false;
	var hasInit2DContextConstructor = false;
	var hasInitWebGLContextConstructor = false;

	function Canvas() {
		var canvas = wx.createCanvas();

		canvas.type = 'canvas';

		canvas.__proto__.__proto__ = new _HTMLElement2.default('canvas');

		var _getContext = canvas.getContext;

		canvas.getBoundingClientRect = function () {
			var ret = {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
			return ret;
		};

		return canvas;
	}

	/***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _Image = __webpack_require__(11);

	var _Image2 = _interopRequireDefault(_Image);

	var _Audio = __webpack_require__(12);

	var _Audio2 = _interopRequireDefault(_Audio);

	var _Canvas = __webpack_require__(9);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	__webpack_require__(15);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	var events = {};

	var document = {
		readyState: 'complete',
		visibilityState: 'visible',
		documentElement: window,
		hidden: false,
		style: {},
		location: window.location,
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,

		head: new _HTMLElement2.default('head'),
		body: new _HTMLElement2.default('body'),

		createElement: function createElement(tagName) {
			if (tagName === 'canvas') {
				return new _Canvas2.default();
			} else if (tagName === 'audio') {
				return new _Audio2.default();
			} else if (tagName === 'img') {
				return new _Image2.default();
			}

			return new _HTMLElement2.default(tagName);
		},
		getElementById: function getElementById(id) {
			if (id === window.canvas.id) {
				return window.canvas;
			}
			return null;
		},
		getElementsByTagName: function getElementsByTagName(tagName) {
			if (tagName === 'head') {
				return [document.head];
			} else if (tagName === 'body') {
				return [document.body];
			} else if (tagName === 'canvas') {
				return [window.canvas];
			}
			return [];
		},
		querySelector: function querySelector(query) {
			if (query === 'head') {
				return document.head;
			} else if (query === 'body') {
				return document.body;
			} else if (query === 'canvas') {
				return window.canvas;
			} else if (query === '#' + window.canvas.id) {
				return window.canvas;
			}
			return null;
		},
		querySelectorAll: function querySelectorAll(query) {
			if (query === 'head') {
				return [document.head];
			} else if (query === 'body') {
				return [document.body];
			} else if (query === 'canvas') {
				return [window.canvas];
			}
			return [];
		},
		addEventListener: function addEventListener(type, listener) {
			if (!events[type]) {
				events[type] = [];
			}
			events[type].push(listener);
		},
		removeEventListener: function removeEventListener(type, listener) {
			var listeners = events[type];

			if (listeners && listeners.length > 0) {
				for (var i = listeners.length; i--; i > 0) {
					if (listeners[i] === listener) {
						listeners.splice(i, 1);
						break;
					}
				}
			}
		},
		dispatchEvent: function dispatchEvent(event) {
			var listeners = events[event.type];

			if (listeners) {
				for (var i = 0; i < listeners.length; i++) {
					listeners[i](event);
				}
			}
		}
	};

	exports.default = document;

	/***/
},
/* 11 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Image;
	function Image() {
		var image = wx.createImage();

		return image;
	}

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _HTMLAudioElement2 = __webpack_require__(13);

	var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HAVE_NOTHING = 0;
	var HAVE_METADATA = 1;
	var HAVE_CURRENT_DATA = 2;
	var HAVE_FUTURE_DATA = 3;
	var HAVE_ENOUGH_DATA = 4;

	var _innerAudioContext = new WeakMap();
	var _src = new WeakMap();
	var _loop = new WeakMap();
	var _autoplay = new WeakMap();

	var Audio = function (_HTMLAudioElement) {
		_inherits(Audio, _HTMLAudioElement);

		function Audio(url) {
			_classCallCheck(this, Audio);

			var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

			_this.HAVE_NOTHING = HAVE_NOTHING;
			_this.HAVE_METADATA = HAVE_METADATA;
			_this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
			_this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
			_this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
			_this.readyState = HAVE_NOTHING;

			_src.set(_this, '');

			var innerAudioContext = wx.createInnerAudioContext();

			_innerAudioContext.set(_this, innerAudioContext);

			innerAudioContext.onCanplay(function () {
				_this.dispatchEvent({ type: 'load' });
				_this.dispatchEvent({ type: 'loadend' });
				_this.dispatchEvent({ type: 'canplay' });
				_this.dispatchEvent({ type: 'canplaythrough' });
				_this.dispatchEvent({ type: 'loadedmetadata' });
				_this.readyState = HAVE_CURRENT_DATA;
			});
			innerAudioContext.onPlay(function () {
				_this.dispatchEvent({ type: 'play' });
			});
			innerAudioContext.onPause(function () {
				_this.dispatchEvent({ type: 'pause' });
			});
			innerAudioContext.onEnded(function () {
				_this.dispatchEvent({ type: 'ended' });
				_this.readyState = HAVE_ENOUGH_DATA;
			});
			innerAudioContext.onError(function () {
				_this.dispatchEvent({ type: 'error' });
			});

			if (url) {
				_innerAudioContext.get(_this).src = url;
			}
			return _this;
		}

		_createClass(Audio, [{
			key: 'load',
			value: function load() {
				console.warn('HTMLAudioElement.load() is not implemented.');
			}
		}, {
			key: 'play',
			value: function play() {
				_innerAudioContext.get(this).play();
			}
		}, {
			key: 'pause',
			value: function pause() {
				_innerAudioContext.get(this).pause();
			}
		}, {
			key: 'canPlayType',
			value: function canPlayType() {
				var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

				if (typeof mediaType !== 'string') {
					return '';
				}

				if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
					return 'probably';
				}
				return '';
			}
		}, {
			key: 'cloneNode',
			value: function cloneNode() {
				var newAudio = new Audio();
				newAudio.loop = _innerAudioContext.get(this).loop;
				newAudio.autoplay = _innerAudioContext.get(this).loop;
				newAudio.src = this.src;
				return newAudio;
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return _innerAudioContext.get(this).currentTime;
			},
			set: function set(value) {
				_innerAudioContext.get(this).seek(value);
			}
		}, {
			key: 'src',
			get: function get() {
				return _src.get(this);
			},
			set: function set(value) {
				_src.set(this, value);
				_innerAudioContext.get(this).src = value;
			}
		}, {
			key: 'loop',
			get: function get() {
				return _innerAudioContext.get(this).loop;
			},
			set: function set(value) {
				_innerAudioContext.get(this).loop = value;
			}
		}, {
			key: 'autoplay',
			get: function get() {
				return _innerAudioContext.get(this).autoplay;
			},
			set: function set(value) {
				_innerAudioContext.get(this).autoplay = value;
			}
		}, {
			key: 'paused',
			get: function get() {
				return _innerAudioContext.get(this).paused;
			}
		}]);

		return Audio;
	}(_HTMLAudioElement3.default);

	exports.default = Audio;

	/***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _HTMLMediaElement2 = __webpack_require__(14);

	var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLAudioElement = function (_HTMLMediaElement) {
		_inherits(HTMLAudioElement, _HTMLMediaElement);

		function HTMLAudioElement() {
			_classCallCheck(this, HTMLAudioElement);

			return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, 'audio'));
		}

		return HTMLAudioElement;
	}(_HTMLMediaElement3.default);

	exports.default = HTMLAudioElement;

	/***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _HTMLElement2 = __webpack_require__(4);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLMediaElement = function (_HTMLElement) {
		_inherits(HTMLMediaElement, _HTMLElement);

		function HTMLMediaElement(type) {
			_classCallCheck(this, HTMLMediaElement);

			return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type));
		}

		_createClass(HTMLMediaElement, [{
			key: 'addTextTrack',
			value: function addTextTrack() {}
		}, {
			key: 'captureStream',
			value: function captureStream() {}
		}, {
			key: 'fastSeek',
			value: function fastSeek() {}
		}, {
			key: 'load',
			value: function load() {}
		}, {
			key: 'pause',
			value: function pause() {}
		}, {
			key: 'play',
			value: function play() {}
		}]);

		return HTMLMediaElement;
	}(_HTMLElement3.default);

	exports.default = HTMLMediaElement;

	/***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(16);

	/***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _document = __webpack_require__(10);

	var _document2 = _interopRequireDefault(_document);

	var _util = __webpack_require__(8);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var TouchEvent = function TouchEvent(type) {
		_classCallCheck(this, TouchEvent);

		this.target = window.canvas;
		this.currentTarget = window.canvas;
		this.touches = [];
		this.targetTouches = [];
		this.changedTouches = [];
		this.preventDefault = _util.noop;
		this.stopPropagation = _util.noop;

		this.type = type;
	};

	function touchEventHandlerFactory(type) {
		return function (event) {
			var touchEvent = new TouchEvent(type);

			touchEvent.touches = event.touches;
			touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
			touchEvent.changedTouches = event.changedTouches;
			touchEvent.timeStamp = event.timeStamp;
			_document2.default.dispatchEvent(touchEvent);
		};
	}

	wx.onTouchStart(touchEventHandlerFactory('touchstart'));
	wx.onTouchMove(touchEventHandlerFactory('touchmove'));
	wx.onTouchEnd(touchEventHandlerFactory('touchend'));
	wx.onTouchCancel(touchEventHandlerFactory('touchcancel'));

	/***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _util = __webpack_require__(8);

	// TODO 需要 wx.getSystemInfo 获取更详细信息
	var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	    platform = _wx$getSystemInfoSync.platform;

	var navigator = {
		platform: platform,
		language: 'zh-cn',
		appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
		userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
		onLine: true, // TODO 用 wx.getNetworkStateChange 和 wx.onNetworkStateChange 来返回真实的状态

		// TODO 用 wx.getLocation 来封装 geolocation
		geolocation: {
			getCurrentPosition: _util.noop,
			watchPosition: _util.noop,
			clearWatch: _util.noop
		}
	};

	exports.default = navigator;

	/***/
},
/* 18 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _url = new WeakMap();
	var _method = new WeakMap();
	var _requestHeader = new WeakMap();
	var _responseHeader = new WeakMap();
	var _requestTask = new WeakMap();

	function _triggerEvent(type) {
		if (typeof this['on' + type] === 'function') {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			this['on' + type].apply(this, args);
		}
	}

	function _changeReadyState(readyState) {
		this.readyState = readyState;
		_triggerEvent.call(this, 'readystatechange');
	}

	var XMLHttpRequest = function () {
		// TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
		function XMLHttpRequest() {
			_classCallCheck(this, XMLHttpRequest);

			this.onabort = null;
			this.onerror = null;
			this.onload = null;
			this.onloadstart = null;
			this.onprogress = null;
			this.ontimeout = null;
			this.onloadend = null;
			this.onreadystatechange = null;
			this.readyState = 0;
			this.response = null;
			this.responseText = null;
			this.responseType = '';
			this.responseXML = null;
			this.status = 0;
			this.statusText = '';
			this.upload = {};
			this.withCredentials = false;

			_requestHeader.set(this, {
				'content-type': 'application/x-www-form-urlencoded'
			});
			_responseHeader.set(this, {});
		}

		/*
   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
   */

		_createClass(XMLHttpRequest, [{
			key: 'abort',
			value: function abort() {
				var myRequestTask = _requestTask.get(this);

				if (myRequestTask) {
					myRequestTask.abort();
				}
			}
		}, {
			key: 'getAllResponseHeaders',
			value: function getAllResponseHeaders() {
				var responseHeader = _responseHeader.get(this);

				return Object.keys(responseHeader).map(function (header) {
					return header + ': ' + responseHeader[header];
				}).join('\n');
			}
		}, {
			key: 'getResponseHeader',
			value: function getResponseHeader(header) {
				return _responseHeader.get(this)[header];
			}
		}, {
			key: 'open',
			value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
				_method.set(this, method);
				_url.set(this, url);
				_changeReadyState.call(this, XMLHttpRequest.OPENED);
			}
		}, {
			key: 'overrideMimeType',
			value: function overrideMimeType() {}
		}, {
			key: 'send',
			value: function send() {
				var _this = this;

				var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

				if (this.readyState !== XMLHttpRequest.OPENED) {
					throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
				} else {
					wx.request({
						data: data,
						url: _url.get(this),
						method: _method.get(this),
						header: _requestHeader.get(this),
						responseType: this.responseType,
						success: function success(_ref) {
							var data = _ref.data,
							    statusCode = _ref.statusCode,
							    header = _ref.header;

							if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
								try {
									data = JSON.stringify(data);
								} catch (e) {
									data = data;
								}
							}

							_this.status = statusCode;
							_responseHeader.set(_this, header);
							_triggerEvent.call(_this, 'loadstart');
							_changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
							_changeReadyState.call(_this, XMLHttpRequest.LOADING);

							_this.response = data;

							if (data instanceof ArrayBuffer) {
								_this.responseText = '';
								var bytes = new Uint8Array(data);
								var len = bytes.byteLength;

								for (var i = 0; i < len; i++) {
									_this.responseText += String.fromCharCode(bytes[i]);
								}
							} else {
								_this.responseText = data;
							}
							_changeReadyState.call(_this, XMLHttpRequest.DONE);
							_triggerEvent.call(_this, 'load');
							_triggerEvent.call(_this, 'loadend');
						},
						fail: function fail(_ref2) {
							var errMsg = _ref2.errMsg;

							// TODO 规范错误
							if (errMsg.indexOf('abort') !== -1) {
								_triggerEvent.call(_this, 'abort');
							} else {
								_triggerEvent.call(_this, 'error', errMsg);
							}
							_triggerEvent.call(_this, 'loadend');
						}
					});
				}
			}
		}, {
			key: 'setRequestHeader',
			value: function setRequestHeader(header, value) {
				var myHeader = _requestHeader.get(this);

				myHeader[header] = value;
				_requestHeader.set(this, myHeader);
			}
		}]);

		return XMLHttpRequest;
	}();

	XMLHttpRequest.UNSEND = 0;
	XMLHttpRequest.OPENED = 1;
	XMLHttpRequest.HEADERS_RECEIVED = 2;
	XMLHttpRequest.LOADING = 3;
	XMLHttpRequest.DONE = 4;
	exports.default = XMLHttpRequest;

	/***/
},
/* 19 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _socketTask = new WeakMap();

	var WebSocket = function () {
		// TODO 更新 binaryType
		// The connection is in the process of closing.
		// The connection is not yet open.
		function WebSocket(url) {
			var _this = this;

			var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			_classCallCheck(this, WebSocket);

			this.binaryType = '';
			this.bufferedAmount = 0;
			this.extensions = '';
			this.onclose = null;
			this.onerror = null;
			this.onmessage = null;
			this.onopen = null;
			this.protocol = '';
			this.readyState = 3;

			if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
				throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
			}

			this.url = url;
			this.readyState = WebSocket.CONNECTING;

			var socketTask = wx.connectSocket({
				url: url,
				protocols: Array.isArray(protocols) ? protocols : [protocols]
			});

			_socketTask.set(this, socketTask);

			socketTask.onClose(function (res) {
				_this.readyState = WebSocket.CLOSED;
				if (typeof _this.onclose === 'function') {
					_this.onclose(res);
				}
			});

			socketTask.onMessage(function (res) {
				if (typeof _this.onmessage === 'function') {
					_this.onmessage(res);
				}
			});

			socketTask.onOpen(function () {
				_this.readyState = WebSocket.OPEN;
				if (typeof _this.onopen === 'function') {
					_this.onopen();
				}
			});

			socketTask.onError(function (res) {
				if (typeof _this.onerror === 'function') {
					_this.onerror(new Error(res.errMsg));
				}
			});

			return this;
		} // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
		// TODO 更新 bufferedAmount
		// The connection is closed or couldn't be opened.

		// The connection is open and ready to communicate.


		_createClass(WebSocket, [{
			key: 'close',
			value: function close(code, reason) {
				this.readyState = WebSocket.CLOSING;
				var socketTask = _socketTask.get(this);

				socketTask.close({
					code: code,
					reason: reason
				});
			}
		}, {
			key: 'send',
			value: function send(data) {
				if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
					throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
				}

				var socketTask = _socketTask.get(this);

				socketTask.send({
					data: data
				});
			}
		}]);

		return WebSocket;
	}();

	WebSocket.CONNECTING = 0;
	WebSocket.OPEN = 1;
	WebSocket.CLOSING = 2;
	WebSocket.CLOSED = 3;
	exports.default = WebSocket;

	/***/
},
/* 20 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	/*
  * TODO 使用 wx.readFile 来封装 FileReader
  */
	var FileReader = function FileReader() {
		_classCallCheck(this, FileReader);
	};

	exports.default = FileReader;

	/***/
},
/* 21 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var localStorage = {
		get length() {
			var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
			    keys = _wx$getStorageInfoSyn.keys;

			return keys.length;
		},

		key: function key(n) {
			var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
			    keys = _wx$getStorageInfoSyn2.keys;

			return keys[n];
		},
		getItem: function getItem(key) {
			return wx.getStorageSync(key);
		},
		setItem: function setItem(key, value) {
			return wx.setStorageSync(key, value);
		},
		removeItem: function removeItem(key) {
			wx.removeStorageSync(key);
		},
		clear: function clear() {
			wx.clearStorageSync();
		}
	};

	exports.default = localStorage;

	/***/
},
/* 22 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var location = {
		href: 'game.js',
		reload: function reload() {}
	};

	exports.default = location;

	/***/
}]
/******/);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _battlePkPage = __webpack_require__(43);

var _battlePkPage2 = _interopRequireDefault(_battlePkPage);

var _battleGamePage = __webpack_require__(42);

var _battleGamePage2 = _interopRequireDefault(_battleGamePage);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BattleCtrl = function () {
  function BattleCtrl(game, modeCtrl) {
    _classCallCheck(this, BattleCtrl);

    this.name = 'battlePage';
    this.game = game;
    this.gameCtrl = this.game.gameCtrl;
    this.model = this.game.gameModel;
    this.view = this.game.gameView;
    this.modeCtrl = modeCtrl;
    this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
    this.currentPage = null;
    this.pkPage = new _battlePkPage2.default(game);
    this.gamePage = new _battleGamePage2.default(game);

    this.shareTicket = '';
    this.pkId = '';
    this.shareInfoTimeout = null;
    this.battleScore = undefined;
  }

  _createClass(BattleCtrl, [{
    key: 'init',
    value: function init(options) {
      var sessionId = this.model.getSessionId();
      this.shareTicket = options.shareTicket;
      this.pkId = options.query.pkId;
      this.model.setStage('');
      wx.showLoading();
      if (!sessionId) {
        this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
      } else {
        this.afterLogin(true);
      }
    }
  }, {
    key: 'afterLogin',
    value: function afterLogin(success) {
      var _this = this;

      if (success) {
        this.setShareInfoTimeout();

        // 换取rawdata
        wx.getShareInfo({
          shareTicket: this.shareTicket,
          success: function success(res) {

            // 如果定时器还没有触发，就取消定时器
            if (_this.shareInfoTimeout != null) {
              // console.log('没有触发定时器')
              _this.clearShareInfoTimeout();
            } else {
              // console.log('已经触发定时器')
              return;
            }
            _this.model.setShareTicket(res.rawData);

            // console.log('wx.getShareInfo success group', res)
            _this.gotoBattlePage();
            _this.gameCtrl.loginBattle(1);
          },
          fail: function fail(res) {

            // 如果定时器还没有触发，就取消定时器
            if (_this.shareInfoTimeout != null) {
              _this.clearShareInfoTimeout();
              // console.log('没有触发定时器')
            } else {
              // console.log('已经触发定时器')
              return;
            }

            // 失败就是个人
            _this.gotoBattlePage();
            _this.gameCtrl.loginBattle(0);
          }
        });
      } else {
        this.goToBattleFail();
      }
    }
  }, {
    key: 'gotoBattlePage',
    value: function gotoBattlePage() {

      // 拉分数
      _network2.default.getBattleData(this.gotoBattlePageAfterHaveData.bind(this), this.pkId);
    }
  }, {
    key: 'gotoBattlePageAfterHaveData',
    value: function gotoBattlePageAfterHaveData(success, res) {
      wx.hideLoading();
      if (success) {
        var pkList = [];
        if (res.data.challenger.length) {
          res.data.challenger.forEach(function (el) {
            pkList.push({
              headimg: el.headimg,
              is_self: el.is_self ? 1 : 0,
              nickname: el.nickname,
              score_info: [{
                score: el.score
              }]
            });
          }, this);
        }

        pkList.sort(function (a, b) {
          return b.score_info[0].score - a.score_info[0].score;
        });

        var obj = {
          data: {
            organizerInfo: {
              headimg: res.data.owner.headimg,
              nickname: res.data.owner.nickname,
              score_info: [{
                score: res.data.owner.score
              }],
              // create_time: res.data.create_time,
              left_time: res.data.left_time,
              is_self: res.data.is_owner ? 1 : 0
            },
            pkListInfo: pkList,
            gg_score: this.battleScore
          }
        };

        if (this.currentPage) {
          this.currentPage.hide();
        }
        this.pkPage.show(obj);
        this.model.setStage(this.pkPage.name);
        this.currentPage = this.pkPage;

        this.gameCtrl.showPkPage(res.data.owner.score);
      } else {
        this.goToBattleFail();
      }
    }
  }, {
    key: 'goToBattleFail',
    value: function goToBattleFail() {
      this.view.showGoToBattleFail();
      this.modeCtrl.changeMode('singleCtrl');
    }
  }, {
    key: 'setShareInfoTimeout',
    value: function setShareInfoTimeout() {
      this.shareInfoTimeout = setTimeout(this.handleShareInfoTimeout.bind(this), 5000);
    }
  }, {
    key: 'clearShareInfoTimeout',
    value: function clearShareInfoTimeout() {
      if (this.shareInfoTimeout != null) {
        clearTimeout(this.shareInfoTimeout);
        this.shareInfoTimeout = null;
      }
    }
  }, {
    key: 'handleShareInfoTimeout',
    value: function handleShareInfoTimeout() {
      this.clearShareInfoTimeout();
      this.goToBattleFail();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.currentPage) {
        this.currentPage.hide();
      }
      this.model.setStage('');
      wx.hideLoading();
      this.shareTicket = '';
      this.pkId = '';
      this.clearShareInfoTimeout();
      this.model.clearShareTicket();
      this.game.resetScene();
      this.battleScore = undefined;
    }
  }, {
    key: 'battlePlay',
    value: function battlePlay(pk) {
      if (pk) {
        if (this.currentPage) {
          this.currentPage.hide();
        }
        this.gamePage.show();
        this.game.replayGame();
        this.model.setStage(this.gamePage.name);
        this.currentPage = this.gamePage;
      } else {
        this.modeCtrl.directPlaySingleGame();
        this.gameCtrl.battleToSingle();
      }
    }
  }, {
    key: 'showGameOverPage',
    value: function showGameOverPage() {
      if (this.currentPage) {
        this.currentPage.hide();
      }
      this.model.setStage('');
      this.currentPage = null;
      var score = this.model.currentScore;
      this.battleScore = score;

      // 先上传分数，然后再拉分数
      wx.showLoading();
      _network2.default.updatepkinfo(this.gotoBattlePageAgain.bind(this), this.pkId, score);
    }
  }, {
    key: 'gotoBattlePageAgain',
    value: function gotoBattlePageAgain(scoreUpLoad) {
      if (!scoreUpLoad) {
        this.view.showUploadPkScoreFail();
      }

      this.gotoBattlePage();
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      return;
    }
  }]);

  return BattleCtrl;
}();

exports.default = BattleCtrl;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _groupPage = __webpack_require__(44);

var _groupPage2 = _interopRequireDefault(_groupPage);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupShareCtrl = function () {
  function GroupShareCtrl(game, modeCtrl) {
    _classCallCheck(this, GroupShareCtrl);

    this.name = 'groupShare';
    this.game = game;
    this.gameCtrl = this.game.gameCtrl;
    this.model = this.game.gameModel;
    this.view = this.game.gameView;
    this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
    this.modeCtrl = modeCtrl;
    this.groupPage = new _groupPage2.default(game);

    this.shareTicket = '';
    this.shareInfoTimeout = null;
  }

  _createClass(GroupShareCtrl, [{
    key: 'init',
    value: function init(options) {
      // console.log('init groupShareCtrl')
      // 服务器
      var serverConfig = this.model.getServerConfig();
      if (serverConfig) {
        if (!serverConfig.group_score_switch) {
          this.view.showServeConfigForbiddenGroupShare();
          this.modeCtrl.changeMode('singleCtrl');
          return;
        }
      }
      this.model.setStage('');
      var sessionId = this.model.getSessionId();
      this.shareTicket = options.shareTicket;
      wx.showLoading();
      if (!sessionId) {
        this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
      } else {
        this.afterLogin(true);
      }
    }
  }, {
    key: 'afterLogin',
    value: function afterLogin(success) {
      var _this = this;

      if (success) {
        this.setShareInfoTimeout();
        // 换取rawdata
        wx.getShareInfo({
          shareTicket: this.shareTicket,
          success: function success(res) {

            // 如果定时器还没有触发，就取消定时器
            if (_this.shareInfoTimeout != null) {
              _this.clearShareInfoTimeout();
              // console.log('没有触发定时器')
            } else {
              // console.log('已经触发定时器')
              return;
            }

            _this.model.setShareTicket(res.rawData);

            // 获取群数据
            _network2.default.getGroupScore(function (success, res) {

              // 如果成功则显示好友排行
              if (success) {
                var list = res.data.user_info || [];
                var myUserInfo = res.data.my_user_info || {};
                _this.showGroupRankPage(list, myUserInfo);
              } else {

                // 如果失败，回到单机模式
                // this.handleNetworkFucked(true, '数据异常，点击确定进入游戏')
                _this.goToGroupShareFail();
              }
              wx.hideLoading();
            });
          },
          fail: function fail(res) {

            // 如果定时器还没有触发，就取消定时器
            if (_this.shareInfoTimeout != null) {
              _this.clearShareInfoTimeout();
              // console.log('没有触发定时器')
            } else {
              // console.log('已经触发定时器')
              return;
            }

            wx.hideLoading();
            _this.goToGroupShareFail('群里的群分享才有效哦~');
            // this.handleNetworkFucked(true, '数据异常，点击确定进入游戏')
          }
        });
      } else {
        wx.hideLoading();
        this.goToGroupShareFail();
      }
    }
  }, {
    key: 'setShareInfoTimeout',
    value: function setShareInfoTimeout() {
      this.shareInfoTimeout = setTimeout(this.handleShareInfoTimeout.bind(this), 5000);
    }
  }, {
    key: 'clearShareInfoTimeout',
    value: function clearShareInfoTimeout() {
      if (this.shareInfoTimeout != null) {
        clearTimeout(this.shareInfoTimeout);
        this.shareInfoTimeout = null;
      }
    }
  }, {
    key: 'handleShareInfoTimeout',
    value: function handleShareInfoTimeout() {
      this.clearShareInfoTimeout();
      this.goToGroupShareFail();
    }
  }, {
    key: 'goToGroupShareFail',
    value: function goToGroupShareFail(wording) {
      this.view.showGroupShareFail(wording);
      this.modeCtrl.changeMode('singleCtrl');
    }
  }, {
    key: 'showGroupRankPage',
    value: function showGroupRankPage(list, myUserInfo) {
      this.groupPage.show(list, myUserInfo);
      this.model.setStage(this.groupPage.name);
      this.currentPage = this.groupPage;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      wx.hideLoading();
      if (this.currentPage) {
        this.currentPage.hide();
      }
      this.model.setStage('');
      this.shareTicket = '';
      this.model.clearShareTicket();
      this.clearShareInfoTimeout();
      this.game.resetScene();
    }
  }, {
    key: 'groupPlayGame',
    value: function groupPlayGame() {
      this.modeCtrl.directPlaySingleGame();
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      return;
    }
  }]);

  return GroupShareCtrl;
}();

exports.default = GroupShareCtrl;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singleCtrl = __webpack_require__(10);

var _singleCtrl2 = _interopRequireDefault(_singleCtrl);

var _groupShareCtrl = __webpack_require__(33);

var _groupShareCtrl2 = _interopRequireDefault(_groupShareCtrl);

var _battleCtrl = __webpack_require__(32);

var _battleCtrl2 = _interopRequireDefault(_battleCtrl);

var _observeCtrl = __webpack_require__(36);

var _observeCtrl2 = _interopRequireDefault(_observeCtrl);

var _playerCtrl = __webpack_require__(37);

var _playerCtrl2 = _interopRequireDefault(_playerCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModeCtrl = function () {
  function ModeCtrl(game) {
    _classCallCheck(this, ModeCtrl);

    this.game = game;
    this.singleCtrl = new _singleCtrl2.default(game, this);
    this.groupShareCtrl = new _groupShareCtrl2.default(game, this);
    this.battleCtrl = new _battleCtrl2.default(game, this);
    this.observeCtrl = new _observeCtrl2.default(game, this);
    this.playerCtrl = new _playerCtrl2.default(game, this);

    this.model = game.gameModel;
    this.gameCtrl = game.gameCtrl;
    this.currentCtrl = null;
  }

  _createClass(ModeCtrl, [{
    key: 'initFirstPage',
    value: function initFirstPage(options) {
      var mode = this.model.getMode();
      switch (mode) {
        case 'single':
          this.currentCtrl = this.singleCtrl;
          this.singleCtrl.init(options);
          this.gameCtrl.netWorkLogin();
          break;
        case 'groupShare':
          this.currentCtrl = this.groupShareCtrl;
          this.groupShareCtrl.init(options);
          break;
        case 'battle':
          this.currentCtrl = this.battleCtrl;
          this.battleCtrl.init(options);
          break;
        case 'observe':
          this.currentCtrl = this.observeCtrl;
          this.observeCtrl.init(options);
          break;

        default:
          this.currentCtrl = this.singleCtrl;
          this.model.setMode('single');
          this.singleCtrl.init(options);
          this.gameCtrl.netWorkLogin();
          // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          // console.log('InitFirstPage 找不到对应mode')
          // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          break;
      }
    }
  }, {
    key: 'reInitFirstPage',
    value: function reInitFirstPage(options) {
      if (this.currentCtrl) {
        this.currentCtrl.destroy();
        this.currentCtrl = null;
      }
      this.gameCtrl.queryCtrl.identifyMode(options);
      this.initFirstPage(options);
    }
  }, {
    key: 'clickStart',
    value: function clickStart() {
      if (this.currentCtrl) {
        if (this.currentCtrl.clickStart) {
          this.currentCtrl.clickStart();
        }
      }
    }
  }, {
    key: 'showGameOverPage',
    value: function showGameOverPage() {
      if (this.currentCtrl) {
        if (this.currentCtrl.showGameOverPage) {
          this.currentCtrl.showGameOverPage();
        }
      }
    }
  }, {
    key: 'gameOverClickReplay',
    value: function gameOverClickReplay() {
      if (this.currentCtrl) {
        if (this.currentCtrl.gameOverClickReplay) {
          this.currentCtrl.gameOverClickReplay();
        } else {
          this.game.handleWxOnError({
            message: 'cannot Find this.currentCtrl.gameOverClickReplay',
            stack: this.game.mode + '' + this.game.stage
          });
        }
      }
    }
  }, {
    key: 'showFriendRank',
    value: function showFriendRank() {
      if (this.currentCtrl) {
        if (this.currentCtrl.showFriendRank) {
          this.currentCtrl.showFriendRank();
        }
      }
    }
  }, {
    key: 'friendRankReturn',
    value: function friendRankReturn() {
      if (this.currentCtrl) {
        if (this.currentCtrl.friendRankReturn) {
          this.currentCtrl.friendRankReturn();
        }
      }
    }
  }, {
    key: 'shareGroupRank',
    value: function shareGroupRank() {
      if (this.currentCtrl) {
        if (this.currentCtrl.shareGroupRank) {
          this.currentCtrl.shareGroupRank();
        }
      }
    }
  }, {
    key: 'clickRank',
    value: function clickRank() {
      if (this.currentCtrl) {
        if (this.currentCtrl.clickRank) {
          this.currentCtrl.clickRank();
        }
      }
    }
  }, {
    key: 'shareBattleCard',
    value: function shareBattleCard() {
      if (this.currentCtrl) {
        if (this.currentCtrl.shareBattleCard) {
          this.currentCtrl.shareBattleCard();
        }
      }
    }
  }, {
    key: 'changeMode',
    value: function changeMode(name) {
      if (this.currentCtrl) {
        if (this.currentCtrl.destroy) {
          this.currentCtrl.destroy();
        }
      }
      this.model.setMode(this[name].name);
      this.currentCtrl = this[name];
      this[name].init();
    }
  }, {
    key: 'singleChangeToPlayer',
    value: function singleChangeToPlayer() {
      // 因为是单机转主播，所以不需要hide
      this.model.setMode(this.playerCtrl.name);
      this.currentCtrl = this.playerCtrl;
      this.playerCtrl.init();
    }
  }, {
    key: 'groupPlayGame',
    value: function groupPlayGame() {
      if (this.currentCtrl) {
        if (this.currentCtrl.groupPlayGame) {
          this.currentCtrl.groupPlayGame();
        }
      }
    }
  }, {
    key: 'directPlaySingleGame',
    value: function directPlaySingleGame() {
      if (this.currentCtrl) {
        this.currentCtrl.destroy();
      }
      this.model.setMode(this.singleCtrl.name);
      this.currentCtrl = this.singleCtrl;
      this.singleCtrl.clickStart();
    }
  }, {
    key: 'battlePlay',
    value: function battlePlay(pk) {
      if (this.currentCtrl) {
        if (this.currentCtrl.battlePlay) {
          this.currentCtrl.battlePlay(pk);
        }
      }
    }
  }, {
    key: 'shareObservCard',
    value: function shareObservCard() {
      if (this.currentCtrl) {
        if (this.currentCtrl.shareObservCard) {
          this.currentCtrl.shareObservCard();
        }
      }
    }
  }, {
    key: 'socketJoinSuccess',
    value: function socketJoinSuccess(success) {
      if (this.currentCtrl) {
        if (this.currentCtrl.socketJoinSuccess) {
          this.currentCtrl.socketJoinSuccess(success);
        }
      }
    }
  }, {
    key: 'showPlayerGG',
    value: function showPlayerGG(data) {
      if (this.currentCtrl) {
        if (this.currentCtrl.showPlayerGG) {
          this.currentCtrl.showPlayerGG(data);
        }
      }
    }
  }, {
    key: 'showPlayerWaiting',
    value: function showPlayerWaiting() {
      if (this.currentCtrl) {
        if (this.currentCtrl.showPlayerWaiting) {
          this.currentCtrl.showPlayerWaiting();
        }
      }
    }
  }, {
    key: 'onPlayerOut',
    value: function onPlayerOut() {
      if (this.currentCtrl) {
        if (this.currentCtrl.onPlayerOut) {
          this.currentCtrl.onPlayerOut();
        } else {
          this.game.handleWxOnError({
            message: 'cannot Find this.currentCtrl.onPlayerOut',
            stack: this.game.mode + '' + this.game.stage
          });
        }
      }
    }
  }, {
    key: 'onViewerStart',
    value: function onViewerStart() {
      if (this.currentCtrl) {
        if (this.currentCtrl.onViewerStart) {
          this.currentCtrl.onViewerStart();
        }
      }
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      if (this.currentCtrl) {
        if (this.currentCtrl.wxOnhide) {
          this.currentCtrl.wxOnhide();
        }
      }
    }
  }]);

  return ModeCtrl;
}();

exports.default = ModeCtrl;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SERVERCONFIG = 60000;

var NetworkCtrl = function () {
  function NetworkCtrl(game) {
    _classCallCheck(this, NetworkCtrl);

    this.game = game;
    this.gameCtrl = game.gameCtrl;
    this.model = game.gameModel;
    this.loginCb = null;

    // 服务器拉取配置的定时器
    this.serverConfigInterval = null;

    this.historyTimes = this.game.historyTimes;
  }

  _createClass(NetworkCtrl, [{
    key: 'netWorkLogin',
    value: function netWorkLogin(cb) {
      if (cb) {
        this.loginCb = cb;
      }
      _network2.default.requestLogin(this.afterRequestLogin.bind(this));
    }
  }, {
    key: 'afterRequestLogin',
    value: function afterRequestLogin(success) {
      if (this.loginCb) {
        this.loginCb(success);
      }

      if (success) {

        // 拉取用户头像
        _network2.default.getUserInfo();

        // 获取好友排行
        _network2.default.requestFriendsScore(this.updateFriendsScore.bind(this));

        // 拉配置,每分钟拉一次
        this.requestServerInit();

        // 抛出事件
        this.gameCtrl.onLoginSuccess();
      }
    }
  }, {
    key: 'requestServerInit',
    value: function requestServerInit() {
      _network2.default.requestInit();
      this.serverConfigInterval = setInterval(_network2.default.requestInit.bind(_network2.default), SERVERCONFIG);
    }
  }, {
    key: 'clearServerInit',
    value: function clearServerInit() {
      if (this.serverConfigInterval) {
        clearInterval(this.serverConfigInterval);
      }
    }
  }, {
    key: 'upDateFriendsScoreList',
    value: function upDateFriendsScoreList() {
      var sessionId = this.model.getSessionId();
      if (sessionId) {
        // 获取好友排行
        _network2.default.requestFriendsScore(this.updateFriendsScore2.bind(this));
      }
    }
  }, {
    key: 'updateFriendsScore',
    value: function updateFriendsScore(res, data) {
      if (res) {
        // this.friendsScore = data.user_info

        // 对好友分数进行排序
        data.user_info.sort(function (el1, el2) {
          var score1 = el1.week_best_score || 0;
          var score2 = el2.week_best_score || 0;
          return -score1 + score2;
        });

        this.model.saveFriendsScore(data.user_info);

        if (data.my_user_info) {

          var netWorkHighestScore = data.my_user_info.history_best_score || 0;
          if (netWorkHighestScore > this.model.highestScore) {
            // console.log('update highest score')
            this.model.saveHeighestScore(netWorkHighestScore);
          } else if (netWorkHighestScore < this.model.highestScore) {
            var actionData = this.model.getActionData();
            var now = Date.now();
            if (actionData) {
              if (actionData.ts > now) {
                var verifyData = actionData.data;
                this.game.historyTimes.upLoadHistoryTimes(this.model.highestScore, verifyData);
              }
            }
          }

          // 更新本周最高分
          var weekBestScore = data.my_user_info.week_best_score || 0;
          // console.log('update weekBestScore history times')
          this.model.weekBestScore = weekBestScore;
          this.model.saveWeekBestScore(weekBestScore);
          var times = data.my_user_info.times;
          this.historyTimes.verifyScore(times);
          // this.grade = data.my_user_info.grade
        }

        // 加测试数据
        // 设置假数据
        // console.log(this.friendsScore)
        // for (var i = 0; i < 1000; i++) {
        //   this.friendsScore.push({
        //     nickname: 'tunny',
        //     headimg: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJFbxurAsxCCqN5GLcc8qQPboZN8dcDcsQkhmgicErTosqKfbthk6Ejyoib7h0iaZBT156Vbviczpic4QQ/0',
        //     score_info: [
        //       { type: 0, score: i }
        //     ],
        //   })
        // }
      }
    }
  }, {
    key: 'updateFriendsScore2',
    value: function updateFriendsScore2(res, data) {
      if (res) {

        // 对好友分数进行排序
        data.user_info.sort(function (el1, el2) {
          var score1 = el1.week_best_score || 0;
          var score2 = el2.week_best_score || 0;
          return -score1 + score2;
        });

        this.model.saveFriendsScore(data.user_info);
      }
    }
  }, {
    key: 'uploadScore',
    value: function uploadScore(score) {
      _network2.default.requestSettlement(score);
    }
  }]);

  return NetworkCtrl;
}();

exports.default = NetworkCtrl;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observeWaiting = __webpack_require__(48);

var _observeWaiting2 = _interopRequireDefault(_observeWaiting);

var _observeGg = __webpack_require__(46);

var _observeGg2 = _interopRequireDefault(_observeGg);

var _observeOut = __webpack_require__(47);

var _observeOut2 = _interopRequireDefault(_observeOut);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SYCTIME = 10000;
var TIMEOUT = 9000;

var ObserveCtrl = function () {
  function ObserveCtrl(game, modeCtrl) {
    _classCallCheck(this, ObserveCtrl);

    this.game = game;
    this.name = 'observe';
    this.gameCtrl = this.game.gameCtrl;
    this.model = this.game.gameModel;
    this.view = this.game.gameView;
    this.modeCtrl = modeCtrl;
    this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
    this.gameSocket = this.game.gameSocket;
    this.currentPage = null;

    this.waitingPage = new _observeWaiting2.default(game);
    this.ggPage = new _observeGg2.default(game);
    this.outPage = new _observeOut2.default(game);

    this.gameId = '';
    this.longTimeout = null;
  }

  _createClass(ObserveCtrl, [{
    key: 'init',
    value: function init(options) {
      // TODO 如果服务器下发的配置禁止围观，返回单机游戏
      var serverConfig = this.model.getServerConfig();
      if (serverConfig) {
        if (!serverConfig.audience_mode_switch) {
          this.view.showServeConfigForbiddenObserveMode();
          this.modeCtrl.changeMode('singleCtrl');
          return;
        }
      }
      this.model.setStage('');
      var sessionId = this.model.getSessionId();
      this.gameId = options.query.gameId;
      this.model.setObserveInfo({
        headimg: options.query.headimg,
        nickName: options.query.nickName
      });
      this.model.setGameId(this.gameId);

      wx.showLoading();
      if (!sessionId) {
        this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
      } else {
        this.afterLogin(true);
      }
    }
  }, {
    key: 'afterLogin',
    value: function afterLogin(success) {
      if (success) {
        this.setLongTimeHandle();
        this.gameSocket.connectSocket();
        this.model.setStage('');
      } else {
        this.goToObserveStateFail();
      }
    }
  }, {
    key: 'socketJoinSuccess',
    value: function socketJoinSuccess(success) {

      // 清除定时器
      this.clearLongTimeHandle();
      wx.hideLoading();
      if (success) {

        // 切换页面
        this.waitingPage.show();
        this.model.setStage(this.waitingPage.name);
        this.currentPage = this.waitingPage;

        // 清UI分数
        this.game.UI.setScore(0);

        // 设置轮询，查主播状态
        this.checkPlayerTimeout = setInterval(this.checkPlayerState.bind(this), SYCTIME);
      } else {

        // 展示主播直播结束
        this.showPlayerDead();
      }
    }
  }, {
    key: 'goToObserveStateFail',
    value: function goToObserveStateFail() {

      // 提示wording
      this.view.showObserveStateFail();

      // 跳回单机主页
      this.modeCtrl.changeMode('singleCtrl');
    }
  }, {
    key: 'setLongTimeHandle',
    value: function setLongTimeHandle() {
      this.longTimeout = setTimeout(this.handleLongTime.bind(this), TIMEOUT);
    }
  }, {
    key: 'handleLongTime',
    value: function handleLongTime() {
      this.goToObserveStateFail();
    }
  }, {
    key: 'clearLongTimeHandle',
    value: function clearLongTimeHandle() {
      if (this.longTimeout != null) {
        clearTimeout(this.longTimeout);
        this.longTimeout = null;
      }
    }
  }, {
    key: 'showPlayerDead',
    value: function showPlayerDead() {
      // 关闭socket
      this.gameSocket.close();

      // 关闭定时器
      this.clearCheckPlayerTimeout();

      // 展示主播退出页面
      if (this.currentPage) {
        this.currentPage.hide();
      }
      this.outPage.show();
      this.model.setStage(this.outPage.name);
      this.currentPage = this.outPage;
    }
  }, {
    key: 'checkPlayerState',
    value: function checkPlayerState() {
      _network2.default.syncop(this.judgePlayerState.bind(this));
    }
  }, {
    key: 'judgePlayerState',
    value: function judgePlayerState(success, res) {
      if (success) {
        if (res.data.state != 0) {
          this.clearCheckPlayerTimeout();
          this.showPlayerDead();
        }
      } else {
        this.handleSyncopErr();
      }
    }
  }, {
    key: 'handleSyncopErr',
    value: function handleSyncopErr() {
      this.view.showSyncopErr();
      this.goToObserveStateFail();
    }
  }, {
    key: 'clearCheckPlayerTimeout',
    value: function clearCheckPlayerTimeout() {
      if (this.checkPlayerTimeout != null) {
        clearInterval(this.checkPlayerTimeout);
        this.checkPlayerTimeout = null;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.currentPage) {
        this.currentPage.hide();
      }
      this.currentPage = null;
      this.model.setStage('');

      // 清理gameID
      this.model.clearGameId();

      // 清理连接超时定时器
      this.clearLongTimeHandle();

      // 清理sycop定时器
      this.clearCheckPlayerTimeout();

      // 隐藏loading
      wx.hideLoading();

      if (this.gameSocket.alive) {

        // 关闭socket
        this.gameSocket.close();
      }

      // 清楚围观者的信息
      this.model.clearObserveInfo();

      this.game.instructionCtrl.destroy();

      this.game.resetScene();
    }
  }, {
    key: 'showPlayerWaiting',
    value: function showPlayerWaiting() {
      // 查看当前stage是否是playerWaiting，不是才改
      if (this.currentPage != this.waitingPage) {
        if (this.currentPage != null) {
          this.currentPage.hide();
        }
        this.waitingPage.show();
        this.model.setStage(this.waitingPage.name);
        this.currentPage = this.waitingPage;
      }
    }
  }, {
    key: 'showPlayerGG',
    value: function showPlayerGG(score) {
      if (this.currentPage != null) {
        this.currentPage.hide();
      }
      this.ggPage.show(score);
      this.model.setStage(this.ggPage.name);
      this.currentPage = this.ggPage;
    }
  }, {
    key: 'onPlayerOut',
    value: function onPlayerOut() {
      this.showPlayerDead();
    }
  }, {
    key: 'onViewerStart',
    value: function onViewerStart() {
      this.gameSocket.quitObserve();
      this.game.instructionCtrl.destroy();
      this.modeCtrl.directPlaySingleGame();
    }
  }, {
    key: 'showGameOverPage',
    value: function showGameOverPage() {
      return;
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      this.clearCheckPlayerTimeout();
      this.gameSocket.quitObserve();
      this.gameSocket.close();
      this.game.resetScene();
    }
  }, {
    key: 'wxOnshow',
    value: function wxOnshow() {
      return;
    }
  }]);

  return ObserveCtrl;
}();

exports.default = ObserveCtrl;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _singleCtrl = __webpack_require__(10);

var _singleCtrl2 = _interopRequireDefault(_singleCtrl);

var _shareApp = __webpack_require__(7);

var _playerGamePage = __webpack_require__(49);

var _playerGamePage2 = _interopRequireDefault(_playerGamePage);

var _network = __webpack_require__(3);

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var playerCtrl = function (_SingleCtrl) {
  _inherits(playerCtrl, _SingleCtrl);

  function playerCtrl(game, modeCtrl) {
    _classCallCheck(this, playerCtrl);

    var _this = _possibleConstructorReturn(this, (playerCtrl.__proto__ || Object.getPrototypeOf(playerCtrl)).call(this, game, modeCtrl));

    _this.name = 'player';
    _this.currentPage = null;
    _this.gamePage = new _playerGamePage2.default(game);
    return _this;
  }

  _createClass(playerCtrl, [{
    key: 'init',
    value: function init() {
      // this.model.setStage(this.gamePage.name)
      // this.gamePage.show()
      var stage = this.model.stage;
      switch (stage) {
        case 'game':
          this.currentPage = this.gamePage;
          this.currentPage.show();
          break;
        case 'singleSettlementPgae':
          this.currentPage = this.gameOverPage;
          break;
        default:
          this.model.setStage(this.gamePage.name);
          this.currentPage = this.gamePage;
          this.currentPage.show();
          break;
      }
    }
  }, {
    key: 'showGameOverPage',
    value: function showGameOverPage() {
      this.game.seq++;
      this.gameSocket.sendCommand(this.game.seq, {
        type: -1,
        s: this.game.currentScore
      });
      _get(playerCtrl.prototype.__proto__ || Object.getPrototypeOf(playerCtrl.prototype), 'showGameOverPage', this).call(this);
    }
  }, {
    key: 'shareObservCard',
    value: function shareObservCard() {
      this.shareObservCardA();
    }
  }, {
    key: 'shareObservCardA',
    value: function shareObservCardA() {
      this.shareObservCardB();
    }
  }, {
    key: 'shareObservCardB',
    value: function shareObservCardB() {
      var _this2 = this;

      this.model.setStage('loading');
      (0, _shareApp.shareObserve)(function (success, num) {
        if (!!success) {
          _this2.gameCtrl.afterShareObserveCard(num);
        }
        setTimeout(function () {
          // console.log('!!!!!!shareObservCardB,stage2', this.model.stage)
          if (_this2.model.stage == 'loading') {
            _this2.model.setStage('game');
          }
        }, 50);
      });
    }
  }, {
    key: 'gameOverClickReplay',
    value: function gameOverClickReplay() {
      _get(playerCtrl.prototype.__proto__ || Object.getPrototypeOf(playerCtrl.prototype), 'gameOverClickReplay', this).call(this);
      this.game.seq++;
      this.gameSocket.sendCommand(this.game.seq, {
        type: 0,
        seed: this.game.randomSeed
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.currentPage) {
        this.currentPage.hide();
      }
      this.currentPage = null;
      this.model.setStage('');
      if (this.gameSocket.alive) {
        // 关闭socket
        this.gameSocket.close();
      }

      // 清理gameId，gameTicket
      this.model.clearGameId();
      this.model.clearGameTicket();
      this.game.viewer.reset();
      // this.game.viewer.hideAll()

      this.game.resetScene();
    }
  }, {
    key: 'wxOnhide',
    value: function wxOnhide() {
      var _this3 = this;

      // 这个地方影响PK分享，群分享
      if (this.model.stage != 'loading' && this.model.stage != 'singleSettlementPgae' && this.model.stage != 'friendRankList') {

        _network2.default.quitGame();

        // 结束心跳
        this.gameSocket.cleanHeartBeat();

        this.gameSocket.close();
        setTimeout(function () {
          // this.handleNetworkFucked(true, '直播断开')
          // this.handleNetworkFucked()
          _this3.modeCtrl.changeMode('singleCtrl');
        }, 100);
      }
    }
  }, {
    key: 'wxOnshow',
    value: function wxOnshow() {}
  }]);

  return playerCtrl;
}(_singleCtrl2.default);

exports.default = playerCtrl;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryCtrl = function () {
  function QueryCtrl(game) {
    _classCallCheck(this, QueryCtrl);

    this.game = game;
    this.model = this.game.gameModel;
    this.gameCtrl = this.game.gameCtrl;
  }

  _createClass(QueryCtrl, [{
    key: 'identifyMode',
    value: function identifyMode(options) {
      // if (options.scene == 1086 || options.scene == 1087) {
      //   this.model.setIsFromWn(1)
      // } else {
      //   this.model.setIsFromWn(0)
      // }

      if (!!options.query && options.query.hasOwnProperty('mode')) {
        switch (options.query.mode) {
          case 'groupShare':
            if (options.shareTicket) {
              this.model.setMode('groupShare');
            } else {
              this.gameCtrl.identifyModeErr('获取群信息失败');
              this.model.setMode('single');
            }
            break;
          case 'battle':
            if (options.query.pkId) {
              this.model.setMode('battle');
            } else {
              this.gameCtrl.identifyModeErr('获取PK信息失败');
              this.model.setMode('single');
            }
            break;
          case 'observe':
            if (options.query.gameId) {

              // gameId存session里！！！！！切记不看的时候关闭链接，清空gameId
              // Session.setGameId(options.query.gameId)
              this.model.setMode('observe');
            } else {
              this.gameCtrl.identifyModeErr('获取围观信息失败');
              this.model.setMode('single');
            }
            break;
          default:
            this.model.setMode('single');
            break;
        }
      } else {
        this.model.setMode('single');
      }
    }
  }]);

  return QueryCtrl;
}();

exports.default = QueryCtrl;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var font = { "glyphs": { "0": { "ha": 868, "x_min": 0, "x_max": 696, "o": "m 0 868 l 696 868 l 696 693 l 0 693 l 0 868 m 696 0 l 0 0 l 0 175 l 696 175 l 696 0 m 0 694 l 175 694 l 175 174 l 0 174 l 0 694 m 521 694 l 696 694 l 696 174 l 521 174 l 521 694 z " }, "1": { "ha": 521, "x_min": 0, "x_max": 347, "o": "m 174 0 l 347 0 l 347 868 l 0 868 l 0 694 l 174 694 l 174 0 z " }, "2": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 0 l 694 0 l 694 174 l 174 174 l 174 347 l 694 347 l 694 868 l 0 868 z " }, "3": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 694 0 l 694 868 l 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 z " }, "4": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 521 347 l 174 347 l 174 868 l 0 868 l 0 174 l 521 174 l 521 0 l 694 0 l 694 868 l 521 868 l 521 347 z " }, "5": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 694 694 l 694 868 l 0 868 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 l 694 521 l 174 521 l 174 694 l 694 694 z " }, "6": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 0 869 l 175 869 l 175 0 l 0 0 l 0 869 m 174 519 l 694 519 l 694 346 l 174 346 l 174 519 m 174 869 l 519 869 l 519 694 l 174 694 l 174 869 m 174 174 l 694 174 l 694 0 l 174 0 l 174 174 m 521 347 l 694 347 l 694 174 l 521 174 l 521 347 z " }, "7": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 0 868 l 0 694 l 521 694 l 521 521 l 694 521 l 694 868 l 0 868 m 347 347 l 521 347 l 521 521 l 347 521 l 347 347 m 174 0 l 347 0 l 347 347 l 174 347 l 174 0 z " }, "8": { "ha": 868, "x_min": 0, "x_max": 694, "o": "m 0 868 l 174 868 l 174 0 l 0 0 l 0 868 m 521 868 l 694 868 l 694 0 l 521 0 l 521 868 m 174 174 l 521 174 l 521 0 l 174 0 l 174 174 m 174 868 l 521 868 l 521 693 l 174 693 l 174 868 m 174 521 l 521 521 l 521 346 l 174 346 l 174 521 z " }, "9": { "ha": 868, "x_min": 0, "x_max": 696, "o": "m 0 521 l 696 521 l 696 346 l 0 346 l 0 521 m 0 868 l 694 868 l 694 694 l 0 694 l 0 868 m 0 696 l 175 696 l 175 519 l 0 519 l 0 696 m 521 696 l 694 696 l 694 521 l 521 521 l 521 696 m 521 349 l 696 349 l 696 -1 l 521 -1 l 521 349 m 174 174 l 521 174 l 521 -1 l 174 -1 l 174 174 z " }, "+": { "ha": 694, "x_min": 0, "x_max": 521, "o": "m 174 174 l 347 174 l 347 347 l 521 347 l 521 521 l 347 521 l 347 694 l 174 694 l 174 521 l 0 521 l 0 347 l 174 347 l 174 174 z " }, "了": { "ha": 1389, "x_min": 72, "x_max": 1278, "o": "m 659 954 q 1092 1246 891 1096 l 72 1246 l 72 1358 l 1278 1358 l 1278 1225 q 781 899 1035 1058 l 781 400 q 730 216 781 266 q 544 159 680 161 q 323 164 469 159 q 301 293 315 231 q 534 277 437 278 q 659 400 659 275 l 659 954 z " }, "住": { "ha": 1389, "x_min": 18, "x_max": 1364, "o": "m 423 279 l 841 279 l 841 694 l 502 694 l 502 793 l 841 793 l 841 1122 l 464 1122 l 464 1221 l 1324 1221 l 1324 1122 l 949 1122 l 949 793 l 1286 793 l 1286 694 l 949 694 l 949 279 l 1364 279 l 1364 180 l 423 180 l 423 279 m 18 788 q 346 1462 235 1084 l 457 1430 q 339 1135 401 1274 l 339 129 l 233 129 l 233 926 q 64 670 152 783 q 18 788 45 730 m 773 1407 l 860 1462 q 996 1287 935 1373 l 897 1225 q 773 1407 837 1325 z " }, "力": { "ha": 1389, "x_min": 30, "x_max": 1265, "o": "m 87 1154 l 526 1154 q 532 1458 530 1303 l 650 1458 q 643 1154 647 1314 l 1265 1154 q 1234 406 1249 625 q 985 170 1217 172 q 716 175 873 170 q 696 302 711 228 l 700 302 q 974 288 876 286 q 1119 433 1105 290 q 1143 1044 1135 677 l 640 1044 q 528 513 628 690 q 110 132 420 315 q 30 235 72 180 q 415 567 323 399 q 522 1044 510 720 l 87 1044 l 87 1154 z " }, "太": { "ha": 1389, "x_min": 19, "x_max": 1367, "o": "m 19 229 q 616 1019 548 514 l 43 1019 l 43 1123 l 624 1123 q 629 1453 629 1260 l 747 1453 q 743 1123 747 1280 l 1344 1123 l 1344 1019 l 749 1019 q 1367 262 891 467 q 1270 155 1303 199 q 694 878 831 401 q 102 129 581 411 q 19 229 75 164 m 540 408 l 625 476 q 817 267 723 372 l 720 190 q 540 408 636 297 z " }, "好": { "ha": 1389, "x_min": 24, "x_max": 1370, "o": "m 591 376 l 511 290 q 358 430 434 362 q 90 145 258 275 q 27 232 61 187 q 283 496 189 349 q 79 671 176 590 q 168 1073 127 842 l 24 1073 l 24 1173 l 184 1173 q 227 1459 206 1309 l 336 1444 q 290 1173 312 1295 l 547 1173 l 547 1086 q 414 521 515 718 q 591 376 503 449 m 545 849 l 918 849 l 918 1061 q 1165 1268 1053 1175 l 594 1268 l 594 1366 l 1314 1366 l 1314 1260 q 1025 1015 1168 1135 l 1025 849 l 1370 849 l 1370 751 l 1025 751 l 1025 316 q 850 152 1025 152 q 673 156 793 152 q 655 263 666 206 q 836 251 777 252 q 918 332 918 251 l 918 751 l 545 751 l 545 849 m 442 1073 l 271 1073 q 189 699 224 812 l 332 585 q 442 1073 423 774 z " }, "很": { "ha": 1389, "x_min": 22, "x_max": 1370, "o": "m 552 1381 l 1248 1381 l 1248 716 l 1145 716 l 1145 750 l 886 750 q 1002 526 928 627 q 1248 688 1134 605 l 1313 604 q 1058 457 1188 528 q 1370 235 1183 323 q 1287 138 1331 191 q 785 750 902 370 l 655 750 l 655 297 q 899 408 753 336 q 921 308 909 351 q 658 175 825 267 q 579 117 617 151 l 507 210 q 552 316 552 254 l 552 1381 m 22 650 q 395 1111 245 842 l 488 1058 q 343 844 419 944 l 343 123 l 239 123 l 239 715 q 69 545 157 623 q 22 650 49 600 m 1145 1289 l 655 1289 l 655 1112 l 1145 1112 l 1145 1289 m 28 1070 q 376 1458 243 1234 l 469 1404 q 79 972 312 1164 q 28 1070 54 1024 m 655 841 l 1145 841 l 1145 1021 l 655 1021 l 655 841 z " }, "快": { "ha": 1389, "x_min": 18, "x_max": 1354, "o": "m 407 779 l 768 779 q 783 1115 779 891 l 499 1115 l 499 1210 l 784 1210 q 784 1447 784 1317 l 891 1447 q 890 1210 891 1320 l 1221 1210 l 1221 779 l 1354 779 l 1354 684 l 914 684 q 1345 232 1025 374 q 1256 127 1312 199 q 840 623 948 302 q 442 117 758 317 q 363 208 397 175 q 754 684 688 399 l 407 684 l 407 779 m 209 1447 l 311 1447 l 311 1149 l 363 1184 q 515 994 452 1086 l 435 936 q 311 1108 376 1028 l 311 122 l 209 122 l 209 1447 m 1115 1115 l 888 1115 q 876 779 886 899 l 1115 779 l 1115 1115 m 77 1135 l 168 1122 q 109 776 148 959 q 18 798 71 785 q 77 1135 50 937 z " }, "棒": { "ha": 1389, "x_min": 8, "x_max": 1375, "o": "m 487 423 l 837 423 l 837 557 l 605 557 l 605 636 q 456 517 538 574 q 385 595 434 545 q 654 841 556 701 l 449 841 l 449 926 l 705 926 q 749 1039 732 981 l 528 1039 l 528 1124 l 770 1124 q 789 1236 781 1177 l 488 1236 l 488 1321 l 798 1321 q 806 1457 803 1386 l 906 1457 q 898 1321 903 1386 l 1312 1321 l 1312 1236 l 888 1236 q 871 1124 882 1176 l 1275 1124 l 1275 1039 l 852 1039 q 814 926 838 982 l 1366 926 l 1366 841 l 1085 841 q 1375 621 1191 690 q 1313 530 1341 576 q 1161 632 1229 575 l 1161 557 l 936 557 l 936 423 l 1290 423 l 1290 338 l 936 338 l 936 122 l 837 122 l 837 338 l 487 338 l 487 423 m 8 609 q 206 1101 130 807 l 24 1101 l 24 1195 l 209 1195 l 209 1459 l 304 1459 l 304 1195 l 461 1195 l 461 1101 l 304 1101 l 304 869 l 353 909 q 472 769 419 834 l 401 711 q 304 840 359 772 l 304 123 l 209 123 l 209 886 q 52 490 141 642 q 8 609 34 549 m 837 760 l 936 760 l 936 643 l 1147 643 q 989 841 1050 730 l 770 841 q 612 643 709 736 l 837 643 l 837 760 z " }, "稳": { "ha": 1389, "x_min": 7, "x_max": 1386, "o": "m 530 690 l 1183 690 l 1183 808 l 556 808 l 556 897 l 1183 897 l 1183 1013 l 559 1013 l 559 1099 l 540 1080 q 461 1146 506 1112 q 711 1469 614 1286 l 817 1449 q 749 1339 784 1393 l 1153 1339 l 1153 1252 q 1042 1104 1099 1179 l 1286 1104 l 1286 551 l 1183 551 l 1183 600 l 530 600 l 530 690 m 7 519 q 214 964 134 696 l 31 964 l 31 1058 l 222 1058 l 222 1275 q 58 1261 141 1268 q 39 1358 52 1303 q 484 1402 260 1371 l 506 1303 q 323 1284 415 1293 l 323 1058 l 492 1058 l 492 964 l 323 964 l 323 802 l 378 845 q 524 682 456 766 l 444 617 q 323 772 385 701 l 323 125 l 222 125 l 222 726 q 53 407 152 538 q 7 519 33 464 m 640 519 l 743 519 l 743 327 q 830 248 743 248 l 960 248 q 1061 316 1046 248 q 1081 442 1073 370 q 1184 401 1126 422 q 1154 274 1171 332 q 990 156 1124 156 l 810 156 q 640 321 640 156 l 640 519 m 1031 1251 l 689 1251 q 564 1104 629 1172 l 925 1104 q 1031 1251 982 1181 m 494 519 l 585 487 q 477 217 538 345 q 385 259 434 240 q 494 519 449 374 m 1177 477 l 1264 517 q 1386 274 1340 372 l 1293 229 q 1177 477 1248 339 m 795 544 l 868 594 q 1009 419 948 502 l 926 361 q 795 544 867 456 z " }, "给": { "ha": 1389, "x_min": 18, "x_max": 1378, "o": "m 551 693 l 1237 693 l 1237 121 l 1134 121 l 1134 212 l 654 212 l 654 119 l 551 119 l 551 693 m 184 646 q 467 667 191 646 q 454 581 460 625 q 68 543 228 560 l 46 628 q 252 914 127 705 q 46 899 165 909 l 18 983 q 273 1450 134 1116 l 380 1412 q 136 991 247 1157 q 297 994 217 993 q 399 1180 346 1078 l 499 1137 q 184 646 311 823 m 1134 601 l 654 601 l 654 304 l 1134 304 l 1134 601 m 971 1450 l 943 1404 q 1378 975 1101 1145 q 1299 888 1339 936 q 886 1313 1034 1077 q 502 871 738 1063 q 423 945 476 901 q 850 1450 697 1154 l 971 1450 m 597 947 l 1191 947 l 1191 854 l 597 854 l 597 947 m 23 331 q 476 425 275 378 q 477 330 475 376 q 58 232 201 273 l 23 331 z " }, "超": { "ha": 1389, "x_min": 23, "x_max": 1370, "o": "m 23 248 q 134 791 126 427 l 235 785 q 214 541 231 654 q 343 370 263 435 l 343 873 l 30 873 l 30 971 l 301 971 l 301 1166 l 77 1166 l 77 1264 l 301 1264 l 301 1457 l 407 1457 l 407 1264 l 609 1264 l 609 1166 l 407 1166 l 407 971 l 627 971 l 627 873 l 445 873 l 445 662 l 639 662 l 639 566 l 445 566 l 445 311 q 671 269 543 270 q 1370 274 929 264 q 1332 170 1345 214 q 637 172 922 167 q 193 408 309 180 q 83 121 153 232 q 23 248 56 184 m 711 836 l 1278 836 l 1278 351 l 1177 351 l 1177 410 l 811 410 l 811 343 l 711 343 l 711 836 m 644 1308 l 644 1398 l 1293 1398 q 1274 1086 1286 1214 q 1112 928 1259 932 q 943 932 1039 926 q 922 1039 935 981 q 1092 1024 1023 1023 q 1177 1111 1169 1024 q 1191 1308 1187 1190 l 933 1308 q 705 879 922 1001 q 640 964 680 921 q 831 1308 827 1067 l 644 1308 m 1177 745 l 811 745 l 811 500 l 1177 500 l 1177 745 z " }, "越": { "ha": 1389, "x_min": 26, "x_max": 1370, "o": "m 26 233 q 134 791 130 422 l 228 785 q 213 538 227 652 q 339 373 262 435 l 339 873 l 30 873 l 30 966 l 298 966 l 298 1166 l 77 1166 l 77 1259 l 298 1259 l 298 1455 l 393 1455 l 393 1259 l 602 1259 l 602 1166 l 393 1166 l 393 966 l 624 966 l 624 873 l 434 873 l 434 658 l 608 658 l 608 566 l 434 566 l 434 315 q 666 269 534 270 q 1370 274 981 264 q 1332 168 1345 214 q 637 172 947 168 q 191 406 316 178 q 83 121 155 232 q 26 233 56 184 m 770 395 q 987 644 895 511 q 917 1112 933 829 l 758 1112 l 758 650 q 897 773 819 703 q 917 674 905 720 q 755 529 837 606 q 692 457 726 500 l 624 525 q 666 658 666 579 l 666 1200 l 913 1200 q 909 1459 909 1328 l 1001 1459 q 1005 1200 1000 1336 l 1340 1200 l 1340 1112 l 1009 1112 q 1058 750 1020 902 q 1180 1017 1133 878 l 1271 979 q 1093 632 1196 792 q 1154 507 1120 560 q 1202 467 1179 467 q 1230 517 1222 467 q 1253 726 1242 604 q 1347 692 1316 703 q 1318 471 1332 544 q 1215 355 1298 355 q 1088 431 1142 355 q 1027 538 1054 476 q 844 331 944 426 q 770 395 818 362 m 1074 1404 l 1145 1455 q 1278 1298 1203 1392 l 1199 1242 q 1074 1404 1130 1340 z " }, "！": { "ha": 1389, "x_min": 608, "x_max": 781, "o": "m 761 1321 l 746 570 l 639 570 l 624 1321 l 761 1321 m 694 426 q 755 401 730 426 q 781 340 781 376 q 755 279 781 304 q 694 255 730 255 q 633 279 659 255 q 608 340 608 304 q 633 401 608 376 q 694 426 659 426 z " } }, "familyName": "Microsoft YaHei", "ascender": 1636, "descender": -296, "underlinePosition": -119, "underlineThickness": 80, "boundingBox": { "yMin": -186, "xMin": -220, "yMax": 1706, "xMax": 1763 }, "resolution": 1000, "original_font_information": { "format": 0, "copyright": "`2005 Microsoft Corporation. All rights reserved.", "fontFamily": "Microsoft YaHei", "fontSubfamily": "Regular", "uniqueID": "Microsoft YaHei-Regular", "fullName": "Microsoft YaHei", "version": "Version 0.71", "postScriptName": "MicrosoftYaHei", "trademark": "Microsoft YaHei is either a registered trademark or a trademark of Microsoft Corporation in the United States and/or other countries.", "manufacturer": "Microsoft Corporation", "designer": "Founder", "description": "Microsoft YaHei is a Simplified Chinese font developed by taking advantage of ClearType technology, and it provides excellent reading experience particularly onscreen. The font is very legible at small sizes.", "manufacturerURL": "http://www.microsoft.com/typography", "designerURL": "http://www.founder.com.cn/cn", "licence": "\r\nNOTIFICATION OF LICENSE AGREEMENT \r\n\r\nThis font software is part of the Microsoft software product in which it was included and is provided under the end user license agreement (“EULA”) for that Microsoft software product. The terms and conditions of the EULA govern the use of font software. Please refer to the applicable Microsoft product EULA if you have any questions about how you may use this font software. Microsoft reserves all rights that are not expressly granted in the EULA. For products that may have installed this font please see the license link.\r\n", "licenceURL": "http://www.microsoft.com/typography/fonts" }, "cssFontWeight": "normal", "cssFontStyle": "normal" };
var loader = new THREE.FontLoader();
var FONT;
loader.load(JSON.stringify(font), function (font) {
	FONT = font;
});
exports.default = FONT;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function (u, p) {
  var d = {},
      l = d.lib = {},
      s = function s() {},
      t = l.Base = { extend: function extend(a) {
      s.prototype = this;var c = new s();a && c.mixIn(a);c.hasOwnProperty("init") || (c.init = function () {
        c.$super.init.apply(this, arguments);
      });c.init.prototype = c;c.$super = this;return c;
    }, create: function create() {
      var a = this.extend();a.init.apply(a, arguments);return a;
    }, init: function init() {}, mixIn: function mixIn(a) {
      for (var c in a) {
        a.hasOwnProperty(c) && (this[c] = a[c]);
      }a.hasOwnProperty("toString") && (this.toString = a.toString);
    }, clone: function clone() {
      return this.init.prototype.extend(this);
    } },
      r = l.WordArray = t.extend({ init: function init(a, c) {
      a = this.words = a || [];this.sigBytes = c != p ? c : 4 * a.length;
    }, toString: function toString(a) {
      return (a || v).stringify(this);
    }, concat: function concat(a) {
      var c = this.words,
          e = a.words,
          j = this.sigBytes;a = a.sigBytes;this.clamp();if (j % 4) for (var k = 0; k < a; k++) {
        c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
      } else if (65535 < e.length) for (k = 0; k < a; k += 4) {
        c[j + k >>> 2] = e[k >>> 2];
      } else c.push.apply(c, e);this.sigBytes += a;return this;
    }, clamp: function clamp() {
      var a = this.words,
          c = this.sigBytes;a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);a.length = u.ceil(c / 4);
    }, clone: function clone() {
      var a = t.clone.call(this);a.words = this.words.slice(0);return a;
    }, random: function random(a) {
      for (var c = [], e = 0; e < a; e += 4) {
        c.push(4294967296 * u.random() | 0);
      }return new r.init(c, a);
    } }),
      w = d.enc = {},
      v = w.Hex = { stringify: function stringify(a) {
      var c = a.words;a = a.sigBytes;for (var e = [], j = 0; j < a; j++) {
        var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;e.push((k >>> 4).toString(16));e.push((k & 15).toString(16));
      }return e.join("");
    }, parse: function parse(a) {
      for (var c = a.length, e = [], j = 0; j < c; j += 2) {
        e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
      }return new r.init(e, c / 2);
    } },
      b = w.Latin1 = { stringify: function stringify(a) {
      var c = a.words;a = a.sigBytes;for (var e = [], j = 0; j < a; j++) {
        e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
      }return e.join("");
    }, parse: function parse(a) {
      for (var c = a.length, e = [], j = 0; j < c; j++) {
        e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
      }return new r.init(e, c);
    } },
      x = w.Utf8 = { stringify: function stringify(a) {
      try {
        return decodeURIComponent(escape(b.stringify(a)));
      } catch (c) {
        throw Error("Malformed UTF-8 data");
      }
    }, parse: function parse(a) {
      return b.parse(unescape(encodeURIComponent(a)));
    } },
      q = l.BufferedBlockAlgorithm = t.extend({ reset: function reset() {
      this._data = new r.init();this._nDataBytes = 0;
    }, _append: function _append(a) {
      "string" == typeof a && (a = x.parse(a));this._data.concat(a);this._nDataBytes += a.sigBytes;
    }, _process: function _process(a) {
      var c = this._data,
          e = c.words,
          j = c.sigBytes,
          k = this.blockSize,
          b = j / (4 * k),
          b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);a = b * k;j = u.min(4 * a, j);if (a) {
        for (var q = 0; q < a; q += k) {
          this._doProcessBlock(e, q);
        }q = e.splice(0, a);c.sigBytes -= j;
      }return new r.init(q, j);
    }, clone: function clone() {
      var a = t.clone.call(this);
      a._data = this._data.clone();return a;
    }, _minBufferSize: 0 });l.Hasher = q.extend({ cfg: t.extend(), init: function init(a) {
      this.cfg = this.cfg.extend(a);this.reset();
    }, reset: function reset() {
      q.reset.call(this);this._doReset();
    }, update: function update(a) {
      this._append(a);this._process();return this;
    }, finalize: function finalize(a) {
      a && this._append(a);return this._doFinalize();
    }, blockSize: 16, _createHelper: function _createHelper(a) {
      return function (b, e) {
        return new a.init(e).finalize(b);
      };
    }, _createHmacHelper: function _createHmacHelper(a) {
      return function (b, e) {
        return new n.HMAC.init(a, e).finalize(b);
      };
    } });var n = d.algo = {};return d;
}(Math);
(function () {
  var u = CryptoJS,
      p = u.lib.WordArray;u.enc.Base64 = { stringify: function stringify(d) {
      var l = d.words,
          p = d.sigBytes,
          t = this._map;d.clamp();d = [];for (var r = 0; r < p; r += 3) {
        for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) {
          d.push(t.charAt(w >>> 6 * (3 - v) & 63));
        }
      }if (l = t.charAt(64)) for (; d.length % 4;) {
        d.push(l);
      }return d.join("");
    }, parse: function parse(d) {
      var l = d.length,
          s = this._map,
          t = s.charAt(64);t && (t = d.indexOf(t), -1 != t && (l = t));for (var t = [], r = 0, w = 0; w < l; w++) {
        if (w % 4) {
          var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
              b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);r++;
        }
      }return p.create(t, r);
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
})();
(function (u) {
  function p(b, n, a, c, e, j, k) {
    b = b + (n & a | ~n & c) + e + k;return (b << j | b >>> 32 - j) + n;
  }function d(b, n, a, c, e, j, k) {
    b = b + (n & c | a & ~c) + e + k;return (b << j | b >>> 32 - j) + n;
  }function l(b, n, a, c, e, j, k) {
    b = b + (n ^ a ^ c) + e + k;return (b << j | b >>> 32 - j) + n;
  }function s(b, n, a, c, e, j, k) {
    b = b + (a ^ (n | ~c)) + e + k;return (b << j | b >>> 32 - j) + n;
  }for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) {
    b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
  }r = r.MD5 = v.extend({ _doReset: function _doReset() {
      this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function _doProcessBlock(q, n) {
      for (var a = 0; 16 > a; a++) {
        var c = n + a,
            e = q[c];q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
      }var a = this._hash.words,
          c = q[n + 0],
          e = q[n + 1],
          j = q[n + 2],
          k = q[n + 3],
          z = q[n + 4],
          r = q[n + 5],
          t = q[n + 6],
          w = q[n + 7],
          v = q[n + 8],
          A = q[n + 9],
          B = q[n + 10],
          C = q[n + 11],
          u = q[n + 12],
          D = q[n + 13],
          E = q[n + 14],
          x = q[n + 15],
          f = a[0],
          m = a[1],
          g = a[2],
          h = a[3],
          f = p(f, m, g, h, c, 7, b[0]),
          h = p(h, f, m, g, e, 12, b[1]),
          g = p(g, h, f, m, j, 17, b[2]),
          m = p(m, g, h, f, k, 22, b[3]),
          f = p(f, m, g, h, z, 7, b[4]),
          h = p(h, f, m, g, r, 12, b[5]),
          g = p(g, h, f, m, t, 17, b[6]),
          m = p(m, g, h, f, w, 22, b[7]),
          f = p(f, m, g, h, v, 7, b[8]),
          h = p(h, f, m, g, A, 12, b[9]),
          g = p(g, h, f, m, B, 17, b[10]),
          m = p(m, g, h, f, C, 22, b[11]),
          f = p(f, m, g, h, u, 7, b[12]),
          h = p(h, f, m, g, D, 12, b[13]),
          g = p(g, h, f, m, E, 17, b[14]),
          m = p(m, g, h, f, x, 22, b[15]),
          f = d(f, m, g, h, e, 5, b[16]),
          h = d(h, f, m, g, t, 9, b[17]),
          g = d(g, h, f, m, C, 14, b[18]),
          m = d(m, g, h, f, c, 20, b[19]),
          f = d(f, m, g, h, r, 5, b[20]),
          h = d(h, f, m, g, B, 9, b[21]),
          g = d(g, h, f, m, x, 14, b[22]),
          m = d(m, g, h, f, z, 20, b[23]),
          f = d(f, m, g, h, A, 5, b[24]),
          h = d(h, f, m, g, E, 9, b[25]),
          g = d(g, h, f, m, k, 14, b[26]),
          m = d(m, g, h, f, v, 20, b[27]),
          f = d(f, m, g, h, D, 5, b[28]),
          h = d(h, f, m, g, j, 9, b[29]),
          g = d(g, h, f, m, w, 14, b[30]),
          m = d(m, g, h, f, u, 20, b[31]),
          f = l(f, m, g, h, r, 4, b[32]),
          h = l(h, f, m, g, v, 11, b[33]),
          g = l(g, h, f, m, C, 16, b[34]),
          m = l(m, g, h, f, E, 23, b[35]),
          f = l(f, m, g, h, e, 4, b[36]),
          h = l(h, f, m, g, z, 11, b[37]),
          g = l(g, h, f, m, w, 16, b[38]),
          m = l(m, g, h, f, B, 23, b[39]),
          f = l(f, m, g, h, D, 4, b[40]),
          h = l(h, f, m, g, c, 11, b[41]),
          g = l(g, h, f, m, k, 16, b[42]),
          m = l(m, g, h, f, t, 23, b[43]),
          f = l(f, m, g, h, A, 4, b[44]),
          h = l(h, f, m, g, u, 11, b[45]),
          g = l(g, h, f, m, x, 16, b[46]),
          m = l(m, g, h, f, j, 23, b[47]),
          f = s(f, m, g, h, c, 6, b[48]),
          h = s(h, f, m, g, w, 10, b[49]),
          g = s(g, h, f, m, E, 15, b[50]),
          m = s(m, g, h, f, r, 21, b[51]),
          f = s(f, m, g, h, u, 6, b[52]),
          h = s(h, f, m, g, k, 10, b[53]),
          g = s(g, h, f, m, B, 15, b[54]),
          m = s(m, g, h, f, e, 21, b[55]),
          f = s(f, m, g, h, v, 6, b[56]),
          h = s(h, f, m, g, x, 10, b[57]),
          g = s(g, h, f, m, t, 15, b[58]),
          m = s(m, g, h, f, D, 21, b[59]),
          f = s(f, m, g, h, z, 6, b[60]),
          h = s(h, f, m, g, C, 10, b[61]),
          g = s(g, h, f, m, j, 15, b[62]),
          m = s(m, g, h, f, A, 21, b[63]);a[0] = a[0] + f | 0;a[1] = a[1] + m | 0;a[2] = a[2] + g | 0;a[3] = a[3] + h | 0;
    }, _doFinalize: function _doFinalize() {
      var b = this._data,
          n = b.words,
          a = 8 * this._nDataBytes,
          c = 8 * b.sigBytes;n[c >>> 5] |= 128 << 24 - c % 32;var e = u.floor(a / 4294967296);n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;b.sigBytes = 4 * (n.length + 1);this._process();b = this._hash;n = b.words;for (a = 0; 4 > a; a++) {
        c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
      }return b;
    }, clone: function clone() {
      var b = v.clone.call(this);b._hash = this._hash.clone();return b;
    } });t.MD5 = v._createHelper(r);t.HmacMD5 = v._createHmacHelper(r);
})(Math);
(function () {
  var u = CryptoJS,
      p = u.lib,
      d = p.Base,
      l = p.WordArray,
      p = u.algo,
      s = p.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }), init: function init(d) {
      this.cfg = this.cfg.extend(d);
    }, compute: function compute(d, r) {
      for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
        n && s.update(n);var n = s.update(d).finalize(r);s.reset();for (var a = 1; a < p; a++) {
          n = s.finalize(n), s.reset();
        }b.concat(n);
      }b.sigBytes = 4 * q;return b;
    } });u.EvpKDF = function (d, l, p) {
    return s.create(p).compute(d, l);
  };
})();
CryptoJS.lib.Cipher || function (u) {
  var p = CryptoJS,
      d = p.lib,
      l = d.Base,
      s = d.WordArray,
      t = d.BufferedBlockAlgorithm,
      r = p.enc.Base64,
      w = p.algo.EvpKDF,
      v = d.Cipher = t.extend({ cfg: l.extend(), createEncryptor: function createEncryptor(e, a) {
      return this.create(this._ENC_XFORM_MODE, e, a);
    }, createDecryptor: function createDecryptor(e, a) {
      return this.create(this._DEC_XFORM_MODE, e, a);
    }, init: function init(e, a, b) {
      this.cfg = this.cfg.extend(b);this._xformMode = e;this._key = a;this.reset();
    }, reset: function reset() {
      t.reset.call(this);this._doReset();
    }, process: function process(e) {
      this._append(e);return this._process();
    },
    finalize: function finalize(e) {
      e && this._append(e);return this._doFinalize();
    }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function _createHelper(e) {
      return { encrypt: function encrypt(b, k, d) {
          return ("string" == typeof k ? c : a).encrypt(e, b, k, d);
        }, decrypt: function decrypt(b, k, d) {
          return ("string" == typeof k ? c : a).decrypt(e, b, k, d);
        } };
    } });d.StreamCipher = v.extend({ _doFinalize: function _doFinalize() {
      return this._process(!0);
    }, blockSize: 1 });var b = p.mode = {},
      x = function x(e, a, b) {
    var c = this._iv;c ? this._iv = u : c = this._prevBlock;for (var d = 0; d < b; d++) {
      e[a + d] ^= c[d];
    }
  },
      q = (d.BlockCipherMode = l.extend({ createEncryptor: function createEncryptor(e, a) {
      return this.Encryptor.create(e, a);
    }, createDecryptor: function createDecryptor(e, a) {
      return this.Decryptor.create(e, a);
    }, init: function init(e, a) {
      this._cipher = e;this._iv = a;
    } })).extend();q.Encryptor = q.extend({ processBlock: function processBlock(e, a) {
      var b = this._cipher,
          c = b.blockSize;x.call(this, e, a, c);b.encryptBlock(e, a);this._prevBlock = e.slice(a, a + c);
    } });q.Decryptor = q.extend({ processBlock: function processBlock(e, a) {
      var b = this._cipher,
          c = b.blockSize,
          d = e.slice(a, a + c);b.decryptBlock(e, a);x.call(this, e, a, c);this._prevBlock = d;
    } });b = b.CBC = q;q = (p.pad = {}).Pkcs7 = { pad: function pad(a, b) {
      for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) {
        l.push(d);
      }c = s.create(l, c);a.concat(c);
    }, unpad: function unpad(a) {
      a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255;
    } };d.BlockCipher = v.extend({ cfg: v.cfg.extend({ mode: b, padding: q }), reset: function reset() {
      v.reset.call(this);var a = this.cfg,
          b = a.iv,
          a = a.mode;if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;else c = a.createDecryptor, this._minBufferSize = 1;this._mode = c.call(a, this, b && b.words);
    }, _doProcessBlock: function _doProcessBlock(a, b) {
      this._mode.processBlock(a, b);
    }, _doFinalize: function _doFinalize() {
      var a = this.cfg.padding;if (this._xformMode == this._ENC_XFORM_MODE) {
        a.pad(this._data, this.blockSize);var b = this._process(!0);
      } else b = this._process(!0), a.unpad(b);return b;
    }, blockSize: 4 });var n = d.CipherParams = l.extend({ init: function init(a) {
      this.mixIn(a);
    }, toString: function toString(a) {
      return (a || this.formatter).stringify(this);
    } }),
      b = (p.format = {}).OpenSSL = { stringify: function stringify(a) {
      var b = a.ciphertext;a = a.salt;return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
    }, parse: function parse(a) {
      a = r.parse(a);var b = a.words;if (1398893684 == b[0] && 1701076831 == b[1]) {
        var c = s.create(b.slice(2, 4));b.splice(0, 4);a.sigBytes -= 16;
      }return n.create({ ciphertext: a, salt: c });
    } },
      a = d.SerializableCipher = l.extend({ cfg: l.extend({ format: b }), encrypt: function encrypt(a, b, c, d) {
      d = this.cfg.extend(d);var l = a.createEncryptor(c, d);b = l.finalize(b);l = l.cfg;return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format });
    },
    decrypt: function decrypt(a, b, c, d) {
      d = this.cfg.extend(d);b = this._parse(b, d.format);return a.createDecryptor(c, d).finalize(b.ciphertext);
    }, _parse: function _parse(a, b) {
      return "string" == typeof a ? b.parse(a, this) : a;
    } }),
      p = (p.kdf = {}).OpenSSL = { execute: function execute(a, b, c, d) {
      d || (d = s.random(8));a = w.create({ keySize: b + c }).compute(a, d);c = s.create(a.words.slice(b), 4 * c);a.sigBytes = 4 * b;return n.create({ key: a, iv: c, salt: d });
    } },
      c = d.PasswordBasedCipher = a.extend({ cfg: a.cfg.extend({ kdf: p }), encrypt: function encrypt(b, c, d, l) {
      l = this.cfg.extend(l);d = l.kdf.execute(d, b.keySize, b.ivSize);l.iv = d.iv;b = a.encrypt.call(this, b, c, d.key, l);b.mixIn(d);return b;
    }, decrypt: function decrypt(b, c, d, l) {
      l = this.cfg.extend(l);c = this._parse(c, l.format);d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);l.iv = d.iv;return a.decrypt.call(this, b, c, d.key, l);
    } });
}();
(function () {
  for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) {
    a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
  }for (var e = 0, j = 0, c = 0; 256 > c; c++) {
    var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
        k = k >>> 8 ^ k & 255 ^ 99;l[e] = k;s[k] = e;var z = a[e],
        F = a[z],
        G = a[F],
        y = 257 * a[k] ^ 16843008 * k;t[e] = y << 24 | y >>> 8;r[e] = y << 16 | y >>> 16;w[e] = y << 8 | y >>> 24;v[e] = y;y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;b[k] = y << 24 | y >>> 8;x[k] = y << 16 | y >>> 16;q[k] = y << 8 | y >>> 24;n[k] = y;e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1;
  }var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      d = d.AES = p.extend({ _doReset: function _doReset() {
      for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) {
        if (j < d) e[j] = c[j];else {
          var k = e[j - 1];j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);e[j] = e[j - d] ^ k;
        }
      }c = this._invKeySchedule = [];for (d = 0; d < a; d++) {
        j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]];
      }
    }, encryptBlock: function encryptBlock(a, b) {
      this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
    }, decryptBlock: function decryptBlock(a, c) {
      var d = a[c + 1];a[c + 1] = a[c + 3];a[c + 3] = d;this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);d = a[c + 1];a[c + 1] = a[c + 3];a[c + 3] = d;
    }, _doCryptBlock: function _doCryptBlock(a, b, c, d, e, j, l, f) {
      for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) {
        var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
            s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
            t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
            n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
            g = q,
            h = s,
            k = t;
      }q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];a[b] = q;a[b + 1] = s;a[b + 2] = t;a[b + 3] = n;
    }, keySize: 8 });u.AES = p._createHelper(d);
})();
exports.default = CryptoJS;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Tween.js
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
 * you can visit 'http://easings.net/zh-cn' to get effect
*/
var Tween = {
    Linear: function Linear(t, b, c, d) {
        return c * t / d + b;
    },
    Quad: {
        easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * (--t * (t - 2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    },
    Quart: {
        easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    },
    Quint: {
        easeIn: function easeIn(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    Sine: {
        easeIn: function easeIn(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function easeIn(t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function easeIn(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function easeIn(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function easeOut(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOut: function easeInOut(t, b, c, d, a, p) {
            var s;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function easeIn(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function easeOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function easeInOut(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function easeIn(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
        },
        easeOut: function easeOut(t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
                return c * (7.5625 * t * t) + b;
            } else if (t < 2 / 2.75) {
                return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
            } else if (t < 2.5 / 2.75) {
                return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
            }
        },
        easeInOut: function easeInOut(t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
};

exports.default = Tween;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BattleGamePage = function () {
  function BattleGamePage(game) {
    _classCallCheck(this, BattleGamePage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.UI = this.game.UI;
    this.viewer = this.game.viewer;
    this.name = 'game';
  }

  _createClass(BattleGamePage, [{
    key: 'show',
    value: function show() {
      this.UI.showScore();

      this.UI.scoreText.obj.position.y = 21;
      this.UI.scoreText.obj.position.x = -13;
      this.UI.scoreText.changeStyle({ textAlign: 'left' });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.UI.hideScore();
    }
  }]);

  return BattleGamePage;
}();

exports.default = BattleGamePage;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BattlePkPage = function () {
  function BattlePkPage(game) {
    _classCallCheck(this, BattlePkPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.name = 'battlePage';
  }

  _createClass(BattlePkPage, [{
    key: 'show',
    value: function show(obj) {
      this.full2D.showPkPage(obj);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return BattlePkPage;
}();

exports.default = BattlePkPage;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupPage = function () {
  function GroupPage(game) {
    _classCallCheck(this, GroupPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.name = 'groupRankList';
  }

  _createClass(GroupPage, [{
    key: 'show',
    value: function show(list, myUserInfo) {
      this.full2D.showGroupRankList(list, myUserInfo);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return GroupPage;
}();

exports.default = GroupPage;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _config = __webpack_require__(2);

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

var _scrollHandler = __webpack_require__(11);

var _scrollHandler2 = _interopRequireDefault(_scrollHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dpr = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio; // 当前屏幕的Dpr， i7p 设置3 会挂
var W = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var H = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var HEIGHT = H * Dpr; // 设备像素
var WIDTH = W * Dpr; // 设备像素
var frustumSizeHeight = _config.FRUSTUMSIZE; // 动画的尺寸单位坐标高度
var frustumSizeWidth = WIDTH / HEIGHT * frustumSizeHeight; // 动画的尺寸单位坐标高度
var planList = ['bg'];

var Lookers = function () {
	function Lookers(options) {
		_classCallCheck(this, Lookers);

		this.texture = {};
		this.material = {};
		this.geometry = {};
		this.obj = {};
		this.canvas = {};
		this.context = {};
		this._touchInfo = { trackingID: -1, maxDy: 0, maxDx: 0 };
		this.cwidth = WIDTH;
		this.cheight = 50;
		this.options = Object.assign({}, {}, options);
		this._createPlane();
		// --- 显示X人围观和头像
		// this.showLookers({
		// 	avaImg: false,
		// 	icon: true,
		// 	wording: true,
		// 	num : 9,
		// 	avatar : ['','','']
		// })
		// 隐藏这个界面：
		// this.hideLookers()
		// --- 邀请围观
		// this.showLookersShare({});
	}

	// ----------------- show/hide 方法 -----------------


	_createClass(Lookers, [{
		key: 'showLookers',
		value: function showLookers(opt) {
			this.showState = true;
			opt = opt || {};
			this._drawLookers(opt);
		}
	}, {
		key: 'showLookersShare',
		value: function showLookersShare(opt) {
			this.showState = true;
			opt = opt || {};
		}
	}, {
		key: 'hideLookers',
		value: function hideLookers() {
			this.showState = false;
			for (var i = 0; i < planList.length; i++) {
				this.obj[planList[i]].visible = false;
				this.options.camera.remove(this.obj[planList[i]]);
			}
		}
		// ----------------- 背景绘制 -----------------

	}, {
		key: '_drawLookers',
		value: function _drawLookers(opt) {
			var _this = this;

			var ctx = this.context['bg'];
			ctx.fillStyle = 'pink';
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 2 * Dpr;
			// ctx.fillRect(0, 0, this._cx( 414 ), this._cx( this.cheight ));
			ctx.clearRect(0, 0, this._cx(414), this._cx(this.cheight));
			// ctx.strokeRect(0, 0, this._cx( 414 ), this._cx( this.cheight ));
			var height = this.cheight;

			if (opt.avaImg) {
				var right_offset = WIDTH - opt.avatar.length * this._cx(32);
				var that = this;

				var _loop = function _loop() {
					var x = i * _this._cx(36) + right_offset;
					_this._drawImageCenter(opt.avatar[i], x, height / 2, that._cx(25), that._cx(25), 'bg', function () {
						that._drawImageCenter('res/ava_big1.png', x, height / 2, that._cx(29), that._cx(29), 'bg');
					});
				};

				for (var i = 0; i < opt.avatar.length; i++) {
					_loop();
				}
				// 绘制背景图

				ctx.fillStyle = 'rgba(0,0,0,0.56)';
				ctx.font = this._cf(14);
				ctx.textAlign = "right";
				ctx.textBaseline = "middle";
				ctx.fillText('有' + opt.num + '位好友正在围观', right_offset - this._cx(20), this._cx(16));
			}

			if (opt.icon) {
				this._drawImageCenter('res/observShare.png', this._cx(35), height / 2, this._cx(14), this._cx(16), 'bg');
			}
			if (opt.wording) {
				ctx.fillStyle = 'rgba(0,0,0,0.56)';
				ctx.font = this._cf(14);
				ctx.textAlign = "left";
				ctx.textBaseline = "middle";
				ctx.fillText('邀请围观', this._cx(55), this._cx(16));
			}

			this._updatePlane('bg');
		}
		// ----------------- 画布创建与更新 -----------------

	}, {
		key: '_createPlane',
		value: function _createPlane() {
			// 创建画布
			for (var i = 0; i < planList.length; i++) {
				this.canvas[planList[i]] = document.createElement('canvas');
				this.context[planList[i]] = this.canvas[planList[i]].getContext('2d');
				this.canvas[planList[i]].width = WIDTH;
				this.canvas[planList[i]].height = this.cheight * Dpr;
				this.texture[planList[i]] = new THREE.Texture(this.canvas[planList[i]]);
				this.material[planList[i]] = new THREE.MeshBasicMaterial({ map: this.texture[planList[i]], transparent: true });
				this.geometry[planList[i]] = new THREE.PlaneGeometry(frustumSizeWidth, this.cheight / H * frustumSizeHeight);
				this.obj[planList[i]] = new THREE.Mesh(this.geometry[planList[i]], this.material[planList[i]]);
				this.material[planList[i]].map.minFilter = THREE.LinearFilter;
				// console.log( HEIGHT, WIDTH)
				this.obj[planList[i]].position.y = -(0.5 - this.cheight / 2 / H) * frustumSizeHeight; // - frustumSizeHeight/15*7; // 上下
				this.obj[planList[i]].position.x = 0; // frustumSizeWidth/5; // 左右
				this.obj[planList[i]].position.z = 9 - i * 0.001;
			}
		}
	}, {
		key: '_updatePlane',
		value: function _updatePlane(type) {

			// 画布更新
			if (!this.showState) {
				return;
			}
			this.texture[type].needsUpdate = true;
			this.obj[type].visible = true;
			this.options.camera.add(this.obj[type]);
		}

		// ----------------- 工具函数 -----------------

	}, {
		key: '_drawImageCenter',
		value: function _drawImageCenter(src, x, y, width, height, type, cb) {
			// imgid 是渲染时候的imgid， 在每次改变画布的时候自增
			// 以xy为中心来显示一副图片

			if (src == '/0' || src == '/96' || src == '/64' || !src) {
				src = 'res/ava.png';
			}
			var img = new Image();
			var that = this;
			var ctx = this.context[type];
			img.onload = function () {
				ctx.drawImage(img, x - width / 2, y - height / 2, width, height);
				!!cb && cb();
				that._updatePlane(type); // 更新画布
			};
			img.onerror = function () {
				!!cb && cb();
			};
			img.src = src;
		}
	}, {
		key: '_cx',
		value: function _cx(x) {
			var realx = x * W / 414;
			return realx * Dpr;
		}
	}, {
		key: '_cf',
		value: function _cf(size) {
			// font size 
			var realf = size * Dpr * W / 414;
			return realf + 'px Helvetica';
		}
	}]);

	return Lookers;
}();

exports.default = Lookers;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GgPage = function () {
  function GgPage(game) {
    _classCallCheck(this, GgPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.UI = this.game.UI;
    this.name = 'viewerGG';
  }

  _createClass(GgPage, [{
    key: 'show',
    value: function show(score) {
      var observeInfo = this.model.observeInfo;
      this.full2D.showLookersPage({
        type: 'gg',
        score: score,
        headimg: observeInfo.headimg,
        nickname: observeInfo.nickName
      });
      this.UI.hideScore();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return GgPage;
}();

exports.default = GgPage;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var outPage = function () {
  function outPage(game) {
    _classCallCheck(this, outPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.UI = this.game.UI;
    this.name = 'viewerOut';
  }

  _createClass(outPage, [{
    key: 'show',
    value: function show() {
      var observeInfo = this.model.observeInfo;
      this.full2D.showLookersPage({
        type: 'out',
        headimg: observeInfo.headimg,
        nickname: observeInfo.nickName
      });
      this.UI.hideScore();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return outPage;
}();

exports.default = outPage;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WaitingPage = function () {
  function WaitingPage(game) {
    _classCallCheck(this, WaitingPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.UI = this.game.UI;
    this.name = 'viewerWaiting';
  }

  _createClass(WaitingPage, [{
    key: 'show',
    value: function show() {
      var observeInfo = this.model.observeInfo;
      this.full2D.showLookersPage({
        type: 'in',
        headimg: observeInfo.headimg,
        nickname: observeInfo.nickName
      });
      this.UI.scoreText.obj.position.x = 0;
      this.UI.scoreText.obj.position.y = 11;
      this.UI.scoreText.changeStyle({ textAlign: 'center' });
      this.UI.showScore();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
      this.UI.hideScore();
      this.UI.scoreText.obj.position.y = 21;
      this.UI.scoreText.obj.position.x = -13;
      this.UI.scoreText.changeStyle({ textAlign: 'left' });
    }
  }]);

  return WaitingPage;
}();

exports.default = WaitingPage;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePage = function () {
  function GamePage(game) {
    _classCallCheck(this, GamePage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.UI = this.game.UI;
    this.viewer = this.game.viewer;
    this.name = 'game';
  }

  _createClass(GamePage, [{
    key: 'show',
    value: function show() {
      // this.UI.observe.visible = true

      this.UI.showScore();

      this.UI.scoreText.obj.position.y = 21;
      this.UI.scoreText.obj.position.x = -13;
      this.UI.scoreText.changeStyle({ textAlign: 'left' });
      this.viewer.open();
    }
  }, {
    key: 'hide',
    value: function hide() {
      // this.UI.observe.visible = false
      this.viewer.close();
      this.UI.hideScore();
    }
  }]);

  return GamePage;
}();

exports.default = GamePage;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storage = __webpack_require__(5);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dpr = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio; // 当前屏幕的Dpr， i7p 设置3 会挂
var W = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var H = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth; // CSS像素
var HEIGHT = H * Dpr; // 设备像素
var WIDTH = W * Dpr; // 设备像素

var family = wx.loadFont('res/num.ttf');

var Rank = function () {
	function Rank(options) {
		_classCallCheck(this, Rank);

		this.texture = {};
		this.material = {};
	}

	_createClass(Rank, [{
		key: 'getShareCard',
		value: function getShareCard(opt, cb) {

			opt = opt || {};
			var cwidth = 693; // 553, 693
			var cheight = 558; // 543, 558 
			if (!this.canvas) {
				this.canvas = document.createElement('canvas');
				this.context = this.canvas.getContext('2d');
				this.canvas.width = cwidth;
				this.canvas.height = cheight;
			}

			// console.log('sharetype: ', opt)
			var ctx = this.context;
			if (opt.type == 'shareBattle') {
				ctx.fillStyle = 'white'; // 白色
				ctx.fillRect(0, 0, cwidth, cheight);

				var that = this;
				this._drawImageCanvas1('res/changlle_share.png', 0, 0, cwidth, cheight, 'share', function () {
					ctx.fillStyle = 'rgba(0,0,0,0.8)'; // 灰色文字
					ctx.font = '180px ' + family;
					ctx.textBaseline = "middle";
					ctx.textAlign = 'center';
					ctx.fillText(opt.score || 0, 0.5 * cwidth + 10, 0.6 * cheight);
					!!cb && cb(that.canvas);
				});
			}
			if (opt.type == 'history') {
				// 历史最高分的分享 history
				// new
				ctx.fillStyle = 'white'; // 白色
				ctx.fillRect(0, 0, cwidth, cheight);
				var that = this;
				this._drawImageCanvas1('res/high_score.png', 0, 0, cwidth, cheight, 'share', function () {
					ctx.fillStyle = '#00c777'; // 绿色文字
					ctx.font = '180px ' + family;
					ctx.textBaseline = "middle";
					ctx.textAlign = 'center';
					ctx.fillText(opt.score || 0, 0.5 * cwidth + 10, 0.68 * cheight);
					!!cb && cb(that.canvas);
				});
			}
			if (opt.type == 'week') {
				// 本周最高分的分享 week
				// new
				ctx.fillStyle = 'white'; // 白色
				ctx.fillRect(0, 0, cwidth, cheight);
				var that = this;
				this._drawImageCanvas1('res/high_score_week.png', 0, 0, cwidth, cheight, 'share', function () {
					ctx.fillStyle = '#00c777'; // 绿色文字
					ctx.font = '180px ' + family;
					ctx.textBaseline = "middle";
					ctx.textAlign = 'center';
					ctx.fillText(opt.score || 0, 0.5 * cwidth + 10, 0.68 * cheight);
					!!cb && cb(that.canvas);
				});
			}
			if (opt.type == 'rank') {
				// 排行榜第一的分享 highestRank
				ctx.fillStyle = 'white'; // 白色
				ctx.fillRect(0, 0, cwidth, cheight);
				var that = this;
				var userInfo = _storage2.default.getMyUserInfo();
				// console.log(userInfo.headimg)
				that._drawImageCanvas1(userInfo.headimg, 0.5 * cwidth + 10 - 51, 330 - 51, 102, 102, 'share', function () {
					that._drawImageCanvas1('res/high_rank.png', 0, 0, cwidth, cheight, 'share', function () {
						ctx.fillStyle = '#00c777'; // 绿色文字
						ctx.font = '60px ' + family;
						ctx.textBaseline = "middle";
						ctx.textAlign = 'center';
						ctx.fillText(opt.score || 5678, 0.5 * cwidth + 10, 0.8 * cheight);

						!!cb && cb(that.canvas);
					});
				});
			}
		}
	}, {
		key: '_smallReat',
		value: function _smallReat() {
			var ctx = this.context;
			var colors = ['red', 'blue', 'green', 'yellow', 'skyblue'];
			var cwidth = 553;
			var cheight = 691;

			for (var i = 0; i < colors.length; i++) {
				ctx.fillStyle = colors[i];
				for (var j = 0; j < 5; j++) {
					ctx.fillRect(Math.random() * cwidth, Math.random() * cheight, 15, 15);
				}
			}
		}
	}, {
		key: '_drawImageCanvas',
		value: function _drawImageCanvas(src, x, y, width, height, type, cb) {
			// 在画布里面显示一副图片
			var img = new Image();
			var that = this;
			img.onload = function () {
				that.context.drawImage(img, x - width / 2, y - height / 2, width, height);
				!!cb && cb(that.canvas);
			};
			img.onerror = function () {
				!!cb && cb(that.canvas);
			};
			img.src = src;
		}
	}, {
		key: '_drawImageCanvas1',
		value: function _drawImageCanvas1(src, x, y, width, height, type, cb) {
			// 在画布里面显示一副图片
			if (src == '/0' || src == '/96' || src == '/64' || !src) {
				src = 'res/ava.png';
			}
			var img = new Image();
			var that = this;
			img.onload = function () {
				that.context.drawImage(img, x, y, width, height);
				!!cb && cb(that.canvas);
			};
			img.onerror = function () {
				!!cb && cb(that.canvas);
			};
			img.src = src;
		}
	}]);

	return Rank;
}();

exports.default = Rank;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingleFriendRankPage = function () {
  function SingleFriendRankPage(game) {
    _classCallCheck(this, SingleFriendRankPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.name = 'friendRankList';
  }

  _createClass(SingleFriendRankPage, [{
    key: 'show',
    value: function show() {
      this.full2D.showFriendRankList({
        week_best_score: this.model.weekBestScore
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return SingleFriendRankPage;
}();

exports.default = SingleFriendRankPage;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingleGameOverPage = function () {
  function SingleGameOverPage(game) {
    _classCallCheck(this, SingleGameOverPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.name = 'singleSettlementPgae';
  }

  _createClass(SingleGameOverPage, [{
    key: 'show',
    value: function show() {
      var _this = this;

      var score = this.model.currentScore;
      var highest_score = this.model.getHighestScore();
      var start_time = this.model.startTime;
      var week_best_score = this.model.weekBestScore;
      var game_cnt = this.game.historyTimes.getTimes();
      if (!this.full2D) {
        this.game.handleWxOnError({
          message: 'can not find full 2D gameOverPage',
          stack: ''
        });
      }

      setTimeout(function () {
        if (_this.full2D) {
          _this.full2D.showGameOverPage({
            score: score,
            highest_score: highest_score,
            start_time: start_time,
            week_best_score: week_best_score,
            game_cnt: game_cnt
          });
        } else {
          // wx.exitMiniProgram()
        }
      }, 0);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return SingleGameOverPage;
}();

exports.default = SingleGameOverPage;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePage = function () {
  function GamePage(game) {
    _classCallCheck(this, GamePage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.UI = this.game.UI;
    this.viewer = this.game.viewer;
    this.name = 'game';
  }

  _createClass(GamePage, [{
    key: 'show',
    value: function show() {
      var is_from_wn = this.model.is_from_wn;
      var firstBlood = this.model.firstBlood;

      if (!is_from_wn && !this.game.guider) {
        // this.UI.observe.visible = true
        if (firstBlood) {
          this.viewer.lookers.showLookers({
            avaImg: false,
            icon: true,
            wording: true
          });
        } else {
          this.viewer.open();
        }
      }

      this.UI.showScore();

      this.UI.scoreText.obj.position.y = 21;
      this.UI.scoreText.obj.position.x = -13;
      this.UI.scoreText.changeStyle({ textAlign: 'left' });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.viewer.close();
      // this.UI.observe.visible = false
      this.UI.hideScore();
    }
  }, {
    key: 'hideLookersShare',
    value: function hideLookersShare() {
      var firstBlood = this.model.firstBlood;
      if (firstBlood) {
        this.model.setFirstBlood(false);
        this.viewer.open();
      }
    }
  }]);

  return GamePage;
}();

exports.default = GamePage;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingleStartPage = function () {
  function SingleStartPage(game) {
    _classCallCheck(this, SingleStartPage);

    this.game = game;
    this.model = this.game.gameModel;
    this.full2D = this.game.full2D;
    this.name = 'startPage';
  }

  _createClass(SingleStartPage, [{
    key: 'show',
    value: function show() {
      var _this = this;

      if (!this.full2D) {
        this.game.handleWxOnError({
          message: 'can not find full 2D',
          stack: ''
        });
      }
      setTimeout(function () {
        if (_this.full2D) {
          _this.full2D.showStartPage();
        } else {
          // wx.exitMiniProgram()
        }
      }, 0);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.full2D.hide2D();
    }
  }]);

  return SingleStartPage;
}();

exports.default = SingleStartPage;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Report = function () {
	function Report(options) {
		_classCallCheck(this, Report);
	}

	_createClass(Report, null, [{
		key: 'frameReport',
		value: function frameReport(type, frame) {
			var key = 0; // 默认值
			switch (type) {
				case 'iPhone5':
					key = 1;break;
				case 'iPhone5s':
					key = 2;break;
				case 'iPhone6':
					key = 3;break;
				case 'iPhone6s':
					key = 4;break;
				case 'iPhone6Plus':
					key = 5;break;
				case 'iPhone6sPlus':
					key = 6;break;
				case 'iPhone7':
					key = 7;break;
				case 'iPhone7s':
					key = 8;break;
				case 'iPhone7Plus':
					key = 9;break;
				case 'iPhone7sPlus':
					key = 10;break;
				case 'iPhone8':
					key = 11;break;
				case 'iPhone8Plus':
					key = 12;break;
				case 'iPhoneX':
					key = 13;break;
			}

			new Image().src = "https://mp.weixin.qq.com/mp/jsmonitor?idkey=58121_" + key * 3 + "_" + frame + ";58121_" + (key * 3 + 1) + "_1&t=" + Math.random();
		}
	}]);

	return Report;
}();

exports.default = Report;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Friction = function () {
  /***
   * Friction physics simulation. Friction is actually just a simple
   * power curve; the only trick is taking the natural log of the
   * initial drag so that we can express the answer in terms of time.
   */
  function Friction(drag) {
    _classCallCheck(this, Friction);

    this._drag = drag;
    this._dragLog = Math.log(drag);
    this._x = 0;
    this._v = 0;
    this._startTime = 0;
  }

  _createClass(Friction, [{
    key: "set",
    value: function set(x, v) {
      this._x = x;
      this._v = v;
      this._startTime = new Date().getTime();
    }
  }, {
    key: "x",
    value: function x(dt) {
      if (dt === undefined) dt = (new Date().getTime() - this._startTime) / 1000;
      var powDragDt;
      if (dt === this._dt && this._powDragDt) {
        powDragDt = this._powDragDt;
      } else {
        powDragDt = this._powDragDt = Math.pow(this._drag, dt);
      }
      this._dt = dt;
      return this._x + this._v * powDragDt / this._dragLog - this._v / this._dragLog;
    }
  }, {
    key: "dx",
    value: function dx(dt) {
      if (dt === undefined) dt = (new Date().getTime() - this._startTime) / 1000;
      var powDragDt;
      if (dt === this._dt && this._powDragDt) {
        powDragDt = this._powDragDt;
      } else {
        powDragDt = this._powDragDt = Math.pow(this._drag, dt);
      }
      this._dt = dt;
      return this._v * powDragDt;
    }
  }, {
    key: "done",
    value: function done() {
      return Math.abs(this.dx()) < 3;
    }
  }]);

  return Friction;
}();

exports.default = Friction;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _friction = __webpack_require__(56);

var _friction2 = _interopRequireDefault(_friction);

var _spring = __webpack_require__(58);

var _spring2 = _interopRequireDefault(_spring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroll = function () {
  /***
   * Scroll combines Friction and Spring to provide the
   * classic "flick-with-bounce" behavior.
   */
  function Scroll(extent) {
    _classCallCheck(this, Scroll);

    this._extent = extent;
    this._friction = new _friction2.default(0.01);
    this._spring = new _spring2.default(1, 90, 20);
    this._startTime = 0;
    this._springing = false;
    this._springOffset = 0;
  }

  _createClass(Scroll, [{
    key: 'set',
    value: function set(x, v) {
      this._friction.set(x, v);

      // If we're over the extent or zero then start springing. Notice that we also consult
      // velocity because we don't want flicks that start in the overscroll to get consumed
      // by the spring.
      if (x > 0 && v >= 0) {
        this._springOffset = 0;
        this._springing = true;
        this._spring.snap(x);
        this._spring.setEnd(0);
      } else if (x < -this._extent && v <= 0) {
        this._springOffset = 0;
        this._springing = true;
        this._spring.snap(x);
        this._spring.setEnd(-this._extent);
      } else {
        this._springing = false;
      }
      this._startTime = new Date().getTime();
    }
  }, {
    key: 'x',
    value: function x(t) {
      if (!this._startTime) return 0;
      if (!t) t = (new Date().getTime() - this._startTime) / 1000.0;
      // We've entered the spring, use the value from there.
      if (this._springing) return this._spring.x() + this._springOffset;
      // We're still in friction.
      var x = this._friction.x(t);
      var dx = this.dx(t);
      // If we've gone over the edge the roll the momentum into the spring.
      // console.log('x: ', x, 'dx: ', dx, ' _extent:', this._extent, ' _springOffset: ', this._springOffset)
      if ( /*(x > 0 && dx >= 0) || */x < -this._extent && dx <= 0) {
        this._springing = true;
        this._spring.setEnd(0, dx);
        if (x < -this._extent) this._springOffset = -this._extent;else this._springOffset = 0;
        x = this._spring.x() + this._springOffset;
      }
      return x;
    }
  }, {
    key: 'dx',
    value: function dx(t) {
      var dx = 0;

      if (this._lastTime === t) {
        dx = this._lastDx;
      } else if (this._springing) {
        dx = this._spring.dx(t);
      } else {
        dx = this._friction.dx(t);
      }

      this._lastTime = t;
      this._lastDx = dx;
      return dx;
    }
  }, {
    key: 'done',
    value: function done() {
      if (this._springing) return this._spring.done();else return this._friction.done();
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var epsilon = 0.4;

var Spring = function () {

  /***
   * Simple Spring implementation -- this implements a damped spring using a symbolic integration
   * of Hooke's law: F = -kx - cv. This solution is significantly more performant and less code than
   * a numerical approach such as Facebook Rebound which uses RK4.
   *
   * This physics textbook explains the model:
   *  http://www.stewartcalculus.com/data/CALCULUS%20Concepts%20and%20Contexts/upfiles/3c3-AppsOf2ndOrders_Stu.pdf
   *
   * A critically damped spring has: damping*damping - 4 * mass * springConstant == 0. If it's greater than zero
   * then the spring is overdamped, if it's less than zero then it's underdamped.
   */
  function Spring(mass, springConstant, damping) {
    _classCallCheck(this, Spring);

    this._m = mass;
    this._k = springConstant;
    this._c = damping;
    this._solution = null;
    this._endPosition = 0;
    this._startTime = 0;
  }

  _createClass(Spring, [{
    key: "_solve",
    value: function _solve(initial, velocity) {
      var c = this._c;
      var m = this._m;
      var k = this._k;
      // Solve the quadratic equation; root = (-c +/- sqrt(c^2 - 4mk)) / 2m.
      var cmk = c * c - 4 * m * k;
      if (cmk == 0) {
        // The spring is critically damped.
        // x = (c1 + c2*t) * e ^(-c/2m)*t
        var r = -c / (2 * m);
        var c1 = initial;
        var c2 = velocity / (r * initial);
        return {
          x: function x(t) {
            return (c1 + c2 * t) * Math.pow(Math.E, r * t);
          },
          dx: function dx(t) {
            var pow = Math.pow(Math.E, r * t);return r * (c1 + c2 * t) * pow + c2 * pow;
          }
        };
      } else if (cmk > 0) {
        // The spring is overdamped; no bounces.
        // x = c1*e^(r1*t) + c2*e^(r2t)
        // Need to find r1 and r2, the roots, then solve c1 and c2.
        var r1 = (-c - Math.sqrt(cmk)) / (2 * m);
        var r2 = (-c + Math.sqrt(cmk)) / (2 * m);
        var c2 = (velocity - r1 * initial) / (r2 - r1);
        var c1 = initial - c2;

        return {
          x: function x(t) {
            var powER1T, powER2T;
            if (t === this._t) {
              powER1T = this._powER1T;
              powER2T = this._powER2T;
            }

            this._t = t;

            if (!powER1T) {
              powER1T = this._powER1T = Math.pow(Math.E, r1 * t);
            }
            if (!powER2T) {
              powER2T = this._powER2T = Math.pow(Math.E, r2 * t);
            }

            return c1 * powER1T + c2 * powER2T;
          },
          dx: function dx(t) {
            var powER1T, powER2T;
            if (t === this._t) {
              powER1T = this._powER1T;
              powER2T = this._powER2T;
            }

            this._t = t;

            if (!powER1T) {
              powER1T = this._powER1T = Math.pow(Math.E, r1 * t);
            }
            if (!powER2T) {
              powER2T = this._powER2T = Math.pow(Math.E, r2 * t);
            }

            return c1 * r1 * powER1T + c2 * r2 * powER2T;
          }
        };
      } else {
        // The spring is underdamped, it has imaginary roots.
        // r = -(c / 2*m) +- w*i
        // w = sqrt(4mk - c^2) / 2m
        // x = (e^-(c/2m)t) * (c1 * cos(wt) + c2 * sin(wt))
        var w = Math.sqrt(4 * m * k - c * c) / (2 * m);
        var r = -(c / 2 * m);
        var c1 = initial;
        var c2 = (velocity - r * initial) / w;

        return {
          x: function x(t) {
            return Math.pow(Math.E, r * t) * (c1 * Math.cos(w * t) + c2 * Math.sin(w * t));
          },
          dx: function dx(t) {
            var power = Math.pow(Math.E, r * t);
            var cos = Math.cos(w * t);
            var sin = Math.sin(w * t);
            return power * (c2 * w * cos - c1 * w * sin) + r * power * (c2 * sin + c1 * cos);
          }
        };
      }
    }
  }, {
    key: "x",
    value: function x(dt) {
      if (dt == undefined) dt = (new Date().getTime() - this._startTime) / 1000.0;
      return this._solution ? this._endPosition + this._solution.x(dt) : 0;
    }
  }, {
    key: "dx",
    value: function dx(dt) {
      if (dt == undefined) dt = (new Date().getTime() - this._startTime) / 1000.0;
      return this._solution ? this._solution.dx(dt) : 0;
    }
  }, {
    key: "setEnd",
    value: function setEnd(x, velocity, t) {
      if (!t) t = new Date().getTime();
      if (x == this._endPosition && this.almostZero(velocity, epsilon)) return;
      velocity = velocity || 0;
      var position = this._endPosition;
      if (this._solution) {
        // Don't whack incoming velocity.
        if (this.almostZero(velocity, epsilon)) velocity = this._solution.dx((t - this._startTime) / 1000.0);
        position = this._solution.x((t - this._startTime) / 1000.0);
        if (this.almostZero(velocity, epsilon)) velocity = 0;
        if (this.almostZero(position, epsilon)) position = 0;
        position += this._endPosition;
      }
      if (this._solution && this.almostZero(position - x, epsilon) && this.almostZero(velocity, epsilon)) {
        return;
      }
      this._endPosition = x;
      this._solution = this._solve(position - this._endPosition, velocity);
      this._startTime = t;
    }
  }, {
    key: "snap",
    value: function snap(x) {
      this._startTime = new Date().getTime();
      this._endPosition = x;
      this._solution = {
        x: function x() {
          return 0;
        },
        dx: function dx() {
          return 0;
        }
      };
    }
  }, {
    key: "done",
    value: function done(t) {
      if (!t) t = new Date().getTime();
      return this.almostEqual(this.x(), this._endPosition, epsilon) && this.almostZero(this.dx(), epsilon);
    }
  }, {
    key: "almostEqual",
    value: function almostEqual(a, b, epsilon) {
      return a > b - epsilon && a < b + epsilon;
    }
  }, {
    key: "almostZero",
    value: function almostZero(a, epsilon) {
      return this.almostEqual(a, 0, epsilon);
    }
  }]);

  return Spring;
}();

exports.default = Spring;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = encrypt;

var _aes = __webpack_require__(40);

var _aes2 = _interopRequireDefault(_aes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function encrypt(data, originKey) {
  var originKey = originKey.slice(0, 16);
  var key = _aes2.default.enc.Utf8.parse(originKey);
  var iv = _aes2.default.enc.Utf8.parse(originKey);

  var msg = data;
  msg = JSON.stringify(msg);
  // console.log('msgmsgmsgmsgmsg', msg)
  // console.log('keykeykeykey',originKey)
  var passWord = _aes2.default.AES.encrypt(msg, key, { iv: iv, mode: _aes2.default.mode.CBC, padding: _aes2.default.pad.Pkcs7 });
  passWord = passWord.toString();

  // console.log('passWordpassWordpassWord', passWord)
  return passWord;
}

// export function testEncription(msg, fullKey) {
//   var fullKey = fullKey.slice(0, 16)
//   var key = CryptoJS.enc.Utf8.parse(fullKey)
//   var iv = CryptoJS.enc.Utf8.parse(fullKey)

//   var passWord = CryptoJS.AES.encrypt(msg, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
//   var base64 = passWord.toString()

//   console.log('passWord', passWord)
//   console.log('sessionId', sessionId)
//   console.log('key', key)
//   console.log('base64', base64)

//   var bytes = CryptoJS.AES.decrypt(base64, key, {
//     iv: iv
//   });
//   console.log('bytes', bytes)
//   var plaintext = CryptoJS.enc.Utf8.stringify(bytes);
//   console.log('plaintext', plaintext)
// }

/***/ })
/******/ ]); 
 			}); 	require("game.js");
 	