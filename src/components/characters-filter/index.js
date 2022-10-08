import React, { useState } from "react";
import useFetch from "../../api/use-fetch";
import "../../styles/characters-filter/index.css";
export const CharactersFilter = () => {
  const [film, setFilm] = useState();
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/films");
  const [data] = useFetch(apiUrl);
  return (
    <div className="dropdown">
      <select
        className="dropdown-select"
        value={film}
        onChange={(e) => setFilm(e.target.value)}
      >
        <option value="0">See All</option>
        {data &&
          data.results.map((film, episode_id) => {
            return (
              <option key={episode_id} value={film.episode_id}>
                {film.title}
              </option>
            );
          })}
      </select>
    </div>
  );
};
