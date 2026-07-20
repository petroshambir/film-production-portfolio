

// import React, { useState, useEffect } from 'react';

// const sectionsConfig = [
//   { title: 'Weddings', storageKey: 'portfolio_weddings' },
//   { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
//   { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
// ];

// function AdminDashboard() {
//   const [sectionsData, setSectionsData] = useState({});

//   // ካብ ዳታቤዝ ነቲ ናይ ሕጂ ዳታ ንምጽዓን
//   useEffect(() => {
//     fetch('https://film-production-portfolio.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const dataMap = {};
//         data.forEach(item => {
//           dataMap[item.title] = item;
//         });
//         setSectionsData(dataMap);
//       })
//       .catch(err => console.error("Error loading admin data:", err));
//   }, []);

//   const handleSave = async (title, data) => {
//     try {
//       const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
//       if (!res.ok) throw new Error("Failed to save");
//       alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
//     } catch (err) {
//       console.error("Error saving to DB", err);
//       alert("ዓወት ኣይተረኽበን!");
//     }
//   };

//   return (
//     <div className="p-8 bg-zinc-950 min-h-screen text-white">
//       <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

//       {sectionsConfig.map((section) => {
//         const currentData = sectionsData[section.title] || { names: '', desc: '', images: [] };

//         return (
//           <SectionRenderer 
//             key={section.title}
//             title={section.title} 
//             data={currentData} 
//             setData={(newData) => setSectionsData({ ...sectionsData, [section.title]: newData })} 
//             onSave={() => handleSave(section.title, currentData)} 
//           />
//         );
//       })}
//     </div>
//   );
// }

// function SectionRenderer({ title, data, setData, onSave }) {
//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('images', file);

//     try {
//       const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}/upload`, {
//         method: 'POST',
//         body: formData
//       });

//       if (!res.ok) throw new Error("Upload failed");
      
//       const result = await res.json();
//       setData({ ...data, images: result.images });
//       alert("ስእሊ ተሰቒሉ ኣሎ!");
//     } catch (err) {
//       console.error("Upload Error:", err);
//       alert("ስእሊ ክስቀል ኣይከኣለን!");
//     }
//   };

//   const deleteImage = async (imgIndex) => {
//     const updatedImages = data.images.filter((_, i) => i !== imgIndex);
//     const newData = { ...data, images: updatedImages };
//     setData(newData);
    
//     // ብቐጥታ ናብ ሰርቨር ንሰዶ
//     await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newData)
//     });
//   };

//   return (
//     <div className="mb-16 p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl">
//       <div className="flex justify-between items-center mb-6 border-b border-zinc-700 pb-4">
//         <h2 className="text-3xl font-bold text-amber-300">{title} Control Panel</h2>
//         <button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold">
//           Save {title}
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10">
//         <div>
//           <label className="block text-zinc-400 mb-2">Names / Title:</label>
//           <input 
//             type="text" 
//             value={data.names || ''}
//             onChange={(e) => setData({ ...data, names: e.target.value })}
//             className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white"
//             placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
//           />
//         </div>
//         <div>
//           <label className="block text-zinc-400 mb-2">Upload Image:</label>
//           <input type="file" onChange={handleImageUpload} className="text-zinc-400" />
//         </div>
//       </div>

//       <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
//         {data.images && data.images.map((img, index) => (
//           <div key={index} className="relative h-32 border border-zinc-700 rounded-lg overflow-hidden">
//             <img src={img} className="w-full h-full object-cover" alt="upload" />
//             <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 font-bold">&times;</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';

const sectionsConfig = [
  { title: 'Weddings', storageKey: 'portfolio_weddings' },
  { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
  { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
];

function AdminDashboard() {
  const [sectionsData, setSectionsData] = useState({});

  // ካብ ዳታቤዝ ነቲ ናይ ሕጂ ዳታ ንምጽዓን
  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        const dataMap = {};
        data.forEach(item => {
          dataMap[item.title] = item;
        });
        setSectionsData(dataMap);
      })
      .catch(err => console.error("Error loading admin data:", err));
  }, []);

  const handleSave = async (title, data) => {
    try {
      const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to save");
      alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
    } catch (err) {
      console.error("Error saving to DB", err);
      alert("ዓወት ኣይተረኽበን!");
    }
  };

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

      {sectionsConfig.map((section) => {
        const currentData = sectionsData[section.title] || { names: '', desc: '', images: [] };

        return (
          <SectionRenderer 
            key={section.title}
            title={section.title} 
            data={currentData} 
            setData={(newData) => setSectionsData({ ...sectionsData, [section.title]: newData })} 
            onSave={() => handleSave(section.title, currentData)} 
          />
        );
      })}
    </div>
  );
}

function SectionRenderer({ title, data, setData, onSave }) {
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('images', file);

    try {
      const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}/upload`, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");
      
      const result = await res.json();
      setData({ ...data, images: result.images });
      alert("ስእሊ ተሰቒሉ ኣሎ!");
    } catch (err) {
      console.error("Upload Error:", err);
      alert("ስእሊ ክስቀል ኣይከኣለን!");
    }
  };

  const deleteImage = async (imgIndex) => {
    const updatedImages = data.images.filter((_, i) => i !== imgIndex);
    const newData = { ...data, images: updatedImages };
    setData(newData);
    
    // ብቐጥታ ናብ ሰርቨር ንሰዶ
    await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
  };

  return (
    <div className="mb-16 p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl">
      <div className="flex justify-between items-center mb-6 border-b border-zinc-700 pb-4">
        <h2 className="text-3xl font-bold text-amber-300">{title} Control Panel</h2>
        <button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold">
          Save {title}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <label className="block text-zinc-400 mb-2">Names / Title:</label>
          <input 
            type="text" 
            value={data.names || ''}
            onChange={(e) => setData({ ...data, names: e.target.value })}
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white mb-6"
            placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
          />

          {/* ንዲስክሪፕሽን (Description) እትጽሕፈሉ ውቡብ መእተዊ (Textarea) */}
          <label className="block text-zinc-400 mb-2">Description (መግለጫ):</label>
          <textarea 
            rows="4"
            value={data.desc || ''}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white focus:outline-none focus:border-amber-400 transition-colors"
            placeholder="እዚ ስራሕ እዚ ዝገልጽ ጽሑፍ ኣብዚ ጽሓፍ..."
          />
        </div>

        <div>
          <label className="block text-zinc-400 mb-2">Upload Image:</label>
          <input type="file" onChange={handleImageUpload} className="text-zinc-400 mb-4" />
          
          <div className="text-xs text-zinc-500 italic">
            * ኣብዚ ዝርዝር መግለጫ (Description) ዝጸሓፍካዮ ጽሑፍ፡ ብቐጥታ ኣብቲ ሆም ፔጅ ኣብ ትሕቲ እቲ ርእሲ ክረአ እዩ።
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
        {data.images && data.images.map((img, index) => (
          <div key={index} className="relative h-32 border border-zinc-700 rounded-lg overflow-hidden">
            <img src={img} className="w-full h-full object-cover" alt="upload" />
            <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 font-bold">&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;