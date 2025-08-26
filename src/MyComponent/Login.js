import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../css/login.css'
import ElectricBorder from './ElectricBorder'
import Silk from "./Silk";
export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate(); // <-- call the hook here!

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setToken(data.user_id);
      // You can store the userId or token in localStorage or call onLoginSuccess here if needed
      localStorage.setItem('userId', data.user_id);
       if (onLoginSuccess) onLoginSuccess(data.user_id);

     navigate('/productSection');

    } catch (err) {
      setError(err.message);
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
   
      {/* Silk background - positioned absolutely behind everything */}
      <div className="silk-bg">
        <Silk
          speed={5}
          scale={1}
          color="#1e1d1eff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

 <div className="login-content">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p style={{ color: 'green' }}>Logged in!</p>}
      <form onSubmit={handleSubmit}>
         


<ElectricBorder
  color="#472fe7ff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{ 
    borderRadius: 16,
   
  }}
>
  <div className="login-container2" style={{ pointerEvents: 'auto' }}>
    <h2>Login</h2>
    <input
      type="text"
      value={username}
      placeholder="Enter your username"
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      value={password}
      placeholder="Enter your password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit" disabled={loading}>
      {loading ? 'Logging in...' : 'Submit'}
    </button>
  </div>
</ElectricBorder>



      </form>
    </div>
    </div>
  );
}
