
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
import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const sectionsConfig = [
    { id: 'WEDDING_DB_ID_HERE', title: 'Weddings', storageKey: 'portfolio_weddings' },
    { id: 'BRIDAL_DB_ID_HERE', title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
    { id: 'BABY_DB_ID_HERE', title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
  ];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  const getInitialData = (key, defaultName) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : { names: defaultName, images: [] };
  };

  const [wedding, setWedding] = useState(() => getInitialData('portfolio_weddings', 'Sara & Robel'));
  const [bridal, setBridal] = useState(() => getInitialData('portfolio_bridal', 'Abeba'));
  const [baby, setBaby] = useState(() => getInitialData('portfolio_babyshower', 'John & Sarah'));

  const updateAndSaveLocal = (key, data, setter) => {
    localStorage.setItem(key, JSON.stringify(data));
    setter(data);
  };

  const handleSave = async (id, data, key) => {
    try {
      await fetch(`https://film-production-portfolio.onrender.com/api/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      alert("ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ!");
    } catch (err) {
      console.error("Error saving to DB", err);
    }
  };

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

      <SectionRenderer title="Weddings" data={wedding} setData={(d) => updateAndSaveLocal('portfolio_weddings', d, setWedding)} onSave={() => handleSave(sectionsConfig[0].id, wedding)} />
      <SectionRenderer title="Bridal Shoots" data={bridal} setData={(d) => updateAndSaveLocal('portfolio_bridal', d, setBridal)} onSave={() => handleSave(sectionsConfig[1].id, bridal)} />
      <SectionRenderer title="Baby Shower & Baptism" data={baby} setData={(d) => updateAndSaveLocal('portfolio_babyshower', d, setBaby)} onSave={() => handleSave(sectionsConfig[2].id, baby)} />
    </div>
  );
}

function SectionRenderer({ title, data, setData, onSave }) {
  // እዚ እቲ ናይ ስእሊ ምስቃል ሎጂክ እዩ
  // const handleImageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append('images', file);

  //   // እቲ ID ኣብዚ ክትጽሕፎ ኣለካ (ንኣብነት ናይ weddings ID)
  //   const projectId = "WEDDING_DB_ID_HERE"; 

  //   try {
  //     const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${projectId}/upload`, {
  //       method: 'POST',
  //       body: formData
  //     });
  //     const result = await res.json();
  //     // ስእሊ ናብ State ንምውሳኽ
  //     setData({ ...data, images: [...data.images, ...result.images.slice(-1)] });
  //     alert("ስእሊ ተሰቒሉ ኣሎ!");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // 1. projectId ካብቲ props ዝመጽእ section (title/ID) ክኸውን ኣለዎ
    // ንስኻ ኣብ AdminDashboard ፕሮጀክትታትካ ትቕበል ስለዘለኻ፡ 
    // ካብ `projects` state ናይቲ Section ID ክንወስድ ንኽእል
    const projectId = sectionsConfig.find(s => s.title === title)?.id;

    if (!projectId || projectId === 'WEDDING_DB_ID_HERE') {
      alert("Error: ትኽክለኛ ናይ ፕሮጀክት ID የልቦን።");
      return;
    }

    const formData = new FormData();
    formData.append('images', file); 

    try {
      const res = await fetch(`https://film-production-portfolio.onrender.com/api/projects/${projectId}/upload`, {
        method: 'POST',
        body: formData,
        // Header ኣይትወሰኽ (Browser ባዕሉ ይገብሮ)
      });

      // 2. ሰርቨር 500 እንተመሊሱ፡ ዝርዝር ጌጋ ንምርኣይ እዚ ቼክ ንግበር
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server Error Response:", errorText);
        throw new Error(`Upload failed: ${res.status}`);
      }

      const result = await res.json();
      
      // 3. እቲ Backend ዝመለሶ ፎርማት ንምርግጋጽ
      // result.images ወይ result ዝብል ክኸውን ይኽእል እዩ
      setData({ ...data, images: [...data.images, ...result.images] });
      alert("ስእሊ ብዓወት ተሰቒሉ!");
    } catch (err) {
      console.error("Upload error details:", err);
      alert("ስእሊ ክሰቅል ኣይከኣለን፡ ብኸመይ ምዃኑ Console ተራእ።");
    }
  };

  const deleteImage = (imgIndex) => {
    setData({ ...data, images: data.images.filter((_, i) => i !== imgIndex) });
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
        <input 
          type="text" value={data.names}
          onChange={(e) => setData({ ...data, names: e.target.value })}
          className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full"
        />
        <input type="file" onChange={handleImageUpload} className="text-zinc-400" />
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
        {data.images.map((img, index) => (
          <div key={index} className="relative h-32 border border-zinc-700 rounded-lg overflow-hidden">
            <img src={img} className="w-full h-full object-cover" />
            <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 px-2">&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;