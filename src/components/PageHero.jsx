import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative isolate min-h-[58vh] overflow-hidden pt-28">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-salonBlack/80 via-salonBlack/[0.72] to-salonBlack" />
      <div className="section-padding flex min-h-[58vh] items-center pb-16">
        <motion.div
          className="container-luxury max-w-4xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-salonGold">{eyebrow}</p>
          <h1 className="font-heading text-5xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76]">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
