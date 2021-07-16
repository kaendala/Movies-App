import "./card.scss";
import { React, useEffect, useState } from "react";
import Const from "../../../const/general.const.json";
import noFound from "../../../assets/images/noFound.png";
import { useHistory } from "react-router-dom";

const Card = ({ movie }) => {
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(null);
  useEffect(() => {
    isSave(movie.id);
  }, [movie]);

  const isSave = (id) => {
    let myFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (myFavorites) {
      let isInLocal = false;
      for (let i = 0; i < myFavorites.length; i++) {
        const item = myFavorites[i];
        const itemId = item.id;
        if (itemId === id) {
          setIsFavorite(true);
          isInLocal = true;
          return { favorite: true, index: i };
        }
      }
      if (!isInLocal) {
        setIsFavorite(false);
        return { favorite: false };
      }
    } else {
      setIsFavorite(false);
      return { favorite: false };
    }
  };

  const addOrRemoveFavorite = (current, index) => {
    let myFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (current) {
      myFavorites.splice(index, 1);
      setIsFavorite(false);
    } else {
      if (!myFavorites) {
        myFavorites = [];
      }
      myFavorites.push(movie);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(myFavorites));
  };
  return (
    <div className="contentCard">
      <span
        className={
          "icon icofont-ui-love " + (isFavorite ? "favorite" : "noFavorite")
        }
        onClick={() => {
          const current = isSave(movie.id);
          addOrRemoveFavorite(current.favorite, current.index);
        }}
      ></span>
      <div
        className="card"
        onClick={() => {
          history.push(`/detail/${movie.id}`);
        }}
      >
        <div>
          <h3 className="title">{movie.title}</h3>
        </div>
        <div className="contentImage">
          <img
            src={`${Const.api_image}${movie["backdrop_path"]}`}
            alt="movieImage"
            onError={(e) => {
              e.target.src = noFound;
            }}
          ></img>
        </div>
        <div className="description">
          <h4>
            <strong>Original title:</strong> {movie["original_title"]}
          </h4>
          <h4>
            <strong>Popularity: </strong>
            {movie["popularity"]}
          </h4>
          <h4>
            <strong>Vote average:</strong> {movie["vote_average"]}
          </h4>
          <h4>
            <strong>Vote count:</strong> {movie["vote_count"]}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
