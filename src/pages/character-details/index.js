import React from "react";
import { SearchBar } from "../../components/searchbar-movie";
import { SearchedCharacter } from "../../components/searched-character";
export const CharacterDetails = () => {
  return (
    <>
      {" "}
      <SearchBar />
      <SearchedCharacter />
    </>
  );
};
