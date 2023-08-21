// Home.js
import React from 'react';
import Banner from '../images/Banner.webp';
const Home = () => {
  return (
    <div className='home-container'>
      <h2>Welcome to Our Website</h2>
      <div className="banner">
      <img src={Banner} alt="Banner" />
      </div>
      <h2>How to Use It?</h2>
      <iframe
        title="Video Tutorial"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qukyk50nn6s?si=dkQLdUZ9z94UMumQ"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <p>Insert your text here.</p>
    </div>
  );
};

export default Home;
