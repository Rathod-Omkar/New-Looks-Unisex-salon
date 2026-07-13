import About from '../components/About.jsx';
import CTA from '../components/CTA.jsx';
import Gallery from '../components/Gallery.jsx';
import Hero from '../components/Hero.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SEO from '../components/SEO.jsx';
import Services from '../components/Services.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="NEW LOOKS UNISEX SALON | Premium Hair, Grooming & Beauty"
        description="Discover NEW LOOKS UNISEX SALON, a premium destination for hair styling, grooming, beauty, skin care, hair spa, and bridal makeover services."
      />
      <Hero />
      <Services compact />
      <About />
      <Gallery />
      <Testimonials />
      <CTA />
    </PageTransition>
  );
}
