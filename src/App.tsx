import { Component, onMount } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { useRoutes, useLocation } from "solid-app-router";

import { routes } from "./routes";
import NavBar from "./components/NavBar";
import cursor from "./cursor";
import Waves from "./components/Waves";
import Alpha from "./components/Alpha";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);
  onMount(() => {
    cursor();
  });
  return (
    <div id="root">
      <NavBar />
      <Route />
      <Alpha />
    </div>
  );
};

export default App;
