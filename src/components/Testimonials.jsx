import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  return (
    <section className="section-padding bg-salonGray">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Client Words"
          title="Trusted For Detail And Care"
          description="Clients return for the calm experience, refined finishing, and stylists who listen before they create."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-salonBlack/70 p-7 shadow-luxury"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            >
              <Quote className="h-9 w-9 text-salonGold" aria-hidden="true" />
              <p className="mt-6 min-h-32 text-base leading-8 text-white/[0.74]">"{testimonial.quote}"</p>
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-salonGold">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
