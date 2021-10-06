import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";

import { 
  randomavatar,
  sausage,
  heart,
  meat,
  humancuts,
  skinhuman
   } from "../img/index";
 
function Recipe17() {

    document.title = "Human Meat";

    return (
      <div>
        <div id="recipe">
        <h2>Human Meat</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 0 Comments ↓</h3>
        <p> 
          So I was thinking about the recipe I posted before this one. And I was so hung up on 
          what a human would taste like if you cooked them the same way. Or. Even if they weren't 
          cooked, if you just ate the meat raw. Like that piece I ate of the heart. That soft 
          piece of meat. Would human taste as good? Would it taste as soft? I did a lot of research 
          on my computer recently, since I can't seem to get off the darn thing. Between my busy 
          life posting and cooking, I don't have a lot of time for research but I needed to know. 
        </p>
        <img width="50%" src={sausage} alt="IMG 1"></img>
        <p>
          Did you know that cultures all over the world practiced cannibalism at one time in their 
          history? It's usually shut down by moral grandstanding of some form or another, but 
          it's not the most unsafe thing in the world if the person you're eating wasn't sick 
          or anything. I wonder why people aren't more curious about it? It seems too tempting. 
          Just to have a taste. Many times, it's even done as a form of respect to the person 
          you're eating. Sort of honoring their sacrafice or death by making sure that it wasn't 
          in vain. What a nice sentiment. 
        </p>
        <img width="50%" src={heart} alt="IMG 2"></img>
        <p>
          There's also a lot of religious signifigance to eating creatures that have strong life 
          forces in a lot of cultures. Apparently eating something like a lion or a tiger will 
          give you the energy and power that creature had when it was alive. Like a injection of 
          pure energy. What a concept. So imagine if you ate a whole human person. Or even just 
          a part of them. What kind of power that would give you. All the life they could have 
          had if they had lived longer, condensed into a delicious little serving of raw power 
          and delicious flavor. Better than any pill, any prescription. It could cure disease. 
          What if it could cure major diseases? How would we know, since it's so taboo? What a 
          shame. If only there was a way to eat it without anyone catching you.
        </p>
        <img width="50%" src={meat}  alt="IMG 3"></img>
        <p>
          There are so many mixed reports on what it tastes like. Some people say pork. Some 
          people say chicken. Other say that it's like neither of those, that it's more like a 
          game meat. Venison or something. I guess the different accounts come from eating different 
          people. You can imagine that they'd taste really different. In that case, you'd have to 
          be really selective about who you ate. Couldn't be just anyone, that would ruin the 
          whole point. You'd have to select someone that you knew very personally, so that way 
          you'd know if they were good enough to eat. Literally. Hah. But who could you taste 
          that you simultaneously knew that well, and who you wouldn't want to harm? It would 
          be so hard to choose. I would obviously not eat any part of my father for example, as he 
          would not only taste disgusting as he's old and bitter, but he needs all his limbs. 
        </p>
        <img width="50%" src={humancuts} alt="IMG 4"></img>
        <p>
          No, it would have to be someone willing. Obviously, because otherwise it would be a bad 
          thing to do. Who would
        </p>
        <img width="50%" src={skinhuman} alt="IMG 5"></img>
        <p>
          What if you ate just a t i n y p a r t o f y o u r s e l f 
        </p>
        <h3>Ingredients</h3>
        <p>Meat</p>
        <ul>
          <li>2 Human Hearts</li>
          <li>5 Slices of Bacon</li>
          <li>Salt and Pepper</li>
        </ul>
        <p>Stuffing</p>
        <ul>
          <li>2 Sausages</li>
          <li>Croutons</li>
        </ul>
        <p>Braising</p>
        <ul>
          <li>1 Onion</li>
          <li>2 Carrots</li>
          <li>1 cup Apple Cider Vinegar</li>
        </ul>
        <p>Instructions</p>
        <p>First, prepare the hearts by slicing the large veins, rinsing them in their entirity, 
          and slicing through the chambers and heartstrings for stuffing. Salt and pepper them and 
          then set them aside.
        </p>
        <p>Second, prepare the stuffing by removing the skin from the sausages. Throw away the skins 
          and place the ground meat in a bowl. Add croutons. 
        </p>
        <p>Next, place one heart on your counter and layer on half the stuffing. Push the stuffing 
          in roughly and harshly, stuff it until it's full enough to explode. Close it and force it 
          into a heart shape, then wrap it in the bacon slices. Repeat with remaining heart.
        </p>
        <p>Finally, place hearts in baking pan. Add onion, carrots and apple cider vinegar. Cover 
          with foil and roast for 45 minutes in an oven at 325. Add water at intervals to prevent 
          dryness. To check doneness, stab with knife and check for slight pink juices. Remove 
          lid and cook for additional 15 minutes uncovered to braise and cook bacon. Serve with 
          sides or alone as a delicious, meaty meaty meaty meaty meaty meaty meaty meaty meal.
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
 
export default Recipe17;