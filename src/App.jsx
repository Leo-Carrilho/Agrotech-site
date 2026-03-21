import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import LandingPage from './pages/LandingPage';
import Services from './pages/Services';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;