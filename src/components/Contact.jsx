import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';

const contactItems = [
  { icon: MapPin, title: 'Address', value: '123 Luxury Avenue, City Center, Your City 000000' },
  { icon: Phone, title: 'Phone', value: '+91 9637965175' },
  { icon: Mail, title: 'Email', value: 'rathodomkar007@gmail.com' },
  { icon: Clock, title: 'Working Hours', value: 'Mon to Sun: 10:00 AM to 9:00 PM' },
];

export default function Contact({ showHeader = true }) {
  return (
    <section id="contact" className="section-padding bg-salonGray">
      <div className="container-luxury">
        {showHeader && (
          <SectionHeader
            eyebrow="Contact"
            title="Visit NEW LOOKS"
            description="Reach out for service details, directions, or to connect with our salon team."
          />
        )}

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-salonBlack/70 p-6 shadow-luxury">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-salonGold/[0.12] text-salonGold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/[0.68]">{item.value}</p>
                </div>
              );
            })}
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/[0.78] transition hover:-translate-y-1 hover:border-salonGold hover:text-salonGold"
                  href="#"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-salonBlack shadow-luxury"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <iframe
              title="NEW LOOKS UNISEX SALON location on Google Maps"
              src="https://www.google.com/maps?q=19.1213034,74.739249&z=16&output=embed"
              className="h-full min-h-[480px] w-full border-0 grayscale-[15%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
