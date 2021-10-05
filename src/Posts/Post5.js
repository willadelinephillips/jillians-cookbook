import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post5 extends Component {
  componentDidMount() {
    document.title = "Post 5";
  }
  render() {
    return (
      <div id="post">
        <h2>Listen to me, whoever you are</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            My name is Jillian Evans. I am stuck in this website somehow, and I am losing my grasp 
            on reality. There's something in here with me, something so hungry I can feel it 
            in my bones. Or, I could if I still had them. I know, in my heart, that out there 
            I am gone. It destroyed me, and forced me to record it so the me in here was forced 
            to watch. Jillian out there is gone. And there's nothing you or I can do about that. 
            But there is something we can do about the thing that's stuck in here with me.
        </p>
        <p>
            It can only be some kind of ancient spirit, although only God knows how it got on the 
            Internet. I've heard it say its name to itself as it wanders, almost as if the cyberspace 
            we're both existing in is somehow sapping its memory too. It says the name in so many 
            languages. So many I don't recognize. λαιμαργία. Gula. Gluttony.
        </p>
        <p>
            Being trapped together has given us a shared consciousness. I think that it's trying 
            to tear me apart on the inside now that it's finished ripping my body to shreds. 
            While I still have a semblance of my own mind, I'm going to use our connection to reach 
            out using this website. If you can hear me. If you can see this. Please, I beg of you. 
            Login to the login section and delete the monster. I'll do everything I can on my end 
            to help you, although it's much stronger than I am. On my own, I can't do anything to 
            stop it. Maybe, if there's someone on the outside making choices, I can gather the 
            last of my strength and kill it once and for all. I know that you don't know who I am, 
            and you have no reason to trust me or to help me. But please. I know that when it's 
            done with me, it'll go looking for another to eat. And I can't let anyone go through 
            what I have, or see what I've been forced to see. Kill it, and end this endless hell 
            before it escapes and does this to another innocent person.
        </p>
      </div>
    );
  }
}
 
export default Post5;