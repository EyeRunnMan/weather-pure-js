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
  setGiphyImgUrl(gifUrl);
  setWeatherData(data);
  setRenderMode(DISPLAY_INFO);
};
initialData();
