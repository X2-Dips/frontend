import React from 'react'
import {Component} from 'react';
import double from "../../images/adds/double.PNG";
// import singlebed from "./images/adds/singl.PNG";
import single2 from "../../images/adds/single2.PNG";
import three from "../../images/adds/three.PNG";
import four from "../../images/adds/four.PNG";
import roomDetail from "../../images/adds/roomDetail.PNG";


class Hostel extends Component {
    render() {
    return (
        <div className="container">
             <div class="text-center">
    
    <h1 className="heading">Room Details</h1>
    
    <h3>Provide details about your place to find a tenant soon</h3>
    <hr class="hr"></hr>
    </div>
    <form>
   <h3>Select the type of rooms available in your Hostel/PG*</h3>
   <div class="container ">
   <div class="row">
                
                {/* <div class="row d-flex align-items-center justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12"> */}
                <div class="col">
                <div class="form-group">
                 <img src={single2} alt="Logo" />
                <br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Single</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <img src={double} alt="Logo" />
                <br></br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                <label for="vehicle2"> Double</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <img src={three} alt="Logo" />
                <br></br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                 <label for="vehicle3"> Three</label>
                 </div>
                 </div>
                 <div class="col">
                 <div class="form-group">
                 <img src={four} alt="Logo" />
                <br></br>
                 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                 <label for="vehicle3"> Four</label>
                 </div>
                 </div>
                </div>
                </div>
                <br></br>
                <br></br>
                <div class ="text-center">
                <img src={roomDetail} alt="Logo" />
                <br></br>
                <label for="label">Three Room Details</label>

                </div>
                <br></br>
                <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="FormSelect1">Expected Rent Per Person* </label>
                        <br></br>
                        <input type="text" class="form_control" id="formInput" placeholder="  Enter Amount"  />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="FormSelect1">Expected Deposit Per Person*</label>
                        <br></br>
                        <input type="text" class="form_control" id="formInput" placeholder="  Enter Amount" />

                    </div>
                </div>
            </div>
            <br></br>
            <h2>Room Amenities</h2>
            
           
                <div class ="row">
                <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Cupboard</label>
                        </div>
                        </div>
               
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  TV
                         </label>
                        </div>
                        </div>
                   
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput" />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Bedding     </label>
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput" />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Geyser    </label>
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput" />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  AC    </label>
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput" />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Attached Washroom   </label>
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
        <div class="container">
        <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="label">City*</label>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1">
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
                        <br></br>
                        <input type="text" class="form_control" id="formGroupExampleInput"
                            placeholder="Near By LandMark"  />
                    </div>
                </div>

            </div>
            <br></br>
            <div class="form-group">
                <label for="label">Street/Area</label>
                <br></br>
                <textarea name="" class="form-control1" id="" cols="30" rows="10" ></textarea>
                </div>
            </div><br></br>
            <hr class="hr"/>

            <div className="container">
        <div class="text-center">
            <h1 className="heading">PG Details</h1>
            <hr class="hr"></hr>
            </div>
        <br></br>
        
        <h2> Property Available For</h2>  
        <div class ="row">
                     <div class ="col">
                       <div class="form-group">
                         <input type="radio" name="radio" checked/> 
                         <label class="formGroupExampleInput">  Male
                        <span class="check"></span> 
                        </label> 
                        </div>
                        </div>
                        <div class ="col">
                        <div class="form-group">
                         <input type="radio"name="radio"/>  
                         <label class="formGroupExampleInput">  Female
                         <span class="check"></span>  
                               </label>
                               </div>
                               </div>
                              
                               <div class ="col">
                               <div class="form-group">
                       <input type="radio" name="radio" checked/> 
                       <label class="formGroupExampleInput">  Anyone
                      <span class="check"></span> 
                      </label> 
                      </div>
                      </div>
                      
                    
                     </div>
                 
                 <br></br>

                 <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Available From*</label>
                        <br></br>
                        <input type="date" class="form_control"  />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Preferd Guests*</label>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1" >
                        <option>Select</option>
                            <option>Working Professional</option>
                            <option>Student</option>
                            <option>Both</option>
                        </select>
                    </div>
                </div>

            </div>
            <br></br>

            <h2>         Food Included*</h2> 
            <div class = "container">
        <div class ="row">
                     <div class ="col">
                       <div class="form-group">
                         <input type="radio" name="radio" checked/> 
                         <label class="formGroupExampleInput">  Yes
                        <span class="check"></span> 
                        </label> 
                        </div>
                        </div>
                        <div class ="col">
                        <div class="form-group">
                         <input type="radio"name="radio"/>  
                         <label class="formGroupExampleInput">  No
                         <span class="check"></span>  
                               </label>
                               </div>
                               </div>
                             </div>
                             <br></br>

                             <div class ="row">
                <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Breakfast</label>
                        </div>
                        </div>
               
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput"  />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Lunch
                         </label>
                        </div>
                        </div>
                   
                        <div class="col">
                        <div class="form-group">
                            <input type="checkbox" id="formGroupExampleInput" />
                            <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Dinner    </label>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br></br>
                        
                        <h2>PG/Hostel Rules</h2>
            
           
            <div class ="row">
            <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> No Smoking</label>
                    </div>
                    </div>
           
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Guardian Stay
                     </label>
                    </div>
                    </div>
               
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Boy's Entry     </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Drinking   </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  No Non-Veg   </label>
                    </div>
                    </div>
                
                   <br></br>
                        </div>
                        
                        <div class="form-group">
                        <label for="exampleFormControlSelect1">Gate Closing Time*</label>
                        <br></br>
                        <input type="time" class="form_control" />
                    </div>
                    <div class="form-group">
                <label for="label">Description</label>
                <br></br>
                <textarea name="" class="form-control1" id="" cols="30" rows="10" ></textarea>
            </div>
                     </div>
                     <br></br>
                     <hr class="hr"/>
                 
                     <div class="text-center">
               <h1 className="heading">Amenities </h1>
                </div>
                   <hr class="hr"/>
                  
                    <h1>Available Services</h1>
                    <br></br>
                    <div class="container">
                    <div class="row">
                    <div class="col">
                 <h3>Laundry</h3>
                  
                 
                       <div class="form-group">
                         <input type="radio" name="radio" checked/> 
                         <label class="formGroupExampleInput">  Yes
                        <span class="check"></span> 
                        </label> 
                        </div>
                        
                        
                        <div class="form-group">
                         <input type="radio"name="radio"/>  
                         <label class="formGroupExampleInput">  No
                         <span class="check"></span>  
                               </label>
                             </div>
                             </div>

                             <div class="col">

                             <h3>Room Cleaning</h3>
                 
                  <div class="form-group">
                    <input type="radio" name="radio" checked/> 
                    <label class="formGroupExampleInput">  Yes
                   <span class="check"></span> 
                   </label> 
                   </div>
                   
                   
                   <div class="form-group">
                    <input type="radio"name="radio"/>  
                    <label class="formGroupExampleInput">  No
                    <span class="check"></span>  
                          </label>
                        </div>
                        </div>

                        <div class="col">

                             <h3>Warden Facility</h3>
                 
                  <div class="form-group">
                    <input type="radio" name="radio" checked/> 
                    <label class="formGroupExampleInput">  Yes
                   <span class="check"></span> 
                   </label> 
                   </div>
                   
                   
                   <div class="form-group">
                    <input type="radio"name="radio"/>  
                    <label class="formGroupExampleInput">  No
                    <span class="check"></span>  
                          </label>
                        </div>
                        </div>



                             </div>
                             </div>
                             <br></br>
                             <h1>Available Amenities</h1>
                    <br></br>
                    <div class="container">
                    <div class="row">
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i> Common TV</label>
                    </div>
                    </div>
           
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput"  />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Mess
                     </label>
                    </div>
                    </div>
               
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Lift    </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Refrigerator  </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Wifi   </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Cooking Allowed   </label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-group">
                        <input type="checkbox" id="formGroupExampleInput" />
                        <label for="formGroupExampleInput"><i class="fa fa-wifi" aria-hidden="true"></i>  Power BackUp   </label>
                    </div>
                    </div>

                    
                    </div>
                    </div>
                    <br></br>
                    <div class="form-group">
                        {/* <label for="exampleFormControlSelect1">Parking*</label> */}
                        <h2>Parking</h2>
                        <br></br>
                        <select class="form_control" id="exampleFormControlSelect1"  >
                            <option>Select</option>
                            <option>Bike</option>
                            <option>Car</option>
                            <option>Both</option>
                            <option>None</option>
                        </select>
                    </div>
                    <br></br>

                    <hr class="hr"></hr>
                    <div class="text-center">
            <h1 className="heading">Gallery</h1>
            
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
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAflBMVEUAAAD///+7u7smJiaQkJB0dHSWlpZ3d3f4+PiEhIT8/PzExMQaGhrOzs7p6enm5uasrKygoKAUFBQ+Pj7Z2dlXV1fz8/Ph4eGBgYEzMzNGRkZsbGxOTk65ubnNzc1iYmI2NjYhISGlpaUsLCxfX18jIyMLCwtVVVU9PT1FRUUU35LkAAAKCUlEQVR4nO2da1vjOAyFXVraUkqvEAq9wFCGmf3/f3AbeiH19ciWnOw+OZ+J8ds4tizJsupQNZzez+7Wm5fx4kt9LX4tPwe97UNBbiaXFOmvp9vBXln19drbjYT6mCQccHSzWtjhLnrtPwp2NU4o4G4dgDup25+I9pcsCHDSC727qjY30p2mCAB8fCPQHTUfyvccVBDw8YmMV6rflBknADj5jMIr9ZEHICQ/YC8a76D9QyYGr3yAu68UvoPWDfgUPYC3iXil7vOROOQEfBwz8Ck1yAljkwvwgwXvoG7NC78DkL70uVXvum8FLN4Z+Q5rYm6oqmyAE1Y8Ve+HaAF85OZT6i0/2FkmoACfUn9qQDvKABThU+qzDrhSOuBUhu9g1dSCZwAWUnxK3TUC8F0OUM0aAMi5vpuqZXdxBdgX5VOqDudiFfBBmE/9Uy/gSJpPqV6tgLIf4FH5/aY/gPcZ+FS3PsAMA7RU9p3FBfAuD2D2mfQMGGOiLWNGdW6T7QwY4d5djqIs88zzzAkwoqevKc9lB6S/wFM/n+mEeS22IyD9RTydG6B/vBujE7v1LacG84eRBggG/yx8MR6cZx2Q3Qmk1O1zFZD8D66mwgnVw29OpBtqBwANKoDUGIvWw4JKaKyFM2IDkI4u529A4pOGF7D4RWtgnmGMlpqeAInr9coYYZ3hb1ILe6MBSogc12J0BKRNMVbfytCRXeKQMc0IGYqf34BD0jOOLd3ob1IjUluZ+xKQ1LhzNzBaEloxdk1S3rzXEnBAeMCYHiqizPVT/WHaECf8I0WaQ318JELDhUj5lSmaKYo1GfJs4ikZRjSGLeCqaaAIi2zYcwsTfulPSnn0NgofHNsgH2HF0QPbtKkc1151XsA/xSLRaGqGkX7R55G+oHYV+tOhCSHggBBzPhXXRlFXgXMMvktdQe3JxXznGiC2zFN24ZDZZZqjXLrRAKFJlOYognZfYtmIOiDye1MdYUiUSiw/SAcEJgXDrgpqHm7U2FBwSQcMr810PsQw2bGTnaQDvod6EjeWgp+2WIKXDhgw4xex38o2ACgWsacBjuNjJTfehvMBdn292KfEgvyE/p0X27/1v8HEMIJ3hyBmq1EmmbHF4enI57Et7rbHL8r2BimuFCKgV9m+wT//d0Bqbj0XYLZ1ENvd8ANSLZli9zG4Xd/2tiEbTwekpm9xAZIMwGJemewXA+/mTQcMWRxSgIQVdmp8Ru8e/4IOuKsHcIHzWZveOE1IHZAauWIChPPyildHC65ZSgekZjgxAaL5vx6XkSMMpAN2SGEhNkBwGfSmONi7YgAS1wkmQMwLEvBpWs09A5A4jTIBQnzBcI7tZzIAibMMDyB2UCTo2rFlZxqAxPg4DyC0lwCiopZ2TEDaR8gDCH2CSJsIIC0+zgOI8EELmHnW2wSkrYQsgJZMlNCrcGgJANLSSFgAoVAHliRvmGwWQNIYZQFE+MDcASMsawEkpXJxAELHJ8C4njHabYCU3nEAQntBcFw96c/ZAClrPQMgtsqDyRHGWm8DpBx6YQDEoqloYgkESEhpTgd8h/h4AQlJSumAoD+NdYgS8nCSAdHoPNgl4/SzHbAD+3+TAdF8FDCd3+iPAxDOWFt1hhbhgOahApew9owB7wCkbuyjhcfmMQvScD+6AKWSxTRBZvZR0EpvDggXIGa8p2qM83U6yGkFM0PQCZjliCvp3BKQjGKkZfoAM5wBJVZDCDdoSfF0A8qf4qUmqAUdfrYp2QMofsyVnFIUmkhtAQofoMghqR9F1CDzZ+taG/QCDnlqjdkVk1fh7ZDd/e8FlDolVeo2gu8w8707G3TkkPsBpQoCJRQ9ciURuFyrAUCp/P6EnKIb24K/cibUhgBlFgtwk2vXyFjx3zwWbRCwQw1qA8K3EA7dVxaMzdybARkG5P8OWUpyTXezfm9+8xhK9gYAO1PeA5mEHQSDEMDO0BX5j1HmWrgQIKfVlrtGDgjINZl+Zq/WjAJ2Cg7DtIZaajAgsFsJ6amOOmMEwM4wqY7xVz2lYSmAhyWRmCZUUQ0lxr5FAzxMNugBymsNartigwp4QKSmdSt1V2NpZjrgYaCSvsWXj1oL+ccAHqabGWrbrOq+NCQO8KDiI1j4ab+qv/R7POBBo4e5E3I82DbjMpQUwG9NDtuW9eYyt47/eVrNt8/QvQRZ7JpkwLNGRxGeeMtSUZwNkKpJeTJA7MTSj+oCPDlC5GehmgAvfiOxw8ln1QNY8RlJ23B1ABbVU5hJHkRANQBqzgHhqwvyAxrHv6I2Us/r34s3ZIeZG3BksX0iFvzTrwR4WDMDPlvjX+QSo5deh2McRMDEq6FcqRtUs/WneKKRH+r/l0HAu+U2YXfnzH8a0xqt5mGFRikRsOziOtb88BQCoYVjrjodqPMcAVg2GrEXmnqLcpICvn3Co3GA5Z/ezkhmVsg1TrG7tWwLb7pNNOD3i8T7FA5uEAa+PhZ8K2kSILyfGyL5p/iAMB71vP4sgGAIFbW7Lcms7phcDkC0XOILCGj7nJ3WUAZAvJQmaHdb0w5dpRbFAQuKIxxLP7SnrDkmKWlAYgYDZHc7fjK7RSsMSC4JjtjdpGdlASNC+2ETyZ1AZ1toJAFHMVHvRdDu9thEFkJBwAmxIvxJQbvbl7ttvn85wOi8jJDd7V12kCOuPIBAjrxLAbvbG0Zf6OaQFGBSvoLf7vY/29WcDjKAQ3qY+0o+uzuUhby/nqVEAKep14L77O5geudfcUCGtC/PkYqw7XDlahMAZCnj7vYlAefiqq42fkCOa92VJ6sUsR4qPw87ILV2oFMuuxt6+MeZwgxY0G578cpeLA+8a+PSNV5A3vRu69km9JzDeYizAjIfQbD6u+ENWI8fkP0WDFs5OXwH1ucGFDiNZ7G7CVuwD15A8o1wiMwjapQjDjNOQM6TBxXpQVzahUU3bICF1D1C+jEE4jx9zwQ4kbms7FvXdjc1M/7hemaPBIy4GBPXdX0R8kx2/UAcoPCt4FdRavwuJ6uiAMWPo1ft7sRvIQZQ5LrHa/3EjlKrF0QASl3idaWL3Z1q7NIBqWWrI3W2u1OPF5EBM/Fd/N3k8taaiICr1P+H61SVMXESpQImO88IOu7RUw0mImBWlXZ38tWZTQYsg9TJJlOjAQ92d3IdpmYDqiIhonNUwwGXyXWmGg6YrhawBWy4WsAWsOFqAVvAhqsFbAEbrhawBWy4WsAWsOFqAVvAhqsFbAEbrhawBWy4WsAWsOFqAVvAhmsfAkwOktesZQgwy3VTglqHAME75BqrebAqV9zJ6sboMQiYK71QRt1OEDDTrXZCmoUB/9PzaLcDAEodccmhZwhwKHgIRFbl8XyktmERV+6+dn0fg8KKN+a4e5Fb42PxAbA65QPbUeRM+n0+8gyX35x+rLs5U7YTNP7T+6kV9C9jxJiFWTFQNAAAAABJRU5ErkJggg==" class="img-thumbnail" width="150px" alt=""/>
                            
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
        </div>
    )
}
}

export default Hostel
