import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // ቀሊል መረጋገጺ (መጀመርታ ኣብ ፍሮንተን ጥራሕ)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin-panel');
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-zinc-900 p-10 rounded-lg border border-zinc-800">
        <h2 className="text-2xl text-white mb-6">Admin Login</h2>
        <input 
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 bg-black border border-zinc-700 text-white" placeholder="Username" 
        />
        <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-black border border-zinc-700 text-white" placeholder="Password" 
        />
        <button className="w-full bg-amber-500 text-black p-3 font-bold uppercase">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;