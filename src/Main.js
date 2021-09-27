// Utilities 
import React from "react";
import {
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import {Helmet} from "react-helmet";
import {
  useRecoilValue,
} from 'recoil';

// Main Paths
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Aboutme from "./Pages/Aboutme";

//CSS
import "./index.css";

//test
import { TestDisplay } from "./test";

//Recoil Paths
import { Corruption, Recipe, Post } from './Recoil/atoms';

import {
  // eslint-disable-next-line
  Recipe1,
  // eslint-disable-next-line
  Recipe2,
  // eslint-disable-next-line
  Recipe3,
  // eslint-disable-next-line
  Recipe4,
  // eslint-disable-next-line
  Recipe5,
  // eslint-disable-next-line
  Recipe6,
  // eslint-disable-next-line
  Recipe7,
  // eslint-disable-next-line
  Recipe8,
  // eslint-disable-next-line
  Recipe9,
  // eslint-disable-next-line
  Recipe10,
  // eslint-disable-next-line
  Recipe11,
  // eslint-disable-next-line
  Recipe12,
  // eslint-disable-next-line
  Recipe13,
  // eslint-disable-next-line
  Recipe14,
  // eslint-disable-next-line
  Recipe15,
  // eslint-disable-next-line
  Recipe16,
  // eslint-disable-next-line
  Recipe17,
  // eslint-disable-next-line
  Recipe18,
  // eslint-disable-next-line
  Recipe19,
  // eslint-disable-next-line
  Recipe20
} from "./Recipes/index"

 
export function Main() {
  //Darkness Tracker
    const darkness = useRecoilValue(Corruption);

    const recipe = useRecoilValue(Recipe);
    const post = useRecoilValue(Post);
    

    return (
      
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Jillian's Cookbook</title>
                <meta content="Embed Title" property="og:title"></meta>
                <meta content="A homespun cooking website made from scratch!" property="og:description"></meta>
            </Helmet>
          <h1>Jillian's Cookbook</h1>
          <ul className="header">
            <li id="homelink"><NavLink exact to="/">Home</NavLink></li>
            <li id="aboutlink"><NavLink to="/aboutme">About Me</NavLink></li>
            <li id="recipelink"><NavLink to={`${recipe}`}>Recipes</NavLink></li>
            <li id="postslink" className={
        darkness < 20 ? 'hidden' : 'revealed'
      }><NavLink to="/posts">Posts??</NavLink></li>
            <li id="loginlink" className={
        darkness >= 100 ? 'revealed' : 'hidden'
      }><NavLink to="/login">Login</NavLink></li>
            <TestDisplay></TestDisplay>
          </ul>
          <div className="content">
            <Switch>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/login" component={Login}/>
            <Route path="/recipes" component={`${recipe}`}/>
            <Route path="/posts" component={`${post}`}/>
            <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </div>
    );
  }

export default Main;