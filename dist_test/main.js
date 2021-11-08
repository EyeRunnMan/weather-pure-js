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

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"setWeatherData\": () => (/* binding */ setWeatherData),\n/* harmony export */   \"getGiphyImgUrl\": () => (/* binding */ getGiphyImgUrl),\n/* harmony export */   \"setGiphyImgUrl\": () => (/* binding */ setGiphyImgUrl),\n/* harmony export */   \"getForecastMode\": () => (/* binding */ getForecastMode),\n/* harmony export */   \"setForecastMode\": () => (/* binding */ setForecastMode),\n/* harmony export */   \"getHourlyPageNo\": () => (/* binding */ getHourlyPageNo),\n/* harmony export */   \"setHourlyPageNo\": () => (/* binding */ setHourlyPageNo),\n/* harmony export */   \"getRenderMode\": () => (/* binding */ getRenderMode),\n/* harmony export */   \"setRenderMode\": () => (/* binding */ setRenderMode)\n/* harmony export */ });\n/* harmony import */ var _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uitilty/ForecastModes */ \"./src/uitilty/ForecastModes.js\");\n/* harmony import */ var _uitilty_ReloadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uitilty/ReloadPage */ \"./src/uitilty/ReloadPage.js\");\n/* harmony import */ var _uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uitilty/RenderMode */ \"./src/uitilty/RenderMode.js\");\n\n\n\n\n// eslint-disable-next-line no-underscore-dangle\nlet _weatherData = {};\n\nconst getWeatherData = () => _weatherData;\nconst setWeatherData = (data) => {\n  _weatherData = data;\n  (0,_uitilty_ReloadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _gihpyImgUrl = \"\";\nconst getGiphyImgUrl = () => _gihpyImgUrl;\nconst setGiphyImgUrl = (url) => {\n  _gihpyImgUrl = url;\n  (0,_uitilty_ReloadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _forecastMode = _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_0__.DAILY_MODE;\nconst getForecastMode = () => _forecastMode;\nconst setForecastMode = (mode) => {\n  _forecastMode = mode;\n  (0,_uitilty_ReloadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _hourlyNavPageNo = 1;\nconst getHourlyPageNo = () => _hourlyNavPageNo;\nconst setHourlyPageNo = (n) => {\n  if (n <= 3 && n >= 1) {\n    _hourlyNavPageNo = n;\n    (0,_uitilty_ReloadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n};\n\n// eslint-disable-next-line no-underscore-dangle\nlet _renderMode = _uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_2__.LOADING;\nconst getRenderMode = () => _renderMode;\nconst setRenderMode = (mode) => {\n  _renderMode = mode;\n  (0,_uitilty_ReloadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n\n\n//# sourceURL=webpack://weather-pure/./src/State.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_FetchRandomGif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/FetchRandomGif */ \"./src/logic/FetchRandomGif.js\");\n/* harmony import */ var _logic_FetchWeatherInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/FetchWeatherInfo */ \"./src/logic/FetchWeatherInfo.js\");\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ \"./src/State.js\");\n/* harmony import */ var _structure_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structure/Header */ \"./src/structure/Header.js\");\n/* harmony import */ var _structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./structure/WeatherDisplay */ \"./src/structure/WeatherDisplay.js\");\n/* harmony import */ var _uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uitilty/RenderMode */ \"./src/uitilty/RenderMode.js\");\n// import FetchRandomGif from \"./logic/FetchRandomGif\";\n// import FetchWeatherInfo from \"./logic/FetchWeatherInfo\";\n\n// FetchRandomGif(\"ThunderStrom\").then((val) => {\n//   console.log(val);\n// });\n// FetchWeatherInfo(\"Mumbai\").then((val) => {\n//   console.log(val);\n// });\n\n\n\n\n\n\n\n\nconst initialData = async () => {\n  const cityQuery = \"chandigarh\";\n  (0,_State__WEBPACK_IMPORTED_MODULE_2__.setRenderMode)(_uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_5__.LOADING);\n  const data = await (0,_logic_FetchWeatherInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cityQuery);\n  const gifUrl = await (0,_logic_FetchRandomGif__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${data.type} weather`);\n  // await AsyncDelay(2000);\n  (0,_State__WEBPACK_IMPORTED_MODULE_2__.setGiphyImgUrl)(gifUrl);\n  (0,_State__WEBPACK_IMPORTED_MODULE_2__.setWeatherData)(data);\n  (0,_State__WEBPACK_IMPORTED_MODULE_2__.setRenderMode)(_uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_5__.DISPLAY_INFO);\n};\ninitialData();\n\nconst contentDiv = document.getElementById(\"content\");\n\ncontentDiv.appendChild((0,_structure_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\ncontentDiv.appendChild((0,_structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n\n//# sourceURL=webpack://weather-pure/./src/index.js?");

/***/ }),

/***/ "./src/logic/FetchRandomGif.js":
/*!*************************************!*\
  !*** ./src/logic/FetchRandomGif.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n\n\nconst FetchRandomGif = async (searchQuery) => {\n  const apiUrlSearch = `https://api.giphy.com/v1/gifs/random?tag=${encodeURI(\n    searchQuery\n  )}&api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.GIPHY_API}`;\n  const response = await fetch(apiUrlSearch);\n  const gifObjs = await response.json();\n  const randomGifObj = gifObjs.data;\n\n  const { images } = randomGifObj;\n  return new Promise((res) => {\n    res(images.downsized.url);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchRandomGif);\n\n\n//# sourceURL=webpack://weather-pure/./src/logic/FetchRandomGif.js?");

/***/ }),

/***/ "./src/logic/FetchWeatherInfo.js":
/*!***************************************!*\
  !*** ./src/logic/FetchWeatherInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n\n\nconst FetchWeatherInfo = async (cityname) => {\n  const apiUrlByCityName = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API}`;\n  const response = await fetch(apiUrlByCityName);\n  const status = await response.status;\n  if (status !== 200) {\n    throw new Error(\"Something Went Wrong\");\n  }\n  const data = await response.json();\n  const { coord } = data;\n\n  const apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API}`;\n  const responseForecast = await fetch(apiUrlForecast);\n\n  const { hourly, daily } = await responseForecast.json();\n  const hourlyForecast = [];\n  hourly.forEach((item, idx) => {\n    const { weather, temp, dt } = item;\n    const tmpObj = {\n      temperature: temp,\n      weatherIconId: weather[0].id,\n      time: \"todo\",\n    };\n    if (idx < 24) {\n      hourlyForecast.push(tmpObj);\n    }\n  });\n  const dailyForecast = [];\n  daily.forEach((item) => {\n    const { dt, weather, temp } = item;\n    const tmpObj = {\n      temperature: temp.day,\n      weatherIconId: weather[0].id,\n      day: \"todo\",\n    };\n    dailyForecast.push(tmpObj);\n  });\n  const usefulData = {\n    type: data.weather[0].description,\n    location: data.name,\n    currentTime: \"TODO\",\n    currentTemperature: data.main.temp,\n    currentWeatherIconId: data.weather[0].id,\n    feelsLike: data.main.feels_like,\n    humidity: data.main.humidity,\n    visibility: data.visibility,\n    windSpeed: data.wind.speed,\n    hourlyForecast,\n    dailyForecast,\n  };\n  return new Promise((res) => {\n    res(usefulData);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchWeatherInfo);\n\n\n//# sourceURL=webpack://weather-pure/./src/logic/FetchWeatherInfo.js?");

/***/ }),

/***/ "./src/structure/Header.js":
/*!*********************************!*\
  !*** ./src/structure/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic_FetchWeatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/FetchWeatherInfo */ \"./src/logic/FetchWeatherInfo.js\");\n/* harmony import */ var _logic_FetchRandomGif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/FetchRandomGif */ \"./src/logic/FetchRandomGif.js\");\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../State */ \"./src/State.js\");\n/* harmony import */ var _uitilty_AsyncDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uitilty/AsyncDelay */ \"./src/uitilty/AsyncDelay.js\");\n/* harmony import */ var _uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uitilty/RenderMode */ \"./src/uitilty/RenderMode.js\");\n\n\n\n\n\n\n\nconst Header = () => {\n  let cityQuery = \"\";\n\n  const headerTag = document.createElement(\"header\");\n\n  const LogoDiv = document.createElement(\"div\");\n  const logo = document.createElement(\"h1\");\n  logo.textContent = \"The Weather\";\n  LogoDiv.appendChild(logo);\n\n  const inputDiv = document.createElement(\"div\");\n  inputDiv.classList.add(\"input-div\");\n  const inputFieldDiv = document.createElement(\"div\");\n  const cityInputField = document.createElement(\"input\");\n  cityInputField.type = \"text\";\n  cityInputField.placeholder = \"Enter a City\";\n  cityInputField.addEventListener(\"change\", async (e) => {\n    try {\n      cityQuery = e.target.value;\n      (0,_State__WEBPACK_IMPORTED_MODULE_2__.setRenderMode)(_uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_4__.LOADING);\n      const data = await (0,_logic_FetchWeatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityQuery);\n      const gifUrl = await (0,_logic_FetchRandomGif__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${data.type} weather`);\n      // await AsyncDelay(2000);\n      (0,_State__WEBPACK_IMPORTED_MODULE_2__.setGiphyImgUrl)(gifUrl);\n      (0,_State__WEBPACK_IMPORTED_MODULE_2__.setWeatherData)(data);\n      (0,_State__WEBPACK_IMPORTED_MODULE_2__.setRenderMode)(_uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_4__.DISPLAY_INFO);\n    } catch (error) {\n      alert(error);\n    }\n  });\n  const searchIcon = document.createElement(\"i\");\n  searchIcon.classList.add(\"material-icons\");\n  searchIcon.textContent = \"search\";\n\n  inputFieldDiv.appendChild(cityInputField);\n  inputFieldDiv.appendChild(searchIcon);\n  inputDiv.appendChild(inputFieldDiv);\n  headerTag.appendChild(LogoDiv);\n  headerTag.appendChild(inputDiv);\n\n  return headerTag;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/Header.js?");

/***/ }),

/***/ "./src/structure/WeatherDisplay.js":
/*!*****************************************!*\
  !*** ./src/structure/WeatherDisplay.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../State */ \"./src/State.js\");\n/* harmony import */ var _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uitilty/ForecastModes */ \"./src/uitilty/ForecastModes.js\");\n/* harmony import */ var _uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uitilty/RenderMode */ \"./src/uitilty/RenderMode.js\");\n/* harmony import */ var _components_DailyForecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DailyForecast */ \"./src/structure/components/DailyForecast.js\");\n/* harmony import */ var _components_ForecastModeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ForecastModeSwitcher */ \"./src/structure/components/ForecastModeSwitcher.js\");\n/* harmony import */ var _components_HourlyForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HourlyForecast */ \"./src/structure/components/HourlyForecast.js\");\n/* harmony import */ var _components_TypeInfoContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TypeInfoContainer */ \"./src/structure/components/TypeInfoContainer.js\");\n/* harmony import */ var _components_WeatherStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/WeatherStats */ \"./src/structure/components/WeatherStats.js\");\n\n\n\n\n\n\n\n\n\nconst WeatherDisplay = () => {\n  const gifUrl = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getGiphyImgUrl)();\n\n  const mainTag = document.createElement(\"main\");\n  mainTag.style.backgroundImage = `url(${`${gifUrl}`})`;\n\n  const loadingDiv = document.createElement(\"div\");\n  loadingDiv.classList.add(\"loading\");\n  loadingDiv.innerHTML = `<span class=\"material-icons-outlined md-48\"> sync </span>`;\n\n  if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getRenderMode)() === _uitilty_RenderMode__WEBPACK_IMPORTED_MODULE_2__.LOADING) {\n    mainTag.appendChild(loadingDiv);\n  }\n  const displayDiv = document.createElement(\"div\");\n  displayDiv.classList.add(\"weather-display\");\n\n  const infoDiv = document.createElement(\"div\");\n  infoDiv.classList.add(\"weather-info\");\n\n  infoDiv.appendChild((0,_components_WeatherStats__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n  infoDiv.appendChild((0,_components_TypeInfoContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n\n  const forecastDiv = document.createElement(\"div\");\n  forecastDiv.classList.add(\"weather-forecast\");\n  forecastDiv.appendChild((0,_components_ForecastModeSwitcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.DAILY_MODE) {\n    forecastDiv.appendChild((0,_components_DailyForecast__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  } else if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.HOURLY_MODE) {\n    forecastDiv.appendChild((0,_components_HourlyForecast__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n  }\n\n  mainTag.appendChild(displayDiv);\n  displayDiv.appendChild(infoDiv);\n  displayDiv.appendChild(forecastDiv);\n  return mainTag;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherDisplay);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/WeatherDisplay.js?");

/***/ }),

/***/ "./src/structure/components/DailyForecast.js":
/*!***************************************************!*\
  !*** ./src/structure/components/DailyForecast.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../State */ \"./src/State.js\");\n\n\nconst DailyForecast = () => {\n  const { dailyForecast } = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();\n  const dailyForecastContainerDiv = document.createElement(\"div\");\n  dailyForecastContainerDiv.classList.add(\"daily-forecast-container\");\n  const createDailyDiv = (day, temp, iconId) => {\n    const dailyDiv = document.createElement(\"div\");\n    dailyDiv.classList.add(\"daily-forecastInfo\");\n    dailyDiv.innerHTML = `<h4>${day}</h4>\n                          <span style=\"font-size: 28px; font-weight: bolder\">${temp}</span>\n                          <br />\n                          <i class=\"wi wi-owm-${iconId}\" style=\"font-size: 48px\"></i>`;\n    return dailyDiv;\n  };\n  if (dailyForecast !== undefined) {\n    dailyForecast.forEach((data) => {\n      const tempDaily = createDailyDiv(\n        data.day,\n        data.temperature,\n        data.weatherIconId\n      );\n      dailyForecastContainerDiv.appendChild(tempDaily);\n    });\n  } else {\n    for (let i = 0; i < 7; i += 1) {\n      const tempDaily = createDailyDiv(\"TODO\", \"TODO\", \"800\");\n      dailyForecastContainerDiv.appendChild(tempDaily);\n    }\n  }\n  return dailyForecastContainerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyForecast);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/DailyForecast.js?");

/***/ }),

/***/ "./src/structure/components/ForecastModeSwitcher.js":
/*!**********************************************************!*\
  !*** ./src/structure/components/ForecastModeSwitcher.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../State */ \"./src/State.js\");\n/* harmony import */ var _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../uitilty/ForecastModes */ \"./src/uitilty/ForecastModes.js\");\n\n\n\n// eslint-disable-next-line no-lone-blocks\n{\n  /* <div class=\"weather-forcast-mode-container\">\n\n  <div class=\"daily-forecast-nav\">\n    <span class=\"material-icons\"> chevron_left </span>\n    <span class=\"material-icons-outlined md-12\"> circle </span>\n    <span class=\"material-icons-outlined md-12\">radio_button_checked</span>\n    <span class=\"material-icons-outlined md-12\"> circle </span>\n    <span class=\"material-icons\"> chevron_right </span>\n  </div>\n</div>; */\n}\n\nconst ForecastModeSwitcher = () => {\n  const modeChangerDiv = document.createElement(\"div\");\n  modeChangerDiv.classList.add(\"weather-forcast-mode-container\");\n\n  const dailyModeButton = document.createElement(\"button\");\n  dailyModeButton.textContent = \"Daily\";\n  dailyModeButton.classList.add(\"forecast-mode-btn\");\n  dailyModeButton.addEventListener(\"click\", () => {\n    (0,_State__WEBPACK_IMPORTED_MODULE_0__.setForecastMode)(_uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.DAILY_MODE);\n  });\n\n  const hourlyModeButton = document.createElement(\"button\");\n  hourlyModeButton.textContent = \"Hourly\";\n  hourlyModeButton.classList.add(\"forecast-mode-btn\");\n  hourlyModeButton.addEventListener(\"click\", () => {\n    (0,_State__WEBPACK_IMPORTED_MODULE_0__.setForecastMode)(_uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.HOURLY_MODE);\n  });\n\n  if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.DAILY_MODE) {\n    dailyModeButton.classList.add(\"active\");\n    hourlyModeButton.classList.remove(\"active\");\n  } else if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.HOURLY_MODE) {\n    dailyModeButton.classList.remove(\"active\");\n    hourlyModeButton.classList.add(\"active\");\n  }\n  modeChangerDiv.appendChild(dailyModeButton);\n  modeChangerDiv.appendChild(hourlyModeButton);\n\n  if ((0,_State__WEBPACK_IMPORTED_MODULE_0__.getForecastMode)() === _uitilty_ForecastModes__WEBPACK_IMPORTED_MODULE_1__.HOURLY_MODE) {\n    const checkedText = \"radio_button_checked\";\n    const unCheckedText = \"circle\";\n    const currentPg = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getHourlyPageNo)();\n    const hourlyForecastNavDiv = document.createElement(\"div\");\n    hourlyForecastNavDiv.classList.add(\"daily-forecast-nav\");\n\n    const leftArrowSpan = document.createElement(\"span\");\n    leftArrowSpan.classList.add(\"material-icons\");\n    leftArrowSpan.textContent = \"chevron_left\";\n    leftArrowSpan.addEventListener(\"click\", () => {\n      (0,_State__WEBPACK_IMPORTED_MODULE_0__.setHourlyPageNo)(currentPg - 1);\n    });\n\n    const firstPageSpan = document.createElement(\"span\");\n    firstPageSpan.classList.add(\"material-icons-outlined\", \"md-12\");\n    firstPageSpan.textContent = currentPg === 1 ? checkedText : unCheckedText;\n\n    const secondPageSpan = document.createElement(\"span\");\n    secondPageSpan.classList.add(\"material-icons-outlined\", \"md-12\");\n    secondPageSpan.textContent = currentPg === 2 ? checkedText : unCheckedText;\n\n    const thirdPageSpan = document.createElement(\"span\");\n    thirdPageSpan.classList.add(\"material-icons-outlined\", \"md-12\");\n    thirdPageSpan.textContent = currentPg === 3 ? checkedText : unCheckedText;\n\n    const rightArrowSpan = document.createElement(\"span\");\n    rightArrowSpan.classList.add(\"material-icons\");\n    rightArrowSpan.textContent = \"chevron_right\";\n    rightArrowSpan.addEventListener(\"click\", () => {\n      (0,_State__WEBPACK_IMPORTED_MODULE_0__.setHourlyPageNo)(currentPg + 1);\n    });\n\n    hourlyForecastNavDiv.appendChild(leftArrowSpan);\n    hourlyForecastNavDiv.appendChild(firstPageSpan);\n    hourlyForecastNavDiv.appendChild(secondPageSpan);\n    hourlyForecastNavDiv.appendChild(thirdPageSpan);\n    hourlyForecastNavDiv.appendChild(rightArrowSpan);\n    modeChangerDiv.appendChild(hourlyForecastNavDiv);\n  }\n  return modeChangerDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForecastModeSwitcher);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/ForecastModeSwitcher.js?");

/***/ }),

/***/ "./src/structure/components/HourlyForecast.js":
/*!****************************************************!*\
  !*** ./src/structure/components/HourlyForecast.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../State */ \"./src/State.js\");\n\n\nconst HourlyForecast = () => {\n  const { hourlyForecast } = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();\n  const hourlyForecastDiv = document.createElement(\"div\");\n  hourlyForecastDiv.classList.add(\"hourly-forecast-container\");\n\n  const createHourlyDiv = (time, temp, iconId) => {\n    const hourlyDiv = document.createElement(\"div\");\n    hourlyDiv.classList.add(\"hourly-forecastInfo\");\n    hourlyDiv.innerHTML = `<h4>${time}</h4>\n                           <span style=\"font-size: 28px; font-weight: bolder\">${temp}</span>\n                           <br />\n                           <i class=\"wi wi-owm-${iconId}\" style=\"font-size: 48px\"></i>`;\n    return hourlyDiv;\n  };\n  if (hourlyForecast !== undefined) {\n    const currentpage = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getHourlyPageNo)();\n    const currentPageData = [];\n    let lowerLimit;\n    let upperLimit;\n    switch (currentpage) {\n      case 1: {\n        lowerLimit = 0;\n        upperLimit = 7;\n        break;\n      }\n      case 2: {\n        lowerLimit = 8;\n        upperLimit = 15;\n        break;\n      }\n      case 3: {\n        lowerLimit = 16;\n        upperLimit = 23;\n        break;\n      }\n\n      default:\n        break;\n    }\n    hourlyForecast.forEach((item, idx) => {\n      if (idx >= lowerLimit && idx <= upperLimit) {\n        currentPageData.push(item);\n      }\n    });\n    currentPageData.forEach((item) => {\n      const tempDiv = createHourlyDiv(\n        item.time,\n        item.temperature,\n        item.weatherIconId\n      );\n      hourlyForecastDiv.appendChild(tempDiv);\n    });\n  } else {\n    for (let i = 0; i < 8; i += 1) {\n      const tempDiv = createHourlyDiv(\"9am\", \"TODO\", \"800\");\n      hourlyForecastDiv.appendChild(tempDiv);\n    }\n  }\n  return hourlyForecastDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HourlyForecast);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/HourlyForecast.js?");

/***/ }),

/***/ "./src/structure/components/TypeInfoContainer.js":
/*!*******************************************************!*\
  !*** ./src/structure/components/TypeInfoContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../State */ \"./src/State.js\");\n\n\nconst TypeInfoContainer = () => {\n  const { feelsLike, humidity, visibility, windSpeed } = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();\n  const InfoContainerDiv = document.createElement(\"div\");\n  InfoContainerDiv.classList.add(\"type-info-container\");\n\n  const InfoDivGenerator = (type, desc, val) => {\n    const typeInfoDiv = document.createElement(\"div\");\n    typeInfoDiv.classList.add(\"type-info\");\n    typeInfoDiv.innerHTML = `<div>\n                            ${\n                              type === \"visibility\"\n                                ? `<span class=\"material-icons md-32\"> visibility </span>`\n                                : `<span class=\"wi wi-${type} md-32\"></span>`\n                            }\n                            </div>\n                            <div>\n                              <b>${desc}</b>\n                              <br />\n                              <b style=\"font-size: x-large\">${val}</b>\n                            </div>`;\n    return typeInfoDiv;\n  };\n\n  const FeelsLikeInfo = InfoDivGenerator(\n    \"thermometer\",\n    \"Feels Like\",\n    feelsLike\n  );\n  const humidityInfo = InfoDivGenerator(\"humidity\", \"Humidity\", humidity);\n  const visibilityInfo = InfoDivGenerator(\n    \"visibility\",\n    \"Visibility\",\n    visibility\n  );\n  const windSpeedInfo = InfoDivGenerator(\n    \"strong-wind\",\n    \"Wind Speed\",\n    windSpeed\n  );\n\n  InfoContainerDiv.appendChild(FeelsLikeInfo);\n  InfoContainerDiv.appendChild(humidityInfo);\n  InfoContainerDiv.appendChild(visibilityInfo);\n  InfoContainerDiv.appendChild(windSpeedInfo);\n  return InfoContainerDiv;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeInfoContainer);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/TypeInfoContainer.js?");

/***/ }),

/***/ "./src/structure/components/WeatherStats.js":
/*!**************************************************!*\
  !*** ./src/structure/components/WeatherStats.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../State */ \"./src/State.js\");\n\n\n// eslint-disable-next-line no-lone-blocks\n{\n  /* <div class=\"weather-stats-container\">\n  <span id=\"weather-type\">Broken Clouds</span>\n  <div id=\"location-div\">\n    <span class=\"material-icons-outlined\"> place </span>\n    <span style=\"font-size: 18px\">Chandigarh</span>\n  </div>\n  <span id=\"current-time\">Thursday, 4th Nov '21 10:44 pm</span>\n  <span id=\"current-temp\">15 °C</span>\n  <i class=\"wi wi-night-sleet md-48\"></i>\n</div>; */\n}\nconst WeatherStats = () => {\n  const {\n    type,\n    location,\n    currentTime,\n    currentTemperature,\n    currentWeatherIconId,\n  } = (0,_State__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();\n  const statsDiv = document.createElement(\"div\");\n  statsDiv.classList.add(\"weather-stats-container\");\n  statsDiv.innerHTML = `<span id=\"weather-type\">${type}</span>\n                        <div id=\"location-div\">\n                          <span class=\"material-icons-outlined\"> place </span>\n                          <span style=\"font-size: 18px\">${location}</span>\n                        </div>\n                        <span id=\"current-time\">${currentTime}</span>\n                        <span id=\"current-temp\">${currentTemperature}</span>\n                        <i class=\"wi wi-owm-${currentWeatherIconId} md-48\"></i>`;\n\n  return statsDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherStats);\n\n\n//# sourceURL=webpack://weather-pure/./src/structure/components/WeatherStats.js?");

/***/ }),

/***/ "./src/uitilty/AsyncDelay.js":
/*!***********************************!*\
  !*** ./src/uitilty/AsyncDelay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AsyncDelay = async (time) => {\n  await new Promise((res) => {\n    setTimeout(() => res(), time);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsyncDelay);\n\n\n//# sourceURL=webpack://weather-pure/./src/uitilty/AsyncDelay.js?");

/***/ }),

/***/ "./src/uitilty/ForecastModes.js":
/*!**************************************!*\
  !*** ./src/uitilty/ForecastModes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DAILY_MODE\": () => (/* binding */ DAILY_MODE),\n/* harmony export */   \"HOURLY_MODE\": () => (/* binding */ HOURLY_MODE)\n/* harmony export */ });\nconst DAILY_MODE = \"daily\";\nconst HOURLY_MODE = \"hourly\";\n\n\n//# sourceURL=webpack://weather-pure/./src/uitilty/ForecastModes.js?");

/***/ }),

/***/ "./src/uitilty/ReloadPage.js":
/*!***********************************!*\
  !*** ./src/uitilty/ReloadPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _structure_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structure/Header */ \"./src/structure/Header.js\");\n/* harmony import */ var _structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structure/WeatherDisplay */ \"./src/structure/WeatherDisplay.js\");\n\n\n\nconst ReloadPage = () => {\n  const contentDiv = document.getElementById(\"content\");\n  while (contentDiv.firstChild) {\n    contentDiv.removeChild(contentDiv.lastChild);\n  }\n  contentDiv.appendChild((0,_structure_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  contentDiv.appendChild((0,_structure_WeatherDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReloadPage);\n\n\n//# sourceURL=webpack://weather-pure/./src/uitilty/ReloadPage.js?");

/***/ }),

/***/ "./src/uitilty/RenderMode.js":
/*!***********************************!*\
  !*** ./src/uitilty/RenderMode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOADING\": () => (/* binding */ LOADING),\n/* harmony export */   \"DISPLAY_INFO\": () => (/* binding */ DISPLAY_INFO)\n/* harmony export */ });\nconst LOADING = \"loading\";\nconst DISPLAY_INFO = \"infoMode\";\n\n\n//# sourceURL=webpack://weather-pure/./src/uitilty/RenderMode.js?");

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