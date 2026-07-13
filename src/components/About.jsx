import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';

export default function About() {
  const points = [
    { icon: Award, label: 'Experienced stylists trained in modern salon techniques.' },
    { icon: ShieldCheck, label: 'Careful hygiene, premium products, and a calm service flow.' },
    { icon: Heart, label: 'Personal consultations that keep your comfort and confidence first.' },
  ];

  return (
    <section id="about" className="section-padding bg-salonGray">
      <div className="container-luxury grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=85"
            alt="Elegant salon styling area"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxury"
            loading="lazy"
            decoding="async"
          />
          <div className="glass-panel absolute -bottom-7 left-5 right-5 rounded-3xl p-6 sm:left-auto sm:w-72">
            <p className="font-heading text-4xl font-bold text-salonGold">Premium</p>
            <p className="mt-2 text-sm leading-6 text-white/[0.76]">Salon care shaped around detail, comfort, and confidence.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-salonGold">About Us</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">More Than A Salon</h2>
          <p className="mt-6 text-lg leading-8 text-white/[0.72]">
            NEW LOOKS UNISEX SALON brings together professional stylists, thoughtful consultations, and a polished
            environment for clients who value care that feels personal. Every visit is shaped to help you look refined,
            feel relaxed, and leave with a style that suits real life.
          </p>
          <div className="mt-8 grid gap-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-salonGold/[0.12] text-salonGold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="self-center text-sm leading-6 text-white/[0.72]">{point.label}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-9">
            <ButtonLink to="/about" variant="secondary">
              Discover Our Story
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
