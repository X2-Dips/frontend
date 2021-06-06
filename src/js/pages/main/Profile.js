import React, { Component, useState } from 'react';
import { getCurrentUser, showall} from '../util/APIUtils';
import './bootstrap.css'
import Profilephoto from '../../images/ants/profile.png';

import './Profile.css';

import axios from 'axios'; 

const Profile=(props)=>{

const name=props.location.name;
const showdataRequest=props.location.name;

const[names, nameState]=useState("");
const[email, emailState]= useState("");
const[dob, dobState]=useState("null");
const[image, imageState]=useState("");


const shows=()=>{
axios.get("http://localhost:8080/auth/showdata",{
    params:{
        name:props.location.name
    }
}).then((response)=>{
    console.log(response.data);
    nameState(response.data.name);
    emailState(response.data.email);
    dobState(response.data.dob);
    imageState(response.data.imageUrl);

   
})

}


    return(
        
        <div>
        {shows()}
        <div className="login-container">
        <div className="login-content">
        <h5 className="login-title">User Profile</h5>

            <fieldset>
            <legend><div className="circle"><img src={image} className="profile_img"/></div></legend>
                <br/>

                <h3>User Id:  {email}</h3>
                <h3>Name: {names} </h3>
                <h3>Email Id: {email}</h3>
                <h3>D.O.B: {dob}</h3>
            </fieldset>

            </div>
        </div>
        

        </div>
    );
}


export default Profile;