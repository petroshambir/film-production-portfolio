// import React, { useState , useEffect} from 'react';

// function AdminDashboard() {
//   // እቲ ዳታ ኣብ ውሽጢ ኮድካ ባዕልና ንግበሮ (Static Data)
//   const [projects, setProjects] = useState([
//     { id: 1, title: 'Weddings', names: 'Sara & Robel', date: 'July 15, 2026', images: ['img1.jpg'] },
//     { id: 2, title: 'Bridal Shoots', names: '', date: '', images: ['img2.jpg'] },
//     { id: 3, title: 'Baby Shower', names: '', date: '', images: ['img3.jpg'] }
//   ]);

//   const [editFields, setEditFields] = useState({});
//   const [selectedFiles, setSelectedFiles] = useState({}); // ንዝተመርጹ ፋይላት ክሕዝ

//   const handleUpdate = async (id) => {
//     // እቲ ዝተቀየረ ዳታ ካብ editFields ንወስድ
//     const updatedData = editFields[id];

//     if (!updatedData) {
//         alert("No changes detected!");
//         return;
//     }

//     try {
//         const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 names: updatedData.names,
//                 date: updatedData.date
//             })
//         });

//         if (res.ok) {
//             alert("Project updated successfully!");
//             window.location.reload(); // ዳታ ንኽርአ ገጽካ ኣሐድሶ
//         } else {
//             alert("Failed to update.");
//         }
//     } catch (err) {
//         console.error("Error updating:", err);
//         alert("Server error.");
//     }
// };

//   const handleUpload = async (id) => {
//     const files = selectedFiles[id];
//     if (!files) return;

//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//         formData.append('images', files[i]); // 'images' እቲ key እዩ
//     }

//     await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}/upload`, {
//         method: 'POST',
//         body: formData
//     });
//     alert("Uploaded!");
// };
// // ካብ API ዝመጸ ርክብ
// useEffect(() => {
//     fetch('https://film-production-portfolio.onrender.com/api/projects')
//         .then(res => res.json())
//         .then(data => setProjects(data));
// }, []);

// // ኣብ Map ክትገብር ከለኻ
// {projects.map((p) => (
//    <li key={p._id}> {/* id ኣይኮነን, _id እዩ */}
//      <button onClick={() => handleUpdate(p._id)}>Save</button>
//    </li>
// ))}

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
//       <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>

//       <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
//         <h2 className="text-2xl mb-6">Manage Your Projects</h2>
//         <ul className="space-y-10">
//           {projects.map((p) => (
//             <li key={p.id} className="border-b border-zinc-700 pb-8">
//               <h3 className="text-amber-500 text-xl font-bold mb-4">{p.title}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
//                 {/* ሽም */}
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Name (Sara & Robel)</label>
             
                 
// <input 
//   defaultValue={p.names}
//   onChange={(e) => {
//     const val = e.target.value;
//     setEditFields(prev => ({
//       ...prev,
//       [p.id]: { ...(prev[p.id] || p), names: val } // p ንምሕዝነት ንጥቀም
//     }));
//   }}
//   className="bg-black p-3 border border-zinc-600 w-full rounded"
// />
//                 </div>
 

//                 {/* ዕለት */}
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
//                   <input 
//                     defaultValue={p.date}
//                     onChange={(e) => setEditFields({...editFields, [p.id]: { ...projects.find(x=>x.id===p.id), date: e.target.value }})}
//                     className="bg-black p-3 border border-zinc-600 w-full rounded"
//                   />
//                 </div>

//                 {/* ስእሊ መምረጺን ኡፕሎድ ቁልፍን */}
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Select Images</label>
//                   <input 
//                     type="file" 
//                     multiple 
//                     onChange={(e) => setSelectedFiles({...selectedFiles, [p.id]: e.target.files})}
//                     className="bg-black p-2 border border-zinc-600 w-full rounded text-sm mb-2"
//                   />
//                   <button 
//                     onClick={() => handleUpload(p.id)}
//                     className="bg-blue-600 text-white px-4 py-1 text-xs font-bold hover:bg-blue-500 rounded transition w-full"
//                   >
//                     Upload Images
//                   </button>
//                 </div>
//               </div>
              
//               <button 
//                 onClick={() => handleUpdate(p.id)}
//                 className="mt-4 bg-amber-500 text-black px-8 py-2 font-bold hover:bg-amber-400 rounded transition"
//               >
//                 Save {p.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';

// function AdminDashboard() {
//   const [projects, setProjects] = useState([]);
//   const [editFields, setEditFields] = useState({});
//   const [selectedFiles, setSelectedFiles] = useState({});

//   // ዳታ ካብ ሰርቨር ንምምጻእ ዝሕግዝ ፋንክሽን
//   const fetchProjects = () => {
//     fetch('https://film-production-portfolio.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => setProjects(data))
//       .catch(err => console.error("Error fetching:", err));
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const handleUpdate = async (id) => {
//     const updatedData = editFields[id];
//     if (!updatedData) {
//       alert("No changes detected!");
//       return;
//     }
//     try {
//       const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ names: updatedData.names, date: updatedData.date })
//       });
//       if (res.ok) {
//         alert("Project updated successfully!");
//         fetchProjects(); // ገጽ ከይጸዓንካ ዳታ የሐድስ
//       } else {
//         alert("Failed to update.");
//       }
//     } catch (err) {
//       console.error("Error updating:", err);
//       alert("Server error.");
//     }
//   };

//   const handleUpload = async (id) => {
//     const files = selectedFiles[id];
//     if (!files) { alert("Please select files first!"); return; }
    
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append('images', files[i]);
//     }
    
//     try {
//       const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}/upload`, {
//         method: 'POST',
//         body: formData
//       });
//       if (res.ok) {
//         alert("Uploaded successfully!");
//         fetchProjects(); // ገጽ ከይጸዓንካ ዳታ የሐድስ
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
//       <h1 className="text-4xl font-serif mb-10">Admin Dashboard</h1>

//       <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
//         <h2 className="text-2xl mb-6">Manage Your Projects</h2>
//         <ul className="space-y-10">
//           {projects.map((p) => (
//             <li key={p._id} className="border-b border-zinc-700 pb-8">
//               <h3 className="text-amber-500 text-xl font-bold mb-4">{p.title}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Name</label>
//                   <input
//                     defaultValue={p.names}
//                     onChange={(e) => setEditFields(prev => ({ ...prev, [p._id]: { ...(prev[p._id] || p), names: e.target.value } }))}
//                     className="bg-black p-3 border border-zinc-600 w-full rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
//                   <input
//                     defaultValue={p.date}
//                     onChange={(e) => setEditFields(prev => ({ ...prev, [p._id]: { ...(prev[p._id] || p), date: e.target.value } }))}
//                     className="bg-black p-3 border border-zinc-600 w-full rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Select Images</label>
//                   <input
//                     type="file"
//                     multiple
//                     onChange={(e) => setSelectedFiles(prev => ({ ...prev, [p._id]: e.target.files }))}
//                     className="bg-black p-2 border border-zinc-600 w-full rounded text-sm mb-2"
//                   />
//                   <button
//                     onClick={() => handleUpload(p._id)}
//                     className="bg-blue-600 text-white px-4 py-1 text-xs font-bold hover:bg-blue-500 rounded transition w-full"
//                   >
//                     Upload Images
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={() => handleUpdate(p._id)}
//                 className="mt-4 bg-amber-500 text-black px-8 py-2 font-bold hover:bg-amber-400 rounded transition"
//               >
//                 Save {p.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState } from 'react';

// function AdminDashboard() {
//   // እቲ ዳታ (ስም፡ ዕለት፡ ስእሊ)
//   const [projects, setProjects] = useState([
//     { id: 1, title: 'Weddings', names: 'Sara & Robel', date: 'July 15, 2026', images: [] },
//     { id: 2, title: 'Bridal Shoots', names: 'Abeba', date: 'August 20, 2026', images: [] },
//     { id: 3, title: 'Baby Shower', names: 'John & Sarah', date: 'September 10, 2026', images: [] }
//   ]);

//   const [editFields, setEditFields] = useState({});

//   // 1. ለውጢ ክትገብር ከለኻ (ስም ወይ ዕለት)
//   const handleEdit = (id, field, value) => {
//     setEditFields(prev => ({
//       ...prev,
//       [id]: { ...(prev[id] || projects.find(p => p.id === id)), [field]: value }
//     }));
//   };

//   // 2. Save ክትብል ከለኻ
//   const handleSave = (id) => {
//     if (!editFields[id]) {
//       alert("No changes detected!");
//       return;
//     }
//     setProjects(projects.map(p => p_id === id ? { ...p, ...editFields[id] } : p));
//     alert("Saved successfully!");
//   };

//   const handleUpload = async (id, files) => {
//     if (!files || files.length === 0) return;

//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//         formData.append('images', files[i]);
//     }

//     try {
//         // id ትክክል ምዃኑ ንምርኣይ
//         console.log("Uploading for ID:", id); 

//         const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}/upload`, {
//             method: 'POST',
//             body: formData, 
//         });

//         // እቲ ጌጋ እንታይ ምዃኑ ብልክዕ ንምርኣይ
//         const data = await res.json();
//         if (res.ok) {
//             alert("Uploaded successfully!");
//         } else {
//             console.error("Server Error Detail:", data); // እዚ እዩ እቲ ቁልፊ!
//             alert(`Failed: ${data.message || "Unknown error"}`);
//         }
//     } catch (err) {
//         console.error("Fetch Error:", err);
//     }
// };
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
//       <h1 className="text-4xl font-serif mb-10 text-amber-500">Admin Dashboard</h1>

//       <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
//         <h2 className="text-2xl mb-6">Manage Your Projects</h2>
//         <ul className="space-y-10">
//           {projects.map((p) => (
//             <li key={p.id} className="border-b border-zinc-700 pb-8">
//               <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* ሽም መቀየሪ */}
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Name</label>
//                   <input
//                     defaultValue={p.names}
//                     onChange={(e) => handleEdit(p_id, 'names', e.target.value)}
//                     className="bg-black p-3 border border-zinc-600 w-full rounded"
//                   />
//                 </div>

//                 {/* ዕለት መቀየሪ */}
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
//                   <input
//                     defaultValue={p.date}
//                     onChange={(e) => handleEdit(p_id, 'date', e.target.value)}
//                     className="bg-black p-3 border border-zinc-600 w-full rounded"
//                   />
//                 </div>

//                 {/* ስእሊ መጽዓኒ */}
//                 <div>
//                   <label className="text-[10px] uppercase text-zinc-500">Upload Images</label>
//                   <input
//                     type="file"
//                     multiple
//                     onChange={(e) => handleUpload(p_id, e.target.files)}
//                     className="bg-black p-2 border border-zinc-600 w-full rounded text-sm"
//                   />
//                   <p className="text-[10px] text-zinc-500 mt-1">Current: {p.images.length} images</p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => handleSave(p_id)}
//                 className="mt-6 bg-amber-500 text-black px-8 py-2 font-bold hover:bg-amber-400 rounded transition"
//               >
//                 Save Changes to {p.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState } from 'react';

function AdminDashboard() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Weddings', names: 'Sara & Robel', date: 'July 15, 2026', images: [] },
    { id: 2, title: 'Bridal Shoots', names: 'Abeba', date: 'August 20, 2026', images: [] },
    { id: 3, title: 'Baby Shower', names: 'John & Sarah', date: 'September 10, 2026', images: [] }
  ]);

  const [editFields, setEditFields] = useState({});

  const handleEdit = (id, field, value) => {
    setEditFields(prev => ({
      ...prev,
      [id]: { ...(prev[id] || projects.find(p => p.id === id)), [field]: value }
    }));
  };

  const handleSave = (id) => {
    if (!editFields[id]) {
      alert("No changes detected!");
      return;
    }
    // እቲ ጌጋ ዝነበረ ኣብዚ እዩ ነይሩ: p_id ኣብ ክንዲ p.id
    setProjects(projects.map(p => p.id === id ? { ...p, ...editFields[id] } : p));
    alert("Saved successfully!");
  };

  const handleUpload = async (id, files) => {
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
    }

    try {
        console.log("Uploading for ID:", id); 
        const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}/upload`, {
            method: 'POST',
            body: formData, 
        });

        const data = await res.json();
        if (res.ok) {
            alert("Uploaded successfully!");
        } else {
            console.error("Server Error Detail:", data);
            alert(`Failed: ${data.message || "Unknown error"}`);
        }
    } catch (err) {
        console.error("Fetch Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <h1 className="text-4xl font-serif mb-10 text-amber-500">Admin Dashboard</h1>

      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <h2 className="text-2xl mb-6">Manage Your Projects</h2>
        <ul className="space-y-10">
          {projects.map((p) => (
            <li key={p.id} className="border-b border-zinc-700 pb-8">
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Name</label>
                  <input
                    defaultValue={p.names}
                    onChange={(e) => handleEdit(p.id, 'names', e.target.value)}
                    className="bg-black p-3 border border-zinc-600 w-full rounded"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Date & Location</label>
                  <input
                    defaultValue={p.date}
                    onChange={(e) => handleEdit(p.id, 'date', e.target.value)}
                    className="bg-black p-3 border border-zinc-600 w-full rounded"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-zinc-500">Upload Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleUpload(p.id, e.target.files)}
                    className="bg-black p-2 border border-zinc-600 w-full rounded text-sm"
                  />
                  <p className="text-[10px] text-zinc-500 mt-1">Current: {p.images.length} images</p>
                </div>
              </div>

              <button
                onClick={() => handleSave(p.id)}
                className="mt-6 bg-amber-500 text-black px-8 py-2 font-bold hover:bg-amber-400 rounded transition"
              >
                Save Changes to {p.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;