import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post3 extends Component {
  componentDidMount() {
    document.title = "Post 3";
  }
  render() {
    return (
      <div id="post">
        <h2>Hello?</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Last time with the ranting to no one in particular. At least. I hope. Okay, I 
            know how that sounds. And you gotta hear me out here, if anyone ever finds this post 
            (because let's be honest, even if I figure out how to post this where someone can see 
            it, I doubt the website will let me.) I'm sure they'll think I'm crazy. Or at least so 
            tired from staying inside for weeks and sitting on my computer that I've lost 
            all contact with reality. But I need to record this, so I can either confirm to myself 
            that I really have gone crazy, or that it's more scarily real than I want to believe. 
        </p>
        <p>
            It started when I really got into posting the recipes. Like, way too much. When I 
            started staying inside and ordering all the groceries from home, not bothering to 
            head to Book Club or go outside with the other human beings. The website started... 
            glitching out. Not your regular, everyday glitches like "things not working or 
            working when they shouldn't be" (although there was plenty of that too). It was more 
            like recipes posting themselves that I hadn't even written, or that I couldn't 
            remember having written. I started losing time when I was using the website, I would 
            sit down to write a recipe and it would go from day to night.
        </p>
        <p>
           And don't tell me I'm losing it from isolating myself and working too hard. I can 
           tell the difference between losing time from overworking and losing days at a time 
           for no reason at all. I already reached out to the customer support from the company 
           who made my website, and I couldn't get ahold of anyone. I've been tempted to call 
           some kind of tech person, but even if I knew who to call (who does personal websites, 
           it's not the computer who's broken) I would be embarassed to have anyone in the house 
           with the state it's in. Let's just say it's a mess. 
        </p>
        <p>
           It's fine, I can do it on my own. I've handled worse than a kinda spooky website. I'm 
           going to start tracking the time I spend on the website, and make a concerned effort 
           to do something else at home. Maybe knit or something. Anything but write recipes and 
           post them. I have this horrible feeling in the back of my mind that if I keep writing 
           recipes at the rate I've been doing, something is going to happen. No idea what that 
           something is. It's just a feeling I have. All I know about this feeling is that whatever 
           it is that's going to happen, it's very, very bad.
        </p>
      </div>
    );
  }
}
 
export default Post3;