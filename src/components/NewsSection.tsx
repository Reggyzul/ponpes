import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight, Image } from 'lucide-react';
import { BeritaArtikel } from '../types';

interface NewsSectionProps {
  news: BeritaArtikel[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <section id="news" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Kabar Pesantren Terbaru
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Berita & Artikel
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Ikuti berbagai aktivitas, prestasi santri, pengumuman resmi, dan tulisan asatidzah di sini.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-gray-50/50 border border-gray-100 dark:bg-gray-900/30 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-all shadow-xs hover:shadow-md"
            >
              {/* Cover Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.judul}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual Category Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  <Tag className="h-3 w-3" />
                  {item.kategori}
                </span>

                {/* Cover Placeholder Indicator */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                    <Image className="h-2.5 w-2.5" /> Placeholder Kabar
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Date metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.tanggal}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-base font-bold text-gray-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.judul}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>

                {/* Read More Mock Link */}
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                  Baca Selengkapnya
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
