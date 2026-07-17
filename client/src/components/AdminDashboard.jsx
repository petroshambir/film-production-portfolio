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
    // እቲ URL ናብቲ ናይ ሰርቨርካ route ይኸይድ
    // editFields[id] ካብቲ መጽሓፊ ዝመጽእ ዘሎ ሓድሽ ዳታ እዩ
    await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editFields[id])
    })
    .then(res => res.json())
    .then(data => {
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
            <li key={p._id || p.id} className="border-b border-zinc-800 pb-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                
                {/* ናይ ሽም መጽሓፊ */}
                <div className="w-full">
                  <label className="text-[10px] uppercase text-zinc-500">Name</label>
                  <input 
                    defaultValue={p.names}
                    onChange={(e) => setEditFields({
                      ...editFields, 
                      [p._id || p.id]: { ...editFields[p._id || p.id], names: e.target.value }
                    })}
                    className="bg-black p-2 border border-zinc-700 w-full focus:border-amber-500 outline-none"
                  />
                </div>

                {/* ናይ ዕለት መጽሓፊ */}
                <div className="w-full">
                  <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
                  <input 
                    defaultValue={p.date}
                    onChange={(e) => setEditFields({
                      ...editFields, 
                      [p._id || p.id]: { ...editFields[p._id || p.id], date: e.target.value }
                    })}
                    className="bg-black p-2 border border-zinc-700 w-full focus:border-amber-500 outline-none"
                  />
                </div>

                {/* ናይ መዐቀሪ ቁልፊ */}
                <button 
                  onClick={() => handleUpdate(p._id || p.id)}
                  className="bg-amber-500 text-black px-6 py-2 mt-4 md:mt-4 font-bold hover:bg-amber-400 transition"
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