import React from "react";
import homeSrc from "../assets/home.svg";
import styled from "@emotion/styled";

const Button = styled.button`
  background: none;
  border: none;
`;
function ButtonHome() {
  return (
    <Button>
      <img src={homeSrc} alt="Home Button" />
    </Button>
  );
}

export default ButtonHome;
