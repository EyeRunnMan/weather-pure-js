import ForecastModeSwitcher from "./components/ForecastModeSwitcher";
import TypeInfoContainer from "./components/TypeInfoContainer";
import WeatherStats from "./components/WeatherStats";

const WeatherDisplay = () => {
  const mainTag = document.createElement("main");

  const displayDiv = document.createElement("div");
  displayDiv.classList.add("weather-display");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("weather-info");

  infoDiv.appendChild(WeatherStats());
  infoDiv.appendChild(TypeInfoContainer());

  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("weather-forecast");
  forecastDiv.appendChild(ForecastModeSwitcher());
  // append mode changer
  // append hourly or daily forecast

  mainTag.appendChild(displayDiv);
  displayDiv.appendChild(infoDiv);
  displayDiv.appendChild(forecastDiv);
  return mainTag;
};

export default WeatherDisplay;
