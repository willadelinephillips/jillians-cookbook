import React from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";

import { 
  randomavatar,
  seedchallah,
  challahdough,
  sidechallah,
  dough,
  burtchallah
 } from "../img/index";
 
function Recipe14() {

    document.title = "At-Home Challah";

    return (
      <div>
        <div id="recipe">
        <h2>At-Home Challah</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink>. 0 Comments ↓</h3>
        <p> 
          Wow do I really need to leave the house! It's been a really long time since I stepped 
          outside, and I think it's time I made a recipe in celebration of my isolation from 
          society. I know I could leave anytime I wanted to, but there's just so much to do here 
          and so little time. Plus, the delivery people can just pick up my ingredients from the 
          store and I don't have to go. It's really helped me plan my recipes out in advance and 
          spend more time working on the website. Not that the website really needs any more work, 
          but it could always use more improvements! Especially now that I've decided to take this 
          whole recipe website thing very seriously and make sure that I give everyone the best 
          content I can!
        </p>
        <img width="50%" src={seedchallah} alt="IMG 1"></img>
        <p>
          So what you're looking at today is a bread recipe from my mom's recipe book, something 
          really old that we've had for generations. I did add the seeds as my own personal touch, 
          and messed with the baking times until I got what I considered the perfect amount of 
          brownness and crunch. I know that those factors are up to personal taste, and if you 
          decide to experiment with the bake times, please let me know down below! I remember 
          eating these wonderful little baked goodies at huge family gatherings. Someone would 
          always bring them and the kids would devour them in their entirity before anyone else 
          could even have a chance. I guess it's the buttery, simple goodness that really 
          attracts young kids to these, but I promise adults will love them when given the chance 
          to try one as well.
        </p>
        <img width="40%" src={dough} alt="IMG 2"></img>
        <p>
          Kneading dough is always something I've struggled with in the past. My mind goes in so many 
          places at once, and I just can't sit still long enough to knead it properly. Something 
          about recently must have really extended my patience though, because I effortlessly zoned 
          out in the process of pressing my palms into the dough. It must have been how tired I was 
          or the calming repetitive motion (or a combination of the two) but I don't even remember 
          most of the kneading process. I just looked down, and it was done. Kneaded to the max. So 
          maybe, if you're having problems kneading, be really tired? I don't know. 
        </p>
        <img width="50%" src={challahdough} alt="IMG 3"></img>
        <p>
          I highly recommend adding whatever suits your fancy to this recipe, it's really forgiving 
          when it comes to mix-ins. I personally really like raisins, sesame seeds, and a lot of 
          butter on the outside, but you can add other dried fruits, nuts, and even some syrups 
          like maple syrup and honey. Bread is like that, super malleable and easy to understand. 
          Unlike people. People are confusing. And hard to understand. And a little scary, to be 
          honest. Very unpredictable. That's why this break from people has been so nice. I don't 
          have to feel this intense afraid feeling I've been feeling. Like I'm being watched, or 
          observed. Like I have no control over my own actions. And that even if I went out there 
          and reached out to everyone, I would feel as alone as I feel now. As trapped.
        </p>
        <img width="50%" src={sidechallah} alt="IMG 4"></img>
        <p>
          But look how beautiful this challah is! Such a wonderful example of what you can do with 
          just a little bit of dough and hard work. Storing bread is always such a hot topic, since 
          there are so many family ways to do it. The general suggested way to store bread is under 
          a nice cloth in a cool place, preferably on your counter in a bread box. We like to have 
          it in a basket on the counter, covered in a checkered cloth. For some reason, it has to 
          be checkered. Plaid doesn't work, and is somehow blastphemy. But however you want to do 
          it will be fine, I'm sure. 
        </p>
        <img width="50%" src={burtchallah} alt="IMG 5"></img>
        <p>
          I even burnt a batch, as you can see here. All these gorgeous pictures aren't indicative 
          of the time it takes me to make and test each one of these. It's hours. Countless hours. 
          Hours where I lose track of time, and space off into nothingness. I come back to reality 
          and it's dark outside, late at night. Sometimes, when I come back to conciousness, I'm 
          holding a kitchen knife. No cutting board, no food to prep. Just a massive knife in my 
          hand, hovering over the keyboard as I stand in front of my laptop. It's curious, what 
          I must be thinking in those blank patches. Where do I go? Who do I talk to? 
        </p>
        <h3>Ingredients</h3>
        <p>For the Bread</p>
        <ul>
          <li>3 cups flour</li>
          <li>1 packet instant yeast</li>
          <li>1/4 cup sugar</li>
          <li>Pinch salt</li>
          <li>3 eggs</li>
          <li>4 tbs butter</li>
          <li>1/2 cup water</li>
        </ul>
        <p>Instructions</p>
        <p>First, mix together flour, yeast, sugar, and salt.
        </p>
        <p>Second, mix together the three eggs, butter, and the water. Gradually add flour. 
        </p>
        <p>Next, take the dough mixture and knead until smooth then add a little more flour and cover.
        </p>
        <p>Then, let rest for 2 hours in covered container in the oven without heat. Press down 
          and let rise for another hour.
        </p>
        <p>After that, braid dough and pop in the oven for 30-45 minutes at 375F.
        </p>
        <p>Finally, take out the loaf and sprinkle with whatever you want for toppings (mine had 
          sesame seeds).
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