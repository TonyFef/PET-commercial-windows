/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_ruler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ruler */ \"./modules/ruler.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\nconst headerModalWindow = document.getElementById(\"header-modal\");\r\nconst headerModalButton = document.getElementById(\"headerModalButton\");\r\nconst headerModalClose = document.getElementById(\"headerModalClose\");\r\nconst overlay = document.querySelector(\".overlay\");\r\n\r\n// const servicesModalClose = document.getElementById(\"headerModalClose\");\r\n\r\n(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_0__.headerModal)(headerModalWindow, headerModalButton, headerModalClose, overlay);\r\n(0,_modules_ruler__WEBPACK_IMPORTED_MODULE_1__.ruler)(overlay);\r\nsetTimeout(_modules_timer__WEBPACK_IMPORTED_MODULE_2__.timer, 1, \"26 march 2022\")\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/headerModal.js":
/*!********************************!*\
  !*** ./modules/headerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerModal\": () => (/* binding */ headerModal)\n/* harmony export */ });\nconst headerModal = (window, button, close, overlay) => {\r\n    button.addEventListener(\"click\", () => {\r\n        window.style.display = \"block\";\r\n        overlay.style.display = \"block\";\r\n    });\r\n    close.addEventListener(\"click\", () => {\r\n        window.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/headerModal.js?");

/***/ }),

/***/ "./modules/ruler.js":
/*!**************************!*\
  !*** ./modules/ruler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ruler\": () => (/* binding */ ruler)\n/* harmony export */ });\nconst ruler = (overlay) => {\r\n    const servicesButtons = document.querySelectorAll(\".btn-sm\");\r\n    const servicesModalWindow = document.querySelector(\".services-modal\");\r\n    const servicesModalClose = document.querySelector(\".services-modal__close\");\r\n\r\n    servicesButtons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            servicesModalWindow.style.display = \"block\";\r\n            overlay.style.display = \"block\";\r\n        });\r\n    });\r\n    servicesModalClose.addEventListener(\"click\", () => {\r\n        servicesModalWindow.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/ruler.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementById(\"timer-days\");\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;