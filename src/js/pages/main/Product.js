// import React from "react";
// // import { Link } from "react-router-dom";
// import ProductCard from "../../components/ProductCard";
// import data from "../../Data";
// import BackToTop from "../../components/BackToTop";

// const Products = () => {
//   return (
//     <div className="container products-page">
//       <div className="category-section">
//         <div to="/products" className="categoty-links">
//           All
//         </div>
//         <div to="/products" className="categoty-links">
//           Fruits
//         </div>
//         <div to="/products" className="categoty-links">
//           Vegetables
//         </div>
//       </div>
//       <div className="products-card-grid">
//         {data.products.map((product) => {
//           return <ProductCard key={product._id} product={product} />;
//         })}
//       </div>
//       <BackToTop />
//     </div>
//   );
// };

// export default Products;

import React,{useState, useEffect} from 'react'
import axios from 'axios'

import { useParams } from 'react-router'

import {GoLocation} from "react-icons/go";
import {AiTwotoneHome} from "react-icons/ai";
import {BsWifi} from "react-icons/bs";
import {GiLift} from "react-icons/gi";

import {CgGym} from "react-icons/cg";
import '../main/Card_detail.css'
import '../main/Rent.css';
import { Carousel } from 'bootstrap';
import Carousels from '../../components/Carousels';

function Product() {
    const {id} = useParams()
    const url = `http://localhost:8080/api/getHostel/${id}`
    const [product, setProduct] = useState({
        loading:false,
        data:null,
        error:false

    })



    let content = null

   useEffect(() => {
       setProduct({
           loading:true,
           data:null,
           error:false
       })
    axios.get(url)
    .then(response => {
        //setProduct(response.data)
        setProduct({
            loading:false,
            data:response.data,
            error:false
        })

    })   
    .catch((error) =>{
        setProduct({
            loading:false,
            data:null,
            error:true
        })
    })  
   }, [url])

   if(product.error){
       <p>
           There is error plz refresh
       </p>
   }

   if(product.loading){
       content = <p>
           ....loading
       </p>
   }
    if(product.data){
        
        content =

        <div className="conatiner1"> 
         <div class="rent-heading">
            <h1 className="heading1" >
            {/* {rent.data.apartmentName} */}
            <AiTwotoneHome/>Hostel Details
            </h1>
             
            <div className="location">
            <GoLocation/>{product.data.street} {product.data.city}
            <span className="rent">${product.data.expectedRent}/month</span>
            <ul className="sale">For Rent</ul>
            </div>
            </div>
            <Carousels/>
           
           
            
    
        <hr className="hr"></hr>
        <div className="box7">
            <div class="container">
            <div class="row">
                
                
                <div class="col-1 ">
                    <div class="details-title">
                        <span><i class="fas fa-rupee-sign"></i></span>Rent
                    </div>
                    <div class="details-sub-title">
                    Rs {product.data.expectedRent}/Month
                        {/* Non-Negogotiable */}
                    </div>
                </div>
                <div class="col-1">
                    <div class="details-title">
                        {/* 560 */}
                        Room Available
                    </div>
                    <div class="details-sub-title">
                    {product.data.room}
                    </div>
                </div>
                <div class="col-1 ">
                    <div class="details-title">
                        <span><i class="fas fa-rupee-sign"></i></span>
                        {/* 10,000 */}
                      Rs  {product.data.expectedDeposit}

                    </div>
                    <div class="details-sub-title ">
                        Deposit
                    </div>
                </div>
                <div class="col-1">
        <button className="btn2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owner Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    
                </div>
                {/* <div class="col-1 d-flex flex-column align-items-center justify-content-center ">
                    <span><i class="fa fa-heart nav-icon-size"></i></span>
                </div> */}
            </div>
              
</div>
                   
            </div>
            <hr className="hr"></hr>
            
            {/* ***************************************************************************************** */}
            <div className="flex-container1">
<div className=" box4">
    <div className="title">
    Overview

    </div>
    <br></br>
    <hr className="hr"></hr>
    <div className="row2">
        <div className="col1">
        <div class="detail-title">
                        
                        {product.data.preferdGuest}
                    </div>
                    <div class="details-sub-title">
                        
                        Preferd Guest
                    </div>

        </div>
        <div className="col1">
        <div class="detail-title">
                        
                        {product.data.foodAvailable}
                    </div>
                    <div class="details-sub-title">
                        
                       Food
                    </div>

        </div>
        {/* <div className="col">
        <div class="details-title">
                        
                        {product.data.roomCleaning}
                    </div>
                    <div class="details-sub-title">
                        
                        Room Cleaning
                    </div>

        </div>
       */}
        </div>
        <br></br>
        <div className="row2">
        <div className="col1">
        <div class="detail-title">
                        
                        {product.data.roomAmenities}
                    </div>
                    <div class="details-sub-title">
                        
                        Room Amenities
                    </div>

        </div>
        <div className="col1">
        <div class="detail-title">
                        
                        {product.data.rules}
                    </div>
                    <div class="details-sub-title">
                        
                        Rules
                    </div>
                    </div>
    </div>
</div>


            {/* ******************************************************************************************* */}
           

        


{/* ************************************************************************************************* */}
{/* <div className="flex-child box5"> */}
<div className="box5">
    <div className="title">
    Details

    </div>
    <br></br>
    <hr className="hr"></hr>
    <div className="row1">
        <div className="col1">
            <span className="detail">Expected Deposit :</span>
            <span className="sub-detail11">$ {product.data.expectedDeposit}</span>
            <hr class="thin"></hr>

        </div>

        
        <div className="col1">
            <span className="detail">Parking : </span>
            <span className="sub-detail12"> {product.data.parking}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
         <span className="detail">Posted On :</span>
            <span className="sub-detail13"> {product.data.availableFrom}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
            <span className="detail">Closing Time : </span>
            <span className="sub-detail14"> {product.data.closingTime}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
         <span className="detail">Food :</span>
            <span className="sub-detail15"> {product.data.food}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
         <span className="detail">Laundry :</span>
            <span className="sub-detail16"> {product.data.laundry}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    <div className="row1">
        <div className="col1">
         <span className="detail">Warden : </span>
            <span className="sub-detail17"> {product.data.wardenFacility}</span>
            <hr class="thin"></hr>
        </div>
        <div className="col1">
         <span className="detail">Room Cleaning :</span>
            <span className="sub-detail18"> {product.data.roomCleaning}</span>
            <hr class="thin"></hr>
        </div>
    </div>
    
   
    </div>
    </div>
    <hr className="hr"></hr>
    {/* ************************************************************************************************* */}
    <div className="flex-container">
<div className="box6">
<div className="title">
    Description

    </div>
    <br></br>
    <hr className="hr"></hr>
   <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
<br></br>
Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
 Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
</p>
</div>
<div className="box9">
    <div className="title">
    Amenities

    </div>
    <br></br>
    <hr className="hr"></hr>
    <div className="row">
        <div className="col">
        <div class="details-title">
        <CgGym size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {product.data.gym}
                    
                    </div>

            
        </div>
        <div className="col">
        <div class="details-title">
        <BsWifi size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {product.data.wifi}
                    </div>

            
        </div>
        <div className="col">
        <div class="details-title">
        <GiLift size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {product.data.lift}
                    </div>

            
        </div>
        <div className="col">
        <div class="details-title">
        <CgGym size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {product.data.mess}
                    </div>

            
        </div>
        <div className="col">
        <div class="details-title">
        <CgGym size={30}/> 
                        
                    </div>
                    <div class="details-sub-title">
                    {product.data.refrigerator}
                    </div>

            
        </div>
    </div>

    </div>
</div>
{/* *********************************************************************************************** */}
<br></br>
<br></br>
<hr className="hr"></hr>
    
{/* *************************************************************************************************** */}
        </div>

//************************************************************************************************************ /

//*********************************************************************************************************************** */
    }
    return (
        <div >
             {content}
            </div>

    )
}

export default Product

