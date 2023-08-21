import React, { useState  } from 'react';

import logo from '../images/logo.png';
const Navbar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        

      <div className="navbar-container">
      <div className="logo">
      <img src={logo} alt="Your Logo" />
    </div>
    <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/main">Main</a></li>
              <li><a href="/signup">Sign In</a></li>
            </ul>
          </nav>
       </div> 
    );

};

export default Navbar;