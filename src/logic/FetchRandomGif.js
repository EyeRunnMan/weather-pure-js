import { GIPHY_API } from "../../config";

const FetchRandomGif = async (searchQuery) => {
  const apiUrlSearch = `https://api.giphy.com/v1/gifs/random?tag=${encodeURI(
    searchQuery
  )}&api_key=${GIPHY_API}`;
  const response = await fetch(apiUrlSearch);
  const gifObjs = await response.json();
  const randomGifObj = gifObjs.data;

  const { images } = randomGifObj;
  return new Promise((res) => {
    res(images.downsized.url);
  });
};

export default FetchRandomGif;
