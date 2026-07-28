// import React from 'react';
// import { Link } from 'react-router-dom'; // 1. Link ኢምፖርት ግበር

// function Footer() {
//   return (
//     <footer className="bg-[#0a0a0a] text-white border-t border-white/10 py-16 px-6 md:px-24">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
//         {/* ንፋልማይ ክፋል */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-light tracking-widest uppercase">JONI Studio</h3>
//           <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
//             Crafting cinematic stories and timeless portraits for your most cherished moments. 
//           </p>
//         </div>

//         {/* ኮንታክት */}
//         <div className="space-y-4">
//           <h4 className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</h4>
//           <ul className="space-y-2 text-sm text-zinc-400">
//             <li>Email: hello@jonistudio.com</li>
//             <li>Phone: +1 234 567 890</li>
//             <li>Location: Addis Ababa, Ethiopia</li>
//           </ul>
//         </div>

//         {/* ሶሻል ሚድያ */}
//         <div className="space-y-4">
//           <h4 className="text-sm uppercase tracking-[0.2em] text-white/50">Follow Us</h4>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-white transition-colors text-zinc-400">Instagram</a>
//             <a href="#" className="hover:text-white transition-colors text-zinc-400">Facebook</a>
//             <a href="#" className="hover:text-white transition-colors text-zinc-400">Vimeo</a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/5 mt-12 pt-8 flex justify-between items-center text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
//         <div>© 2026 JONI Studio. All rights reserved.</div>
        
//         {/* 2. እዚ እዩ እቲ ኣድሚን ሊንክ */}
//         <Link 
//           to="/admin-login" 
//           className="text-zinc-800 hover:text-zinc-500 transition-colors"
//         >
//           Admin
//         </Link>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link ኢምፖርት ግበር

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 py-16 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* ንፋልማይ ክፋል */}
        <div className="space-y-4">
          <h3 className="text-xl font-light tracking-widest uppercase">JONI Studio</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Crafting cinematic stories and timeless portraits for your most cherished moments. 
          </p>
        </div>

        {/* ኮንታክት */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Email: hello@jonistudio.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* ሶሻል ሚድያ */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/50">Follow Us</h4>
          <div className="flex items-center gap-4">
            
            {/* ቲክቶክ ስእሊ (Image Icon) */}
            <a href="https://www.tiktok.com/@robeltesfu21?_r=1&_t=ZS-98Ns0HOjzD3" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="../assets/images/tiktok.jpeg" alt="TikTok" className="w-6 h-6 object-contain" />
            </a>

            {/* ኢንስታግራም ስእሊ (Image Icon) */}
            <a href="https://www.instagram.com/robel.tesfu.1848?igsh=MW51dnJzOW5oaHg5bg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="../assets/images/instagram.jpeg" alt="Instagram" className="w-6 h-6 object-contain" />
            </a>

            {/* ዩቱብ ስእሊ (Image Icon) */}
            <a href="https://youtube.com/@joniphotographyofficial?si=SukBYQWII9iwMgTt" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="../assets/images/youtube.jpeg" alt="YouTube" className="w-6 h-6 object-contain" />
            </a>

            {/* ፌስቡክ ስእሊ (Image Icon) */}
            <a href="https://www.facebook.com/share/19H6NXFXJv/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="../assets/images/facebook.jpeg" alt="Facebook" className="w-6 h-6 object-contain" />
            </a>

          </div>
        </div>
      </div>

      <div className="border-t border-white/5 mt-12 pt-8 flex justify-between items-center text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
        <div>© 2026 JONI Studio. All rights reserved.</div>
        
        {/* 2. እዚ እዩ እቲ ኣድሚን ሊንክ */}
        <Link 
          to="/admin-login" 
          className="text-zinc-800 hover:text-zinc-500 transition-colors"
        >
          Admin
        </Link>
      </div>
    </footer>
  );
}

export default Footer;