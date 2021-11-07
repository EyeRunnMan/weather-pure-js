import { DAILY_MODE } from "./uitilty/ForecastModes";
import ReloadPage from "./uitilty/ReloadPage";

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
  _forecastMode = mode;
  ReloadPage();
};

// eslint-disable-next-line no-underscore-dangle
let _hourlyNavPageNo = 1;
const getHourlyPageNo = () => _hourlyNavPageNo;
const setHourlyPageNo = (n) => {
  if (n <= 3 && n >= 1) {
    _hourlyNavPageNo = n;
    ReloadPage();
  }
};

export {
  getWeatherData,
  setWeatherData,
  getGiphyImgUrl,
  setGiphyImgUrl,
  getForecastMode,
  setForecastMode,
  getHourlyPageNo,
  setHourlyPageNo,
};
