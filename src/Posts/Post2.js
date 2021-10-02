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
            I know I shouldn't be using this posting system as my own private diary, but for now no 
            one can read them and I need somewhere to vent. 
        </p>
        <p>
            I had no idea how much this would all be! I've been so overworked and underappreciated. 
            ALthough I know that my friends are trying to be supportive, they come off as 
            condescending and annoyed much of the time. My recipes feel like they fall flat, I'm 
            cooking all the time, and I hardly ever leave the house with how busy I've made myself. 
        </p>
        <p>
            
        </p>

      </div>
    );
  }
}
 
export default Post2;