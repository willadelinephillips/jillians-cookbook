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
  moremeat,
  cookedmeat } from "../img/index";
 
function Recipe17() {

    document.title = "Heart with Sausage";

    return (
      <div>
        <div id="recipe">
        <h2>Heart with Sausage</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 0 Comments ↓</h3>
        <p> 
          I've been so hungry lately. It must be the fact that I'm cooking so much, and I haven't 
          tried to stand on the scale in a while if I'm honest, but it's been really distracting. 
          Especially for meat. I guess staying inside has really dropped whatever vitamins I need 
          and meat has a lot of them, but wow did I order a lot of meat in the last online 
          shopping spree. Ended up with a bunch of stuff I've never tried before, which is both 
          exciting and a little unnerving considering there will be a lot of experimentation 
          involved in cooking all this. At least meat freezes, and you'll be on this journey with 
          me! The thought that you're reading this does comfort me a little.
        </p>
        <img width="50%" src={sausage} alt="IMG 1"></img>
        <p>
          God this sausage looks so good. I was almost tempted to eat one raw (just kidding!). The 
          smell coming off of it is intoxicating, like a perfume or something. When I smelled it, 
          I just knew I had to cook it today. What kind of self-depriving woman would I be if I 
          didn't give it to my hunger once and a while, especially since I have a cooking website. 
          I don't even remember what animal this comes from. Honestly, it doesn't matter to me. It 
          could be made of absolutely any living thing and it would smell just as good. I don't 
          know how I know that, but I know that it's true. I know what it would feel like between 
          my teeth, across my tongue. I wish I could have killed the thing it came from. Squeezed 
          the life out of it with my bare hands and then ripped its meat out through its ribs. It 
          would taste even more delicious then. More alive.
        </p>
        <img width="50%" src={heart} alt="IMG 2"></img>
        <p>
          This is what I was more interested in though. Apparently this is heart meat. I chopped 
          this one up so you could see how beautiful it is on the inside, but you should see what 
          it looks like whole. So beautiful. So raw. So... alive. It seems almost a shame to ruin 
          it with seasonings and filling, but I guess that's cooking. Taking something perfectly 
          delicious and meaty and ruining it with char and spice. See that redness on the side 
          there? I tried it. Just a little. Touched it with my finger and tasted it. It was... 
          sublime. I did cook the rest of it like it says to do in this recipe, but I needed to 
          have that one little taste. Just to know what I was missing by cooking it. Salt and 
          pepper is nice, and bacon is delicious of course, but nothing beats the flavor of the 
          meat itself. The juicy, tender fleshiness of the body. So delicate, and yet so full of 
          potential.
        </p>
        <img width="50%" src={meat}  alt="IMG 3"></img>
        <p>
          I mean. Just look at it! The fat, so smooth and yet riddled with beautiful little cracks. 
          The meat itself, a color that surpasses the most delicately crafted baked goods. Once 
          I get into a better routine with this website, I'm going to devote it to meat. To the 
          poetry of a raw steak, something so fresh you can hear the pulse of the frightened 
          animal taking their last rattling breath as the knife plunges into her chest. A 
          fluttering gasp, then nothing. Silence. An entire living thing, reduced to a pile of 
          mouthwatering life force. We are truly blessed as a species that we are allowed the 
          ancient rite of life consumption, taking the power of another being as your own.
        </p>
        <img width="50%" src={moremeat} alt="IMG 4"></img>
        <p>
          Anyways, I didn't store the stuffed hearts because I ate them immediately, but I would 
          imagine that they keep well for a little under a week, then need to either be eaten or 
          frozen. I can't imagine why you wouldn't want to eat them right away, but if for some 
          reason you're torn away from them, make sure they're in an airtight container. If 
          you want to make them ahead of time, you want to prep the hearts and the stuffing 
          separate then cook them together before you eat them. Don't eat the meat without 
          cooking it though. No matter how tempting it may be.
        </p>
        <img width="50%" src={cookedmeat} alt="IMG 5"></img>
        <p>
          There are so many occasions on which you'll likely crave something as delicious as this. 
          I know I just thought about how delicious it would be and wrote it down. I bothered to 
          google it later and apparently it's a real recipe. Sometimes they use a different meat 
          in place of the hearts (which are apparently usually beef) but I find that the hearts 
          are essential to my version of the dish. Imagining it with regular meat would feel a 
          little blastphemous. What's the point of eating something so meaty if you're not going 
          to do it with hearts? There's a lot of powerful symbolism there, about devouring the 
          life force of another creature and adding it to your own. Very empowering stuff.
        </p>
        <h3>Ingredients</h3>
        <p>Meat</p>
        <ul>
          <li>2 Hearts</li>
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
          sides or alone as a delicious, meaty meal.
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