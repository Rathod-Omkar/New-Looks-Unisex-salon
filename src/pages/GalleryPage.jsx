import CTA from '../components/CTA.jsx';
import Gallery from '../components/Gallery.jsx';
import PageHero from '../components/PageHero.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SEO from '../components/SEO.jsx';

export default function GalleryPage() {
  return (
    <PageTransition>
      <SEO
        title="Gallery | NEW LOOKS UNISEX SALON"
        description="View the refined salon spaces, styling details, beauty services, and premium ambience at NEW LOOKS UNISEX SALON."
      />
      <PageHero
        eyebrow="Gallery"
        title="Refined Spaces. Beautiful Details."
        description="A curated look at the atmosphere, services, and finishing touches that shape the NEW LOOKS experience."
        image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=85"
      />
      <Gallery showHeader={false} />
      <CTA />
    </PageTransition>
  );
}
