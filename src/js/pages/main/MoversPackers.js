import React,{useState} from 'react'
import moverspackers from "../../images/ants/moverspackers.jpg";
import MoversPackersCard from './MoversPackersCard';
import MoversData from './MoversData';

export default function MoversPackers() {
   const [active, setActive] = useState("FirstCard");
    return (
        
        <div 
        className="container">
        <div>
            <h1 style={{marginLeft:"13em", fontSize:"40px"}}>Movers & Packers</h1>
        </div>
        <div>
            <img style={{height:"27.5em", marginLeft:"10px"}}
            src={moverspackers}>
                
            </img>
         
        </div>
        <form style={{marginTop:"-14em",height:"25em"}} 
        className="container10">
                {/* <div class="inputs"> */}
                <div>
                  <h1  style={{color:"black", textAlign:"center", fontWeight:"600"}}>Where are you moving?</h1>
                </div>
                <br></br>
               
                <div class="city">

                <label>City</label> <input type="text" required placeholder="Enter your City"/>

                  </div>
                  <br></br>
                  <div class="movingfrom">

                    <label>Moving From</label> <input type="text" required placeholder="Enter Place Name"/>

               </div>
               <br></br>
               <div class="movingto">

<label>Moving to</label> <input type="text" required placeholder="Enter Place Name"/>

</div>
                <div class="btn-box">



<button>Search</button>

</div>


                </form>
                <br></br>
            
               {/* <div style={{marginLeft:"14em"}}
               className="homeSize">
               <h1 style={{marginLeft:"15em", fontWeight:600}}>Select your Home Size</h1>
               <br></br>
               <div style={{marginLeft:"10em"}}
               className="row d-flex align-items-center justify-content-between">
                   <div style={{marginRight:"2em"}}
                   className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                       <button  className="bhktype"
                       >Rk</button>
                      
                   </div>
                   <div style={{marginRight:"2em"}}
                   className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                       <button  className="bhktype">1 BHK</button>
                   </div>
                   <div style={{marginRight:"2em"}}
                   className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                       <button  className="bhktype">2 BHK</button>
                   </div>
                   <div style={{marginRight:"2em"}}
                   className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                       <button  className="bhktype">3 BHK</button>
                   </div>
               </div>
               <br></br>

               </div>
             */}
             {/* ****************************************************************************** */}
             <div style={{marginLeft:"4em"}}
               >
               <h1 style={{ fontWeight:600}}>Select your Home Size</h1>
               <br></br>
            <div style={{display:"block"}} className="row">
                 <button onClick={()=>setActive("FirstCard")} className="moversbtn"> RK</button>
                 <button onClick={()=>setActive("SecondCard")} className="moversbtn">1 BHK</button>
                 <button onClick={()=>setActive("ThirdCard")} className="moversbtn">2 BHK</button>
                 <button onClick={()=>setActive("FourCard")} className="moversbtn">3 BHK</button>
             </div>
               <div className="col">
              {active === "FirstCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {0}/>} 
              {active === "SecondCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {1}/>} 
              {active === "ThirdCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {2}/>} 
              {active === "FourCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {3}/>} 
                  {/* <MoversPackersCard title="1"/> */}
                  {/* <MoversPackersCard title="2"/>
                 <MoversPackersCard title="3"/>  */}

             </div>
             </div>  

        </div>
    )
}
