// eslint-disable-next-line no-underscore-dangle
let _weatherData = {};

const getWeatherData = () => _weatherData;
const setWeatherData = (data) => {
  _weatherData = data;
};

// eslint-disable-next-line no-underscore-dangle
let _gihpyImgUrl = "";
const getGiphyImgUrl = () => _gihpyImgUrl;
const setGiphyImgUrl = (url) => {
  _gihpyImgUrl = url;
};
export { getWeatherData, setWeatherData, getGiphyImgUrl, setGiphyImgUrl };
