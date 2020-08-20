import React from "react";
import closeSrc from "../assets/close.svg";
import styled from "@emotion/styled";

const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
  > img {
    width: 40px;
    margin: 0;
  }
`;

function ListItemClose() {
  return (
    <Button>
      <img src={closeSrc} alt="Close Button" />
    </Button>
  );
}

export default ListItemClose;
