import React, { useState } from "react";
import { createTodo } from "../api/todos";
import { Link } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function titleChange(title) {
    setTitle(title.target.value);
  }

  function dateChange(date) {
    setDate(date.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await createTodo({ title, date });
    setTitle("");
    setDate("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="Title"
            value={title}
            onChange={titleChange}
          />
        </label>
        <label>
          Date:
          <input type="date" name="Date" value={date} onChange={dateChange} />
        </label>
        <input type="submit" value="Add task" />
      </form>
      <Link to="/">Tasks</Link>
    </>
  );
};

export default Add;
