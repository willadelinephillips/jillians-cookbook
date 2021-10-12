import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";

import { 
  karenpfp,
  smoothieingredients,
  beforeblending,
  smoothiefruit,
  finishedsmoothie,
  smoothieprofile
 } from "../img/index";
 
function Recipe12() {

    document.title = "Exciting Smoothie!";

    return (
      <div>
        <div id="recipe">
        <h2>{document.title}</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 0 Comments ↓</h3>
        <p> 
          I just needed something to spice up my recipe list, and I knew that if I was more 
          spontaneous then the inspiration will come to me. So this time we're going to do Exciting 
          Smoothies! No previous recipe, no basis, just my own talent shining through for everyone 
          to see and enjoy! I can't wait!
        </p>
        <img width="50%" src={smoothieingredients} alt="IMG 1"></img>
        <p>
         My mom and I didn't really make smoothies, but my dad and I sure did. It was kinda our 
         thing, making some makeshift thingy because mom wasn't home and we wanted to do something 
         creative all on our own. Half the time they were inedible, the other half of the time 
         they were edible enough to enjoy in front of a game of chess together. I miss that man, 
         but he needs to learn how to live on his own. Without a nurturing force around all the time 
         to take care of him. I knew if I stayed there I would just become Mom, and it would start 
         to be impossible to leave. Then I would just live there with him for years, pretending 
         that everything was fine. But that's not the kind of cute, wholesome story you want to hear, 
         dear reader. Suffice to say, I adore smoothies, but haven't made a ton of magical ones 
         in my past.
        </p>
        <img width="50%" src={beforeblending} alt="IMG 2"></img>
        <p>
          I really just grabbed whatever I saw on the grocery store's website. Blueberries, lemons, 
          limes, and grapefruit. Apple too. They looked really good, and I was so excited when I saw 
          all the pretty colors on the cutting board. I diced and diced, and got a lovely little 
          fruit salad going. It was as bright as I wanted it, but I know that fruit can be pretty 
          sour so I added a little bit of sugar in the final recipe. I also added ice, because 
          I'm pretty sure smoothies are supposed to have that. Plus it looked a little pulpy 
          without it. Not a super duper lot pulpy. Just a lot. So I added the ice. And the sugar. 
          And I couldn't remember if I added anything else so that's what the recipe is. I think 
          I might have included some other test runs in the pictures on accident, but you get the 
          drift. You get my meaning. Y'know. 
        </p>
        <img width="50%" src={smoothiefruit} alt="IMG 3"></img>
        <p>
          This recipe really does well with anything added, as is the magic of smoothies. You can 
          a different sweetness instead of the sugar, like maple syrup or honey. You can add different 
          fruit, different berries, even veggies if you're feeling adventurous. You can add a protein 
          powder, brown sugar, cocoa powder, even spices. It's really up to how you're feeling 
        </p>
        <img width="50%" src={finishedsmoothie} alt="IMG 4"></img>
        <p>
          Storing and reheating the recipe! Storage containers picture combined with some tips 
          about how to do really basic stuff that everyone's mom should have taught them to do when 
          they were 12, like "don't eat leftovers that have been in the fridge for more than two 
          weeks" or something to that idea. How it tasted when I had it reheated, which will be a 
          half-truth depending on how good it actually tasted. If it tasted like freshly minced 
          garbage or something, just say that it doesn't keep especially well. You can also talk 
          about how to make whatever it is ahead of time, although sometimes that's a really 
          terrible idea. 
        </p>
        <img width="50%" src={smoothieprofile} alt="IMG 5"></img>
        <p>
          Finally, this is the "oh, all the occasions you'll be using this for" section. Like the 
          reader can't figure out on their own which occasion to bake cupcakes. Sometimes I read 
          the other cooking blog/recipe websites and I wonder if the author was completely sane 
          writing all that they did. Maybe the trick is to just write like the reader is a small 
          toddler incapable of rational thought. It feels like that's what they're doing sometimes. 
          This is the reality of trying to live your dream though. You have to not just accept the 
          parts that are beautiful and fun, but the annoying or ugly parts. That's reality.  
        </p>
        <h3>Ingredients</h3>
        <p>Main Recipe ingredients</p>
        <ul>
          <li>2 Lemons</li>
          <li>1 Lime</li>
          <li>1 Cup Blueberries</li>
          <li>1 Grapefruit</li>
          <li>4 Apples</li>
          <li>1 Cup Ice</li>
          <li>1 Cup Sugar</li>
        </ul>
        <p>Instructions</p>
        <p>First, dice up all fruit needed and juice all citrus.
        </p>
        <p>Second, simply blend all the ingredeints in a blender and enjoy!
        </p>
        <p id="commentSection">Comments</p>
        </div>

          <ul className="commentSection">

            <li>
              <img src={karenpfp} width="6%" alt="random avatar"></img>
              <p className="username">Karen - September X, 2021 :</p>
              <p>This is disgusting! I cannot believe you tried it before you made other people 
                try it! Do you have any taste buds at all?
              </p>
            </li>
          </ul>

      </div>
    );
  }
 
export default Recipe12;