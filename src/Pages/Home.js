import React from "react";
import useSound from "use-sound";
import {
  useRecoilValue,
} from 'recoil';

import { DarknessManager } from "../Recoil/darknessManager.js";
import { Recipe, Post } from '../Recoil/atoms';

import hmmm from "../Audio/hmmm.mp3";
import laugh from "../Audio/laugh.mp3";
 
function Home() {
  
  const [playhmmm] = useSound(hmmm);
  const [playlaugh] = useSound(laugh);

  const recipe = useRecoilValue(Recipe);
  const post = useRecoilValue(Post);

    document.title = "Jillian's Cookbook";

    return (
      <div>
        <h2>HELLO</h2>
        <p>Debug page for Jillian's Cookbook. Text is added here to see the full extent of the page. 
          Below are samples of working additions that can be controlled across the entire website.
          
        </p>
 
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
        <DarknessManager></DarknessManager>
        <br></br>
        <button onClick={playhmmm}>Hmmm?</button>
        <br></br>
        <button onClick={playlaugh}>Amusing....</button>

      </div>
    );
}
 
export default Home;