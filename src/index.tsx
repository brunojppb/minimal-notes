import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './assets/main.css';

// TODO: add router
function AppWrapper() {
  return (
    <App />
  );
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
