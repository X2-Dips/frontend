import React from "react";
import DropDown from "./DropDown";
import { MenuItems } from "./MenuItems";
const Menus = ({ click, closeMenu }) => {
  return (
    <>
      <div
        className={click ? "overlay-desktop open" : "overlay-desktop"}
        onClick={closeMenu}
      />
      <div className={click ? "overlay open" : "overlay"}>
        <aside className={click ? "aside open" : "aside"}>
          {MenuItems.map((menuItem, index) => {
            return (
              <DropDown key={index} item={menuItem} closeMenu={closeMenu} />
            );
          })}
        </aside>
      </div>
    </>
  );
};

export default Menus;
