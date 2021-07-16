import "./detail.view.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import noFound from "../../assets/images/noFound.png";
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
            <h1 className="title">{movie.title}</h1>
          </div>
          <div className="contentDescription">
            <div className="description">
              <h2>overview:</h2>
              <h3>{movie["overview"]}</h3>
              <h3>
                <strong>production companies:</strong>
              </h3>
              <h3>
                <strong>Original title:</strong> {movie["original_title"]}
              </h3>
              <h3>
                <strong>budget: </strong>
                {movie["budget"]}
              </h3>
              <h3>
                <strong>genres:</strong>{" "}
                {movie["genres"].map((genre, index) => (
                  <span key={index}>{genre.name}, </span>
                ))}
              </h3>
              <h3>
                <strong>Vote average:</strong> {movie["vote_average"]}
              </h3>
              <h3>
                <strong>Original language:</strong> {movie["original_language"]}
              </h3>
              <h3>
                <strong>Popularity: </strong>
                {movie["popularity"]}
              </h3>
              <h3>
                <strong>homepage: </strong>
                <a href={movie["homepage"]} target="_blank" rel="noreferrer">
                  {movie["homepage"]}
                </a>
              </h3>
              <h3>
                <strong>Vote count:</strong> {movie["vote_count"]}
              </h3>
              <h3>
                <strong>production countries:</strong>{" "}
                {movie["production_countries"].map((contrie, index) => (
                  <span key={index}>{contrie.name}, </span>
                ))}
              </h3>
              <h3>
                <strong>Release date:</strong> {movie["release_date"]}
              </h3>
              <h3>
                <strong>Revenue:</strong> {movie["revenue"]}
              </h3>
              <h3>
                <strong>Runtime:</strong> {movie["runtime"]}
              </h3>
              <h3>
                <strong>spoken_languages:</strong>{" "}
                {movie["spoken_languages"].map((contrie, index) => (
                  <span key={index}>{contrie.name}, </span>
                ))}
              </h3>
            </div>
            <div className="contentImage">
              <img
                src={`${Const.api_image}${movie["backdrop_path"]}`}
                alt="imageMovie"
                onError={(e) => {
                  e.target.src = noFound;
                }}
              ></img>
            </div>
            <div className="productionCompanies">
              {movie["production_companies"].map((producer, index) => (
                <div key={index} className="producer">
                  <img
                    src={`${Const.api_image}${producer["logo_path"]}`}
                    alt="producerLogo"
                    onError={(e) => {
                      e.target.src = noFound;
                    }}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
