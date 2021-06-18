import React from 'react';
import './dash.css';
import { Link } from 'react-router-dom';

import {AiOutlineSetting} from 'react-icons/ai'


const Customer=()=>{
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
            <li><Link to="/orderlist"><h3 className="s_icon">Order List</h3></Link></li>
            <li><Link to="/customer"><h3 className="s_icon  active">Customer</h3></Link></li>

            </ul>
        </div>
        </div>
        
        <div className="frontform">
        <h1 className="head1">Order List</h1>
       
        <hr className="horizontals"/>
        <br/>



        <div className="cards">
         <div className="cardbody2">
        <div className="box">
        <div className="sidebutton"><button className="refreshbtn">Refresh</button> <AiOutlineSetting size={30}/></div>
        <h1 className="insidebox_head">Customers</h1>
        <span className="spantype">Customer/Customer List</span>
        <br/>
        <div className="grapharea">
        <table className="tables">
        <tr className="tablerow">
        <th>Profile</th>
        <th>Name</th>
        <th>Location</th>
        <th>Phone Number</th>
        <th>Email Address</th>
        </tr>
        <hr className="horizontals"/>
        <tr className="tablerow">
        
        </tr>


        
        </table>
        </div>
        </div></div></div>
        </div></div></div>

        </>
    )


}

export default Customer;