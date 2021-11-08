import FetchWeatherInfo from "../logic/FetchWeatherInfo";
import FetchRandomGif from "../logic/FetchRandomGif";

import { setGiphyImgUrl, setRenderMode, setWeatherData } from "../State";
import AsyncDelay from "../uitilty/AsyncDelay";
import { DISPLAY_INFO, LOADING } from "../uitilty/RenderMode";

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
    try {
      cityQuery = e.target.value;
      setRenderMode(LOADING);
      const data = await FetchWeatherInfo(cityQuery);
      const gifUrl = await FetchRandomGif(`${data.type} weather`);
      // await AsyncDelay(2000);
      setGiphyImgUrl(gifUrl);
      setWeatherData(data);
      setRenderMode(DISPLAY_INFO);
    } catch (error) {
      alert(error);
    }
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
