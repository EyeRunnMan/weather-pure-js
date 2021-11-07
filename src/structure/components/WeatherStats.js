import { getWeatherData } from "../../State";

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="weather-stats-container">
  <span id="weather-type">Broken Clouds</span>
  <div id="location-div">
    <span class="material-icons-outlined"> place </span>
    <span style="font-size: 18px">Chandigarh</span>
  </div>
  <span id="current-time">Thursday, 4th Nov '21 10:44 pm</span>
  <span id="current-temp">15 °C</span>
  <i class="wi wi-night-sleet md-48"></i>
</div>; */
}
const WeatherStats = () => {
  const {
    type,
    location,
    currentTime,
    currentTemperature,
    currentWeatherIconId,
  } = getWeatherData();
  const statsDiv = document.createElement("div");
  statsDiv.classList.add("weather-stats-container");
  statsDiv.innerHTML = `<span id="weather-type">${type}</span>
                        <div id="location-div">
                          <span class="material-icons-outlined"> place </span>
                          <span style="font-size: 18px">${location}</span>
                        </div>
                        <span id="current-time">${currentTime}</span>
                        <span id="current-temp">${currentTemperature}</span>
                        <i class="wi wi-owm-${currentWeatherIconId} md-48"></i>`;

  return statsDiv;
};

export default WeatherStats;
