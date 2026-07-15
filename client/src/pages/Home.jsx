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
    desc: "We capture the raw emotion, the grand gestures, and the intimate whispers of your most special day, crafting a cinematic story that lasts a lifetime.",
    images: [wedding1, wedding2],
    reverse: false
  },
  {
    title: "Bridal Shoots",
    desc: "Elegance defined. Our artistic direction highlights the grace of the bride in stunning settings, ensuring every portrait is a masterpiece of light and fashion.",
    images: [wedding2, wedding1],
    reverse: true
  },
  {
    title: "Baby Shower & Baptism",
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

      <section className="px-6 py-12 md:px-24">
        {workSections.map((section, index) => (
          <div key={index} className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24`}>
            
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold">0{index + 1} — Selection</span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-none">{section.title}</h2>
              <p className="text-lg leading-relaxed text-zinc-600 max-w-md">{section.desc}</p>
              
              <button 
                onClick={() => openGallery(section.images)}
                className="w-fit text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-white transition-all"
              >
                View Gallery
              </button>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {section.images.slice(0, 3).map((img, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-zinc-900">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
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