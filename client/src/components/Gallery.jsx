import React from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
// እቶም ናትካ ስእልታት ኣብዚ ኢምፖርት ግበር
import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';

function Gallery() {
  const { category } = useParams(); // ካብ URL ዝመጸ ስም (weddings, bridal-shoots)

  // ንነፍሲ ወከፍ ክፍሊ ዝኸውን ስእልታት
  const galleryData = {
    'weddings': [wedding1, wedding2],
    'bridal-shoots': [wedding2, wedding1],
    'baby-shower-baptism': [wedding1, wedding2]
  };

  const images = galleryData[category] || [];

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', padding: '50px' }}>
      <h1 className="text-white text-3xl capitalize mb-10">{category.replace('-', ' ')}</h1>
      
      {/* ኣብዚ ስእልታት ብግሪድ ኣርእዮም ወይ Lightbox ክፈት */}
      <Lightbox 
        open={true} 
        slides={images.map(img => ({ src: img }))} 
        close={() => window.history.back()} 
      />
    </div>
  );
}

export default Gallery;