import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

const knownRoutes = ['/', '/services', '/gallery', '/about', '/contact'];

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('newLooksLoaded'));
  const isKnownRoute = knownRoutes.includes(location.pathname);

  useEffect(() => {
    if (!loading) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('newLooksLoaded', 'true');
      setLoading(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {isKnownRoute && location.pathname !== '/contact' ? <Contact /> : null}
      <Footer />
    </>
  );
}
