import React from "react";

import Navbar from "./Navbar";

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
