import React, { useState, useEffect } from "react";
import "../../styles/characters-list/index.css";
import useFetch from "../../api/use-fetch";
import ReactPaginate from "react-paginate";
import { CharactersPerFilms } from "../characters-per-films";
export const CharacterList = (idFilm) => {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/people?page=1");
  const [data, loading] = useFetch(apiUrl);
  const id = idFilm.idFilm;
  // Function React Paginate
  const page = 10;
  const handlePageClick = ({ selected: selectedPage }) => {
    setApiUrl(`https://swapi.dev/api/people?page=${selectedPage + 1}`);
  };
  const pageCount = Math.ceil(82 / page);
  if (loading) return <h1>Loading...</h1>;

  return id > 0 ? (
    <>
      <CharactersPerFilms idFilm={id} />
    </>
  ) : (
    <>
      <div className="characters-list-container">
        <ul>
          {data &&
            data.results.map((character, index) => {
              return <li key={index}>{character.name}</li>;
            })}
        </ul>
      </div>
      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"paginationBack"}
        nextLinkClassName={"paginationNext"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};
