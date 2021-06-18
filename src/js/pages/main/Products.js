import React,{useState, useEffect} from 'react'
import axios from 'axios'

import { useParams } from 'react-router'
import image44 from '../../images/adds/room_img.jpg'
import image33 from '../../images/adds/room_img.jpg'
//import '../main/Card_detail.css'

function Product() {
    const {id} = useParams()
    const url = `http://localhost:8082/api/getHostel/${id}`
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

        <div>
         <div class="rent-heading">
            <h1 className="heading" >
            {/* {rent.data.apartmentName} */}
            Hostel Details
            </h1>
            </div>
           
           
            <div className="rent-display"> 
            <div className="row">
            <div className="col">
                <img 
                src={image33} alt=""/>
            </div>
            <div className="col">
            <img src={image44} alt=""/>

            </div>
         
            </div>
        
        </div> 
        <hr className="hr"></hr>
        <div className="name-address">
            <div class="container">
            <div class="row">
                
                <div class="col-1 ">
                    <div class="details-title">
                        {/* 1BHK - Balcony - Baba Market */}
                        Address
                    </div>
                    <div class="details-sub-title">
                        {/* Pintopark, Morar, Gwalior, M.P. */}
                        {product.data.street} {product.data.city}
                    </div>
                </div>
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owner Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    
                </div>
                {/* <div class="col-1 d-flex flex-column align-items-center justify-content-center ">
                    <span><i class="fa fa-heart nav-icon-size"></i></span>
                </div> */}
            </div>
            <br></br>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 p-4 order-2 d-flex align-items-center justify-content-between flex-column border">
                    <div class="row mb-3">
                        <div class="col-6 d-flex justify-content-between align-items-center border ">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="fas fa-user fa-icons"></i>
                            </div>
                            <div class=" d-flex flex-column align-items-start justify-content-center p-2">
                                <div class="">
                                    <h6>{product.data.preferdGuest}</h6>
                                </div>
                                <div><small class="small">Preffered Guest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></div>
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-between align-items-center border ">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="fa fa-calendar-check-o fa-icons " aria-hidden="true"></i>
                            </div>
                            <div class=" d-flex flex-column align-items-start justify-content-center p-2">
                                <div class="">
                                    <h6>{product.data.availableFrom}</h6>
                                </div>
                                <div><small class="small">Posted On&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></div>
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-between align-items-center border ">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="fa fa-car fa-icons" aria-hidden="true"></i>
                            </div>
                            <div class=" d-flex flex-column align-items-start justify-content-center p-2">
                                <div class="">
                                    <h6>{product.data.parking}</h6>
                                </div>
                                <div><small class="small">Parking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></div>
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-between align-items-center border ">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="fas fa-clock-o fa-icons"></i>
                            </div>
                            <div class=" d-flex flex-column align-items-start justify-content-center p-2">
                                <div class="">
                                    <h6>{product.data.closingTime}</h6>
                                </div>
                                <div><small class="small">Closing Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </small></div>
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-between align-items-center border ">
                            <div class="d-flex justify-content-center align-items-center">
                                
                            </div>
                            <div class=" d-flex flex-column align-items-start justify-content-center p-2">
                                <div class="">
                                    <h6>{product.data.propertyAvailableFor}</h6>
                                </div>
                                <div><small class="small">Property For&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></div>
                            </div>
                        </div>
                        <div class="col-6 d-flex justify-content-between align-items-center border ">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="fas fa-key fa-icons"></i>
                            </div>
                            <div class=" d-flex flex-column align-items-start justify-content-center p-2">
                                <div class="">
                                    <h6>{product.data.food}</h6>
                                </div>
                                <div><small class="small">Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></div>
                            </div>
                        {/* </div>
                        </div> */}                    
                      </div>
                      <div className="container">

<div className="row">
    <div className="col">
    <button className="btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appointment&nbsp;&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div className="col">
        <button className="btn">Chat with owner</button>
    </div>

</div>
</div>
                    
                    </div>
                    
                   
</div>
                    <hr className="hr"></hr>
            </div>
            <div class="container">
            <div class="overview-title">
                <h1 className="heading2">Overview</h1>
            </div>
            <hr className="hr"></hr>
            <div class="row d-flex justify-content-between align-items-center">
                <div
                    class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-between align-items-center mb-3">
                    <span className="view"> Laundry</span>
                    <span className="overview">{product.data.laundry}</span>
                </div>
                <div
                    class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  d-flex justify-content-between align-items-center mb-3">
                    <span className="view"> Room Cleaning</span>
                    <span className="overview">{product.data.roomCleaning}</span>
                </div>
                <div
                    class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  d-flex justify-content-between align-items-center mb-3">
                    <span className="view"><i class="fas fa-faucet"></i> Room Amenities</span>
                    <span className="overview">{product.data.roomAmenities}</span>
                </div>
                <div
                    class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  d-flex justify-content-between align-items-center mb-3">
                    <span className="view"><i class="fas fa-building"></i> Food</span>
                    <span className="overview">{product.data.foodAvailable}</span>
                </div>
                <div
                    class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-between align-items-center mb-3">
                    <span className="view"><i class="fas fa-bath"></i> Rules</span>
                    <span className="overview">{product.data.rules}</span>
                </div>  
            </div>
        </div>
        <hr className="hr"></hr>

<div class="container">
    <h1 className="heading2">Description</h1>
    <hr className="hr"></hr>
    <p class="px-2">{product.data.description}
    </p>

    {/* <div class="text-center readMoreBtn" id="readMoreBtn">
        <div>Read More</div>
        <div><i class="fas fa-angle-down rmAnim"></i></div>
    </div> */}

</div> 
<hr className="hr"></hr>
        <div class="container">
            <div class="overview-title">
                <h1 className="heading2">Amenities</h1>
            </div>
            <hr className="hr"></hr>
            <div class="row ">
                
                    <div class="col  ">
                        <span> {product.data.refrigerator}</span>
                        <hr class="hr1"></hr>
                    </div>
                    <div class="col">
                        <span>{ product.data.lift}</span>
                        <hr class="hr1"></hr>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-wifi"></i> {product.data.wifi}</span>
                        <hr class="hr1"></hr>
                    </div>
                       </div>
     
       </div>
       <div class="row ">
                
                    <div class="col  ">
                        <span><i class="fas fa-helicopter"></i> {product.data.cooking}</span>
                        <hr class="hr1"></hr>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-dumbbell"></i> {product.data.mess}</span>
                        <hr class="hr1"></hr>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-wifi"></i> {product.data.tv}</span>
                        <hr class="hr1"></hr>
                    </div>
                       </div>
                       <div class="row ">
                
                    <div class="col  ">
                        <span><i class="fas fa-helicopter"></i> {product.data.refrigerator}</span>
                        <hr class="hr1"></hr>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-dumbbell"></i> {product.data.powerBackUp}</span>
                        <hr class="hr1"></hr>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-wifi"></i> Wifi</span>
                        <hr class="hr1"></hr>
                    </div>
                       </div>
                       <hr className="hr"></hr>

      



        </div>

//************************************************************************************************************ /

//*********************************************************************************************************************** */
    }
    return (
        <div>
             {content}
            </div>

    )
}

export default Product









