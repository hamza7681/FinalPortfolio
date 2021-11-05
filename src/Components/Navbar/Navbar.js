import React,{useState} from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {


  const [colorChange, setColorChange] = useState(false)
  const changeNavbar =()=>{
    if(window.scrollY >=80){
      setColorChange(true)
    }
    else{
      setColorChange(false)
    }
  }
window.addEventListener('scroll', changeNavbar)


  return (
    <>
      <div className="container-fluid "
       className={colorChange ? 'new_navbar' : 'main_wrapper'}
      >
          
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
                <div className='logo_wrapper'>
              <Link to="/" className='logo_link'>
              <span className="navbar_brand"> <img src={logo} alt="HHamza Siddique" className="logo" />
                Hamza Siddique</span>
              </Link>
              </div>
            </div>
            <div className="col-md-6">
              <nav className="main_navbar">
                <ul className="navbar_list">
                  <li>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/cv" className="link">
                      Curriculum Vitae
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='sidebar'><Sidebar/></div>
      </div>
    </>
  );
};

export default Navbar;
