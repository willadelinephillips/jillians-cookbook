import React from "react";
import useSound from "use-sound";
import {
  useRecoilValue,
} from 'recoil';
import {
  NavLink,
} from "react-router-dom";

import { DarknessManager } from "../Recoil/darknessManager.js";
import { Recipe, Post } from '../Recoil/atoms';

import hmmm from "../Audio/hmmm.mp3";
import laugh from "../Audio/laugh.mp3";
 
function Debug() {
  
  const [playhmmm] = useSound(hmmm);
  const [playlaugh] = useSound(laugh);

  const recipe = useRecoilValue(Recipe);
  const post = useRecoilValue(Post);

    document.title = "Debug";

    return (
      <div>
        <h2>DEBUG- Alpha 0.6.0</h2>
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
        </ul>
        <h4>Upcoming</h4>
        <ul>
          <li><i>Alpha 0.7.0 - Recipes Section Complete</i></li>
          <ul><b>
            <li>Fixed Debug Patch List</li>
            </b>
            <i>
            <li>Recipe 1-5</li>
            <li>Recipe 6-10</li>
            <li>Recipe 11-15</li>
            <li>Do comments on posts</li>
          </i></ul>
          <li><i>Alpha 0.8.0 - Video</i></li>
          <li><i>Alpha 0.9.0 - Endgame Sequence</i></li>
          <li><i>Beta 0.1.0 - Closed Beta, Passcode required</i></li>
        </ul>
 
        <p>Content used in this build:</p>

        <ul>
          <li><a href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/" target="_blank" rel="noreferrer">useSound</a> by Josh Comeau</li>
          <li>Recoil by Facebook</li>
          <li>React by React</li>
        </ul>
        <br></br>
        <p>Current Recipe: {recipe}</p>
        <p>Current Post: {post}</p>
        <br></br>
        <NavLink to="/shewasdelicious">She was Delicious</NavLink>
        <br></br><br></br>
        <DarknessManager></DarknessManager>
        <br></br>
        <button onClick={playhmmm}>Hmmm?</button>
        <br></br>
        <button onClick={playlaugh}>Amusing....</button>

      </div>
    );
}
 
export default Debug;