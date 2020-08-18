import React from "react";
import "./ListItem.css";

const ListItem = ({ children, href }) => {
  return (
    <a className="ListItem" href={href}>
      {children}
    </a>
  );
};

export default ListItem;
