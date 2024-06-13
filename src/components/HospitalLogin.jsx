import React, { useState } from 'react';
import axios from 'axios';

const HospitalLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login-hospital', { username, password });
      if (response.data.success) {
        alert('Login successful');
        // Redirect to dashboard or other page
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error logging in', error);
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Hospital Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HospitalLogin;
