import React from "react";


import playstore from '../../images/ants/playstore.png';
import "../footer/Footer.css";

const Footer = () => {
  return (
<div className="main-footer">

<form action="">
                
<button type="submit" class="btnList">List Your Property</button>

<h2>Rent Pay Rooms The world’s Fastest Growing 
rental
 chain services Join Our 
 network
  and avoid problems</h2>  


<br></br>
<hr class="hrs" />  


</form>




  <div className="container">
    <div className="row">


                    
 

    <div className="col">
    <h3>Download RPR App for exciting Offers.</h3>
    
    <button type="submit"  class="ios"><h2> GET IT ON </h2><h1>Google Play</h1>
    
    <div class="xyz"> 
    <img src={playstore} alt=""  /> 
</div>
    </button>

   
</div>
  


      <div className="col">
     <hr class="vertical"/>
        <h4 className="about">About Us</h4>
        <ui className="list-unstyled">
          <li> Teams/careers </li>
          <li>Blogs</li>
          <li>Support</li>
        </ui>
      </div>
     
      <div className="col">
      
     <hr class="vertical"/>
        <h4>Teams and conditions</h4>
        <ui className="list-unstyled">
          <li>Tenant Policies</li>
          <li> Landlord Policy</li>
          <li>Privacy Policy</li>
        </ui>
      </div>
    </div>
    <br></br>
   <hr class="nisha" />

  { /* <div className="row">
       <p className="col-sm">
         &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
        Terms Of Service | Privacy
      </p>
     </div>

*/ }

<div class="last-box">
<a href="#" id="link1">&copy; Copyright 2021-2022 at www.Rentpayrooms.com</a>
</div> 


</div>
</div>

  );
};

export default Footer;