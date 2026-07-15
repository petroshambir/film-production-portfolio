

//   import React from 'react';
// import Hero from '../components/Hero'; // እዚ ኮምፖነንት እዩ
// import heroVideo from '../assets/videos/robi-v1.mp4';
//  import wedding1 from '../assets/images/ሮቢ-png1.jpeg' // ናይ ስእልኻ Path ጽሓፍ
// import wedding2 from '../assets/images/ሮቢ-png2.jpeg'
// import Footer from "../components/Footer"; // እዚ ኮምፖነንት እዩ
 
// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: [wedding2,wedding1],
//     reverse: false 
//   },
   
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: [wedding1, wedding2],
//     reverse: true 
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: [wedding2, wedding1],
//     reverse: false 
//   }
// ];


// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className="text-white min-h-screen">
//       <Hero 
//         videoSrc={heroVideo}
//         buttonText="Explore Our Work"
//       />

//       {/* ርሕቀት ሰክሽናት (py-20) ናብ py-12 ኣውሪደዮ */}
//       <section className="py-12 px-6 md:px-24">
//         {workSections.map((section, index) => (
//           // ርሕቀት ኣብ መንጎ ሰክሽናት (mb-24 md:mb-48) ናብ mb-16 md:mb-32 ኣውሪደዮ
//           <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-16 md:mb-32`}>
            
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col justify-center space-y-8">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold opacity-70">
//                 0{index + 1} — Selection
//               </span>
              
//               {/* ዴስክቶፕ ጽሑፍ ንኽንእስ md:text-6xl ተጠቂምና */}
//               <h2 className="text-6xl md:text-6xl font-light tracking-tighter text-white/95 leading-none">
//                 {section.title}
//               </h2>
              
//               {/* ዴስክቶፕ ጽሑፍ ንኽንእስ md:text-lg ተጠቂምና */}
//               <p className="text-lg md:text-lg leading-[2.5] font-light tracking-wide max-w-lg">
//                 {section.desc}
//               </p>

//               <a href="#" className="inline-block w-fit text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all">
//                 View Gallery
//               </a>
//             </div>

//             {/* ስእልታት */}
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
//       <Footer />
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import wedding1 from '../assets/images/ሮቢ-png1.jpeg';
// import wedding2 from '../assets/images/ሮቢ-png2.jpeg';
// import Footer from "../components/Footer";

// // ናይ ባክግራውንድ ስእልታትካ ኢምፖርት ግበር (ነቶም ቅኑዕ ፋይልካ ኣቐምጥ)
// import weddingBg from '../assets/images/background-img1.jpeg'; 
// import bridalBg from '../assets/images/background-img2.jpeg';
// import babyBg from '../assets/images/background-img3.jpeg';

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: [wedding2, wedding1],
//     reverse: false,
//     bgImage: weddingBg // ኣብዚ ኣእትዎ
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: [wedding1, wedding2],
//     reverse: true,
//     bgImage: bridalBg // ኣብዚ ኣእትዎ
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: [wedding2, wedding1],
//     reverse: false,
//     bgImage: babyBg // ኣብዚ ኣእትዎ
//   }
// ];

// function Home() {
//   return (
//     <div style={{ backgroundColor: '#0a0a0a' }} className=" text-white min-h-screen">
//       <Hero 
//         videoSrc={heroVideo}
//         buttonText="Explore Our Work"
//       />

//       <section className="px-6 md:px-24">
//         {workSections.map((section, index) => (
//           <div 
//             key={index} 
//             className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-16 md:mb-32 py-24 px-6 md:px-12`}
//             style={{
//               backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9)), url(${section.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundAttachment: 'fixed' // ንParallax ስምዒት
//             }}
//           >
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col justify-center space-y-8">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold opacity-70">
//                 0{index + 1} — Selection
//               </span>
//               <h2 className="text-6xl md:text-6xl font-light tracking-tighter text-white/95 leading-none">
//                 {section.title}
//               </h2>
//               <p className="text-lg md:text-lg leading-[2.5] font-light tracking-wide max-w-lg">
//                 {section.desc}
//               </p>
//               <a href="#" className="inline-block w-fit text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all">
//                 View Gallery
//               </a>
//             </div>

//             {/* ስእልታት */}
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
//       <Footer />
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
// import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
// import Footer from "../components/Footer";

// // ናይ ባክግራውንድ ስእልታትካ ኢምፖርት ግበር
// import weddingBg from '../assets/images/background-img7.jpeg'; 
// import bridalBg from '../assets/images/background-img5.jpeg';
// import babyBg from '../assets/images/background-img6.jpeg';

// const workSections = [
//   {
//     title: "Weddings",
//     desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
//     images: [wedding2, wedding1],
//     reverse: false,
//     bgImage: ""
//   },
//   {
//     title: "Bridal Shoots",
//     desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
//     images: [wedding1, wedding2],
//     reverse: true,
//     bgImage: ""
//   },
//   {
//     title: "Baby Shower & Baptism",
//     desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
//     images: [wedding2, wedding1],
//     reverse: false,
//     bgImage: ""
//   }
// ];

// function Home() {
//   return (
//     <div style={{ backgroundColor: 'white' }} className="  min-h-screen">
//       <Hero 
//         videoSrc={heroVideo}
//         buttonText="Explore Our Work"
//       />

//       <section className="px-6 md:px-24">
//         {workSections.map((section, index) => (
//           <div 
//             key={index} 
//             className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-16 md:mb-32 py-24 px-6 md:px-12`}
//             style={{
//               // እቲ ለውጢ ኣብዚ እዩ: 0.9 ዝነበረ ናብ 0.7 ኣውሪደዮ ንስእሊ ክርአ
//               backgroundImage: ` url(${section.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundAttachment: 'fixed'
//             }}
//           >
//             {/* ጽሑፍ */}
//             <div className="flex-1 flex flex-col justify-center space-y-8">
//               <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold opacity-70">
//                 0{index + 1} — Selection
//               </span>
//               <h2 className="text-6xl md:text-6xl font-light tracking-tighter text-white/95 leading-none">
//                 {section.title}
//               </h2>
//               <p className="text-lg md:text-lg leading-[2.5] font-light tracking-wide max-w-lg">
//                 {section.desc}
//               </p>
//               <a href="#" className="inline-block w-fit text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all">
//                 View Gallery
//               </a>
//             </div>

//             {/* ስእልታት */}
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
//       <Footer />
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import Hero from '../components/Hero';
import heroVideo from '../assets/videos/robi-v1.mp4';
import wedding1 from '../assets/images/ሮቢ-png1-removebg-preview.png';
import wedding2 from '../assets/images/ሮቢ-png2-removebg-preview.png';
import Footer from "../components/Footer";

const workSections = [
  {
    title: "Weddings",
    desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
    // ኣብዚ ብዙሕ ስእልታት ወስኽ
    images: [wedding1, wedding2, wedding1, wedding2], 
    reverse: false
  },
  {
    title: "Bridal Shoots",
    desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
    images: [wedding2, wedding1, wedding2],
    reverse: true
  },
  {
    title: "Baby Shower & Baptism",
    desc: "Celebrating new beginnings. We document the joy, the anticipation, and the sacred moments of your family's newest arrivals with warmth and tenderness.",
    images: [wedding1, wedding2, wedding1, wedding2, wedding1],
    reverse: false
  }
];

function Home() {
  return (
    <div style={{ backgroundColor: 'white' }} className="min-h-screen text-black">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      <section className="px-6 py-12 md:px-24">
        {workSections.map((section, index) => (
          <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24`}>
            
            {/* ጽሑፍ */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold">0{index + 1} — Selection</span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-none">{section.title}</h2>
              <p className="text-lg leading-relaxed text-zinc-600 max-w-md">{section.desc}</p>
              <a href="#" className="inline-block w-fit text-[11px] uppercase tracking-[0.4em] border-b border-black pb-1 hover:text-zinc-500">View Gallery</a>
            </div>

            {/* ብዙሕ ስእልታት ዝሓዘ ግሪድ */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {section.images.map((img, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-zinc-100">
                  <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Home;