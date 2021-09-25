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
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
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