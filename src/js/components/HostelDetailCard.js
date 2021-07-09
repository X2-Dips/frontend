

import React from 'react'
import { Link } from 'react-router-dom'
import { MdFavorite } from "react-icons/md";

import {FiShare2} from "react-icons/fi";

import {MdLocationOn} from "react-icons/md";

import image33 from '../images/adds/image33.png'
import "../components/Hostel_Room.css"

function HostelDetailCard(props) {
  return (
    <div className="productdetail">
     <Link to={`/products/${props.product.id}`} >
     <div className="image2">
       <div className="boxes">
       <div 
    style={{
      width: "100%", height: "300px",display:"block", object:"cover",
 
         backgroundImage:`url(${image33})`,
      
    }}>
     <div className="heart">
    <span >  <MdFavorite size={40}/> </span>
    <span> <FiShare2 size={30}/> </span>
    
    </div>
    <div className="leftright">
    <span><h5 >${props.product.expectedRent}/month </h5></span> 
    
     
     </div>

    </div>
    
    <div className="text">
      <h3>Hostel Name</h3>
     <p><MdLocationOn/>{props.product.street} {props.product.city}</p>
      
    </div>
    <div className="details">
      <span>{props.product.wifi}</span>
      <span>{props.product.lift}</span>
      <span>{props.product.tv }</span>
      <span>{props.product.mess}</span>
      <span>{props.product.propertyAvailableFor}</span>
    </div>
    
       </div>
     </div>

   </Link>
   
    </div>
    
  )}
export default HostelDetailCard
