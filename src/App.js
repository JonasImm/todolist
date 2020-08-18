import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItemCheck from "./components/ListItemCheck";
import { getTodos } from "./api/todos";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchData();
  }, []);

  console.log(todos);

  return (
    <div className="app">
      <header className="app__header">
        <h2>To Do List</h2>
      </header>
      <main className="app__main">
        <List>
          <ListItem>
            <ListItemIcon />
            <ListItemText />
            <ListItemCheck />
          </ListItem>
        </List>
      </main>
      <footer className="app__footer">Footer</footer>
    </div>
  );
}

export default App;
