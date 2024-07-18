import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://studentyt.onrender.com/api/signin', { email, password });
      const userData = response.data.user;

      // Save user data in context
      signIn(userData);

      alert('Signed in successfully');
      history.push('/main'); // Redirect to main page after successful sign-in
    } catch (error) {
      alert('Invalid email or password');
    }

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

        <br/>
        <br/>
        <a href="/reset">Forgot?</a>
        
        <br/>
        <br/>
        <span>Don't have an Account?</span>
        <a href="/signup" className="button">
          <span>Sign Up</span>
        </a>
      </form>
    </div>
  );
};

export default SignInForm;
