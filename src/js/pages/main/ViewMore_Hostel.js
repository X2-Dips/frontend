import React,{useState, useEffect} from 'react';
import axios from "axios";
import * as AddPropertyService from "../../addservices/AddPropertyService";

import HostelDetailCard from '../../components/HostelDetailCard';

const ViewMore_Hostel = () => {
    // const url = `http://localhost:8080/api/getHostel?page=1&limit=4`
   const url= AddPropertyService.GET_HOSTEL_REST_API_URL
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

    return (
        <div>
            <h1 style={{fontWeight:600, fontSize:"5rem", textAlign:"center"
      }}>Hostel & PG</h1>
            {content}
        </div>
    )
}

export default ViewMore_Hostel
