import React from "react";
import { Route, Switch } from "react-router";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Services from "./Services";
import Login from "./Login";
import SignUp from "./SignUp";
import AddProperty from "./AddProperty"
import ProductScreen from "./screens/ProductScreen";
import PostProperty from "./PostProperty";
import Homeform from "./Homeform";
import LocalityDetails from "./LocalityDetails";
import RentalDetails from "./RentalDetails";
import Amenities from "./Amenities";
import PhotosVideos from "./PhotosVideos";
import Hostel from "./Hostel";


const Main = () => {
  return (
    <div className="main">
      <div className="container-full h-100">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/product:id" exact component={ProductScreen} />
          <Route path="/homeform" exact component={Homeform} />

          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/add_property" exact component={AddProperty}/>
          <Route path="/addpropertyform" exact component={PostProperty}/>
          <Route path="/locality_details" exact component={LocalityDetails}/>
          <Route path="/rental_details" exact component={RentalDetails}/>
          <Route path="/amenities_details" exact component={Amenities}/>
          <Route path="/photos" exact component={PhotosVideos}/>
          <Route path="/hostel" exact component={Hostel}/>
          <Route path="/signup" exact component={SignUp} />
         
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
