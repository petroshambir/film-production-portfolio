// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
// import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
// import Footer from "../components/Footer";

// // Lightbox ንምጥቃም
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: [wedding1, wedding2],
//     reverse: false
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: [wedding2, wedding1],
//     reverse: true
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: [wedding1, wedding2],
//     reverse: false
//   }
// ];

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const openGallery = (images) => {
//     setCurrentImages(images.map(img => ({ src: img })));
//     setOpen(true);
//   };

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       <section className="px-6 py-20 md:px-24">
//         {workSections.map((section, index) => (
//           <div 
//             key={index} 
//             className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-32`}
//           >
            
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col justify-center space-y-6">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
//                 0{index + 1} — Selection
//               </span>
//               <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
//                 {section.title}
//               </h2>
//               <p className="text-lg leading-relaxed text-zinc-400 max-w-md">
//                 {section.desc}
//               </p>
//             </div>

//             {/* ስእልታት ግሪድ */}
//             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//               {section.images.slice(0, 2).map((img, i) => (
//                 <div 
//                   key={i} 
//                   className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}
//                 >
//                   <img 
//                     src={img} 
//                     alt={section.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                   />
//                 </div>
//               ))}
              
//               {/* View Gallery ኣብ ትሕቲ ስእልታት */}
//               <div className="col-span-1 md:col-span-2 mt-4">
//                 <button 
//                   onClick={() => openGallery(section.images)}
//                   className="text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all duration-300"
//                 >
//                   View Gallery
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Lightbox Component */}
//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={currentImages} 
//       />

//       <Footer />
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
// import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
// import Footer from "../components/Footer";

// // Lightbox ንምጥቃም
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: [wedding1, wedding2],
//     reverse: false
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: [wedding2, wedding1],
//     reverse: true
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: [wedding1, wedding2],
//     reverse: false
//   }
// ];

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const openGallery = (images) => {
//     setCurrentImages(images.map(img => ({ src: img })));
//     setOpen(true);
//   };

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       <section className="px-6 py-20 md:px-24">
//         {workSections.map((section, index) => (
//           <div 
//             key={index} 
//             className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24 mb-32`}
//           >
            
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-6">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
//                 0{index + 1} — Selection
//               </span>
//               <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
//                 {section.title}
//               </h2>
//               <p className="text-lg leading-relaxed text-zinc-400 max-w-md">
//                 {section.desc}
//               </p>
//             </div>

//             {/* ስእልታት ግሪድ */}
//             <div className="flex-1 flex flex-col items-center md:items-start w-full">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                 {section.images.slice(0, 2).map((img, i) => (
//                   <div 
//                     key={i} 
//                     className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}
//                   >
//                     <img 
//                       src={img} 
//                       alt={section.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                     />
//                   </div>
//                 ))}
//               </div>
              
//               {/* View Gallery ኣብ ማእከል ይኩን */}
//               <div className="mt-8">
//                 <button 
//                   onClick={() => openGallery(section.images)}
//                   className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-white/20 px-8 py-3 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
//                 >
//                   View Gallery
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={currentImages} 
//       />

//       <Footer />
//     </div>
//   );
// }

// export default Home;


// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
// import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
// import Footer from "../components/Footer";

// // Lightbox ንምጥቃም
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const workSections = [
//   {
//     title: "Weddings",
//     date: "2026 — Addis Ababa", // ሓድሽ ወሲኸ
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: [wedding1, wedding2],
//     reverse: false
//   },
//   {
//     title: "Bridal Shoots",
//     date: "2026 — Photography Studio", // ሓድሽ ወሲኸ
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: [wedding2, wedding1],
//     reverse: true
//   },
//   {
//     title: "Baby Shower & Baptism",
//     date: "2026 — Family Event", // ሓድሽ ወሲኸ
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: [wedding1, wedding2],
//     reverse: false
//   }
// ];

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const openGallery = (images) => {
//     setCurrentImages(images.map(img => ({ src: img })));
//     setOpen(true);
//   };

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       <section className="px-6 py-20 md:px-24">
//         {workSections.map((section, index) => (
//           <div 
//             key={index} 
//             className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24 mb-32`}
//           >
            
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-6">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
//                 0{index + 1} — Selection
//               </span>
              
//               {/* ናይ ዊዲንግ/ዕለት ጽሑፍ */}
//               <div className="space-y-2">
//                 <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
//                   {section.title}
//                 </h2>
//                 <p className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 italic">
//                   {section.date}
//                 </p>
//               </div>

//               <p className="text-lg leading-relaxed text-zinc-400 max-w-md">
//                 {section.desc}
//               </p>
//             </div>

//             {/* ስእልታት ግሪድ */}
//             <div className="flex-1 flex flex-col items-center md:items-start w-full">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                 {section.images.slice(0, 2).map((img, i) => (
//                   <div 
//                     key={i} 
//                     className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}
//                   >
//                     <img 
//                       src={img} 
//                       alt={section.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                     />
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-8">
//                 <button 
//                   onClick={() => openGallery(section.images)}
//                   className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-white/20 px-8 py-3 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
//                 >
//                   View Gallery
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={currentImages} 
//       />

//       <Footer />
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import Hero from '../components/Hero';
import heroVideo from '../assets/videos/robi-v1.mp4';
import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
import Footer from "../components/Footer";

// Lightbox ንምጥቃም
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const workSections = [
  {
    title: "Weddings",
    names: "Sara & Robel", // ሽም መርዓውቲ
    date: "July 15, 2026 — Addis Ababa", // ዕለት
    desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
    images: [wedding1, wedding2],
    reverse: false
  },
  {
    title: "Bridal Shoots",
    names: "Nahom & Selam", // ሽም መርዓውቲ
    date: "August 20, 2026 — Photography Studio", // ዕለት
    desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
    images: [wedding2, wedding1],
    reverse: true
  },
  {
    title: "Baby Shower & Baptism",
    names: "Elias Family", // ሽም መርዓውቲ
    date: "September 05, 2026 — Family Event", // ዕለት
    desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
    images: [wedding1, wedding2],
    reverse: false
  }
];

function Home() {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const openGallery = (images) => {
    setCurrentImages(images.map(img => ({ src: img })));
    setOpen(true);
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      <section className="px-6 py-20 md:px-24">
        {workSections.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24 mb-32`}
          >
            
            {/* ጽሑፍ */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
              <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
                0{index + 1} — Selection
              </span>
              
              {/* ናይ ሽምን ዕለትን ጽሑፍ */}
              <div className="space-y-1">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                  {section.title}
                </h2>
                <p className="text-[16px] font-medium text-white/90 tracking-wide mt-3">
                  {section.names}
                </p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 italic">
                  {section.date}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-zinc-400 max-w-md pt-4">
                {section.desc}
              </p>
            </div>

            {/* ስእልታት ግሪድ */}
            <div className="flex-1 flex flex-col items-center md:items-start w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {section.images.slice(0, 2).map((img, i) => (
                  <div 
                    key={i} 
                    className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => openGallery(section.images)}
                  className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-white/20 px-8 py-3 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Lightbox 
        open={open} 
        close={() => setOpen(false)} 
        slides={currentImages} 
      />

      <Footer />
    </div>
  );
}

export default Home;