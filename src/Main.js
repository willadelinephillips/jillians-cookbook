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
import {
  Post1,
  Post2,
  Post3,
  Post4,
  Post5
} from "./Posts/index"

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
  Recipe10,
  Recipe11,
  Recipe12,
  Recipe13,
  Recipe14,
  Recipe15,
  Recipe16,
  Recipe17,
  Recipe18,
  Recipe19,
  Recipe20
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
    var whichPost = null;
  //Recipe and Post Changer
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
        whichPost = Post1;
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
        whichPost = Post2;
      break;
      case 45:
        whichRecipe = Recipe10;
      break;
      case 50:
        whichRecipe = Recipe11;
      break;
      case 55:
        whichRecipe = Recipe12;
      break;
      case 60:
        whichRecipe = Recipe13;
        whichPost = Post3;
      break;
      case 65:
        whichRecipe = Recipe14;
      break;
      case 70:
        whichRecipe = Recipe15;
      break;
      case 75:
        whichRecipe = Recipe16;
      break;
      case 80:
        whichRecipe = Recipe17;
        whichPost = Post4;
      break;
      case 85:
        whichRecipe = Recipe18;
      break;
      case 90:
        whichRecipe = Recipe19;
      break;
      case 95:
        whichRecipe = Recipe20;
      break;
      case 100:
        whichPost = Post5;
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
        darkness < 20 ? 'hidden' : 'revealed'
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
            <Route path="/posts" component={whichPost}/>
          </div>
        </div>
      </HashRouter>
    );
  }

export default Main;