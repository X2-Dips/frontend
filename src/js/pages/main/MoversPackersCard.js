import React from 'react';
import truck from "../../images/ants/truck.jpg";

    const MoversPackersCard = ({data, cardIndex})=>{
    return (
       <div>
       {data[cardIndex].map(item => (
        <div className="moversCard">
           <div>
               <h2 style={{fontWeight:800}}>{item.title}</h2>
           </div>
           <br></br>
           <h3 style={{fontWeight:600}}>Appliances you can fit</h3>
           <br></br>
           <div className="row d-flex align-items-center justify-content-between">
           <div style={{textAlign:"center",marginRight:"2em",background:"gray",width:"8em"}}
           className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           {item.tv}
           </div>
           <div style={{textAlign:"center",marginRight:"2em",background:"gray",width:"8em"}}className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           {item.chair}
           </div>
          
           <div style={{textAlign:"center",marginRight:"2em",background:"gray",width:"11em"}}className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           {item.washing}
           </div>
          

           </div>
           <br></br>
           
           <div className="row d-flex align-items-center justify-content-between">
           <div style={{textAlign:"center",marginRight:"2em",background:"gray",width:"8em"}}className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           {item.fridge}
           </div>
           <div style={{textAlign:"center",marginRight:"2em",background:"gray",width:"8em"}}className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           {item.cot}

           </div>
           <div style={{textAlign:"center",marginRight:"2em",background:"gray",width:"8em"}}className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           {item.box}
           </div>
           </div>
           <br></br>
           <div className="moversImg">
           <img src={truck}/>
           </div>
           <div className="moversPara">
               <p>This is a tentative List of what can be fit ina vehicle.</p>
           <p>More items can be added if space is available</p>
           </div>
        </div>

       ))}
            
       </div>
    )
}
export default  MoversPackersCard
 {/* <p>{item.title}</p>
            <p>{item.name}</p> */}
