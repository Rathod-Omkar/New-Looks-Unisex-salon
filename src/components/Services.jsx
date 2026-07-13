import { motion } from 'framer-motion';
import { services } from '../data/services.js';
import SectionHeader from './SectionHeader.jsx';

export default function Services({ compact = false }) {
  const displayedServices = compact ? services.slice(0, 6) : services;

  return (
    <section id="services" className="section-padding bg-salonBlack">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Our Services"
          title="Signature Care For Every Style"
          description="From polished everyday grooming to statement beauty transformations, every service is designed around comfort, detail, and a premium finish."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-salonGray p-7 shadow-luxury transition duration-300 hover:-translate-y-2 hover:border-salonGold/[0.55] hover:shadow-gold"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-salonGold/[0.35] bg-salonGold/10 text-salonGold transition duration-300 group-hover:bg-salonGold group-hover:text-salonBlack">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/[0.66]">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
