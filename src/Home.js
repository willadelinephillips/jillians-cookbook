import React, { Component } from "react";
import { RecoilRoot } from "recoil";

import { Corruption } from "./atoms";

//Test
import { fontSizeState} from "./atoms";
import { FontButton} from "./fontbutton";

 
class Home extends Component {

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

        <FontButton></FontButton>

      </div>
      </RecoilRoot>
    );
  }
}
 
export default Home;