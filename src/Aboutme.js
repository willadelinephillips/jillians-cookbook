import React, { Component } from "react";
 
class Aboutme extends Component {
  componentDidMount() {
    document.title = "About Me";
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Welcome, my name is Jillian! It's been my dream my entire life to have a food website.</p>
        <br></br>
        <p>Yeet</p>
      </div>
    );
  }
}
 
export default Aboutme;