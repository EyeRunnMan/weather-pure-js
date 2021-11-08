// import FetchRandomGif from "./logic/FetchRandomGif";
// import FetchWeatherInfo from "./logic/FetchWeatherInfo";

// FetchRandomGif("ThunderStrom").then((val) => {
//   console.log(val);
// });
// FetchWeatherInfo("Mumbai").then((val) => {
//   console.log(val);
// });

import FetchRandomGif from "./logic/FetchRandomGif";
import FetchWeatherInfo from "./logic/FetchWeatherInfo";
import { setGiphyImgUrl, setRenderMode, setWeatherData } from "./State";
import Header from "./structure/Header";
import WeatherDisplay from "./structure/WeatherDisplay";
import { DISPLAY_INFO, LOADING } from "./uitilty/RenderMode";

const initialData = async () => {
  const cityQuery = "chandigarh";
  setRenderMode(LOADING);
  const data = await FetchWeatherInfo(cityQuery);
  const gifUrl = await FetchRandomGif(`${data.type} weather`);
  // await AsyncDelay(2000);
  setGiphyImgUrl(gifUrl);
  setWeatherData(data);
  setRenderMode(DISPLAY_INFO);
};
initialData();

const contentDiv = document.getElementById("content");

contentDiv.appendChild(Header());
contentDiv.appendChild(WeatherDisplay());
