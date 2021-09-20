import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post2 extends Component {
  componentDidMount() {
    document.title = "Post 1";
  }
  render() {
    return (
      <div id="post">
        <h2>Post 2</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Lorum Ipsum
        </p>

      </div>
    );
  }
}
 
export default Post2;