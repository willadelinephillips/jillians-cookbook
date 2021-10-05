import React from "react";
import {
  NavLink,
} from "react-router-dom";


function Home() {

    document.title = "Home";

    return (
      <div>
        <p>Hi!</p>
        <NavLink to="/debug">Debug</NavLink> 
      </div>
    );
}
 
export default Home;