import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { gallery } from '../data/gallery.js';
import SectionHeader from './SectionHeader.jsx';

export default function Gallery({ showHeader = true }) {
  return (
    <section id="gallery" className="section-padding bg-salonBlack">
      <div className="container-luxury">
        {showHeader && (
          <SectionHeader
            eyebrow="Gallery"
            title="A Glimpse Of The Experience"
            description="Explore refined spaces, polished finishes, and the warm details that make every visit feel special."
          />
        )}

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.title}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-salonGray shadow-luxury"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease: 'easeOut' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-96' : 'h-72'
                  }`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-salonBlack/0 opacity-0 transition duration-300 group-hover:bg-salonBlack/[0.58] group-hover:opacity-100">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-salonGold/50 bg-salonGold/[0.15] text-salonGold backdrop-blur">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-white/[0.76]">{item.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
