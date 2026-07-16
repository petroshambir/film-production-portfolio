import React from 'react';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>
      
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
            {/* ተወሳኺ ፕሮጀክትታት ኣብዚ ክዘርዘሩ እዮም */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;