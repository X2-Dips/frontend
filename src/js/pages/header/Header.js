import React, { Component } from "react";

import Navbar from "./Navbar";
import Signuptest from "../user/signup/Signup"
import Logintest from "../user/login/Login"
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../header/NotFound';
import LoadingIndicator from '../header/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../header/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';







const Header=(props)=>{
 
      
  
  return (
    <div className="header">
      <div className="container-full h-100 header_fixed">
        <Navbar  authenticated={props.authenticated} currentUser={props.currentUser}   onLogout={props.handleLogout}  />
      </div>
    </div>
  );
};


export default Header;
