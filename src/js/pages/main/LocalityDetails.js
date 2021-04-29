import React from 'react'
import PostProperty from './PostProperty';
import {Component} from 'react';
import "./bootstrap.css";
import { Link } from "react-router-dom";
import AddPropertyService from '../../addservices/AddPropertyService';


class LocalityDetails extends Component{

    constructor(props){
        super(props);
        this.state ={
            city:'',
            locality:'',
            street:'',
        }
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeLocalityHandler=this.changeLocalityHandler.bind(this);
        this.changeStreetHandler=this.changeStreetHandler.bind(this);
    }

        saveLocalityDetails = (event)=>{
            event.preventDefault();
            let localityDetails={ city:this.state.city,
                locality:this.state.locality,
                street:this.state.street,}

                console.log(" locality details "+ JSON.stringify(localityDetails));

        AddPropertyService.saveLocalityDetails(localityDetails);
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
  

            render(){

    return (
        <div className="container">
        <div class="text-center">
            <h1 className="heading">Locality Details</h1>
            </div>
        <br></br>
        <hr class="hr"></hr>
            <form>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="label">City*</label>
                        <br></br>
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
                        <br></br>
                        <input type="text" class="form_control" id="formGroupExampleInput"
                            placeholder="Near By LandMark" value={this.state.locality} onChange={this.changeLocalityHandler} />
                    </div>
                </div>

            </div>
            <br></br>
            <div class="form-group">
                <label for="label">Street/Area</label>
                <br></br>
                <textarea name="" class="form-control1" id="" cols="30" rows="10" value={this.state.street} onChange={this.changeStreetHandler}></textarea>
            </div><br></br>
         
          <div class="row">
                <div class="col">
                    <div class="form-group">
                    <button onClick = {this.saveLocalityDetails}class="btn1" > Save 
            
            </button>
                        
                    </div>
                </div>
                <div class="col">
                <a href="/rental_details" >
                <input type="button" value="Next" className="btn1" />
                </a>
                {/* <Link className="form_control11" to="/rental_details">
                            Next
          </Link> */}
                   
                </div>
                </div>

          <br></br>
            </form>
        </div>
    );
            }
}


export default LocalityDetails;
