import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post1 extends Component {
  componentDidMount() {
    document.title = "Post 1";
  }
  render() {
    return (
      <div id="post">
        <h2>Test! ♥♥♥♥♥♥</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            First post! This one is just a little test run to see if the formatting on the website 
            is working how I want it to work. This test will never see the light of day, thank God :)
        </p>
        <p>
            Never will I ever judge a website for being a little bit of a mess again! After much 
            chaos, frustration, writing and reading, I gave up on making the thing myself and used 
            a website builder called Ouroboros. Really helpful tools and stuff made it so easy to 
            set up what I needed. I can't imagine making this from scratch! Couldn't reach anyone 
            on the staff team about the issues I did have, but that's okay. The whole point of this 
            thing is to be as resourceful as possible anyways, being tuff anf brave on my own!
        </p>
        <p>
            It's been so exciting setting everything up and writing out the first couple of recipes 
            I want to post! Sarah Jean has been so supportive and nice, especially in contrast 
            to some of the other members of the Book Club (not naming any names!). She's been 
            "lending" me some of her own recipes from her family that I've been trying out, I had 
            no idea how hard making things look nice was until I started trying to take pictures of 
            it!
        </p>
        <p>  
            It's been especially hard trying to cook so much food when I'm the only one living here. 
            I miss having other's to eat my cooking like my mother had to eat hers, but I guess 
            that's what I get for moving so far away from Dad. I know he misses me, even if he 
            refuses to say so, but it was so hard being in the same house as him with Mom gone. 
            Everything reminds him of her, and since he won't talk about it, the whole house just 
            feels like the funeral. 
        </p>
        <p>  
            But on a lighter note, being out here has been so nice! The book club has helped with 
            the lonliness a lot, this new website has taken up a lot of my time, and I've been doing 
            a good job keeping myself busy in general. Hopefully I can write a real post soon and 
            not just use this little form to vent, but for now I need to focus on recipes and 
            leave this little section for later. Can't let myself get distracted by side projects!
        </p>
        <p>  
            NOTE TO SELF: Delete this post before activating the Posts section!
        </p>

      </div>
    );
  }
}
 
export default Post1;