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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_ruler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ruler */ \"./modules/ruler.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/documents */ \"./modules/documents.js\");\n\r\n\r\n\r\n\r\n\r\nconst headerModalWindow = document.getElementById(\"header-modal\");\r\nconst headerModalButton = document.getElementById(\"headerModalButton\");\r\nconst headerModalClose = document.getElementById(\"headerModalClose\");\r\nconst overlay = document.querySelector(\".overlay\");\r\n\r\n(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_0__.headerModal)(headerModalWindow, headerModalButton, headerModalClose, overlay);\r\n(0,_modules_ruler__WEBPACK_IMPORTED_MODULE_1__.ruler)(overlay);\r\nsetTimeout(_modules_timer__WEBPACK_IMPORTED_MODULE_2__.timer, 1, \"26 march 2022\");\r\n(0,_modules_documents__WEBPACK_IMPORTED_MODULE_3__.documents)(overlay);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/documents.js":
/*!******************************!*\
  !*** ./modules/documents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"documents\": () => (/* binding */ documents)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst documents = (secondOverlay) => {\r\n    const docsImg = document.querySelectorAll(\".sertificate-document\");\r\n    // const docsOverlays = document.querySelectorAll(\".document-overlay\");\r\n    console.log(docsImg);\r\n\r\n    docsImg.forEach((doc) => {\r\n        doc.addEventListener(\"mouseenter\", (e) => {\r\n            const docLink = e.target.closest(\"a\");\r\n            const overlay = docLink.querySelector(\".document-overlay\");\r\n            // overlay.style.opacity = 1;\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 150,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    overlay.style.opacity = progress;\r\n                },\r\n            });\r\n        });\r\n        doc.addEventListener(\"mouseleave\", (e) => {\r\n            const docLink = e.target.closest(\"a\");\r\n            const overlay = docLink.querySelector(\".document-overlay\");\r\n\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 150,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    overlay.style.opacity = progress / progress - progress;\r\n                },\r\n            });\r\n        });\r\n        doc.addEventListener(\"click\", (e) => {\r\n            console.log(secondOverlay);\r\n            const docModal = document.querySelector(\"#bigDoc\");\r\n            docModal.classList.add(\"show\");\r\n            docModal.classList.remove(\"none\");\r\n            secondOverlay.style.display = \"block\";\r\n            e.preventDefault();\r\n\r\n            secondOverlay.addEventListener(\"click\", () => {\r\n                docModal.classList.add(\"none\");\r\n                secondOverlay.style.display = \"none\";\r\n            });\r\n        });\r\n    });\r\n};\r\n\r\nconst shower = () => {\r\n    const docsSection = document.getElementById(\"documents\");\r\n    const bigDoc = document.createElement(\"img\");\r\n    bigDoc.src = \"images/documents/document4.jpg\";\r\n    bigDoc.id = \"bigDoc\";\r\n    bigDoc.classList.add(\"none\");\r\n    // bigDoc.classList.add(\"show\");\r\n    docsSection.append(bigDoc);\r\n};\r\nshower();\r\n\n\n//# sourceURL=webpack:///./modules/documents.js?");

/***/ }),

/***/ "./modules/headerModal.js":
/*!********************************!*\
  !*** ./modules/headerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerModal\": () => (/* binding */ headerModal)\n/* harmony export */ });\nconst headerModal = (window, button, close, overlay) => {\r\n    button.addEventListener(\"click\", () => {\r\n        window.style.display = \"block\";\r\n        overlay.style.display = \"block\";\r\n    });\r\n    close.addEventListener(\"click\", () => {\r\n        window.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/headerModal.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementById(\"timer-days\");\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n    };\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.hours < 10) {\r\n            timerHours.textContent = `0${getTime.hours}`;\r\n        } else {\r\n            timerHours.textContent = getTime.hours;\r\n        }\r\n        let minutesShower = getTime.minutes < 10 ? (timerMinutes.textContent = `0${getTime.minutes}`) : (timerMinutes.textContent = getTime.minutes);\r\n        let secondsShower = getTime.seconds < 10 ? (timerSeconds.textContent = `0${getTime.seconds}`) : (timerSeconds.textContent = getTime.seconds);\r\n        let daysShower = getTime.days < 10 ? (timerDays.textContent = `0${getTime.days}`) : (timerDays.textContent = getTime.days);\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            timerDays.textContent = \"00\";\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n        }\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            setTimeout(updateClock, 1000);\r\n        }\r\n    };\r\n    updateClock();\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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