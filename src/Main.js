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
// Alternate Paths: Posts
import Post1 from "./Posts/Post1";

// Alternative Paths: Recipes
import {
  Recipe1,
  Recipe2,
  Recipe3,
  Recipe4,
  Recipe5,
  Recipe6,
  Recipe7,
  Recipe8,
  Recipe9,
  Recipe10
} from "./Recipes/index"

//CSS
import "./index.css";

//test
import { TestDisplay } from "./test";

//Recoil Paths
import { Corruption } from './Recoil/atoms';
 
export function Main() {
  //Darkness Tracker
    const darkness = useRecoilValue(Corruption);
  //Recipe Tracker
    var whichRecipe = null;
  //Recipe Changer
    switch(darkness) {
      case 5: 
      whichRecipe = Recipe2;
      break;
      case 10:
        whichRecipe = Recipe3;
      break;
      case 15:
        whichRecipe = Recipe4;
      break;
      case 20:
        whichRecipe = Recipe5;
      break;
      case 25:
        whichRecipe = Recipe6;
      break;
      case 30:
        whichRecipe = Recipe7;
      break;
      case 35:
        whichRecipe = Recipe8;
      break;
      case 40:
        whichRecipe = Recipe9;
      break;
      case 45:
        whichRecipe = Recipe10;
      break;
      default:
      whichRecipe = Recipe1;
    }
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
            <Route path="/recipes" component={whichRecipe}/>
            <Route path="/posts" component={Post1}/>
          </div>
        </div>
      </HashRouter>
    );
  }

export default Main;