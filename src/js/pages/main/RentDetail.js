import React,{useState, useEffect} from 'react'
import axios from 'axios'

import { useParams } from 'react-router'


import {AiTwotoneHome} from "react-icons/ai";
import {BsWifi} from "react-icons/bs";
import {GiLift} from "react-icons/gi";

import {CgGym} from "react-icons/cg";

import {GoLocation} from "react-icons/go";
import Carousels from "../../components/Carousels";
import RentCarousels from "../../components/RentCarousels";
import * as AddPropertyService from "../../addservices/AddPropertyService";


import "./Rent.css";


function RentDetail() {
    const {id} = useParams()
    // const url = `http://localhost:8080/api/getProperty/${id}`
    const url=AddPropertyService.GET_HOSTEL_REST_API_WITH_ID_URL
    const [rent, setRent] = useState({
        loading:false,
        data:null,
        error:false

    })



    let content = null

   useEffect(() => {
       setRent({
           loading:true,
           data:null,
           error:false
       })
    axios.get(url)
    .then(response => {
        //setProduct(response.data)
        setRent({
            loading:false,
            data:response.data,
            error:false
        })

    })   
    .catch((error) =>{
        setRent({
            loading:false,
            data:null,
            error:true
        })
    })  
   }, [url])

   if(rent.error){
       <p>
           There is error plz refresh
       </p>
   }

   if(rent.loading){
       content = <p>
           ....loading
       </p>
   }
    if(rent.data){
        
        content =

        <div className="conatiner1"> 
        <div class="rent-heading">
            <h1 className="heading1" >
            {/* {rent.data.apartmentName} */} 
           <AiTwotoneHome/> {rent.data.apartmentName}
            </h1>
            
            <div className="location">
            <GoLocation/> {rent.data.street} {rent.data.city}
            <span className="rent">${rent.data.expectedRent}/month</span>
            <ul className="sale">For Sale</ul>
            </div>
            
            </div>
            {/* <Carousels/> */}
           <div className="picture">
           {/* <RentCarousels/>   */}
           <Carousels/>

           </div>
            {/* */}
           
            {/* <div className="rent-display">  */}
            
           
            {/* <div className="row">
            <div className="col">
                <img 
                src={pic}/>
            </div>
            <div className="col">
            <img src={image44}/>

            </div> */}
            {/* <div className="col">
            <img src={image33}/>

            </div> */}
            {/* </div> */}
            {/* </div> */}
            <hr className="hr"></hr>
            <div className="box7">
            <div class="container">
            <div class="row">
                
                <div class="col-1 ">
                    <div class="details-title">
                        {/* 1BHK - Balcony - Baba Market */}
                        {rent.data.apartmentName}
                    </div>
                    <div class="details-sub-title">
                        {/* Pintopark, Morar, Gwalior, M.P. */}
                        {/* {rent.data.street}  */}
                        {rent.data.city}
                    </div>
                </div>
                <div class="col-1 ">
                    <div class="details-title">
                        <span><i class="fas fa-rupee-sign"></i></span> Rs {rent.data.expectedRent}/Month
                    </div>
                    <div class="details-sub-title">
                    {rent.data.negotiable}
                        {/* Non-Negogotiable */}
                    </div>
                </div>
                <div class="col-1">
                    <div class="details-title">
                        
                        {rent.data.propertySize}
                    </div>
                    <div class="details-sub-title">
                        sq.Ft
                    </div>
                </div>
                {/* <div class="col-1 ">
                    <div class="details-title">
                        <span><i class="fas fa-rupee-sign"></i></span>
                       
                      Rs  {rent.data.expectedDeposit}

                    </div>
                    <div class="details-sub-title ">
                        Deposit
                    </div>
                </div> */}
                <div class="col-1 ">
                 <button className="btn2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appointment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                {/* <div class="col-1 d-flex flex-column align-items-center justify-content-center ">
                    <span><i class="fa fa-heart nav-icon-size"></i></span>
                </div> */}
            </div>
            
            </div>

            </div>
            <hr className="hr"></hr>
            
{/* ***********************************************************************************************/}
<div className="flex-container">
<div className=" flex-child box4">
    <div className="title">
    Overview

    </div>
    <br></br>
    <hr className="hr"></hr>
    <div className="row2">
        <div className="col1">
        <div class="detail-title">
                        
                        {rent.data.apartmentType}
                    </div>
                    <div class="details-sub-title">
                        
                        Property Type
                    </div>

        </div>
        <div className="col1">
        <div class="detail-title">
                        
                        {rent.data.bhkType}
                    </div>
                    <div class="details-sub-title">
                        
                       BHK
                    </div>

        </div>
        <div className="col1">
        <div class="detail-title">
                        
                        {rent.data.bathroom}
                    </div>
                    <div class="details-sub-title">
                        
                        Bathroom
                    </div>

        </div>
        <div className="col1">
        <div class="detail-title">
                        
                        {rent.data.propertySize}
                    </div>
                    <div class="details-sub-title">
                        
                        Sqft
                    </div>

        </div>
        </div>
        <br></br>
        <div className="row2">
        <div className="col1">
        <div class="detail-title">
                        
                        {rent.data.propertyAge}
                    </div>
                    <div class="details-sub-title">
                        
                        Property Age
                    </div>

        </div>
        <div className="col1">
        <div class="detail-title">
                        
                        {rent.data.waterSupply}
                    </div>
                    <div class="details-sub-title">
                        
                        Water Supply
                    </div>
                    </div>
    </div>
</div>
<br></br>
<br></br>
{/* ****************************************************************************** */}
<div className=" box5">
    <div className="title">
    Details

    </div>
    <br></br>
    <hr className="hr"></hr>
    <div className="row1">
        <div className="col1">
            <span className="detail">Expected Deposit :</span>
            <span className="sub-detail1">${rent.data.expectedDeposit}</span>
            <hr class="thin"></hr>

        </div>

        
        <div className="col1">
            <span className="detail">Parking :  </span>
            <span className="sub-detail2"> {rent.data.parking}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
         <span className="detail">Property Size : </span>
            <span className="sub-detail3"> {rent.data.propertySize}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
            <span className="detail">Property Age :</span>
            <span className="sub-detail4">{rent.data.propertyAge}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
         <span className="detail">Bathroom :</span>
            <span className="sub-detail5"> {rent.data.bathroom}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
         <span className="detail">Balcony :</span>
            <span className="sub-detail6"> {rent.data.balcony}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
          <span className="detail">Facing :</span>
            <span className="sub-detail7">{rent.data.facing}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
            <span className="detail">Floor :</span>
            <span className="sub-detail8"> {rent.data.floor}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
      <span className="detail">Preferd Tenants :</span>
            <span className="sub-detail9">{rent.data.preferdTenants}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
            <span className="detail">Furnishing :</span>
            <span className="sub-detail10"> {rent.data.furnishing}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    </div>
    </div>
    <br></br>
    <hr className="hr"></hr>
{/* ******************************************************************************* */}
<br></br>
<br></br>
<div className="flex-container">
<div className="box6">
<div className="title">
    Description

    </div>
    <br></br>
    <hr className="hr"></hr>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
<br></br>
Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
 Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.

</div>
<br></br>
<br></br>
{/* ********************************************************************************************* */}
<div className="box9">
    <div className="title">
    Amenities

    </div>
    <br></br>
    <hr className="hr"></hr>
    <div className="row2">
        <div className="col1">
        <div class="details-title">
        <CgGym size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {rent.data.gym}Gym
                    
                    </div>

            
        </div>
        <div className="col1">
        <div class="details-title">
        <BsWifi size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {rent.data.internet}
                    </div>

            
        </div>
        <div className="col1">
        <div class="details-title">
        <GiLift size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {rent.data.lift}
                    </div>

            
        </div>
        <div className="col1">
        <div class="details-title">
        <CgGym size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {rent.data.ac}
                    </div>

            
        </div>
    </div>

    </div>
</div>
<br></br>
<br></br>
<hr className="hr"></hr>
{/* *********************************************************************************************** */}


            
        </div>
//********************************************************************************************************* */



    }
    return (
        <div>
             {content}
            </div>

    )
}

export default RentDetail
