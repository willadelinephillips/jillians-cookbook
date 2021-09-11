import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class Recipe2 extends Component {
  componentDidMount() {
    document.title = "Recipe 2";
  }
  render() {
    return (
      <div>
        <h2>Lemony Lemon Cake</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> X Comments</h3>
        <p>I am just absolutely enthralled by this darling, delicious lemon cake! From the
          frosting, to the lemon zest in the batter, there's nothing about this recipe that doesn't
          just shout "fall delight". I added some little decorative lemons on the top there, but you
           can decorate it however you like. 
        </p>
      </div>
    );
  }
}
 
export default Recipe2;