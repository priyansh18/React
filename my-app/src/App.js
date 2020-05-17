import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.js";

function App() {
  return (
    <div className="App">
      <h1>Hi,I am react</h1>
      <p>This is really working!!! </p>
      <Person name="max" age="28" />
      <Person name="sanu" age="18">
        My Hobbies: Playing Cricket
      </Person>
      <Person name="neha" age="22" />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "I'm React")
  // );
}

export default App;
