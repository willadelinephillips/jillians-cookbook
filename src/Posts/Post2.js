import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post2 extends Component {
  componentDidMount() {
    document.title = "Post 2";
  }
  render() {
    return (
      <div id="post">
        <h2>AAAAAAaaaaaaa</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Okayokayokayokay I know I shouldn't be typing in here since everything has been such a 
            mess that for all I know it could post itself out of sheer spite. But I need to vent 
            somewhere, and since I don't have a ton of close friends here yet, this will have to 
            do. This reminds me of when I was little and I had a diary. I wish I still knew where 
            that thing is, but it's likely with Dad and the last thing I need right now is to hear 
            his tired voice over the phone telling me that he's fine, he's doing just fine. We both 
            know that he's not, and lying to me helps neither of us. But you're a makeshift diary, 
            not the therapist I clearly need.
        </p>
        <p>
             I know that everyone is doing their best to make me feel at home (even Karen, for all 
             her "help" is worth), but I just feel so alone sometimes. As I've become more and more 
             busy with the website, I've had less and less time for myself. To be completely honest, 
             since no one will ever see this, I've also been leaving the house less and less. 
             It's hard to leave when all my work is here. When I can just order groceries to the 
             house and people bring them, why leave?
        </p>
        <p>
            I honestly don't know how I'm going to handle the pressure. I feel like every recipe 
            post I write is getting worse and worse, and the patience that my few readers have is 
            running thin. I know that Sarah Jean will read my recipes until the end of times, but 
            I want to write something good enough for everyone to enjoy. Even killjoys and strangers. 
            I know I can't try to slow down, because if I slow down I just know I'll stop alltogether. 
            I'll go home, back to Dad, and give up. Maybe get married or work at the local coffeshop, 
            or both.
        </p>
        <p>
          I got this. I'm going to try even harder, work even harder, and if it goes completely to Hell 
          then I'll give up at that point. But until then, I'm going to give 1000% to this project and 
          to my silly, ridiculous dream of running this website as my job. Because if I give up now, 
          then I'll think about how close I could have been if I had tried just a little bit harder.
        </p>

      </div>
    );
  }
}
 
export default Post2;