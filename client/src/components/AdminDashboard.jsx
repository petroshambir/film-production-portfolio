import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [sections, setSections] = useState([]);

  // ዳታ ካብ ሰርቨር ንምምጻእ
  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/content')
      .then(res => res.json())
      .then(data => setSections(data.sections))
      .catch(err => console.log(err));
  }, []);

  // ፕሮጀክት ንምድምሳስ (DELETE)
  const handleDelete = (id) => {
    fetch(`https://film-production-portfolio.onrender.com/api/content/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      // ድሕሪ ምድምሳስ፡ ዳታ ዳግማይ ንምጽዋዕ
      setSections(sections.filter(section => section.id !== id));
      alert("Successfully Deleted!");
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="p-10 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl mb-10">Admin Dashboard</h1>
      
      <div className="grid gap-6">
        {sections.map((section) => (
          <div key={section.id} className="p-6 border border-zinc-700 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-amber-300">{section.names}</h2>
              <p className="text-sm text-zinc-400">{section.title}</p>
            </div>
            
            <button 
              onClick={() => handleDelete(section.id)}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;