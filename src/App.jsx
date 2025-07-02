import Header from './components/Header';
import Hero from './components/HomePage/Hero';
import Section1 from './components/HomePage/Section1';
import Section2 from './components/HomePage/Section2';
import Footer from './components/Footer';
import { Box, CssBaseline } from '@mui/material';
import HomeMainPage from './pages/HomeMainPage';

function App() {
  return (
    <>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Header />
        <main>
          <HomeMainPage />
        </main>
        <Footer />
      </Box>


    </>
  );
}

export default App;
