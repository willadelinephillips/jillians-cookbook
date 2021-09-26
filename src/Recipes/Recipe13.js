import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import lemon1 from "../img/lemonylemoncake1.jpg"
import "../index.css";
 
class Recipe13 extends Component {
  componentDidMount() {
    document.title = "Recipe 13";
  }
  render() {
    return (
      <div id="recipe">
        <h2>Lemony Lemon Cake</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> X Comments</h3>
        <p>RECIPE 13
        </p>
        <img src={lemon1} width="60%" alt="lemon cake 1"></img>

      </div>
    );
  }
}
 
export default Recipe13;