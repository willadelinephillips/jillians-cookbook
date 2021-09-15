import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

// Main Paths
import Home from "./Home";
import Login from "./Login";
import Aboutme from "./Aboutme";
// Alternate Paths 
import Post1 from "./Posts/Post1";
import Recipe2 from "./Recipes/Recipe2";
//CSS
import "./index.css";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Jillian's Cookbook</h1>
          <ul className="header">
            <li id="homelink"><NavLink exact to="/">Home</NavLink></li>
            <li id="aboutlink"><NavLink to="/aboutme">About Me</NavLink></li>
            <li id="loginlink"><NavLink to="/login">Login</NavLink></li>
            <li id="recipelink"><NavLink to="/recipes">Recipes</NavLink></li>
            <li id="postslink"><NavLink to="/posts">Posts??</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/login" component={Login}/>
            <Route path="/recipes" component={Recipe2}/>
            <Route path="/posts" component={Post1}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;