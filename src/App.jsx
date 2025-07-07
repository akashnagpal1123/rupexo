import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, CssBaseline } from '@mui/material';
import HomeMainPage from './pages/HomeMainPage';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import News from './pages/News';

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
        </Routes>
      </main>
      <Footer />
    </Box>
  );
}

export default App;
