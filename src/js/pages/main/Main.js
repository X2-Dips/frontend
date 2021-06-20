import React, { Component } from "react";
import { Route, Switch } from "react-router";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import Services from "./Services";
import Login from "./Login";
import SignUp from "./SignUp";
import AddProperty from "./AddProperty"

import PostProperty from "./PostProperty";


 import Hostel from "./Hostel";

import Rent from "./Rent";

import Signuptest from "../user/signup/Signup"
import Logintest from "../user/login/Login"
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../header/NotFound';
import LoadingIndicator from '../header/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../header/PrivateRoute';
// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Header from '../header/Header';
import LoginForm from '../user/login/LoginForm';
import Profile from './Profile';





class Main extends Component {

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
      //currentUser: null
    });
    // Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }
  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }







  return (
    <div className="main">
      <div className="container-full h-100">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" exact component={Product} />
          <Route path="/rent/:id" exact component={Rent}/>
       
         
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/add_property" exact component={AddProperty}/>
          <Route path="/addpropertyform" exact component={PostProperty}/>
          {/* <Route path="/locality_details" exact component={LocalityDetails}/>
          <Route path="/rental_details" exact component={RentalDetails}/>
          <Route path="/amenities_details" exact component={Amenities}/>
          <Route path="/photos" exact component={PhotosVideos}/> */}
          <Route path="/hostel" exact component={Hostel}/>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signuptest"
              component={Signuptest}></Route>
          <Route path="/logintest"
             component={Logintest} authenticated={this.state.authenticated} currentUser={this.state.currentUser} loading={this.state.loading} loadCurrentlyLoggedInUser={this.loadCurrentlyLoggedInUser}></Route>
             <Route path="/loginform"
             component={LoginForm} authenticated={this.state.authenticated} currentUser={this.state.currentUser} loading={this.state.loading} loadCurrentlyLoggedInUser={this.loadCurrentlyLoggedInUser}></Route>
          
             <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
             <Route path="/profile" component={Profile} name="antra"/>
         
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
};
};

export default Main;
