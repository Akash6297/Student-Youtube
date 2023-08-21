import React from 'react';

import logo from '../images/Logo.webp';
const Navbar = () => {
    


    return (
        

      <div className="navbar-container">
      <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    
          <nav className="navbar-menu">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/main">Study</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </ul>
          </nav>
       </div> 
    );

};

export default Navbar;