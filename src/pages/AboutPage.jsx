import About from '../components/About.jsx';
import CTA from '../components/CTA.jsx';
import PageHero from '../components/PageHero.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SEO from '../components/SEO.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About | NEW LOOKS UNISEX SALON"
        description="Learn about NEW LOOKS UNISEX SALON, our professional stylists, premium salon experience, and commitment to customer satisfaction."
      />
      <PageHero
        eyebrow="About"
        title="More Than A Salon"
        description="We combine professional technique, premium products, and attentive service to create a salon visit that feels personal from start to finish."
        image="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1800&q=85"
      />
      <About />
      <Testimonials />
      <CTA />
    </PageTransition>
  );
}
