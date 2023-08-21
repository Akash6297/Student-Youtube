// Example registration component (Registration.js)

import React, { useState } from 'react';
import axios from 'axios';
import '../css/registration.css';

function Registration() {
  const [email, setEmail, name, country, phone, address] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      await axios.post('https://studentyt.onrender.com/api/register', { email, password , name, country, phone, address});
      // Registration successful, you can redirect or show a success message
    } catch (error) {
      console.error('Error registering:', error);
      // Handle registration error, e.g., show an error message
    }
  };

  return (
    <div className='registration-container'>
      <h2>Register</h2>
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="country"
        placeholder="Country"
        value={country}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="phone"
        placeholder="Phone No"
        value={phone}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="address"
        placeholder="Address"
        value={address}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
