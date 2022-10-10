import React, { useEffect, useState } from "react";
import useFetch from "../../api/use-fetch";
import { LoadingSpinner } from "../loading-spinner";
export const CharactersPerFilms = (idFilm) => {

  const id = idFilm.idFilm;
  const [apiUrl, setApiUrl] = useState(`https://swapi.dev/api/films/${id}`);
  const [data, loading, error] = useFetch(apiUrl);
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

  if (loading) return <LoadingSpinner />;
  if (error)
    <div class="alert alert-danger" role="alert">
      {error}
    </div>;
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
