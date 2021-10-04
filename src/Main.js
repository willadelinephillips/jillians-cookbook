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
import {
  Home,
  Login,
  Aboutme,
  Ouroboros
} from "./Pages/index.js"

//CSS
import "./index.css";

//Recoil Paths
import { Corruption, Recipe, Post } from './Recoil/atoms';

//Image paths 
import {
  ouroboros,
} from "./img/index";

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

import {
  Post1,
  Post2,
  Post3,
  Post4,
  Post5
} from "./Posts/index"
import ValewindDaily from "./Pages/ValewindDaily";

 
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
      }><NavLink to={`${post}`}>Posts??</NavLink></li>
            <li id="loginlink" className={
        darkness >= 100 ? 'revealed' : 'hidden'
      }><NavLink to="/login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/login" component={Login}/>
            <Route path="/Recipe1" component={Recipe1}/>
            <Route path="/Recipe2" component={Recipe2}/>
            <Route path="/Recipe3" component={Recipe3}/>
            <Route path="/Recipe4" component={Recipe4}/>
            <Route path="/Recipe5" component={Recipe5}/>
            <Route path="/Recipe6" component={Recipe6}/>
            <Route path="/Recipe7" component={Recipe7}/>
            <Route path="/Recipe8" component={Recipe8}/>
            <Route path="/Recipe9" component={Recipe9}/>
            <Route path="/Recipe10" component={Recipe10}/>
            <Route path="/Recipe11" component={Recipe11}/>
            <Route path="/Recipe12" component={Recipe12}/>
            <Route path="/Recipe13" component={Recipe13}/>
            <Route path="/Recipe14" component={Recipe14}/>
            <Route path="/Recipe15" component={Recipe15}/>
            <Route path="/Recipe16" component={Recipe16}/>
            <Route path="/Recipe17" component={Recipe17}/>
            <Route path="/Recipe18" component={Recipe18}/>
            <Route path="/Recipe19" component={Recipe19}/>
            <Route path="/Recipe20" component={Recipe20}/>
            <Route path="/Post1" component={Post1}/>
            <Route path="/Post2" component={Post2}/>
            <Route path="/Post3" component={Post3}/>
            <Route path="/Post4" component={Post4}/>
            <Route path="/Post5" component={Post5}/>
            <Route path="/shewasdelicious" component={ValewindDaily}/>
            <Route path="/ouroboros" component={Ouroboros}/>
            <Route exact path="/" component={Home}/>
            </Switch>
          </div>
          <h5>Made with Ouroboros <NavLink to="/ouroboros"><img width="1%" src={ouroboros} alt="deathinfinite"></img></NavLink></h5>
        </div>
    );
  }

export default Main;