import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../api/use-fetch";
import "../../../styles/data-searched-characters/index.css";
import Moment from "react-moment";
export const DataSearchedCharacters = () => {
  let { characterName } = useParams();
  const [apiUrl, setApiUrl] = useState(
    `https://swapi.dev/api/people?search=${characterName}`
  );
  const [dataHomeworld, setDataHomeworld] = useState("");
  const [dataMovies, setDataMovies] = useState([]);
  const [data] = useFetch(apiUrl);

  const dataPlanet = async (x) => {
    const response = await fetch(x);
    const datxa = await response.json();
    setDataHomeworld(datxa?.name);
  };
  useEffect(() => {
    setApiUrl(`https://swapi.dev/api/people?search=${characterName}`);
    const dataFilms = async (x) => {
      const res = await Promise.all(x?.map((u) => fetch(u)));
      const jsons = await Promise.all(res.map((r) => r.json()));
      setDataMovies(jsons);
    };
    data?.results.map((character, index) => {
      return dataFilms(character?.films);
    });
  }, [characterName, data?.results]);
  return (
    <div className="data-character-container">
      {data &&
        data?.results.map((character, index) => {
          dataPlanet(character?.homeworld);
          return (
            <div key={index}>
              <p>
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href={"#colla" + index}
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {character.name} &#8595;
                </a>
              </p>
              <div className="collapse more-info" id={"colla" + index}>
                <div>
                  <p>
                    <span className="title">Name:</span> {character.name}
                  </p>
                  <p>
                    <span className="title">Planet:</span> {dataHomeworld}
                  </p>
                  <p>
                    <span className="title">Birth Year:</span> {character.birth_year}
                  </p>
                  <p className="movies">
                    <span className="title"> Movies where appears:</span>{" "}
                    {dataMovies?.map((m, index) => {
                      return <span key={index} className="title-movie">{m.title}</span>;
                    })}
                  </p>
                  <p>
                    <span className="title">Last edited info:</span>{" "}
                    <Moment format="YYYY-MM-DD HH:mm">
                      {character.edited}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
