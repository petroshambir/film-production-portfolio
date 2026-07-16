import React from 'react';
import { useParams } from 'react-router-dom';

function Gallery() {
  const { category } = useParams(); // እቲ 'weddings' ዝብል ካብ URL ይወስድ

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', padding: '50px', color: 'white' }}>
      {/* እቲ ናትካ ርእሲ ኣብዚ ይርአ */}
      <h1 className="text-6xl font-serif italic text-amber-300 capitalize text-center mb-10">
        {category.replace(/-/g, ' ')}
      </h1>
      
      <div className="text-center">
        <p className="text-zinc-400">
           Welcome to the {category.replace(/-/g, ' ')} gallery. 
           Here you will find all the selected photos.
        </p>
        {/* ኣብዚ ናይ Lightbox ኮድካ ወይ ስእልታትካ ኣቐምጥ */}
      </div>
    </div>
  );
}

export default Gallery;