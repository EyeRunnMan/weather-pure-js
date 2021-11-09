import { getWeatherData } from "../../State";
import { getDayString } from "../../uitilty/daysOfWeek";

const DailyForecast = () => {
  const { dailyForecast } = getWeatherData();
  const dailyForecastContainerDiv = document.createElement("div");
  dailyForecastContainerDiv.classList.add("daily-forecast-container");
  const createDailyDiv = (day, temp, iconId) => {
    const dailyDiv = document.createElement("div");
    dailyDiv.classList.add("daily-forecastInfo");
    dailyDiv.innerHTML = `<h4>${day}</h4>
                          <span style="font-size: 28px; font-weight: bolder">${temp}</span>
                          <br />
                          <i class="wi wi-owm-${iconId}" style="font-size: 48px"></i>`;
    return dailyDiv;
  };
  if (dailyForecast !== undefined) {
    dailyForecast.forEach((data) => {
      const tempDaily = createDailyDiv(
        getDayString(data.day),
        data.temperature,
        data.weatherIconId
      );
      dailyForecastContainerDiv.appendChild(tempDaily);
    });
  } else {
    for (let i = 0; i < 7; i += 1) {
      const tempDaily = createDailyDiv("TODO", "TODO", "800");
      dailyForecastContainerDiv.appendChild(tempDaily);
    }
  }
  return dailyForecastContainerDiv;
};

export default DailyForecast;
