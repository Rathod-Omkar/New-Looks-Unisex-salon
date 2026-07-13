import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-salonBlack px-5 py-12 sm:px-8 lg:px-12">
      <div className="container-luxury grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-full">
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
          <p className="mt-5 max-w-sm leading-7 text-white/[0.62]">
            Premium hair, grooming, beauty, and skin care services for clients who appreciate detail and comfort.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-white/[0.64] transition hover:text-salonGold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-white">Opening Hours</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/[0.64]">
            <p>Monday to Friday: 10:00 AM to 9:00 PM</p>
            <p>Saturday: 9:30 AM to 9:30 PM</p>
            <p>Sunday: 10:00 AM to 8:00 PM</p>
          </div>
        </div>
      </div>
      <div className="container-luxury mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        Copyright © {new Date().getFullYear()} NEW LOOKS UNISEX SALON. All rights reserved.
      </div>
    </footer>
  );
}
