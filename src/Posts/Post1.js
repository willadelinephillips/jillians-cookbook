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
        <h2>Post 1</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Text
        </p>

      </div>
    );
  }
}
 
export default Post1;