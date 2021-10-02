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
            Last time with the ranting to the website who can't hear me. 
        </p>

      </div>
    );
  }
}
 
export default Post3;