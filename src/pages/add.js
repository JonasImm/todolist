import React, { useState } from "react";
import { createTodo } from "../api/todos";
import { Link } from "react-router-dom";
import "./add.css";
import ButtonPlus from "../components/ButtonPlus";
import ButtonHome from "../components/ButtonHome";

const Add = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setdDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function titleChange(title) {
    setTitle(title.target.value);
  }

  function dateChange(date) {
    setDate(date.target.value);
  }
  function descriptionChange(description) {
    setdDescription(description.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const todo = { title, date, description };
    try {
      await createTodo(todo);
      setTitle("");
      setDate("");
      setdDescription("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="add">
        <header className="app__header">
          <h2>Create new task</h2>
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
          <label>
            Description:
            <input
              type="text"
              placeholder="Enter description"
              name="Description"
              value={description}
              onChange={descriptionChange}
            />
          </label>
          <div>
            <input
              type="submit"
              value="Add task"
              disabled={!title || !date || !description || loading}
            />
          </div>
          {error && <p>Something bad happend. Please try again.</p>}
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
