// Example registration component (Registration.js)

import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      await axios.post('https://studentyt.onrender.com/api/register', { email, password });
      // Registration successful, you can redirect or show a success message
    } catch (error) {
      console.error('Error registering:', error);
      // Handle registration error, e.g., show an error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
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
