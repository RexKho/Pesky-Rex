/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _poop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poop */ \"./src/poop.js\");\n\n\nconst background = new Image();\nbackground.src = \"src/images/background.png\";\nclass Game {\n  constructor(canvas) {\n    this.width = canvas.width;\n    this.height = canvas.height;\n    this.rex = new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      pos: [25, 470],\n      vel: [0, 0],\n      color: \"red\"\n    });\n  }\n  gamestart(ctx) {\n    this.rex.draw(ctx);\n    ctx.drawImage(background, 0, 0, 800, 500);\n    this.animate(ctx);\n    // maybe sounds will go here too;\n  }\n\n  animate(ctx) {\n    let that = this;\n    ctx.clearRect(0, 0, 800, 600);\n    ctx.drawImage(background, 0, 0, 800, 500);\n    this.rex.draw(ctx);\n    that.bindKeys(ctx);\n    console.log('hi');\n\n    // that.rex.draw(ctx);\n    setTimeout(() => {\n      requestAnimationFrame(this.animate.bind(this, ctx));\n    }, 2007);\n  }\n  bindKeys(ctx) {\n    let conn = ctx;\n    let that = this;\n    key('w', function () {\n      console.log('hi');\n    });\n    key('w', function () {\n      that.rex.direction([0, -10], conn);\n    });\n    key('s', function () {\n      that.rex.direction([0, 10], conn);\n    });\n    key('a', function () {\n      that.rex.direction([-10, 0], conn);\n    });\n    key('d', function () {\n      that.rex.direction([10, 0], conn);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgUG9vcCBmcm9tIFwiLi9wb29wXCI7XG5cblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZC5zcmM9XCJzcmMvaW1hZ2VzL2JhY2tncm91bmQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgIFxuICAgICAgICB0aGlzLnJleCA9IG5ldyBNb3ZpbmdPYmplY3Qoe3BvczogWzI1LDQ3MF0sIHZlbDogWzAsMF0sIGNvbG9yOiBcInJlZFwifSk7XG4gICAgfVxuICAgXG4gICAgZ2FtZXN0YXJ0KGN0eCl7XG4gICAgXG4gICAgICAgIHRoaXMucmV4LmRyYXcoY3R4KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCA4MDAsIDUwMCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZShjdHgpO1xuICAgICAgICAvLyBtYXliZSBzb3VuZHMgd2lsbCBnbyBoZXJlIHRvbztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCw4MDAsNjAwKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCA4MDAsIDUwMCk7XG4gICAgICAgIHRoaXMucmV4LmRyYXcoY3R4KTtcbiAgICAgICAgdGhhdC5iaW5kS2V5cyhjdHgpO1xuICAgICAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIC8vIHRoYXQucmV4LmRyYXcoY3R4KTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzLCBjdHgpKTtcblxuICAgICAgICB9LCAyMDA3KTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBiaW5kS2V5cyhjdHgpe1xuICAgICAgICBsZXQgY29ubiA9IGN0eDtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBrZXkoJ3cnLCBmdW5jdGlvbigpe2NvbnNvbGUubG9nKCdoaScpfSk7XG4gICAgICAgIGtleSgndycsIGZ1bmN0aW9uKCl7dGhhdC5yZXguZGlyZWN0aW9uKFswLC0xMF0sIGNvbm4pfSk7XG4gICAgICAgIGtleSgncycsIGZ1bmN0aW9uKCl7dGhhdC5yZXguZGlyZWN0aW9uKFswLDEwXSwgY29ubil9KTtcbiAgICAgICAga2V5KCdhJywgZnVuY3Rpb24oKXt0aGF0LnJleC5kaXJlY3Rpb24oWy0xMCwwXSwgY29ubil9KTtcbiAgICAgICAga2V5KCdkJywgZnVuY3Rpb24oKXt0aGF0LnJleC5kaXJlY3Rpb24oWzEwLDBdLCBjb25uKX0pO1xuICAgIH1cblxuIFxuXG59XG5cbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJQb29wIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJyZXgiLCJwb3MiLCJ2ZWwiLCJjb2xvciIsImdhbWVzdGFydCIsImN0eCIsImRyYXciLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwidGhhdCIsImNsZWFyUmVjdCIsImJpbmRLZXlzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiY29ubiIsImtleSIsImRpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n// import MovingObject from \"./moving_object\";\n\nconst canvas = document.getElementById(\"canvas1\");\nconst ctx = canvas.getContext('2d');\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.gamestart(ctx);\n\n// setInterval(() => start.rex.move(ctx), 100);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEI7QUFDMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDakQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsSUFBSUMsSUFBSSxHQUFHLElBQUlOLDZDQUFJLENBQUNDLE1BQU0sQ0FBQztBQUMzQkssSUFBSSxDQUFDQyxTQUFTLENBQUNILEdBQUcsQ0FBQzs7QUFLbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbi8vIGltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuZ2FtZS5nYW1lc3RhcnQoY3R4KTtcblxuXG5cblxuLy8gc2V0SW50ZXJ2YWwoKCkgPT4gc3RhcnQucmV4Lm1vdmUoY3R4KSwgMTAwKTtcblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImdhbWVzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nclass MovingObject {\n  constructor(hash) {\n    this.pos = hash.pos;\n    this.vel = hash.vel;\n    this.color = hash.color;\n  }\n  draw(ctx) {\n    // console.log(this);\n    ctx.beginPath();\n    ctx.rect(this.pos[0], this.pos[1], 20, 10);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  direction(arr, ctx) {\n    this.vel[0] += arr[0];\n    this.vel[1] += arr[1];\n    this.move(ctx);\n    this.vel[0] = 0;\n    this.vel[1] = 0;\n    // console.log(this.vel);\n  }\n\n  move(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsWUFBWSxDQUFDO0VBQzlCQyxXQUFXLENBQUNDLElBQUksRUFBQztJQUNiLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBRztJQUNuQixJQUFJLENBQUNDLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLO0VBRzNCO0VBR0FDLElBQUksQ0FBQ0MsR0FBRyxFQUFDO0lBQ0w7SUFDQUEsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDZkQsR0FBRyxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUUxQ0ksR0FBRyxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxLQUFLO0lBQzFCRSxHQUFHLENBQUNJLE1BQU0sRUFBRTtFQUNoQjtFQUVBQyxTQUFTLENBQUNDLEdBQUcsRUFBRU4sR0FBRyxFQUFDO0lBQ2YsSUFBSSxDQUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUlTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDVCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUlTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxJQUFJLENBQUNQLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2Y7RUFDSjs7RUFFQVUsSUFBSSxDQUFDUCxHQUFHLEVBQUM7SUFFTCxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDbEI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Blc2t5cmV4Ly4vc3JjL21vdmluZ19vYmplY3QuanM/MjExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhhc2gpe1xuICAgICAgICB0aGlzLnBvcyA9IGhhc2gucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IGhhc2gudmVsO1xuICAgICAgICB0aGlzLmNvbG9yID0gaGFzaC5jb2xvcjtcbiAgICAgICAgXG5cbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCAyMCwgMTApO1xuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBkaXJlY3Rpb24oYXJyLCBjdHgpe1xuICAgICAgICB0aGlzLnZlbFswXSArPSBhcnJbMF07XG4gICAgICAgIHRoaXMudmVsWzFdICs9IGFyclsxXTtcbiAgICAgICAgdGhpcy5tb3ZlKGN0eCk7XG4gICAgICAgIHRoaXMudmVsWzBdID0gMDtcbiAgICAgICAgdGhpcy52ZWxbMV0gPSAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZlbCk7XG4gICAgfVxuXG4gICAgbW92ZShjdHgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJoYXNoIiwicG9zIiwidmVsIiwiY29sb3IiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZSIsImRpcmVjdGlvbiIsImFyciIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

/***/ }),

/***/ "./src/poop.js":
/*!*********************!*\
  !*** ./src/poop.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Poop; }\n/* harmony export */ });\nclass Poop {\n  constructor(pos) {\n    this.pos = pos;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcG9vcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRWUsTUFBTUEsSUFBSSxDQUFDO0VBQ3hCQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUNkLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0VBQ2hCO0FBSUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9wb29wLmpzP2M2ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb3Age1xuICBjb25zdHJ1Y3Rvcihwb3Mpe1xuICAgIHRoaXMucG9zID0gcG9zO1xuICB9XG5cbiAgXG5cbn0iXSwibmFtZXMiOlsiUG9vcCIsImNvbnN0cnVjdG9yIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/poop.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;