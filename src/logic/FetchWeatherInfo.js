import { WEATHER_API } from "../../config";

const FetchWeatherInfo = async (cityname) => {
  const apiUrlByCityName = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${WEATHER_API}`;
  const response = await fetch(apiUrlByCityName);
  const status = await response.status;
  if (status !== 200) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  const { coord } = data;

  const apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&appid=${WEATHER_API}`;
  const responseForecast = await fetch(apiUrlForecast);

  const { hourly, daily } = await responseForecast.json();
  const hourlyForecast = [];
  hourly.forEach((item, idx) => {
    const { weather, temp, dt } = item;
    const tmpObj = {
      temperature: `${parseInt(temp - 273.15)} °C`,
      weatherIconId: weather[0].id,
      time: "TODO",
    };
    if (idx < 24) {
      hourlyForecast.push(tmpObj);
    }
  });
  const dailyForecast = [];
  daily.forEach((item) => {
    const { dt, weather, temp } = item;
    const tmpObj = {
      // (5/9) * (F - 32)
      temperature: `${parseInt(temp.day - 273.15)} °C`,
      weatherIconId: weather[0].id,
      day: "TODO",
    };
    dailyForecast.push(tmpObj);
  });
  const usefulData = {
    type: data.weather[0].description,
    location: data.name,
    currentTime: new Date().toUTCString(),
    currentTemperature: `${parseInt(data.main.temp - 273.15)} °C`,
    currentWeatherIconId: data.weather[0].id,
    feelsLike: `${parseInt(data.main.feels_like - 273.15)} °C`,
    humidity: `${data.main.humidity} %`,
    visibility: `${data.visibility} mtr`,
    windSpeed: `${data.wind.speed} km/h`,
    hourlyForecast,
    dailyForecast,
  };
  return new Promise((res) => {
    res(usefulData);
  });
};

export default FetchWeatherInfo;
