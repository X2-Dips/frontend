import React from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "../header/MenuItems";
import { FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-full h-100">
        <div className="container">
          <nav className="footer-nav">
            <h1 className="logo">Rent Pay Rooms</h1>
            <div className="social-links">
              <FaFacebookSquare />
              <IoLogoYoutube />
              <FaTwitter />
              <FaPinterest />
              <AiFillInstagram />
            </div>
            <ul className="footer-navlinks">
              {MenuItems.map((menus, index) => {
                return (
                  <li key={index}>
                    <Link to={menus.path}>{menus.title}</Link>
                  </li>
                );
              })}
            </ul>
            <hr />
            <p>&copy; Rent Pay Rooms All Rights Reserved.</p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;