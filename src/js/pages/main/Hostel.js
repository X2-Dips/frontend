import React from 'react'
import {Component} from 'react';
import double1 from "../../images/adds/double1.png";
import first2 from "../../images/adds/first2.png";

import third1 from "../../images/adds/third1.png";
import four1 from "../../images/adds/four1.png";

import AddPropertyService from '../../addservices/AddPropertyService';
import "./bootstrap.css";

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
    <hr class="hr"></hr>
    </div>
    <form action="" className="hostel_form">
   <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select the type of rooms available in your Hostel/PG*</h2>
   
   <div class="container ">
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


                <br></br>
                <br></br>
                <div class ="text-center">
                <img src={third1} alt="Logo" />
                <br></br>
                <label for="label">Three Room Details</label>

                </div>
                <br></br>
                <div class="row">
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
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room Amenities</h2>
            
           
                <div class ="row">
                <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"   value="cupboard" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput">Cupboard 
                            </label>
                        </div>
                        </div>
               
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"   value="tv" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput">  TV
                         </label>
                        </div>
                        </div>
                   
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"  value="bedding" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput">
                              Bedding     </label>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"  value="geyser" onChange={this.changeRoomAmenitiesHandler}/>
                            <label for="formGroupExampleInput"> Geyser    </label>
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"  value="ac" onChange={this.changeRoomAmenitiesHandler} />
                            <label for="formGroupExampleInput">  AirConditioner</label>
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"  value="attached washroom" onChange={this.changeRoomAmenitiesHandler} />
                            <label for="formGroupExampleInput">  Washroom   </label>
                        </div>
                        </div>
                        
                 
                    
                       </div>
                       <br></br>
                       <hr class="hr"/>
                       
                       <div class="text-center">
            <h1 className="heading">Locality Details</h1>
            </div>
        <br></br>
        <hr class="hr"></hr>
        {/* <div class="container"> */}
        <div class="row">
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
            <div className="row">
            <div className="col">
            <div class="form-group">
                <label for="label">Street/Area</label>
                
                <textarea name="" class="form-control1" id="" cols="30" rows="10" value={this.state.street} onChange={this.changeStreetHandler}></textarea>
                </div>
             </div>
             </div>
            <br></br>
            <hr class="hr"/>

            <div className="container">
        <div class="text-center">
            <h1 className="heading">PG Details</h1>
            <hr class="hr"></hr>
            </div>
        <br></br>
        
        <lable> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Property Available For</lable> 
        <br></br> 
        <div class ="row">
                     <div class ="col">
                     <div class="form-group2">

        
       
                        <input type="radio"  name="propertyAvailableFor" value="male" onChange={this.changePropertyAvailabeFor}></input>
                        <label for="male">Male</label>
                        </div>
                        </div>
                        <div class ="col">
                        <div className="form-group2">
                        <input type="radio"  name="propertyAvailableFor" value="female" onChange={this.changePropertyAvailabeFor}/>
                        <label for="female">Female</label>
                        </div>
                        </div>
                        
                        <div class ="col">
                        <div className="form-group2">
                        <input type="radio"  name="propertyAvailableFor" value="anyone" onChange={this.changePropertyAvailabeFor}/>
                        <label for="female">Anyone</label>
                        </div>
                        </div>
                        
                        </div>
      
                              
                 <br></br>

                 <div class="row">
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

            
            <div class = "container">
            <div className="row">
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

                             <div class ="row">
                <div class="col">
                        <div class="form-group3">
                            <input type="checkbox" value="Breakfast" onChange={this.changeFoodAvailableHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Breakfast</label>
                        </div>
                        </div>
               
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"   value="Lunch" onChange={this.changeFoodAvailableHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Lunch
                         </label>
                        </div>
                        </div>
                   
                        <div class="col">
                        <div class="form-group3">
                            <input type="checkbox"  value="Dinner" onChange={this.changeFoodAvailableHandler}/>
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Dinner    </label>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br></br>
                        
                        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PG/Hostel Rules</h2>
            
           
            <div class ="row">
            <div class="col">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput"  value="no smoking" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> No Smoking</label>
                    </div>
                    </div>
           
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput"  value="no guardian" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput">Guardian Stay
                     </label>
                    </div>
                    </div>
               
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput" value="no boy's entry" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Boy's Entry     </label>
                    </div>
                    </div>
                    </div>
                    <div className ="row">
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput" value="no drinking" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Drinking   </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox" id="formGroupExampleInput" value="no non-veg" onChange={this.changeRulesHandler}/>
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Non-Veg   </label>
                    </div>
                    </div>
                        </div>
                        <div className="row">
                        <div className="col">
                        <div class="form-group1">
                        <label for="exampleFormControlSelect1">Gate Closing Time*</label>
                        
                        <input type="time" class="form_control" value={this.state.closingTime} onChange={this.changeClosingTimeHandler}/>
                    </div>
                    </div>
                    </div>
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
                     <hr class="hr"/>
                 
                     <div class="text-center">
               <h1 className="heading">Amenities </h1>
                </div>
                   <hr class="hr"/>
                  
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available Services</h1>
                    
                    
            <div class="row">
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
                             <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available Amenities</h1>
                    
                    <div class="container">
                    <div class="row">
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox"   value="Common TV" onChange={this.changeTv}/>
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> TV</label>
                    </div>
                    </div>
           
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox"  value="Mess" onChange={this.changeMess} />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Mess
                     </label>
                    </div>
                    </div>
               
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox"  value="Lift" onChange={this.changeLift}/>
                        <label for="formGroupExampleInput">  Lift    </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox" value="Wifi" onChange={this.changeWifi}/>
                        <label for="formGroupExampleInput">  Wifi   </label>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox"  value="Refrigerator" onChange={this.changeRefrigerator}/>
                        <label for="formGroupExampleInput">  Refrigerator  </label>
                    </div>
                    </div>
                   
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox"  value="Cooking " onChange={this.changeCooking}/>
                        <label for="formGroupExampleInput">  Cooking   </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group3">
                        <input type="checkbox"  value="Power BackUP" onChange={this.changePowerBackUp}/>
                        <label for="formGroupExampleInput">  PowerBackUp   </label>
                    </div>
                    </div>

                    
                    </div>
                    </div>
                    <br></br>
                    <div className="row">
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

                    <hr class="hr"></hr>
                    <div class="text-center">
            <h1 className="heading">Gallery</h1>
            
            <h4>Upload Photos and Videos</h4>
            </div>
            <hr class="hr"/>

            <div class="container">
                <h7>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UPLOAD UPTO 20 PHOTOS</h7>
                <br></br>
                <div class="container d-flex align-items-center justify-content-center">
                <div class="row">
                ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                            
                        </div> 
                        
                         ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                            
                        </div> 
                        ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                        </div>
                        ​<div class="col">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAflBMVEUAAAD///+7u7smJiaQkJB0dHSWlpZ3d3f4+PiEhIT8/PzExMQaGhrOzs7p6enm5uasrKygoKAUFBQ+Pj7Z2dlXV1fz8/Ph4eGBgYEzMzNGRkZsbGxOTk65ubnNzc1iYmI2NjYhISGlpaUsLCxfX18jIyMLCwtVVVU9PT1FRUUU35LkAAAKCUlEQVR4nO2da1vjOAyFXVraUkqvEAq9wFCGmf3/f3AbeiH19ciWnOw+OZ+J8ds4tizJsupQNZzez+7Wm5fx4kt9LX4tPwe97UNBbiaXFOmvp9vBXln19drbjYT6mCQccHSzWtjhLnrtPwp2NU4o4G4dgDup25+I9pcsCHDSC727qjY30p2mCAB8fCPQHTUfyvccVBDw8YmMV6rflBknADj5jMIr9ZEHICQ/YC8a76D9QyYGr3yAu68UvoPWDfgUPYC3iXil7vOROOQEfBwz8Ck1yAljkwvwgwXvoG7NC78DkL70uVXvum8FLN4Z+Q5rYm6oqmyAE1Y8Ve+HaAF85OZT6i0/2FkmoACfUn9qQDvKABThU+qzDrhSOuBUhu9g1dSCZwAWUnxK3TUC8F0OUM0aAMi5vpuqZXdxBdgX5VOqDudiFfBBmE/9Uy/gSJpPqV6tgLIf4FH5/aY/gPcZ+FS3PsAMA7RU9p3FBfAuD2D2mfQMGGOiLWNGdW6T7QwY4d5djqIs88zzzAkwoqevKc9lB6S/wFM/n+mEeS22IyD9RTydG6B/vBujE7v1LacG84eRBggG/yx8MR6cZx2Q3Qmk1O1zFZD8D66mwgnVw29OpBtqBwANKoDUGIvWw4JKaKyFM2IDkI4u529A4pOGF7D4RWtgnmGMlpqeAInr9coYYZ3hb1ILe6MBSogc12J0BKRNMVbfytCRXeKQMc0IGYqf34BD0jOOLd3ob1IjUluZ+xKQ1LhzNzBaEloxdk1S3rzXEnBAeMCYHiqizPVT/WHaECf8I0WaQ318JELDhUj5lSmaKYo1GfJs4ikZRjSGLeCqaaAIi2zYcwsTfulPSnn0NgofHNsgH2HF0QPbtKkc1151XsA/xSLRaGqGkX7R55G+oHYV+tOhCSHggBBzPhXXRlFXgXMMvktdQe3JxXznGiC2zFN24ZDZZZqjXLrRAKFJlOYognZfYtmIOiDye1MdYUiUSiw/SAcEJgXDrgpqHm7U2FBwSQcMr810PsQw2bGTnaQDvod6EjeWgp+2WIKXDhgw4xex38o2ACgWsacBjuNjJTfehvMBdn292KfEgvyE/p0X27/1v8HEMIJ3hyBmq1EmmbHF4enI57Et7rbHL8r2BimuFCKgV9m+wT//d0Bqbj0XYLZ1ENvd8ANSLZli9zG4Xd/2tiEbTwekpm9xAZIMwGJemewXA+/mTQcMWRxSgIQVdmp8Ru8e/4IOuKsHcIHzWZveOE1IHZAauWIChPPyildHC65ZSgekZjgxAaL5vx6XkSMMpAN2SGEhNkBwGfSmONi7YgAS1wkmQMwLEvBpWs09A5A4jTIBQnzBcI7tZzIAibMMDyB2UCTo2rFlZxqAxPg4DyC0lwCiopZ2TEDaR8gDCH2CSJsIIC0+zgOI8EELmHnW2wSkrYQsgJZMlNCrcGgJANLSSFgAoVAHliRvmGwWQNIYZQFE+MDcASMsawEkpXJxAELHJ8C4njHabYCU3nEAQntBcFw96c/ZAClrPQMgtsqDyRHGWm8DpBx6YQDEoqloYgkESEhpTgd8h/h4AQlJSumAoD+NdYgS8nCSAdHoPNgl4/SzHbAD+3+TAdF8FDCd3+iPAxDOWFt1hhbhgOahApew9owB7wCkbuyjhcfmMQvScD+6AKWSxTRBZvZR0EpvDggXIGa8p2qM83U6yGkFM0PQCZjliCvp3BKQjGKkZfoAM5wBJVZDCDdoSfF0A8qf4qUmqAUdfrYp2QMofsyVnFIUmkhtAQofoMghqR9F1CDzZ+taG/QCDnlqjdkVk1fh7ZDd/e8FlDolVeo2gu8w8707G3TkkPsBpQoCJRQ9ciURuFyrAUCp/P6EnKIb24K/cibUhgBlFgtwk2vXyFjx3zwWbRCwQw1qA8K3EA7dVxaMzdybARkG5P8OWUpyTXezfm9+8xhK9gYAO1PeA5mEHQSDEMDO0BX5j1HmWrgQIKfVlrtGDgjINZl+Zq/WjAJ2Cg7DtIZaajAgsFsJ6amOOmMEwM4wqY7xVz2lYSmAhyWRmCZUUQ0lxr5FAzxMNugBymsNartigwp4QKSmdSt1V2NpZjrgYaCSvsWXj1oL+ccAHqabGWrbrOq+NCQO8KDiI1j4ab+qv/R7POBBo4e5E3I82DbjMpQUwG9NDtuW9eYyt47/eVrNt8/QvQRZ7JpkwLNGRxGeeMtSUZwNkKpJeTJA7MTSj+oCPDlC5GehmgAvfiOxw8ln1QNY8RlJ23B1ABbVU5hJHkRANQBqzgHhqwvyAxrHv6I2Us/r34s3ZIeZG3BksX0iFvzTrwR4WDMDPlvjX+QSo5deh2McRMDEq6FcqRtUs/WneKKRH+r/l0HAu+U2YXfnzH8a0xqt5mGFRikRsOziOtb88BQCoYVjrjodqPMcAVg2GrEXmnqLcpICvn3Co3GA5Z/ezkhmVsg1TrG7tWwLb7pNNOD3i8T7FA5uEAa+PhZ8K2kSILyfGyL5p/iAMB71vP4sgGAIFbW7Lcms7phcDkC0XOILCGj7nJ3WUAZAvJQmaHdb0w5dpRbFAQuKIxxLP7SnrDkmKWlAYgYDZHc7fjK7RSsMSC4JjtjdpGdlASNC+2ETyZ1AZ1toJAFHMVHvRdDu9thEFkJBwAmxIvxJQbvbl7ttvn85wOi8jJDd7V12kCOuPIBAjrxLAbvbG0Zf6OaQFGBSvoLf7vY/29WcDjKAQ3qY+0o+uzuUhby/nqVEAKep14L77O5geudfcUCGtC/PkYqw7XDlahMAZCnj7vYlAefiqq42fkCOa92VJ6sUsR4qPw87ILV2oFMuuxt6+MeZwgxY0G578cpeLA+8a+PSNV5A3vRu69km9JzDeYizAjIfQbD6u+ENWI8fkP0WDFs5OXwH1ucGFDiNZ7G7CVuwD15A8o1wiMwjapQjDjNOQM6TBxXpQVzahUU3bICF1D1C+jEE4jx9zwQ4kbms7FvXdjc1M/7hemaPBIy4GBPXdX0R8kx2/UAcoPCt4FdRavwuJ6uiAMWPo1ft7sRvIQZQ5LrHa/3EjlKrF0QASl3idaWL3Z1q7NIBqWWrI3W2u1OPF5EBM/Fd/N3k8taaiICr1P+H61SVMXESpQImO88IOu7RUw0mImBWlXZ38tWZTQYsg9TJJlOjAQ92d3IdpmYDqiIhonNUwwGXyXWmGg6YrhawBWy4WsAWsOFqAVvAhqsFbAEbrhawBWy4WsAWsOFqAVvAhqsFbAEbrhawBWy4WsAWsOFqAVvAhmsfAkwOktesZQgwy3VTglqHAME75BqrebAqV9zJ6sboMQiYK71QRt1OEDDTrXZCmoUB/9PzaLcDAEodccmhZwhwKHgIRFbl8XyktmERV+6+dn0fg8KKN+a4e5Fb42PxAbA65QPbUeRM+n0+8gyX35x+rLs5U7YTNP7T+6kV9C9jxJiFWTFQNAAAAABJRU5ErkJggg==" class="img-thumbnail" width="150px" alt=""/>
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

             <div class="row">
                <div class="col">
                    <div class="form-group">
                    <button onClick = {this.saveHostelDetails}class="btn1" > Submit
            
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
