import { getForecastMode, getGiphyImgUrl } from "../State";
import { DAILY_MODE, HOURLY_MODE } from "../uitilty/ForecastModes";
import DailyForecast from "./components/DailyForecast";
import ForecastModeSwitcher from "./components/ForecastModeSwitcher";
import HourlyForecast from "./components/HourlyForecast";
import TypeInfoContainer from "./components/TypeInfoContainer";
import WeatherStats from "./components/WeatherStats";

const WeatherDisplay = () => {
  const gifUrl = getGiphyImgUrl();

  const mainTag = document.createElement("main");
  mainTag.style.backgroundImage = `url(${`${gifUrl}`})`;
  const displayDiv = document.createElement("div");
  displayDiv.classList.add("weather-display");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("weather-info");

  infoDiv.appendChild(WeatherStats());
  infoDiv.appendChild(TypeInfoContainer());

  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("weather-forecast");
  forecastDiv.appendChild(ForecastModeSwitcher());
  if (getForecastMode() === DAILY_MODE) {
    forecastDiv.appendChild(DailyForecast());
  } else if (getForecastMode() === HOURLY_MODE) {
    forecastDiv.appendChild(HourlyForecast());
  }
  // append hourly or daily forecast

  mainTag.appendChild(displayDiv);
  displayDiv.appendChild(infoDiv);
  displayDiv.appendChild(forecastDiv);
  return mainTag;
};

export default WeatherDisplay;
