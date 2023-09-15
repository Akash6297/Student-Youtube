import React  from 'react';
import logo from '../images/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBook, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css'; // Import the CSS file

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {window.innerWidth <= 768 && (
        <button className="menu__icon" >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* {menuVisible && ( */}
        

      <nav className="navbar-menu">
        
        <ul>
          <li>
            <a href="/" className="button">
              <span>Home</span>
              </a>
              <span> <FontAwesomeIcon icon={faHome} className="icon" /> </span>
              
            
          </li>
          <li>
            <a href="/about" className="button">
              <span>About</span>
              </a>
              <span> <FontAwesomeIcon icon={faInfoCircle} className="icon" /> </span>
              
           
          </li>
          <li>
            <a href="/main" className="button">
              <span>Study</span>
              </a>
              <span> <FontAwesomeIcon icon={faBook} className="icon" /> </span>
              
            
          </li>
          <li>
            <a href="/signup" className="button">
              <span>Signup</span>
              </a>
              <span> <FontAwesomeIcon icon={faUserPlus} className="icon" /> </span>
              
            
          </li>
        </ul>
      </nav>
       {/* )} */}
    </div>
  );
};

export default Navbar;
