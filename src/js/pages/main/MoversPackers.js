// import React,{useState} from 'react'
// import moverspackers from "../../images/ants/moverspackers.jpg";
// import MoversPackersCard from './MoversPackersCard';
// import MoversData from './MoversData';

// export default function MoversPackers() {
//    const [active, setActive] = useState("FirstCard");
//     return (
        
//         <div 
//         className="container">
//         <div>
//             <h1 style={{marginLeft:"13em", fontSize:"40px"}}>Movers & Packers</h1>
//         </div>
//         <div>
//             <img style={{height:"27.5em", marginLeft:"10px"}}
//             src={moverspackers}>
                
//             </img>
         
//         </div>
//         <form style={{marginTop:"-14em",height:"25em"}} 
//         className="container10">
               
//                 <div>
//                   <h1  style={{color:"black", textAlign:"center", fontWeight:"600"}}>Where are you moving?</h1>
//                 </div>
//                 <br></br>
               
//                 <div class="city">

//                 <label>City</label> <input type="text" required placeholder="Enter your City"/>

//                   </div>
//                   <br></br>
//                   <br></br>
//                   <div class="movingfrom">

//                     <label>Moving From</label> <input type="text" required placeholder="Enter Place Name"/>

//                </div>
//                <br></br>
//                <br></br>
//                <div class="movingto">

// <label>Moving to</label> <input type="text" required placeholder="Enter Place Name"/>

// </div>
//                 <div class="btn-box">



// <button>Search</button>

// </div>


//                 </form>
//                 <br></br>
           
            
//              <div style={{marginLeft:"4em"}}
//                >
//                <h1 style={{ fontWeight:600}}>Select your Home Size</h1>
//                <br></br>
//             <div style={{display:"block"}} className="row">
//                  <button onClick={()=>setActive("FirstCard")} className="moversbtn"> RK</button>
//                  <button onClick={()=>setActive("SecondCard")} className="moversbtn">1 BHK</button>
//                  <button onClick={()=>setActive("ThirdCard")} className="moversbtn">2 BHK</button>
//                  <button onClick={()=>setActive("FourCard")} className="moversbtn">3 BHK</button>
//              </div>
//                <div className="col">
//               {active === "FirstCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {0}/>} 
//               {active === "SecondCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {1}/>} 
//               {active === "ThirdCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {2}/>} 
//               {active === "FourCard" &&  <MoversPackersCard data ={MoversData} cardIndex= {3}/>} 
                 
//              </div>
//              </div>  

//         </div>
//     )
// }
import React from 'react'
import moverspackers from "../../images/ants/moverspackers.jpg";
function MoversPackers() {
  return (
    <div 
             className="container">
             <div>
                 <h1 style={{marginLeft:"13em", fontSize:"40px"}}>Movers & Packers</h1>
             </div>
             <div>
                 <img style={{height:"27.5em", marginLeft:"10px"}}
                 src={moverspackers} alt="">
                    
                 </img>
             
             </div>
             <form style={{marginTop:"-14em",height:"25em"}} 
             className="container10">
                   
                     <div>
                       <h1  style={{color:"black", textAlign:"center", fontWeight:"600"}}>Where are you moving?</h1>
                     </div>
                     <br></br>
                   
                     <div class="city">
    
                     <label>City</label> <input type="text" required placeholder="Enter your City"/>
    
                       </div>
                       <br></br>
                       <br></br>
                       <div class="movingfrom">
    
                         <label>Moving From</label> <input type="text" required placeholder="Enter Place Name"/>
    
                    </div>
                    <br></br>
                   <br></br>
                   <div class="movingto">
    
     <label>Moving to</label> <input type="text" required placeholder="Enter Place Name"/>
    
     </div>
                     <div class="btn-box">
    
    
    
     <button>Search</button>
    
     </div>
    
    
                     </form>
                     <br></br>
                     <div>
                       <h1 className="luggageHeading">Luggage Details</h1>
                       <div className="luggageCheckbox">
                       <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.1em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  TV & TV Stand </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Chair </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"4.5em"}}/>
                        </div>
                    </div>
                    <div
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Washing Machine </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em"}}/>
                        </div>
                    </div>
                   
                    </div>
                    <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.1em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Single Cot </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em",marginLeft:"2.7em"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"1.9em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Cartoon Box </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"4px"}}/>
                        </div>
                    </div><div style={{marginRight:"7.9em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Double Cot </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em",marginLeft:"4em"}}/>
                        </div>
                    </div>
                    
                    <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Iron Almirah </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"1.7em"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"1.9em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Center Table </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"5.1em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Sofa </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"8em"}}/>
                        </div>
                    </div>
                   
                    <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Diwan </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"6.8rem"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Shoe Rack </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"1em"}}/>
                        </div>
                    </div>
                    <div
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Dinning Table </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"2.6em"}}/>
                        </div>
                    </div>
                   
                    
                    </div>
                    <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Fridge </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"5em"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Matress </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"2.8em"}}/>
                        </div>
                    </div>
                    <div 
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Water Purifier </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"2.6em"}}/>
                        </div>
                    </div>
                    </div>
                    <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Study Table </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"1.8em"}}/>
                        </div>
                    </div>
                    <div style={{marginRight:"2em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Wardrobe </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em",marginLeft:"1.7em"}}/>
                        </div>
                    </div>
                    <div 
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" />
                            <label for="formGroupExampleInput">  Suitcase </label>
                            <input type="number" style={{width:"2.8em",height:"1.8em", marginLeft:"5.6em"}}/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                     </div>
                     
                     </div>
  )
}
export default  MoversPackers
