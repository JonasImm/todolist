import React from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItemCheck from "../components/ListItemCheck";
import ButtonPlus from "../components/ButtonPlus";
import { Link } from "react-router-dom";
import ButtonHome from "../components/ButtonHome";
import useAsync from "../hooks/useAsync";
import { getTodos } from "../api/todos";

const Home = () => {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <>
      <div className="app">
        <header className="app__header">
          <h2>To Do List</h2>
        </header>
        <main className="app__main">
          <List>
            {error && <div>Could not get data. Please reload.</div>}
            {loading && <div>Loading...</div>}
            {todos?.map((todo) => (
              <ListItem key={todo.id}>
                <ListItemIcon />
                <ListItemText title={todo.title} date={todo.date} />
                <ListItemCheck />
              </ListItem>
            ))}
          </List>
        </main>
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

export default Home;
