import {React, useState} from "react";
import {
  useRecoilState,
  useRecoilValue
} from 'recoil';
import { hideQuestions, potentialpass, potentialuser, username, password } from '../Recoil/atoms';
 
export function Login() {
    document.title = "Login";

    const [passattempt, setPassAttempt] = useRecoilState(potentialpass);
    const [userattempt, setUserAttempt] = useRecoilState(potentialuser);
    const user = useRecoilValue(username);
    const pass = useRecoilValue(password);
    const [hideQs, setHideQs] = useRecoilState(hideQuestions);
    const [color, setColor] = useState();
    const [otherColor,setOtherColor] = useState();


    function CheckCorrectness() {

      if (user === userattempt) {
        setColor('green')

     } if (pass === passattempt) {
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

    return (
      <div className="loginPage">
        <h2>LOGIN</h2>

        <div className="signIn">
          <label for="username" id="usertitle">USERNAME: </label>
          <input type="text" style={{backgroundColor: color}} id="username" name="username" onChange={(event) => setUserAttempt(event.target.value)}></input>

          <label for="password" id="userpass">PASSWORD: </label>
          <input type="text" style={{backgroundColor: otherColor}} id="password" name="password" onChange={(event) => setPassAttempt(event.target.value)}></input>
          <button onClick={() => CheckCorrectness()} id="submitLogin">Submit</button>
        </div>

        <input type="checkbox" id="rememberme" name="rememberme" value="Yes"></input>
<label for="rememberme"> Remember Me</label>
        <button className="fakeLink" onClick={() => setHideQs('revealed')}>Forgot Password?</button>

        <p>Tester: {userattempt} = {user}, {passattempt} = {pass},</p> 

        <div className="securityQuestions">
        <p id="hintsection" className={`${hideQs}`}>
          In order to sign in once your password is forgotten, you must answer your pre-written 
          security questions. These should be easy to remember, but something that an ordinary 
          person would not know about you.
        </p>
        </div>
      </div>
    );
  }

export default Login;