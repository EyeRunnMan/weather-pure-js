import Header from "./structure/Header";
import WeatherDisplay from "./structure/WeatherDisplay";
import { DAILY_MODE } from "./uitilty/ForecastModes";

const ReloadPage = () => {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  contentDiv.appendChild(Header());
  contentDiv.appendChild(WeatherDisplay());
};

// eslint-disable-next-line no-underscore-dangle
let _weatherData = {};

const getWeatherData = () => _weatherData;
const setWeatherData = (data) => {
  _weatherData = data;
  ReloadPage();
};

// eslint-disable-next-line no-underscore-dangle
let _gihpyImgUrl = "";
const getGiphyImgUrl = () => _gihpyImgUrl;
const setGiphyImgUrl = (url) => {
  _gihpyImgUrl = url;
  ReloadPage();
};

// eslint-disable-next-line no-underscore-dangle
let _forecastMode = DAILY_MODE;
const getForecastMode = () => _forecastMode;
const setForecastMode = (mode) => {
  console.log(mode);
  _forecastMode = mode;
  ReloadPage();
};

export {
  getWeatherData,
  setWeatherData,
  getGiphyImgUrl,
  setGiphyImgUrl,
  getForecastMode,
  setForecastMode,
};
