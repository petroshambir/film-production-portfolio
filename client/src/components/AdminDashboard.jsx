// // import React, { useState, useEffect } from 'react';

// // function AdminDashboard() {
// //   // ንነፍሲ ወከፍ ክፍሊ ዝኸውን መጀመርታ ዳታ
// //   const [sections, setSections] = useState(() => {
// //     const saved = localStorage.getItem('portfolioData');
// //     return saved ? JSON.parse(saved) : [
// //       { id: 1, title: 'Weddings', names: 'Sara & Robel', images: [] },
// //       { id: 2, title: 'Bridal Shoots', names: 'Abeba', images: [] },
// //       { id: 3, title: 'Baby Shower & Baptism', names: 'John & Sarah', images: [] }
// //     ];
// //   });

// //   useEffect(() => {
// //     localStorage.setItem('portfolioData', JSON.stringify(sections));
// //   }, [sections]);

// //   // ስም ንምቕያር
// //   const editName = (id, newName) => {
// //     setSections(sections.map(s => s.id === id ? { ...s, names: newName } : s));
// //   };

// //   // ሓድሽ ስእሊ ብፋይል ንምውሳኽ
// //   const handleImageUpload = (id, event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setSections(sections.map(s => 
// //           s.id === id ? { ...s, images: [...s.images, reader.result] } : s
// //         ));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   // ስእሊ ንምድምሳስ
// //   const deleteImage = (sectionId, imgIndex) => {
// //     setSections(sections.map(s => 
// //       s.id === sectionId ? { ...s, images: s.images.filter((_, i) => i !== imgIndex) } : s
// //     ));
// //   };

// //   return (
// //     <div className="p-8 bg-zinc-950 min-h-screen text-white">
// //       <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

// //       {sections.map(section => (
// //         <div key={section.id} className="mb-12 p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-xl">
// //           <h2 className="text-2xl mb-4 font-semibold text-zinc-300">{section.title}</h2>
          
// //           {/* ስም እዲት ዝብለሉ */}
// //           <div className="mb-6">
// //             <label className="block text-sm text-zinc-500 mb-2">Edit Display Name:</label>
// //             <input 
// //               type="text" 
// //               value={section.names}
// //               onChange={(e) => editName(section.id, e.target.value)}
// //               className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full outline-none focus:border-amber-500"
// //             />
// //           </div>

// //           {/* ስእሊ ኢንፑት */}
// //           <div className="mb-6">
// //             <label className="block text-sm text-zinc-500 mb-2">Upload Image for {section.title}:</label>
// //             <input 
// //               type="file" 
// //               onChange={(e) => handleImageUpload(section.id, e)}
// //               className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
// //             />
// //           </div>

// //           {/* ስእልታት መርኣዪ */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             {section.images.map((img, index) => (
// //               <div key={index} className="relative group border border-zinc-700 rounded-lg overflow-hidden">
// //                 <img src={img} alt="preview" className="w-full h-32 object-cover" />
// //                 <button 
// //                   onClick={() => deleteImage(section.id, index)}
// //                   className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
// //                 >
// //                   &times;
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default AdminDashboard;

// // import React, { useState } from 'react';

// // function AdminDashboard() {
// //   const [sections, setSections] = useState(() => {
// //     const saved = localStorage.getItem('portfolioData');
// //     return saved ? JSON.parse(saved) : [
// //       { id: 1, title: 'Weddings', names: 'Sara & Robel', images: [] },
// //       { id: 2, title: 'Bridal Shoots', names: 'Abeba', images: [] },
// //       { id: 3, title: 'Baby Shower & Baptism', names: 'John & Sarah', images: [] }
// //     ];
// //   });

// //   // ለውጢ ንምዕቃብ (Save Data)
// //   const handleSave = () => {
// //     localStorage.setItem('portfolioData', JSON.stringify(sections));
// //     alert("ኩሉ ለውጢታት ብሰላም ተዓቂቡ ኣሎ!");
// //   };

// //   const editName = (id, newName) => {
// //     setSections(sections.map(s => s.id === id ? { ...s, names: newName } : s));
// //   };

// //   const handleImageUpload = (id, event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setSections(sections.map(s => 
// //           s.id === id ? { ...s, images: [...s.images, reader.result] } : s
// //         ));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const deleteImage = (sectionId, imgIndex) => {
// //     setSections(sections.map(s => 
// //       s.id === sectionId ? { ...s, images: s.images.filter((_, i) => i !== imgIndex) } : s
// //     ));
// //   };

// //   return (
// //     <div className="p-8 bg-zinc-950 min-h-screen text-white">
// //       <div className="flex justify-between items-center mb-10 border-b border-zinc-800 pb-6">
// //         <h1 className="text-3xl font-bold text-amber-500">Admin Dashboard</h1>
// //         {/* Save Button */}
// //         <button 
// //           onClick={handleSave}
// //           className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
// //         >
// //           Save All Changes
// //         </button>
// //       </div>

// //       {sections.map(section => (
// //         <div key={section.id} className="mb-12 p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-xl">
// //           <h2 className="text-2xl mb-4 font-semibold text-zinc-300">{section.title}</h2>
          
// //           <div className="mb-6">
// //             <label className="block text-sm text-zinc-500 mb-2">Edit Display Name:</label>
// //             <input 
// //               type="text" 
// //               value={section.names}
// //               onChange={(e) => editName(section.id, e.target.value)}
// //               className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full outline-none focus:border-amber-500"
// //             />
// //           </div>

// //           <div className="mb-6">
// //             <label className="block text-sm text-zinc-500 mb-2">Upload Image:</label>
// //             <input 
// //               type="file" 
// //               onChange={(e) => handleImageUpload(section.id, e)}
// //               className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer"
// //             />
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             {section.images.map((img, index) => (
// //               <div key={index} className="relative group border border-zinc-700 rounded-lg overflow-hidden">
// //                 <img src={img} alt="preview" className="w-full h-32 object-cover" />
// //                 <button 
// //                   onClick={() => deleteImage(section.id, index)}
// //                   className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
// //                 >
// //                   &times;
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default AdminDashboard;

// import React, { useState } from 'react';

// function AdminDashboard() {
//   const [sections, setSections] = useState(() => {
//     const saved = localStorage.getItem('portfolioData');
//     return saved ? JSON.parse(saved) : [
//       { id: 1, title: 'Weddings', names: 'Sara & Robel', images: [] },
//       { id: 2, title: 'Bridal Shoots', names: 'Abeba', images: [] },
//       { id: 3, title: 'Baby Shower & Baptism', names: 'John & Sarah', images: [] }
//     ];
//   });

//   const handleSave = () => {
//     localStorage.setItem('portfolioData', JSON.stringify(sections));
//     alert("ኩሉ ለውጢታት ብሰላም ተዓቂቡ ኣሎ!");
//   };

//   const editName = (id, newName) => {
//     setSections(prev => prev.map(s => s.id === id ? { ...s, names: newName } : s));
//   };

//   const handleImageUpload = (id, event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     // ስእሊ ንምልዋጥ
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSections(prev => prev.map(s => 
//         s.id === id ? { ...s, images: [...s.images, reader.result] } : s
//       ));
//     };
//     reader.readAsDataURL(file);
    
//     // ንምውዳእ እቲ input ክጸሪ
//     event.target.value = null; 
//   };

//   const deleteImage = (sectionId, imgIndex) => {
//     setSections(prev => prev.map(s => 
//       s.id === sectionId ? { ...s, images: s.images.filter((_, i) => i !== imgIndex) } : s
//     ));
//   };

//   return (
//     <div className="p-8 bg-zinc-950 min-h-screen text-white">
//       <div className="flex justify-between items-center mb-10 border-b border-zinc-800 pb-6">
//         <h1 className="text-3xl font-bold text-amber-500">Admin Dashboard</h1>
//         <button 
//           onClick={handleSave}
//           className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-green-900/20"
//         >
//           Save All Changes
//         </button>
//       </div>

//       {sections.map(section => (
//         <div key={section.id} className="mb-12 p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-xl">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold text-amber-300">{section.title}</h2>
//             <span className="text-xs text-zinc-500">ID: {section.id}</span>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Left Side: Inputs */}
//             <div>
//               <div className="mb-6">
//                 <label className="block text-sm text-zinc-400 mb-2">Edit Display Name:</label>
//                 <input 
//                   type="text" 
//                   value={section.names}
//                   onChange={(e) => editName(section.id, e.target.value)}
//                   className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full outline-none focus:border-amber-500 transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-zinc-400 mb-2">Upload New Image:</label>
//                 <input 
//                   type="file" 
//                   accept="image/*"
//                   onChange={(e) => handleImageUpload(section.id, e)}
//                   className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer transition-all"
//                 />
//               </div>
//             </div>

//             {/* Right Side: Images */}
//             <div className="grid grid-cols-3 gap-3">
//               {section.images.map((img, index) => (
//                 <div key={index} className="relative group border border-zinc-700 rounded-lg overflow-hidden h-24">
//                   <img src={img} alt="preview" className="w-full h-full object-cover" />
//                   <button 
//                     onClick={() => deleteImage(section.id, index)}
//                     className="absolute top-1 right-1 bg-red-600/90 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     &times;
//                   </button>
//                 </div>
//               ))}
//               {section.images.length === 0 && (
//                 <div className="col-span-3 flex items-center justify-center border-2 border-dashed border-zinc-700 rounded-lg h-24 text-zinc-600">
//                   No images yet
//                 </div>
//               )}
//             </div>
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
      { id: 1, title: 'Weddings', names: 'Sara & Robel', images: [] },
      { id: 2, title: 'Bridal Shoots', names: 'Abeba', images: [] },
      { id: 3, title: 'Baby Shower & Baptism', names: 'John & Sarah', images: [] }
    ];
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(sections));
  }, [sections]);

  const updateSection = (id, field, value) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSections(prev => prev.map(s => 
          s.id === id ? { ...s, images: [...s.images, reader.result] } : s
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (sectionId, imgIndex) => {
    setSections(prev => prev.map(s => 
      s.id === sectionId ? { ...s, images: s.images.filter((_, i) => i !== imgIndex) } : s
    ));
  };

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

      {/* ነፍሲ ወከፍ ክፍልታት በብሓደ ኣብዚ ይምደቡ */}
      {sections.map(section => (
        <div key={section.id} className="mb-16 p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-amber-300 border-b border-zinc-700 pb-4">
            {section.title} Control Panel
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* ስም ናይቲ ክፍሊ */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Edit {section.title} Display Name:</label>
              <input 
                type="text" 
                value={section.names}
                onChange={(e) => updateSection(section.id, 'names', e.target.value)}
                className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full outline-none focus:border-amber-500"
              />
            </div>

            {/* ናይቲ ክፍሊ ስእሊ */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Upload Image for {section.title}:</label>
              <input 
                type="file" 
                onChange={(e) => handleImageUpload(section.id, e)}
                className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-amber-600 file:text-white cursor-pointer"
              />
            </div>
          </div>

          {/* ስእልታት ናይቲ ክፍሊ ጥራይ */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
            {section.images.map((img, index) => (
              <div key={index} className="relative group border border-zinc-700 rounded-lg overflow-hidden h-32">
                <img src={img} alt="portfolio" className="w-full h-full object-cover" />
                <button 
                  onClick={() => deleteImage(section.id, index)}
                  className="absolute top-2 right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;