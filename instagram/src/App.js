import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
gi;
