import React, { useState } from "react";
import { createTodo } from "../api/todos";
import { Link } from "react-router-dom";
import "./add.css";
import ButtonPlus from "../components/ButtonPlus";
import ButtonHome from "../components/ButtonHome";

const Add = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  function titleChange(title) {
    setTitle(title.target.value);
  }

  function dateChange(date) {
    setDate(date.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    await createTodo({ title, date });
    setTitle("");
    setDate("");
    setLoading(false);
  }
  return (
    <>
      <div className="add">
        <header className="app__header">
          <h2>Create new Task</h2>
        </header>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="Title"
              placeholder="Enter task name"
              value={title}
              onChange={titleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              placeholder="Enter date"
              name="Date"
              value={date}
              onChange={dateChange}
            />
          </label>
          <input
            type="submit"
            value="Add task"
            disabled={!title || !date || loading}
          />
        </form>
        <footer className="app__footer">
          <Link to="/">
            <ButtonHome />
          </Link>
          <Link to="/add">
            <ButtonPlus />
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Add;
