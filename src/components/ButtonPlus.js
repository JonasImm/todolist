import React from "react";
import buttonSrc from "../assets/add_button.svg";
import styled from "@emotion/styled";

const Button = styled.button`
  background: none;
  border: none;
`;
const ButtonPlus = () => {
  return (
    <Button>
      <img src={buttonSrc} alt="Button" />
    </Button>
  );
};

export default ButtonPlus;
