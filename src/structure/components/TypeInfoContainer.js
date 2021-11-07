import { getWeatherData } from "../../State";

const TypeInfoContainer = () => {
  const { feelsLike, humidity, visibility, windSpeed } = getWeatherData();
  const InfoContainerDiv = document.createElement("div");
  InfoContainerDiv.classList.add("type-info-container");

  const InfoDivGenerator = (type, desc, val) => {
    const typeInfoDiv = document.createElement("div");
    typeInfoDiv.classList.add("type-info");
    typeInfoDiv.innerHTML = `<div>
                            ${
                              type === "visibility"
                                ? `<span class="material-icons md-32"> visibility </span>`
                                : `<span class="wi wi-${type} md-32"></span>`
                            }
                            </div>
                            <div>
                              <b>${desc}</b>
                              <br />
                              <b style="font-size: x-large">${val}</b>
                            </div>`;
    return typeInfoDiv;
  };

  const FeelsLikeInfo = InfoDivGenerator(
    "thermometer",
    "Feels Like",
    feelsLike
  );
  const humidityInfo = InfoDivGenerator("humidity", "Humidity", humidity);
  const visibilityInfo = InfoDivGenerator(
    "visibility",
    "Visibility",
    visibility
  );
  const windSpeedInfo = InfoDivGenerator(
    "strong-wind",
    "Wind Speed",
    windSpeed
  );

  InfoContainerDiv.appendChild(FeelsLikeInfo);
  InfoContainerDiv.appendChild(humidityInfo);
  InfoContainerDiv.appendChild(visibilityInfo);
  InfoContainerDiv.appendChild(windSpeedInfo);
  return InfoContainerDiv;
};
export default TypeInfoContainer;
