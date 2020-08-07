/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webgl_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/App */ \"./ts/webgl/App.ts\");\n\n\nvar index = function index() {\n  var canvasElement = document.querySelector('#canvas');\n  if (canvasElement === null) return;\n  new _webgl_App__WEBPACK_IMPORTED_MODULE_0__[\"App\"](canvasElement);\n};\n\nindex();\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ }),

/***/ "./ts/webgl/App.ts":
/*!*************************!*\
  !*** ./ts/webgl/App.ts ***!
  \*************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _objects_Words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Words */ \"./ts/webgl/objects/Words.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(canvasElement) {\n    _classCallCheck(this, App);\n\n    _defineProperty(this, \"viewProps\", void 0);\n\n    _defineProperty(this, \"canvasElement\", void 0);\n\n    _defineProperty(this, \"renderer\", void 0);\n\n    _defineProperty(this, \"scene\", void 0);\n\n    _defineProperty(this, \"camera\", void 0);\n\n    _defineProperty(this, \"lightHemi\", void 0);\n\n    _defineProperty(this, \"lightPoint\", void 0);\n\n    _defineProperty(this, \"words\", void 0);\n\n    _defineProperty(this, \"clock\", void 0);\n\n    _defineProperty(this, \"time\", void 0);\n\n    this.viewProps = {\n      width: window.innerWidth,\n      height: window.innerHeight,\n      dpr: Math.min(devicePixelRatio, 2 || false)\n    };\n    this.canvasElement = canvasElement;\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: true,\n      canvas: this.canvasElement\n    });\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, this.viewProps.width / this.viewProps.height, 1, 10000);\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n    this.time = 0; // this.lightHemi = new THREE.HemisphereLight(0xffffff, 0x666666, 5);\n    // this.lightPoint = new THREE.PointLight(0xff0000, 4, 1000);\n\n    this.words = new _objects_Words__WEBPACK_IMPORTED_MODULE_1__[\"Words\"]();\n    this.init();\n    this.bind();\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var deltaTime = this.clock.getDelta();\n      this.words.update(deltaTime);\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      this.render();\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }, {\n    key: \"handleResize\",\n    value: function handleResize() {\n      console.log('resize');\n      var vp = this.viewProps;\n      vp.width = window.innerWidth;\n      vp.height = window.innerHeight;\n      this.renderer.setSize(vp.width, vp.height);\n      this.camera.aspect = vp.width / vp.height;\n      this.camera.updateProjectionMatrix(); //this.words.resize();\n    }\n  }, {\n    key: \"bind\",\n    value: function bind() {\n      window.addEventListener('resize', this.handleResize.bind(this));\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log('init');\n      var vp = this.viewProps;\n      vp.width = window.innerWidth;\n      vp.height = window.innerHeight;\n      this.renderer.setSize(vp.width, vp.height);\n      this.renderer.setClearColor(0xffffff, 1.0);\n      this.camera.position.z = 300; // this.lightPoint.position.set(0, 0, 0);\n\n      this.scene.add(this.words.mesh);\n      this.clock.start();\n      this.animate();\n    }\n  }]);\n\n  return App;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/App.ts?");

/***/ }),

/***/ "./ts/webgl/objects/Words.ts":
/*!***********************************!*\
  !*** ./ts/webgl/objects/Words.ts ***!
  \***********************************/
/*! exports provided: Words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Words\", function() { return Words; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Words = /*#__PURE__*/function () {\n  function Words() {\n    _classCallCheck(this, Words);\n\n    _defineProperty(this, \"time\", void 0);\n\n    _defineProperty(this, \"mesh\", void 0);\n\n    this.time = 0;\n    this.mesh = this.createMesh();\n  }\n\n  _createClass(Words, [{\n    key: \"update\",\n    value: function update(deltaTime) {\n      this.time += deltaTime;\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {}\n  }, {\n    key: \"createGeometry\",\n    value: function createGeometry() {\n      var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneGeometry\"](50, 50);\n      return geometry;\n    }\n  }, {\n    key: \"createMaterial\",\n    value: function createMaterial() {\n      var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\n        color: 0x000000\n      });\n      return material;\n    }\n  }, {\n    key: \"createMesh\",\n    value: function createMesh() {\n      var geometry = this.createGeometry();\n      var material = this.createMaterial();\n      var mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n      return mesh;\n    }\n  }]);\n\n  return Words;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/objects/Words.ts?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./ts/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/rei.matsuda/workSpace/git/webGl/unshift_blog_webGL1/resources/ts/index.ts */\"./ts/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./ts/index.ts?");

/***/ })

/******/ });