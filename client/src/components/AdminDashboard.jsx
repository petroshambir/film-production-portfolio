
import React, { useState } from 'react';

function AdminDashboard() {
  // እቲ ዳታ ኣብ ውሽጢ ኮድካ ባዕልና ንግበሮ (Static Data)
  const [projects, setProjects] = useState([
    { id: 1, title: 'Weddings', names: 'Sara & Robel', date: 'July 15, 2026', images: ['img1.jpg'] },
    { id: 2, title: 'Bridal Shoots', names: '', date: '', images: ['img2.jpg'] },
    { id: 3, title: 'Baby Shower', names: '', date: '', images: ['img3.jpg'] }
  ]);

  const [editFields, setEditFields] = useState({});

  const handleUpdate = (id) => {
    // ኣብዚ ንስኻ ናብ ሰርቨርካ ትልእኮ (API call)
    alert("Saved! (Now connect your API to update database)");
    console.log("Updated data for id", id, ":", editFields[id]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>

      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <h2 className="text-2xl mb-6">Manage Your Projects</h2>
        <ul className="space-y-10">
          {projects.map((p) => (
            <li key={p.id} className="border-b border-zinc-700 pb-8">
              <h3 className="text-amber-500 text-xl font-bold mb-4">{p.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* ሽም */}
                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Name (Sara & Robel)</label>
                  <input 
                    defaultValue={p.names}
                    onChange={(e) => setEditFields({...editFields, [p.id]: { ...projects.find(x=>x.id===p.id), names: e.target.value }})}
                    className="bg-black p-3 border border-zinc-600 w-full rounded"
                  />
                </div>

                {/* ዕለት */}
                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
                  <input 
                    defaultValue={p.date}
                    onChange={(e) => setEditFields({...editFields, [p.id]: { ...projects.find(x=>x.id===p.id), date: e.target.value }})}
                    className="bg-black p-3 border border-zinc-600 w-full rounded"
                  />
                </div>

                {/* ስእሊ */}
             <div>
  <label className="text-[10px] uppercase text-zinc-500">Upload Images</label>
  <input 
    type="file" 
    multiple 
    onChange={async (e) => {
      const files = e.target.files;
      const formData = new FormData();
      
      // ኩሎም ዝተመርጹ ፋይላት ናብ FormData ንምስጋር
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      // እቲ ስእልታት ናብ ሰርቨር ንምልኣኽ
      const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${p.id}/upload`, {
        method: 'POST',
        body: formData
      });
      
      const data = await res.json();
      alert("Images Uploaded Successfully!");
      window.location.reload(); // ንኽርአ ክሕደስ
    }}
    className="bg-black p-2 border border-zinc-600 w-full rounded text-sm"
  />
</div>
              </div>
              
              <button 
                onClick={() => handleUpdate(p.id)}
                className="mt-4 bg-amber-500 text-black px-8 py-2 font-bold hover:bg-amber-400 rounded transition"
              >
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