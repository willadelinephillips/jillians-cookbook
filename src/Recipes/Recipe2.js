import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import lemon1 from "../img/lemonylemoncake1.jpg"
import "../index.css";
 
class Recipe2 extends Component {
  componentDidMount() {
    document.title = "Recipe 2";
  }
  render() {
    return (
      <div id="recipe">
        <h2>Lemony Lemon Cake</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> X Comments</h3>
        <p>I am just absolutely enthralled by this darling, delicious lemon cake! From the
          frosting, to the lemon zest in the batter, there's nothing about this recipe that doesn't
          just shout "fall delight". I added some little decorative lemons on the top there, but you
           can decorate it however you like. 
        </p>
        <img src={lemon1} width="60%" alt="lemon cake 1"></img>
      </div>
    );
  }
}
 
export default Recipe2;