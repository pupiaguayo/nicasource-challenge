import React from "react";
import { Header } from "../../components/header";
import { SearchBar } from "../../components/searchbar-movie";
import { CharactersFilter } from  "../../components/characters-filter";
import { CharacterList } from "../../components/characters-list";
import { CharactersPerFilms } from "../../components/characters-per-films";
export const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <CharactersFilter />
      <CharacterList/>
      <CharactersPerFilms/>
    </>
  );
};
