import React from "react";
import useSound from "use-sound";
import {
  NavLink,
} from "react-router-dom";
import {
  useRecoilState
} from "recoil";

import {
  badEnding
} from "../Recoil/atoms"

import { AddCupcake } from "../Recoil/CupcakeManager.js";

import hmmm from "../Audio/hmmm.mp3";
import laugh from "../Audio/laugh.mp3";
 
function Debug() {
  
  const [playhmmm] = useSound(hmmm);
  const [playlaugh] = useSound(laugh);

  const [badEnd,changeEnd] = useRecoilState(badEnding);

    document.title = "Debug";

    return (
      <div>
        <h2>DEBUG- Alpha 0.7.5</h2>
        <p>Debug page for Jillian's Cookbook. Text is added here to see the full extent of the page. 
          Below are samples of working additions that can be controlled across the entire website.
        </p>
        <h3>Patch Notes</h3>
        <h4>Complete</h4>
        <ul>
          <li><b>Alpha 0.5.0</b> - First Alpha Build</li>
          <li><b>Alpha 0.6.0</b>
            <ul>
              <li>Posts 1-5</li>
            </ul>
          </li>
          <li><b>Alpha 0.6.25</b>
            <ul>
              <li>Moved Debug to separate section</li>
              <li>Created Homepage</li>
              <li>Added template to all recipes</li>
              <li>Recipes 16-20</li>
            </ul>
          </li>
          <li><b>Alpha 0.7.0</b></li>
            <ul>
              <li>Fixed Debug Patch List</li>
              <li>About Me Updated</li>
              <li>Hid Debug</li>
              <li>Upgraded Login</li>
              <li>Ouroboros Page</li>
              <li>Recipe 14</li>  
              <li>Recipe 15</li>
              <li>Color Changing on Cupcake Amount</li>
              <li>Cupcakes implemented! Progression tree success!</li>
            </ul>
            <li><b>Alpha 0.7.5</b>
            <ul>
            <li>Both Endings added!</li>
          <li>Login functional but not written out. Navigates to endgame</li>
          <li>No cupcake collection on endgame</li>
          <li>Beta key added! Beta access restricted on release</li>
            </ul>
          </li>
        </ul>
        <h4>Upcoming</h4>
        <ul>
          <li><i>Alpha 0.8.0</i></li>
          <ul><b>
          <li>Recipe 12 IN PROGRESS</li>
            </b>
            <i>
            <li>Recipe 1</li>
            <li>Recipe 2</li>
            <li>Recipe 3</li>
            <li>Recipe 4</li>
            <li>Recipe 5</li>
            <li>Recipe 6</li>
            <li>Recipe 7</li>
            <li>Recipe 8</li>
            <li>Recipe 10</li>
            <li>Recipe 11</li>
            <li>Recipe 13</li>
            <li>Do comments on posts</li>
          </i></ul>
          <li><i>Alpha 0.9.0 - Video and Photoshoot</i></li>
          <li><i>Beta 0.1.0 - Closed Beta</i></li>
          <li><i>Other
              <ul>
                <li>Finish About Me</li>
                <li>Finish Homepage</li>
                <li>etc</li>
              </ul></i></li>
        </ul>
 
        <p>Content used in this build:</p>

        <ul>
          <li><a href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/" target="_blank" rel="noreferrer">useSound</a> by Josh Comeau</li>
          <li>Recoil by Facebook</li>
          <li>React by React</li>
          <li><a href="https://www.npmjs.com/package/react-typing-animation" target="_blank" rel="noreferrer">React Typing Animation</a> by AdamjKing3</li>
          <li><a href="https://www.npmjs.com/package/reactjs-popup" target="_blank" rel="noreferrer">ReactJS Popup</a> by yjose</li>
        </ul>
        <br></br>
        <h3>Hidden Pages</h3>
        <ul>
          <li><NavLink to='/shewasdelicious' onClick={()=>changeEnd(true)}>shewasdelicious</NavLink></li>
          Bad Ending = {badEnd}
          <li><NavLink to="/exorcism">You cannot remove the eternal</NavLink></li>
        </ul>
        <br></br><br></br>
        <AddCupcake/>
        <br></br>
        <button onClick={playhmmm}>Hmmm?</button>
        <br></br>
        <button onClick={playlaugh}>Amusing....</button>

      </div>
    );
}
 
export default Debug;