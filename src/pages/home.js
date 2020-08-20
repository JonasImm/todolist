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
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";
import AppContainer from "../components/AppContainer";

const Home = () => {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <>
      <AppContainer>
        <AppHeader>
          <h2>To Do List</h2>
        </AppHeader>
        <AppMain>
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
        </AppMain>
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

export default Home;
