import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";

import { randomavatar } from "../img/index";
 
export function Recipe9() {
    document.title = "Recipe Template";

    return (
      <div>
        <div id="recipe">
        <h2>Lemony Lemon Cake</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 3 Comments ↓</h3>
        <p>I am just absolutely enthralled by this darling, delicious lemon cake! From the
          frosting, to the lemon zest in the batter, there's nothing about this recipe that doesn't
          just shout "fall delight". I added some little decorative lemons on the top there, but you
           can decorate it however you like. 
        </p>
        <img width="60%" alt="lemon cake 1"></img>
        <p>My mother would make this recipe for us on hot summer days near the start of fall, when
          the leaves were just beginning to drop from the trees. We would come home to the smell of
           lemon zest and a hint of vanilla, the perfect respite after sweltering hot hours in a 
           classroom with no air conditioning. When I bake this, I hear her laughter. 
        </p>
        <img width="60%" alt="lemon cake 2"></img>
        <p>I made these little lemons out of balls of frosting with a little mint leaf on top from 
          my garden. Although cute and traditional, they're optional and the cake is perfectly 
          delicious without them. I may decide to do an entire recipe on how to make little frosting 
          decorations, but for now that's very dependant on the comments I receive on this post! If 
          you want to see that in the future, let me know.
        </p>
        <img width="60%" alt="lemon cake 3"></img>
        <p>The crust is made of graham crackers and butter, which is the secret to the cake. I wont be 
          revealing which particular brand I use here as I've been sworn to secrecy by my mother years 
          ago, but all brands work just fine. If you find a brand that worked especially well, let me 
          know!
        </p>
        <img width="60%" alt="lemon cake 3"></img>
        <p>My own personal trick with mixing the batter is always patience. Don't rush it or go too 
          fast, or you'll miss lumps and bits of dry ingredients. I know that's what everyone says, 
          but there's really an art to stirring as slowly as possible. Maybe put on some music, 
          watch your favorite show. My favorite thing to do is sit down and watch my very favorite 
          show, Downton Abbey. 
        </p>
        <h3>Ingredients</h3>
        <p>Lemon Cake</p>
        <ul>
          <li>3 cups Flour</li>
          <li>2 cup Sugar</li>
          <li>3 tablespoons Baking Soda</li>
          <li>Pinch Salt</li>
          <li>1 cup Butter</li>
          <li>3 Eggs</li>
          <li>3 Tablespoons Vanilla Extract</li>
          <li>1 cup Buttermilk</li>
          <li>1/2 cup Lemon Juice from Three Lemons</li>
          <li>Zest from Lemons</li>
          <li>Whipped Cream for Decoration</li>
        </ul>
        <p>Frosting</p>
        <ul>
          <li>1/2 cup Butter</li>
          <li>3 cups Powdered Sugar</li>
          <li>1/4 cup Whole Milk</li>
          <li>1 teaspoon Vanilla Extract</li>
        </ul>
        <p>Instructions</p>
        <p>First, preheat your oven to 350 degrees. Get three bowls, one for the frosting, one for 
          the dry cake ingredients, and one for the wet ingredients. Start with the cake batter, as 
          you can make the frosting while you're waiting for the cake to bake. 
        </p>
        <p>Then, take the flour, sugar, baking soda, and salt and mix them together in one bowl. 
          Make sure that you get the baking soda incorperated in the entire mix, as even the 
          slightest disproportion can mess with how the cake rises. 
        </p>
        <p>Mix the rest of the ingredients (except the whipped cream, which will go in between the 
          layers of the cake) in another bowl. Very slowly incorperate the dry mixture into the wet, 
          making sure to pour it evenly across the entire bowl. Once it's been added, you can gently 
          pour the entire mixture into a round baking pan and bake for 25-30 minutes.
        </p>
        <p id="commentSection">Comments</p>
        </div>

          <ul className="commentSection">

            <li>
              <img src={randomavatar}alt="random avatar"></img>
              <p className="username">Sarah Jean - September X, 2021 :</p>
              <p>Love this recipe, dear! So excited to see you following your dreams!</p>
            </li>

            <li>
              <img src={randomavatar}alt="random avatar"></img>
              <p className="username">Carrey - September X, 2021 :</p>
              <p>Sounds delicious, can't wait to try it. I love those little decorations!</p>
            </li>

            <li>
              <img src={randomavatar}alt="random avatar"></img>
              <p className="username">Karen Rider - September X, 2021 :</p>
              <p>Looks just like the one from that book we read last week at club. Inspiration maybe?</p>
            </li>

          </ul>

      </div>
    );
  }
 
export default Recipe9;