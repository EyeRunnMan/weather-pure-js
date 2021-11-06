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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WEATHER_API\": () => (/* binding */ WEATHER_API),\n/* harmony export */   \"GIPHY_API\": () => (/* binding */ GIPHY_API)\n/* harmony export */ });\nconst WEATHER_API = \"26098981699553ba9549243c7a8ac2da\";\nconst GIPHY_API = \"Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g\";\n\n\n//# sourceURL=webpack://weather-pure/./config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_FetchRandomGif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/FetchRandomGif */ \"./src/logic/FetchRandomGif.js\");\n/* harmony import */ var _logic_FetchWeatherInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/FetchWeatherInfo */ \"./src/logic/FetchWeatherInfo.js\");\n\n\n\n(0,_logic_FetchRandomGif__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ThunderStrom\").then((val) => {\n  console.log(val);\n});\n(0,_logic_FetchWeatherInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Mumbai\").then((val) => {\n  console.log(val);\n});\n\n// import Header from \"./structure/Header\";\n\n// const contentDiv = document.getElementById(\"content\");\n\n// contentDiv.appendChild(Header());\n\n\n//# sourceURL=webpack://weather-pure/./src/index.js?");

/***/ }),

/***/ "./src/logic/FetchRandomGif.js":
/*!*************************************!*\
  !*** ./src/logic/FetchRandomGif.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n\n\nconst FetchRandomGif = async (searchQuery) => {\n  const apiUrlSearch = `https://api.giphy.com/v1/gifs/random?tag=${searchQuery}&api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.GIPHY_API}`;\n  const response = await fetch(apiUrlSearch);\n  const gifObjs = await response.json();\n  const randomGifObj = gifObjs.data;\n\n  const { images } = randomGifObj;\n  return new Promise((res) => {\n    res(images.downsized.url);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchRandomGif);\n\n\n//# sourceURL=webpack://weather-pure/./src/logic/FetchRandomGif.js?");

/***/ }),

/***/ "./src/logic/FetchWeatherInfo.js":
/*!***************************************!*\
  !*** ./src/logic/FetchWeatherInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n\n\nconst FetchWeatherInfo = async (cityname) => {\n  const apiUrlByCityName = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API}`;\n  const response = await fetch(apiUrlByCityName);\n  const status = await response.status;\n  if (status !== 200) {\n    throw new Error(\"Something Went Wrong\");\n  }\n  const data = await response.json();\n  const { coord } = data;\n\n  const apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API}`;\n  const responseForecast = await fetch(apiUrlForecast);\n\n  const { hourly, daily } = await responseForecast.json();\n  const hourlyForecast = [];\n  hourly.forEach((item, idx) => {\n    const { weather, temp, dt } = item;\n    const tmpObj = {\n      temperature: temp,\n      weatherIconId: weather[0].id,\n      time: \"todo\",\n    };\n    if (idx < 24) {\n      hourlyForecast.push(tmpObj);\n    }\n  });\n  const dailyForecast = [];\n  daily.forEach((item) => {\n    const { dt, weather, temp } = item;\n    const tmpObj = {\n      temperature: temp.day,\n      weatherIconId: weather[0].id,\n      day: \"todo\",\n    };\n    dailyForecast.push(tmpObj);\n  });\n  const usefulData = {\n    type: data.weather[0].description,\n    location: data.name,\n    currentTime: \"TODO\",\n    currentTemperature: data.main.temp,\n    currentWeatherIconId: data.weather[0].id,\n    feelsLike: data.main.feels_like,\n    humidity: data.main.humidity,\n    visibility: data.visibility,\n    windSpeed: data.wind.speed,\n    hourlyForecast,\n    dailyForecast,\n  };\n  return new Promise((res) => {\n    res(usefulData);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchWeatherInfo);\n\n\n//# sourceURL=webpack://weather-pure/./src/logic/FetchWeatherInfo.js?");

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