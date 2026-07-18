import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  const handleUpdate = async (id) => {
    const updatedData = editFields[id];
    if (!updatedData) {
      alert("No changes made!");
      return;
    }

    await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(() => {
        alert("Updated Successfully!");
        window.location.reload(); 
    })
    .catch(err => console.error("Error updating:", err));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>

      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <h2 className="text-2xl mb-6">Manage Projects</h2>
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p._id || p.id} className="border-b border-zinc-800 pb-8">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-[10px] uppercase text-zinc-500">Name</label>
                    <input 
                      defaultValue={p.names}
                      onChange={(e) => setEditFields({...editFields, [p._id || p.id]: { ...(editFields[p._id || p.id] || { names: p.names, date: p.date, images: p.images }), names: e.target.value }})}
                      className="bg-black p-2 border border-zinc-700 w-full"
                    />
                  </div>
                  {/* Date Input */}
                  <div>
                    <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
                    <input 
                      defaultValue={p.date}
                      onChange={(e) => setEditFields({...editFields, [p._id || p.id]: { ...(editFields[p._id || p.id] || { names: p.names, date: p.date, images: p.images }), date: e.target.value }})}
                      className="bg-black p-2 border border-zinc-700 w-full"
                    />
                  </div>
                  {/* Image URL Input */}
                  <div>
                    <label className="text-[10px] uppercase text-zinc-500">Image URLs (comma separated)</label>
                    <input 
                      defaultValue={p.images ? p.images.join(', ') : ''}
                      placeholder="https://image1.jpg, https://image2.jpg"
                      onChange={(e) => setEditFields({...editFields, [p._id || p.id]: { ...(editFields[p._id || p.id] || { names: p.names, date: p.date, images: p.images }), images: e.target.value.split(',').map(s => s.trim()) }})}
                      className="bg-black p-2 border border-zinc-700 w-full"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => handleUpdate(p._id || p.id)}
                  className="bg-amber-500 text-black px-6 py-2 font-bold w-full md:w-32 hover:bg-amber-400 transition"
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