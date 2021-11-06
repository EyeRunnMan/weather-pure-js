import { getForecastMode, setForecastMode } from "../../State";
import { DAILY_MODE, HOURLY_MODE } from "../../uitilty/ForecastModes";

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="weather-forcast-mode-container">
  <button class="forecast-mode-btn">Daily</button>
  <button class="forecast-mode-btn active">Hourly</button>
  <div class="daily-forecast-nav">
    <span class="material-icons"> chevron_left </span>
    <span class="material-icons-outlined md-12"> circle </span>
    <span class="material-icons-outlined md-12">radio_button_checked</span>
    <span class="material-icons-outlined md-12"> circle </span>
    <span class="material-icons"> chevron_right </span>
  </div>
</div>; */
}

const ForecastModeSwitcher = () => {
  const modeChangerDiv = document.createElement("div");
  modeChangerDiv.classList.add("weather-forcast-mode-container");

  const dailyModeButton = document.createElement("button");
  dailyModeButton.textContent = "Daily";
  dailyModeButton.classList.add("forecast-mode-btn");
  dailyModeButton.addEventListener("click", () => {
    setForecastMode(DAILY_MODE);
  });

  const hourlyModeButton = document.createElement("button");
  hourlyModeButton.textContent = "Hourly";
  hourlyModeButton.classList.add("forecast-mode-btn");
  hourlyModeButton.addEventListener("click", () => {
    setForecastMode(HOURLY_MODE);
  });

  if (getForecastMode() === DAILY_MODE) {
    dailyModeButton.classList.add("active");
    hourlyModeButton.classList.remove("active");
  } else if (getForecastMode() === HOURLY_MODE) {
    dailyModeButton.classList.remove("active");
    hourlyModeButton.classList.add("active");
  }
  modeChangerDiv.appendChild(dailyModeButton);
  modeChangerDiv.appendChild(hourlyModeButton);

  if (getForecastMode() === HOURLY_MODE) {
    return modeChangerDiv;
  }
};

export default ForecastModeSwitcher;
