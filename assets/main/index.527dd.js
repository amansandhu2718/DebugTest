window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GameController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4950d7UgeJGAb2kPS5ua4wp", "GameController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameController = function(_super) {
      __extends(GameController, _super);
      function GameController() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GameController.prototype.onLoad = function() {
        this.EnableGravity();
        this.SetWalls();
      };
      GameController.prototype.start = function() {};
      GameController.prototype.update = function(dt) {
        this.SetWalls();
      };
      GameController.prototype.EnableGravity = function() {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, -2e3);
      };
      GameController.prototype.SetWalls = function() {
        console.log("get frame size()" + cc.view.getFrameSize().width + " canvas width:" + this.node.width + " ");
        var canvasWidth = this.node.width;
        var LeftPointX = 0 - canvasWidth / 2;
        var RightPointX = 0 + canvasWidth / 2;
        var x1 = LeftPointX;
        var x2 = RightPointX;
        this.leftWall.setPosition(x1, 0);
        this.rightWall.setPosition(x2, 0);
      };
      __decorate([ property(cc.Node) ], GameController.prototype, "leftWall", void 0);
      __decorate([ property(cc.Node) ], GameController.prototype, "rightWall", void 0);
      GameController = __decorate([ ccclass ], GameController);
      return GameController;
    }(cc.Component);
    exports.default = GameController;
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b473Lgh89M060Z9qhmtHXt", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.direction = 0;
        _this.velocity_Max_X = 325;
        _this.walkForce = 15e3;
        _this.jumpForce = 5e5;
        _this.onGround = false;
        return _this;
      }
      Player.prototype.onLoad = function() {
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.setInputControl();
      };
      Player.prototype.update = function(dt) {
        (this.direction > 0 && this.rigidBody.linearVelocity.x < this.velocity_Max_X || this.direction < 0 && this.rigidBody.linearVelocity.x > -this.velocity_Max_X) && this.rigidBody.applyForceToCenter(cc.v2(this.direction * this.walkForce, 0), true);
      };
      Player.prototype.setInputControl = function() {
        var _this = this;
        var self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
          switch (event.keyCode) {
           case cc.macro.KEY.a:
            self.direction = -1;
            console.log("A pressed");
            break;

           case cc.macro.KEY.d:
            self.direction = 1;
            console.log("D pressed");
            break;

           case cc.macro.KEY.space:
            this.jumpAction();
            console.log("W pressed");
          }
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(event) {
          switch (event.keyCode) {
           case cc.macro.KEY.a:
           case cc.macro.KEY.d:
            self.direction = 0;
          }
        }, this);
        this.leftControlButton.on(cc.Node.EventType.TOUCH_START, function() {
          self.direction = -1;
          console.log("LEFT pressed");
        }, this);
        this.leftControlButton.on(cc.Node.EventType.TOUCH_END, function() {
          self.direction = 0;
        }, this);
        this.rightControlButton.on(cc.Node.EventType.TOUCH_START, function() {
          self.direction = 1;
          console.log("RIGHT pressed");
        }, this);
        this.rightControlButton.on(cc.Node.EventType.TOUCH_END, function() {
          self.direction = 0;
        }, this);
        this.jumpButton.on(cc.Node.EventType.TOUCH_START, function() {
          _this.jumpAction();
          console.log("JUMP pressed");
        }, this);
      };
      Player.prototype.jumpAction = function() {
        if (this.onGround) {
          this.rigidBody.applyForceToCenter(cc.v2(0, this.jumpForce), true);
          this.onGround = false;
        }
      };
      Player.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        2 == selfCollider.tag && (this.onGround = true);
      };
      __decorate([ property(cc.Node) ], Player.prototype, "canvas", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "leftControlButton", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "rightControlButton", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "jumpButton", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameController", "Player" ]);