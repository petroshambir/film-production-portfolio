// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="absolute top-0 left-0 w-full z-50 p-8 flex justify-between items-center text-white">
//       <img src="/src/assets/images/robi-logo.png" alt="Logo" className="h-16 bg-black" />
      
//       <div className="flex gap-8 uppercase tracking-widest text-sm">
//         <a href="/" className="hover:text-zinc-400">Home</a>
//         <a href="#about" className="hover:text-zinc-400">About</a>
//         <a href="#contact" className="hover:text-zinc-400">Contact</a>
        
//         {/* Our Work Hover Dropdown */}
//         <div className="group relative">
//           <button className="hover:text-zinc-400">Our Work ▾</button>
//           <div className="absolute top-full right-0 bg-black/90 p-4 w-48 hidden group-hover:block border border-white/20">
//             <a href="#wedding" className="block py-2 hover:text-zinc-400">Wedding</a>
//             <a href="#bridal" className="block py-2 hover:text-zinc-400">Bridal</a>
//             <a href="#baby-shower" className="block py-2 hover:text-zinc-400">Baby Shower</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;

import React from 'react';

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center text-white">
      {/* ሎጎ */}
      <img src="src/assets/images/robi-logo.png" alt="logo" className=" w-32  h-28" />
      
      {/* ናቪጌሽን ሊንክስ */}
      <div className="flex gap-8 uppercase tracking-widest text-xs font-semibold">
        <a href="/" className="hover:text-zinc-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
        <a href="#gallery" className="hover:text-zinc-400 transition-colors">Gallery</a>
        
        {/* Our Work Dropdown */}
        <div className="group relative">
          <button className="hover:text-zinc-400 transition-colors">Our Work ▾</button>
          <div className="absolute top-full right-0 bg-black/80 backdrop-blur-sm p-4 w-48 hidden group-hover:block border border-white/10 shadow-xl">
            <a href="#wedding" className="block py-2 hover:text-zinc-400 transition-colors">Wedding</a>
            <a href="#bridal" className="block py-2 hover:text-zinc-400 transition-colors">Bridal</a>
            <a href="#baby-shower" className="block py-2 hover:text-zinc-400 transition-colors">Baby Shower</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;