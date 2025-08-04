import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Box, CssBaseline } from '@mui/material';
import HomeMainPage from './pages/HomeMainPage';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import News from './pages/News';
import Partners from './pages/Partners';

function App() {
  return (
    <Box sx={{ 
      bgcolor: '#000', 
      color: 'text.primary',
      fontFamily: 'Montserrat'
    }}>
      <CssBaseline />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
}

export default App;
