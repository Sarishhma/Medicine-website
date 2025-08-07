import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../css/login.css'
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
    <div className="container">

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p style={{ color: 'green' }}>Logged in!</p>}
      <form onSubmit={handleSubmit}>
        <div className="container2">
                <h2>Login</h2>
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
