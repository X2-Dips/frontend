import React,{useState, useEffect} from "react";
import Carousels from "../../components/Carousels";
//import data from "../../Data";
import "./Card_detail.css";
//import Rating from "../../components/Rating";

import axios from "axios";

import ProductCard from "../../components/ProductCard";
import RentCard from "../../components/RentCard";



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
      <hr className="hr"></hr>
      <h1 className="heading2" >Hostel & PG</h1>
      <hr className="hr"></hr>
      {content}
      <hr className="hr"></hr>
      <h1 className="heading2">Rooms</h1>
      <hr className="hr"></hr>
      
      {contents}
      <hr className="hr"></hr>
    

          
     
      
    </div>
  );
};

export default Home;
