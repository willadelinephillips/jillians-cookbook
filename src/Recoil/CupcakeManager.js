import {
    useRecoilState,
  } from 'recoil';
  
import { 
    Post,
    Recipe,
    darknessColor,
    darknessFont,
    darknessBackground,
    darknessNavColor,
    cupcakes
 } from './atoms';
import React from 'react';
  

export function AddCupcake() {
    const [whichPost,setWhichPost] = useRecoilState(Post);
    const [whichRecipe,setWhichRecipe] = useRecoilState(Recipe);
    const [color, changeColor] = useRecoilState(darknessColor);
    const [font, changeFont] = useRecoilState(darknessFont);
    const [background, changeBackground] = useRecoilState(darknessBackground);
    const [navBackground, changeNavBackground] = useRecoilState(darknessNavColor);
    const [cupcake, addCupcake] = useRecoilState(cupcakes);

 function manageCupcakes() { 
     
    if(cupcake < 20) {
        addCupcake((cake) => cake + 1)
    } 

    switch(cupcake) {
        case 1: 
            setWhichRecipe("Recipe2");
        break;
        case 2: 
            setWhichRecipe("Recipe3");
        break;
        case 3:
            setWhichRecipe("Recipe4");
        break;
        case 4:
            setWhichRecipe("Recipe5");
            setWhichPost("Post1");
        break;
        case 5:
            setWhichRecipe("Recipe6");
        break;
        case 6:
            setWhichRecipe("Recipe7");
        break;
        case 7:
            setWhichRecipe("Recipe8");
        break;
        case 8:
            setWhichRecipe("Recipe9");
            setWhichPost("Post2");
        break;
        case 9:
            setWhichRecipe("Recipe10");
        break;
        case 10:
            setWhichRecipe("Recipe11");
            changeColor("#290000");
            changeFont("sans-serif")
            changeBackground("#820E0E")
            changeNavBackground("#590B0B");
        break;
        case 11:
            setWhichRecipe("Recipe12");
        break;
        case 12:
            setWhichRecipe("Recipe13");
            setWhichPost("Post3");
        break;
        case 13:
            setWhichRecipe("Recipe14");
        break;
        case 14:
            setWhichRecipe("Recipe15");
        break;
        case 15:
            setWhichRecipe("Recipe16");
        break;
        case 16:
            setWhichRecipe("Recipe17");
            setWhichPost("Post4");
        break;
        case 17:
            setWhichRecipe("Recipe18");
        break;
        case 18:
            setWhichRecipe("Recipe19");
        break;
        case 19:
            setWhichRecipe("Recipe20");
        break;
        case 20:
            setWhichPost("Post5");
            changeColor("#C41616");
            changeFont("'MedievalSharp', cursive")
        break;
        default:
            setWhichRecipe("Recipe1");
      }
    }

      return (
          <div>
        <button onClick={() => manageCupcakes()}>
          Click to Add a Cupcake - Cupcakes: {cupcake}
        </button>
        <ul>
            <li>WhichRecipe = {whichRecipe}</li>
            <li>WhichPost = {whichPost}</li>
            <li>NavBackground = {navBackground}</li>
            <li>color = {color}</li>
            <li>backgroundColor = {background}</li>
            <li>ontFamily = {font}</li>
        </ul>
        </div>
      );
}