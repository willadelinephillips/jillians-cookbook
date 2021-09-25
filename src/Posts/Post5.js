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
        <h2>Post 5</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Lorum Ipsum 5
        </p>

      </div>
    );
  }
}
 
export default Post5;