import CTA from '../components/CTA.jsx';
import PageHero from '../components/PageHero.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SEO from '../components/SEO.jsx';
import Services from '../components/Services.jsx';

export default function ServicesPage() {
  return (
    <PageTransition>
      <SEO
        title="Services | NEW LOOKS UNISEX SALON"
        description="Explore premium hair styling, hair colour, beard grooming, facial, skin care, hair spa, and bridal makeover services at NEW LOOKS UNISEX SALON."
      />
      <PageHero
        eyebrow="Services"
        title="Luxury Services For Every Occasion"
        description="Choose from expert hair, grooming, skin, spa, and bridal services delivered with thoughtful consultation and elevated finishing."
        image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=85"
      />
      <Services />
      <CTA />
    </PageTransition>
  );
}
