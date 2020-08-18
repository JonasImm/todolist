import React from "react";

const ListItemText = ({ title, date }) => {
  return (
    <div>
      <h4>{title}</h4>
      <span>{date}</span>
    </div>
  );
};

export default ListItemText;
