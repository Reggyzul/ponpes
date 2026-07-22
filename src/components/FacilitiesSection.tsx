import React from 'react';
import { motion } from 'motion/react';
import { Image, Shield } from 'lucide-react';
import { Fasilitas } from '../types';

interface FacilitiesSectionProps {
  facilities: Fasilitas[];
  onNextPageClick?: () => void;
}

export default function FacilitiesSection({ facilities, onNextPageClick }: FacilitiesSectionProps) {
  return (
    <section id="facilities" className="py-24 bg-gray-50 text-gray-900 dark:bg-gray-900/40 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Sarana & Prasarana
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Fasilitas Pesantren
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Sarana belajar, ibadah, dan tempat tinggal santri dirancang aman untuk menunjang tumbuh kembang akademis dan rohani secara maksimal.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Container with Placeholder Overlays */}
              <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={fac.imageUrl}
                  alt={fac.nama}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Elegant Placeholder Label Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider mb-1">
                    <Image className="h-3 w-3" /> Placeholder Foto
                  </span>
                  <span className="text-[11px] font-mono opacity-80 select-none">
                    [File: {fac.nama.replace(/\s+/g, '_').toLowerCase()}.jpg]
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-sans text-base font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {fac.nama}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {fac.deskripsi}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Page CTA Button */}
        {onNextPageClick && (
          <div className="mt-12 text-center">
            <button
              onClick={onNextPageClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-600/30 transition hover:-translate-y-0.5 cursor-pointer"
            >
              Lihat Selengkapnya di Halaman Fasilitas &amp; Kegiatan &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
