import React from 'react';
import { motion } from 'motion/react';
import { AlurPendaftaran } from '../types';

interface AdmissionStepsProps {
  steps: AlurPendaftaran[];
}

export default function AdmissionSteps({ steps }: AdmissionStepsProps) {
  return (
    <section id="admission-steps" className="py-24 bg-gray-50 text-gray-900 dark:bg-gray-900/40 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Panduan Calon Santri Baru
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Alur Penerimaan Santri (PSB)
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Ikuti 4 langkah mudah berikut untuk melakukan pendaftaran secara runtut dan tervalidasi.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Stepper horizontal line overlay (Desktop only) */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[2px] bg-emerald-100 dark:bg-gray-800 hidden md:block z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center p-4"
            >
              {/* Step Circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white font-serif text-xl font-bold shadow-lg shadow-emerald-900/20 mb-5 border-4 border-white dark:border-gray-950 transition-transform hover:scale-105">
                {step.step}
              </div>

              {/* Title & Description */}
              <h3 className="font-sans text-base font-bold text-gray-900 dark:text-white mb-2">
                {step.judul}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                {step.deskripsi}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
