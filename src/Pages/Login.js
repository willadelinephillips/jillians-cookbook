import {React, useState} from "react";
import {
  useRecoilState,
  useRecoilValue
} from 'recoil';
import { 
  hideQuestions, 
  potentialpass, 
  potentialuser, 
  username, 
  password, 
  securityUser } from '../Recoil/atoms';
 
export function Login() {
    document.title = "Login";

    const [passattempt, setPassAttempt] = useRecoilState(potentialpass);
    const [userattempt, setUserAttempt] = useRecoilState(potentialuser);
    const [security, setSecurity] = useRecoilState(securityUser);
    const user = useRecoilValue(username);
    const pass = useRecoilValue(password);
    const [hideQs, setHideQs] = useRecoilState(hideQuestions);
    const [otherColor,setOtherColor] = useState();
    const [disableInput,setDisableInput] = useState();
    const [showCheck,setShowCheck] = useState();

    function CheckCorrectness() {

     if (user === userattempt) {
        setDisableInput("true")
        setShowCheck("visible")
     } 
     
     if (pass === passattempt) {
       setOtherColor('green')
     }

      if (user === userattempt && pass === passattempt) {
          console.log("Yeet!")
      } else if (user !== userattempt || pass !== passattempt) {
          console.log("Yeet :/")
      } else {
        console.log("How. How even")
      }
    }

    function CheckUser(x) {
      if(x === "JillianEvans") {
        setSecurity("revealed");
      }
    }

    return (
      <div className="loginPage">
        <h2>LOGIN</h2>

        <div className="signIn">
          <label for="username" id="usertitle">USERNAME: </label>
          <input type="text" readOnly={disableInput} id="username" name="username" onChange={(event) => setUserAttempt(event.target.value)}></input>
          <b className="correctCheck" style={{ visibility:showCheck, }}>✔</b>

          <label for="password" id="userpass">PASSWORD: </label>
          <input type="text" style={{backgroundColor: otherColor}} id="password" name="password" onChange={(event) => setPassAttempt(event.target.value)}></input>
          <button onClick={() => CheckCorrectness()} id="submitLogin">Submit</button>

          <input type="checkbox" id="rememberme" name="rememberme" value="Yes"></input>
          <label for="rememberme"> Remember Me</label>
        </div>

        <button className="fakeLink" onClick={() => setHideQs('revealed')}>Forgot Password?</button>

        <div className="securityQuestions">
        <p id="hintsection" className={`${hideQs}`}>
          In order to sign in once your password is forgotten, you must answer your pre-written 
          security questions. Please input your username:
          <br/>
          <input type="text" onChange={(event) => CheckUser(event.target.value)}></input>
          <br/>
          <span id="securitySection" className={`${security}`}>
            Question One: What is your favorite TV show?
            <input type="text"></input>
          </span>
        </p>
        </div>
      </div>
    );
  }

export default Login;