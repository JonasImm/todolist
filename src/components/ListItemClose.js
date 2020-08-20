import React from "react";
import closeSrc from "../assets/close.svg";
import styled from "@emotion/styled";

const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 40px;
    margin: 0 1px;
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
