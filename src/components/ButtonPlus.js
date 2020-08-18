import React from "react";
import buttonSrc from "../assets/add_button.svg";
import "./ButtonPlus.css";

const ButtonPlus = ({ onClick }) => {
  return (
    <button onClick={(event) => onClick(event)} className="button">
      <img src={buttonSrc} alt="Button" />
    </button>
  );
};

export default ButtonPlus;
