import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState(''); // username -> email
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await fetch('https://film-production-portfolio.onrender.com', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password })
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // ሎጊን ምስ ሰለጠ፡ ቶከን ኣብ localStorage ንሕዞ
  //       localStorage.setItem('token', data.token);
  //       localStorage.setItem('isAdmin', 'true');
  //       navigate('/admin-panel');
  //     } else {
  //       alert(data.message || 'Invalid Credentials!');
  //     }
  //   } catch (err) {
  //     alert('Server connection error. Make sure backend is running.');
  //   }
  // };
const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // ኣብዚ ኣድራሻ /api/auth/login ተወሲኹ ኣሎ
      const response = await fetch('https://film-production-portfolio.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // ሎጊን ምስ ሰለጠ፡ ቶከን ኣብ localStorage ንሕዞ
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAdmin', 'true');
        navigate('/admin-panel');
      } else {
        alert(data.message || 'Invalid Credentials!');
      }
    } catch (err) {
      console.error(err); // ጌጋ እንተለዎ ኣብ ኮንሶል ክርአ
      alert('Server connection error. Make sure backend is running.');
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-zinc-900 p-10 rounded-lg border border-zinc-800">
        <h2 className="text-2xl text-white mb-6">Admin Login</h2>
        <input 
          onChange={(e) => setEmail(e.target.value)} // email
          className="w-full p-3 mb-4 bg-black border border-zinc-700 text-white" placeholder="Email" 
        />
        <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-black border border-zinc-700 text-white" placeholder="Password" 
        />
        <button type="submit" className="w-full bg-amber-500 text-black p-3 font-bold uppercase">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;