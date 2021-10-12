import {
    useRecoilState,
  } from 'recoil';
  
import { 
    Corruption,
    darknessColor,
    Post,
    Recipe,
 } from './atoms';
import React from 'react';
  

export function DarknessManager() {
    const [darkness, setDarkness] = useRecoilState(Corruption);
    const [whichPost,setWhichPost] = useRecoilState(Post);
    const [whichRecipe,setWhichRecipe] = useRecoilState(Recipe);
    const [color, changeColor] = useRecoilState(darknessColor);

 function manageDarkness() { 
     
    if(darkness < 100) {
        setDarkness((dark) => dark + 5)
    } 

    switch(darkness) {
        case 0: 
            setWhichRecipe("Recipe2");
        break;
        case 5: 
            setWhichRecipe("Recipe3");
        break;
        case 10:
            setWhichRecipe("Recipe4");
        break;
        case 15:
            setWhichRecipe("Recipe5");
            setWhichPost("Post1");
        break;
        case 20:
            setWhichRecipe("Recipe6");
        break;
        case 25:
            setWhichRecipe("Recipe7");
        break;
        case 30:
            setWhichRecipe("Recipe8");
        break;
        case 35:
            setWhichRecipe("Recipe9");
            setWhichPost("Post2");
        break;
        case 40:
            setWhichRecipe("Recipe10");
        break;
        case 45:
            setWhichRecipe("Recipe11");
            changeColor("#662C40");
        break;
        case 50:
            setWhichRecipe("Recipe12");
        break;
        case 55:
            setWhichRecipe("Recipe13");
            setWhichPost("Post3");
        break;
        case 60:
            setWhichRecipe("Recipe14");
        break;
        case 65:
            setWhichRecipe("Recipe15");
        break;
        case 70:
            setWhichRecipe("Recipe16");
        break;
        case 75:
            setWhichRecipe("Recipe17");
            setWhichPost("Post4");
        break;
        case 80:
            setWhichRecipe("Recipe18");
        break;
        case 85:
            setWhichRecipe("Recipe19");
        break;
        case 90:
            setWhichRecipe("Recipe20");
        break;
        case 95:
            setWhichPost("Post5");
            changeColor("#C41616");
        break;
        case 100:
            //do not put anything here
        break;
        default:
            setWhichRecipe("Recipe1");
      }
    
    console.log(whichPost);
    console.log(whichRecipe);}

      return (
          <div>
        <button onClick={() => manageDarkness()}>
          Click to Corrupt - Corruption Percent: {darkness}%
        </button>
        <p>color = {color} backgroundColor = fontFamily = </p>
        </div>
      );
}