import React, { Component } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { getCurrentUser, login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
// import SAlert from 'react-s-alert';
import Header from '../../header/Header';
import LoadingIndicator from '../../header/LoadingIndicator';
import { RiLoginCircleFill } from "react-icons/ri";
import  * as AiIcons from 'react-icons/ai'; 
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './Exlog.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            messages:'',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetLoginForm=this.resetLoginForm.bind(this);
    }

    resetLoginForm=()=>{
        this.setState(()=>this.initialState);
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

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {
            console.log(response);
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
              //  this.state.alerts=";
              this.setState({messages:"You're successfully logged in!"});
            this.props.history.push("/");
           window.location.reload();
            <LoadingIndicator />
            
          
            //
            
            console.log(this.props.CurrentUser);
            
        }).catch(error => {
            // SAlert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
           this.setState({email:''})
           this.setState({password:''});
            this.setState({messages:error.message+"!"});
            console.log(this.state.messages);
        });
    }
    
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                // SAlert.error(this.props.location.state.error, {
                //     timeout: 5000
                // });
                //this.state.alerts=this.props.location.state.error;
                this.setState({messages:this.props.location.state.error});
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }






    
    render() {

        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }



        return (
                
            <div className="container">
      <div className="form-center ">
        <h1>Login</h1>
        <p>Login yourself to access all services.</p>

        <form onSubmit={this.handleSubmit} className="sign-up-form">

      <h5>Make sure it matches the name on your government ID.</h5>
          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="E-mail*" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
          </div>
          <h5>We'll email you trip confirmations and receipts.</h5>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" placeholder="Password*" name="password" id="password" value={this.state.password} onChange={this.handleInputChange} required />
          </div>
          <h5>By selecting Agree and continue below, I agree to RentPayRooms's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
</h5>
          {/* <h5>Fields that are marked with * sign are required.</h5> */}
          
          <div className="form-group">
            <input type="submit" value="Login" className="inp-btn" />
          </div>
          <span  name="messages" onChange={this.handleInputChange}  className="messg">{this.state.messages}</span>
          <h4 className="flexBox jcc">
            Don't have an account?
            <div to="/Signuptest" className="flexBox">
              <Link to ="/signuptest">Sign Up</Link>
              <span>
                <RiLoginCircleFill />
              </span>
            </div>
          </h4>
        </form>
      </div>
    </div>
        );
    }
}
export default LoginForm;