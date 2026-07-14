import { useEffect, useState } from 'react';
import { Menu, Scissors, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import ButtonLink from './ButtonLink.jsx';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const whatsappUrl = 'https://wa.me/919637965175?text=Hello%20NEW%20LOOKS%2C%20I%20would%20like%20to%20book%20an%20appointment.';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium uppercase tracking-[0.17em] transition hover:text-salonGold ${
      isActive ? 'text-salonGold' : 'text-white/[0.78]'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/10 bg-salonBlack/[0.82] shadow-luxury backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-luxury flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-salonGold/50 bg-white/5 text-salonGold">
            <Scissors className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-heading text-2xl font-bold leading-none text-white">NEW LOOKS</span>
            <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-salonGold">
              Unisex Salon
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl}>Book Appointment</ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/[0.15] bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`fixed inset-x-4 top-24 z-50 rounded-3xl border border-white/10 bg-salonGray/[0.96] p-5 shadow-luxury backdrop-blur-xl transition duration-300 lg:hidden ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="grid gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActive ? 'bg-salonGold text-salonBlack' : 'text-white/80 hover:bg-white/[0.08] hover:text-salonGold'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <ButtonLink href={whatsappUrl} className="mt-3 w-full" onClick={() => setOpen(false)}>
            Book Appointment
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
