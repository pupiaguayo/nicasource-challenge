import React, { useEffect, useState } from "react";
import useFetch from "../../api/use-fetch";
export const CharactersPerFilms = () => {
    const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/films/1");
    const [data, loading] = useFetch(apiUrl);
  const [film, setFilm] = useState();
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="container">
        <ul>
          {/* {data &&
            data.characters.map((character, index) => {
              setCharactersUrls(character);
            })} */}
        </ul>
      </div>
    </>
  );
};
