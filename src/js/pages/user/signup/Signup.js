import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom'
import { signup } from '../../util/APIUtils';

import Alert from 'react-s-alert';
import { RiLoginCircleFill } from "react-icons/ri";

class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    
                    
                    <SignupForm {...this.props} />
                    
                </div>
            </div>
        );
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName:'',
            name:'',
            email: '',
            dob:'',
            password: '',
            messages:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   
        this.state.name=this.state.firstName+" "+this.state.lastName;
        const signUpRequest = Object.assign({}, this.state);
        console.log(this.state.password.length);
      if(this.state.password.length<=8)
      {
        this.setState({messages:"Password must be atleast 8 characters long!"});
      }
        else{
        signup(signUpRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
            this.props.history.push("/logintest");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }
  }

    render() {
        return (
            
      <div className="form-center ">
        <h1>Sign Up</h1>
        <p>Register yourself to access all services.</p>

        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
          <div className="form-col-div">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                placeholder="First Name*"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                id="firstName"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                id="lastName"
                required
              />
            </div>
            </div>
         
          
          <div className="form-group">
            <label htmlFor="dob">D.O.B*</label>
            <input type="date" placeholder="dob*"  name="dob" value={this.state.dob}
            onChange={this.handleInputChange}  id="dob" required />
          </div>
      

      <h5>Make sure it matches the name on your government ID.</h5>
          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="E-mail*"  name="email" value={this.state.email}
            onChange={this.handleInputChange}  id="email" required />
          </div>
          <h5>We'll email you trip confirmations and receipts.</h5>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="text" placeholder="Password*" name="password" value={this.state.password}
            onChange={this.handleInputChange} id="password" required />
          </div>
          <h5>By selecting Agree and continue below, I agree to RentPayRooms's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
</h5>
          {/* <h5>Fields that are marked with * sign are required.</h5> */}
          <div className="form-group">
           
            <button type="submit" className="inp-btn">Agree and Continue</button>
          </div>
          <span  name="messages" onChange={this.handleInputChange}  className="messg">{this.state.messages}</span>
          <h4 className="flexBox jcc">
            Already have an account?
            <Link to="/logintest" className="flexBox">
              <span>Sign in</span>
              <span>
                <RiLoginCircleFill />
              </span>
            </Link>
          </h4>
        </form>
      </div>
         

        );
    }
}

export default Signup