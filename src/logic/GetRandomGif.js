import { GIPHY_API } from "../../config";

const GetRandomGif = async (searchQuery) => {
  const apiUrlSearch = `https://api.giphy.com/v1/gifs/random?tag=${searchQuery}&api_key=${GIPHY_API}`;
  const response = await fetch(apiUrlSearch);
  const gifObjs = await response.json();
  const randomGifObj = gifObjs.data;

  const { images } = randomGifObj;
  console.log(images.downsized.url);
};

export default GetRandomGif;
