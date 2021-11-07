import Header from "../structure/Header";
import WeatherDisplay from "../structure/WeatherDisplay";

const ReloadPage = () => {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  contentDiv.appendChild(Header());
  contentDiv.appendChild(WeatherDisplay());
};

export default ReloadPage;
