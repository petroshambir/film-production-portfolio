

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import Footer from "../components/Footer";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [title, setTitle] = useState('');
  
//   // ካብ ዳታቤዝ ዝመጽእ ዳታ ኣብዚ ይኽዘን
//   const [sections, setSections] = useState([]); 

//   useEffect(() => {
//     fetch('https://film-production-portfolio.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => setSections(data)) // ዳታ ካብ DB ይመጽእ ኣሎ
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       {title && <h1 className="text-center text-4xl mt-10 text-white">{title}</h1>}

//       <section className="px-6 py-20 md:px-24">
//         {/* ዳታ ካብ API ጥራይ ይሕተት */}
//         {sections.map((section, index) => (
//           <div key={section.id || index} className="mb-32">
            
//             {/* ስም ስራሕን ዕለትን (ካብ ዳታቤዝ) */}
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

//             {/* ኣቀማምጣ ስእልን ጽሑፍን (index % 2 !== 0 ብምግባር ብጽኑዕ ሓደ ብየማን ሓደ ብጸጋም ይለዋወጥ) */}
//             <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24`}>
              
//               <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
//                 <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
//                   0{index + 1} — Selection
//                 </span>
//                 <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
//                   {section.title}
//                 </h2>
//                 {/* ካብ ኣድሚን ዳታቤዝ ዝመጽእ ዲስክሪፕሽን (Description) */}
//                 <p className="text-lg leading-relaxed text-zinc-400 max-w-md pt-4">
//                   {section.desc || section.description}
//                 </p>
//               </div>

//               <div className="flex-1 flex flex-col items-center md:items-start w-full">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                   {/* ስእልታትካ ካብ ዳታቤዝ ይመጽእ */}
//                   {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
//                     <div key={i} className={`group aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-20' : ''}`}>
//                       <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* View Gallery ቁልፊ (ብወርቃዊ ቦርደርን ሆቨርን፣ ማእከል ዝኾነ) */}
//                 <div className="mt-8 w-full text-center md:text-left flex justify-center md:justify-start">
//                   <Link 
//                     to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-amber-400/60 px-8 py-3 text-amber-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
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

// export default Home;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import Footer from "../components/Footer";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [title, setTitle] = useState('');
  
//   // ካብ ዳታቤዝ ዝመጽእ ዳታ ኣብዚ ይኽዘን
//   const [sections, setSections] = useState([]); 

//   useEffect(() => {
//     fetch('https://film-production-portfolio.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => setSections(data)) // ዳታ ካብ DB ይመጽእ ኣሎ
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen text-white">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       {title && <h1 className="text-center text-4xl mt-10 text-white">{title}</h1>}

//       <section className="px-6 py-20 md:px-24">
//         {/* ዳታ ካብ API ጥራይ ይሕተት */}
//         {sections.map((section, index) => (
//           <div key={section.id || index} className="mb-32">
            
//             {/* ስም ስራሕን ዕለትን (ካብ ዳታቤዝ) */}
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

//             {/* ኣቀማምጣ ስእልን ጽሑፍን (index % 2 !== 0 ብምግባር ብጽኑዕ ሓደ ብየማን ሓደ ብጸጋም ይለዋወጥ) */}
//             <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24`}>
              
//               <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
//                 <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
//                   0{index + 1} — Selection
//                 </span>
//                 <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
//                   {section.title}
//                 </h2>
//                 {/* ካብ ኣድሚን ዳታቤዝ ዝመጽእ ዲስክሪፕሽን (Description) */}
//                 <p className="text-lg leading-relaxed text-zinc-400 max-w-md pt-4">
//                   {section.desc || section.description}
//                 </p>
//               </div>

//               <div className="flex-1 flex flex-col items-center md:items-start w-full">
//                 {/* ካብ 2 ናብ ክሳብ 15 ስእልታት ብናይ ፒንተረስት ርብዒ/Arch ዲዛይን ክረአዩ ተገይሮም ኣለዉ */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
//                   {/* ስእልታትካ ካብ ዳታቤዝ ክሳብ 15 ይወጹ */}
//                   {Array.isArray(section.images) && section.images.slice(0, 15).map((img, i) => (
//                     <div 
//                       key={i} 
//                       className={`group aspect-[3/4] overflow-hidden bg-zinc-900 rounded-t-[80px] rounded-b-xl shadow-xl ${i === 1 ? 'md:mt-8' : ''}`}
//                     >
//                       <img 
//                         src={img} 
//                         alt={section.title} 
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                       />
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* View Gallery ቁልፊ (ብወርቃዊ ቦርደርን ሆቨርን፣ ማእከል ዝኾነ) */}
//                 <div className="mt-8 w-full text-center md:text-left flex justify-center md:justify-start">
//                   <Link 
//                     to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-amber-400/60 px-8 py-3 text-amber-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
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
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => setSections(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 font-sans">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      {title && <h1 className="text-center text-4xl mt-10 text-zinc-900">{title}</h1>}

      <section className="px-6 py-20 md:px-24 max-w-7xl mx-auto">
        {sections.map((section, index) => {
          // ንናይ Weddings ክፍሊ ጥራይ ልክዕ ከምቲ ኣብ ቪድዮ ዘሎ ዲዛይን ነተግበረሉ
          const isWedding = section.title && section.title.toLowerCase().includes('wedding');

          return (
            <div key={section.id || index} className="mb-32">
              
              {/* ስም ስራሕን ዕለትን (ካብ ዳታቤዝ) */}
              {section.names && (
                <div className="mb-10 text-center">
                  <h3 className="text-4xl md:text-5xl font-serif italic text-zinc-800 tracking-wide">
                    {section.names}
                  </h3>
                  <p className="text-[12px] uppercase tracking-[0.4em] text-zinc-500 mt-2 font-light">
                    {section.date}
                  </p>
                </div>
              )}

              {isWedding ? (
                /* ልክዕ ከምቲ ዝለኣክካዮ ቪድዮ:
                  - ድሕረ-ባይታ ጻዕዳ/ክሬም
                  - ቀዳመይቲ ስእሊ ምስ መግለጺ (Description)
                  - ድሕሪኡ ሰለስተ ስእልታት ብክሪስ-ክሮስ/ግራድ (Arch style)
                */
                <div className="bg-white p-6 md:p-16 rounded-3xl shadow-xl border border-zinc-200 space-y-16">
                  
                  {/* ክፍሊ 1: መግለጺ ምስ ቀዳመይቲ ስእሊ */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                      <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block">
                        Wedding Story — 01
                      </span>
                      <h2 className="text-4xl md:text-6xl font-light tracking-tight font-serif text-zinc-900">
                        {section.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-zinc-600 max-w-lg">
                        {section.desc || section.description}
                      </p>
                    </div>
                    
                    {/* ቀዳመይቲ ስእሊ ብናይ Arch ቅርጺ */}
                    <div className="flex-1 w-full flex justify-center">
                      {Array.isArray(section.images) && section.images[0] && (
                        <div className="group aspect-[3/4] w-full max-w-sm overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-lg bg-zinc-100">
                          <img 
                            src={section.images[0]} 
                            alt={section.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ክፍሊ 2: ዝተረፉ ስእልታት (ክሪስ-ክሮስ / 3 ስእልታት ብግሪድ) */}
                  {Array.isArray(section.images) && section.images.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pt-8">
                      {section.images.slice(1, 13).map((img, i) => (
                        <div 
                          key={i} 
                          className="group aspect-[3/4] overflow-hidden rounded-t-[120px] rounded-b-2xl shadow-md bg-zinc-100 border border-zinc-100"
                        >
                          <img 
                            src={img} 
                            alt={section.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-center pt-6">
                    <Link 
                      to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-zinc-900 px-8 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 inline-block rounded-full"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              ) : (
                /* ንኻልኦት ክፍሊታት ዝተፈላለየ ዲዛይን እንተልዩ ወይ ድማ መደበኛ */
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-24 bg-white p-8 md:p-16 rounded-3xl shadow-md`}>
                  <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
                    <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold">
                      0{index + 1} — Selection
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-none text-zinc-900">
                      {section.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-600 max-w-md pt-4">
                      {section.desc || section.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center md:items-start w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
                        <div key={i} className={`group aspect-[2/3] overflow-hidden rounded-t-[100px] rounded-b-xl bg-zinc-100 ${i === 1 ? 'md:mt-16' : ''}`}>
                          <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 w-full text-center md:text-left flex justify-center md:justify-start">
                      <Link 
                        to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-zinc-900 px-8 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 inline-block rounded-full"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <Lightbox open={open} close={() => setOpen(false)} slides={currentImages} />
      <Footer />
    </div>
  );
}

export default Home;