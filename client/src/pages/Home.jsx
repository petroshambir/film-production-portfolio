

// import React from 'react';
// import Hero from '../components/Hero';

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false // Text Left, Images Right
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: ["src/assets/images/ሮቢ-png1.jpeg", "src/assets/images/ሮቢ-png2.jpeg"],
//     reverse: true // Text Right, Images Left
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false // Text Left, Images Right
//   }
// ];

// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen ">
//       <Hero 
//         videoSrc="src/assets/videos/robi-v1.mp4" 
//         buttonText="Explore Our Work"
//       />

//       {/* Alternating Portfolio Sections */}
//       <section className="py-24 px-12 md:px-24 space-y-32">
//         {workSections.map((section, index) => (
//           <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
            
//             {/* Text Side */}
//             <div className="flex-1 space-y-6 ">
//               <h2 className="text-5xl md:text-6xl font-light tracking-tight">{section.title}</h2>
//               <p className="text-zinc-400 text-lg leading-relaxed max-w-md">{section.desc}</p>
//               <a href="#contact" className="inline-block border border-zinc-700 px-8 py-3 text-sm uppercase tracking-widest hover:border-white transition-all">
//                 Learn More
//               </a>
//             </div>

//             {/* Images Side (Grid of 2) */}
//             <div className="flex-1 grid grid-cols-2 gap-1">
//               {section.images.map((img, i) => (
//                 <div key={i} className="h-[450px] w-[370px] overflow-hidden">
//                   <img 
//                     src={img} 
//                     alt={section.title} 
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import Hero from '../components/Hero';


// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false // Text Left, Images Right
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: ["src/assets/images/ሮቢ-png1.jpeg", "src/assets/images/ሮቢ-png2.jpeg"],
//     reverse: true // Text Right, Images Left
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false // Text Left, Images Right
//   }
// ];

// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
//       <Hero 
//         videoSrc="src/assets/videos/robi-v1.mp4" 
//         buttonText="Explore Our Work"
//       />

//       <section className="py-32 px-12 md:px-32">
//         {workSections.map((section, index) => (
//           <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-48">
            
//             {/* ጽሑፍ ኣብ ጸጋም (3 cols) */}
//             <div className="md:col-span-3 flex flex-col justify-start">
//               <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-6 font-semibold">
//                 0{index + 1} — Category
//               </span>
//               <h2 className="text-4xl md:text-5xl font-extralight mb-8">{section.title}</h2>
//               <p className="text-zinc-400 leading-loose text-sm font-light">
//                 {section.desc}
//               </p>
//             </div>

//             {/* ስእልታት ኣብ የማን (9 cols) */}
//             <div className="md:col-span-9">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {section.images.map((img, i) => (
//                   <div key={i} className="aspect-[4/3] overflow-hidden bg-zinc-900">
//                     <img 
//                       src={img} 
//                       alt={section.title} 
//                       className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" 
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Home;



// import React from 'react';
// import Hero from '../components/Hero';


// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false // Text Left, Images Right
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: ["src/assets/images/ሮቢ-png1.jpeg", "src/assets/images/ሮቢ-png2.jpeg"],
//     reverse: true // Text Right, Images Left
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false // Text Left, Images Right
//   }
// ];


// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
//       <Hero 
//         videoSrc="src/assets/videos/robi-v1.mp4" 
//         buttonText="Explore Our Work"
//       />

//       <section className="py-32 px-6 md:px-24">
//         {workSections.map((section, index) => (
//           <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-32`}>
            
//             {/* ጽሑፍ - እቲ Spacing ብጣዕሚ ዝሰፍሐ (Airy) */}
//             <div className="flex-1 flex flex-col justify-center space-y-8">
//               <span className="text-[10px] tracking-[0.6em] uppercase text-zinc-500 font-light">
//                 0{index + 1} // Project
//               </span>
//               <h2 className="text-4xl md:text-6xl font-extralight tracking-tight">
//                 {section.title}
//               </h2>
//               <p className="text-zinc-400 leading-[2.2] text-lg font-light tracking-wide max-w-lg">
//                 {section.desc}
//               </p>
//             </div>

//             {/* ስእልታት - ንሞባይል ጽቡቕ ዝሰርዕ */}
//             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {section.images.map((img, i) => (
//                 <div key={i} className="aspect-[3/4] overflow-hidden bg-zinc-900">
//                   <img 
//                     src={img} 
//                     alt={section.title} 
//                     className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105" 
//                   />
//                 </div>
//               ))}
//             </div>
            

//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Home;

// import React from 'react';
// import Hero from '../components/Hero';

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false 
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: ["src/assets/images/ሮቢ-png1.jpeg", "src/assets/images/ሮቢ-png2.jpeg"],
//     reverse: true 
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false 
//   }
// ];

// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
//       <Hero 
//         videoSrc="src/assets/videos/robi-v1.mp4" 
//         buttonText="Explore Our Work"
//       />

//       <section className="py-32 px-6 md:px-24">
//         {workSections.map((section, index) => (
//           <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-48`}>
            
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col justify-center space-y-8">
//               <span className="text-[9px] tracking-[0.5em] uppercase text-zinc-500 font-bold opacity-70">
//                 0{index + 1} — Selection
//               </span>
              
//               <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white/95">
//                 {section.title}
//               </h2>
              
//               {/* ኣብ ሞባይልን ዴስክቶፕን ፍሪ ዝበለ ጽሑፍ ንምርካብ leading-loose ተጠቂምና */}
//               <p className="text-zinc-400 text-base md:text-lg leading-[2.2] font-light tracking-wide max-w-md">
//                 {section.desc}
//               </p>

//               {/* መታን ኣብ ሞባይል ጽቡቕ ክርአ፡ ብ Border ዝተሓገዘ ሊንክ */}
//               <a href="#" className="inline-block w-fit text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 hover:border-white transition-all">
//                 View Gallery
//               </a>
//             </div>

//             {/* ስእልታት */}
//             <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6">
//               {section.images.map((img, i) => (
//                 <div key={i} className={`aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'mt-12 md:mt-24' : ''}`}>
//                   <img 
//                     src={img} 
//                     alt={section.title} 
//                     className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-110" 
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import Hero from '../components/Hero';

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false 
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: ["src/assets/images/ሮቢ-png1.jpeg", "src/assets/images/ሮቢ-png2.jpeg"],
//     reverse: true 
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false 
//   }
// ];

// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
//       <Hero 
//         videoSrc="src/assets/videos/robi-v1.mp4" 
//         buttonText="Explore Our Work"
//       />

//       <section className="py-20 px-6 md:px-24">
//         {workSections.map((section, index) => (
//           <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-24 mb-24 md:mb-48`}>
            
//             {/* ጽሑፍ - ኣብ ሞባይል text-base ንኽዓቢ ተገይሩ */}
//             <div className="flex-1 flex flex-col justify-center space-y-6">
//               <span className="text-[9px] tracking-[0.5em] uppercase text-zinc-500 font-bold opacity-70">
//                 0{index + 1} — Selection
//               </span>
              
//               {/* text-5xl (ሞባይል) ናብ 5xl ዓቢዩ፡ md:text-7xl (ዴስክቶፕ) */}
//               <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white/95">
//                 {section.title}
//               </h2>
              
//               {/* text-base (ሞባይል) ዓቢዩ፡ md:text-lg (ዴስክቶፕ) */}
//               <p className="text-base md:text-lg leading-[2.2] font-light tracking-wide max-w-md">
//                 {section.desc}
//               </p>

//               <a href="#" className="inline-block w-fit text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 hover:border-white transition-all">
//                 View Gallery
//               </a>
//             </div>

//             {/* ስእልታት - ኣብ ሞባይል Stacked ይኸውን */}
//             <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6 w-full">
//               {section.images.map((img, i) => (
//                 <div key={i} className={`aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'mt-8 md:mt-24' : ''}`}>
//                   <img 
//                     src={img} 
//                     alt={section.title} 
//                     className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-110" 
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Home;


//  import React from 'react';
// import Hero from '../components/Hero';


// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false 
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: ["src/assets/images/ሮቢ-png1.jpeg", "src/assets/images/ሮቢ-png2.jpeg"],
//     reverse: true 
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: ["src/assets/images/ሮቢ-png2.jpeg", "src/assets/images/ሮቢ-png1.jpeg"],
//     reverse: false 
//   }
// ];


// function Home() {

//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
//       <Hero 
//         videoSrc="src/assets/videos/robi-v1.mp4" 
//         buttonText="Explore Our Work"
//       />

//       <section className="py-20 px-6 md:px-24">
//         {workSections.map((section, index) => (
//           <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-24 md:mb-48`}>
            
//             {/* ጽሑፍ - text-lg ንሞባይል ዝዓበየ ጌርናዮ */}
//             <div className="flex-1 flex flex-col justify-center space-y-8">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold opacity-70">
//                 0{index + 1} — Selection
//               </span>
              
//               {/* text-6xl ንሞባይል ዝዓበየ ርእሲ */}
//               <h2 className="text-6xl md:text-7xl font-light tracking-tighter text-white/95 leading-none">
//                 {section.title}
//               </h2>
              
//               {/* text-lg ንሞባይል ጽሑፍ ዝዓበየን ዝረሓሓቐን */}
//               <p className="text-lg md:text-xl leading-[2.5] font-light tracking-wide max-w-lg">
//                 {section.desc}
//               </p>

//               <a href="#" className="inline-block w-fit text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all">
//                 View Gallery
//               </a>
//             </div>

//             {/* ስእልታት - grid-cols-1 ንሞባይል ስታክ (Stacked) ይገብሮ */}
//             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
//               {section.images.map((img, i) => (
//                 <div key={i} className={`aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-24' : ''}`}>
//                   <img 
//                     src={img} 
//                     alt={section.title} 
//                     className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-110" 
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
// export default Home;


  import React from 'react';
 import Hero from '../components/Hero';
 import wedding1 from '../assets/images/ሮቢ-png1.jpeg' // ናይ ስእልኻ Path ጽሓፍ
import wedding2 from '../assets/images/ሮቢ-png2.jpeg'

 
const workSections = [
  {
    title: "Weddings",
    desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
    images: [wedding2,wedding1],
    reverse: false 
  },
   
  {
    title: "Bridal Shoots",
    desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
    images: [wedding1, wedding2],
    reverse: true 
  },
  {
    title: "Baby Shower & Baptism",
    desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
    images: [wedding2, wedding1],
    reverse: false 
  }
];


function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
      <Hero 
        videoSrc="src/assets/videos/robi-v1.mp4" 
        buttonText="Explore Our Work"
      />

      {/* ርሕቀት ሰክሽናት (py-20) ናብ py-12 ኣውሪደዮ */}
      <section className="py-12 px-6 md:px-24">
        {workSections.map((section, index) => (
          // ርሕቀት ኣብ መንጎ ሰክሽናት (mb-24 md:mb-48) ናብ mb-16 md:mb-32 ኣውሪደዮ
          <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-16 md:mb-32`}>
            
            {/* ጽሑፍ */}
            <div className="flex-1 flex flex-col justify-center space-y-8">
              <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold opacity-70">
                0{index + 1} — Selection
              </span>
              
              {/* ዴስክቶፕ ጽሑፍ ንኽንእስ md:text-6xl ተጠቂምና */}
              <h2 className="text-6xl md:text-6xl font-light tracking-tighter text-white/95 leading-none">
                {section.title}
              </h2>
              
              {/* ዴስክቶፕ ጽሑፍ ንኽንእስ md:text-lg ተጠቂምና */}
              <p className="text-lg md:text-lg leading-[2.5] font-light tracking-wide max-w-lg">
                {section.desc}
              </p>

              <a href="#" className="inline-block w-fit text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all">
                View Gallery
              </a>
            </div>

            {/* ስእልታት */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {section.images.map((img, i) => (
                <div key={i} className={`aspect-[2/3] overflow-hidden bg-zinc-900 ${i === 1 ? 'md:mt-24' : ''}`}>
                  <img 
                    src={img} 
                    alt={section.title} 
                    className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-110" 
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;