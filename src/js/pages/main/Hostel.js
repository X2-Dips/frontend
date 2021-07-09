import React from 'react'
import {Component} from 'react';

import {FcFilingCabinet} from "react-icons/fc";
import {GoDeviceDesktop} from 'react-icons/go';
import {FaBed} from 'react-icons/fa';
import {FaMale} from "react-icons/fa";
import {GiFruitBowl} from "react-icons/gi";
import {FaFemale} from "react-icons/fa";
import {FaBeer} from "react-icons/fa";
import {GiChickenOven} from "react-icons/gi";
import {MdSmokeFree} from "react-icons/md";
import {ImManWoman} from "react-icons/im";
import {RiBatterySaverFill} from "react-icons/ri";
import {CgSmartHomeRefrigerator} from "react-icons/cg";
import {GrUserManager} from "react-icons/gr";
import {ImMan} from "react-icons/im";
import {FaHotTub} from 'react-icons/fa';
import AC from "../../images/ants/AC.PNG";
import {FaBath} from 'react-icons/fa';
import {GiLift} from 'react-icons/gi';
import {BsWifi} from 'react-icons/bs';
import double1 from "../../images/adds/double1.png";
import first2 from "../../images/adds/first2.png";


import third1 from "../../images/adds/third1.png";
import four1 from "../../images/adds/four1.png";

import AddPropertyService from '../../addservices/AddPropertyService';
import "./Hostel_and_Property_form.css";
import UploadMultipleImages from './UploadMultipleImages';

class Hostel extends Component {

    constructor(props){
        super(props)
        this.state ={
            
            room:[],
            expectedRent:'',
            expectedDeposit:'',
            roomAmenities:[],
            city:'',
            locality:'',
            street:'',
            propertyAvailableFor:'',
            availableFrom:'',
            preferdGuest:'',
            food:'',
            foodAvailable:[],
            rules:[],
            closingTime:'',
            description:'',
            laundry:'',
            roomCleaning:'',
            wardenFacility:'',
            //availableAmenities:[],
            parking:'' ,  
            lift:'',
            wifi:'',
            cooking:'',
            mess:'',
            refrigerator:'',
            powerbackUp:'',
            tv:'',
        }
        this.changeRoom=this.changeRoom.bind(this);
        this.changeExpectedRentHandler=this.changeExpectedRentHandler.bind(this);
        this.changeExpectedDepositHandler=this.changeExpectedDepositHandler.bind(this);
        this.changeRoomAmenitiesHandler=this.changeRoomAmenitiesHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeLocalityHandler=this.changeLocalityHandler.bind(this);
        this.changeStreetHandler=this.changeStreetHandler.bind(this);
        // this.onChangeValue = this.onChangeValue.bind(this);
        this.changePropertyAvailabeFor = this.changePropertyAvailabeFor.bind(this);
        // this.changeGender=this.changeGender.bind(this);
        this.changeAvailableFromHandler=this.changeAvailableFromHandler.bind(this);
        this.changePreferdGuestHandler=this.changePreferdGuestHandler.bind(this);
        this.changeFoodHandler=this.changeFoodHandler.bind(this);
        this.changeFoodAvailableHandler=this.changeFoodAvailableHandler.bind(this);
        this.changeRulesHandler=this.changeRulesHandler.bind(this);
        this.changeClosingTimeHandler=this.changeClosingTimeHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeLaundryHandler=this.changeLaundryHandler.bind(this);
        this.changeRoomCleaningHandler=this.changeRoomCleaningHandler.bind(this);
        this.changeWardenFacilityHandler=this.changeWardenFacilityHandler.bind(this);
        //this.changeAvailableAmenitiesHandler=this.changeAvailableAmenitiesHandler.bind(this);
        this.changeParkingHandler=this.changeParkingHandler.bind(this);  
        this.changeLift=this.changeLift.bind(this);
        this.changeTv=this.changeTv.bind(this);
        this.changeMess=this.changeMess.bind(this);
        this.changeRefrigerator  = this.changeRefrigerator.bind(this);
        this.changeCooking=this.changeCooking.bind(this);
        this.changePowerBackUp=this.changePowerBackUp.bind(this);
        this.changeWifi=this.changeWifi.bind(this);
        
    }
    saveHostelDetails = (event)=>{
        event.preventDefault();
          
        let hostelDetails={
           
            room:this.state.room,
            expectedRent:this.state.expectedRent,
            expectedDeposit:this.state.expectedDeposit,
            roomAmenities:this.state.roomAmenities,
            city:this.state.city,
            locality:this.state.locality,
            street:this.state.street,
            
            // gender:this.state.gender,

            propertyAvailableFor:this.state.propertyAvailableFor,
            availableFrom:this.state.availableFrom,
            preferdGuest:this.state.preferdGuest,
            food:this.state.food,
            foodAvailable:this.state.foodAvailable,
            rules:this.state.rules,
            closingTime:this.state.closingTime,
            description:this.state.description,
            laundry:this.state.laundry,
            roomCleaning:this.state.roomCleaning,
            wardenFacility:this.state.wardenFacility,
            availableAmenities:this.state.availableAmenities,
            parking:this.state.parking,
            tv:this.state.tv,
            cooking:this.state.cooking,
            wifi:this.state.wifi,
            lift:this.state.lift,
            mess:this.state.mess,
            refrigerator:this.state.refrigerator,
            powerbackUp:this.state.powerbackUp,
            

        }
        console.warn(this.state);
        console.log(" hostel details "+ JSON.stringify(hostelDetails));

        AddPropertyService.saveHostelDetails(hostelDetails);
      }
    //   
    changeRoom=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){
            // this.state.room[value]=value;
            this.setState({room:[...this.state.room, value]});
            
            // this.setState({
            //         'room':updatedRoom
            //     })
        }else{
            this.state.room.splice(value,1);
        }
        // const name = e.target.name;
        // let updatedRoom=Object.assign({},this.state.room, {[name]:value})
        // this.setState({
        //     'room':updatedRoom
        // })
        // this.setState({room:e.target.value});
    }
    changeExpectedRentHandler=(e)=>{
        this.setState({expectedRent: e.target.value});
    }
    changeExpectedDepositHandler=(e)=>{
        this.setState({expectedDeposit: e.target.value});
    }
    changeRoomAmenitiesHandler=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){          
            this.setState({roomAmenities:[...this.state.roomAmenities, value]});
                    }
                    else{
            this.state.roomAmenities.splice(value,1);
        }

    
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
    // changeGender=(e)=>{
    //     this.setState({gender: e.target.value});
    // }

    changeAvailableFromHandler=(e)=>{
        this.setState({availableFrom: e.target.value});
    }
    changePreferdGuestHandler=(e)=>{
        this.setState({preferdGuest: e.target.value});
    }
    changeFoodHandler=(e)=>{
        this.setState({food: e.target.value});
    }
    changeFoodAvailableHandler=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){          
            this.setState({foodAvailable:[...this.state.foodAvailable, value]});
                    }
                    else{
            this.state.foodAvailable.splice(value,1);
        }
    }
    changeRulesHandler=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){          
            this.setState({rules:[...this.state.rules, value]});
                    }
                    else{
            this.state.rules.splice(value,1);
        }

    }
    changeClosingTimeHandler=(e)=>{
        this.setState({closingTime: e.target.value});
    }
    changeDescriptionHandler=(e)=>{
        this.setState({description: e.target.value});
    }
    changeLaundryHandler=(e)=>{
        this.setState({laundry: e.target.value});
    }
    changeRoomCleaningHandler=(e)=>{
        this.setState({roomCleaning: e.target.value});
    }
    changeWardenFacilityHandler=(e)=>{
        this.setState({wardenFacility: e.target.value});
    }
    changeAvailableAmenitiesHandler=(e)=>{
        const target=e.target;
        var value=target.value;
        if(target.checked){          
            this.setState({availableAmenities:[...this.state.availableAmenities, value]});
                    }
                    else{
            this.state.availableAmenities.splice(value,1);
        }
    }
    changeParkingHandler=(e)=>{
        this.setState({parking: e.target.value});
    }
    changeMess=(e)=>{
        this.setState({mess: e.target.value});
    }
    changeTv=(e)=>{
        this.setState({tv: e.target.value});
    }
    changeCooking=(e)=>{
        this.setState({cooking: e.target.value});
    }
    changeLift=(e)=>{
        this.setState({lift: e.target.value});
    }
    changeWifi=(e)=>{
        this.setState({wifi: e.target.value});
    }
    changeRefrigerator=(e)=>{
        this.setState({refrigerator: e.target.value});
    }
    changePowerBackUp=(e)=>{
        this.setState({powerbackUp: e.target.value});
    }
   

    render() {
    return (
        <div className="container">
             <div class="text-center">
    
    <h1 className="heading">Room Details</h1>
    
    <h8>Provide details about your place to find a tenant soon</h8>
    {/* <hr class="hr"></hr> */}
    </div>
    <form action="" className="hostel_form">
   <h2 className="TypeOFRoom">Select the type of rooms available in your Hostel/PG*</h2>
   
   <div class="container ">
   <div className="roomCheck">
   <div class="row">
                <div class="col">
                <div class="form-group3">
                 <img src={first2} alt="Logo" />
                <br></br>
                <input type="checkbox" name="single"  value="single" onChange={this.changeRoom}/>
                <label for="single"> Single</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group3">
                <img src={double1} alt="Logo" />
                <br></br>
                <input type="checkbox" name="double" value="double" onChange={this.changeRoom} />
                <label for="double"> Double</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group3">
                <img src={third1} alt="Logo" />
                <br></br>
                <input type="checkbox" name="three"  value="three" onChange={this.changeRoom}/>
                 <label for="three"> Three</label>
                 </div>
                 </div>
                 <div class="col">
                 <div class="form-group3">
                 <img src={four1} alt="Logo" />
                <br></br>
                 <input type="checkbox"  name="four"  value="four" onChange={this.changeRoom}/>
                 <label for="four"> Four</label>
                 </div>
                 </div>
                </div>
                </div>
                </div>


                
                
                <div class ="text-center">
                <img src={third1} alt="Logo" />
                <br></br>
                <label for="label">Three Room Details</label>

                </div>
                <br></br>
                <div style={{marginTop:"-55px", marginBottom:"-55px"}}
                class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="FormSelect1">Expected Rent Per Person* </label>
                        <input type="text" class="form_control" id="formInput" placeholder="  Enter Amount" value ={this.state.expectedRent} onChange={this.changeExpectedRentHandler} />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="FormSelect1">Expected Deposit Per Person*</label>
                        
                        <input type="text" class="form_control" id="formInput" placeholder="  Enter Amount" value ={this.state.expectedDeposit} onChange={this.changeExpectedDepositHandler} />

                    </div>
                </div>
            </div>
            <br></br>
            <h2 style={{marginLeft:"3em"}}>Room Amenities</h2>
            
           
                <div style={{marginLeft:"3em"}}
                class ="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group3">
                            <input type="checkbox"   value="cupboard" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput"> <FcFilingCabinet/> Cupboard 
                            </label>
                        </div>
                        </div>
               
                        <div style={{marginRight:"3em"}}
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group3">
                            <input type="checkbox"   value="tv" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput"> <GoDeviceDesktop/> TV
                         </label>
                        </div>
                        </div>
                   
                        <div style={{marginRight:"3em"}}
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group3">
                            <input type="checkbox"  value="bedding" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput"> <FaBed/> Bedding     </label>
                        </div>
                        </div>
                        
                        
                        <div style={{marginRight:"3em"}}
                         class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group3">
                            <input type="checkbox"  value="geyser" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput"> <FaHotTub/> Geyser    </label>
                        </div>
                        </div>
                        <div style={{marginRight:"3em"}}
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group3">
                            <input type="checkbox"  value="ac" onChange={this.changeRoomAmenitiesHandler} />
                            <label for="formGroupExampleInput"> <img style={{width:"20px"}}
                            src={AC}/>  AirConditioner</label>
                        </div>
                        </div>
                        <div style={{marginRight:"3em"}}
                        class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group3">
                            <input type="checkbox"  value="attached washroom" onChange={this.changeRoomAmenitiesHandler} />
                            <label for="formGroupExampleInput"> <FaBath/>  Washroom   </label>
                        </div>
                        </div>
                        </div>
                        
                 
                    
                    
                       <br></br>
                       <br></br>
                       {/* <hr class="hr"/> */}
                       
                       <div class="text-center">
            <h1 className="heading">Locality Details</h1>
            </div>
        <br></br>
        {/* <hr class="hr"></hr> */}
        {/* <div class="container"> */}
        <div style={{marginTop:"-55px", marginBottom:"-55px"}}
        class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="label">City*</label>
                        
                    
                        <select class="form_control" id="exampleFormControlSelect1" value={this.state.city} onChange={this.changeCityHandler}>
                            <option>Select</option>
                            <option>Bangalore</option>
                            <option>gwalior</option>
                            <option>bhind</option>

                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="label">Locality</label>
                        
                        <input type="text" class="form_control" id="formGroupExampleInput"
                            placeholder="Near By LandMark" value={this.state.locality} onChange={this.changeLocalityHandler} />
                    </div>
                </div>

            </div>
            <br></br>
            <div style={{marginTop:"-55px", marginBottom:"-55px"}}
            className="row">
            <div className="col">
            <div class="form-group">
                <label for="label">Street/Area</label>
                
                <textarea name="" class="form-control1" id="" cols="30" rows="10" value={this.state.street} onChange={this.changeStreetHandler}></textarea>
                </div>
             </div>
             </div>
            <br></br>
            {/* <hr class="hr"/> */}

            <div className="container">
        <div class="text-center">
            <h1 className="heading">PG Details</h1>
            {/* <hr class="hr"></hr> */}
            </div>
        <br></br>
        
        <lable className="propAvailable"> Property Available For</lable> 
        <br></br> 
        <br></br>
        <div className="maleFemale">
        <div 
        style={{marginTop:"-35px", marginBottom:"-55px"}}
         class ="row">
                     <div class ="col">
                     <div class="form-group2">

        
       
                        <input type="radio"  name="propertyAvailableFor" value="male" onChange={this.changePropertyAvailabeFor}></input>
                        <label for="male"> <FaMale/> Male</label>
                        </div>
                        </div>
                        <div class ="col">
                        <div className="form-group2">
                        <input type="radio"  name="propertyAvailableFor" value="female" onChange={this.changePropertyAvailabeFor}/>
                        <label for="female"> <FaFemale/> Female</label>
                        </div>
                        </div>
                        
                        <div class ="col">
                        <div className="form-group2">
                        <input type="radio"  name="propertyAvailableFor" value="anyone" onChange={this.changePropertyAvailabeFor}/>
                        <label for="female"> <ImManWoman/> Anyone</label>
                        </div>
                        </div>
                        
                        </div>
                        </div>
      
                              
                 <br></br>
                 <br></br>
                 <br></br>

                 <div style={{marginTop:"-55px", marginBottom:"-55px"}}
                 class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Available From*</label>
                        
                        <input type="date" class="form_control" value={this.state.availableFrom} onChange={this.changeAvailableFromHandler}  />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Preferd Guests*</label>
                        
                        <select class="form_control" id="exampleFormControlSelect1" value={this.state.preferdGuest} onChange={this.changePreferdGuestHandler}>
                        <option>Select</option>
                            <option>Working Professional</option>
                            <option>Student</option>
                            <option>Both</option>
                        </select>
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>

            
            <div class = "container">

            <div style={{marginTop:"-55px", marginBottom:"-55px",marginLeft:"35px"}}
            className="row">
            <div className="col">
            <div class="form-group1">
                        <label for="exampleFormControlSelect1">Food Included</label>
                        
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.food} onChange={this.changeFoodHandler}>
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    </div>
                    </div>
                             <br></br>
                             <br></br>

                             <div 
                             style={{marginTop:"-35px", marginBottom:"-55px", marginLeft:"30px",marginRight:"20em"}}class ="row">
                <div class="col">
                        <div class="form-group3">
                            <input type="checkbox" value="Breakfast" onChange={this.changeFoodAvailableHandler}/>
                            <label for="formGroupExampleInput"> <GiFruitBowl/> Breakfast</label>
                        </div>
                        </div>
               
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"   value="Lunch" onChange={this.changeFoodAvailableHandler}/>
                            <label for="formGroupExampleInput"> <GiFruitBowl/>  Lunch
                         </label>
                        </div>
                        </div>
                   
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"  value="Dinner" onChange={this.changeFoodAvailableHandler}/>
                            <label for="formGroupExampleInput"> <GiFruitBowl/> Dinner    </label>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        
                        <h2 style={{marginLeft:"3em"}}>PG/Hostel Rules</h2>
            
           <br></br>
           <div style={{marginLeft:"3em"}}
                class ="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput"  value="no smoking" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"> <MdSmokeFree/> No Smoking</label>
                    </div>
                    </div>
           
                    <div style={{marginRight:"3em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput"  value="no guardian" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"> <GrUserManager/> Guardian Stay
                     </label>
                    </div>
                    </div>
               
                    <div style={{marginRight:"3em"}}
                      class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput" value="no boy's entry" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"> <ImMan/> No Boy's Entry     </label>
                    </div>
                    </div>
                   
                    <div style={{marginRight:"3em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput" value="no drinking" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"> <FaBeer/>  No Drinking   </label>
                    </div>
                    </div>
                    <div style={{marginRight:"3em"}}
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput" value="no non-veg" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"><GiChickenOven/>  No Non-Veg   </label>
                    </div>
                    </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div  style={{marginTop:"-55px", marginBottom:"-55px",marginLeft:"40px"}}
                         className="row">
                        <div className="col">
                        <div class="form-group1">
                        <label style={{}}
                        for="exampleFormControlSelect1">Gate Closing Time*</label>
                        
                        <input 
                        type="time" class="form_control" value={this.state.closingTime} onChange={this.changeClosingTimeHandler}/>
                    </div>
                    </div>
                    <div className="col">
                    <div class="form-group1">
                        <label for="exampleFormControlSelect1">Parking*</label>
                        <select class="form_control" id="exampleFormControlSelect1"  value={this.state.parking} onChange={this.changeParkingHandler}>
                            <option>Select</option>
                            <option>Bike</option>
                            <option>Car</option>
                            <option>Both</option>
                            <option>None</option>
                        </select>
                    </div>
                    </div>
                 
                   
           
                    </div>
                    <br></br>
                    
                    <div className="row">
                    <div className="col">
                    <div class="form-group">
                    
                <label for="label">Description</label>
                
                <textarea name="" class="form-control1" id="" cols="30" rows="10" value={this.state.description} onChange={this.changeDescriptionHandler}></textarea>
            </div>
           
            </div>
                    </div>
                  
                     </div>
                     <br></br>
                     {/* <hr class="hr"/> */}
                 
                     <div class="text-center">
               <h1 className="heading">Amenities </h1>
                </div>
                   {/* <hr class="hr"/> */}
               
                  
                    <h1 style={{marginLeft:"3em"}}>Available Services</h1>
                  
                    
            <div style={{marginTop:"-45px", marginBottom:"-55px"}}
            class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Laundry</label>
                        
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.laundry} onChange={this.changeLaundryHandler}>
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Room Cleaning</label>
                        
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.roomCleaning} onChange={this.changeRoomCleaningHandler}>
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div> 
                 </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Warden Facility</label>
                        
                        <select class="form-control-1" id="exampleFormControlSelect1"  value ={this.state.wardenFacility} onChange={this.changeWardenFacilityHandler}>
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>

            </div>
                             <br></br>
                             <h1 className="hostelAmen">Available Amenities</h1>
                    
                    <div class="container">
                    <div style={{marginLeft:"3em"}}
                class ="row d-flex align-items-center justify-content-between">
                <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox"   value="Common TV" onChange={this.changeTv}/>
                        <label for="formGroupExampleInput"> <GoDeviceDesktop/> TV</label>
                    </div>
                    </div>
           
                    <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox"  value="Mess" onChange={this.changeMess} />
                        <label for="formGroupExampleInput"> <GiChickenOven/>  Mess
                     </label>
                    </div>
                    </div>
               
                    <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox"  value="Lift" onChange={this.changeLift}/>
                        <label for="formGroupExampleInput"> <GiLift/> Lift    </label>
                    </div>
                    </div>
                    <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox" value="Wifi" onChange={this.changeWifi}/>
                        <label for="formGroupExampleInput"> <BsWifi/> Wifi   </label>
                    </div>
                    </div>
                   
                    <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox"  value="Refrigerator" onChange={this.changeRefrigerator}/>
                        <label for="formGroupExampleInput"> <CgSmartHomeRefrigerator/> Refrigerator  </label>
                    </div>
                    </div>
                   
                    <div style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox"  value="Cooking " onChange={this.changeCooking}/>
                        <label for="formGroupExampleInput"> <GiChickenOven/>  Cooking   </label>
                    </div>
                    </div>
                    <div 
                    style={{marginRight:"3em"}}
                class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="form-group3">
                        <input type="checkbox"  value="Power BackUP" onChange={this.changePowerBackUp}/>
                        <label for="formGroupExampleInput"> <RiBatterySaverFill/> PowerBackUp   </label>
                    </div>
                    </div>

                    
                    </div>
                    </div>
                    <br></br>
                   
                    <br></br>

                    {/* <hr class="hr"></hr> */}
                    <div class="text-center">
            <h1 className="heading">Gallery</h1>
            
            <h4>Upload Photos and Videos</h4>
            </div>
            {/* <hr class="hr"/> */}

            <div class="container">
                
            {/* <h5 >UPLOAD UPTO 20 PHOTOS</h5> */}
                <br></br>
               
                
                <div class="container d-flex align-items-center justify-content-center">
                <div className="imageContainer">
                <UploadMultipleImages/>
                    </div>

                    <br></br>
                   
                       
                        
                  
                    ​
                </div> 


                <br></br>
               
                <br></br>
                <h4 class="text-center">OR</h4>
                <br></br>
               
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

             <div class="row">
                <div class="col">
                    <div class="form-group">
                    <button style={{width:"94%", marginLeft:"-10px"}}
                     onClick = {this.saveHostelDetails}class="btn1" > Submit
            
            </button>
                        
                    </div>
                </div>
               
                </div>
            
            <br></br>
        



        
                  
               






                
                    
                


    </form>
        </div>
    )
}
}

export default Hostel
