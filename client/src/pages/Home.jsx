

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

      <section className="py-20 w-full">
        {sections.map((section, index) => {
          const isWedding = section.title && section.title.toLowerCase().includes('wedding');

          return (
            <div key={section.id || index} className="mb-32 w-full">
              
              {section.names && (
                <div className="mb-16 text-center px-6">
                  <h3 className="text-3xl md:text-6xl font-serif italic text-zinc-800 tracking-wide">
                    {section.names}
                  </h3>
                  <p className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] text-zinc-500 mt-3 font-light">
                    {section.date}
                  </p>
                </div>
              )}

              {isWedding ? (
                <div className="w-full space-y-20 md:space-y-24">
                  
                  {/* 1. መጀመርያ 100% ሙሉእ ዓባይ ስእሊ */}
                  {Array.isArray(section.images) && section.images[0] && (
                    <div className="w-full">
                      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
                        <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
                          {section.title} — Story
                        </span>
                        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
                          {section.desc || section.description}
                        </p>
                      </div>
                      <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
                        <img 
                          src={section.images[0]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* 2. መጀመርታ 3 ስእልታት ብዚግ-ዛግ (ካብ 1 ክሳብ 3) */}
                  {Array.isArray(section.images) && section.images.length > 1 && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20">
                      {section.images.slice(1, 4).map((img, i) => (
                        <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
                          <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
                            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
                              Moment 0{i + 2}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
                              {section.title} Highlight
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                              {section.desc || section.description}
                            </p>
                          </div>
                          <div className="flex-1 w-full flex justify-center">
                            <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3. ካልኣይቲ 100% ሙሉእ ዓባይ ስእሊ */}
                  {Array.isArray(section.images) && section.images[4] && (
                    <div className="w-full pt-4">
                      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
                        <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
                          Featured Memory
                        </span>
                        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
                          {section.desc || section.description}
                        </p>
                      </div>
                      <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200 relative flex items-center justify-center">
                        <img 
                          src={section.images[4]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0" 
                        />
                        <div className="relative z-10 text-center text-white p-6 bg-black/30 w-full h-full flex flex-col items-center justify-center">
                          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif italic tracking-wider drop-shadow-lg">
                            {section.names || section.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. ድሕሪ እታ ካልኣይቲ ዓባይ ስእሊ፡ እንደገና ካልኦት 3 ስእልታት ብዚግ-ዛግ (ካብ 5 ክሳብ 7) */}
                  {Array.isArray(section.images) && section.images.length > 5 && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20 pt-4">
                      {section.images.slice(5, 8).map((img, i) => (
                        <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
                          <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
                            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
                              Moment 0{i + 6}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
                              {section.title} Scene
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                              {section.desc || section.description}
                            </p>
                          </div>
                          <div className="flex-1 w-full flex justify-center">
                            <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 5. ሳልሳይቲ 100% ሙሉእ ዓባይ ስእሊ (ስእሊ 8) */}
                  {Array.isArray(section.images) && section.images[8] && (
                    <div className="w-full pt-4">
                      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
                        <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
                          Special Chapter
                        </span>
                        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
                          {section.desc || section.description}
                        </p>
                      </div>
                      <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
                        <img 
                          src={section.images[8]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* 6. ድሕሪ እታ ሳልሳይቲ ዓባይ ስእሊ፡ ተወሳኺ 3 ስእልታት ብዚግ-ዛግ (ካብ 9 ክሳብ 11) */}
                  {Array.isArray(section.images) && section.images.length > 9 && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20 pt-4">
                      {section.images.slice(9, 12).map((img, i) => (
                        <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
                          <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
                            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
                              Moment 0{i + 10}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
                              {section.title} Chapter
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                              {section.desc || section.description}
                            </p>
                          </div>
                          <div className="flex-1 w-full flex justify-center">
                            <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 7. ራብዐይቲ 100% ሙሉእ ዓባይ ስእሊ (ስእሊ 12) */}
                  {Array.isArray(section.images) && section.images[12] && (
                    <div className="w-full pt-4">
                      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
                        <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
                          Endless Love
                        </span>
                        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
                          {section.desc || section.description}
                        </p>
                      </div>
                      <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
                        <img 
                          src={section.images[12]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* 8. ዝተረፉ ስእልታት ክሳብ 15 ብዚግ-ዛግ (ካብ 13 ክሳብ 15) */}
                  {Array.isArray(section.images) && section.images.length > 13 && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20 pt-4">
                      {section.images.slice(13, 16).map((img, i) => (
                        <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
                          <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
                            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
                              Moment 0{i + 14}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
                              {section.title} Finale
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                              {section.desc || section.description}
                            </p>
                          </div>
                          <div className="flex-1 w-full flex justify-center">
                            <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-center pt-10 px-6">
                    <Link 
                      to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-zinc-900 px-8 md:px-10 py-3 md:py-4 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 inline-block"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              ) : (
                /* ንኻልኦት ክፍሊታት መደበኛ ዲዛይን */
                <div className={`max-w-7xl mx-auto px-6 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-16 py-12`}>
                  <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
                    <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold">
                      0{index + 1} — Selection
                    </span>
                    <h2 className="text-3xl md:text-6xl font-light tracking-tighter leading-none text-zinc-900">
                      {section.title}
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-zinc-600 max-w-md pt-4">
                      {section.desc || section.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center md:items-start w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
                        <div key={i} className={`group aspect-[2/3] overflow-hidden bg-zinc-200 shadow-lg ${i === 1 ? 'md:mt-16' : ''}`}>
                          <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 w-full text-center md:text-left flex justify-center md:justify-start">
                      <Link 
                        to={`/gallery/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-zinc-900 px-8 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 inline-block"
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