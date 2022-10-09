import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "../../components/searchbar-movie";
import useFetch from "../../api/use-fetch";
export const CharacterDetails = () => {
  let { characterName } = useParams();
  const [apiUrl, setApiUrl] = useState(
    `https://swapi.dev/api/people?search=${characterName}`
  );
  const [data] = useFetch(apiUrl);
  return <SearchBar />;
};
