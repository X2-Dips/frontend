import React, { Component } from 'react';
import './Exlog.css';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL} from '../../constants';

import { Link, Redirect } from 'react-router-dom'

import LoadingIndicator from '../../header/LoadingIndicator';

import '../../../../../src/index.css';
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillMail} from "react-icons/ai";



//node_modules/bootstrap/dist/css/bootstrap.min.css



class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                // Alert.error(this.props.location.state.error, 
                //     {
                //     timeout: 5000
                // });
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
            <div className="login-container">
           
            <span></span>
                <div className="login-content">
                <h3 className="login-title">Login </h3>
                    <SocialLogin />
                    
                    
                    <span className="signup-link spans">New user? <Link to="/signuptest">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {

  


    //<span className="mobi" >India(+91) </span>

    render() {
        return (
            <div className="social-login">
            <br/>
            
           
            <div className="loginlabel">
            <label>India(+91)</label>
            
            <div className="form-group">
           <input type="text" className="loginmobile" placeholder=" Mobile Number"/>
           </div>
           </div>
           
           <br/>
           <input type="submit" value="Continue" className="logbtn col-sm-4 "/>
           <br/>
           <h3 className="spanz">We'll call or text you to confirm your number.Standard message and data rates apply.</h3>

<br></br>
                
                <a  href={GOOGLE_AUTH_URL} className="google_con">
                    {/* <img  src={googleLogo} alt="Google"  className="google_img"/> */}
                    <FcGoogle style={{marginBottom:"-1px"}}/>&nbsp;&nbsp; Log in with Google</a>
                    <br/><br/><br></br>
                <a  href={FACEBOOK_AUTH_URL} className="fb_con">
                    {/* <img src={fbLogo} alt="Facebook"  className="google_img" /> */}
                    <AiFillFacebook style={{marginBottom:"-1px"}}/>&nbsp;&nbsp; Log in with Facebook</a>
                    <br/><br/><br></br>
                <Link to="/loginform" {...this.props} className="git_con">
                    <AiFillMail style={{marginBottom:"-1px"}}/>&nbsp;&nbsp; Log in with Email</Link>
                    <br/><br/><br></br>
            </div>
        );
    }
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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

        const loginRequest = Object.assign({}, this.state);

        Login(loginRequest)
        .then(response => {
            console.log(response);
            // localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            localStorage.setItem( response.accessToken);
            // Alert.success("You're successfully logged in!");
            
            this.props.history.push("/");
            <LoadingIndicator />
        window.location.reload();
            //
            
            console.log(this.props.CurrentUser);
            
        }).catch(error => {
            // Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
}
    





export default Login;
