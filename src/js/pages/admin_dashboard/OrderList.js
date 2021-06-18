import React from 'react';
import './dash.css';
import { Link } from 'react-router-dom';
import {RiHotelLine} from 'react-icons/ri';
import {AiOutlineSetting} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs';


const OrderList=()=>{
    return(
        <>
        <div className="login-container">
         
        <div className="row">
        
        <div className="labels">
        <h1 className="head">Manage Your Account</h1>
        <hr className="horizontals"/>
        
        <div className="side_icons">

            <ul type="">
            <li><Link to="/dashboard"><h3 className="s_icon ">Dashboard</h3></Link></li>
            <li><Link to="/orderlist"><h3 className="s_icon active">Order List</h3></Link></li>
            <li><Link to="/customer"><h3 className="s_icon">Customer</h3></Link></li>

            </ul>
        </div>
        </div>
        
        <div className="frontform">
        <h1 className="head1">Order List</h1>
       
        <hr className="horizontals"/>
        <br/>

        <div className="cards">
         <div className="cardbody">
        <div className="box">
        <div className="sidebutton"><button className="refreshbtn">Refresh</button> <AiOutlineSetting size={30}/></div>
        <h1 className="insidebox_head">Total Properties</h1>
       
        <br/><br/>
        <div className="leftcol">
        <div className="cardbody2">
        <div className="box2">
        <div className="row">
        <div className="coltext">
        <h1 className="counthead">239</h1>
        <span>Total Customer</span>
        </div>

        <div className="colicon2"><BsFillPersonFill size={60} className="icons"/></div>
        
        </div>
        </div>
        </div>
        
        </div>


        <div className="rightcol">
        <div className="cardbody2">
        <div className="box2">
        <div className="row">
        <div className="coltext">
        <h1 className="counthead">999</h1>
        <span>Total Ads</span>
        </div>

        <div className="colicon2"><RiHotelLine size={60} className="icons"/></div>
        
        </div>
        </div>
        </div>
        
        </div>

        </div>
        </div>
        </div> {/*-------- box ends here----------- */}
        <br/><br/>
        {/* --------------table box starts-----------  */}
        <div className="cards">
         <div className="cardbody2">
        <div className="box">
        <h1>Table For Data</h1>

        <div className="tablecover">
        
        
        </div>


        </div></div></div>
        {/*--------table bos ends--------*/}


        </div></div></div>
        </>
    );
}

export default OrderList;