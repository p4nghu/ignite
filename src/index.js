import React from "react";
import { render } from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./app/store";
import {loadGames} from './actions/gamesAction'
store.dispatch(loadGames)
render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
