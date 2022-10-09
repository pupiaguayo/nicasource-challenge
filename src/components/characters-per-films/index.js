import React, { useEffect, useState } from "react";
import useFetch from "../../api/use-fetch";
export const CharactersPerFilms = (idFilm) => {

  const id = idFilm.idFilm;
  const [apiUrl, setApiUrl] = useState(`https://swapi.dev/api/films/${id}`);
  const [data, loading] = useFetch(apiUrl);
  const [arrayUrls, setArrayUrls] = useState();
  
  useEffect(() => {
    const fetchAll = async (urls) => {
      const res = await Promise.all(urls?.map((u) => fetch(u)));
      const jsons = await Promise.all(res.map((r) => r.json()));
      setArrayUrls(jsons);
    };
    setApiUrl(`https://swapi.dev/api/films/${id}`);
    fetchAll(data?.characters);
  }, [data?.characters, id]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="characters-list-container">
        <ul>
          {arrayUrls &&
            arrayUrls?.map((character, index) => {
              return <li key={index}>{character.name}</li>;
            })}
        </ul>
      </div>
    </>
  );
};
