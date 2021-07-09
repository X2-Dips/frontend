import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "../src/js/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import PostProperty from "../src/js/pages/main/PostProperty";


// const express = require("express");
// // const mysql = require("mysql");

// const app = express();

// app.use(express.json());

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost:3305",
//     password: "root",
//     database: "addproperty",
//   });

//   app.post("/addProperty", (req, res) => {
    
  
   
//       db.query(
//         "INSERT INTO add_property (apartment_type, apartment_name, propert-age,facing,property_size,bhk_type,floor,total_floor) VALUES (?,?,?,?,?,?,?,?)",
//         [apartment_type, apartment_name, propert-age,facing,property_size,bhk_type,floor,total_floor],
//         (err, result) => {
//           console.log(err);
//         }
//       );
//     });
  

//   app.listen(3001, () => {
//     console.log("running server");
//   });

