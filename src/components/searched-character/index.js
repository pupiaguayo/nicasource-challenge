import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../api/use-fetch";
import { DataSearchedCharacters } from "./data-searched-characters";
export const SearchedCharacter = () => {
  let { characterName } = useParams();
  const [apiUrl, setApiUrl] = useState(
    `https://swapi.dev/api/people?search=${characterName}`
  );
  const [data, loading, error] = useFetch(apiUrl);

  useEffect(() => {
    setApiUrl(`https://swapi.dev/api/people?search=${characterName}`);
  }, [characterName]);

  return data?.count === 0 ? (
    <>
      <h1>Character not found, trying with another name</h1>
    </>
  ) : (
    <DataSearchedCharacters />
  );
};
