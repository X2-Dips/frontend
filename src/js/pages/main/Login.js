import React from "react";
import { Link } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import { FcRight } from "react-icons/fc";

import * as AiIcons from "react-icons/ai";


const Login = () => {
  
  return (
    <div className="container">
      <div className="form-center ">
        <h1>Login</h1>
        <p className="flexBox jcc">
          Don’t have an account?
          <Link to="/signup" className="flexBox">
            <span>Register</span>
            <span>
              <RiLoginCircleFill />
            </span>
          </Link>
        </p>

        <form action="" className="login-form">
        
          {/* <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="E-mail*" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="text" placeholder="Password*" id="password" required />
          </div>
          <h5>Fields that are marked with * sign are required.</h5>
          <div className="form-group">
            <input type="button" value="Login" className="inp-btn" />
          </div>
          <h4 className="flexBox jcc">
            Forgot your password?
            <Link to="/signup" className="flexBox">
              <span>Reset password</span>
              <span>
                <FcRight />
              </span>
            </Link>
          </h4> */}
          {/* setUpRecaptcha =() =>{
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {'size': 'invisible','callback': (response) => {
              onSignInSubmit();
                  },
               }
               );
              };

              onSignInSubmit=() => {
                const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
              }


  
   */}
        

          
          <div className="form-group">
        
          <span className="mobi" >India(+91) </span>
           <input type="number" className="loginmobile" placeholder="Mobile Number" />
           <br></br>
           <span><h5>We'll call or text you to confirm your number.Standard message and data rates apply.</h5>
</span>
<br></br>
 <input type="button" value="Continue" className="inp-btn" />
          </div>

          {/* <form action="" className="login-form">
          <div className="form-group">
           <span className="mobi>" >India(+91) </span>
           <input type="text" className="loginmobile" placeholder="Mobile Number"/>
           <br></br>
           <span>We will call</span>


          </div> */}
        
          <h3>________________________or______________________</h3>
          <div className="form-group">
            {/* <input type="button" className="input-btn"><AiIcons.AiFillMail/>Email</input> */}
            {/* <button className="btn-block_btn-outline-dark"><AiIcons.AiFillMail/>   Email</button> */}
            <button className="btn-btn-block_btn-outline-dark"><AiIcons.AiFillMail/>               Mail              </button>
          </div>
          <div className="form-group">
          
          {/* <input type="button" value="Facebook" className="input-btn"/>  */}
          {/* <input type="button" className="input-btn"><AiIcons.AiFillFacebook/> value="Facebook"</input> */}
            <button className="btn-btn-block_btn-outline-dark"><AiIcons.AiFillFacebook/>               Facebook               </button>
          </div>
          <div className="form-group">
            {/* <input type="button" value="Google" className="input-btn" /> */}
            <button className="btn-btn-block_btn-outline-dark"><AiIcons.AiOutlineGoogle/>   Google</button>
          </div>
          <div className="form-group">
            {/* <input type="button" value="Apple" className="input-btn" /> */}
            <button className="btn-btn-block_btn-outline-dark"><AiIcons.AiOutlineApple/>   Apple</button>
          </div>
          <h4 className="flexBox jcc">
          Don’t have an account?
            <Link to="/signup" className="flexBox">
              <span>SignUp</span>
              <span>
                <FcRight />
              </span>
            </Link>
          </h4>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
