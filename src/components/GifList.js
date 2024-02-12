import React from "react";

const GifList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map((gif, index) => (
        <li key={index}>
          <img src={gif.images.original.url} alt="gifs" />
        </li>
      ))}
    </ul>
  );
};

export default GifList;