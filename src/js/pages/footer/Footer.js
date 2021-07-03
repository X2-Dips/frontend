import React from "react";


import playstore from '../../images/ants/playstore.png';
import "../footer/Footer.css";

const Footer = () => {
  return (
<div style={{width:"99%", marginLeft:"3px"}}
 className="main-footer">

<form action="">
                
<button style={{marginLeft:"35%", marginTop:"-1.2em"}} 
type="submit" class="btnList">List Your Property</button>

<h2 style={{marginLeft:"10px"}}>Rent Pay Rooms The world’s Fastest Growing 
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
    <h3 style={{marginLeft:"50px", marginBottom:"7px"}}>Download RPR App for exciting Offers.</h3>
    
    <button style={{marginLeft:"50px", marginBottom:"7px"}}
    type="submit"  class="ios"><h2> GET IT ON </h2><h1>Google Play</h1>
    
    <div class="xyz"> 
    <img src={playstore} alt=""  /> 
</div>
    </button>

   
</div>
  


      <div 
       className="col">
     <hr class="vertical"/>
        <h3 style={{marginLeft:"40px", marginBottom:"10px", fontWeight:700}}
        className="about">About Us</h3>
        <ui 
        className="list-unstyled">
          <li style={{marginLeft:"40px"}}> Teams/careers </li>
          <li style={{marginLeft:"40px"}}>Blogs</li>
          <li style={{marginLeft:"40px"}}>Support</li>
        </ui>
      </div>
     
      <div className="col">
      
     <hr class="vertical"/>
        <h3 style={{marginLeft:"40px", marginBottom:"10px", fontWeight:700}}>Teams and conditions</h3>
        <ui className="list-unstyled">
          <li style={{marginLeft:"40px"}}>Tenant Policies</li>
          <li style={{marginLeft:"40px"}}> Landlord Policy</li>
          <li style={{marginLeft:"40px"}}>Privacy Policy</li>
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
<br></br>



</div>

</div>

  );
};

export default Footer;