import Contact from '../components/Contact.jsx';
import PageHero from '../components/PageHero.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SEO from '../components/SEO.jsx';

export default function ContactPage() {
  return (
    <PageTransition>
      <SEO
        title="Contact | NEW LOOKS UNISEX SALON"
        description="Contact NEW LOOKS UNISEX SALON for address, phone, email, working hours, directions, and social media links."
      />
      <PageHero
        eyebrow="Contact"
        title="Plan Your Visit"
        description="Find our contact details, opening hours, and map placeholder in one place. All placeholder information is easy to edit later."
        image="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=85"
      />
      <Contact showHeader={false} />
    </PageTransition>
  );
}
