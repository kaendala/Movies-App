import "./card.scss";
import React from "react";
import Const from "../../../const/general.const.json";
import { useHistory } from "react-router-dom";

const Card = ({ movie }) => {
  const history = useHistory();
  return (
    <div
      className="card"
      onClick={() => {
        history.push(`/detail/${movie.id}`);
      }}
    >
      <div>
        <h4 className="title">{movie.title}</h4>
      </div>
      <div className="contentImage">
        <img src={`${Const.api_image}${movie["backdrop_path"]}`}></img>
      </div>
      <div className="description">
        <h4>Original title: {movie["original_title"]}</h4>
        <h4>Popularity: {movie["popularity"]}</h4>
        <h4>Vote average: {movie["vote_average"]}</h4>
        <h4>Vote count: {movie["vote_count"]}</h4>
      </div>
    </div>
  );
};

export default Card;
