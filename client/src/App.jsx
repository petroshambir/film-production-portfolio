// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Welcome from './components/Welcome'; // ሓድሽ ኮምፖነንትካ

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* መጀመርታ ናብ ዌልካም ቪዲዮ ይኣትዉ */}
        <Route path="/" element={<Welcome />} />
        
        {/* ምስ ተወድአ ወይ ክሊክ ምስ ገበሩ ናብ Home ይሓልፉ */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;