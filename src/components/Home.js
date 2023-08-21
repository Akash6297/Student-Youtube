// Home.js
// import React from 'react';
import Banner from '../images/Banner.webp';
import React, { useState } from 'react';

const Home = () => {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://studentyt.onrender.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert('Error sending message');
        }
      } catch (error) {
        console.error(error);
        alert('Error sending message');
      }
    }
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
      {/* <strong>Feel Free To Contact Us Here..</strong> */}
      <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default Home;
