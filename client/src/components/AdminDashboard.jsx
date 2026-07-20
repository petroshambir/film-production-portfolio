
// import React, { useState } from 'react';

// function AdminDashboard() {
//   const sectionsConfig = [
//     { id: 'WEDDING_DB_ID_HERE', title: 'Weddings', storageKey: 'portfolio_weddings' },
//     { id: 'BRIDAL_DB_ID_HERE', title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
//     { id: 'BABY_DB_ID_HERE', title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
//   ];
// const [projects, setProjects] = useState([]);


// useEffect(() => {
//   fetch('https://film-production-portfolio.onrender.com/api/projects')
//     .then(res => res.json())
//     .then(data => setProjects(data))
//     .catch(err => console.error(err));
// }, []);

//   const getInitialData = (key, defaultName) => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : { names: defaultName, images: [] };
//   };

//   const [wedding, setWedding] = useState(() => getInitialData('portfolio_weddings', 'Sara & Robel'));
//   const [bridal, setBridal] = useState(() => getInitialData('portfolio_bridal', 'Abeba'));
//   const [baby, setBaby] = useState(() => getInitialData('portfolio_babyshower', 'John & Sarah'));

//   // ዳታ ኣብ localStorage ንምዕቃብ ሓጋዚ ፈንክሽን
//   const updateAndSaveLocal = (key, data, setter) => {
//     localStorage.setItem(key, JSON.stringify(data));
//     setter(data);
//   };
//   const handleImageUpload = async (event, projectId) => {
//   const file = event.target.files[0];
//   if (!file) return;

//   const formData = new FormData();
//   formData.append('images', file);

//   try {
//     const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${projectId}/upload`, {
//       method: 'POST',
//       body: formData // multer FormData ይደሊ
//     });
//     const data = await res.json();
//     alert("ስእሊ ተሰቒሉ ኣሎ!");
//     // ዳታኻ ኣሓድሶ (Refresh State)
//   } catch (err) {
//     console.error(err);
//   }
// };

//   const handleSave = async (id, data, key) => {
//     try {
//       await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
//       alert("ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ!");
//     } catch (err) {
//       console.error("Error saving to DB", err);
//     }
//   };

//   return (
//     <div className="p-8 bg-zinc-950 min-h-screen text-white">
//       <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

//       <SectionRenderer 
//         title="Weddings" 
//         data={wedding} 
//         setData={(d) => updateAndSaveLocal('portfolio_weddings', d, setWedding)} 
//         onSave={() => handleSave(sectionsConfig[0].id, wedding)} 
//       />

//       <SectionRenderer 
//         title="Bridal Shoots" 
//         data={bridal} 
//         setData={(d) => updateAndSaveLocal('portfolio_bridal', d, setBridal)} 
//         onSave={() => handleSave(sectionsConfig[1].id, bridal)} 
//       />

//       <SectionRenderer 
//         title="Baby Shower & Baptism" 
//         data={baby} 
//         setData={(d) => updateAndSaveLocal('portfolio_babyshower', d, setBaby)} 
//         onSave={() => handleSave(sectionsConfig[2].id, baby)} 
//       />
//     </div>
//   );
// }

// function SectionRenderer({ title, data, setData, onSave }) {
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setData({ ...data, images: [...data.images, reader.result] });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const deleteImage = (imgIndex) => {
//     setData({ ...data, images: data.images.filter((_, i) => i !== imgIndex) });
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
//         <input 
//           type="text" value={data.names}
//           onChange={(e) => setData({ ...data, names: e.target.value })}
//           className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full"
//         />
//         <input type="file" onChange={handleImageUpload} className="text-zinc-400" />
//       </div>

//       <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
//         {data.images.map((img, index) => (
//           <div key={index} className="relative h-32 border border-zinc-700 rounded-lg overflow-hidden">
//             <img src={img} className="w-full h-full object-cover" />
//             <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 px-2">&times;</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';

// // 1. sectionsConfig ኣብ ወጻኢ ኣቐምጦ፣ ንኹሉ Components ንኽርእዮ
// const sectionsConfig = [
//   { id: '66a1b2c3d4e5f6g7h8i9j0k1', title: 'Weddings', storageKey: 'portfolio_weddings' },
//   { id: '66a1b2c3d4e5f6g7h8i9j0k2', title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
//   { id: '66a1b2c3d4e5f6g7h8i9j0k3', title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
// ];

// function AdminDashboard() {
//   const getInitialData = (key, defaultName) => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : { names: defaultName, images: [] };
//   };

//   // State-ታት ኣብዚ ኣለዋ
//   const [wedding, setWedding] = useState(() => getInitialData('portfolio_weddings', 'Sara & Robel'));
//   const [bridal, setBridal] = useState(() => getInitialData('portfolio_bridal', 'Abeba'));
//   const [baby, setBaby] = useState(() => getInitialData('portfolio_babyshower', 'John & Sarah'));

//   const updateAndSaveLocal = (key, data, setter) => {
//     localStorage.setItem(key, JSON.stringify(data));
//     setter(data);
//   };

//   const handleSave = async (id, data) => {
//     try {
//       await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
//       alert("ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ!");
//     } catch (err) {
//       console.error("Error saving to DB", err);
//     }
//   };

//   return (
//     <div className="p-8 bg-zinc-950 min-h-screen text-white">
//       <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

//       <SectionRenderer title="Weddings" data={wedding} setData={(d) => updateAndSaveLocal('portfolio_weddings', d, setWedding)} onSave={() => handleSave(sectionsConfig[0].id, wedding)} />
//       <SectionRenderer title="Bridal Shoots" data={bridal} setData={(d) => updateAndSaveLocal('portfolio_bridal', d, setBridal)} onSave={() => handleSave(sectionsConfig[1].id, bridal)} />
//       <SectionRenderer title="Baby Shower & Baptism" data={baby} setData={(d) => updateAndSaveLocal('portfolio_babyshower', d, setBaby)} onSave={() => handleSave(sectionsConfig[2].id, baby)} />
//     </div>
//   );
// }

// function SectionRenderer({ title, data, setData, onSave }) {
//   // 2. handleImageUpload ውሽጢ SectionRenderer
//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('images', file);

//     const section = sectionsConfig.find(s => s.title === title);
//     const projectId = section ? section.id : 'NONE';

//     try {
//       const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${projectId}/upload`, {
//         method: 'POST',
//         body: formData
//       });

//       if (!res.ok) throw new Error("Upload failed");
      
//       const result = await res.json();
//       // result.images ንምርግጋጽ console.log(result) ግበር
//       setData({ ...data, images: [...data.images, ...result.images] });
//       alert("ስእሊ ተሰቒሉ ኣሎ!");
//     } catch (err) {
//       console.error("Upload Error:", err);
//       alert("ስእሊ ክስቀል ኣይከኣለን!");
//     }
//   };

//   const deleteImage = (imgIndex) => {
//     setData({ ...data, images: data.images.filter((_, i) => i !== imgIndex) });
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
//         <input 
//           type="text" value={data.names}
//           onChange={(e) => setData({ ...data, names: e.target.value })}
//           className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full"
//         />
//         <input type="file" onChange={handleImageUpload} className="text-zinc-400" />
//       </div>

//       <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
//         {data.images.map((img, index) => (
//           <div key={index} className="relative h-32 border border-zinc-700 rounded-lg overflow-hidden">
//             <img src={img} className="w-full h-full object-cover" />
//             <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 px-2">&times;</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState } from 'react';

// const sectionsConfig = [
//   { title: 'Weddings', storageKey: 'portfolio_weddings' },
//   { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
//   { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
// ];

// function AdminDashboard() {
//   const [wedding, setWedding] = useState({ names: 'Sara & Robel', images: [] });
//   const [bridal, setBridal] = useState({ names: 'Abeba', images: [] });
//   const [baby, setBaby] = useState({ names: 'John & Sarah', images: [] });

//   const handleSave = async (title, data) => {
//     try {
//       await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
//       alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
//     } catch (err) {
//       console.error("Error saving to DB", err);
//       alert("ዓወት ኣይተረኽበን!");
//     }
//   };

//   return (
//     <div className="p-8 bg-zinc-950 min-h-screen text-white">
//       <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

//       <SectionRenderer title="Weddings" data={wedding} setData={setWedding} onSave={() => handleSave('Weddings', wedding)} />
//       <SectionRenderer title="Bridal Shoots" data={bridal} setData={setBridal} onSave={() => handleSave('Bridal Shoots', bridal)} />
//       <SectionRenderer title="Baby Shower & Baptism" data={baby} setData={setBaby} onSave={() => handleSave('Baby Shower & Baptism', baby)} />
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
//       // ብ Title ንሰዶ ኣለና (ንኣብነት .../api/projects/Weddings/upload)
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
//     setData({ ...data, images: updatedImages });
//     // ንምድምساس ድማ ብቐጥታ ናብ ሰርቨር ንሰዶ
//     await handleSaveServer(updatedImages);
//   };

//   const handleSaveServer = async (newImages) => {
//     await fetch(`https://film-production-portfolio.onrender.com/api/projects/${title}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...data, images: newImages })
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
//             value={data.names}
//             onChange={(e) => setData({ ...data, names: e.target.value })}
//             className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white"
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
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white"
            placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
          />
        </div>
        <div>
          <label className="block text-zinc-400 mb-2">Upload Image:</label>
          <input type="file" onChange={handleImageUpload} className="text-zinc-400" />
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