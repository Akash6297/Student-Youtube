import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import logo from '../images/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBook, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css'; // Import the CSS file
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" className="button">
              <span>Home</span>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/about" className="button">
              <span>About</span>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/main" className="button">
              <span>Study</span>
              <FontAwesomeIcon icon={faBook} className="icon" />
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <span className="button">
                  <span>{user.username}</span>
                </span>
              </li>
              <li>
                <button onClick={handleSignOut} className="button">
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signup" className="button">
                <span>Signup</span>
                <FontAwesomeIcon icon={faUserPlus} className="icon" />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
