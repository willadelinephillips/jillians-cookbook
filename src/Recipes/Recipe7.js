import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";

import { randomavatar } from "../img/index";
 
function Recipe7() {

    document.title = "Recipe 7";

    return (
      <div>
        <div id="recipe">
        <h2>{document.title}</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 0 Comments ↓</h3>
        <p> 
          This is some kind of intro paragraph, get people invested and interested in what you're 
          cooking. Y'know, like 'this is such a nice season to be cooking or something. I don't 
          know. Maybe talk about where you got the idea for writing the recipe. It needs to take 
          up a lot of space like the other paragraphs, so you really gotta stretch what you're 
          putting in here. Talk about what gave you the idea to write this recipe in the first place, 
          or talk about where you got it from if it's not exactly 100% yours. If it's one of Mom's 
          recipes or something, make sure to put a good word in about her here. Remember, you're 
          supposed to be coping in a healthy way, and making solid attempts to talk about her in a 
          positive way instead of pretending she's not gone is part of the healing process.
        </p>
        <img width="10%" alt="IMG 1"></img>
        <p>
          Throw some sentimental nonsense in here. If you have absolutely no connection to the 
          recipe on a personal level, make one up. Be like "god I remember that one time I ate this 
          at that one place" or something. Let's be honest, no one will ever read most of this so 
           there's no reason to write a masterpiece in these paragraphs. I wish people would read 
           it, but I just know they'll scroll right down and scan the ingredients. Honestly, these 
           are just little filler thingies to make the pages look more professional. I could just 
           write a bunch of random words here and no one would care.
        </p>
        <img width="10%" alt="IMG 2"></img>
        <p>
          This is where you want to talk about the actual cooking. How you did it, what little 
          tricks you used, and what happened. Don't spend this whole paragraph whining about how 
          hard it was or something, since Karen and the others are reading this and they'll just 
          comment about how they wouldn't have had those problems. Sure, Karen. Sure you wouldn't 
          have. You're just perfect, aren't you. So perfect that you're only struggle is seeing the 
          obnoxious flaws in other flawed, annoying human beings like your fellow club members. 
          Why can't you be perfect enough to shut up and stop shoving your snide little opinions 
          where no one wants them or asked for them. 
        </p>
        <img width="10%" alt="IMG 3"></img>
        <p>
          I guess you could describe this section as like. "Suggestions tips and ideas". I know 
          that sounds kind of like the section before it, but hey. It's a recipe website. The 
          website should really just be the ingredients and the instructions. Anything else added 
          is just some worthless junk to make people think you're some sort of blogging expert and 
          so you can claim you're one on your resume. I would put stuff like "how to cook with 
          x ingredient" or "which brand of this is the best in my profession (what a joke) opinion". 
          If you have absolutely no idea what to put here, just make up some ideas of how to decorate 
          what ever it is the recipe is about. That way it looks like you had something to say.
        </p>
        <img width="10%" alt="IMG 4"></img>
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
        <img width="10%" alt="IMG 5"></img>
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
          <li>A single ingredient</li>
          <li>A single ingredient</li>
          <li>A single ingredient</li>
          <li>A single ingredient</li>
          <li>A single ingredient</li>
        </ul>
        <p>Secondary Recipe ingredients</p>
        <ul>
          <li>Another ingredient</li>
          <li>Another ingredient</li>
          <li>Another ingredient</li>
        </ul>
        <p>Instructions</p>
        <p>First, these are your first instructions. Preheating the oven, doing your mise en place, 
          that sort of thing. Cutting, chopping, stirring, separating the dry and wet ingredients. 

        </p>
        <p>Second, these are the second set of instructions. 
        </p>
        <p>Next, these are your third set of instructions. 
        </p>
        <p>Then, these are your fourth set of instructions. 
        </p>
        <p>After that, these are your fifth set of instructions. 
        </p>
        <p>Finally, these are your final set of ingredients.
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
 
export default Recipe7;