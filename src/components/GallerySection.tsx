import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GaleriItem } from '../types';

interface GallerySectionProps {
  galleryItems: GaleriItem[];
}

export default function GallerySection({ galleryItems }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Derive unique categories
  const categories = ['Semua', ...Array.from(new Set(galleryItems.map(item => item.kategori)))];

  // Filter items
  const filteredItems = selectedCategory === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.kategori === selectedCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Dokumentasi Visual
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Galeri Pesantren
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Melihat lebih dekat potret sarana pembelajaran, keindahan asrama, serta keaktifan santri dalam kegiatan harian.
          </p>
        </div>

        {/* Categories Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/10'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 cursor-pointer shadow-xs hover:shadow-md"
              >
                <img
                  src={item.imageUrl}
                  alt={item.judul}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Details Panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-1.5 text-white">
                    <span className="inline-block rounded-full bg-emerald-600 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                      {item.kategori}
                    </span>
                    <h3 className="font-sans text-sm font-bold truncate leading-snug">
                      {item.judul}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                      <ImageIcon className="h-3 w-3" />
                      <span>Placeholder Galeri</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 hover:bg-white/35 p-2 rounded-full backdrop-blur-md text-white">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Main Image View */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center"
              >
                <img
                  src={filteredItems[activeLightboxIndex].imageUrl}
                  alt={filteredItems[activeLightboxIndex].judul}
                  className="max-w-full max-h-[70vh] rounded-lg object-contain border border-gray-800"
                />
                <div className="mt-4 text-center text-white space-y-1 max-w-xl">
                  <span className="inline-block rounded-full bg-emerald-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {filteredItems[activeLightboxIndex].kategori}
                  </span>
                  <h4 className="font-sans text-base font-semibold">
                    {filteredItems[activeLightboxIndex].judul}
                  </h4>
                  <p className="text-[10px] font-mono text-gray-400">
                    [File: {filteredItems[activeLightboxIndex].judul.replace(/\s+/g, '_').toLowerCase()}.jpg]
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
