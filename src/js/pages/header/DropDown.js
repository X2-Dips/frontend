import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const DropDown = ({ item, closeMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <ul className="dropdown">
        <li className="flexBox jcspb" onClick={handleDropdown}>
          <Link to={item.path} className={item.cname} onClick={closeMenu}>
            <span className="icon">{item.linkIcon}</span>
            <span className="mx-1">{item.title}</span>
          </Link>
          <span className="gridBox">
            {item.subMenu ? (
              dropdown ? (
                <AiFillCaretUp />
              ) : (
                <AiFillCaretDown />
              )
            ) : null}
          </span>
        </li>
      </ul>
      <ul className="sub-menu ">
        {item.subMenu &&
          dropdown &&
          item.subMenu.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  to={menu.path}
                  className={menu.cname}
                  key={index}
                  onClick={closeMenu}
                >
                  <span className="icon">{menu.linkIcon}</span>
                  <span className="mx-1">{menu.title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default DropDown;
