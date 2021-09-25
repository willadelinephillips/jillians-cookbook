// Utilities 
import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {Helmet} from "react-helmet";
import {
  useRecoilValue,
} from 'recoil';

// Main Paths
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Aboutme from "./Pages/Aboutme";
// Alternate Paths 
import Post1 from "./Posts/Post1";
import Recipe2 from "./Recipes/Recipe2";
//CSS
import "./index.css";

//test
import { TestDisplay } from "./test";

//Recoil Paths
import { Corruption } from './Recoil/atoms';
 
export function Main() {
    const darkness = useRecoilValue(Corruption);
    return (
      
      <HashRouter>
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
            <li id="recipelink"><NavLink to="/recipes">Recipes</NavLink></li>
            <li id="postslink" className={
        darkness < 10 ? 'hidden' : 'revealed'
      }><NavLink to="/posts">Posts??</NavLink></li>
            <li id="loginlink" className={
        darkness >= 100 ? 'revealed' : 'hidden'
      }><NavLink to="/login">Login</NavLink></li>
            <TestDisplay></TestDisplay>
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

export default Main;