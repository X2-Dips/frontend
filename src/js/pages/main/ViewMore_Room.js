import React,{useState, useEffect} from 'react';
import axios from "axios";
import RentCard from "../../components/RentCard";

const ViewMore_Room = () => {
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

    return (
        <div>
            <h1 style={{fontWeight:600, fontSize:"5rem", textAlign:"center"
      }}>Rooms</h1>
            {contents}
        </div>
    )
}

export default ViewMore_Room
