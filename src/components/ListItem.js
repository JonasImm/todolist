import React from "react";

const ListItem = ({ children, href }) => {
  return <a href={href}>{children}</a>;
};

export default ListItem;
