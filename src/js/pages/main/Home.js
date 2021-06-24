import React,{useState, useEffect} from "react";
import Carousels from "../../components/Carousels";
//import data from "../../Data";
import "./Card_detail.css";
//import Rating from "../../components/Rating";

import axios from "axios";
import "../../components/Carousels.css";

import ProductCard from "../../components/ProductCard";
import RentCard from "../../components/RentCard";
import ServicePage from "../../components/ServicePage";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonial from "../../components/Testimonial";
import SliderDemo from "../../components/SliderDemo";



// const Home = () => {
//   const deals = data.products.filter((product) => product.deals === true);
function Home(){

    const url = `http://localhost:8082/api/getHostel?page=1&limit=4`
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
      <ProductCard 
        product={product}
      />
    </span>
    )
    
  }

  //*********************************************Rent*********************************************************************** */
  const urll = `http://localhost:8080/api/getProperty`
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
    <div>
      <Carousels />
      {/* <div class="container9"> */}
                <form className="container9">
                {/* <div class="inputs"> */}
                <div class="location-input">
                <label>Location</label> 
                <input type="text" required placeholder="Enter your Location"/>
                </div>
                <br></br>
                <div class="city-input">

                <label>City</label> <input type="text" required placeholder="Enter your City"/>

                  </div>
                  <br></br>
                  <div class="state-input">

                    <label>State</label> <input type="text" required placeholder="Enter your State"/>

               </div>
               <div class="budget">
                    <h3>Budget range</h3>

                    <span class="mini">Minimum</span> <span class="max">Maximum</span>
                </div>
                <div class="btn-box">

 {/* <p>By joining, you agree to the and Privacy policy</p>  */}

<button>Search property</button>

</div>


                </form>
                {/* </div> */}
      <hr className="hr"></hr>
      <h1 className="heading2" >Hostel & PG</h1>
      <hr className="hr"></hr>
      {content}
      <hr className="hr"></hr>
      <h1 className="heading2">Rooms</h1>
      <hr className="hr"></hr>
      
      {contents}
      <hr className="hr"></hr>
      
     <div>
       <h1 className="heading2">Services</h1>
       <hr className="hr"></hr>
       <ServicePage/>
       <hr className="hr"></hr>
     </div>
     <div>
     <h1 className="heading2">Why Use RentPayRooms</h1>
       <hr className="hr"></hr>
       <WhyChooseUs/>

       <hr className="hr"></hr>
     </div>
     <div>
     <h1 className="heading2">Our Happy Customers </h1>
       <hr className="hr"></hr>
       {/* <Testimonial/> */}
       {/* <SliderDemo/> */}
       
       

       <hr className="hr"></hr>
     </div>
    
    

          
     
      
    </div>
  );
};

export default Home;
