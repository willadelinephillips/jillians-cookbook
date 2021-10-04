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
            head to Book Club or go outside with the other human beings. 
        </p>

      </div>
    );
  }
}
 
export default Post3;