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

/***/ "./shaders/octahedron/fragment.frag":
/*!******************************************!*\
  !*** ./shaders/octahedron/fragment.frag ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\n#define GLSLIFY 1\\n\\nuniform mat3 normalMatrix;\\nuniform float time;\\n\\nvarying vec3 vPosition;\\nvarying float vNoise;\\nvarying float vNow;\\n\\nconst vec3 lightDirection = vec3(1.0, -1.0, -1.0);\\nconst float duration = 2.0;\\nconst float delayAll = 1.0;\\n\\nvec3 convertHsvToRgb(vec3 c) {\\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\\n}\\n\\nvoid main() {\\n  float now = clamp((time - delayAll - 1.5) / duration, 0.0, 1.0);\\n  vec3 normal = normalize(cross(dFdx(vPosition), dFdy(vPosition)));\\n  vec3 light = normalize(normalMatrix * lightDirection);\\n  float diff = (dot(normal, light) + 1.0) / 2.0 * 0.2;\\n  float opacity = smoothstep(0.1, 0.2, vNow);\\n  vec3 v = normalize(vPosition);\\n  vec3 rgb = (1.0 - now) * vec3(1.0) + convertHsvToRgb(vec3(0.5 + (v.x + v.y + v.x) / 40.0 + time * 0.1, 0.8, 0.4 + sin(time) * 0.05 + vNoise * 0.02));\\n  gl_FragColor = vec4(rgb + diff, opacity);\\n}\\n\");\n\n//# sourceURL=webpack:///./shaders/octahedron/fragment.frag?");

/***/ }),

/***/ "./shaders/octahedron/vertex.vert":
/*!****************************************!*\
  !*** ./shaders/octahedron/vertex.vert ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#define GLSLIFY 1\\nattribute vec3 position;\\nattribute vec3 faceNormal;\\n\\nuniform mat4 modelViewMatrix;\\nuniform mat4 projectionMatrix;\\nuniform float time;\\n\\nvarying vec3 vPosition;\\nvarying float vNoise;\\nvarying float vNow;\\n\\nconst float duration = 2.0;\\nconst float delayAll = 1.0;\\n\\nfloat exponentialOut(float t) {\\n  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\\n}\\n\\nmat4 calcTranslateMat4(vec3 v) {\\n  return mat4(\\n    1.0, 0.0, 0.0, 0.0,\\n    0.0, 1.0, 0.0, 0.0,\\n    0.0, 0.0, 1.0, 0.0,\\n    v.x, v.y, v.z, 1.0\\n  );\\n}\\n\\nmat4 calcRotateMat4X(float radian) {\\n  return mat4(\\n    1.0, 0.0, 0.0, 0.0,\\n    0.0, cos(radian), -sin(radian), 0.0,\\n    0.0, sin(radian), cos(radian), 0.0,\\n    0.0, 0.0, 0.0, 1.0\\n  );\\n}\\n\\nmat4 calcRotateMat4Y(float radian) {\\n  return mat4(\\n    cos(radian), 0.0, sin(radian), 0.0,\\n    0.0, 1.0, 0.0, 0.0,\\n    -sin(radian), 0.0, cos(radian), 0.0,\\n    0.0, 0.0, 0.0, 1.0\\n  );\\n}\\n\\nmat4 calcRotateMat4Z(float radian) {\\n  return mat4(\\n    cos(radian), -sin(radian), 0.0, 0.0,\\n    sin(radian), cos(radian), 0.0, 0.0,\\n    0.0, 0.0, 1.0, 0.0,\\n    0.0, 0.0, 0.0, 1.0\\n  );\\n}\\n\\nmat4 calcRotateMat4(vec3 radian) {\\n  return calcRotateMat4X(radian.x) * calcRotateMat4Y(radian.y) * calcRotateMat4Z(radian.z);\\n}\\n\\n//\\n// GLSL textureless classic 3D noise \\\"cnoise\\\",\\n// with an RSL-style periodic variant \\\"pnoise\\\".\\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\\n// Version: 2011-10-11\\n//\\n// Many thanks to Ian McEwan of Ashima Arts for the\\n// ideas for permutation and gradient selection.\\n//\\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\\n// Distributed under the MIT license. See LICENSE file.\\n// https://github.com/ashima/webgl-noise\\n//\\n\\nvec3 mod289(vec3 x)\\n{\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 mod289(vec4 x)\\n{\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 permute(vec4 x)\\n{\\n  return mod289(((x*34.0)+1.0)*x);\\n}\\n\\nvec4 taylorInvSqrt(vec4 r)\\n{\\n  return 1.79284291400159 - 0.85373472095314 * r;\\n}\\n\\nvec3 fade(vec3 t) {\\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\\n}\\n\\n// Classic Perlin noise\\nfloat cnoise(vec3 P)\\n{\\n  vec3 Pi0 = floor(P); // Integer part for indexing\\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\\n  Pi0 = mod289(Pi0);\\n  Pi1 = mod289(Pi1);\\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\\n  vec4 iz0 = Pi0.zzzz;\\n  vec4 iz1 = Pi1.zzzz;\\n\\n  vec4 ixy = permute(permute(ix) + iy);\\n  vec4 ixy0 = permute(ixy + iz0);\\n  vec4 ixy1 = permute(ixy + iz1);\\n\\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\\n  gx0 = fract(gx0);\\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\\n  vec4 sz0 = step(gz0, vec4(0.0));\\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\\n\\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\\n  gx1 = fract(gx1);\\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\\n  vec4 sz1 = step(gz1, vec4(0.0));\\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\\n\\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\\n\\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\\n  g000 *= norm0.x;\\n  g010 *= norm0.y;\\n  g100 *= norm0.z;\\n  g110 *= norm0.w;\\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\\n  g001 *= norm1.x;\\n  g011 *= norm1.y;\\n  g101 *= norm1.z;\\n  g111 *= norm1.w;\\n\\n  float n000 = dot(g000, Pf0);\\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\\n  float n111 = dot(g111, Pf1);\\n\\n  vec3 fade_xyz = fade(Pf0);\\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\\n  return 2.2 * n_xyz;\\n}\\n\\nvoid main() {\\n  float t = time * 1.0;\\n  mat4 translateMat = calcTranslateMat4(vec3(faceNormal) * 40.0 * (sin(t) + 2.0));\\n  mat4 rotateMat = calcRotateMat4(vec3(0.0, radians((1.0 - t) * 40.0), 0.0));\\n  float noise = smoothstep(-0.4, 0.4,\\n    cnoise(vec3(position.x * 0.035 - t, position.y * 0.035 - time, position.z * 0.035 + t))\\n  ) * 2.0 - 1.0;\\n  vec4 updatePosition = rotateMat * translateMat * vec4(position, 1.0);\\n  vPosition = updatePosition.xyz;\\n  vNoise = noise;\\n  vNow = t;\\n  gl_Position = projectionMatrix * modelViewMatrix * updatePosition;\\n}\\n\");\n\n//# sourceURL=webpack:///./shaders/octahedron/vertex.vert?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _objects_Octahedron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Octahedron */ \"./ts/webgl/objects/Octahedron.ts\");\n/* harmony import */ var _objects_LightOctahedron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/LightOctahedron */ \"./ts/webgl/objects/LightOctahedron.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import Ground from './Ground';\n// import SkyOctahedronShell from './SkyOctahedronShell';\n// import SkyOctahedron from './SkyOctahedron';\n\nvar App = /*#__PURE__*/function () {\n  function App(canvasElement) {\n    _classCallCheck(this, App);\n\n    _defineProperty(this, \"canvasElement\", void 0);\n\n    _defineProperty(this, \"renderer\", void 0);\n\n    _defineProperty(this, \"scene\", void 0);\n\n    _defineProperty(this, \"camera\", void 0);\n\n    _defineProperty(this, \"lightHemi\", void 0);\n\n    _defineProperty(this, \"lightPoint\", void 0);\n\n    _defineProperty(this, \"clock\", void 0);\n\n    _defineProperty(this, \"time\", void 0);\n\n    _defineProperty(this, \"octahedron\", void 0);\n\n    _defineProperty(this, \"lightOctahedron\", void 0);\n\n    this.canvasElement = canvasElement;\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      antialias: false,\n      canvas: this.canvasElement\n    });\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, document.body.clientWidth / window.innerHeight, 1, 10000);\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n    this.time = 0;\n    this.lightHemi = new three__WEBPACK_IMPORTED_MODULE_0__[\"HemisphereLight\"](0xffffff, 0x666666, 5);\n    this.lightPoint = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xff0000, 4, 1000);\n    this.octahedron = new _objects_Octahedron__WEBPACK_IMPORTED_MODULE_1__[\"Octahedron\"](100, 3);\n    this.lightOctahedron = new _objects_LightOctahedron__WEBPACK_IMPORTED_MODULE_2__[\"LightOctahedron\"](60, 3);\n    this.init();\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var time = this.clock.getDelta(); // this.time += 0.00007;\n      // console.log(time);\n\n      this.octahedron.render(time); // this.skyOctahedron.render(time);\n      // this.skyOctahedronShell.render(time);\n\n      this.renderer.render(this.scene, this.camera);\n      requestAnimationFrame(this.render.bind(this));\n    } // renderLoop() {\n    //   this.render();\n    // }\n\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.log('init');\n      this.renderer.setSize(document.body.clientWidth, window.innerHeight);\n      this.renderer.setClearColor(0x000000, 1.0);\n      this.camera.position.z = 700; // this.camera.position.y = -50;\n      // this.lightHemi.position.set(0, 10, 10);\n\n      this.lightPoint.position.set(0, 0, 0); // this.scene.add(this.lightHemi);\n      // const pointLightHelper = new THREE.PointLightHelper(this.lightPoint, 1);\n      // this.scene.add(pointLightHelper);\n\n      this.scene.add(this.octahedron.object);\n      this.clock.start();\n      this.render();\n    }\n  }]);\n\n  return App;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/App.ts?");

/***/ }),

/***/ "./ts/webgl/objects/LightOctahedron.ts":
/*!*********************************************!*\
  !*** ./ts/webgl/objects/LightOctahedron.ts ***!
  \*********************************************/
/*! exports provided: LightOctahedron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightOctahedron\", function() { return LightOctahedron; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import fs from '../../../shaders/octahedron/fragment.frag';\n// import vs from '../../../shaders/octahedron/vertex.vert';\n\nvar LightOctahedron = /*#__PURE__*/function () {\n  function LightOctahedron() {\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n    _classCallCheck(this, LightOctahedron);\n\n    _defineProperty(this, \"size\", void 0);\n\n    _defineProperty(this, \"detail\", void 0);\n\n    _defineProperty(this, \"uniforms\", void 0);\n\n    _defineProperty(this, \"object\", void 0);\n\n    this.size = size;\n    this.detail = detail;\n    this.object = this.createObject();\n  }\n\n  _createClass(LightOctahedron, [{\n    key: \"createGeometry\",\n    value: function createGeometry() {\n      var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"OctahedronBufferGeometry\"](this.size, this.detail);\n      return geometry;\n    }\n  }, {\n    key: \"createMaterial\",\n    value: function createMaterial() {\n      var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\n        color: 0xffffff\n      });\n      return material;\n    }\n  }, {\n    key: \"createObject\",\n    value: function createObject() {\n      var geometry = this.createGeometry();\n      var material = this.createMaterial();\n      var mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n      return mesh;\n    }\n  }, {\n    key: \"render\",\n    value: function render(time) {\n      this.uniforms.time.value += time;\n    }\n  }]);\n\n  return LightOctahedron;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/objects/LightOctahedron.ts?");

/***/ }),

/***/ "./ts/webgl/objects/Octahedron.ts":
/*!****************************************!*\
  !*** ./ts/webgl/objects/Octahedron.ts ***!
  \****************************************/
/*! exports provided: Octahedron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Octahedron\", function() { return Octahedron; });\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice */ \"./node_modules/core-js/modules/es.array-buffer.slice.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_math_hypot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.math.hypot */ \"./node_modules/core-js/modules/es.math.hypot.js\");\n/* harmony import */ var core_js_modules_es_math_hypot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_hypot__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array */ \"./node_modules/core-js/modules/es.typed-array.float32-array.js\");\n/* harmony import */ var core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ \"./node_modules/core-js/modules/es.typed-array.copy-within.js\");\n/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.typed-array.every */ \"./node_modules/core-js/modules/es.typed-array.every.js\");\n/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill */ \"./node_modules/core-js/modules/es.typed-array.fill.js\");\n/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter */ \"./node_modules/core-js/modules/es.typed-array.filter.js\");\n/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.find */ \"./node_modules/core-js/modules/es.typed-array.find.js\");\n/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index */ \"./node_modules/core-js/modules/es.typed-array.find-index.js\");\n/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each */ \"./node_modules/core-js/modules/es.typed-array.for-each.js\");\n/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes */ \"./node_modules/core-js/modules/es.typed-array.includes.js\");\n/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of */ \"./node_modules/core-js/modules/es.typed-array.index-of.js\");\n/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator */ \"./node_modules/core-js/modules/es.typed-array.iterator.js\");\n/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.join */ \"./node_modules/core-js/modules/es.typed-array.join.js\");\n/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ \"./node_modules/core-js/modules/es.typed-array.last-index-of.js\");\n/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.map */ \"./node_modules/core-js/modules/es.typed-array.map.js\");\n/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce */ \"./node_modules/core-js/modules/es.typed-array.reduce.js\");\n/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ \"./node_modules/core-js/modules/es.typed-array.reduce-right.js\");\n/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse */ \"./node_modules/core-js/modules/es.typed-array.reverse.js\");\n/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.set */ \"./node_modules/core-js/modules/es.typed-array.set.js\");\n/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice */ \"./node_modules/core-js/modules/es.typed-array.slice.js\");\n/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.some */ \"./node_modules/core-js/modules/es.typed-array.some.js\");\n/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort */ \"./node_modules/core-js/modules/es.typed-array.sort.js\");\n/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray */ \"./node_modules/core-js/modules/es.typed-array.subarray.js\");\n/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ \"./node_modules/core-js/modules/es.typed-array.to-locale-string.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string */ \"./node_modules/core-js/modules/es.typed-array.to-string.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _shaders_octahedron_fragment_frag__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shaders/octahedron/fragment.frag */ \"./shaders/octahedron/fragment.frag\");\n/* harmony import */ var _shaders_octahedron_vertex_vert__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shaders/octahedron/vertex.vert */ \"./shaders/octahedron/vertex.vert\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Octahedron = /*#__PURE__*/function () {\n  function Octahedron() {\n    var _this = this;\n\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n    _classCallCheck(this, Octahedron);\n\n    _defineProperty(this, \"size\", void 0);\n\n    _defineProperty(this, \"detail\", void 0);\n\n    _defineProperty(this, \"uniforms\", void 0);\n\n    _defineProperty(this, \"object\", void 0);\n\n    _defineProperty(this, \"normalizeVector\", function (vector3d) {\n      var x = 0,\n          y = 1,\n          z = 2;\n      var length = Math.hypot(vector3d[x], vector3d[y], vector3d[z]);\n\n      if (length !== 0) {\n        var normalizedVector = vector3d.map(function (value) {\n          return value / length;\n        });\n        return normalizedVector;\n      } else {\n        return [0, 0, 0];\n      }\n    });\n\n    _defineProperty(this, \"calcNormal\", function (baseVector, vector1, vector2) {\n      var normals = [0, 0, 0];\n      var x = 0,\n          y = 1,\n          z = 2;\n      var vectorA = [vector1[x] - baseVector[x], vector1[y] - baseVector[y], vector1[z] - baseVector[z]];\n      var vectorB = [vector2[x] - baseVector[x], vector2[y] - baseVector[y], vector2[z] - baseVector[z]];\n      normals[x] = vectorA[y] * vectorB[z] - vectorA[z] * vectorB[y];\n      normals[y] = vectorA[z] * vectorB[x] - vectorA[x] * vectorB[z];\n      normals[z] = vectorA[x] * vectorB[y] - vectorA[y] * vectorB[x];\n\n      var normalizedVector = _this.normalizeVector(normals);\n\n      return normalizedVector;\n    });\n\n    this.size = size;\n    this.detail = detail;\n    this.uniforms = {\n      time: {\n        type: 'f',\n        value: 0\n      }\n    };\n    this.object = this.createObject();\n  }\n\n  _createClass(Octahedron, [{\n    key: \"createFaceNormalAttribute\",\n    value: function createFaceNormalAttribute(positions, pointsPerPolygon) {\n      var dimension = 3;\n      var positionsLength = positions.length;\n      var positionsPerPolygon = pointsPerPolygon * dimension;\n      var faceNormalAttribute = [];\n      var x = 0,\n          y = 1,\n          z = 2;\n\n      for (var i = 0; i < positionsLength; i += positionsPerPolygon) {\n        var basePosition = [positions[i + 0], positions[i + 1], positions[i + 2]];\n        var position1 = [positions[i + 3], positions[i + 4], positions[i + 5]];\n        var position2 = [positions[i + 6], positions[i + 7], positions[i + 8]];\n        var faceNormal = this.calcNormal(basePosition, position1, position2);\n\n        for (var j = 0; j < pointsPerPolygon; j++) {\n          faceNormalAttribute.push(faceNormal[x], faceNormal[y], faceNormal[z]);\n        }\n\n        ;\n      }\n\n      ;\n      return faceNormalAttribute;\n    }\n  }, {\n    key: \"createGeometry\",\n    value: function createGeometry() {\n      var geometry = new three__WEBPACK_IMPORTED_MODULE_29__[\"OctahedronBufferGeometry\"](this.size, this.detail);\n      /* reinventing the wheel */\n\n      var positions = geometry.attributes.position.array;\n      var pointsPerPolygon = 3;\n      var faceNormalAttribute = this.createFaceNormalAttribute(positions, pointsPerPolygon);\n      geometry.setAttribute('faceNormal', new three__WEBPACK_IMPORTED_MODULE_29__[\"BufferAttribute\"](new Float32Array(faceNormalAttribute), pointsPerPolygon));\n      /* the wheel */\n      // geometry.computeVertexNormals();\n\n      return geometry;\n    }\n  }, {\n    key: \"createMaterial\",\n    value: function createMaterial() {\n      var material = new three__WEBPACK_IMPORTED_MODULE_29__[\"RawShaderMaterial\"]({\n        uniforms: this.uniforms,\n        vertexShader: _shaders_octahedron_vertex_vert__WEBPACK_IMPORTED_MODULE_31__[\"default\"],\n        fragmentShader: _shaders_octahedron_fragment_frag__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n        flatShading: true,\n        transparent: true,\n        // side: THREE.FrontSide\n        side: three__WEBPACK_IMPORTED_MODULE_29__[\"DoubleSide\"],\n        wireframe: true\n      });\n      return material;\n    }\n  }, {\n    key: \"createObject\",\n    value: function createObject() {\n      var geometry = this.createGeometry();\n      var material = this.createMaterial();\n      var mesh = new three__WEBPACK_IMPORTED_MODULE_29__[\"Mesh\"](geometry, material);\n      return mesh;\n    }\n  }, {\n    key: \"render\",\n    value: function render(time) {\n      this.uniforms.time.value += time;\n    }\n  }]);\n\n  return Octahedron;\n}();\n\n//# sourceURL=webpack:///./ts/webgl/objects/Octahedron.ts?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./ts/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/rei.matsuda/workSpace/gl-practice/hasegawa_sample/resources/ts/index.ts */\"./ts/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./ts/index.ts?");

/***/ })

/******/ });