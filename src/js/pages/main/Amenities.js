import React from 'react'
import {Component} from 'react';
import "./bootstrap.css";
import { Link } from "react-router-dom";
import AddPropertyService from '../../addservices/AddPropertyService';


class Amenities extends Component{

    constructor(props){
        super(props);
        this.state ={
            bathroom:'',
            balcony:'',
            waterSupply:'',
            gyms:'',
            nonVeg:'',
            gatedSecurity:'',
            whoWillShowTheHouse:'',
            contactNo:'',
            lift:'',
            internetService:'',
            airConditioner:'',
            gym:''
        }
        this.changeBathroomHandler=this.changeBathroomHandler.bind(this);
        this.changeBalconyHandler=this.changeBalconyHandler.bind(this);
        this.changeWaterSupplyHandler=this.changeWaterSupplyHandler.bind(this);
        this.changeGymsHandler=this.changeGymsHandler.bind(this);
        this.changeNonVegHandler=this.changeNonVegHandler.bind(this);
        this.changeGatedSecurityHandler=this.changeGatedSecurityHandler.bind(this);
        this.changeWhoWillShowTheHouseHandler=this.changeWhoWillShowTheHouseHandler.bind(this);
        this.changeContactNoHandler=this.changeContactNoHandler.bind(this);
        this.changeLiftHandler=this.changeLiftHandler.bind(this);
        this.changeInternetServiceHandler=this.changeInternetServiceHandler.bind(this);
        this.changeAirConditionerHandler=this.changeAirConditionerHandler.bind(this);
        this.changeGymHandler=this.changeGymHandler.bind(this);
    }

    saveAmenDetails = (event)=>{
        event.preventDefault();
          
        let amenDetails={
            bathroom:this.state.bathroom,
        balcony:this.state.balcony,
        waterSupply:this.state.waterSupply,
        gyms:this.state.gyms,
        nonVeg:this.state.nonVeg,
        gatedSecurity:this.state.gatedSecurity,
        whoWillShowTheHouse:this.state.whoWillShowTheHouse,
        contactNo:this.state.contactNo,
        lift:this.state.lift,
        internetService:this.state.internetService,
        airConditioner:this.state.airConditioner,
        gym:this.state.gym
    }
    console.log(" amen details "+ JSON.stringify(amenDetails));

    AddPropertyService.saveAmenDetails(amenDetails);
  }
  changeBathroomHandler=(e)=>{
    this.setState({bathroom: e.target.value});
}

changeBalconyHandler=(e)=>{
    this.setState({balcony: e.target.value});
}

changeWaterSupplyHandler=(e)=>{
    this.setState({waterSupply: e.target.value});
}

changeGymsHandler=(e)=>{
    this.setState({gyms: e.target.value});
}

changeNonVegHandler=(e)=>{
    this.setState({nonVeg: e.target.value});
}

changeGatedSecurityHandler=(e)=>{
    this.setState({gatedSecurity: e.target.value});
}

changeWhoWillShowTheHouseHandler=(e)=>{
    this.setState({whoWillShowTheHouse: e.target.value});
}

changeContactNoHandler=(e)=>{
    this.setState({contactNo: e.target.value});
}

changeLiftHandler=(e)=>{
    this.setState({lift: e.target.value});
}

changeInternetServiceHandler=(e)=>{
    this.setState({internetService: e.target.value});
}
changeAirConditionerHandler=(e)=>{
    this.setState({airConditioner: e.target.value});
}

changeGymHandler=(e)=>{
    this.setState({gym: e.target.value});
}



    render(){
return (
    <div className="container">
    <div class="text-center">
    <h1 className="heading">Amenities Details</h1>
    <h4>Provide additional details about your property to get maximum visibility</h4>
    </div>
            <hr class="hr"/>
            <form>

            <div class="row">
                <div class="col">
                    <label for="formGroupExampleInput">Bathrooms(s)*</label>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            {/* <span class="input-group-text" id="basic-addon1"  >
                                Rs.
                            </span> */}
                        </div>
                        <input type="text" class="form-control-1" placeholder="0" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.bathroom} onChange={this.changeBathroomHandler}/>
                    </div>
                </div>
                <div class="col">
                    <label for="formGroupExampleInput">Balcony</label> 

                    <div class="input-group">
                        <div class="input-group-prepend">
                            {/* <span class="input-group-text" id="basic-addon1"  
                            >Rs. </span> */}
                                
                        </div>
                        <input type="text" class="form-control-1" placeholder="0" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.balcony} onChange={this.changeBalconyHandler}/>
                    </div> 
                 </div> 
                 <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Water Supply</label>
                        <br></br>
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.waterSupply} onChange={this.changeWaterSupplyHandler}>
                            <option>Select</option>
                            <option>Borewell</option>
                            <option>Municipal</option>
                        </select>
                    </div>
                </div>

            </div>
            <br></br>


            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Gyms*</label>
                        <br></br>
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.gyms} onChange={this.changeGymsHandler}>
                            <option>Select</option>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Non Veg Allowed*</label>
                        <br></br>
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.nonVeg} onChange={this.changeNonVegHandler}>
                            <option>Select</option>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div> 
                 </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Gated Security*</label>
                        <br></br>
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.gatedSecurity} onChange={this.changeGatedSecurityHandler}>
                            <option>Select</option>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                </div>

            </div> 
            <br></br>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Who will show the house*</label>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1" value ={this.state.whoWillShowTheHouse} onChange={this.changeWhoWillShowTheHouseHandler}>
                            <option>Select</option>
                            <option>Neighbours</option>
                            <option>Relative</option>
                            <option>Friends</option>
                        </select>
                    </div>
                </div> 
                <div class="col">
                    <label for="exampleFormControlSelect1">Contact No*</label>
                    <br></br>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            {/* <span class="input-group-text" id="basic-addon1"  >
                                 <span><img src="./images/adds/india.svg" width="20px" alt=""/></span> 
                                 <span> +91</span> 
                             </span>  */}
                         </div>
                        <input type="number" class="form_control" placeholder="+91" aria-label="Secondary Number"
                            aria-describedby="basic-addon1" value ={this.state.contactNo} onChange={this.changeContactNoHandler}/>
                    </div>
                </div> 


            </div>
            <br></br>
            <hr class="hr"/>
            <h3>Select the Available Amenities</h3>
            <hr class="hr"/>
            <div class="container ">
                <div class="row d-flex align-items-center justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  value ={this.state.lift} onChange={this.changeLiftHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Lift</label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  value ={this.state.internetService} onChange={this.changeInternetServiceHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Internet
                                Services          </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  value ={this.state.airConditioner} onChange={this.changeAirConditionerHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Air
                                Conditioner       </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  value ={this.state.gym} onChange={this.changeGymHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Gym</label>
                        </div>
                    </div>
                </div>


            </div> 

            <br></br>
            {/* <div class="text-center">
            <Link className="form_control11" to="/locality_details">
                            Next
          </Link>
          </div>
          <br></br>
            <button onClick = {this.savePropertyDetails}class="btn1"> Save & Continue
            
            </button>
             */}
             <div class="row">
                <div class="col">
                    <div class="form-group">
                    <button onClick = {this.saveAmenDetails}class="btn1" > Save 
            
            </button>
                        
                    </div>
                </div>
                <div class="col">
                <a href="/photos" >
                <input type="button" value="Next" className="btn1" />
                </a>
                   
                </div>
                </div>
            <br></br>
        
    
            </form>
            <br></br>
           
           
      
            </div>
);
    }
}
export default Amenities;