import "./footer.scss";
import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <h5>
        <span>Help Center</span> <span>Audio and Subtitles</span>{" "}
        <span>Audio Description</span>
      </h5>
      <h5>
        <span>ellipticMedia Center</span> <span>Investor Relations</span>
      </h5>
    </div>
  );
};
export default Footer;
