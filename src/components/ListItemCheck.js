import React from "react";

const onCheck = () => {
  const check = document.querySelectorAll("input");
  console.log(check);
  if (check.checked === true) {
    console.log(check.checked);
  }
};

const ListItemCheck = () => {
  return <input type="checkbox" className="check" onChange={onCheck} />;
};

export default ListItemCheck;
