import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";

import { 
  randomavatar,
  karenpfp,
  stewmeat,
  potatostew,
  donestew,
  closerstew
   } from "../img/index";
 
function Recipe14() {

    document.title = "Karen Stew";

    return (
      <div>
        <div id="recipe">
        <h2>Karen Stew</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 0 Comments ↓</h3>
        <p> 
          You ever just want to take someone you hate a lot, someone who adds nothing positive to 
          your life and makes you suffer for no apparent reason, and throw them into a nice stew? 
          Not only would you be rid of their negativity and annoying commentary about your life, 
          but you'd also have a delicious stew! I know that's kind of dark, and I would obviously 
          never recommend actually hurting anyone, much less making them into a delicious stew 
          that will brightene up your fall. Today, completely as a joke, I am showing you all 
          how to make stew out of someone who will just not take the hint that you don't want to 
          hear from them ever again!
        </p>
        <img width="30%" src={karenpfp} alt="IMG 1"></img>
        <p>
          This is what a judgemental, aggresive woman who has nothing to do in her spare time looks 
          like. The wild Karen sits in her nice house at her phone (or at a wonderful lunch on her 
          phone) and she finds people to judge on the Internet. When she's not ruining other people's 
          days by judging them, she attends absolutely purposeless book club meetings with other 
          women as bored as she is, but who possess less spite. At said meetings, she imports her 
          spiteful wisdom of how everyone should be reading their book, and how they should be leading 
          their lives.
        </p>
        <img width="50%" src={stewmeat} alt="IMG 2"></img>
        <p>
          If you were, hypothetically and as a joke of course, to have the heart of a spiteful book 
          club member sitting on your cutting board, you want to chop that up in small diced 
          pieces. You want them big enough to see in the stew, but small enough to chew up and eat 
          easily. Not that her real heart is likely made of real heart. It's likely ice, or some 
          as-yet undiscovered hard metal or rock that is unbreakable to humankind. It would be 
          impossible to dice into these nice, cathartically easy to dice pieces. So it's a good 
          thing these are just pieces of stew meat from the local grocery store that we can imagine 
          are the heart of our vindictive enemies.
        </p>
        <img width="50%" src={potatostew} alt="IMG 3"></img>
        <p>
          The next thing you want to put in your enemy-stew is some wonderful potatoes, spiced with 
          whatever you happen to have in your cabinet that lends itself to a nice everything-stew 
          pot with no picky ingredients or strange spices. Cumin, coriander, allspice, and cloves 
          make really nice additions to the stew, and help drown out the taste of bitterness and 
          the inability to love others with the same kindness they extend to you. To prevent this 
          awful taste from permiating the entire stew, you have to impose some other flavors, 
          perhaps like cinnamon or even fresh herbs like thyme and rosemary. Anything frankly 
          tastes better than the taste in your mouth after you're finished dealing with a woman 
          as utterly pointless as the one you're cooking.
        </p>
        <img width="40%" src={donestew} alt="IMG 4"></img>
        <p>
          And look how beautiful that turned out! For storing and reheating this recipe, I highly 
          recommend freezing it to the temperature that her heart is used to being at (so at the 
          very least your deep freeze, although it may need something even colder) and then using 
          your stovetop to heat it back up. If you're in a pinch, microwaving it can be done, 
          although you have to make sure you do it low (5 power) and slow (at least 2 minutes 
          per serving). 
        </p>
        <img width="50%" src={closerstew} alt="IMG 5"></img>
        <p>
          Just look at that! Gorgeous. You have, at the same time, gotten rid of a complete menace 
          to society, and made a scrumptious meal. You can serve this to the other victims of her 
          anger and enjoy her absence, or even to her friends and family Greek-style and reveal the 
          "secret ingredient" to their abject horror! I am kidding. Of course. Who would ever want 
          to miserably chew up such a dried-up old hag as Karen? 
        </p>
        <h3>Ingredients</h3>
        <p>Main Recipe ingredients</p>
        <ul>
          <li>1lb Karen's Dead heart</li>
          <li>2c Broth (chicken, pork)</li>
          <li>2 Carrots</li>
          <li>4 Potatoes</li>
          <li>1 Onion</li>
          <li>Spices (cumin, coriander, allspice and s&p are best here, but you can use whatever 
            strikes your fancy!)
          </li>
        </ul>
        <p>Instructions</p>
        <p>First, harvest the heart of your least favorite person in the world. Dice it, along with 
          the onion, carrot and potatoes.
        </p>
        <p>Next, add all your ingredients in a large pot with your spices and cook on low for at least 
          two hours. Taste and add spices as desired.
        </p>
        <p>Finally, enjoy! Your inbox, text messages, and comments section will be mercifully devoid 
          of menace for the forseeable future!
        </p>
        <p id="commentSection">Comments</p>
        </div>

          <ul className="commentSection">

            <li>
              <img src={randomavatar}alt="random avatar"></img>
              <p className="username">Jillian - September X, 2021 :</p>
              <p>Commenting on here myself to see what the comments will look like!</p>
            </li>
          </ul>

      </div>
    );
  }
 
export default Recipe14;