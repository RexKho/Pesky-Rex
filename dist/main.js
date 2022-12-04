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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nconst background = new Image();\nbackground.src = \"src/images/background.png\";\nclass Game {\n  constructor(canvas) {\n    this.width = canvas.width;\n    this.height = canvas.height;\n    this.rex = new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      pos: [25, 470],\n      vel: [0, 0],\n      color: \"red\"\n    });\n  }\n  gamestart(ctx) {\n    this.rex.draw(ctx);\n    ctx.drawImage(background, 0, 0, 800, 500);\n    this.animate(ctx);\n    // maybe sounds will go here too;\n  }\n\n  animate(ctx) {\n    let that = this;\n    ctx.clearRect(0, 0, 800, 600);\n    ctx.drawImage(background, 0, 0, 800, 500);\n    this.rex.draw(ctx);\n    that.bindKeys(ctx);\n\n    // that.rex.draw(ctx);\n    setTimeout(() => {\n      requestAnimationFrame(this.animate.bind(this, ctx));\n    }, 2006);\n  }\n  bindKeys(ctx) {\n    let conn = ctx;\n    let that = this;\n    key('w', function () {\n      console.log('hi');\n    });\n    key('w', function () {\n      that.rex.direction([0, -10], conn);\n    });\n    key('s', function () {\n      that.rex.direction([0, 10], conn);\n    });\n    key('a', function () {\n      that.rex.direction([-10, 0], conn);\n    });\n    key('d', function () {\n      that.rex.direction([10, 0], conn);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxNQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQzlCRCxVQUFVLENBQUNFLEdBQUcsR0FBQywyQkFBMkI7QUFFM0IsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXLENBQUNDLE1BQU0sRUFBRTtJQUVoQixJQUFJLENBQUNDLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFLO0lBQ3pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHRixNQUFNLENBQUNFLE1BQU07SUFFM0IsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSVQsc0RBQVksQ0FBQztNQUFDVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDO01BQUVDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBQzFFO0VBRUFDLFNBQVMsQ0FBQ0MsR0FBRyxFQUFDO0lBRVYsSUFBSSxDQUFDTCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCQSxHQUFHLENBQUNFLFNBQVMsQ0FBQ2YsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN6QyxJQUFJLENBQUNnQixPQUFPLENBQUNILEdBQUcsQ0FBQztJQUNqQjtFQUVKOztFQUVBRyxPQUFPLENBQUNILEdBQUcsRUFBQztJQUVSLElBQUlJLElBQUksR0FBRyxJQUFJO0lBQ2ZKLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztJQUMxQkwsR0FBRyxDQUFDRSxTQUFTLENBQUNmLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekMsSUFBSSxDQUFDUSxHQUFHLENBQUNNLElBQUksQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCSSxJQUFJLENBQUNFLFFBQVEsQ0FBQ04sR0FBRyxDQUFDOztJQUdsQjtJQUNBTyxVQUFVLENBQUMsTUFBSztNQUNaQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLElBQUksRUFBRVQsR0FBRyxDQUFDLENBQUM7SUFFdkQsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUVaO0VBRUFNLFFBQVEsQ0FBQ04sR0FBRyxFQUFDO0lBQ1QsSUFBSVUsSUFBSSxHQUFHVixHQUFHO0lBQ2QsSUFBSUksSUFBSSxHQUFHLElBQUk7SUFDZk8sR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFVO01BQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztJQUFBLENBQUMsQ0FBQztJQUN2Q0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFVO01BQUNQLElBQUksQ0FBQ1QsR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVKLElBQUksQ0FBQztJQUFBLENBQUMsQ0FBQztJQUN2REMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFVO01BQUNQLElBQUksQ0FBQ1QsR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFSixJQUFJLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDdERDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBVTtNQUFDUCxJQUFJLENBQUNULEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFSixJQUFJLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDdkRDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBVTtNQUFDUCxJQUFJLENBQUNULEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRUosSUFBSSxDQUFDO0lBQUEsQ0FBQyxDQUFDO0VBQzFEO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYz1cInNyYy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgXG4gICAgICAgIHRoaXMucmV4ID0gbmV3IE1vdmluZ09iamVjdCh7cG9zOiBbMjUsNDcwXSwgdmVsOiBbMCwwXSwgY29sb3I6IFwicmVkXCJ9KTtcbiAgICB9XG4gICBcbiAgICBnYW1lc3RhcnQoY3R4KXtcbiAgICBcbiAgICAgICAgdGhpcy5yZXguZHJhdyhjdHgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIDgwMCwgNTAwKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKGN0eCk7XG4gICAgICAgIC8vIG1heWJlIHNvdW5kcyB3aWxsIGdvIGhlcmUgdG9vO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLDgwMCw2MDApO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIDgwMCwgNTAwKTtcbiAgICAgICAgdGhpcy5yZXguZHJhdyhjdHgpO1xuICAgICAgICB0aGF0LmJpbmRLZXlzKGN0eCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICAvLyB0aGF0LnJleC5kcmF3KGN0eCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcywgY3R4KSk7XG5cbiAgICAgICAgfSwgMjAwNik7XG4gICAgICAgXG4gICAgfVxuXG4gICAgYmluZEtleXMoY3R4KXtcbiAgICAgICAgbGV0IGNvbm4gPSBjdHg7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAga2V5KCd3JywgZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnaGknKX0pO1xuICAgICAgICBrZXkoJ3cnLCBmdW5jdGlvbigpe3RoYXQucmV4LmRpcmVjdGlvbihbMCwtMTBdLCBjb25uKX0pO1xuICAgICAgICBrZXkoJ3MnLCBmdW5jdGlvbigpe3RoYXQucmV4LmRpcmVjdGlvbihbMCwxMF0sIGNvbm4pfSk7XG4gICAgICAgIGtleSgnYScsIGZ1bmN0aW9uKCl7dGhhdC5yZXguZGlyZWN0aW9uKFstMTAsMF0sIGNvbm4pfSk7XG4gICAgICAgIGtleSgnZCcsIGZ1bmN0aW9uKCl7dGhhdC5yZXguZGlyZWN0aW9uKFsxMCwwXSwgY29ubil9KTtcbiAgICB9XG5cbiBcblxufVxuXG4iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJyZXgiLCJwb3MiLCJ2ZWwiLCJjb2xvciIsImdhbWVzdGFydCIsImN0eCIsImRyYXciLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwidGhhdCIsImNsZWFyUmVjdCIsImJpbmRLZXlzIiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJjb25uIiwia2V5IiwiY29uc29sZSIsImxvZyIsImRpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nclass MovingObject {\n  constructor(hash) {\n    this.pos = hash.pos;\n    this.vel = hash.vel;\n    this.color = hash.color;\n  }\n  draw(ctx) {\n    // console.log(this);\n    ctx.beginPath();\n    ctx.rect(this.pos[0], this.pos[1], 20, 10);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  direction(arr, ctx) {\n    this.vel[0] += arr[0];\n    this.vel[1] += arr[1];\n    this.move(ctx);\n    this.vel[0] = 0;\n    this.vel[1] = 0;\n  }\n  move(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW92aW5nX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsWUFBWSxDQUFDO0VBQzlCQyxXQUFXLENBQUNDLElBQUksRUFBQztJQUNiLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBRztJQUNuQixJQUFJLENBQUNDLEtBQUssR0FBR0gsSUFBSSxDQUFDRyxLQUFLO0VBRzNCO0VBR0FDLElBQUksQ0FBQ0MsR0FBRyxFQUFDO0lBQ0w7SUFDQUEsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDZkQsR0FBRyxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUUxQ0ksR0FBRyxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxLQUFLO0lBQzFCRSxHQUFHLENBQUNJLE1BQU0sRUFBRTtFQUNoQjtFQUVBQyxTQUFTLENBQUNDLEdBQUcsRUFBRU4sR0FBRyxFQUFDO0lBQ2YsSUFBSSxDQUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUlTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDVCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUlTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxJQUFJLENBQUNQLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ25CO0VBRUFVLElBQUksQ0FBQ1AsR0FBRyxFQUFDO0lBRUwsSUFBSSxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ2xCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzPzIxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihoYXNoKXtcbiAgICAgICAgdGhpcy5wb3MgPSBoYXNoLnBvcztcbiAgICAgICAgdGhpcy52ZWwgPSBoYXNoLnZlbDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGhhc2guY29sb3I7XG4gICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICBkcmF3KGN0eCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgMjAsIDEwKTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgZGlyZWN0aW9uKGFyciwgY3R4KXtcbiAgICAgICAgdGhpcy52ZWxbMF0gKz0gYXJyWzBdO1xuICAgICAgICB0aGlzLnZlbFsxXSArPSBhcnJbMV07XG4gICAgICAgIHRoaXMubW92ZShjdHgpO1xuICAgICAgICB0aGlzLnZlbFswXSA9IDA7XG4gICAgICAgIHRoaXMudmVsWzFdID0gMDtcbiAgICB9XG5cbiAgICBtb3ZlKGN0eCl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsImhhc2giLCJwb3MiLCJ2ZWwiLCJjb2xvciIsImRyYXciLCJjdHgiLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlIiwiZGlyZWN0aW9uIiwiYXJyIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/moving_object.js\n");

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