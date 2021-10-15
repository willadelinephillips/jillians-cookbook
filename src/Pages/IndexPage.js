import React from "react";
import {
  NavLink,
} from "react-router-dom";
 
function IndexPage() {

    document.title = "Index Page";

    return (
      <div>
        <h2>Index</h2>
        <br/>
        Recipes
          <ul>
            <li><NavLink to="/Recipe1">Recipe1</NavLink></li>
            <li><NavLink to="/Recipe2">Recipe2</NavLink></li>
            <li><NavLink to="/Recipe3">Recipe3</NavLink></li>
            <li><NavLink to="/Recipe4">Recipe4</NavLink></li>
            <li><NavLink to="/Recipe5">Recipe5</NavLink></li>
            <li><NavLink to="/Recipe6">Recipe6</NavLink></li>
            <li><NavLink to="/Recipe7">Recipe7</NavLink></li>
            <li><NavLink to="/Recipe8">Recipe8</NavLink></li>
            <li><NavLink to="/Recipe9">Recipe9</NavLink></li>
            <li><NavLink to="/Recipe10">Recipe10</NavLink></li>
            <li><NavLink to="/Recipe11">Recipe11</NavLink></li>
            <li><NavLink to="/Recipe12">Recipe12</NavLink></li>
            <li><NavLink to="/Recipe13">Recipe13</NavLink></li>
            <li><NavLink to="/Recipe14">Recipe14</NavLink></li>
            <li><NavLink to="/Recipe15">Recipe15</NavLink></li>
            <li><NavLink to="/Recipe16">Recipe16</NavLink></li>
            <li><NavLink to="/Recipe17">Recipe17</NavLink></li>
            <li><NavLink to="/Recipe18">Recipe18</NavLink></li>
            <li><NavLink to="/Recipe19">Recipe19</NavLink></li>
            <li><NavLink to="/Recipe20">Recipe20</NavLink></li>
          </ul>
          <br/>
          Posts
          <ul>
            <li><NavLink to="/Post1">Post 1</NavLink></li>
            <li><NavLink to="/Post2">Post 2</NavLink></li>
            <li><NavLink to="/Post3">Post 3</NavLink></li>
            <li><NavLink to="/Post4">Post 4</NavLink></li>
            <li><NavLink to="/Post5">Post 5</NavLink></li>
          </ul>
      </div>
    );
  }

 
export default IndexPage;