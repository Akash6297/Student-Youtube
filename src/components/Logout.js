import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post('https://studentyt.onrender.com/api/logout');
      // Redirect or update UI as needed upon successful logout
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle logout error, e.g., show an error message
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
