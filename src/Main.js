import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Aboutme from "./Aboutme";
import "./index.css";
import Recipe1 from "./Recipes/Recipe1";
import Recipe2 from "./Recipes/Recipe2";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Jillian's Cookbook</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/aboutme">About Me</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/recipes">Recipes</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/login" component={Login}/>
            <Route path="/recipes" component={Recipe2}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;