import React from "react";
import { HiHand } from "react-icons/hi";
import { BsSearch, BsJustify } from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <h3>
          Hello Yotesh <HiHand></HiHand>,
        </h3>
        <div className="icon" />
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
