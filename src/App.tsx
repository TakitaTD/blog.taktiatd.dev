import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { useRoutes, useLocation } from "solid-app-router";

import { routes } from "./routes";
import NavBar from "./components/NavBar";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);
  return (
    <>
      <NavBar />
      <Route />
    </>
  );
};

export default App;
