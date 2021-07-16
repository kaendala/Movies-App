import "./favorites.scss";
import { React, useEffect, useState } from "react";
import Card from "../../components/common/card/Card";

const Favorites = () => {
  return <MyFavorites></MyFavorites>;
};
const MyFavorites = () => {
  const [favorites, setFavorites] = useState(null);
  useEffect(() => {
    const myFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (myFavorites) {
      setFavorites(myFavorites);
    }
  }, []);

  return (
    <div className="favorites">
      <h1 className="title">My favorites</h1>
      <div className="ContentMovies">
        <div className="contentCards">
          {favorites &&
            favorites.map((movie, index) => (
              <Card key={index} movie={movie}></Card>
            ))}
        </div>
        {!favorites ||
          (favorites.length === 0 && (
            <div className="noFavorites">
              <h2>
                you don't have any favorites at the moment, we invite you to go
                to our search and add a few
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Favorites;
