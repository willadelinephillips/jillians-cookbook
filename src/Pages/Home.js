import React from "react";
import useSound from "use-sound";

import { CorruptionButton } from "../Recoil/corruptionButton";

import hmmm from "../Audio/hmmm.mp3";
import laugh from "../Audio/laugh.mp3";
 
function Home() {
  
  const [playhmmm] = useSound(hmmm);
  const [playlaugh] = useSound(laugh);
    document.title = "Jillian's Cookbook";

    return (
      <div>
        <h2>HELLO</h2>
        <p>Debug page for Jillian's Cookbook. Text is added here to see the full extent of the page. 
          Below are samples of working additions that can be controlled across the entire website.
          
        </p>
 
        <p>Content used in this build:</p>

        <ul>
          <li>useSound by Josh Comeau</li>
          <li>Recoil by Facebook</li>
          <li>React by React</li>
        </ul>
        <br></br>
        <CorruptionButton></CorruptionButton>
        <br></br>
        <button onClick={playhmmm}>Hmmm?</button>
        <br></br>
        <button onClick={playlaugh}>Amusing....</button>

      </div>
    );
}
 
export default Home;