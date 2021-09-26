import React, { Component } from "react";

import { CorruptionButton } from "../Recoil/corruptionButton";

import hmmm from "../Audio/hmmm.mp3";
import laugh from "../Audio/laugh.mp3";
 
class Home extends Component {
  
  playhmmm = () => {
    new Audio(hmmm).play();
  }

  playlaugh = () => {

    new Audio(laugh).play();
  }

  componentDidMount() {
    document.title = "Jillian's Cookbook";
  }

  render() {
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
        <button onClick={this.playhmmm}>Hmmm?</button>
        <br></br>
        <button onClick={this.playlaugh}>Amusing....</button>

      </div>
    );
  }
}
 
export default Home;