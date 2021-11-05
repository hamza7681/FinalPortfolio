import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import { IconContext } from "react-icons";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className=" navbar">
          
          <Link to="#" className="menu-bars">
            <span onClick={showSidebar} className='menu'> Menu</span>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars1">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div style={{paddingTop:'80px'}}></div>
            <div className="container text-center">
                <span className='menu_name'>Menu</span>
            </div>
          <div className='side_list'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                   <span className='title'>{item.title}</span>
                  </Link>
               
                </li>
              );
            })}
            </div>
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
