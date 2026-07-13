import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-salonBlack"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      role="status"
      aria-label="Loading NEW LOOKS UNISEX SALON"
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-6 h-16 w-16 rounded-full border border-salonGold/30 border-t-salonGold"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="font-heading text-3xl font-bold tracking-wide text-white">NEW LOOKS</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-salonGold">Unisex Salon</p>
      </div>
    </motion.div>
  );
}
