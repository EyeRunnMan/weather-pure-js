const WeatherDisplay = () => {
  const mainTag = document.createElement("main");

  const displayDiv = document.createElement("div");
  displayDiv.classList.add("weather-display");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("weather-info");
  // append stats container
  // append type info container

  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("weather-forecast");
  // append mode changer
  // append hourly or daily forecast

  return mainTag;
};

export default WeatherDisplay;
