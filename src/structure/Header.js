import FetchWeatherInfo from "../logic/FetchWeatherInfo";
import FetchRandomGif from "../logic/FetchRandomGif";

import { setGiphyImgUrl, setWeatherData } from "../State";
import AsyncDelay from "../uitilty/AsyncDelay";

const Header = () => {
  let cityQuery = "";

  const headerTag = document.createElement("header");

  const LogoDiv = document.createElement("div");
  const logo = document.createElement("h1");
  logo.textContent = "The Weather";
  LogoDiv.appendChild(logo);

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");
  const inputFieldDiv = document.createElement("div");
  const cityInputField = document.createElement("input");
  cityInputField.type = "text";
  cityInputField.placeholder = "Enter a City";
  cityInputField.addEventListener("change", async (e) => {
    cityQuery = e.target.value;
    const data = await FetchWeatherInfo(cityQuery);
    const gifUrl = await FetchRandomGif(`${data.type} weather`);
    // await AsyncDelay(2000);
    setGiphyImgUrl(gifUrl);
    console.log(gifUrl);
    setWeatherData(data);
  });
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("material-icons");
  searchIcon.textContent = "search";

  inputFieldDiv.appendChild(cityInputField);
  inputFieldDiv.appendChild(searchIcon);
  inputDiv.appendChild(inputFieldDiv);
  headerTag.appendChild(LogoDiv);
  headerTag.appendChild(inputDiv);

  return headerTag;
};

export default Header;
