import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote, Star } from 'lucide-react';
import { Testimoni } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimoni[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 text-gray-900 dark:bg-gray-900/40 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Testimoni & Kesan
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Suara Wali & Alumni
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Ungkapan tulus dan pengalaman nyata dari para wali santri, tokoh masyarakat, dan segenap alumni.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between bg-white p-8 rounded-2xl border border-gray-100 dark:bg-gray-900 dark:border-gray-800 shadow-xs hover:shadow-md transition-all"
            >
              {/* Mandatory "Contoh Testimoni" badge as requested */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[9px] font-bold text-amber-800 uppercase tracking-wider dark:bg-amber-950/20 dark:border-amber-900/40 dark:text-amber-400">
                <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                <span>Contoh Testimoni</span>
              </div>

              {/* Quote Mark */}
              <Quote className="h-8 w-8 text-emerald-200 dark:text-emerald-950 mb-4" />

              {/* Text */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic flex-1 mb-6">
                "{testi.teks}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <img
                  src={testi.avatarUrl}
                  alt={testi.nama}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full object-cover border-2 border-emerald-500/20"
                />
                <div>
                  <h4 className="font-sans text-sm font-bold text-gray-900 dark:text-white">
                    {testi.nama}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                    {testi.peran}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
