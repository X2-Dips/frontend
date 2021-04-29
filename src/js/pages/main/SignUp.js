import React from "react";
// import { Link } from "react-router-dom";

import { RiLoginCircleFill } from "react-icons/ri";
const SignUp = () => {
  return (
    <div className="container">
      <div className="form-center ">
        <h1>Sign Up</h1>
        <p>Register yourself to access all services.</p>

        <form action="" className="sign-up-form">
          <div className="form-col-div">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                placeholder="First Name*"
                id="firstName"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                placeholder="Last Name*"
                id="lastName"
                required
              />
            </div>
            
            
      </div>
      <h5>Make sure it matches the name on your government ID.</h5>
          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="E-mail*" id="email" required />
          </div>
          <h5>We'll email you trip confirmations and receipts.</h5>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="text" placeholder="Password*" id="password" required />
          </div>
          <h5>By selecting Agree and continue below, I agree to RentPayRooms's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
</h5>
          {/* <h5>Fields that are marked with * sign are required.</h5> */}
          <div className="form-group">
            <input type="button" value="Agree and Continue" className="inp-btn" />
          </div>
          <h4 className="flexBox jcc">
            Already have an account?
            <div to="/login" className="flexBox">
              <span>Sign in</span>
              <span>
                <RiLoginCircleFill />
              </span>
            </div>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
