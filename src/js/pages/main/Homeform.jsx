import React from 'react'
// import  'bootstrap/dist/css/bootstrap.min.css';
// import  'bootstrap/dist/js/bootstrap.bundle.js';
import './slide.css'

const Homeform=()=>{
  //const [show, setShow] = useState(false);

 // const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

    return (
        <>
        <div className="covers">
          <div className="row">
          <div className=" col-sm-10 col-md-8  offset-1">
          <h3 className="formhead">Search Property</h3>
          <form className="forms">
        <div class="form-group">
      <label for="exampleFormControlSelect1 tags">State</label>
      <select class="form-control texts" id="exampleFormControlSelect1">
        <option>Choose State..</option>
        <option>Madhya Pradesh</option>
        <option>Rajasthan</option>
        <option>Bihar</option>
        <option>Jharkhand</option>
      </select>
    </div>

    <div class="form-group">
    <label for="exampleFormControlSelect1">City</label>
    <select class="form-control texts" id="exampleFormControlSelect1">
      <option>Choose City..</option>
      <option>Bhopal</option>
      <option>Jaipur</option>
      <option>Patna</option>
      <option>Ranchi</option>
    </select>
  </div>

  <div class="form-group">
    <label for="inputlandmark" class=" col-form-label">Landmark</label>
    <input type="password" class="form-control texts" id="landmark" placeholder="Nearby Landmark"/>
  </div>

  <div class="form-group">
  <label for="exampleFormControlSelect1">Property Type</label>
  <select class="form-control texts" id="exampleFormControlSelect1">
    <option>Property Type..</option>
    <option>Madhya Pradesh</option>
    <option>Rajasthan</option>
    <option>Bihar</option>
    <option>Jharkhand</option>
  </select>
  </div>


  <div class="form-group">
<label for="exampleFormControlSelect1">Moving Date</label>
<select class="form-control texts" id="exampleFormControlSelect1">
  <option>Moving Date..</option>
  <option>Madhya Pradesh</option>
  <option>Rajasthan</option>
  <option>Bihar</option>
  <option>Jharkhand</option>
</select>
</div>

<div class="form-group">
    <label for="formControlRange">Rs. 500/- Rs. 1,00,000/- </label>
    <input type="range" class="form-control-range" id="formControlRange"/>
</div>

<button type="submit" className="btn btn-light formbtns btn-block">Search Property</button>

    </form>
          </div>
          </div>
      </div>
        </>
    );
}

export default Homeform;