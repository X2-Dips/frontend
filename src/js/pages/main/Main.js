import React, { Component } from "react";
import { Route, Switch } from "react-router";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Services from "./Services";


import AddProperty from "./AddProperty"
import ProductScreen from "./screens/ProductScreen";
import PostProperty from "./PostProperty";
import Homeform from "./Homeform";
import LocalityDetails from "./LocalityDetails";
import RentalDetails from "./RentalDetails";
import Amenities from "./Amenities";
import PhotosVideos from "./PhotosVideos";
import Hostel from "./Hostel";
import Signuptest from "../user/signup/Signup"
import Logintest from "../user/login/Login"
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../header/NotFound';
import LoadingIndicator from '../header/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import LoginForm from '../user/login/LoginForm';
import Profile from './Profile';
import MyProperty from "./MyProperty";
import Dashboard from "../admin_dashboard/Dashboard";
import OrderList from "../admin_dashboard/OrderList";
import Customer from "../admin_dashboard/Customer";




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
      console.log("hello loads")
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
      this.props.history.push("/")
    }).catch(error => {
      console.log("not ok");
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
      
    });
    alert("You're safely logged out!");
    this.props.history.push("/")
    
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
          <Route path="/products" exact component={Products} />
          <Route path="/products/product:id" exact component={ProductScreen} />
          <Route path="/homeform" exact component={Homeform} />
          
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
         
          <Route path="/add_property" exact component={AddProperty}/>
          <Route path="/addpropertyform" exact component={PostProperty}/>
          <Route path="/locality_details" exact component={LocalityDetails}/>
          <Route path="/rental_details" exact component={RentalDetails}/>
          <Route path="/amenities_details" exact component={Amenities}/>
          <Route path="/photos" exact component={PhotosVideos}/>
          <Route path="/hostel" exact component={Hostel}/>
          
          <Route path="/signuptest"
              component={Signuptest}></Route>
          <Route path="/logintest"
             component={Logintest} authenticated={this.state.authenticated} currentUser={this.state.currentUser} loading={this.state.loading} loadCurrentlyLoggedInUser={this.loadCurrentlyLoggedInUser}></Route>
             <Route path="/loginform"
             component={LoginForm} authenticated={this.state.authenticated} currentUser={this.state.currentUser} loading={this.state.loading} loadCurrentlyLoggedInUser={this.loadCurrentlyLoggedInUser}></Route>
          
             <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
             <Route path="/profile" component={Profile} />
             <Route path="/myproperty" component={MyProperty}/>
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/orderlist" component={OrderList}/>
             <Route path="/customer" component={Customer}/>
            

             </Switch>
      </div>
    </div>
  );
};
};

export default Main;