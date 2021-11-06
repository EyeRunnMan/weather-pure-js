// import FetchRandomGif from "./logic/FetchRandomGif";
// import FetchWeatherInfo from "./logic/FetchWeatherInfo";

// FetchRandomGif("ThunderStrom").then((val) => {
//   console.log(val);
// });
// FetchWeatherInfo("Mumbai").then((val) => {
//   console.log(val);
// });

import Header from "./structure/Header";

const contentDiv = document.getElementById("content");

contentDiv.appendChild(Header());
