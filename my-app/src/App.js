import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Sanu", age: 18 },
      { name: "Neha", age: 21 },
    ],
  };
  switchnameHandler = () => {
    // console.log("button clicked");
    this.setState({
      persons: [
        { name: "Robin", age: 28 },
        { name: "Sanu", age: 18 },
        { name: "Neha", age: 25 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi,I am react</h1>
        <p>This is really working!!! </p>
        <button onClick={this.switchnameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Playing Cricket
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "I'm React")
    // );
  }
}

export default App;
