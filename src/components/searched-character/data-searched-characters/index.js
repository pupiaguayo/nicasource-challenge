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
  const [data, loading, error] = useFetch(apiUrl);

  useEffect(() => {
    setApiUrl(`https://swapi.dev/api/people?search=${characterName}`);
  }, [characterName]);
  return (
    <div className="data-character-container">
      {data &&
        data?.results.map((character, index) => {
          return (
            <>
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href={"#colla" + index}
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {character.name} &#8595;
                </a>
              </p>
              <div class="collapse" id={"colla" + index}>
                <div>
                  <p>{character.name}</p>
                    <p>{character.homeworld}</p>
                  <p>{character.birth_year}</p>
                  <p>{character.films}</p>
                  <p>
                    <Moment format="YYYY-MM-DD HH:mm">
                      {character.edited}
                    </Moment>
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
