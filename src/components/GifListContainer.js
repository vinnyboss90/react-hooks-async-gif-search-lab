import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const serchGifsFromServer = (searchValue) => {
    fetch(
      `https://api.giphy.com/v1/stickers/packs/3138/children?api_key=9XMYWQaTnUtH3mDZDIdVX0lM5qAfudJZ`
    )
      .then((resp) => resp.json())
      .then((gifs) => setGifs([...gifs.data.slice(0, 3)]));
  };

  const onSubmit = (searchValue) => {
    serchGifsFromServer(searchValue);
  };

  return (
    <div>
      <GifSearch onSubmit={onSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;