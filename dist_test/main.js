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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _structure_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure/Header */ \"./src/structure/Header.js\");\n// import FetchRandomGif from \"./logic/FetchRandomGif\";\n// import FetchWeatherInfo from \"./logic/FetchWeatherInfo\";\n\n// FetchRandomGif(\"ThunderStrom\").then((val) => {\n//   console.log(val);\n// });\n// FetchWeatherInfo(\"Mumbai\").then((val) => {\n//   console.log(val);\n// });\n\n\n\nconst contentDiv = document.getElementById(\"content\");\n\ncontentDiv.appendChild((0,_structure_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack://weather-pure/./src/index.js?");

/***/ }),

/***/ "./src/structure/Header.js":
/*!*********************************!*\
  !*** ./src/structure/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\n  const headerTag = document.createElement(\"header\");\n\n  const LogoDiv = document.createElement(\"div\");\n  const logo = document.createElement(\"h1\");\n  logo.textContent = \"The Weather\";\n  LogoDiv.appendChild(logo);\n\n  const inputDiv = document.createElement(\"div\");\n  inputDiv.classList.add(\"input-div\");\n  const inputFieldDiv = document.createElement(\"div\");\n  const cityInputField = document.createElement(\"input\");\n  cityInputField.type = \"text\";\n  cityInputField.placeholder = \"Enter a City\";\n  const searchIcon = document.createElement(\"i\");\n  searchIcon.classList.add(\"material-icons\");\n  searchIcon.textContent = \"search\";\n\n  inputFieldDiv.appendChild(cityInputField);\n  inputFieldDiv.appendChild(searchIcon);\n  inputDiv.appendChild(inputFieldDiv);\n  headerTag.appendChild(LogoDiv);\n  headerTag.appendChild(inputDiv);\n\n  return headerTag;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/Header.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;