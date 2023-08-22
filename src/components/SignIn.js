import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const SignInForm = ({ handleSignInSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://studentyt.onrender.com/api/signin', { email, password });
      alert('Signed in successfully');
      // Call the parent component function to handle successful sign-in
      handleSignInSuccess();
      // Redirect to the home page after successful sign-in
      history.push('/main');
    } catch (error) {
      alert('Invalid email or password');
    }

    // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="contact-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <a href="/reset">Forgot?</a>
        <p>Don't have an Account?
        <Link to="/signup">Sign Up</Link>
        </p>
        
      </form>
    </div>
  );
};

export default SignInForm;
