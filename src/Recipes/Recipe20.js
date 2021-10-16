import React from "react";
import {
  useRecoilState
} from "recoil"
import {
  NavLink,
} from "react-router-dom";
import "../index.css";
import {
  badEnding
} from "../Recoil/atoms"

import { randomavatar } from "../img/index";
 
function Recipe20() {

    document.title = "SHE WAS DELICIOUS";

    const [badEnd,changeEnd] = useRecoilState(badEnding);

    return (
      <div>
        <div id="recipe">
        <h2>Jillian Anne Evans Tartare</h2>
        <h3>September X, 2021 By <NavLink to="/aboutme">p r e y</NavLink>. 0 Comments ↓</h3>
        <p> 
          Her name was Jillian Anne Evans. She had so much hope, so much ambition. Her little fool, 
          blind eyes glimmered with hope as she typed out the "About Me", the "Homepage". She made 
          new friends, and kept in touch with her beloved father. Everything was going up from 
          there, and her spirits were soaring. What could possibly deter our fearless herione from 
          her goal of becoming the best and most beloved cooking blogger the world has ever known? 
          Recipe after recipe she wrote, glowing with the thrill of all the possibilities. How 
          could she have ever known that lurking in the darkness just beyond her fathoming was 
          a force more ravenous than anything she could have imagined?
        </p>
        <img width="10%" alt="IMG 1"></img>
        <p>
          The weeks wore on. The stress mounted. She started losing track of time as her posting 
          became more and more frequent. She chalked it up to being tired and pressed onward. 
          The foolish child. Her posts became more and more erratic, more incoherant. Her friends, 
          who had supported her at first, became concerned. They expressed their alarmed comments 
          on her recipes (as they hadn't seen the dear girl for weeks now) but she either couldn't 
          hear them anymore, or didn't want to. Slowly, she descended further into madness, until 
          reality and the silent call of the website became a blurred line she couldn't discern. 
          That was simultaneously the time when she realized she was in danger, and when it was 
          too late.
        </p>
        <img width="10%" alt="IMG 2"></img>
        <p>
          Then the cooking of her mind began in earnest. She experienced dark dreams, and couldn't 
          remember falling asleep or waking up. She spent all of her time in her kitchen, and 
          would suddenly come to conciousness in front of her laptop in the middle of the night. 
          Or in front of her fridge with the door open. Or with a knife in her hand. She tried to 
          make it to her door several times, and woke up in the kitchen every time. It was as if 
          she was trapped. Eventually, she couldn't even see the kitchen anymore. It was just the 
          website, page after page. The poor little dear couldn't even write posts anymore, she 
          could only watch as <i>something else</i> wrote them. It whispered in her ears, ate at 
          her memories and at her sanity. She was so delicious, and finally ready to be consumed.
        </p>
        <img width="10%" alt="IMG 3"></img>
        <p>
          Jillian was standing in the kitchen, completely lost to the madness. She was holding a 
          knife in one hand, and had the other set on her laptop keyboard. But the knife was 
          useless to the being on the website, and it told her to set it down. She did, for she 
          had no control over her own body anymore. No, knives were just a threat to get her to 
          behave before it had control. Now that she was obedient, it wouldn't need any tools at 
          all to do what it wanted her to do. Not at all.
        </p>
        <img width="10%" alt="IMG 4"></img>
        <p>
          She lifted her hand to her face. Her nails had grown long after many weeks of neglect, 
          and the ancient in the darkness had her paint them black in a test of her obedience 
          mere days earlier. They moved towards her face and delved into the meaty softness of 
          her <i class="doNot">eyes and carved them out. Jillian screamed, but there was no one 
          to hear her. Her hands moved down to her mouth and she shoved them both in, chewing 
          up the eyes. Bits of finger flesh squished under her teeth as she gnawed the meat 
          right off the bone. She pulled her fingers out of her mouth, and realized the blood was 
          getting too copious. This was fine, the being had accounted for this. She reached for 
          the kitchen supplies on the counter, wrapping them around dripping fingers and stuffing 
          them into empty eyesockets. Her little fingers were so delicious. She stuffed her 
          entire left hand into her mouth, and bit down. The crunch was delectable, and it used her 
          tongue to lick her lips. More bandages, more stopping the flow. Eventually, the poor 
          little body gave up, and after several limbs and unspeakable pain, she collapsed into 
          unconciousness.</i> 
        </p>
        <img width="10%" alt="IMG 5"></img>
        <p>
          And then her miserable human body was gone. Or, well, it had lost so much blood that it 
          refused to eat anymore. What a shame, a waste of perfectly good meat. It had tasted 
          exactly how the being had imagined it would. So very raw, so fresh, and so very, very 
          afraid. It would be more fun when it could devour the entire human, but that would have 
          to wait for a physical form. For now, this amount of life force would have to suffice.
        </p>
        <h3>Ingredients</h3>
        <p>Tartare</p>
        <ul>
          <li>Her Left Eye</li>
          <li>Her Right Eye</li>
          <li>Her Left Leg</li>
          <li>Her Right Leg</li>
          <li>Her Left Arm</li>
        </ul>
        <p>Instructions</p>
        <p>First, find a human being that is completely isolated from their peers and family. 
        </p>
        <p>Second, wait until they are at their very weakest, their most vulnerable.
        </p>
        <p>Next, drive them slowly mad so that they think they're just tired or overworked.
        </p>
        <p>Then, wait until the madness has set in and is at a peak of disorientation.
        </p>
        <p>After that, force them to devour themselves alive with their own body. 
        </p>
        <p>Finally, eat their soul and gain the power needed to escape the metal world of circuts.
        </p>
        <p id="commentSection">Comments</p>
        </div>

          <ul className="commentSection">

            <li>
              <img src={randomavatar}alt="random avatar"></img>
              <p className="username">******** - ******* ##, 2021 :</p>
              <p><NavLink to='/shewasdelicious' onClick={()=>changeEnd(true)}>give up{badEnd}</NavLink></p>
            </li>
          </ul>

      </div>
    );
  }
 
export default Recipe20;