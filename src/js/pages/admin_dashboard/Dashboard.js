import React from 'react';
import { Link  } from 'react-router-dom';
import './dash.css';
import {RiHotelLine} from 'react-icons/ri';

import 'react-circular-progressbar/dist/styles.css';
import {AiOutlineSetting} from "react-icons/ai"

import {Line} from 'react-chartjs-2';

const Dashboard=()=>{

   
    return(

    <div>
        <div className="login-container">
         
        <div className="row">
        
        <div className="labels">
        <h1 className="head">Manage Your Account</h1>
        <hr className="horizontals"/>
        
        <div className="side_icons">

            <ul type="">
            <li><Link to="/dashboard"><h3 className="s_icon active">Dashboard</h3></Link></li>
            <li><Link to="/orderlist"><h3 className="s_icon">Order List</h3></Link></li>
            <li><Link to="/customer"><h3 className="s_icon">Customer</h3></Link></li>

            </ul>
        </div>
        </div>
        
        <div className="frontform">
        <h1 className="head1">Dashboard</h1>
       
        <hr className="horizontals"/>
        <br/>

        <div className="cards">
         <div className="cardbody">
        <div className="box">
        <div className="sidebutton"><button className="refreshbtn">Refresh</button> <AiOutlineSetting size={30}/></div>
        



        <h1 className="insidebox_head">Total Properties</h1>
       
       
        <div className="cardbody2">
        
        <div className="box2">

        <div className="row">
        <div className="coltext">
        <h1 className="counthead">999</h1>
        <span>Total Properties</span>
        </div>

        <div className="colicon"><RiHotelLine size={80} className="icons"/></div>
        
        </div>
        
        
        </div> {/*-------- box ends here----------- */}
        <br/><br/>
        <div className="row">
        <div className="leftcol">
        {/*NOTE: propertybox is a function written down below*/}
        {propertybox("Total Properties for PG/Hostel", <RiHotelLine size={80} className="icons"/>, "291")}
        </div>{/* new boxes start */}


        <div className="rightcol">
        {propertybox("Total properties for rent", <RiHotelLine size={80} className="icons"/>, "491")}
        </div>
        

        </div>{/*-----cards end here------*/}

        <div className="row">
        <div className="leftcol">
        
        {propertybox("Monthly properties for PG/Hostel", <RiHotelLine size={80} className="icons"/>, "521")}
        </div>{/* new boxes start */}


        <div className="rightcol">
        {propertybox("Monthly properties for Rent", <RiHotelLine size={80} className="icons"/>, "521")}
        </div>
        
        </div>
        </div>{/*-----cards end here------*/}
        </div></div></div>
        <br/><br/>
         {/*-----graph work starts-----*/}

         <div className="cards">
         <div className="cardbodysmall">
        <div className="box">
        <h1>Total Properties Graphical Analysis</h1>
        <br/><br/>
        <div className="grapharea">
        <Line
        data={{labels: ['January', 'February', 'March',
        'April', 'May'],
        
        datasets: [
          {
            label: "This month properties for PG/Hostel",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "This month properties for rent",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      
      
      }}

          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        </div>
        </div></div></div>


          {/*----graph work ends-----*/}

        <div className="Maps">
        <fieldset className="mapfield">
        <legend>Map Area</legend>
        </fieldset>
        
        </div>


        </div>
        </div>
        </div>
    </div>
    
    );
}



const propertybox=(name, icon, quantity)=>{

  return (
    <div>
    <div className="cards">
       
        
        <div className="cardbody2">
        <div className="box2">

        <div className="row">
        <div className="coltext">
        <h1 className="counthead">{quantity}</h1>
        <span>{name}</span>
        </div>

        <div className="colicon">{icon}</div>
        
        </div>
        </div>
        
        </div>

        </div>
       
    
    </div>

  )

}



//var linechart=new linechart





export default Dashboard;