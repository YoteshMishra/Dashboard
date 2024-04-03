import React from "react";
import { TbHexagonLetterD, TbSquareKey, TbHelpHexagon } from "react-icons/tb";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TbHexagonLetterD className="icon_header" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <TbSquareKey className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Product
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Income
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Promote
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <TbHelpHexagon className="icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
