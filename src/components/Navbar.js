import React, { useContext } from 'react';
import logo from '../images/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBook, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css'; // Import the CSS file
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

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

      <nav className="navbar-menu">
        <ul>
          <li>
            <a href="/" className="button">
              <span>Home</span>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </a>
          </li>
          <li>
            <a href="/about" className="button">
              <span>About</span>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            </a>
          </li>
          <li>
            <a href="/main" className="button">
              <span>Study</span>
              <FontAwesomeIcon icon={faBook} className="icon" />
            </a>
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
              <a href="/signup" className="button">
                <span>Signup</span>
                <FontAwesomeIcon icon={faUserPlus} className="icon" />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
