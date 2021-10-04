import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
 
class Post4 extends Component {
  componentDidMount() {
    document.title = "Post 4";
  }
  render() {
    return (
      <div id="post">
        <h2>H̴̞͉̓̐̌̾̒̀̿͝Ę̸͍̭͖͙̙̹̮̝͔̲̰͕̹̝̈́̂L̴̢̨̧͉̻̳̲̝̖͎̯̬͖̻̦̏̅̀̃̈́P̴̢̧̰̰̝̪͎͎̖̦̞̣͉̤͊͗́</h2>
        <h3>????????? ?, ???? By <NavLink to="/aboutme">Jillian</NavLink> 0 Comments</h3>
        <p>
            It's so dark. I can't see anything. Sometimes I can see the recipes, or I can see into 
            my kitchen. But the rest is all black, like it's not even there. There's this constant 
            humming coming from the dark, and this awful slithering, skittering noise. Y'know the 
            noise that centipedes make when they crawl across the ground, scattering dead leaves 
            and debris? It sounds like that. Like something with more legs than anything has the 
            right to have is looking, hunting. Hungry.
        </p>
        <p>
            I don't remember the last time I felt like I was in my house. This dark feeling has 
            been taking my memories, slowing down my mind. I know that I should do things, like 
            call my dad or go outside, but somehow I... can't. Like I'm trapped here. This feeling 
            reminds me of the panic attacks I was having when Mom first passed, but I can't ground 
            myself. I keep losing count. Something I can see, something I can... touch?
        </p>
        <h3>I can't feel my face. I can't feel my hands. I can't feel my body. Where am I?</h3>
      </div>
    );
  }
}
 
export default Post4;