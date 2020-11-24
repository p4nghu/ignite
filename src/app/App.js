import React from "react";
import Home from "../pages/Home";
import GlobalStyle from "./globalStyle";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Route path={["games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
