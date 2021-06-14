import React from 'react'
import { MdFavorite } from "react-icons/md";

import {FaBed} from "react-icons/fa";
import {GiPerson} from "react-icons/gi";
import {FaBath} from "react-icons/fa";
import {FiShare2} from "react-icons/fi";

import {MdLocationOn} from "react-icons/md";
import {HiArrowCircleLeft} from "react-icons/hi";
import {HiArrowCircleRight} from "react-icons/hi";
import { Link } from 'react-router-dom'
import pic from '../images/adds/pic.png'
import "../components/Productcard.css"



function RentCard(props) {
  return (
    
    <div className="rentdetail">
    <Link to={`/rent/${props.rent.id}`} >
    
   
{/* 
    
    <Link to={`/rent/${props.rent.id}`}>
    <div className="image2">
    <div 
    style={{
      width: "100%", height: "300px" ,marginInlineStart:"15%", marginBottom:"10%", 
         backgroundImage:`url(${pic})`,
      
    }}>
    </div>
    <div className="p3">
      <h3 className="picdetail">
      <Link to={`/rent/${props.rent.id}`}>
      {props.rent.apartmentName} 
      </Link>
      </h3>
      <div className="picdetail">
     Rs {props.rent.expectedRent}
      </div>
      <Link to={`/rent/${props.rent.id}`}>
      <button className="btn8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </Link>
    
    


    </div>
    </div>
    </Link>
     */}
     <div className="image2">
       <div className="box">
       <div 
    style={{
      width: "100%", height: "300px",  display:"block", object:"cover",
 
         backgroundImage:`url(${pic})`,
         
      
    }}>
    
    <div className="heart">
    <span >  <MdFavorite size={40}/> </span>
    <span> <FiShare2 size={30}/> </span>
    
    </div>
    <div className="arrow">
     <HiArrowCircleLeft size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <HiArrowCircleRight size={30}/>
    </div>
    

    <div className="leftright">
    <span><h5 >${props.rent.expectedRent}/month </h5></span> 
    
     
     </div>

    </div>
    
    
    
    
    
    <div className="text">
     {/* <h5 className="type"><span>{props.rent.apartmentType}</span></h5>  */}
      <h3>{props.rent.apartmentName}</h3> 
      {/* <h3>${props.rent.expectedRent}</h3> */}
      
     <p><MdLocationOn/>{props.rent.street} {props.rent.city}</p>
    </div>
    <div className="details">
      <span>Sqft: {props.rent.propertySize}   </span>
      <span><FaBath/> {props.rent.bathroom}               </span>
      <span> <FaBed/> {props.rent.bhkType }</span>
      <span><GiPerson/>{props.rent.preferdTenants}</span>
    </div>
    {/* <Link to={`/rent/${props.rent.id}`} className="link">
      More Details
    </Link> */}
       </div>
     </div>
     
    
   </Link>
    </div>
    
  )}
export default RentCard
