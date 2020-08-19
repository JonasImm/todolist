import React from "react";
import homeSrc from "../assets/home.svg";

function ButtonHome() {
  return (
    <button className="button">
      <img src={homeSrc} alt="Home Button" />
    </button>
  );
}

export default ButtonHome;
