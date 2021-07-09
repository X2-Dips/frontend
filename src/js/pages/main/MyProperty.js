import React from 'react';


import "./Hostel_and_Property_form.css";

import roomimg from '../../images/adds/room_img.jpg';
import './Profile.css';


import { MdFavorite } from "react-icons/md";

import {FaBed} from "react-icons/fa";
import {GiPerson} from "react-icons/gi";
import {FaBath} from "react-icons/fa";
import {FiShare2} from "react-icons/fi";
import {FaArrowCircleRight} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";

import { Link } from 'react-router-dom';
import "./MyProperty.css";



const MyProperty=(props)=>{


const headstyle={
    textAlign:'center'
}

    return(
        <div>
        
        <div className="login-container">


<div className="row">
        
        <div className="labels">
        <h1 className="head">Manage Your Account</h1>
        <hr className="horizontals"/>
        
        <div className="side_icons">

            <ul type="">
            <li><Link to="/profile"><h3 className="s_icon ">Basic Profile</h3></Link></li>
            <li><h3 className="s_icon active">Check Property</h3></li>

            </ul>
        </div>
        </div>
        
        <div className="frontform">
        <h1 className="head1" style={headstyle}>Rent</h1>
        <hr className="horizontals"/>
        <br/>

        {cardslayer()}


        <h1 className="head1" style={headstyle}>PG / Hostel</h1>
        <hr className="horizontals"/>

        {cardslayer()}

       </div>

</div>



         
        </div>
     </div>

     

    );


}




const cardslayer=()=>{


  return(
    <>


    
    <div className="cards">

 
    <div className="image2">
    <div className="box">
    <div 
style={{
  

     // backgroundImage:`url({roomimg})`,
      backgroundImage:`url(${roomimg})`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
      
   
 }}>
 
 <div className="heart">
 <span >  <MdFavorite size={40}/> </span>
 <span> <FiShare2 size={30}/> </span>
 
 </div>
 <div className="leftright">
 <span><h5 >$100/month &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaArrowCircleRight/></h5></span> 
 {/* <span><FaArrowCircleRight/></span> */}
  {/* <span> <BsArrowLeftRight size={30}/> </span> */}
  
 </div>
 </div>
 <div className="text">
  {/* <h5 className="type"><span>{props.rent.apartmentType}</span></h5>  */}
   <h3>Mansion</h3> 
   {/* <h3>${props.rent.expectedRent}</h3> */}
   
  <p><MdLocationOn/>Ahari tola ,gwalior</p>
 </div>
 <div className="details">
   <span>Sqft:1200   </span>
   <span><FaBath/>  2             </span>
   <span> <FaBed/> 2BHK</span>
   <span><GiPerson/>Single</span>
 </div>

    </div>
  </div>

 
 

 <div className="image2">
 <div className="box">
 <div 
style={{


  // backgroundImage:`url({roomimg})`,
   backgroundImage:`url(${roomimg})`,
   backgroundSize:"cover",
   backgroundRepeat:"no-repeat"
   

}}>

<div className="heart">
<span >  <MdFavorite size={40}/> </span>
<span> <FiShare2 size={30}/> </span>

</div>
<div className="leftright">
<span><h5 >$100/month &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaArrowCircleRight/></h5></span> 
{/* <span><FaArrowCircleRight/></span> */}
{/* <span> <BsArrowLeftRight size={30}/> </span> */}

</div>
</div>
<div className="text">
{/* <h5 className="type"><span>{props.rent.apartmentType}</span></h5>  */}
<h3>Mansion</h3> 
{/* <h3>${props.rent.expectedRent}</h3> */}

<p><MdLocationOn/>Ahari tola ,gwalior</p>
</div>
<div className="details">
<span>Sqft:1200   </span>
<span><FaBath/>  2             </span>
<span> <FaBed/> 2BHK</span>
<span><GiPerson/>Single</span>
</div>

 </div>
</div>



<div className="image2">
<div className="box">
<div 
style={{


// backgroundImage:`url({roomimg})`,
 backgroundImage:`url(${roomimg})`,
 backgroundSize:"cover",
 backgroundRepeat:"no-repeat"
 

}}>

<div className="heart">
<span >  <MdFavorite size={40}/> </span>
<span> <FiShare2 size={30}/> </span>

</div>
<div className="leftright">
<span><h5 >$100/month &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaArrowCircleRight/></h5></span> 
{/* <span><FaArrowCircleRight/></span> */}
{/* <span> <BsArrowLeftRight size={30}/> </span> */}

</div>
</div>
<div className="text">
{/* <h5 className="type"><span>{props.rent.apartmentType}</span></h5>  */}
<h3>Mansion</h3> 
{/* <h3>${props.rent.expectedRent}</h3> */}

<p><MdLocationOn/>Ahari tola ,gwalior</p>
</div>
<div className="details">
<span>Sqft:1200   </span>
<span><FaBath/>  2             </span>
<span> <FaBed/> 2BHK</span>
<span><GiPerson/>Single</span>
</div>

</div>
</div>

</div>

    </>
  );
}

export default MyProperty;