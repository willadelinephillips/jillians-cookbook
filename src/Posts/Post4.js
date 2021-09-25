import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post4 extends Component {
  componentDidMount() {
    document.title = "Post 4";
  }
  render() {
    return (
      <div id="post">
        <h2>Post 4</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Lorum Ipsum 4
        </p>

      </div>
    );
  }
}
 
export default Post4;