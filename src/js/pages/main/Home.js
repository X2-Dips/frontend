import React,{useState, useEffect} from "react";
import Carousels from "../../components/Carousels";
import "./Card_detail.css";
import axios from "axios";
import { Link } from 'react-router-dom'
import "../../components/Carousels.css";
import * as AddPropertyService from "../../addservices/AddPropertyService";



import RentCard from "../../components/RentCard";
import ServicePage from "../../components/ServicePage";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonial from "../../components/Testimonial";

import HostelDetailCard from "../../components/HostelDetailCard";
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';




function Home(){
 const url = AddPropertyService.GET_HOSTEL_REST_API_URL
    // const url = `http://localhost:8080/api/getHostel?page=1&limit=4`
  const [products, setProducts]=useState({
     loading:false,
    data:null,
    error:false
  })
  let content = null
  useEffect(() => {
    setProducts({
     loading:false,
    data:null,
    error:false
    })
     axios.get(url)
    .then(response => {
      setProducts({
        loading:false,
        data:response.data,
        error:false
      })
    })
    .catch(() => {
      setProducts({
        loading:false,
        data:null,
        error:true
      })

    })

  }, [url])
   
  if(products.error){
    content=
    <p>
      There is an error please refresh or try again later.
    </p>
  }
  if(products.loading){
    content= <p>
      ....loading
    </p>

  }
  if(products.data){
    content =
    products.data.map((product,key)=>
    <span>
      {/* {product.city} */}
      <HostelDetailCard 
        product={product}
      />
    </span>
    )
    
  }

  //*********************************************Rent*********************************************************************** */
  // const urll = `http://localhost:8080/api/getProperty?limit=4`
  const urll=AddPropertyService.GET_ROOM_REST_API_URL
  const [rents, setRents]=useState({
     loading:false,
    data:null,
    error:false
  })
  let contents = null
  useEffect(() => {
    setRents({
     loading:false,
    data:null,
    error:false
    })
    axios.get(urll)
    .then(response => {
      setRents({
        loading:false,
        data:response.data,
        error:false
      })
    })
    .catch(() => {
      setRents({
        loading:false,
        data:null,
        error:true
      })

    })

  }, [urll])
   
  if(rents.error){
    contents=
    <p>
      There is an error please refresh or try again later.
    </p>
  }
  if(rents.loading){
    contents= <p>
      ....loading
    </p>

  }
  if(rents.data){
    contents =
    rents.data.map((rent,key)=>
    <span>
      {/* {rent.city} */}
      <RentCard 
        rent={rent}
      />
    </span>
    )
    
  }

//************************************************end rent******************************************************************************* */
  return (
    <div data-simplebar>
    <div>
    {/* <ScrollBarTop/> */}
    
      <Carousels />
     

                <form className="container9">
        
                <div>
                  <h1  style={{color:"black", textAlign:"center", fontWeight:"600"}}>Search Property</h1>
                </div>
                <br></br>
                <div class="location-input">
                <label>State</label> 
                <input type="text" required placeholder="Enter your Location"/>
                </div>
                <br></br>
                <div class="city-input">

                <label>City</label> <input type="text" required placeholder="Enter your City"/>

                  </div>
                  <br></br>
                  <div class="state-input">

                    <label>Landmark</label> <input type="text" required placeholder="Enter your State"/>

               </div>
               <br></br>
               <div class="propertyType-input">

                <label>Property Type</label><select >
                <option>Select</option>
                            <option>Apartments</option>
                            <option>Hostel</option>
                            <option>Rooms</option>
                </select>

                


</div>
               
              
                <div class="budget">
                      <label for="price">Rs.500/- - Rs.1,00,000/- </label>
                      <input type="range" min="500" max="1000000" class="budget-range"/>
                    </div>
                
                
                <div class="btn-box">



<button>Search</button>

</div>


                </form>
                <br></br>
                {/* </div> */}
      <hr className="hr1"></hr>
      <h1 className="heading2" >Hostel & PG</h1>
     
      <br></br>
      {content}
      <br></br>
      <br></br>
      <Link  to="/viewmoreHostel">
      <button className="viewMoreBtn">
      View More</button>
      </Link>
      <br></br>
      <br></br>
      <hr className="hr1"></hr>
      <h1 className="heading2">Rooms</h1>
     
      <br></br>
      
      {contents}
      <br />
      <br></br>
      <Link  to="/viewmoreRoom">
      <button className="viewMoreBtn">View More
      </button>
     
      </Link>
      <br></br>
      <br></br>
     
     
      <hr className="hr1"></hr>
      
     <div >
       <h1 className="heading2">Services</h1>
   <br></br>
   <br></br>
       <ServicePage/>
       <hr className="hr1"></hr>
     </div>
     <div >
     <h1 className="heading2">Why Use RentPayRooms</h1>
     <br></br>
     <br></br>
       <WhyChooseUs/>

       <hr className="hr1"></hr>
     </div>
     <div>
     <h1 className="heading2">Our Happy Customers </h1>
      <br></br>
      <br></br>
       <Testimonial/>
       {/* <SliderDemo/> */}
       
       

       <hr className="hr1"></hr>
     </div>
    
    

          
 
      
    </div>
    </div>
  );
};

export default Home;
