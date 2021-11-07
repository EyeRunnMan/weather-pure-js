import {
  getForecastMode,
  getHourlyPageNo,
  setForecastMode,
  setHourlyPageNo,
} from "../../State";
import { DAILY_MODE, HOURLY_MODE } from "../../uitilty/ForecastModes";

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="weather-forcast-mode-container">

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
    const checkedText = "radio_button_checked";
    const unCheckedText = "circle";
    const currentPg = getHourlyPageNo();
    const hourlyForecastNavDiv = document.createElement("div");
    hourlyForecastNavDiv.classList.add("daily-forecast-nav");

    const leftArrowSpan = document.createElement("span");
    leftArrowSpan.classList.add("material-icons");
    leftArrowSpan.textContent = "chevron_left";
    leftArrowSpan.addEventListener("click", () => {
      setHourlyPageNo(currentPg - 1);
    });

    const firstPageSpan = document.createElement("span");
    firstPageSpan.classList.add("material-icons-outlined", "md-12");
    firstPageSpan.textContent = currentPg === 1 ? checkedText : unCheckedText;

    const secondPageSpan = document.createElement("span");
    secondPageSpan.classList.add("material-icons-outlined", "md-12");
    secondPageSpan.textContent = currentPg === 2 ? checkedText : unCheckedText;

    const thirdPageSpan = document.createElement("span");
    thirdPageSpan.classList.add("material-icons-outlined", "md-12");
    thirdPageSpan.textContent = currentPg === 3 ? checkedText : unCheckedText;

    const rightArrowSpan = document.createElement("span");
    rightArrowSpan.classList.add("material-icons");
    rightArrowSpan.textContent = "chevron_right";
    rightArrowSpan.addEventListener("click", () => {
      setHourlyPageNo(currentPg + 1);
    });

    hourlyForecastNavDiv.appendChild(leftArrowSpan);
    hourlyForecastNavDiv.appendChild(firstPageSpan);
    hourlyForecastNavDiv.appendChild(secondPageSpan);
    hourlyForecastNavDiv.appendChild(thirdPageSpan);
    hourlyForecastNavDiv.appendChild(rightArrowSpan);
    modeChangerDiv.appendChild(hourlyForecastNavDiv);
  }
  return modeChangerDiv;
};

export default ForecastModeSwitcher;
