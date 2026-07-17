import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  // ንነፍሲ ወከፍ ፕሮጀክት ዝኸውን ሓድሽ ዳታ ንምዕቃብ
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  // ስም ወይ ዕለት ክንቅይር ከለና
  const handleUpdate = async (id) => {
    await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editFields[id])
    });
    alert("Updated!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>

      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <h2 className="text-2xl mb-6">Manage Projects</h2>
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p.id} className="border-b border-zinc-800 pb-4">
              <div className="flex gap-4">
                <input 
                  defaultValue={p.names}
                  onChange={(e) => setEditFields({...editFields, [p.id]: {...editFields[p.id], names: e.target.value}})}
                  className="bg-black p-2 border border-zinc-700 w-full"
                />
                <input 
                  defaultValue={p.date}
                  onChange={(e) => setEditFields({...editFields, [p.id]: {...editFields[p.id], date: e.target.value}})}
                  className="bg-black p-2 border border-zinc-700 w-full"
                />
                <button 
                  onClick={() => handleUpdate(p.id)}
                  className="bg-amber-500 text-black px-4 py-2"
                >
                  Save
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default AdminDashboard;