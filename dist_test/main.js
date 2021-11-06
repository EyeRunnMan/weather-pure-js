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

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"setWeatherData\": () => (/* binding */ setWeatherData),\n/* harmony export */   \"getGiphyImgUrl\": () => (/* binding */ getGiphyImgUrl),\n/* harmony export */   \"setGiphyImgUrl\": () => (/* binding */ setGiphyImgUrl),\n/* harmony export */   \"getForecastMode\": () => (/* binding */ getForecastMode),\n/* harmony export */   \"setForecastMode\": () => (/* binding */ setForecastMode)\n/* harmony export */ });\n/* harmony import */ var _structure_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure/Header */ \"./src/structure/Header.js\");\n/* harmony import */ var _structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/WeatherDisplay */ \"./src/structure/WeatherDisplay.js\");\n/* harmony import */ var _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uitilty/ForecastModes */ \"./src/uitilty/ForecastModes.js\");\n\n\n\n\nconst ReloadPage = () => {\n  const contentDiv = document.getElementById(\"content\");\n  while (contentDiv.firstChild) {\n    contentDiv.removeChild(contentDiv.lastChild);\n  }\n  contentDiv.appendChild((0,_structure_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  contentDiv.appendChild((0,_structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _weatherData = {};\n\nconst getWeatherData = () => _weatherData;\nconst setWeatherData = (data) => {\n  _weatherData = data;\n  ReloadPage();\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _gihpyImgUrl = \"\";\nconst getGiphyImgUrl = () => _gihpyImgUrl;\nconst setGiphyImgUrl = (url) => {\n  _gihpyImgUrl = url;\n  ReloadPage();\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _forecastMode = _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_2__.DAILY_MODE;\nconst getForecastMode = () => _forecastMode;\nconst setForecastMode = (mode) => {\n  console.log(mode);\n  _forecastMode = mode;\n  ReloadPage();\n};\n\n\n\n\n//# sourceURL=webpack://weather-pure/./src/State.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _structure_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure/Header */ \"./src/structure/Header.js\");\n/* harmony import */ var _structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/WeatherDisplay */ \"./src/structure/WeatherDisplay.js\");\n// import FetchRandomGif from \"./logic/FetchRandomGif\";\n// import FetchWeatherInfo from \"./logic/FetchWeatherInfo\";\n\n// FetchRandomGif(\"ThunderStrom\").then((val) => {\n//   console.log(val);\n// });\n// FetchWeatherInfo(\"Mumbai\").then((val) => {\n//   console.log(val);\n// });\n\n\n\n\nconst contentDiv = document.getElementById(\"content\");\n\ncontentDiv.appendChild((0,_structure_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontentDiv.appendChild((0,_structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://weather-pure/./src/index.js?");

/***/ }),

/***/ "./src/structure/Header.js":
/*!*********************************!*\
  !*** ./src/structure/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\n  const headerTag = document.createElement(\"header\");\n\n  const LogoDiv = document.createElement(\"div\");\n  const logo = document.createElement(\"h1\");\n  logo.textContent = \"The Weather\";\n  LogoDiv.appendChild(logo);\n\n  const inputDiv = document.createElement(\"div\");\n  inputDiv.classList.add(\"input-div\");\n  const inputFieldDiv = document.createElement(\"div\");\n  const cityInputField = document.createElement(\"input\");\n  cityInputField.type = \"text\";\n  cityInputField.placeholder = \"Enter a City\";\n  const searchIcon = document.createElement(\"i\");\n  searchIcon.classList.add(\"material-icons\");\n  searchIcon.textContent = \"search\";\n\n  inputFieldDiv.appendChild(cityInputField);\n  inputFieldDiv.appendChild(searchIcon);\n  inputDiv.appendChild(inputFieldDiv);\n  headerTag.appendChild(LogoDiv);\n  headerTag.appendChild(inputDiv);\n\n  return headerTag;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/Header.js?");

/***/ }),

/***/ "./src/structure/WeatherDisplay.js":
/*!*****************************************!*\
  !*** ./src/structure/WeatherDisplay.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ForecastModeSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ForecastModeSwitcher */ \"./src/structure/components/ForecastModeSwitcher.js\");\n/* harmony import */ var _components_TypeInfoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TypeInfoContainer */ \"./src/structure/components/TypeInfoContainer.js\");\n/* harmony import */ var _components_WeatherStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/WeatherStats */ \"./src/structure/components/WeatherStats.js\");\n\n\n\n\nconst WeatherDisplay = () => {\n  const mainTag = document.createElement(\"main\");\n\n  const displayDiv = document.createElement(\"div\");\n  displayDiv.classList.add(\"weather-display\");\n\n  const infoDiv = document.createElement(\"div\");\n  infoDiv.classList.add(\"weather-info\");\n\n  infoDiv.appendChild((0,_components_WeatherStats__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  infoDiv.appendChild((0,_components_TypeInfoContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n  const forecastDiv = document.createElement(\"div\");\n  forecastDiv.classList.add(\"weather-forecast\");\n  forecastDiv.appendChild((0,_components_ForecastModeSwitcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  // append mode changer\n  // append hourly or daily forecast\n\n  mainTag.appendChild(displayDiv);\n  displayDiv.appendChild(infoDiv);\n  displayDiv.appendChild(forecastDiv);\n  return mainTag;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherDisplay);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/WeatherDisplay.js?");

/***/ }),

/***/ "./src/structure/components/ForecastModeSwitcher.js":
/*!**********************************************************!*\
  !*** ./src/structure/components/ForecastModeSwitcher.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../State */ \"./src/State.js\");\n/* harmony import */ var _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../uitilty/ForecastModes */ \"./src/uitilty/ForecastModes.js\");\n\n\n\n// eslint-disable-next-line no-lone-blocks\n{\n  /* <div class=\"weather-forcast-mode-container\">\n  <button class=\"forecast-mode-btn\">Daily</button>\n  <button class=\"forecast-mode-btn active\">Hourly</button>\n  <div class=\"daily-forecast-nav\">\n    <span class=\"material-icons\"> chevron_left </span>\n    <span class=\"material-icons-outlined md-12\"> circle </span>\n    <span class=\"material-icons-outlined md-12\">radio_button_checked</span>\n    <span class=\"material-icons-outlined md-12\"> circle </span>\n    <span class=\"material-icons\"> chevron_right </span>\n  </div>\n</div>; */\n}\n\nconst ForecastModeSwitcher = () => {\n  const modeChangerDiv = document.createElement(\"div\");\n  modeChangerDiv.classList.add(\"weather-forcast-mode-container\");\n\n  const dailyModeButton = document.createElement(\"button\");\n  dailyModeButton.textContent = \"Daily\";\n  dailyModeButton.classList.add(\"forecast-mode-btn\");\n  dailyModeButton.addEventListener(\"click\", () => {\n    (0,_State__WEBPACK_IMPORTED_MODULE_0__.setForecastMode)(_uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.DAILY_MODE);\n  });\n\n  const hourlyModeButton = document.createElement(\"button\");\n  hourlyModeButton.textContent = \"Hourly\";\n  hourlyModeButton.classList.add(\"forecast-mode-btn\");\n  hourlyModeButton.addEventListener(\"click\", () => {\n    (0,_State__WEBPACK_IMPORTED_MODULE_0__.setForecastMode)(_uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.HOURLY_MODE);\n  });\n\n  if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.DAILY_MODE) {\n    dailyModeButton.classList.add(\"active\");\n    hourlyModeButton.classList.remove(\"active\");\n  } else if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.HOURLY_MODE) {\n    dailyModeButton.classList.remove(\"active\");\n    hourlyModeButton.classList.add(\"active\");\n  }\n  modeChangerDiv.appendChild(dailyModeButton);\n  modeChangerDiv.appendChild(hourlyModeButton);\n\n  return modeChangerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForecastModeSwitcher);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/ForecastModeSwitcher.js?");

/***/ }),

/***/ "./src/structure/components/TypeInfoContainer.js":
/*!*******************************************************!*\
  !*** ./src/structure/components/TypeInfoContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TypeInfoContainer = () => {\n  const InfoContainerDiv = document.createElement(\"div\");\n  InfoContainerDiv.classList.add(\"type-info-container\");\n\n  const InfoDivGenerator = (type, desc, val) => {\n    const typeInfoDiv = document.createElement(\"div\");\n    typeInfoDiv.classList.add(\"type-info\");\n    typeInfoDiv.innerHTML = `<div>\n                            ${\n                              type === \"visibility\"\n                                ? `<span class=\"material-icons md-32\"> visibility </span>`\n                                : `<span class=\"wi wi-${type} md-32\"></span>`\n                            }\n                            </div>\n                            <div>\n                              <b>${desc}</b>\n                              <br />\n                              <b style=\"font-size: x-large\">${val}</b>\n                            </div>`;\n    return typeInfoDiv;\n  };\n\n  const FeelsLikeInfo = InfoDivGenerator(\"thermometer\", \"Feels Like\", \"TODO\");\n  const humidityInfo = InfoDivGenerator(\"humidity\", \"Humidity\", \"TODO\");\n  const visibilityInfo = InfoDivGenerator(\"visibility\", \"Visibility\", \"TODO\");\n  const windSpeedInfo = InfoDivGenerator(\"strong-wind\", \"Wind Speed\", \"TODO\");\n\n  InfoContainerDiv.appendChild(FeelsLikeInfo);\n  InfoContainerDiv.appendChild(humidityInfo);\n  InfoContainerDiv.appendChild(visibilityInfo);\n  InfoContainerDiv.appendChild(windSpeedInfo);\n  return InfoContainerDiv;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeInfoContainer);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/TypeInfoContainer.js?");

/***/ }),

/***/ "./src/structure/components/WeatherStats.js":
/*!**************************************************!*\
  !*** ./src/structure/components/WeatherStats.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line no-lone-blocks\n{\n  /* <div class=\"weather-stats-container\">\n  <span id=\"weather-type\">Broken Clouds</span>\n  <div id=\"location-div\">\n    <span class=\"material-icons-outlined\"> place </span>\n    <span style=\"font-size: 18px\">Chandigarh</span>\n  </div>\n  <span id=\"current-time\">Thursday, 4th Nov '21 10:44 pm</span>\n  <span id=\"current-temp\">15 °C</span>\n  <i class=\"wi wi-night-sleet md-48\"></i>\n</div>; */\n}\nconst WeatherStats = () => {\n  const statsDiv = document.createElement(\"div\");\n  statsDiv.classList.add(\"weather-stats-container\");\n  statsDiv.innerHTML = `<span id=\"weather-type\">${\"TODO\"}</span>\n                        <div id=\"location-div\">\n                          <span class=\"material-icons-outlined\"> place </span>\n                          <span style=\"font-size: 18px\">${\"TODO\"}</span>\n                        </div>\n                        <span id=\"current-time\">${\"TODO\"}</span>\n                        <span id=\"current-temp\">${\"TODO\"}</span>\n                        <i class=\"wi wi-night-sleet md-48\"></i>`;\n\n  return statsDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherStats);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/WeatherStats.js?");

/***/ }),

/***/ "./src/uitilty/ForecastModes.js":
/*!**************************************!*\
  !*** ./src/uitilty/ForecastModes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DAILY_MODE\": () => (/* binding */ DAILY_MODE),\n/* harmony export */   \"HOURLY_MODE\": () => (/* binding */ HOURLY_MODE)\n/* harmony export */ });\nconst DAILY_MODE = \"daily\";\nconst HOURLY_MODE = \"hourly\";\n\n\n//# sourceURL=webpack://weather-pure/./src/uitilty/ForecastModes.js?");

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