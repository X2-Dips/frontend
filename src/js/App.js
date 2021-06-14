import React, { Component } from "react";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";

import Main from "./pages/main/Main";
import Signuptest from "./pages/user/signup/Signup"
import Logintest from "./pages/user/login/Login"
import OAuth2RedirectHandler from './pages/user/oauth2/OAuth2RedirectHandler';
import NotFound from './pages/header/NotFound';
import LoadingIndicator from './pages/header/LoadingIndicator';
import { getCurrentUser } from './pages/util/APIUtils';
import { ACCESS_TOKEN } from './pages/constants';
import PrivateRoute from './pages/header/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { Redirect } from "react-router";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    })
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    return  <Redirect  to="/logintest" />
    Alert.success("You're safely logged out!");
   
    
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render(){
    if(this.state.loading) {
      return <LoadingIndicator />
    }

  return (
    <div className="grid-container">
      <Header  authenticated={this.state.authenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
      <Main />
      <Footer />
      
      
      
      
    </div>
  );
}
}

export default App;
