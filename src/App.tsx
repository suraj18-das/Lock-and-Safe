import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { useLocation } from 'react-router-dom';
import ServiceDetails from './pages/ServiceDetails';
import SocialMediaBar from './components/SocialMediaBar';
import CircularNavigationBar from './components/CircularNavigationBar';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Timeout to ensure the scroll happens after the page is loaded/re-rendered
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adjust timeout if needed

    return () => clearTimeout(scrollTimeout); // Cleanup on component unmount
  }, [pathname]);

  return null;
};
function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
           {isMobile ? <CircularNavigationBar /> : <SocialMediaBar />} {/* Add Social Media Bar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;