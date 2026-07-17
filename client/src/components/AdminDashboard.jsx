import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [projects, setProjects] = useState([]); // ፕሮጀክትታት ንምሓዝ
  const [newTitle, setNewTitle] = useState('');

  // ፕሮጀክትታት ካብ ሰርቨር ንምስሓብ
  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  // ፕሮጀክት ንምድምሳስ
  const handleDelete = async (id) => {
    await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
      method: 'DELETE'
    });
    setProjects(projects.filter(p => p.id !== id)); // ካብ ስክሪን ክድምሰስ
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>
      
      {/* ጽሑፍ መቐየሪ */}
      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-10">
        <h2 className="text-2xl mb-4">Update Homepage Title</h2>
        <input 
          type="text" 
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-3 bg-black border border-zinc-700 w-full"
        />
        <button className="mt-4 bg-amber-500 text-black px-6 py-2">Update</button>
      </div>

      {/* ፕሮጀክትታት ምምሕዳር */}
      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <h2 className="text-2xl mb-6">Manage Projects</h2>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.id} className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span>{p.names}</span>
              <button 
                onClick={() => handleDelete(p.id)} 
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default AdminDashboard;