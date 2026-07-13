import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-salonGold">{eyebrow}</p>
      )}
      <h2 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-white/[0.68] sm:text-lg">{description}</p>}
    </motion.div>
  );
}
