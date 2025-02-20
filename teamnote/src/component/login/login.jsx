import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation (you'd typically have more robust checks)
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      // Replace with your actual API call
      const response = await fetch('/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., store token, redirect)
        const data = await response.json();
        localStorage.setItem('token', data.token); 
        window.location.href = '/dashboard'; // Replace with your desired route
      } else {
        setErrorMessage('Invalid username or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>New User? <Link to="/signup">Sign Up</Link></p> 
    </div>
  );
};

export default Login;