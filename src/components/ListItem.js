import React from "react";
import styled from "@emotion/styled";
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./ListItemText";
import ListItemCheck from "./ListItemCheck";
import ListItemClose from "./ListItemClose";

const ListItem = ({ todo, href }) => {
  const Container = styled.a`
    display: flex;
    display: flex;
    align-items: center;
    padding-top: 15px 0;
    color: ${todo.complete ? "grey" : "black"};
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

  return (
    <Container href={href}>
      <ListItemIcon />
      <ListItemText title={todo.title} date={todo.date} />
      <ListItemCheck />
      <ListItemClose />
    </Container>
  );
};

export default ListItem;
