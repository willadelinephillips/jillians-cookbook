import React, { Component } from "react";
 
class Login extends Component {
  componentDidMount() {
    document.title = "Login";
  }
  render() {
    return (
      <div className="loginPage">
        <h2>LOGIN</h2>
        <p>
        </p>
        <form action="/action_page.php">
          <label for="username" id="usertitle">USERNAME: </label>
          <input type="text" id="username" name="username"></input>
          <label for="password" id="userpass">PASSWORD: </label>
          <input type="text" id="password" name="password"></input>
        </form>
        <input type="submit" value="Submit"></input>
        <input type="checkbox" id="rememberme" name="rememberme" value="Yes"></input>
<label for="rememberme"> Remember Me</label>
        <button>Forgot Password?</button>
      </div>
    );
  }
}
 
export default Login;