import React, { useState } from "react";
import { SearchBar } from "../../components/searchbar-movie";
import { CharactersFilter } from "../../components/characters-filter";
import { CharacterList } from "../../components/characters-list";
export const Home = () => {
  const [idFilm, setIdFilm] = useState(0);

  const getData = (data) => {
    setIdFilm(data);
  };
  return (
    <>
      <SearchBar />
      <CharactersFilter data={getData} />
      <CharacterList idFilm={idFilm} />
    </>
  );
};
