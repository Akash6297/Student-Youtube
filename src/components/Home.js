// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className='home-container'>
      <h2>Welcome to Our Website</h2>
      <p>Insert your banner here.</p>
      <iframe
        title="Video Tutorial"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/your-video-id"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <p>Insert your text here.</p>
    </div>
  );
};

export default Home;
