import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post2 extends Component {
  componentDidMount() {
    document.title = "Post 2";
  }
  render() {
    return (
      <div id="post">
        <h2>AAAAAAaaaaaaa</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            Okayokayokayokay I know I shouldn't be typing in here since everything has been such a 
            mess that for all I know it could post itself out of sheer spite. But I need to vent 
            somewhere, and since I don't have a ton of close friends here yet, this will have to 
            do. This reminds me of when I was little and I had a diary,
        </p>
        <p>
             I know that everyone is doing their best to make me feel at home (even Karen, for all 
             her "help" is worth), but I just feel so alone sometimes. As I've become more and more 
             busy with the website, I've had less and less time for myself. To be completely honest, 
             since no one will ever see this, I've also been leaving the house less and less. 
             It's hard to leave when all my work is here. When I can just order groceries to the 
             house and people bring them, why leave?
        </p>
        <p>
            
        </p>

      </div>
    );
  }
}
 
export default Post2;