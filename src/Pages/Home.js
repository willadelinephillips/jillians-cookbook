import React from "react";
import {
  NavLink,
} from "react-router-dom";
import {
  useRecoilValue,
} from 'recoil';
import { Recipe, Post } from '../Recoil/atoms';


function Home() {

    document.title = "Home";
    const recipe = useRecoilValue(Recipe);
    const post = useRecoilValue(Post);

    return (
      <div id="homepage">
        <h1>Welcome Home!</h1>
        <h2>To my home, at least </h2>
        <p>Hi! My name is Jillian, and welcome to my website! I am a homespun, happy-go-lucky cook 
          and baker who has only one dream: To show you the best recipes you or I have ever heard 
          of. You will find cakes, pies, cookies and custards from my baking roster, as well as 
          chili, mac and cheese, steaks and stir fries from my more cooking knowledge. The website 
          is your oyster (although as of yet, there are no oyster recipes), so please feel free to 
          look about, poke around, and satisfy your curiousity to your heart's content. If you 
          have any questions, concerns, comments, please leave a message on one of my recipes, as 
          that is the very best way to reach me. Have fun and enjoy!
        </p>
        <h2>Most Viewed Recipe:</h2>
        <p><NavLink to={`${recipe}`}>{recipe}</NavLink></p>
        <h2>Most Viewed Post:</h2>
        {!post && (
        <p>Sorry! This feature is currently unavailable :(</p>
        )}
        <p><NavLink to={`${post}`}>{post}</NavLink></p>
        <h2>Cupcake Hunt</h2>
        <p>While you're looking throgh my little recipes, go ahead and go on a cupcake hunt! At 
          the top of the page, there's a little cupcake counter that keeps track of your collection. 
          If you get to 20 cupcakes, there may be a special surprise in store.
        </p>

      </div>
    );
}
 
export default Home;