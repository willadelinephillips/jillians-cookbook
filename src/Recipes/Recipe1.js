import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class Recipe1 extends Component {
  componentDidMount() {
    document.title = "Recipe 1";
  }
  render() {
    return (
      <div class="recipe">
        <h2>Recipe One</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> X Comments</h3>
        <p>Welcome</p>
      </div>
    );
  }
}
 
export default Recipe1;