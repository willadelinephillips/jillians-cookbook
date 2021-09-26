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
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

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