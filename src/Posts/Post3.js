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
        <h2>Post 3</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Last time with the ranting to the website who can't hear me. At least. I hope. Okay, I 
            know how that sounds. And you gotta hear me out here, if anyone ever finds this post 
            (because let's be honest, even if I figure out how to post this where someone can see 
            it, I doubt the website will let me.)
        </p>

      </div>
    );
  }
}
 
export default Post3;