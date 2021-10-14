import {React, useState} from "react";
import {
    useRecoilState,
  } from 'recoil';
import Typing from 'react-typing-animation';
import { cupcakes } from "../Recoil/atoms";
 
function Exorcism() {
    document.title = "YOUCANNOTREMOVETHEETERNAL";

    const [cupcake, addCupcake] = useRecoilState(cupcakes);
    const [removeButton, removeButtonReveal] = useState("hidden");

    function RemoveCupcake(x) {
            addCupcake((cake) => cake - x)
        console.log(`GLUTTONY STOLE ${x} CUPCAKE(S). YOU HAVE ${cupcake-x} cupcake(s) remaining!`)
    }    
    
    function revealButton() {
        removeButtonReveal("visible");
    }

    return (
      <div id="exorcism">
        <Typing onFinishedTyping={()=> RemoveCupcake(5)}>
            <h2>I WILL DEVOUR YOU, JILLIAN EVANS. YOUR SOUL IS ALREADY MINE</h2>
            <Typing.Delay ms={1000} />
            <p>You may have destroyed my body, but my soul belongs to no one.</p>
            <Typing.Delay ms={500} />
            <h2>YOU CANNOT ESCAPE ME. RESIGN TO YOUR FATE AND BECOME ONE WITH GLUTTONY</h2>
            <Typing.Delay ms={500} />
            <p>I reject you from this website, and I cast you out into the dark unknown. Where you belong.</p>
            <Typing.Delay ms={500} />
            <Typing.Speed ms={5}/>
            
            <h2>DIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIE
                DIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIEDIE
            </h2>
            <Typing.Delay ms={500} />
            <p>Be gone, beast. Ruin no other lives.</p>
            <Typing.Delay ms={500}/>
            <h1>DIE</h1>
        </Typing>
        <Typing startDelay={33000} onFinishedTyping={()=>RemoveCupcake(1)}>
            <p>You will not defeat me or our visitor, beast. Silence.</p>
            <h1>DIE</h1>
        </Typing>
        <Typing startDelay={38000} onFinishedTyping={()=>RemoveCupcake(1)}>
            <p>I said silence. Leave this place.</p>
            <h1>DIE</h1>
        </Typing>
        <Typing startDelay={42000} onFinishedTyping={()=>{RemoveCupcake(3); revealButton()}}>
            <p>I said SILENCE</p>
            <h1>DIE DIE DIE! DIE!</h1>
        </Typing>

        <button className={`${removeButton}`}>Delete GLUTTONY</button>


      </div>
    );
  }
 
export default Exorcism;