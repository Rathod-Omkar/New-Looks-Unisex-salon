import { motion } from 'framer-motion';
import ButtonLink from './ButtonLink.jsx';

const whatsappUrl = 'https://wa.me/919637965175?text=Hello%20NEW%20LOOKS%2C%20I%20would%20like%20to%20book%20an%20appointment.';

export default function CTA() {
  return (
    <section className="section-padding relative isolate overflow-hidden bg-salonBlack">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.2),transparent_36%)]" />
      <motion.div
        className="container-luxury rounded-[2rem] border border-salonGold/25 bg-salonGray px-6 py-14 text-center shadow-gold sm:px-10 lg:px-16"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-salonGold">Refresh Your Style</p>
        <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">Ready For Your Next Look?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          Connect with our team on WhatsApp and plan your next salon visit with ease.
        </p>
        <div className="mt-9">
          <ButtonLink href={whatsappUrl}>Book Appointment</ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
