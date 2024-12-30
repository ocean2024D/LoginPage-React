

import React, { useState } from "react";


function Login() {
 

  return (
  


  
        <div className="wrapper">
          <div className="login-box">
        <div className="Login-header">
          <span>Login</span>
        </div>
        <div className="input_box">
<input type="text" id="user" className="input-field" required />
<label htmlFor="user" className="label">Username</label>
<i className="bx bx-user icon"></i>
        </div>
        <div className="input_box">
<input type="text" id="pass" className="input-field" required />
<label htmlFor="pass" className="label">Password</label>
<i className="bx bx-lock-alt icon"></i>
        </div>
<div className="remember-forgot">
  <div className="remember-me">
  <input type="checkbox"  id="remember"/>
  <label htmlFor="remember">Remember me</label>
  </div>
</div>

<div className="forgot">
  <a href="#">Forgot password?</a>
</div>
      
<div className="input_box">
  <input type="submit" className="input-submit" value="Login" />
  </div>
  <div className="register">
    <span> Don't have an accout? <a href="#">Register</a></span>
  </div>
  </div>
        </div>
    
      

  )
}

export default Login;
