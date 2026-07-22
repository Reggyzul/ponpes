import React from 'react';
import { motion } from 'motion/react';
import { Keunggulan } from '../types';
import IconResolver from './IconResolver';

interface FeaturesSectionProps {
  features: Keunggulan[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Mengapa Memilih Kami?
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Keunggulan Pesantren
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col items-center text-center p-6 bg-gray-50/50 dark:bg-gray-900/30 rounded-2xl border border-gray-100 dark:border-gray-800/80 hover:bg-white dark:hover:bg-gray-900 transition-all shadow-xs hover:shadow-md"
            >
              {/* Decorative background circle on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 group-hover:scale-110 transition-transform">
                <IconResolver name={feature.icon} className="h-6 w-6" />
              </div>

              {/* Title & Description */}
              <h3 className="font-sans text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                {feature.judul}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                {feature.deskripsi}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
