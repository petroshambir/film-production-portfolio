

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
// import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
// import Footer from "../components/Footer";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [title, setTitle] = useState('');
//   const [sections, setSections] = useState([]); // እዚ መስመር እዚ ኣሎ ዲዩ?

//   // 1. እቲ workSections ኣብ ውሽጢ function ተቀሚጡ ኣሎ
//   // ሕጂ ኣብዚ ስም (names) ወይ ዕለት (date) ክትቀያይር ትኽእል ኢኻ
//   const workSections = [
//     {
//       title: "Weddings",
//       names: "Sara & Robel", // <--- ኣብዚ ቀያይር
//       date: "July 15, 2026 — Addis Ababa", // <--- ኣብዚ ቀያይር
//       desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//       images: [wedding1, wedding2],
//       reverse: false
//     },
//     {
//       title: "Bridal Shoots",
//       desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//       images: [wedding2, wedding1],
//       reverse: true
//     },
//     {
//       title: "Baby Shower & Baptism",
//       desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//       images: [wedding1, wedding2],
//       reverse: false
//     }
//   ];

//   useEffect(() => {
//     fetch('https://film-production-portfolio.onrender.com/api/content')
//       .then(res => res.json())
//       .then(data => setTitle(data.title))
//       .catch(err => console.log("Error fetching title:", err));
//   }, []);

//   const openGallery = (images) => {
//     setCurrentImages(images.map(img => ({ src: img })));
//     setOpen(true);
//   };

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       {title && <h1 className="text-center text-4xl mt-10 text-white">{title}</h1>}

//       <section className="px-6 py-20 md:px-24">
//         {workSections.map((section, index) => (
//           <div key={index} className="mb-32">
//             {section.names && (
//               <div className="mb-8 border-l-2 border-zinc-700 pl-6 items-center">
//                 <h3 className="text-4xl font-serif italic text-amber-300 tracking-wide text-center">
//                   {section.names}
//                 </h3>
//                 <p className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-light text-center">
//                   {section.date}
//                 </p>
//               </div>
//             )}
           
// {sections.map((section, index) => (
//   <div key={index} className="mb-32">
//      {/* እቲ ስምን ዕለትን ካብ ዳታቤዝካ ዝመጽእ */}
//      <div className="mb-8 border-l-2 border-zinc-700 pl-6 items-center">
//         <h3 className="text-4xl font-serif italic text-amber-300 tracking-wide text-center">
//           {section.names}
//         </h3>
//         <p className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-light text-center">
//           {section.date}
//         </p>
//      </div>
//      {/* ... ዝተረፈ ኮድ ኣይተንከፍኩን ... */}
//   </div>
// ))}

//             <div className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24`}>
//               <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
//                 <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
//                   0{index + 1} — Selection
//                 </span>
//                 <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
//                   {section.title}
//                 </h2>
//                 <p className="text-lg leading-relaxed text-zinc-400 max-w-md pt-4">
//                   {section.desc}
//                 </p>
//               </div>

//               <div className="flex-1 flex flex-col items-center md:items-start w-full">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                   {section.images.slice(0, 2).map((img, i) => (
//                     <div key={i} className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}>
//                       <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-8">
//                   <Link 
//                     to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-white/20 px-8 py-3 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
//                   >
//                     View Gallery
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       <Lightbox open={open} close={() => setOpen(false)} slides={currentImages} />
//       <Footer />
//     </div>
//   );
// }
// //coment
// export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import heroVideo from '../assets/videos/robi-v1.mp4';
import Footer from "../components/Footer";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Home() {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [title, setTitle] = useState('');
  
  // ካብ ዳታቤዝ ዝመጽእ ዳታ ኣብዚ ይኽዘን
  const [sections, setSections] = useState([]); 

  useEffect(() => {
    // ካብ API ዳታ ትወስድ
    fetch('https://film-production-portfolio.onrender.com/api/content')
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setSections(data.sections || []); // ዳታ እንተዘየለ ባዶ array ይኹን
      })
      .catch(err => console.log("Error fetching data:", err));
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      {title && <h1 className="text-center text-4xl mt-10 text-white">{title}</h1>}

      <section className="px-6 py-20 md:px-24">
        {/* ዳታ ካብ API ጥራይ ይሕተት */}
        {sections.map((section, index) => (
          <div key={section.id || index} className="mb-32">
            
            {/* ስም ስራሕን ዕለትን (ካብ ዳታቤዝ) */}
            {section.names && (
              <div className="mb-8 border-l-2 border-zinc-700 pl-6 items-center">
                <h3 className="text-4xl font-serif italic text-amber-300 tracking-wide text-center">
                  {section.names}
                </h3>
                <p className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-light text-center">
                  {section.date}
                </p>
              </div>
            )}

            {/* ኣቀማምጣ ስእልን ጽሑፍን */}
            <div className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24`}>
              
              <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
                <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
                  0{index + 1} — Selection
                </span>
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-zinc-400 max-w-md pt-4">
                  {section.desc}
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center md:items-start w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* ስእልታትካ ካብ ዳታቤዝ ይመጽእ */}
                  {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
                    <div key={i} className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}>
                      <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link 
                    to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-white/20 px-8 py-3 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Lightbox open={open} close={() => setOpen(false)} slides={currentImages} />
      <Footer />
    </div>
  );
}

export default Home;



