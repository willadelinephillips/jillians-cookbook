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
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/aboutme">About Me</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;