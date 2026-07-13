import { motion } from 'framer-motion';
import ButtonLink from './ButtonLink.jsx';

const whatsappUrl = 'https://wa.me/0000000000?text=Hello%20NEW%20LOOKS%2C%20I%20would%20like%20to%20book%20an%20appointment.';

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85"
        alt="Luxury salon interior with styling chairs"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_25%,rgba(212,175,55,0.18),transparent_28%),linear-gradient(90deg,rgba(15,15,15,0.94),rgba(15,15,15,0.72),rgba(15,15,15,0.4)),linear-gradient(180deg,rgba(15,15,15,0.5),#0f0f0f_94%)]" />

      <div className="section-padding flex min-h-screen items-center pt-28">
        <div className="container-luxury grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-salonGold">NEW LOOKS UNISEX SALON</p>
            <h1 className="font-heading text-6xl font-extrabold leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              ELEVATE <span className="gold-text">YOUR LOOK</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.76] sm:text-xl">
              Premium Hair, Grooming & Beauty Experience crafted by expert stylists in a refined, welcoming space.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={whatsappUrl}>Book Appointment</ButtonLink>
              <ButtonLink to="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel hidden rounded-[2rem] p-6 lg:block"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                ['12+', 'Expert Services'],
                ['4.9', 'Client Rating'],
                ['7 Days', 'Open Weekly'],
                ['Premium', 'Products'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-salonBlack/[0.55] p-6">
                  <p className="font-heading text-4xl font-bold text-salonGold">{value}</p>
                  <p className="mt-2 text-sm text-white/[0.66]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
