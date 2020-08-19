import React, { useState } from "react";
import { createTodo } from "../api/todos";

const Add = () => {
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);

  function titleChange(title) {
    setTitle(title.target.value);
  }

  function dateChange(date) {
    setDate(date.target.value);
  }

  function addTodo() {
    createTodo(title, date);
  }
  return (
    <form>
      <label>
        Title:
        <input type="text" name="Title" onChange={titleChange} />
      </label>
      <label>
        Date:
        <input type="date" name="Date" onChange={dateChange} />
      </label>
      <input type="submit" value="Add task" onSubmit={addTodo()} />
    </form>
  );
};

export default Add;
