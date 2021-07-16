import "./searchMovies.scss";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "../common/card/Card";
import Const from "../../const/general.const.json";
const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [listMovies, setListMovies] = useState(null);
  const inputD = useRef(null);
  useEffect(() => {
    if (query) {
      const url = `${Const.api_url}search/movie?api_key=${Const.api_key}&query=${query}`;
      axios.get(url).then((res) => {
        setListMovies(res.data.results);
      });
    } else {
      const url = `${Const.api_url}movie/popular?api_key=${Const.api_key}`;
      axios.get(url).then((res) => {
        setListMovies(res.data.results);
      });
    }
  }, [query]);

  const handleKeyPress = async (event, input) => {
    if (event.key === "Enter") {
      setQuery(input.current.value);
    }
  };

  return (
    <div className="ContentSearch">
      <div className="search">
        <h3>Search</h3>
        <input
          ref={inputD}
          placeholder="Titles, genres, people..."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          onKeyPress={(evt) => handleKeyPress(evt, inputD)}
        ></input>
        <span
          className="icon icofont-ui-search"
          onClick={() => {
            setQuery(filter);
          }}
        ></span>
      </div>
      <div className="generalTitle">
        <h3>{query ? "Results" : "Most popular"}</h3>
      </div>
      <div className="ContentMovies">
        <div className="contentCards">
          {listMovies &&
            listMovies.map((movie, index) => (
              <Card key={index} movie={movie}></Card>
            ))}
        </div>
        <div>
          {!listMovies ||
            (listMovies.length === 0 && (
              <h2 className="noResults">
                we are sorry at this moment we haven't results with this
                parameter, please change your search parameter{" "}
              </h2>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SearchMovies;
