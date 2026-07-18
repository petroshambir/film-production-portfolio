// import React, { useState } from 'react';

// function AdminDashboard() {
//   const [sections, setSections] = useState([
//     { id: 1, title: 'Weddings', names: 'Sara & Robel', images: ['img1.jpg', 'img2.jpg'] },
//     { id: 2, title: 'Bridal Shoots', names: 'Abeba', images: ['img3.jpg'] }
//   ]);

//   // ስእሊ በብሓደ ንምድምሳስ
//   const deleteImage = (sectionId, imageIndex) => {
//     setSections(prevSections => 
//       prevSections.map(sec => 
//         sec.id === sectionId 
//           ? { ...sec, images: sec.images.filter((_, i) => i !== imageIndex) }
//           : sec
//       )
//     );
//   };

//   // ፕሮጀክት ንምድምሳስ
//   const deleteSection = (id) => {
//     setSections(sections.filter(s => s.id !== id));
//   };

//   return (
//     <div className="p-10 bg-zinc-900 min-h-screen text-white">
//       <h1 className="text-3xl mb-10">Admin Control Panel</h1>

//       {sections.map(section => (
//         <div key={section.id} className="mb-10 p-6 border border-zinc-700 rounded-xl bg-zinc-800">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold text-amber-300">{section.title} - {section.names}</h2>
//             <button onClick={() => deleteSection(section.id)} className="bg-red-600 px-4 py-1 rounded">Delete Category</button>
//           </div>

//           <div className="flex gap-4 flex-wrap">
//             {section.images.map((img, index) => (
//               <div key={index} className="relative group">
//                 <div className="w-24 h-24 bg-zinc-700 rounded flex items-center justify-center">
//                   {img} {/* ኣብዚ ናይ ስእሊ ዩአርኤል ይኸውን */}
//                 </div>
//                 {/* በብሓደ ንምድምሳስ */}
//                 <button 
//                   onClick={() => deleteImage(section.id, index)}
//                   className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-xs"
//                 >
//                   X
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Weddings', names: 'Sara & Robel', images: ['img1.jpg', 'img2.jpg'] }
    ];
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(sections));
  }, [sections]);

  // ስም ንምቕያር (Edit Name)
  const editName = (id, newName) => {
    setSections(sections.map(s => s.id === id ? { ...s, names: newName } : s));
  };

  // ሓድሽ ስእሊ ንምውሳኽ (Add Image)
  const addImage = (id) => {
    const imgName = prompt("Enter image name (e.g., photo3.jpg):");
    if (imgName) {
      setSections(sections.map(s => s.id === id ? { ...s, images: [...s.images, imgName] } : s));
    }
  };

  // ስእሊ በብሓደ ንምድምሳስ (Delete Image)
  const deleteImage = (sectionId, imgIndex) => {
    setSections(sections.map(s => 
      s.id === sectionId ? { ...s, images: s.images.filter((_, i) => i !== imgIndex) } : s
    ));
  };

  return (
    <div className="p-8 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl mb-8 border-b border-zinc-700 pb-4">Admin Dashboard</h1>

      {sections.map(section => (
        <div key={section.id} className="mb-10 p-6 border border-zinc-700 rounded-xl bg-zinc-800">
          {/* Edit Name Section */}
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              value={section.names}
              onChange={(e) => editName(section.id, e.target.value)}
              className="bg-zinc-700 p-2 rounded w-full outline-none"
            />
            <button onClick={() => addImage(section.id)} className="bg-green-600 px-4 py-2 rounded whitespace-nowrap">+ Add Image</button>
          </div>

          {/* Images Gallery */}
          <div className="flex gap-4 flex-wrap mt-4">
            {section.images.map((img, index) => (
              <div key={index} className="relative group w-24 h-24 bg-zinc-700 rounded flex items-center justify-center border border-zinc-600">
                <span className="text-xs truncate px-1">{img}</span>
                <button 
                  onClick={() => deleteImage(section.id, index)}
                  className="absolute -top-2 -right-2 bg-red-600 rounded-full w-6 h-6 text-xs hover:bg-red-700"
                >X</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;