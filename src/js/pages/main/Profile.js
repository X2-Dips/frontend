import React, { useState } from 'react';

import './bootstrap.css'

import profimage from '../../images/ants/square_profile.png';
import './Profile.css';

import { Link } from 'react-router-dom';

const Profile=()=>{


const[image]=useState("");







    return(
        
        <div>
        
        <div className="login-container">
         
        <div className="row">
        
        <div className="labels">
        <h1 className="head">Manage Your Account</h1>
        <hr className="horizontals"/>
        
        <div className="side_icons">

            <ul type="">
            <li><Link to="/profile"><h3 className="s_icon active">Basic Profile</h3></Link></li>
            <li><Link to="/myproperty"><h3 className="s_icon">Check Property</h3></Link></li>

            </ul>
        </div>
        </div>
        
        <div className="frontform">
        <h1 className="head1">Edit Your Profile</h1>
        <hr className="horizontals"/>
        <br/>


        <div className="rows ">
        
        <div className="imagecol sign-up-form">
        <div className="imageblock">
        <img src={profimage} className="profile-img" alt="Profile pic"/>
        <br/>
        <input type="file" name="Choose profile pic" className="files" id="Profile"/> 
        <h3>Choose profile Picture </h3>
        </div>
          
        
        </div>
        
        <div className="formcol">
        {formconst()}
        </div>
        
        </div>



        
        </div>
        
        </div>
        
        </div>
        </div>
        
        
      
       
       
    );
}


const formconst=()=>{

return (
<>
<div className="form-center ">
        
        <form action="" className="sign-up-form">

        <div className="form-group">
            <label htmlFor="email">Full Name*</label>
            <input type="email" placeholder="Full Name*" id="full_name" required />
          </div>


          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="E-mail*" id="email" required />
          </div>
         
          <div className="form-group">
          <label htmlFor="email">Mobile Number*</label>
          <input type="email" placeholder="Mobile Number*" id="mobile_no" required />
        </div>

          <div className="form-group">
            <label htmlFor="password">Whatsapp Number</label>
            <input type="text" placeholder="Whatsapp Number" id="whatsapp_no" required />
          </div>


          
          <span src="" className="whats-app-img"></span><span className="para">Get Updated on Whatsapp</span>
          
          
        
          {/* <h5>Fields that are marked with * sign are required.</h5> */}
          <div className="form-group">
            <input type="button" value="Save Profile" className="inp-btn" />
          </div>
          
        </form>
      </div>

</>


);



}






export default Profile;