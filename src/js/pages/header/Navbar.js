import React, { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import Menus from "./Menus";
import { ACCESS_TOKEN } from '../constants';
import "./navbar.css";
import rprLogo from "../../images/adds/rprLogo.jpg";



const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  //const name=props.currentUser.name;
  const closeMenu = () => {
    setClick(false);
  };

  if (click) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }


  const logoutfun=()=>{
    localStorage.removeItem(ACCESS_TOKEN);
    Object.assign(false, props.authenticated);
    Object.assign(null, props.currentUser);
    console.log("hello");

  }


  const style = {
    marginLeft:'20px',
    color:'maroon'
  };
  return (
    <>
      <nav className="container nav flexBox jcspb h-100">
        <Link to="/" className="brand-logo">
          {/* SabziMandi.com */}
          {/* <img src={require('../../images/adds/logo_site1.jpg')}/> */}
          {/* <img src='../../images/adds/rprLogo.jpg'/> */}
          <img src={rprLogo} alt="Logo" />
          {/* <img src= ''/> */}

          {/* alt="logo"/> */}

          
        </Link>

        <div className="nav-items">
          <Link className="nav-member-links"   to="/add_property">
            Add Property
          </Link>


        <div className="nav-items">
        { props.authenticated ? (
          <div className="row">
                  <div className="col-sm-2">
                  <ul>
                  <Link to={{
                    pathname:'/profile',
                    
                      name:props.currentUser.name,
                    
                  }} ><p className="nav-member-links" style={style}>{props.currentUser.name}</p></Link>
                  
                  </ul>
                  </div>
                  <div className="col-sm-2">
                  <a onClick={props.onLogout} className="nav-member-links">Logout</a>
                  </div>
              </div>
      ): (
          
              <>
              <div>
                  <NavLink className="nav-member-links" to="/logintest">Login</NavLink>        
                  </div>
                  <div>
                  <NavLink className="nav-member-links" to="/signuptest">Signup</NavLink>       
                  </div>
             </>
      )}

         
          
          <div
            onClick={handleClick}
            className={click ? "menu-btn open" : "menu-btn"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        </div>
      </nav>
      <Menus click={click} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
