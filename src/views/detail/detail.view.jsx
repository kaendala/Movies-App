import React, { useEffect, useState } from "react";
import axios from "axios";
import Const from "../../const/general.const.json";

const Detail = ({ match: { params } }) => {
  return <CurrentDetail movieId={params.movieId}></CurrentDetail>;
};
const CurrentDetail = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (movieId) {
      const url = `${Const.api_url}movie/${movieId}?api_key=${Const.api_key}`;
      axios.get(url).then((res) => {
        setMovie(res.data);
      });
    }
  }, [movieId]);
  return (
    <>
      {movie && (
        <div className="detail">
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
      )}
    </>
  );
};

export default Detail;
