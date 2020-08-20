import React from "react";
import styled from "@emotion/styled";

const ListItem = ({ children, href }) => {
  const Container = styled.a`
    display: flex;
    display: flex;
    align-items: center;
    padding-top: 15px 0;
    > :nth-child(2) {
      flex-grow: 2;
    }
    img {
      max-width: 10px;
      margin: 0 10px;
    }
    h4 {
      margin: 0;
    }
    > :last-child {
      margin: 0 15px;
    }
  `;

  return <Container href={href}>{children}</Container>;
};

export default ListItem;
