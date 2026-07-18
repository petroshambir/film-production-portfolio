import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [editFields, setEditFields] = useState({});
  const [selectedFiles, setSelectedFiles] = useState({});

  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching:", err));
  }, []);

  const handleUpdate = async (id) => {
    const updatedData = editFields[id];
    if (!updatedData) {
        alert("No changes detected!");
        return;
    }
    try {
        const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ names: updatedData.names, date: updatedData.date })
        });
        if (res.ok) {
            alert("Project updated successfully!");
            window.location.reload();
        } else {
            alert("Failed to update.");
        }
    } catch (err) {
        console.error("Error updating:", err);
    }
  };

  const handleUpload = async (id) => {
    const files = selectedFiles[id];
    if (!files) return;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
    }
    await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}/upload`, {
        method: 'POST',
        body: formData
    });
    alert("Uploaded!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>
      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <h2 className="text-2xl mb-6">Manage Your Projects</h2>
        <ul className="space-y-10">
          {projects.map((p) => (
            <li key={p._id} className="border-b border-zinc-700 pb-8">
              <h3 className="text-amber-500 text-xl font-bold mb-4">{p.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Name</label>
                  <input 
                    defaultValue={p.names}
                    onChange={(e) => setEditFields(prev => ({...prev, [p._id]: { ...(prev[p._id] || p), names: e.target.value }}))}
                    className="bg-black p-3 border border-zinc-600 w-full rounded"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
                  <input 
                    defaultValue={p.date}
                    onChange={(e) => setEditFields(prev => ({...prev, [p._id]: { ...(prev[p._id] || p), date: e.target.value }}))}
                    className="bg-black p-3 border border-zinc-600 w-full rounded"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Select Images</label>
                  <input 
                    type="file" 
                    multiple 
                    onChange={(e) => setSelectedFiles(prev => ({...prev, [p._id]: e.target.files}))}
                    className="bg-black p-2 border border-zinc-600 w-full rounded text-sm mb-2"
                  />
                  <button onClick={() => handleUpload(p._id)} className="bg-blue-600 text-white px-4 py-1 text-xs font-bold hover:bg-blue-500 rounded transition w-full">
                    Upload Images
                  </button>
                </div>
              </div>
              <button onClick={() => handleUpdate(p._id)} className="mt-4 bg-amber-500 text-black px-8 py-2 font-bold hover:bg-amber-400 rounded transition">
                Save {p.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;