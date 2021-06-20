

import React from 'react'
import { Link } from 'react-router-dom'
import { MdFavorite } from "react-icons/md";

import {FiShare2} from "react-icons/fi";

import {MdLocationOn} from "react-icons/md";
import {HiArrowCircleLeft} from "react-icons/hi";
import {HiArrowCircleRight} from "react-icons/hi";
import image33 from '../images/adds/image33.png'
import "../components/Productcard.css"

function ProductCard(props) {
  return (
    <div className="productdetail">
     <Link to={`/products/${props.product.id}`} >
   

    
    {/* <Link to={`/products/${props.product.id}`}>
    <div className="image1">
    <div 
    style={{
      width: "100%", height: "300px" ,marginInlineStart:"15%", marginBottom:"10%", 
      backgroundImage:`url(${room1})`,
      
    }}
    // className="w-50% h-64 bg-blue bg-cover"
    
    >
    </div>
    <div className="p3">
      <h3 className="picdetail">
      <Link to={`/products/${props.product.id}`}>
        {props.product.street} {props.product.city}
      </Link>
      </h3>
      <div className="picdetail">
        Rent:- Rs {props.product.expectedRent}
      </div>
      <Link to={`/products/${props.product.id}`}>
        <button className="btn8">View</button>
      </Link>
    </div>
    </div>
    </Link>
     */}
     <div className="image2">
       <div className="box">
       <div 
    style={{
      width: "100%", height: "300px", display:"block", object:"cover",
 
         backgroundImage:`url(${image33})`,
      
    }}>
     <div className="heart">
    <span >  <MdFavorite size={40}/> </span>
    <span> <FiShare2 size={30}/> </span>
    
    </div>
    {/* <div className="arrow">
     <HiArrowCircleLeft size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <HiArrowCircleRight size={30}/>
    </div> */}
    

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
export default ProductCard
