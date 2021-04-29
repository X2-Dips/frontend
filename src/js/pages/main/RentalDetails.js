import React from 'react'
import PostProperty from './PostProperty';
import {Component} from 'react';
import "./bootstrap.css";
import { Link } from "react-router-dom";
import AddPropertyService from '../../addservices/AddPropertyService';


class RentalDetails extends Component{

    constructor(props){
        super(props);
        this.state ={
            expectedRent:'',
          expectedDeposit:'',
          maintenance:'',
          availableFrom:'',
          preferdTenants:'',
          furnishing:'',
          parking:'',
          description:''
        }
        this.changeExpectedRentHandler=this.changeExpectedRentHandler.bind(this);
        this.changeExpectedDepositHandler=this.changeExpectedDepositHandler.bind(this);
        this.changeMaintenanceHandler=this.changeMaintenanceHandler.bind(this);
        this.changeAvailableFromHandler=this.changeAvailableFromHandler.bind(this);
        this.changePreferdTenantsHandler=this.changePreferdTenantsHandler.bind(this);
        this.changeFurnishingHandler=this.changeFurnishingHandler.bind(this);
        this.changeParkingHandler=this.changeParkingHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
    }

    saveRentalDetails = (event)=>{
        event.preventDefault();
          
        let rentalDetails={
            expectedRent:this.state.expectedRent,
        expectedDeposit:this.state.expectedDeposit,
        maintenance:this.state.maintenance,
        availableFrom:this.state.availableFrom,
        preferdTenants:this.state.preferdTenants,
        furnishing:this.state.furnishing,
        parking:this.state.parking,
        description:this.state.description
        }
        console.log(" rental details "+ JSON.stringify(rentalDetails));

        AddPropertyService.saveRentalDetails(rentalDetails);
      }
      changeExpectedRentHandler=(e)=>{
        this.setState({expectedRent: e.target.value});
    }
    
    changeExpectedDepositHandler=(e)=>{
        this.setState({expectedDeposit: e.target.value});
    }
    
    changeMaintenanceHandler=(e)=>{
        this.setState({maintenance: e.target.value});
    }
    
    changeAvailableFromHandler=(e)=>{
        this.setState({availableFrom: e.target.value});
    }
    
    changePreferdTenantsHandler=(e)=>{
        this.setState({preferdTenants: e.target.value});
    }
    
    changeFurnishingHandler=(e)=>{
        this.setState({furnishing: e.target.value});
    }
    changeParkingHandler=(e)=>{
        this.setState({parking: e.target.value});
    }
    
    changeDescriptionHandler=(e)=>{
        this.setState({description: e.target.value});
    }
    
    render(){
        return (
            
                
        <div className="container">
        <div class = "text-center">
            <h1 className="heading">Rental Details</h1>
            <h3>Provide Rental Details About Your Property</h3>
            </div>
            <br></br>
            <hr class="hr"></hr>
            {/* <h4>Property Available For</h4>
            <br></br>
            */}
    
            <form>
            
            
            <div class="form-group">
            <br></br>
               
                 <div class ="row">
                     <div class ="col">
                     <h2> Property Available For</h2>  
                     <br></br>
                       
                         <input type="radio" name="radio" checked/> 
                         <label class="formGroupExampleInput">  Only Rent 
                        <span class="check"></span> 
                        </label> 
                        <br></br>
                        
                          <br></br>
                       
                         <input type="radio"name="radio"/>  
                         <label class="formGroupExampleInput">  Only Lease 
                         <span class="check"></span>  
                               </label>
                    
                     </div>
                 </div>
               
              
                
            </div>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col">
                    <label for="formGroupExampleInput">Expected Rent*</label>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"  >
                                Rs.
                            </span>
                        </div>
                        <input type="text" class="form_control" placeholder="max upto 1.2lacks" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.expectedRent} onChange={this.changeExpectedRentHandler}/>
                    </div>
                </div>
                <div class="col">
                    <label for="formGroupExampleInput">Expected Deposit*</label>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"  >
                                Rs.
                            </span>
                        </div>
                        <input type="text" class="form_control" placeholder="max upto 10k" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.expectedDeposit} onChange={this.changeExpectedDepositHandler}/>
                    </div>
                </div>

            </div>
            <br></br>
            <div class="form-group">
                <input type="checkbox" id="formGroupExampleInput"/>
                <label for="formGroupExampleInput">  Negotiable</label>
            </div>
            <br>

            </br>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Maintenance</label>
                <br></br>
                <select class="form_control-2" id="exampleFormControlSelect1"  value ={this.state.maintenance} onChange={this.changeMaintenanceHandler}>
                    <option>Select</option>
                    <option>Maintenance Included</option>
                </select>
            </div>
            <br></br>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Available From*</label>
                        <br></br>
                        <input type="date" class="form_control"  value ={this.state.availableFrom} onChange={this.changeAvailableFromHandler}/>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Preferd Tenants*</label>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1"  value ={this.state.preferdTenants} onChange={this.changePreferdTenantsHandler}>
                            <option>Select</option>
                            <option>Faminly</option>
                            <option>Single</option>
                        </select>
                    </div>
                </div>

            </div>
            <br></br>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Furnishing*</label>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1"  value ={this.state.furnishing} onChange={this.changeFurnishingHandler}>
                            <option>Select</option>
                            <option>Furnished</option>
                            <option>Unfurnished</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Parking*</label>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1"  value ={this.state.parking} onChange={this.changeParkingHandler}>
                            <option>Select</option>
                            <option>Bike</option>
                            <option>Bike and Car</option>
                        </select>
                    </div>
                </div>

            </div>
            <br></br>

            <div class="form-group">
                <label for="exampleFormControlSelect1">Description</label>
                <br></br>
                <textarea name="" class="form-control1" id="" cols="30" rows="10"  value ={this.state.description} onChange={this.changeDescriptionHandler}></textarea>
            </div>

            <br></br>
            {/* <div class="text-center">
            <Link className="form_control11" to="/amenities_details">
                            Next
          </Link>
          </div> */}
          <div class="row">
                <div class="col">
                    <div class="form-group">
                    <button onClick = {this.saveRentalDetails}class="btn1" > Save 
            
            </button>
                        
                    </div>
                </div>
                <div class="col">
                <a href="/amenities_details" >
                <input type="button" value="Next" className="btn1" />
                </a>
                {/* <Link className="form_control11" to="/amenities_details">
                            Next
          </Link>
                    */}
                </div>
                </div>
          <br></br>
        
    
            </form>
            <br></br>
           
           
      
            </div>
            
            
        
    );

    
}

    }
    export default RentalDetails;

