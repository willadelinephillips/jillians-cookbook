import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import lemon1 from "../img/lemonylemoncake1.jpg"
import lemon2 from "../img/lemonylemoncake2.jpg"
import lemon3 from '../img/lemonylemoncake3.jpg'
import lemon4 from "../img/lemonylemoncake4.jpg"
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
        <p>My mother would make this recipe for us on hot summer days near the start of fall, when
          the leaves were just beginning to drop from the trees. We would come home to the smell of
           lemon zest and a hint of vanilla, the perfect respite after sweltering hot hours in a 
           classroom with no air conditioning. When I bake this, I hear her laughter. 
        </p>
        <img src={lemon2} width="60%" alt="lemon cake 2"></img>
        <p>I made these little lemons out of balls of frosting with a little mint leaf on top from 
          my garden. Although cute and traditional, they're optional and the cake is perfectly 
          delicious without them. I may decide to do an entire recipe on how to make little frosting 
          decorations, but for now that's very dependant on the comments I receive on this post! If 
          you want to see that in the future, let me know.
        </p>
        <img src={lemon3} width="60%" alt="lemon cake 3"></img>
        <p>The crust is made of graham crackers and butter, which is the secret to the cake. I wont be 
          revealing which particular brand I use here as I've been sworn to secrecy by my mother years 
          ago, but all brands work just fine. If you find a brand that worked especially well, let me 
          know!
        </p>
        <img src={lemon4} width="60%" alt="lemon cake 3"></img>
        <p>My own personal trick with mixing the batter is always patience. Don't rush it or go too 
          fast, or you'll miss lumps and bits of dry ingredients. I know that's what everyone says, 
          but there's really an art to stirring as slowly as possible. Maybe put on some music, 
          watch your favorite show. My favorite thing to do is sit down and watch my very favorite 
          show, Downton Abbey. 
        </p>
        <h3>Ingredients</h3>
        <ul>
          <li>2 cups Flour</li>
          <li>1 cup Sugar</li>
        </ul>
      </div>
    );
  }
}
 
export default Recipe2;