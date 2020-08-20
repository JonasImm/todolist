import React, { useState } from "react";
import { createTodo } from "../api/todos";
import { Link } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";
import ButtonHome from "../components/ButtonHome";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppContainer from "../components/AppContainer";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  color: #a3a3a3;
  font-size: 1.2rem;
  > :first-child,
  > :nth-child(2),
  > :nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
  }
  > :first-child input,
  > :nth-child(2) input,
  > :nth-child(3) input {
    color: #a3a3a3;
    border-style: none;
    border-width: 1px;
    border-bottom-style: solid;
    border-color: #a3a3a3;
    background-color: transparent;
    margin: 5px 0;
  }
  > :last-child {
    flex-grow: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 30px;
  }
  > :last-child input {
    width: 50%;
    height: 10%;
    font-size: 1rem;
    background-color: var(--highlightColor);
    border-radius: 5px;
    border-style: none;
    color: #fff;
  }
`;

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
      <AppContainer>
        <AppHeader>
          <h2>Create new task</h2>
        </AppHeader>
        <Form onSubmit={handleSubmit}>
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
        </Form>

        <AppFooter>
          <Link to="/">
            <ButtonHome />
          </Link>
          <Link to="/add">
            <ButtonPlus />
          </Link>
        </AppFooter>
      </AppContainer>
    </>
  );
};

export default Add;
