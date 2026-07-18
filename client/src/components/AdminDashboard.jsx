import React, { useState } from 'react';

function AdminDashboard() {
  const [sections, setSections] = useState([
    { id: 1, title: 'Weddings', names: 'Sara & Robel', images: ['img1.jpg', 'img2.jpg'] },
    { id: 2, title: 'Bridal Shoots', names: 'Abeba', images: ['img3.jpg'] }
  ]);

  // ስእሊ በብሓደ ንምድምሳስ
  const deleteImage = (sectionId, imageIndex) => {
    setSections(prevSections => 
      prevSections.map(sec => 
        sec.id === sectionId 
          ? { ...sec, images: sec.images.filter((_, i) => i !== imageIndex) }
          : sec
      )
    );
  };

  // ፕሮጀክት ንምድምሳስ
  const deleteSection = (id) => {
    setSections(sections.filter(s => s.id !== id));
  };

  return (
    <div className="p-10 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl mb-10">Admin Control Panel</h1>

      {sections.map(section => (
        <div key={section.id} className="mb-10 p-6 border border-zinc-700 rounded-xl bg-zinc-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-amber-300">{section.title} - {section.names}</h2>
            <button onClick={() => deleteSection(section.id)} className="bg-red-600 px-4 py-1 rounded">Delete Category</button>
          </div>

          <div className="flex gap-4 flex-wrap">
            {section.images.map((img, index) => (
              <div key={index} className="relative group">
                <div className="w-24 h-24 bg-zinc-700 rounded flex items-center justify-center">
                  {img} {/* ኣብዚ ናይ ስእሊ ዩአርኤል ይኸውን */}
                </div>
                {/* በብሓደ ንምድምሳስ */}
                <button 
                  onClick={() => deleteImage(section.id, index)}
                  className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-xs"
                >
                  X
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