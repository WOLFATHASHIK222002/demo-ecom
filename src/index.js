import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateProvider } from "./Context/StateProvider";
import { initialState } from "./Context/initalState";
import reducer from "./Context/reducer";
import Error from "./Components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
