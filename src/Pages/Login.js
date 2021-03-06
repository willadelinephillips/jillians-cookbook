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
  showPassword, 
  securityUser } from '../Recoil/atoms';

import { useHistory } from "react-router-dom";
 
export function Login() {
    document.title = "Login";

    const history = useHistory();

    const routeChange = () =>{ 
      history.push(`exorcism`);
    }

    const [passattempt, setPassAttempt] = useRecoilState(potentialpass);
    const [userattempt, setUserAttempt] = useRecoilState(potentialuser);
    const [security, setSecurity] = useRecoilState(securityUser);
    const [hideQs, setHideQs] = useRecoilState(hideQuestions);
    const [showPass,setShowPass] = useRecoilState(showPassword);

    const user = useRecoilValue(username);
    const pass = useRecoilValue(password);
    
    const [otherColor,setOtherColor] = useState();
    const [disableInput,setDisableInput] = useState();
    const [disableInput1,setDisableInput1] = useState();
    const [disableInput2,setDisableInput2] = useState();
    const [disableInput3,setDisableInput3] = useState();
    const [showCheck,setShowCheck] = useState();
    const [showCheck1,setShowCheck1] = useState();
    const [showCheck2,setShowCheck2] = useState();
    const [showCheck3,setShowCheck3] = useState();

    function CheckCorrectness() {

     if (user === userattempt) {
        setDisableInput(true)
        setShowCheck("visible")
     } 
     
     if (pass === passattempt) {
       setOtherColor('green')
     }

      if (user === userattempt && pass === passattempt) {
          console.log("Yeet!")
          routeChange()
      } else if (user !== userattempt || pass !== passattempt) {
          console.log("Yeet :/")
      } 
    }

    function WinCondition() {
      if (disableInput1 && disableInput2 && disableInput3 ) {
        setShowPass("visible")
      }
    }

    return (
      <div className="loginPage">
        <h2>LOGIN</h2>

        <div className="signIn">
          <label htmlFor="username" id="usertitle">USERNAME: </label>
          <input type="text" readOnly={disableInput} id="username" name="username" onChange={(event) => setUserAttempt(event.target.value)}></input>
          <b className="correctCheck" style={{ visibility:showCheck, }}>???</b>

          <label htmlFor="password" id="userpass">PASSWORD: </label>
          <input type="text" style={{backgroundColor: otherColor}} id="password" name="password" onChange={(event) => setPassAttempt(event.target.value)}></input>
          <button onClick={() => CheckCorrectness()} id="submitLogin">Submit</button>

          <input type="checkbox" id="rememberme" name="rememberme" value="Yes"></input>
          <label htmlFor="rememberme"> Remember Me</label>
        </div>

        <button className="fakeLink" onClick={() => setHideQs('revealed')}>Forgot Password?</button>

        <div className="securityQuestions">
        <span id="hintsection" className={`${hideQs}`}>
          In order to sign in once your password is forgotten, you must answer your pre-written 
          security questions. Please input your username:
          <br/>
          <input type="text" onChange={(event) => {
              if (event.target.value === "JillianEvans") {setSecurity("revealed");}}}></input>
          <br/>
          <ul id="securitySection" className={`${security}`}>
            <li>Question One: What is your favorite TV show?
            <input type="text" name="q1" readOnly={disableInput1}
            onChange={(event) => {
              if (event.target.value === "downtonabbey")
               {setDisableInput1(true); setShowCheck1("visible")}}}></input>
            <b className="correctCheck" style={{ visibility:showCheck1, }}>???</b>
            </li>
            <li>Question Two: What is your quest?
            <input type="text" name="q2" readOnly={disableInput2}
            onChange={(event) => {
              if (event.target.value === "thegrail") 
               {setDisableInput2(true); setShowCheck2("visible")}}}></input>
            <b className="correctCheck" style={{ visibility:showCheck2, }}>???</b>
            </li>
            <li>Question Three: What is wingspan of an unladen swallow?
            <input type="text" name="q3" readOnly={disableInput3}
            onChange={(event) => {
              if (event.target.value === "africanoreuropean")
               {setDisableInput3(true); setShowCheck3("visible")}}}></input>
            <b className="correctCheck" style={{ visibility:showCheck3, }}>???</b>
            </li>
            <button onClick={() => {WinCondition()}}>Submit</button>
          </ul>
          <p className={`${showPass}`}>Congratulations. Your password is: imissyoumom</p>
        </span>
        </div>
      </div>
    );
  }

export default Login;