import React, { useState } from 'react';

function AdminDashboard() {
  // እዚ እቲ ናይ መጀመርታ ዳታኻ እዩ
  const [sections, setSections] = useState([
    { id: 1, title: 'Weddings', names: 'Sara & Robel', date: 'July 15, 2026' },
    { id: 2, title: 'Bridal Shoots', names: 'Abeba', date: 'August 20, 2026' }
  ]);

  // ፕሮጀክት ንምድምሳስ
  const handleDelete = (id) => {
    setSections(sections.filter(section => section.id !== id));
  };

  // ሓድሽ ፕሮጀክት ንምውሳኽ (መሰረታዊ)
  const addProject = () => {
    const newProject = { 
      id: Date.now(), 
      title: 'New Event', 
      names: 'New Couple', 
      date: 'TBD' 
    };
    setSections([...sections, newProject]);
  };

  return (
    <div className="p-10 bg-zinc-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl">Admin Dashboard (Local)</h1>
        <button 
          onClick={addProject}
          className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
        >
          + Add Project
        </button>
      </div>
      
      <div className="grid gap-6">
        {sections.map((section) => (
          <div key={section.id} className="p-6 border border-zinc-700 rounded-lg flex justify-between items-center bg-zinc-800">
            <div>
              <h2 className="text-xl font-bold text-amber-300">{section.names}</h2>
              <p className="text-sm text-zinc-400">{section.title} - {section.date}</p>
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