import "./header.scss";
import React from "react";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="header">
      <div className="container">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => history.push("/search")}
        ></img>
        <span className="icon icofont-ui-user"></span>
      </div>
      <div className="nav">
        <ul>
          <li
            onClick={() => history.push("/search")}
            className={
              location.pathname === "/search" || location.pathname === "/"
                ? "active"
                : ""
            }
          >
            <h3>Search</h3>
            <span className="icon icofont-ui-search"></span>
          </li>
          <li
            onClick={() => history.push("/favorites")}
            className={location.pathname === "/favorites" ? "active" : ""}
          >
            <h3>My favorites</h3>
            <span className="icon icofont-ui-rating"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
