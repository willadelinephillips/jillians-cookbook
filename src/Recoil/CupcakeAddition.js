import {React, useState} from "react";
import {
    useRecoilState,
    useRecoilValue
  } from 'recoil';

import { 
  jilliansicon,
} from "../img/index";
  
import { 
    Post,
    Recipe,
    darknessColor,
    darknessFont,
    darknessBackground,
    darknessNavColor,
    cupcakes,
    goodEnding
 } from './atoms';

import useSound from "use-sound";
import Recording_8 from "../Audio/Recording_8.mp3";
  

export function AddCupcake() {
    const [whichPost,setWhichPost] = useRecoilState(Post);
    const [whichRecipe,setWhichRecipe] = useRecoilState(Recipe);
    const [color, changeColor] = useRecoilState(darknessColor);
    const [font, changeFont] = useRecoilState(darknessFont);
    const [background, changeBackground] = useRecoilState(darknessBackground);
    const [navBackground, changeNavBackground] = useRecoilState(darknessNavColor);
    const [cupcake, addCupcake] = useRecoilState(cupcakes);
    const end = useRecoilValue(goodEnding);
    const [seeCupcake,unseeCupcake] = useState()
    const [playevil] = useSound(Recording_8);

 function ManageCupcakes() { 

    playevil()
    unseeCupcake("hidden")
     
    if(cupcake < 20 && !end) {
        addCupcake((cake) => cake + 1)
    } 

    console.log(whichPost);
    console.log(whichRecipe);
    console.log(color);
    console.log(font);
    console.log(background);
    console.log(navBackground);

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
        <input type="image" width="3%" src={jilliansicon} alt="cupcake" 
          onClick={() => {ManageCupcakes()}}  
          style={{visibility:seeCupcake}}/>
        </div>
      );
}