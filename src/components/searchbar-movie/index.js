import React, { useState } from "react";
import "../../styles/searchbar-movie/index.css";
import { useNavigate } from "react-router-dom";
export const SearchBar = () => {
  let navigate = useNavigate();
  const [characterName, setCharacterName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/character/${characterName}`);
    setCharacterName("");
  };
  return (
    <div className="container-search-bar">
      {" "}
      <form class="form-inline" onSubmit={handleSubmit}>
        <input
          class="form-control mr-sm-2"
          id="first_name"
          name="first_name"
          type="text"
          onChange={(event) => setCharacterName(event.target.value)}
          value={characterName}
          placeholder="Search character per name"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
