import React, { Component } from "react";
import { RecoilRoot } from "recoil";

import { CorruptionButton } from "./Recoil/corruptionButton";

import hello from "./Audio/Hello.mp3";
import AnyoneThere from "./Audio/IsAnyoneThere.mp3"
 
class Home extends Component {
  
  playHello = () => {
    new Audio(hello).play();
  }

  playAnyoneThere = () => {

    new Audio(AnyoneThere).play();
  }

  componentDidMount() {
    document.title = "Jillian's Cookbook";
  }

  render() {
    return (
      <RecoilRoot>
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
        <button onClick={this.playHello}>HELLO?</button>
        <br></br>
        <button onClick={this.playAnyoneThere}>IS ANYONE THERE?</button>

      </div>
      </RecoilRoot>
    );
  }
}
 
export default Home;