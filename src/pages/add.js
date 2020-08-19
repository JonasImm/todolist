import React from "react";
import { createTodo } from "../api/todos";

const Add = () => {
  function addTodo() {
    createTodo("Hello", "20.10.2021");
  }
  return (
    <div>
      <form>
        <label>
          Task:
          <input type="text" name="Task" />
        </label>
        <label>
          Date:
          <input type="date" name="Date" />
        </label>
        <input type="submit" value="Add task" onClick={() => addTodo()} />
      </form>
    </div>
  );
};

export default Add;
