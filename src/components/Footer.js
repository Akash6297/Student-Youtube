import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faInfoCircle, faBook } from '@fortawesome/free-solid-svg-icons';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-content">
       
       
        <div className="footer-home-icons">
          
              
        
        <div>
        <strong>Follow Us :</strong>
         <ul className="footer-icons">
         <li>
           <a href="https://www.linkedin.com/in/akash-mandal07/" >
             <FontAwesomeIcon icon={faLinkedin} size="2x" />
           </a>
         </li>
         <li>
           <a href="https://github.com/Akash6297/" >
             <FontAwesomeIcon icon={faGithub} size="2x" />
           </a>
         </li>
         <li>
           <a href="https://www.instagram.com/photos_by_akash/">
             <FontAwesomeIcon icon={faInstagram} size="2x" />
           </a>
         </li>
       </ul>
       </div>
         
          
          {/* Add more social media icons and links as needed */}
        </div>
       
       
      </div>
      <div className="footer-bottom">
      <div className="footer-icons">
         <li>
         <a href="/" >
             <FontAwesomeIcon icon={faHome} size="1x" />
           </a>
         </li>
         <li>
         <a href="/" >
             <FontAwesomeIcon icon={faInfoCircle} size="1x" />
           </a>
         </li>
         <li>
         <a href="/" >
            <FontAwesomeIcon icon={faBook} size="1x" />
           </a>
         </li>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Created By - <a href="https://akash6297.github.io/Akash-Mandal">Akash Mandal</a></p>
      </div>

    </footer>
  );
};

export default Footer;
