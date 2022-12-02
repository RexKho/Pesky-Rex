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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.width = canvas.width;\n    this.height = canvas.height;\n    this.rex = new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      pos: [25, 470],\n      vel: [10, 0],\n      color: \"red\"\n    });\n  }\n  gamestart(ctx) {\n    this.bindKeys();\n    this.animate(ctx);\n\n    // maybe sounds will go here too;\n  }\n\n  animate(ctx) {\n    ctx.clearRect(0, 0, 800, 600);\n    const background = new Image();\n    background.src = \"src/images/background.png\";\n    let that = this;\n    let animate = function () {\n      ctx.drawImage(background, 0, 0, 800, 500);\n      that.rex.draw(ctx);\n    };\n    requestAnimationFrame(animate);\n  }\n  bindKeys() {\n    let that = this;\n    key('w', function () {\n      that.rex.direction([0, -1]);\n    });\n    key('s', function () {\n      that.rex.direction([0, 1]);\n    });\n    key('a', function () {\n      that.rex.direction([-1, 0]);\n    });\n    key('d', function () {\n      that.rex.direction([1, 0]);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUc1QixNQUFNQyxJQUFJLENBQUM7RUFDdEJDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQUs7SUFDekIsSUFBSSxDQUFDQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0UsTUFBTTtJQUMzQixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJTixzREFBWSxDQUFDO01BQUNPLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUM7TUFBRUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSyxDQUFDLENBQUM7RUFDM0U7RUFFQUMsU0FBUyxDQUFDQyxHQUFHLEVBQUM7SUFDVixJQUFJLENBQUNDLFFBQVEsRUFBRTtJQUNmLElBQUksQ0FBQ0MsT0FBTyxDQUFDRixHQUFHLENBQUM7O0lBRWpCO0VBRUo7O0VBRUFFLE9BQU8sQ0FBQ0YsR0FBRyxFQUFDO0lBRVJBLEdBQUcsQ0FBQ0csU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztJQUMxQixNQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0lBQzlCRCxVQUFVLENBQUNFLEdBQUcsR0FBQywyQkFBMkI7SUFDMUMsSUFBSUMsSUFBSSxHQUFHLElBQUk7SUFDZixJQUFJTCxPQUFPLEdBQUcsWUFBVTtNQUNwQkYsR0FBRyxDQUFDUSxTQUFTLENBQUNKLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7TUFDekNHLElBQUksQ0FBQ1osR0FBRyxDQUFDYyxJQUFJLENBQUNULEdBQUcsQ0FBQztJQUV0QixDQUFDO0lBQ0RVLHFCQUFxQixDQUFDUixPQUFPLENBQUM7RUFDbEM7RUFFQUQsUUFBUSxHQUFFO0lBQ04sSUFBSU0sSUFBSSxHQUFHLElBQUk7SUFDZkksR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFVO01BQUNKLElBQUksQ0FBQ1osR0FBRyxDQUFDaUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDaERELEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBVTtNQUFDSixJQUFJLENBQUNaLEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQztJQUMvQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFVO01BQUNKLElBQUksQ0FBQ1osR0FBRyxDQUFDaUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDaERELEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBVTtNQUFDSixJQUFJLENBQUNaLEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQztFQUNuRDtBQUlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVza3lyZXgvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMucmV4ID0gbmV3IE1vdmluZ09iamVjdCh7cG9zOiBbMjUsNDcwXSwgdmVsOiBbMTAsMF0sIGNvbG9yOiBcInJlZFwifSk7XG4gICAgfVxuICAgXG4gICAgZ2FtZXN0YXJ0KGN0eCl7XG4gICAgICAgIHRoaXMuYmluZEtleXMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKGN0eCk7XG4gXG4gICAgICAgIC8vIG1heWJlIHNvdW5kcyB3aWxsIGdvIGhlcmUgdG9vO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCl7XG4gICAgICAgIFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCw4MDAsNjAwKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYz1cInNyYy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIjtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIDgwMCwgNTAwKTtcbiAgICAgICAgICAgIHRoYXQucmV4LmRyYXcoY3R4KTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cblxuICAgIGJpbmRLZXlzKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAga2V5KCd3JywgZnVuY3Rpb24oKXt0aGF0LnJleC5kaXJlY3Rpb24oWzAsLTFdKX0pO1xuICAgICAgICBrZXkoJ3MnLCBmdW5jdGlvbigpe3RoYXQucmV4LmRpcmVjdGlvbihbMCwxXSl9KTtcbiAgICAgICAga2V5KCdhJywgZnVuY3Rpb24oKXt0aGF0LnJleC5kaXJlY3Rpb24oWy0xLDBdKX0pO1xuICAgICAgICBrZXkoJ2QnLCBmdW5jdGlvbigpe3RoYXQucmV4LmRpcmVjdGlvbihbMSwwXSl9KTtcbiAgICB9XG5cbiBcblxufVxuXG4iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJyZXgiLCJwb3MiLCJ2ZWwiLCJjb2xvciIsImdhbWVzdGFydCIsImN0eCIsImJpbmRLZXlzIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsInRoYXQiLCJkcmF3SW1hZ2UiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwia2V5IiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n// import MovingObject from \"./moving_object\";\n\nconst canvas = document.getElementById(\"canvas1\");\nconst ctx = canvas.getContext('2d');\nlet start = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\nstart.gamestart(ctx);\n\n// setInterval(() => start.rex.move(ctx), 100);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEI7QUFDMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDakQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsSUFBSUMsS0FBSyxHQUFHLElBQUlOLDZDQUFJLENBQUNDLE1BQU0sQ0FBQztBQUM1QkssS0FBSyxDQUFDQyxTQUFTLENBQUNILEdBQUcsQ0FBQzs7QUFLcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbi8vIGltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IHN0YXJ0ID0gbmV3IEdhbWUoY2FudmFzKTtcbnN0YXJ0LmdhbWVzdGFydChjdHgpO1xuXG5cblxuXG4vLyBzZXRJbnRlcnZhbCgoKSA9PiBzdGFydC5yZXgubW92ZShjdHgpLCAxMDApO1xuXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzdGFydCIsImdhbWVzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nclass MovingObject {\n  constructor(hash) {\n    this.pos = hash.pos;\n    this.vel = hash.vel;\n    this.color = hash.color;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.pos[0], this.pos[1], 10, 10);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  direction(arr) {\n    this.vel[0] += arr[0];\n    this.vel[1] += arr[1];\n  }\n  move(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsWUFBWSxDQUFDO0VBQzlCQyxXQUFXLENBQUNDLElBQUksRUFBQztJQUNiLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBRztJQUNuQixJQUFJLENBQUNDLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLO0VBRTNCO0VBR0FDLElBQUksQ0FBQ0MsR0FBRyxFQUFDO0lBQ0xBLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDMUNJLEdBQUcsQ0FBQ0csU0FBUyxHQUFHLElBQUksQ0FBQ0wsS0FBSztJQUMxQkUsR0FBRyxDQUFDSSxNQUFNLEVBQUU7RUFDaEI7RUFFQUMsU0FBUyxDQUFDQyxHQUFHLEVBQUM7SUFDVixJQUFJLENBQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSVMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUV6QjtFQUVBQyxJQUFJLENBQUNQLEdBQUcsRUFBQztJQUVMLElBQUksQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQztFQUNsQjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVza3lyZXgvLi9zcmMvbW92aW5nX29iamVjdC5qcz8yMTEzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoaGFzaCl7XG4gICAgICAgIHRoaXMucG9zID0gaGFzaC5wb3M7XG4gICAgICAgIHRoaXMudmVsID0gaGFzaC52ZWw7XG4gICAgICAgIHRoaXMuY29sb3IgPSBoYXNoLmNvbG9yO1xuXG4gICAgfVxuXG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCAxMCwgMTApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGRpcmVjdGlvbihhcnIpe1xuICAgICAgICB0aGlzLnZlbFswXSArPSBhcnJbMF07XG4gICAgICAgIHRoaXMudmVsWzFdICs9IGFyclsxXTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbW92ZShjdHgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJoYXNoIiwicG9zIiwidmVsIiwiY29sb3IiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZSIsImRpcmVjdGlvbiIsImFyciIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

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