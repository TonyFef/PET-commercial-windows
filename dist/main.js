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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_documentsShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/documentsShower */ \"./modules/documentsShower.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_saleValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/saleValidation */ \"./modules/saleValidation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst overlay = document.querySelector(\".overlay\");\r\nconst swiper1 = \".benefits-inner\";\r\nconst swiper2 = \".row\";\r\n// const swiper2ForStyles = document.getElementsByClassName(\"row swiper\")[0];\r\n// swiper2ForStyles.classList.add(\"swiper2\");\r\n// console.log(swiper2ForStyles);\r\n// const forms = document.getElementsByClassName(\"form-horizontal\");\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)(overlay);\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(\"26 march 2022\");\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_3__.swiper)(swiper1, swiper2);\r\n(0,_modules_documentsShower__WEBPACK_IMPORTED_MODULE_2__.shower)();\r\n// saleValidation(forms);\r\n(0,_modules_saleValidation__WEBPACK_IMPORTED_MODULE_4__.saleValidation)({ formId: \"form1\", someElem: [{ type: \"block\", id: \"total\" }] });\r\n(0,_modules_saleValidation__WEBPACK_IMPORTED_MODULE_4__.saleValidation)({ formId: \"form2\", someElem: [{ type: \"block\", id: \"total\" }] });\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/documentsShower.js":
/*!************************************!*\
  !*** ./modules/documentsShower.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shower\": () => (/* binding */ shower)\n/* harmony export */ });\nconst shower = () => {\r\n    const docsSection = document.getElementById(\"documents\");\r\n    const bigDoc = document.createElement(\"img\");\r\n    bigDoc.src = \"images/documents/original/document4.jpg\";\r\n    bigDoc.id = \"bigDoc\";\r\n    bigDoc.classList.add(\"none\");\r\n    // bigDoc.innerHTML = `<span title=\"Close\" class=\"add-modal__close modal__close\">x</span>`\r\n    docsSection.append(bigDoc);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/documentsShower.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"closeWhenScrollModal\": () => (/* binding */ closeWhenScrollModal),\n/* harmony export */   \"fixWhenScrollModal\": () => (/* binding */ fixWhenScrollModal)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\nconst fixWhenScrollModal = () => {\r\n    let scrollY = window.scrollY;\r\n    document.body.style.position = \"fixed\";\r\n    document.body.style.top = `-${scrollY}px`;\r\n};\r\n\r\nconst closeWhenScrollModal = () => {\r\n    let scrollY = document.body.style.top;\r\n    document.body.style.position = \"\";\r\n    document.body.style.top = \"\";\r\n    window.scrollTo(0, parseInt(scrollY || \"0\") * -1);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = (overlay) => {\r\n    const headerModalWindow = document.getElementById(\"header-modal\");\r\n    const servicesModalWindow = document.querySelector(\".services-modal\");\r\n    const modalCloseBtns = document.getElementsByClassName(\"modal__close\");\r\n    const docsImg = document.querySelectorAll(\".sertificate-document\");\r\n\r\n    const btnForModal = document.getElementsByClassName(\"btn-modal\");\r\n    const docsForModal = document.getElementsByClassName(\"doc-modal\");\r\n\r\n    for (let button of btnForModal) {\r\n        button.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            document.body.style.position = \"\";\r\n            document.body.style.top = \"\";\r\n            if (button.classList.contains(\"btn-block\")) {\r\n                headerModalWindow.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.fixWhenScrollModal)();\r\n            } else if (button.classList.contains(\"btn-sm\")) {\r\n                servicesModalWindow.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.fixWhenScrollModal)();\r\n            }\r\n        });\r\n\r\n        docsImg.forEach((doc) => {\r\n            doc.addEventListener(\"mouseenter\", (e) => {\r\n                const docLink = e.target.closest(\"a\");\r\n                const overlay2 = docLink.querySelector(\".document-overlay\");\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 150,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        overlay2.style.opacity = progress;\r\n                    },\r\n                });\r\n            });\r\n            doc.addEventListener(\"mouseleave\", (e) => {\r\n                const docLink = e.target.closest(\"a\");\r\n                const overlay2 = docLink.querySelector(\".document-overlay\");\r\n\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 150,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        overlay2.style.opacity = progress / progress - progress;\r\n                    },\r\n                });\r\n            });\r\n        });\r\n    }\r\n\r\n    for (let doc of docsForModal) {\r\n        doc.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            let docModal = document.querySelector(\"#bigDoc\");\r\n            docModal.classList.add(\"show\");\r\n            docModal.classList.remove(\"none\");\r\n            overlay.style.display = \"block\";\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.fixWhenScrollModal)();\r\n\r\n            overlay.addEventListener(\r\n                \"click\",\r\n                (e) => {\r\n                    e.preventDefault();\r\n                    headerModalWindow.style.display = \"none\";\r\n                    servicesModalWindow.style.display = \"none\";\r\n                    docModal.classList.add(\"none\");\r\n                    overlay.style.display = \"none\";\r\n                    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.closeWhenScrollModal)();\r\n                },\r\n                { once: true }\r\n            );\r\n        });\r\n    }\r\n\r\n    for (let button of modalCloseBtns) {\r\n        button.addEventListener(\"click\", () => {\r\n            headerModalWindow.style.display = \"none\";\r\n            servicesModalWindow.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.closeWhenScrollModal)();\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/saleValidation.js":
/*!***********************************!*\
  !*** ./modules/saleValidation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saleValidation\": () => (/* binding */ saleValidation)\n/* harmony export */ });\nconst saleValidation = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId);\r\n    let success = true;\r\n    const forms = document.getElementsByClassName(\"form-horizontal\");\r\n    for (let form of forms) {\r\n        const inputName = form.getElementsByTagName(\"input\")[0];\r\n        inputName.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-Я\\s]/g, \"\");\r\n        });\r\n\r\n        const inputPhone = form.getElementsByTagName(\"input\")[1];\r\n        inputPhone.addEventListener(\"input\", (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9\\s\\+]/g, \"\");\r\n        });\r\n    }\r\n\r\n    const validate = (list) => {\r\n        success = true;\r\n        list.forEach((input) => {\r\n            switch (input.name) {\r\n                case \"fio\":\r\n                    let result = input.value.length > 1 ? success : (success = false);\r\n                    break;\r\n                case \"phone\":\r\n                    if (input.value.length > 1 && input.value.length < 17) {\r\n                        return success;\r\n                    } else {\r\n                        return (success = false);\r\n                    }\r\n                    break;\r\n            }\r\n        });\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n            method: \"POST\",\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n        }).then((res) => res.json());\r\n    };\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll(\"input[type='text']\");\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        validate(formElements);\r\n\r\n        if (success) {\r\n            sendData(formBody)\r\n                .then((data) => {\r\n                    formElements.forEach((input) => {\r\n                        input.value = \"\";\r\n                    });\r\n                })\r\n                .catch((error) => {\r\n                    console.error();\r\n                });\r\n        } else {\r\n            alert(\"Данные не валидны!\");\r\n        }\r\n    };\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error(\"Верниие форму на место!\");\r\n        }\r\n\r\n        form.addEventListener(\"submit\", (e) => {\r\n            e.preventDefault();\r\n\r\n            submitForm();\r\n        });\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/saleValidation.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swiper\": () => (/* binding */ swiper)\n/* harmony export */ });\nconst swiper = (swiper1, swiper2) => {\r\n    new Swiper(swiper1, {\r\n        loop: true,\r\n        breakpoints: {\r\n            576: {\r\n                slidesPerView: 1,\r\n                // spaceBetween: 20,\r\n            },\r\n            768: {\r\n                slidesPerView: 2,\r\n                spaceBetween: 40,\r\n            },\r\n            1024: {\r\n                slidesPerView: 3,\r\n                spaceBetween: 100,\r\n            },\r\n        },\r\n        navigation: {\r\n            nextEl: \".benefits__arrow--right\",\r\n            prevEl: \".benefits__arrow--left\",\r\n        },\r\n    });\r\n\r\n    new Swiper(swiper2, {\r\n        loop: true,\r\n        breakpoints: {\r\n            576: {\r\n                slidesPerView: 1,\r\n                // spaceBetween: 20,\r\n            },\r\n            768: {\r\n                slidesPerView: 1,\r\n                spaceBetween: 20,\r\n            },\r\n            1024: {\r\n                slidesPerView: 2,\r\n                spaceBetween: 20,\r\n            },\r\n        },\r\n        navigation: {\r\n            nextEl: \".services__arrow--right\",\r\n            prevEl: \".services__arrow--left\",\r\n        },\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/swiper.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementsByClassName(\"count1\");\r\n    const timerHours = document.getElementsByClassName(\"count2\");\r\n    const timerMinutes = document.getElementsByClassName(\"count3\");\r\n    const timerSeconds = document.getElementsByClassName(\"count4\");\r\n    let hourFormat;\r\n    let dayFormat;\r\n    let minutesFormat;\r\n    let secondsFormat;\r\n\r\n    let getHoursFormatDivs = document.getElementsByClassName(\"count_2\");\r\n    let getDaysFormatDivs = document.getElementsByClassName(\"count_1\");\r\n    let getMinutesFormatDivs = document.getElementsByClassName(\"count_3\");\r\n    let getSecondsFormatDivs = document.getElementsByClassName(\"count_4\");\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        formatHours(hours);\r\n        formatDays(days);\r\n        formatMinutes(minutes);\r\n        formatSeconds(seconds);\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds, hourFormat };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        for (let item of timerDays) {\r\n            getTime.days < 10 ? (item.textContent = `0${getTime.days}`) : (item.textContent = getTime.days);\r\n        }\r\n        for (let item of timerHours) {\r\n            getTime.hours < 10 ? (item.textContent = `0${getTime.hours}`) : (item.textContent = getTime.hours);\r\n        }\r\n        for (let item of timerMinutes) {\r\n            getTime.minutes < 10 ? (item.textContent = `0${getTime.minutes}`) : (item.textContent = getTime.minutes);\r\n        }\r\n        for (let item of timerSeconds) {\r\n            getTime.seconds < 10 ? (item.textContent = `0${getTime.seconds}`) : (item.textContent = getTime.seconds);\r\n        }\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            timerDays.textContent = \"00\";\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n        }\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            setTimeout(updateClock, 1000);\r\n        }\r\n    };\r\n\r\n    const formatHours = (hours) => {\r\n        if (hours < 1) {\r\n            hourFormat = \"Часов:\";\r\n        } else if (hours >= 1 && hours < 2) {\r\n            hourFormat = \"Час:\";\r\n        } else if (hours >= 2 && hours < 5) {\r\n            hourFormat = \"Часа:\";\r\n        } else if (hours >= 5 && hours < 21) {\r\n            hourFormat = \"Часов:\";\r\n        } else if (hours >= 21 && hours < 22) {\r\n            hourFormat = \"Час:\";\r\n        } else if (hours >= 22 && hours < 25) {\r\n            hourFormat = \"Часа:\";\r\n        }\r\n\r\n        for (let span of getHoursFormatDivs) {\r\n            span.childNodes[0].data = hourFormat;\r\n        }\r\n    };\r\n\r\n    const formatDays = (days) => {\r\n        if (days < 1) {\r\n            dayFormat = \"Дней:\";\r\n        } else if (days >= 1 && days < 2) {\r\n            dayFormat = \"День:\";\r\n        } else if (days >= 2 && days < 5) {\r\n            dayFormat = \"Дня:\";\r\n        } else if (days >= 5 && days < 21) {\r\n            dayFormat = \"Дней:\";\r\n        }\r\n\r\n        for (let span of getDaysFormatDivs) {\r\n            span.childNodes[0].data = dayFormat;\r\n        }\r\n    };\r\n\r\n    const formatMinutes = (minutes) => {\r\n        if (minutes < 1) {\r\n            minutesFormat = \"Минут:\";\r\n        } else if (minutes >= 1 && minutes < 2) {\r\n            minutesFormat = \"Минута:\";\r\n        } else if (minutes >= 2 && minutes < 5) {\r\n            minutesFormat = \"Минуты:\";\r\n        } else if (minutes >= 5 && minutes < 21) {\r\n            minutesFormat = \"Минут:\";\r\n        } else if (minutes >= 21 && minutes < 22) {\r\n            minutesFormat = \"Минута:\";\r\n        } else if (minutes >= 22 && minutes < 25) {\r\n            minutesFormat = \"Минуты:\";\r\n        } else if (minutes >= 25 && minutes < 31) {\r\n            minutesFormat = \"Минут:\";\r\n        } else if (minutes >= 31 && minutes < 32) {\r\n            minutesFormat = \"Минута:\";\r\n        } else if (minutes >= 32 && minutes < 35) {\r\n            minutesFormat = \"Минуты:\";\r\n        } else if (minutes >= 25 && minutes < 31) {\r\n            minutesFormat = \"Минут:\";\r\n        } else if (minutes >= 31 && minutes < 32) {\r\n            minutesFormat = \"Минута:\";\r\n        } else if (minutes >= 32 && minutes < 35) {\r\n            minutesFormat = \"Минуты:\";\r\n        } else if (minutes >= 35 && minutes < 41) {\r\n            minutesFormat = \"Минут:\";\r\n        } else if (minutes >= 41 && minutes < 42) {\r\n            minutesFormat = \"Минута:\";\r\n        } else if (minutes >= 42 && minutes < 45) {\r\n            minutesFormat = \"Минуты:\";\r\n        } else if (minutes >= 45 && minutes < 51) {\r\n            minutesFormat = \"Минут:\";\r\n        } else if (minutes >= 51 && minutes < 52) {\r\n            minutesFormat = \"Минута:\";\r\n        } else if (minutes >= 52 && minutes < 55) {\r\n            minutesFormat = \"Минуты:\";\r\n        } else if (minutes >= 55 && minutes < 61) {\r\n            minutesFormat = \"Минут:\";\r\n        }\r\n\r\n        for (let span of getMinutesFormatDivs) {\r\n            span.childNodes[0].data = minutesFormat;\r\n        }\r\n    };\r\n\r\n    const formatSeconds = (seconds) => {\r\n        if (seconds < 1) {\r\n            secondsFormat = \"Секунд:\";\r\n        } else if (seconds >= 1 && seconds < 2) {\r\n            secondsFormat = \"Секунда:\";\r\n        } else if (seconds >= 2 && seconds < 5) {\r\n            secondsFormat = \"Секунды:\";\r\n        } else if (seconds >= 5 && seconds < 21) {\r\n            secondsFormat = \"Секунд:\";\r\n        } else if (seconds >= 21 && seconds < 22) {\r\n            secondsFormat = \"Секунда:\";\r\n        } else if (seconds >= 22 && seconds < 25) {\r\n            secondsFormat = \"Секунды:\";\r\n        } else if (seconds >= 25 && seconds < 31) {\r\n            secondsFormat = \"Секунд:\";\r\n        } else if (seconds >= 31 && seconds < 32) {\r\n            secondsFormat = \"Секунда:\";\r\n        } else if (seconds >= 32 && seconds < 35) {\r\n            secondsFormat = \"Секунды:\";\r\n        } else if (seconds >= 25 && seconds < 31) {\r\n            secondsFormat = \"Секунд:\";\r\n        } else if (seconds >= 31 && seconds < 32) {\r\n            secondsFormat = \"Секунда:\";\r\n        } else if (seconds >= 32 && seconds < 35) {\r\n            secondsFormat = \"Секунды:\";\r\n        } else if (seconds >= 35 && seconds < 41) {\r\n            secondsFormat = \"Секунд:\";\r\n        } else if (seconds >= 41 && seconds < 42) {\r\n            secondsFormat = \"Секунда:\";\r\n        } else if (seconds >= 42 && seconds < 45) {\r\n            secondsFormat = \"Секунды:\";\r\n        } else if (seconds >= 45 && seconds < 51) {\r\n            secondsFormat = \"Секунд:\";\r\n        } else if (seconds >= 51 && seconds < 52) {\r\n            secondsFormat = \"Секунда:\";\r\n        } else if (seconds >= 52 && seconds < 55) {\r\n            secondsFormat = \"Секунды:\";\r\n        } else if (seconds >= 55 && seconds < 61) {\r\n            secondsFormat = \"Секунд:\";\r\n        }\r\n\r\n        for (let span of getSecondsFormatDivs) {\r\n            span.childNodes[0].data = secondsFormat;\r\n        }\r\n    };\r\n\r\n    updateClock();\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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