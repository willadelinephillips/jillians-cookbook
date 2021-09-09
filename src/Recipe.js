import React, { Component } from "react";
 
class Recipe1 extends Component {
  componentDidMount() {
    document.title = "Recipe 1";
  }
  render() {
    return (
      <div>
        <h2>Recipe One</h2>
        <p>Welcome</p>
      </div>
    );
  }
}
 
export default Recipe1;

class Recipe2 extends Component {
  componentDidMount() {
    document.title = "Recipe 2";
  }
  render() {
    return (
      <div>
        <h2>REcipe Two</h2>
        <p>Welcome</p>
      </div>
    );
  }
}
 
export default Recipe2;