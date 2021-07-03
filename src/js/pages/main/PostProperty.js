import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom'
import {AiFillCamera} from "react-icons/ai";

import Webcam from 'react-webcam';
import { useRef } from 'react';
import "./bootstrap.css";
import AC from "../../images/ants/AC.PNG";
import upload from "../../images/ants/upload.png";
import {GiLift} from "react-icons/gi";
import {BsWifi} from "react-icons/bs";
import {GiClubs} from "react-icons/gi";
import {CgGym} from "react-icons/cg";
import {SiIntercom} from "react-icons/si";
import map from "../../images/ants/map.png";
import {FaSwimmer} from "react-icons/fa";
import {RiPlaystationFill} from "react-icons/ri";
import {GiFireShield} from "react-icons/gi";
import {ImLocation2} from "react-icons/im";
import {FaShoppingCart} from "react-icons/fa";
import {GiTeePipe} from "react-icons/gi";
import {GiParkBench} from "react-icons/gi";
import {FaCloudRain} from "react-icons/fa";
import {ImBin} from "react-icons/im";
import {BsHouseDoor} from "react-icons/bs";
import {GiVacuumCleaner} from "react-icons/gi";
import {GiCarBattery} from "react-icons/gi";
import {FaParking} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddPropertyService from '../../addservices/AddPropertyService';


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
          negotiable:'',
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
          //amenity:[],
          lift:'',
          internet:'',
          gym:'',
          ac:'',


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
       // this.changeAmenity=this.changeAmenity.bind(this);
       this.changeLift=this.changeLift.bind(this);
       this.changeInternet=this.changeInternet.bind(this);
       this.changeAC=this.changeAC.bind(this);
       this.changeGym=this.changeGym.bind(this);
        

        
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
       //amenity:this.state.amenity,
       lift:this.state.lift,
       internet:this.state.internet,
       gym:this.state.gym,
       ac:this.state.ac,
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
        this.setState({negotiable: e.target.value});
    }
    // changeNegotiable=(e)=>{
    //     const target=e.target;
    //     var value=target.value;
    //     if(target.checked){
            
    //         this.setState({negotiable:[...this.state.negotiable, value]});
            
           
    //     }else{
    //         this.state.negotiable.splice(value,1);
    //     }
    // }
    
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
    changeLift=(e)=>{
        this.setState({lift: e.target.value});
    }
    changeInternet=(e)=>{
        this.setState({internet: e.target.value});
    }
    changeGym=(e)=>{
        this.setState({gym: e.target.value});
    }
    changeAC=(e)=>{
        this.setState({ac: e.target.value});
    }
   
    
    // changeLift=(e)=>{
    //     const target=e.target;
    //     var value=target.value;
    //     if(target.checked){
            
    //         this.setState({lift:[...this.state.lift, value]});
            
           
    //     }else{
    //         this.state.lift.splice(value,1);
    //     }
    // }
    // changeAC=(e)=>{
    //     const target=e.target;
    //     var value=target.value;
    //     if(target.checked){
            
    //         this.setState({ac:[...this.state.ac, value]});
            
           
    //     }else{
    //         this.state.ac.splice(value,1);
    //     }
    // }
    // changeInternet=(e)=>{
    //     const target=e.target;
    //     var value=target.value;
    //     if(target.checked){
            
    //         this.setState({internet:[...this.state.internet, value]});
            
           
    //     }else{
    //         this.state.internet.splice(value,1);
    //     }
    // }
    // changeGym=(e)=>{
    //     const target=e.target;
    //     var value=target.value;
    //     if(target.checked){
            
    //         this.setState({gym:[...this.state.gym, value]});
            
           
    //     }else{
    //         this.state.gym.splice(value,1);
    //     }
    //}
    
    
    // const webRef=useRef(null)
    
        render(){
    return (
        
            
    <div 
    className="container">
    <div class="text-center">
    
        <h1 className="heading">Property Details</h1>
        <br></br>
        {/* <hr class="hr"></hr> */}
        </div>


        <form 
        action="" className="property_form">


            <div style={{marginTop:"-55px", marginBottom:"-55px"}} 
            className="row">
                <div 
                className="col">
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
            </div>
            

            <div 
            class="row">
               
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
            

           
            <div style={{marginTop:"-55px", marginBottom:"-55px"}} 
            class="row">
                <div class="col">
                    <div class="form-group">
                    <label for="FormSelect1">Floor*</label>
                   
                        <select 
                        style={{width:"100%", marginLeft:"40px"}} 
                        class="form_control" id="FormSelect1"  value ={this.state.floor} onChange={this.changeFloorHandler}>
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
                    <label style={{left:"3rem"}} 
                    for="FormSelect1">Total Floor*</label>
                    
                        <select  style={{width:"100%"}} 
                        class="form_control" id="FormSelect1"  value ={this.state.totalFloor} onChange={this.changeTotalFloorHandler}>
                            <option>Select</option>
                            <option>Ground Only</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
            </div>
                       
         
         {/* <hr style={{marginTop:"25px"}}
           className="hr"></hr> */}
            <div style={{marginTop:"45px"}}
            class="text-center">
            {/* <h1>Locality Details</h1> */}
            <h1 style={{marginBottom:"45px"}}
            className="heading">Locality Details</h1>
            {/* <hr className="hr"></hr>
            */}
            </div>
           
            <div style={{marginTop:"-55px", marginBottom:"-55px"}} 
            class="row">
                <div class="col">
                    <div class="form-group">
                        <label style={{left:"5rem"}}
                        htmlFor="FormSelect1">City*</label>
                        
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
                        <label style={{left:"5rem"}}
                         for="FormSelect1">Locality</label>

                        <input type="text" class="form_control" id="FormSelect1" 
                            placeholder=" Near By LandMark" value={this.state.locality} onChange={this.changeLocalityHandler} />
                    </div>
                </div>

            </div>
            
            <div className="row">
            <div className="col">
            <div class="form-group">
                <label style={{left:"5rem"}}
                htmlFor="FormSelect1">Street/Area</label>
                
                <textarea style={{width:"100%",marginLeft:"60px"}}
                name="" className="form-control1" id="" cols="30" rows="10" value={this.state.street} onChange={this.changeStreetHandler}></textarea>
            </div>
            </div>
            </div>
            
            
            {/* <hr class="hr"/> */}
            <div style={{marginTop:"45px"}} class="text-center">
            <h1 className="heading">Mark Locality on Map</h1>
            {/* <h1>Mark Locality on Map</h1> */}
            <br></br>
            <img style={{width:"30em"}} 
             src={map}/>
            </div>
            <hr class="hr"/>
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.13090970786!2d78.05081053394773!3d26.214396020056427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1604642810957!5m2!1sen!2sin"
                width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe> */}
           
            {/* <hr class="hr"/> */}
         
            <div style={{marginTop:"45px"}} class="text-center">
            <h1 className="heading">Rental Details</h1>
            <h4>Provide Rental Details About Your Property</h4>
            </div>
           
           
            
            {/* <hr class="hr"/> */}
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Property Available For</label>
            <div class="form-group">
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="radio"  value="rent" onChange={this.changePropertyAvailabeFor}/> 
                         <label class="formGroupExampleInput">  Only Rent 
                        <span class="check"></span> 
                        </label> 
                        <br></br>
                        
                         
                       
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"name="radio"  value="lease" onChange={this.changePropertyAvailabeFor}/>  
                         <label class="formGroupExampleInput">  Only Lease 
                         <span class="check"></span>  
                               </label>
            </div>
            <div style={{marginLeft:"50em", marginTop:"-50px"}}
            class="form-group">
            <input type="checkbox" id="formGroupExampleInput"  value="negotiable" onChange={this.changeNegotiable}/>
                <label for="formGroupExampleInput">  Negotiable</label>
            </div>

            <br></br>
            <br></br>
            <div  style={{marginTop:"-35px", marginBottom:"-35px"}} 
             class="row">
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
                <div className="col">
            
            <div class="form-group">
                <label for="FormSelect1">Maintenance</label>
                
                <select className="form_control" id="FormSelect1"  value ={this.state.maintenance} onChange={this.changeMaintenanceHandler}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <option>Select</option>
                    <option>Maintenance Included</option>
                </select>
            </div>
          </div>

            </div>
            <br></br>
            <br></br>
            
           
            
           
           

             <div style={{marginTop:"-55px", marginBottom:"-55px"}} 
             class="row">
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
                            <option>Family</option>
                            <option>Single</option>
                        </select>
                    </div>
                </div>
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

            </div>
            

            <div  style={{marginTop:"-5px", marginBottom:"-55px"}} 
             class="row">
               
                <div class="col">
                    <div class="form-group">
                        <label style={{top:".5rem"}}
                        for="exampleFormControlSelect1">Parking*</label>
                       
                        <select style={{width:"100%", marginLeft:"40px"}}
                         class="form_control" id="exampleFormControlSelect1"  value ={this.state.parking} onChange={this.changeParkingHandler}>
                            <option>Select</option>
                            <option>Bike</option>
                            <option>Bike and Car</option>
                        </select>
                    </div>
                </div>
                <div className="col">
           

            <div 
            class="form-group">
                <label style={{left:"2.5rem"}}
                for="exampleFormControlSelect1">Description</label>
            
                <textarea style={{width:"100%"}}
                  name="" class="form-control1" id="" cols="30" rows="10"  value ={this.state.description} onChange={this.changeDescriptionHandler}></textarea>
            </div>
            </div>

            </div>

           
          
           <br></br>
           <br></br>
           <br></br>
           {/* <hr class="hr"/> */}


            <div class="text-center">
            <h1 className="heading">Property Photos</h1>
            
            <h4>Upload Photos and Videos</h4>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
            {/* <hr class="hr"/> */}

            <div class="container">
                <h5 style={{marginLeft:"5em"}}>UPLOAD UPTO 20 PHOTOS</h5>
                <br></br>
                <div style={{marginLeft:"58em", marginTop:"-3em"}}
                className="webcam">
                {/* Click Here To Take Image From Camera */}
                Image From Camera
                <br></br>
                <Link to="/camera">
                {/* <button style={{marginTop:"10px",border:"none",marginLeft:"6em", width:"15em", height:"2.5em", borderRadius:"5px", color:"white",background:"green"}}>
                    Take image from Camera
                </button> */}
                
                <AiFillCamera size={50} style={{marginLeft:"3.5em"}}/>
                
                    
                </Link>
                
                   
                </div>
                
                <div class="container d-flex align-items-center justify-content-center">
                
                <div style={{marginTop:"5em",marginLeft:"2em"}}
                class="row d-flex align-items-center justify-content-between">
                    
                    ​<div  style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                            
                       
                       
                         </div> 
                         ​<div  style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                         class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                            
                        </div> 
                         ​<div  style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                         class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                            
                        </div> 
                        ​<div  style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                        </div>
                        ​<div 
                         style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                           <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                        </div>
                        ​<div 
                         style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                           <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                        </div>
                        ​<div 
                         style={{marginTop:"-70px", marginBottom:"-55px",marginRight:"3em"}} 
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                           <img src={upload} class="img-thumbnail" width="120px" alt=""/>
                        </div>
                        
                    </div>

                 
   
                    ​
                </div> 


                <br></br>
                {/* <hr class="hr"/> */}
                <br></br>
                <h4 class="text-center">OR</h4>
                <br></br>
                {/* <hr class="hr"/> */}
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
            <br></br>
            {/* <hr class="hr"/> */}
            <div class="text-center">
            <h2 className="heading">Amenities</h2>
            
            <h4>Provide additional details about your property to get maximum visibility</h4>
            </div>
            <br></br>
            <br></br>
            {/* <hr class="hr"/> */}

            <div style={{marginTop:"-55px", marginBottom:"-55px"}} 
            class="row">
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

            <div style={{marginTop:"-70px", marginBottom:"-55px"}} 
            class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Who will show the house*</label>
                        
                        <select style={{width:"100%", marginLeft:"40px"}}
                         class="form_control" id="exampleFormControlSelect1" value ={this.state.whoWillShowTheHouse} onChange={this.changeWhoWillShowTheHouseHandler}>
                            <option>Select</option>
                            <option>Neighbours</option>
                            <option>Relative</option>
                            <option>Friends</option>
                        </select>
                    </div>
                </div> 
                <div class="col">
                <div className="form-group">
                    <label style={{left:"2.5rem"}}
                    for="exampleFormControlSelect1">Contact No*</label>
                    

        
                         
                        <input style={{width:"100%"}}
                          type="number" class="form_control" placeholder="+91" aria-label="Secondary Number"
                            aria-describedby="basic-addon1"  value ={this.state.contactNo} onChange={this.changeContactNoHandler}/>
                   
                   </div>
                    {/* </div>
                    
                </div>  */}
                </div>


            </div>
            <br></br>
            {/* <hr class="hr"/> */}
            <h3 style={{marginLeft:"50px",fontSize:"20px",fontWeight:600,marginTop:"3em"}}>Select the Available Amenities</h3>
           
            <div style={{marginLeft:"50px"}}
            class="container ">
            
                <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"6em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" onChange={this.changeLift}/>
                            <label for="formGroupExampleInput"> <GiLift/> Lift</label>
                        </div>
                    </div>
                    <div style={{marginRight:"5em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"   value="Internet" onChange={this.changeInternet}/>
                            <label for="formGroupExampleInput"> <BsWifi/> Internet
                                Services          </label>
                        </div>
                    </div>
                    <div  style={{marginRight:"5em"}}
                     class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="AC" onChange={this.changeAC}/>
                            <label for="formGroupExampleInput"> <img style={{width:"20px"}}
                            src={AC}/> Air Conditioner       </label>
                            {/* <FontAwesomeIcon icon="fas fa-air-conditioner" /> */}
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                    <input type="checkbox" id="formGroupExampleInput"   value="Gym" onChange={this.changeGym}/>
                            <label for="formGroupExampleInput"> <CgGym/> Gym</label>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.1em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" onChange={this.changeLift}/>
                            <label for="formGroupExampleInput"> <GiClubs/> Club House</label>
                        </div>
                    </div>
                    <div style={{marginRight:"8.6em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"   value="Internet" onChange={this.changeInternet}/>
                            <label for="formGroupExampleInput"> <SiIntercom/> Intercom
                                         </label>
                        </div>
                    </div>
                    <div style={{marginRight:"4.8em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="AC" onChange={this.changeAC}/>
                            <label for="formGroupExampleInput"> <FaSwimmer/> Swimming Pool       </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                    <input type="checkbox" id="formGroupExampleInput"   value="Gym" onChange={this.changeGym}/>
                            <label for="formGroupExampleInput"> <RiPlaystationFill/> Children Play Area</label>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"2.4em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" onChange={this.changeLift}/>
                            <label for="formGroupExampleInput"> <GiFireShield/> Fire Safety</label>
                        </div>
                    </div>
                    <div style={{marginRight:"6.7em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"   value="Internet" onChange={this.changeInternet}/>
                            <label for="formGroupExampleInput"> <BsHouseDoor/> Servant Area  </label>
                        </div>
                    </div>
                    <div style={{marginRight:"4.3em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="AC" onChange={this.changeAC}/>
                            <label for="formGroupExampleInput"> <FaShoppingCart/> Shopping Center       </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                    <input type="checkbox" id="formGroupExampleInput"   value="Gym" onChange={this.changeGym}/>
                            <label for="formGroupExampleInput"> <GiTeePipe/> Gas PipeLine</label>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"5.1em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" onChange={this.changeLift}/>
                            <label for="formGroupExampleInput"> <GiParkBench/> Park </label>
                        </div>
                    </div>
                    <div style={{marginRight:"2.4em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"   value="Internet" onChange={this.changeInternet}/>
                            <label for="formGroupExampleInput"> <FaCloudRain/> Rain Water Harvesting </label>
                        </div>
                    </div>
                    <div style={{marginRight:"1em"}}
                     class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="AC" onChange={this.changeAC}/>
                            <label for="formGroupExampleInput"> <ImBin/> Sewage Treatment Plant  </label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                    <input type="checkbox" id="formGroupExampleInput"   value="Gym" onChange={this.changeGym}/>
                            <label for="formGroupExampleInput"> <GiVacuumCleaner/> House keeping</label>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"0.7em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  value="Lift" onChange={this.changeLift}/>
                            <label for="formGroupExampleInput"> <GiCarBattery/> Power Backup</label>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"   value="Internet" onChange={this.changeInternet}/>
                            <label for="formGroupExampleInput"> <FaParking/> Visitor Parking         </label>
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
                    <button 
                    style={{width:"100%", marginLeft:"60px"}}onClick = {this.savePropertyDetails}class="btn1" > Submit 
            
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
