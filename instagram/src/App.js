import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import PostContainer from "./PostContainer/PostContainer";

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
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
