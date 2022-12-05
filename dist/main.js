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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _poop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poop */ \"./src/poop.js\");\n/* harmony import */ var _rex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rex */ \"./src/rex.js\");\n\n\n\nconst background = new Image();\nbackground.src = \"src/images/background.png\";\nclass Game {\n  constructor(canvas) {\n    this.keys = [];\n    this.canvas = canvas;\n    this.width = canvas.width;\n    this.height = canvas.height;\n    this.rex = new _rex__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas);\n  }\n  gamestart(ctx) {\n    let that = this;\n    window.addEventListener(\"keydown\", function (e) {\n      that.keys[e.key] = true;\n      console.log(e.key);\n    });\n    window.addEventListener(\"keyup\", function (e) {\n      that.keys[e.key] = false;\n      // console.log(that.keys);\n    });\n\n    // this.rex.draw(ctx);\n    ctx.drawImage(background, 0, 0, 800, 500);\n    this.animate(ctx);\n    // maybe sounds will go here too;\n  }\n\n  // movePLayer(){\n  //     if (this.keys[]) {\n  //         this.rex.direction([0,-10], conn);\n  //     }\n  // }\n\n  animate(ctx) {\n    let that = this;\n    ctx.clearRect(0, 0, 800, 600);\n    ctx.drawImage(background, 0, 0, 800, 500);\n    this.rex.draw(ctx);\n    that.bindKeys(ctx);\n    // this.movePLayer();\n    // console.log(this.rex);\n\n    setTimeout(() => {\n      requestAnimationFrame(this.animate.bind(this, ctx));\n    }, 144);\n  }\n  bindKeys(ctx) {\n    let conn = ctx;\n    let that = this;\n    key('w', function () {\n      console.log('hi');\n    });\n    key('w', function () {\n      that.rex.direction([0, -.1], conn);\n    });\n    key('s', function () {\n      that.rex.direction([0, .1], conn);\n    });\n    key('a', function () {\n      that.rex.direction([-.1, 0], conn);\n    });\n    key('d', function () {\n      that.rex.direction([.1, 0], conn);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVU7TUFBQ0osSUFBSSxDQUFDSCxHQUFHLENBQUNtQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRUQsSUFBSSxDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQ3ZEWCxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVU7TUFBQ0osSUFBSSxDQUFDSCxHQUFHLENBQUNtQixTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUVELElBQUksQ0FBQztJQUFBLENBQUMsQ0FBQztFQUMxRDtBQU1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVza3lyZXgvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuaW1wb3J0IFBvb3AgZnJvbSBcIi4vcG9vcFwiO1xuaW1wb3J0IFJleCBmcm9tIFwiLi9yZXhcIjtcblxuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYz1cInNyYy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgIFxuICAgICAgICB0aGlzLnJleCA9IG5ldyBSZXgoY2FudmFzKTtcbiAgICB9XG4gICAgXG4gICAgZ2FtZXN0YXJ0KGN0eCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHRoYXQua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5rZXkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICB0aGF0LmtleXNbZS5rZXldID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGF0LmtleXMpO1xuICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICAvLyB0aGlzLnJleC5kcmF3KGN0eCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgODAwLCA1MDApO1xuICAgICAgICB0aGlzLmFuaW1hdGUoY3R4KTtcbiAgICAgICAgLy8gbWF5YmUgc291bmRzIHdpbGwgZ28gaGVyZSB0b287XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIG1vdmVQTGF5ZXIoKXtcbiAgICAvLyAgICAgaWYgKHRoaXMua2V5c1tdKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnJleC5kaXJlY3Rpb24oWzAsLTEwXSwgY29ubik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhbmltYXRlKGN0eCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLDgwMCw2MDApO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIDgwMCwgNTAwKTtcbiAgICAgICAgdGhpcy5yZXguZHJhdyhjdHgpO1xuICAgICAgICB0aGF0LmJpbmRLZXlzKGN0eCk7XG4gICAgICAgIC8vIHRoaXMubW92ZVBMYXllcigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJleCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzLCBjdHgpKTtcblxuICAgICAgICB9LDE0NCk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgYmluZEtleXMoY3R4KXtcbiAgICAgICAgbGV0IGNvbm4gPSBjdHg7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAga2V5KCd3JywgZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnaGknKX0pO1xuICAgICAgICBrZXkoJ3cnLCBmdW5jdGlvbigpe3RoYXQucmV4LmRpcmVjdGlvbihbMCwtLjFdLCBjb25uKX0pO1xuICAgICAgICBrZXkoJ3MnLCBmdW5jdGlvbigpe3RoYXQucmV4LmRpcmVjdGlvbihbMCwuMV0sIGNvbm4pfSk7XG4gICAgICAgIGtleSgnYScsIGZ1bmN0aW9uKCl7dGhhdC5yZXguZGlyZWN0aW9uKFstLjEsMF0sIGNvbm4pfSk7XG4gICAgICAgIGtleSgnZCcsIGZ1bmN0aW9uKCl7dGhhdC5yZXguZGlyZWN0aW9uKFsuMSwwXSwgY29ubil9KTtcbiAgICB9XG5cblxuXG4gXG5cbn1cblxuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlBvb3AiLCJSZXgiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJrZXlzIiwid2lkdGgiLCJoZWlnaHQiLCJyZXgiLCJnYW1lc3RhcnQiLCJjdHgiLCJ0aGF0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiZHJhd0ltYWdlIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXciLCJiaW5kS2V5cyIsInNldFRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiY29ubiIsImRpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n// import MovingObject from \"./moving_object\";\n\nconst canvas = document.getElementById(\"canvas1\");\nconst ctx = canvas.getContext('2d');\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.gamestart(ctx);\n\n// setInterval(() => start.rex.move(ctx), 100);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEI7QUFDMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDakQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFJbkMsSUFBSUMsSUFBSSxHQUFHLElBQUlOLDZDQUFJLENBQUNDLE1BQU0sQ0FBQztBQUMzQkssSUFBSSxDQUFDQyxTQUFTLENBQUNILEdBQUcsQ0FBQzs7QUFLbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNreXJleC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbi8vIGltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXG5cbmxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbmdhbWUuZ2FtZXN0YXJ0KGN0eCk7XG5cblxuXG5cbi8vIHNldEludGVydmFsKCgpID0+IHN0YXJ0LnJleC5tb3ZlKGN0eCksIDEwMCk7XG5cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJnYW1lc3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

/***/ "./src/rex.js":
/*!********************!*\
  !*** ./src/rex.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rex; }\n/* harmony export */ });\nclass Rex {\n  constructor(ctx) {\n    this.pos = [25, 470];\n    this.vel = [0, 0];\n    // this.x = this.pos[0],\n    // this.y = this.pos[1],\n    this.width = 32;\n    this.height = 32;\n    this.frameX = 0;\n    this.frameY = 0;\n    this.speed = 10;\n    this.moving = false;\n    this.ctx = ctx;\n\n    // let dogImg = {\n    //     x: this.pos[0],\n    //     y: this.pos[1],\n    //     width: 32,\n    //     height: 32,\n    //     frameX: 0,\n    //     frameY: 0,\n    //     speed: 9,\n    //     moving: false\n    // }\n\n    // const dogSprite = new Image();\n    // dogSprite.src = \"src/images/dogwalking.png\";\n  }\n\n  // drawSprite(ctx, sX, sY, sW, sH, dX, dY, dW, dH){\n  //     const dogSprite = new Image();\n  //     dogSprite.src = \"src/images/dogwalking.png\";\n  //     ctx.drawImage(dogSprite, sX, sY, sW, sH, dX, dY, dW, dH);\n  // }\n\n  draw(ctx) {\n    // console.log(this);\n    // ctx.beginPath();\n    // ctx.rect(this.pos[0], this.pos[1], 20, 10);\n\n    // ctx.fillStyle = this.color;\n    // ctx.stroke();\n    let that = this;\n    const dogSprite = new Image();\n    dogSprite.src = \"src/images/dogwalking.png\";\n    ctx.drawImage(dogSprite, 0, 0, that.width, that.height, that.pos[0], that.pos[1], that.width, that.height);\n  }\n  direction(arr, ctx) {\n    this.vel[0] += arr[0];\n    this.vel[1] += arr[1];\n    console.log(this.pos);\n    this.move(ctx);\n    this.vel[0] = 0;\n    this.vel[1] = 0;\n    // console.log(this.vel);\n  }\n\n  move(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxHQUFHLENBQUM7RUFDckJDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNoQjtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUVuQixJQUFJLENBQUNSLEdBQUcsR0FBR0EsR0FBRzs7SUFFZDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0VBRUo7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQVMsSUFBSSxDQUFDVCxHQUFHLEVBQUM7SUFDTDtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBLElBQUlVLElBQUksR0FBRyxJQUFJO0lBQ2YsTUFBTUMsU0FBUyxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUM3QkQsU0FBUyxDQUFDRSxHQUFHLEdBQUcsMkJBQTJCO0lBQzNDYixHQUFHLENBQUNjLFNBQVMsQ0FBQ0gsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVELElBQUksQ0FBQ1AsS0FBSyxFQUFFTyxJQUFJLENBQUNOLE1BQU0sRUFDbERNLElBQUksQ0FBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFUyxJQUFJLENBQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRVMsSUFBSSxDQUFDUCxLQUFLLEVBQUVPLElBQUksQ0FBQ04sTUFBTSxDQUFDO0VBRTFEO0VBRUFXLFNBQVMsQ0FBQ0MsR0FBRyxFQUFFaEIsR0FBRyxFQUFDO0lBQ2YsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUljLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUljLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2pCLEdBQUcsQ0FBQztJQUNyQixJQUFJLENBQUNrQixJQUFJLENBQUNuQixHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNmO0VBQ0o7O0VBRUFpQixJQUFJLENBQUNuQixHQUFHLEVBQUM7SUFFTCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ08sSUFBSSxDQUFDVCxHQUFHLENBQUM7RUFDbEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Blc2t5cmV4Ly4vc3JjL3JleC5qcz81MjI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJleCB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5wb3MgPSBbMjUsNDcwXTtcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwwXTtcbiAgICAgICAgLy8gdGhpcy54ID0gdGhpcy5wb3NbMF0sXG4gICAgICAgIC8vIHRoaXMueSA9IHRoaXMucG9zWzFdLFxuICAgICAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgLy8gbGV0IGRvZ0ltZyA9IHtcbiAgICAgICAgLy8gICAgIHg6IHRoaXMucG9zWzBdLFxuICAgICAgICAvLyAgICAgeTogdGhpcy5wb3NbMV0sXG4gICAgICAgIC8vICAgICB3aWR0aDogMzIsXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDMyLFxuICAgICAgICAvLyAgICAgZnJhbWVYOiAwLFxuICAgICAgICAvLyAgICAgZnJhbWVZOiAwLFxuICAgICAgICAvLyAgICAgc3BlZWQ6IDksXG4gICAgICAgIC8vICAgICBtb3Zpbmc6IGZhbHNlXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjb25zdCBkb2dTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gZG9nU3ByaXRlLnNyYyA9IFwic3JjL2ltYWdlcy9kb2d3YWxraW5nLnBuZ1wiO1xuXG4gICAgfVxuXG4gICAgLy8gZHJhd1Nwcml0ZShjdHgsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCl7XG4gICAgLy8gICAgIGNvbnN0IGRvZ1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgIC8vICAgICBkb2dTcHJpdGUuc3JjID0gXCJzcmMvaW1hZ2VzL2RvZ3dhbGtpbmcucG5nXCI7XG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UoZG9nU3ByaXRlLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpO1xuICAgIC8vIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCAyMCwgMTApO1xuICAgICAgICBcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBkb2dTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZG9nU3ByaXRlLnNyYyA9IFwic3JjL2ltYWdlcy9kb2d3YWxraW5nLnBuZ1wiO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvZ1Nwcml0ZSwgMCwgMCwgdGhhdC53aWR0aCwgdGhhdC5oZWlnaHQsIFxuICAgICAgICAgICAgdGhhdC5wb3NbMF0sIHRoYXQucG9zWzFdLCB0aGF0LndpZHRoLCB0aGF0LmhlaWdodCk7XG4gICAgICAgICAgIFxuICAgIH1cblxuICAgIGRpcmVjdGlvbihhcnIsIGN0eCl7XG4gICAgICAgIHRoaXMudmVsWzBdICs9IGFyclswXTtcbiAgICAgICAgdGhpcy52ZWxbMV0gKz0gYXJyWzFdO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvcyk7XG4gICAgICAgIHRoaXMubW92ZShjdHgpO1xuICAgICAgICB0aGlzLnZlbFswXSA9IDA7XG4gICAgICAgIHRoaXMudmVsWzFdID0gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy52ZWwpO1xuICAgIH1cblxuICAgIG1vdmUoY3R4KXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnBvc1sxXSArPSB0aGlzLnZlbFsxXTtcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJSZXgiLCJjb25zdHJ1Y3RvciIsImN0eCIsInBvcyIsInZlbCIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVYIiwiZnJhbWVZIiwic3BlZWQiLCJtb3ZpbmciLCJkcmF3IiwidGhhdCIsImRvZ1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiZGlyZWN0aW9uIiwiYXJyIiwiY29uc29sZSIsImxvZyIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/rex.js\n");

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