import React, { useState } from "react";

const GifSearch = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Enter Search Term</label>
        <input
          type="search"
          id="search"
          value={searchValue}
          onChange={handleValueChange}
        />
        <input type="submit" value="Find Gifs" />
      </form>
    </div>
  );
};

export default GifSearch;