import React, { Component } from "react";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";

import Main from "./pages/main/Main";


import { getCurrentUser } from './pages/util/APIUtils';
import { ACCESS_TOKEN } from './pages/constants';
import PrivateRoute from './pages/header/PrivateRoute';
// import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { Redirect } from "react-router";




import { withRouter } from 'react-router';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false,
      
    }
    
    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.logouts = this.logouts.bind(this);
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
        loading: false,
        redirect:null
      });
      this.props.useHistory.push("/")
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  
    logouts(){
      this.props.history.push('/');
    }
  
  

  handleLogout() {
    
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
      logouts:true
    });
    return  <Redirect  to="/logintest" />
    // Alert.success("You're safely logged out!");
   
    this.setState({ redirect: "/logintest" })
    this.logouts();
    // Alert.success("You're safely logged out!");
    
    
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render(){
    

    
    
    

  return (
   
    <div className="grid-container">
 
      <Header  authenticated={this.state.authenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
      <Main authenticated={this.state.authenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
      <Footer />
  
      
      
    
      
    </div>
  );
}
}

export default withRouter(App);
