import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/LogOut.css"

export default function LogOut() {
  const navigate = useNavigate();

  const log = () => {
    localStorage.removeItem("userId"); // ✅ correct key
    navigate('/');
  };

  return (
    <div>
      <button className='log-out' onClick={log}>Log-Out</button>
    </div>
  );
}
