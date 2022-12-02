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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n// import { keyFor } from \"core-js/fn/symbol\";\n\nclass Game {\n  constructor(canvas) {\n    this.width = canvas.width;\n    this.height = canvas.height;\n    this.rex = new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      pos: [25, 470],\n      vel: [10, 0],\n      color: \"red\"\n    });\n  }\n  gamestart(ctx) {\n    this.animate(ctx);\n    // this.rex.draw(ctx);\n    // maybe sounds will go here too;\n  }\n\n  animate(ctx) {\n    ctx.clearRect(0, 0, 800, 600);\n    const background = new Image();\n    background.src = \"src/images/background.png\";\n    let that = this;\n    let animate = function () {\n      ctx.drawImage(background, 0, 0, 800, 500);\n      that.rex.draw(ctx);\n    };\n    requestAnimationFrame(animate);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQzJDO0FBRTVCLE1BQU1DLElBQUksQ0FBQztFQUN0QkMsV0FBVyxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBSztJQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0YsTUFBTSxDQUFDRSxNQUFNO0lBQzNCLElBQUksQ0FBQ0MsR0FBRyxHQUFFLElBQUlOLHNEQUFZLENBQUM7TUFBQ08sR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQztNQUFFQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFLLENBQUMsQ0FBQztFQUMxRTtFQUVBQyxTQUFTLENBQUNDLEdBQUcsRUFBQztJQUVWLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxHQUFHLENBQUM7SUFDakI7SUFDQTtFQUVKOztFQUVBQyxPQUFPLENBQUNELEdBQUcsRUFBQztJQUVSQSxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7SUFDMUIsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUMsMkJBQTJCO0lBQzFDLElBQUlDLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSUwsT0FBTyxHQUFHLFlBQVU7TUFDcEJELEdBQUcsQ0FBQ08sU0FBUyxDQUFDSixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO01BQ3pDRyxJQUFJLENBQUNYLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDUixHQUFHLENBQUM7SUFFdEIsQ0FBQztJQUNEUyxxQkFBcUIsQ0FBQ1IsT0FBTyxDQUFDO0VBQ2xDO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsga2V5Rm9yIH0gZnJvbSBcImNvcmUtanMvZm4vc3ltYm9sXCI7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yZXggPW5ldyBNb3ZpbmdPYmplY3Qoe3BvczogWzI1LDQ3MF0sIHZlbDogWzEwLDBdLCBjb2xvcjogXCJyZWRcIn0pO1xuICAgIH1cbiAgIFxuICAgIGdhbWVzdGFydChjdHgpe1xuICAgICAgXG4gICAgICAgIHRoaXMuYW5pbWF0ZShjdHgpO1xuICAgICAgICAvLyB0aGlzLnJleC5kcmF3KGN0eCk7XG4gICAgICAgIC8vIG1heWJlIHNvdW5kcyB3aWxsIGdvIGhlcmUgdG9vO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCl7XG4gICAgICAgIFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCw4MDAsNjAwKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYz1cInNyYy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIjtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIDgwMCwgNTAwKTtcbiAgICAgICAgICAgIHRoYXQucmV4LmRyYXcoY3R4KTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cblxuIFxuXG59XG5cbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInJleCIsInBvcyIsInZlbCIsImNvbG9yIiwiZ2FtZXN0YXJ0IiwiY3R4IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsInRoYXQiLCJkcmF3SW1hZ2UiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n// import MovingObject from \"./moving_object\";\n\nconst canvas = document.getElementById(\"canvas1\");\nconst ctx = canvas.getContext('2d');\nlet keys = [];\nlet start = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\nstart.gamestart(ctx);\n\n// setInterval(() => start.rex.move(ctx), 100);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEI7QUFDMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDakQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsSUFBSUMsSUFBSSxHQUFHLEVBQUU7QUFFYixJQUFJQyxLQUFLLEdBQUcsSUFBSVAsNkNBQUksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVCTSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0osR0FBRyxDQUFDOztBQUlwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Blc2t5cmV4Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuLy8gaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMVwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQga2V5cyA9IFtdO1xuXG5sZXQgc3RhcnQgPSBuZXcgR2FtZShjYW52YXMpO1xuc3RhcnQuZ2FtZXN0YXJ0KGN0eCk7XG5cblxuXG4vLyBzZXRJbnRlcnZhbCgoKSA9PiBzdGFydC5yZXgubW92ZShjdHgpLCAxMDApO1xuXG5cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImtleXMiLCJzdGFydCIsImdhbWVzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nclass MovingObject {\n  constructor(hash) {\n    this.pos = hash.pos;\n    this.vel = hash.vel;\n    this.color = hash.color;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.pos[0], this.pos[1], 10, 10);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  move(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsWUFBWSxDQUFDO0VBQzlCQyxXQUFXLENBQUNDLElBQUksRUFBQztJQUNiLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBRztJQUVuQixJQUFJLENBQUNDLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLO0VBQzNCO0VBR0FDLElBQUksQ0FBQ0MsR0FBRyxFQUFDO0lBQ0xBLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDMUNJLEdBQUcsQ0FBQ0csU0FBUyxHQUFHLElBQUksQ0FBQ0wsS0FBSztJQUMxQkUsR0FBRyxDQUFDSSxNQUFNLEVBQUU7RUFDaEI7RUFFQUMsSUFBSSxDQUFDTCxHQUFHLEVBQUM7SUFFTCxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDbEI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Blc2t5cmV4Ly4vc3JjL21vdmluZ19vYmplY3QuanM/MjExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhhc2gpe1xuICAgICAgICB0aGlzLnBvcyA9IGhhc2gucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IGhhc2gudmVsO1xuICAgICAgIFxuICAgICAgICB0aGlzLmNvbG9yID0gaGFzaC5jb2xvcjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDEwLCAxMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbW92ZShjdHgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJoYXNoIiwicG9zIiwidmVsIiwiY29sb3IiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZSIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

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