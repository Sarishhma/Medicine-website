import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ElectricBorder from './ElectricBorder';
import "../css/Register.css"
import Silk from './Silk';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setMessage(data.message || 'User registered successfully');
      setTimeout(() => {
        navigate('/login')
      }, 1500);
      setUsername('');
      setPassword('');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="Register-container">
      <div className="silk-bg">
        <Silk
          speed={5}
          scale={1}
          color="#1e1d1eff"
          noiseIntensity={1.5}
          rotation={0}
        />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}

        <form onSubmit={handleRegister}>

          <ElectricBorder
            color="#472fe7ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            
            
              <div className='input-container' >
                <h2>Register</h2>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? 'Registering...' : 'Register'}
                </button>
           
              </div>

            
          </ElectricBorder>
        </form>
      </div >
      );
}