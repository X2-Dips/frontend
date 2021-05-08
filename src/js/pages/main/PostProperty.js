import React from 'react';
import {Component} from 'react';
import "./bootstrap.css";
import { Link } from "react-router-dom";
import AddPropertyService from '../../addservices/AddPropertyService';
// import { render } from '@testing-library/react';
import axios from "axios";



// const PostProperty = () => {
    class PostProperty extends Component {

    constructor(props){
        super(props);
        this.state ={
          property:[],
          id:0,
          apartmentType:'',
          apartmentName:'',
          propertyAge:'',
          facing:'',
          propertySize:'',
          bhkType:'',
          floor:'',
          totalFloor:'',
          city:'',
          locality:'',
          street:'',
          propertyAvailableFor:'',
          expectedRent:'',
          expectedDeposit:'',
          negotiable:[],
          maintenance:'',
          availableFrom:'',
          preferdTenants:'',
          furnishing:'',
          parking:'',
          description:'',
          bathroom:'',
          balcony:'',
          waterSupply:'',
          gyms:'',
          nonVeg:'',
          gatedSecurity:'',
          whoWillShowTheHouse:'',
          contactNo:'',
          amenity:[]

        }
        this.changeApartmentTypeHandler=this.changeApartmentTypeHandler.bind(this);
        this.changeApartmentNameHandler=this.changeApartmentNameHandler.bind(this);
        this.changePropertyAgeHandler=this.changePropertyAgeHandler.bind(this);
        this.changeFacingHandler=this.changeFacingHandler.bind(this);
        this.changePropertySizeHandler=this.changePropertySizeHandler.bind(this);
        this.changeBhkTypeHandler=this.changeBhkTypeHandler.bind(this);
        this.changeFloorHandler=this.changeFloorHandler.bind(this);
        this.changeTotalFloorHandler=this.changeTotalFloorHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeLocalityHandler=this.changeLocalityHandler.bind(this);
        this.changeStreetHandler=this.changeStreetHandler.bind(this);
        this.changePropertyAvailabeFor = this.changePropertyAvailabeFor.bind(this);
        this.changeExpectedRentHandler=this.changeExpectedRentHandler.bind(this);
        this.changeExpectedDepositHandler=this.changeExpectedDepositHandler.bind(this);
        this.changeNegotiable=this.changeNegotiable.bind(this);
        this.changeMaintenanceHandler=this.changeMaintenanceHandler.bind(this);
        this.changeAvailableFromHandler=this.changeAvailableFromHandler.bind(this);
        this.changePreferdTenantsHandler=this.changePreferdTenantsHandler.bind(this);
        this.changeFurnishingHandler=this.changeFurnishingHandler.bind(this);
        this.changeParkingHandler=this.changeParkingHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeBathroomHandler=this.changeBathroomHandler.bind(this);
        this.changeBalconyHandler=this.changeBalconyHandler.bind(this);
        this.changeWaterSupplyHandler=this.changeWaterSupplyHandler.bind(this);
        this.changeGymsHandler=this.changeGymsHandler.bind(this);
        this.changeNonVegHandler=this.changeNonVegHandler.bind(this);
        this.changeGatedSecurityHandler=this.changeGatedSecurityHandler.bind(this);
        this.changeWhoWillShowTheHouseHandler=this.changeWhoWillShowTheHouseHandler.bind(this);
        this.changeContactNoHandler=this.changeContactNoHandler.bind(this);
        this.changeAmenity=this.changeAmenity.bind(this);
        

        
    }
   
        // 
      

     

      savePropertyDetails = (event)=>{
        event.preventDefault();
          
        let propertyDetails={apartmentType:this.state.apartmentType, apartmentName:this.state.apartmentName,
        propertyAge:this.state.propertyAge,
        facing:this.state.facing,
        propertySize:this.state.propertySize,
        bhkType:this.state.bhkType,
        floor:this.state.floor,
        totalFloor:this.state.totalFloor,
        city:this.state.city,
        locality:this.state.locality,
        street:this.state.street,
        propertyAvailableFor:this.state.propertyAvailableFor,
        expectedRent:this.state.expectedRent,
        expectedDeposit:this.state.expectedDeposit,
        negotiable:this.state.negotiable,
        maintenance:this.state.maintenance,
        availableFrom:this.state.availableFrom,
        preferdTenants:this.state.preferdTenants,
        furnishing:this.state.furnishing,
        parking:this.state.parking,
        description:this.state.description,
        bathroom:this.state.bathroom,
        balcony:this.state.balcony,
        waterSupply:this.state.waterSupply,
        gyms:this.state.gyms,
        nonVeg:this.state.nonVeg,
        gatedSecurity:this.state.gatedSecurity,
        whoWillShowTheHouse:this.state.whoWillShowTheHouse,
        contactNo:this.state.contactNo,
       amenity:this.state.amenity
    }

        console.log(" property details "+ JSON.stringify(propertyDetails));

        AddPropertyService.savePropertyDetails(propertyDetails);
      }
      changeApartmentTypeHandler=(event)=>{
        this.setState({apartmentType: event.target.value});
    }
    changeApartmentNameHandler=(e)=>{
        this.setState({apartmentName: e.target.value});
    }
    changePropertyAgeHandler=(e)=>{
        this.setState({propertyAge: e.target.value});
    }
    changeFacingHandler=(e)=>{
        this.setState({facing: e.target.value});
    }
    changePropertySizeHandler=(e)=>{
        this.setState({propertySize: e.target.value});
    }
    changeBhkTypeHandler=(e)=>{
        this.setState({bhkType: e.target.value});
    }
    changeFloorHandler=(e)=>{
        this.setState({floor: e.target.value});
    }
    changeTotalFloorHandler=(e)=>{
        this.setState({totalFloor: e.target.value});
    }
    changeCityHandler=(e)=>{
        this.setState({city: e.target.value});
    }
    changeLocalityHandler=(e)=>{
        this.setState({locality: e.target.value});
    }
    changeStreetHandler=(e)=>{
        this.setState({street: e.target.value});
    }
    changePropertyAvailabeFor=(e)=>{
        this.setState({propertyAvailableFor: e.target.value});
    }
    changeExpectedRentHandler=(e)=>{
        this.setState({expectedRent: e.target.value});
    }
    
    changeExpectedDepositHandler=(e)=>{
        this.setState({expectedDeposit: e.target.value});
    }
    changeNegotiable=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){
            
            this.setState({negotiable:[...this.state.negotiable, value]});
            
           
        }else{
            this.state.negotiable.splice(value,1);
        }
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
    
    changeAmenity=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){
            
            this.setState({amenity:[...this.state.amenity, value]});
            
           
        }else{
            this.state.amenity.splice(value,1);
        }
    }
    
    
    
        render(){
    return (
        
            
    <div className="container">
    <div class="text-center">
    
        <h1 className="heading">Property Details</h1>
        <br></br>
        <hr class="hr"></hr>
        </div>


        <form action="" className="property_form">


            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlfor="Apartment_Type">Apartment Type* </label>
                        <select className="form_control" id="FormSelect1"  value ={this.state.apartmentType} onChange={this.changeApartmentTypeHandler} > 
                            <option>Select</option>
                            <option>Apartments</option>
                            <option>Hostel</option>
                            <option>Rooms</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label htmlFor="FormSelect1">Apartment Name*</label>
                        <input type="text" class="form_control" id="formInput" placeholder="  Apartment Name"  value ={this.state.apartmentName} onChange={this.changeApartmentNameHandler}/>

                    </div>
                </div>
            </div>
            

            <div class="row">
                <div class="col">
                    <div class="form-group">
                    <label for="FormSelect1">Property Age*</label>
                   
                        <select class="form_control" id="FormSelect1"  value ={this.state.propertyAge}
                        onChange={this.changePropertyAgeHandler} >
                            <option>Select</option>
                            <option>Under Construction</option>
                            <option>Less than a year</option>
                            <option>1 to 3 year </option>
                            <option>3 to 5 year </option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="FormSelect1">Facing</label>
                       
                        <select class="form_control" id="FormSelect1"  value ={this.state.facing} onChange={this.changeFacingHandler}>
                            <option>Select</option>
                            <option>North</option>
                            <option>South</option>
                            <option>West</option>
                            <option>East</option>
                        </select>
                    </div>
                </div>
            </div>
            

            <div class="row">
                <div class="col">
                    <div class="form-group">
                    <label for="formInput">Property Size*</label>
                   
                <input type="text" class="form_control" id="formInput" placeholder="Property Size" value={this.state.propertySize} onChange={this.changePropertySizeHandler}/>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                    <label for="FormSelect1">BHK Type*</label>
                    
                        <select class="form_control" id="FormSelect1"  value ={this.state.bhkType} onChange={this.changeBhkTypeHandler}>
                        <option>Select</option>
                            <option>1 BHK</option>
                            <option>2 BHK</option>
                            <option>3 BHK</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <div class="form-group">
                    <label for="FormSelect1">Floor*</label>
                   
                        <select class="form_control" id="FormSelect1"  value ={this.state.floor} onChange={this.changeFloorHandler}>
                            <option>Select</option>
                            <option>Ground</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                    <label for="FormSelect1">Total Floor*</label>
                    
                        <select class="form_control" id="FormSelect1"  value ={this.state.totalFloor} onChange={this.changeTotalFloorHandler}>
                            <option>Select</option>
                            <option>Ground Only</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
            </div>
                       
            <hr class="hr"/>
            <div class="text-center">
            {/* <h1>Locality Details</h1> */}
            <h1 className="heading">Locality Details</h1>
            </div>
            <hr class="hr"/>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label htmlFor="FormSelect1">City*</label>
                        
                        <select class="form_control" id="FormSelect1" value={this.state.city} onChange={this.changeCityHandler}>
                            <option>Select</option>
                            <option>Bangalore</option>
                            <option>gwalior</option>
                            <option>bhind</option>

                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label for="FormSelect1">Locality</label>
                        
                        <input type="text" class="form_control" id="FormSelect1"
                            placeholder="Near By LandMark" value={this.state.locality} onChange={this.changeLocalityHandler} />
                    </div>
                </div>

            </div>
            
            <div className="row">
            <div className="col">
            <div class="form-group">
                <label htmlFor="FormSelect1">Street/Area</label>
                
                <textarea name="" className="form-control1" id="" cols="30" rows="10" value={this.state.street} onChange={this.changeStreetHandler}></textarea>
            </div>
            </div>
            </div>
            
            <br></br>
            <hr class="hr"/>
            <div class="text-center">
            <h1 className="heading">Mark Locality on Map</h1>
            {/* <h1>Mark Locality on Map</h1> */}
            </div>
            <hr class="hr"/>
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.13090970786!2d78.05081053394773!3d26.214396020056427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1604642810957!5m2!1sen!2sin"
                width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe> */}
            <br></br>
            <hr class="hr"/>
         
            <div class="text-center">
            <h1 className="heading">Rental Details</h1>
            <h4>Provide Rental Details About Your Property</h4>
            </div>
           
           
            
            <hr class="hr"/>
            <label>Property Available For</label>
            <div class="form-group">
            
            <input type="radio" name="radio"  value="rent" onChange={this.changePropertyAvailabeFor}/> 
                         <label class="formGroupExampleInput">  Only Rent 
                        <span class="check"></span> 
                        </label> 
                        <br></br>
                        
                         
                       
                         <input type="radio"name="radio"  value="lease" onChange={this.changePropertyAvailabeFor}/>  
                         <label class="formGroupExampleInput">  Only Lease 
                         <span class="check"></span>  
                               </label>
            </div>
            
            <div class="row">
                <div class="col">
                <div className="form-group">
                    <label for="formGroupExampleInput">Expected Rent*</label>

                   
                       
                        <input type="text" class="form_control" placeholder="max upto 1.2lacks" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.expectedRent} onChange={this.changeExpectedRentHandler}/>
                    
                </div>
                </div>
                <div class="col">
                <div className="form-group">
                    <label for="formGroupExampleInput">Expected Deposit*</label>

                        <input type="text" class="form_control" placeholder="max upto 10k" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.expectedDeposit} onChange={this.changeExpectedDepositHandler}/>
                    </div>
                </div>

            </div>
            
            <div class="form-group">
                <input type="checkbox" id="formGroupExampleInput"  value="negotiable" onChange={this.changeNegotiable}/>
                <label for="formGroupExampleInput">  Negotiable</label>
            </div>

            
           
            <div className="row">
                <div className="col">
            
            <div class="form-group">
                <label for="FormSelect1">Maintenance</label>
                
                <select className="form_control" id="FormSelect1"  value ={this.state.maintenance} onChange={this.changeMaintenanceHandler}>
                    <option>Select</option>
                    <option>Maintenance Included</option>
                </select>
            </div>
          </div>
            </div>

             <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Available From*</label>
                        
                        <input type="date" class="form_control"  value ={this.state.availableFrom} onChange={this.changeAvailableFromHandler}/>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Preferd Tenants*</label>
                      
                        <select class="form_control" id="exampleFormControlSelect1"  value ={this.state.preferdTenants} onChange={this.changePreferdTenantsHandler}>
                            <option>Select</option>
                            <option>Faminly</option>
                            <option>Single</option>
                        </select>
                    </div>
                </div>

            </div>
            

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Furnishing*</label>
                        
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
                       
                        <select class="form_control" id="exampleFormControlSelect1"  value ={this.state.parking} onChange={this.changeParkingHandler}>
                            <option>Select</option>
                            <option>Bike</option>
                            <option>Bike and Car</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col">
           

            <div class="form-group">
                <label for="exampleFormControlSelect1">Description</label>
            
                <textarea name="" class="form-control1" id="" cols="30" rows="10"  value ={this.state.description} onChange={this.changeDescriptionHandler}></textarea>
            </div>
            </div>
            </div>

          
            <hr class="hr"/>


            <div class="text-center">
            <h1 className="heading">Property Photos</h1>
            
            <h4>Upload Photos and Videos</h4>
            </div>
            <hr class="hr"/>

            <div class="container">
                <h6>UPLOAD UPTO 20 PHOTOS</h6>
                <br></br>
                <div class="container d-flex align-items-center justify-content-center">
                <div class="row">
                    <div class="col">
                        <div class="container col-xl-3 col-lg-4 col-md-6 col-sm-12 flex-box mb-2 ">
                             <img src="data:image/png;base64,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" 
                            class="img-thumbnail" width="150px" alt=""/>
                            </div> 
                         </div> 
                         ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                            
                        </div> 
                        ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                        </div>
                        ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                        </div>
                    </div>
                    
                    ​
                </div> 


                <br></br>
                <hr class="hr"/>
                <br></br>
                <h4 class="text-center">OR</h4>
                <br></br>
                <hr class="hr"/>
                <div class="text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98N-G2yNHOYoeJRr4OKeI_e-hyeWeTMGNyw&usqp=CAU" width="30px" alt=""/>
                    <br></br>
                    <h2 class="text-center">Add Video to get 3X more responces.</h2>
                    <h3>90% tenants contact on properties with videos</h3>
                    <br></br>
                    <button class="btn">Add Videos</button>
                    <br></br>
                    

                </div> 

             </div>

            <br></br>
            <hr class="hr"/>
            <div class="text-center">
            <h2 className="heading">Amenities</h2>
            
            <h4>Provide additional details about your property to get maximum visibility</h4>
            </div>
            <hr class="hr"/>

            <div class="row">
                <div class="col">
                <div className="form-group">
                    <label for="formGroupExampleInput">Bathrooms(s)*</label>

                   
                        <input type="text" class="form-control-1" placeholder="0" aria-label="Username"
                            aria-describedby="basic-addon1"value ={this.state.bathroom} onChange={this.changeBathroomHandler}/>
                    </div>
                </div>
                <div class="col">
                <div className="form-group">
                    <label for="formGroupExampleInput">Balcony</label> 

                    
                        
                        <input type="text" class="form-control-1" placeholder="0" aria-label="Username"
                            aria-describedby="basic-addon1" value ={this.state.balcony} onChange={this.changeBalconyHandler}/>
                     
                 </div> 
                 </div>
                 <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Water Supply</label>
                       
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.waterSupply} onChange={this.changeWaterSupplyHandler}>
                            <option>Select</option>
                            <option>Borewell</option>
                            <option>Municipal</option>
                        </select>
                    </div>
                </div>

            </div>
           


            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Gyms*</label>
                     
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
                        
                        <select class="form_control" id="exampleFormControlSelect1" value ={this.state.whoWillShowTheHouse} onChange={this.changeWhoWillShowTheHouseHandler}>
                            <option>Select</option>
                            <option>Neighbours</option>
                            <option>Relative</option>
                            <option>Friends</option>
                        </select>
                    </div>
                </div> 
                <div class="col">
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Contact No*</label>
                    

        
                         
                        <input type="number" class="form_control" placeholder="+91" aria-label="Secondary Number"
                            aria-describedby="basic-addon1"  value ={this.state.contactNo} onChange={this.changeContactNoHandler}/>
                   
                   </div>
                    {/* </div>
                    
                </div>  */}
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
                            <input type="checkbox" id="formGroupExampleInput"  value="lift" onChange={this.changeAmenity}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Lift</label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"   value="internet" onChange={this.changeAmenity}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Internet
                                Services          </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  value="AC" onChange={this.changeAmenity}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Air
                                Conditioner       </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"   value="gym" onChange={this.changeAmenity}/>
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
          </div> */}
          {/* <br></br>
          <div class="container mt-lg-5 text-center">
                <a href="locality_details"  onClick={this.savePropertyDetails}>
            
      
    
                <input type="button" value="Save & Continue" className="btn1" /> */}
                
                
            {/* <button onClick = {this.savePropertyDetails}class="btn1" > Save & Continue
            
            </button>
            <div class="text-center">
            <Link className="form_control11" to="/locality_details">
                            Next
          </Link>
          </div> */}
            {/* </a>
            </div> */}
            <div class="row">
                <div class="col">
                    <div class="form-group">
                    <button onClick = {this.savePropertyDetails}class="btn1" > Submit 
            
            </button>
                        
                    </div>
                </div>
               
                </div>
            
            <br></br>
        
    
            </form>
            <br></br>
           
           
      
            </div>
            
        
    );

    
}

    }
    export default PostProperty;
