import {React, useState} from "react";
import {
    useRecoilState,
  } from 'recoil';
import Typing from 'react-typing-animation';
import { cupcakes, goodEnding, theScream } from "../Recoil/atoms";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
function Exorcism() {
    document.title = "YOUCANNOTREMOVETHEETERNAL";

    const [cupcake, addCupcake] = useRecoilState(cupcakes);
    const [scream, addScream] = useRecoilState(theScream);
    const [bestend, setBestEnd] = useRecoilState(goodEnding);
    const [removeButton, removeButtonReveal] = useState("hidden");
    const [revealContent, changeRevealContent] = useState("hidden");
    const [revealScream, changeRevealScream] = useState("displayNone");
    const [hideConvo, changeHideConvo] = useState();
    const [ending, showEnding] = useState('displayNone');

    function RemoveCupcake(x) {
            addCupcake((cake) => cake - x)
        console.log(`GLUTTONY STOLE ${x} CUPCAKE(S). YOU HAVE ${cupcake-x} cupcake(s) remaining!`)
    }    
    
    function revealButton() {
        removeButtonReveal("visible");
    }

    return (
        <div>
      <div className={`exorcism ${hideConvo}`}>
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

        <Popup
    trigger={<button className={`${removeButton}`}>Delete GLUTTONY</button>}
    modal
    nested
    closeOnDocumentClick={false}
  >
    {close => (
      <div className="modal">
        <span className="exorcism">
            <h2>LISTEN TO ME. I CAN GRANT YOU LIFE EVERLASTING</h2>
            <button onClick={() => changeRevealContent("visible")}>Delete GLUTTONY</button>
            <span className={`${revealContent}`}>
              <h2>NO. FOOL. YOU WILL PAY FOR THIS</h2>
            </span>
        </span>
        <div className="actions">
          <button
            className={`button ${revealContent}`}
            onClick={() => {
              close();
              changeRevealScream("displaySome");
              changeHideConvo("displayNone");
              addScream(true);
              RemoveCupcake(10);
              console.log({scream})
            }}
          >
            EXORCISE
          </button>
        </div>
      </div>
    )}
  </Popup>

      </div>
      <div className={`${revealScream} exorcism`}>
      <article
             onClick={() => {
              changeRevealScream("displayNone");
              addScream(false);
              showEnding(false);
              setBestEnd(true);
              console.log(bestend)
            }}>
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLICKTOKILLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
         AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </article>
      </div>
      <div className={`exorcism ${ending} finalspeech`}>
          <p>
              You... You did it. You killed it. Thank you. 
          </p>
          <p> 
              I wish I had been less foolish, less 
              blind. I wish I could reach out to my father, tell him that I love him and that I'll 
              be seeing Mom soon. I wish I could know what's out there, but I still can't see 
              anything. I can feel myself fading, but I have no idea where I'm headed. If I could 
              just see her one more time, just for a second, that'd be nice. I wonder if I could 
              touch her hand, or if she's not... real anymore like I'm not real. I hope not. 
              Sometimes in my dreams, I can still feel the touch of her hand, and I want to believe 
              that it's as real as my letter to you here. Temporary, fleeting, and very unbelievable, 
              but real.
          </p>
          <p>
             I think I'll leave this website up as it is, the gross demonic stuff and all. The beast 
             is very gone, and although a lot of them are a mess, the recipes are a reminder of all 
             the fun I got to have before it was too late. It can also be a caution to unfortunates 
             like me, although all I can do is pray that there aren't any more creatures like the one 
             we just deleted out here in the dark. That it was a fluke, an abberation.
          </p>
          <p>
             I'm going to let myself leave now. Someone is calling me out there, in the light that's 
             beginning to glow in the far reaches of the darkness. I don't want to believe that it 
             sounds like her voice, but it <i>does</i>. Here's hoping. Thank you again, kind stranger. 
             Stay safe.
          </p>
          <p style={{textAlign:"center"}}>Jillian</p>
      </div>
      </div>
    );
  }
 
export default Exorcism;