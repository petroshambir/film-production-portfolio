import React, { useState } from 'react';

function AdminDashboard() {
  const [newTitle, setNewTitle] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://film-production-portfolio.onrender.com/api/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      if (response.ok) {
        alert("Title Updated Successfully!");
      }
    } catch (error) {
      console.error("Error updating title:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>
      
      {/* ጽሑፍ ንምቕያር ዝሕግዝ ፎርም */}
      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-10">
        <h2 className="text-2xl mb-4">Update Homepage Title</h2>
        <form onSubmit={handleUpdate} className="flex gap-4">
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New Title" 
            className="p-3 bg-black border border-zinc-700 text-white flex-1" 
          />
          <button type="submit" className="bg-amber-500 text-black px-6 py-2 font-bold uppercase">Update</button>
        </form>
      </div>

      {/* ናይ ስእልታት መቆጻጸሪ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* ሓድሽ ፕሮጀክት መእተዊ */}
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <h2 className="text-2xl mb-6">Add New Project</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Project Title" className="w-full p-3 bg-black border border-zinc-700 text-white" />
            <textarea placeholder="Description" className="w-full p-3 bg-black border border-zinc-700 text-white"></textarea>
            <button className="bg-amber-500 text-black px-6 py-2 font-bold uppercase">Upload Project</button>
          </form>
        </div>

        {/* ዝተሰርሑ ፕሮጀክትታት መዝረዚ */}
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <h2 className="text-2xl mb-6">Manage Projects</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span>Sara & Robel Wedding</span>
              <button className="text-red-500">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;