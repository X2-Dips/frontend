import React from "react";


import playstore from '../../images/ants/playstore.png';
import "../footer/Footer.css";

const Footer = () => {
  return (
<div style={{width:"99%", marginLeft:"3px"}}
 className="main-footer">

<form action="">
<div className="listUrProperty">     
<button 
type="submit" className="btnList">List Your Property</button>
</div>
<h2 style={{marginLeft:"10px"}} className="footerHeading">Rent Pay Rooms The world’s Fastest Growing 
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
    <div className="downloadApp">
    <h3 className="Download">Download RPR App for exciting Offers.</h3>
    
    <button 
    type="submit"  class="ios"><h2> GET IT ON </h2><h1>Google Play</h1>
    
    <div class="xyz"> 
    <img src={playstore} alt=""  /> 
</div>
    </button>
</div>
   
</div>
  


      <div  className="col">
      
     <hr class="vertical"/>
        
        <div className="AboutUs">
          <h3 
        className="about">About Us</h3>
        <ui 
        className="list-unstyled">
          <li style={{marginLeft:"40px"}}> Teams/careers </li>
          <li style={{marginLeft:"40px"}}>Blogs</li>
          <li style={{marginLeft:"40px"}}>Support</li>
        </ui>
        </div>
      </div>
     
      <div className="col">
      
     <hr class="vertical"/>
     <div className="TnC">
        <h3 className="terms" >Teams and conditions</h3>
        <ui className="list-unstyled">
          <li style={{marginLeft:"40px"}}>Tenant Policies</li>
          <li style={{marginLeft:"40px"}}> Landlord Policy</li>
          <li style={{marginLeft:"40px"}}>Privacy Policy</li>
        </ui>
        </div>
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