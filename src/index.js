import React from "react";
import ReactDOM from "react-dom";
import Hooks from "./hooks";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <label htmlFor="">Hooks Example</label>
      <Hooks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
