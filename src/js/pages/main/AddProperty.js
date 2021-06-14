// import React,{useState} from "react";
// // import { Link } from "react-router-dom";

// import { RiLoginCircleFill } from "react-icons/ri";
// function clickMe(){
//     alert("next page");
// }
// const types = ['Rent', 'Hostel/PG'];
// function ToogleGroup(){
//     const [active, setActive] = useState(types[0]);
//     return <div>
//         {types.map(type => (
//             <button>
//                 {type}
//             </button>
//         ))}
//     </div>
// }

// const AddProperty = () => {
//   return (
//     <div className="container">
//       <div className="form-center ">
//         <h1>Post Your Property Advertisement For Free
// </h1>
        

//         <form action="" className="add_property_form">
//           {/* <div className="form-col-div"> */}
//             <div className="form-group">
//               {/* <label htmlFor="firstName">First Name*</label> */}
//               <input
//                 type="text"
//                 placeholder="Enter Your City*"
//                 id="city_name"
//                 required
//               />
//             </div>
//             <h1><h2>PROPERTY TYPE</h2></h1>

//             <ToogleGroup/>
            
//             <div className="form-group">
//             <input type="button" value="POST YOUR PROPERTY" className="inp-btn" />
//           </div>
            


        
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProperty;


import React from 'react'
import "./bootstrap.css"

// const types = ['Rent', 'Hostel/PG'];
// function ToogleGroup(){
//     const [active, setActive] = useState(types[0]);
//     return <div>
     
//         {types.map(type => (
           
//             <button className="inp-btn1">
//                 {type}
//             </button>
           
//         ))}
        
//     </div>
// }


const AddProperty = () => {
    return (
        < div class="container">

        <h1 class="text-center">Post Your Property Advertisement For Free</h1>
        <br></br>
        <br></br>
        <form>
            <div class="container">
            <div class="citySearchBar">
               {/* <input type="text" class="form-control" placeholder="Enter Your City" aria-label="Username"
                    aria-describedby="basic-addon1"/> */}
                     <input type="text" className="searchCity" placeholder="      Enter Your City" />
                   </div>
                   <br></br>
                   

            <h2 class="text-center sub-heading-text mt-3 mb-4 mt-lg-5 mb-lg-5">PROPERTY TYPE</h2>

            {/* <ToogleGroup/> */}
            {/* <div class="container"> */}
                {/* <div class="column">
                    <div class="col-lg-6 col-md-6 col-sm-12 text-center"> */}
                        {/* <button class=" btn btn-outline-dark btn-block mb-3">Rent</button> */}
                        {/* <button type="button" class="btn btn-secondary btn-lg" >Rent</button> */}
                        {/* <input type="button" value="Rent" className="inp-btn" />
                    </div> */}

                    {/* <div class="col-lg-6 col-md-6 col-sm-12 text-center mb-3"> */}
                        {/* <button class="btn btn-outline-dark  btn-block">Hostel/PG</button> */}
                        {/* <input type="button" value="Hostel/PG" className="inp-btn" />
                    </div>

                    </div> */}
            {/* </div> */}
            <br></br>
            <br></br>
            <br></br>
            {/* <div class="container mt-lg-5 text-center">
                <a href="addpropertyform" >
                <input type="button" value="Post Your Property" className="inp-btn" />
                </a>

            </div> */}
            <div class="row">
                <div class="col">
                    <div class="form-group">
                    <a href="/addpropertyform" >
                <input type="button" value="Rent" className="btn4" />
                </a>
                        
                    </div>
                </div>
                <div class="col">
                <div class="form-group">
                <a href="/hostel" >
                <input type="button" value="Hostel & PG" className="btn4" />
                </a>
                </div>
                {/* <Link className="form_control11" to="/rental_details">
                            Next
          </Link> */}
                   
                </div>
                </div>
            <br></br>
            </div>
            </form>

                    
        </div>
    )
}

export default AddProperty

