import { getHourlyPageNo, getWeatherData } from "../../State";

const HourlyForecast = () => {
  const { hourlyForecast } = getWeatherData();
  const hourlyForecastDiv = document.createElement("div");
  hourlyForecastDiv.classList.add("hourly-forecast-container");

  const createHourlyDiv = (time, temp, iconId) => {
    const hourlyDiv = document.createElement("div");
    hourlyDiv.classList.add("hourly-forecastInfo");
    hourlyDiv.innerHTML = `<h4>${time}</h4>
                           <span style="font-size: 28px; font-weight: bolder">${temp}</span>
                           <br />
                           <i class="wi wi-owm-${iconId}" style="font-size: 48px"></i>`;
    return hourlyDiv;
  };
  if (hourlyForecast !== undefined) {
    const currentpage = getHourlyPageNo();
    const currentPageData = [];
    let lowerLimit;
    let upperLimit;
    switch (currentpage) {
      case 1: {
        lowerLimit = 0;
        upperLimit = 7;
        break;
      }
      case 2: {
        lowerLimit = 8;
        upperLimit = 15;
        break;
      }
      case 3: {
        lowerLimit = 16;
        upperLimit = 23;
        break;
      }

      default:
        break;
    }
    hourlyForecast.forEach((item, idx) => {
      if (idx >= lowerLimit && idx <= upperLimit) {
        currentPageData.push(item);
      }
    });
    currentPageData.forEach((item) => {
      const tempDiv = createHourlyDiv(
        item.time,
        item.temperature,
        item.weatherIconId
      );
      hourlyForecastDiv.appendChild(tempDiv);
    });
  } else {
    for (let i = 0; i < 8; i += 1) {
      const tempDiv = createHourlyDiv("9am", "TODO", "800");
      hourlyForecastDiv.appendChild(tempDiv);
    }
  }
  return hourlyForecastDiv;
};

export default HourlyForecast;
