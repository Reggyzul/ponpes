import React from 'react';
import { motion } from 'motion/react';
import { ProgramPendidikan } from '../types';
import IconResolver from './IconResolver';

interface ProgramsSectionProps {
  programs: ProgramPendidikan[];
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section id="programs" className="py-24 bg-gray-50 text-gray-900 dark:bg-gray-900/40 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Kurikulum & Pembinaan
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Program Pendidikan
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
            *Berikut adalah rincian program pendidikan umum pesantren kami. Ketersediaan kelas, fasilitas, dan kurikulum dapat berubah sesuai kebijakan tahunan kepengurusan pesantren.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xs hover:shadow-md transition-all"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <IconResolver name={program.icon} className="h-6 w-6" />
              </div>

              {/* Title & Description */}
              <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white mb-3">
                {program.nama}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                {program.deskripsi}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Boarding Box */}
        <div className="mt-12 rounded-xl border border-amber-100 bg-amber-50/50 p-4 dark:border-amber-900/30 dark:bg-amber-950/10 text-center max-w-3xl mx-auto">
          <p className="text-xs text-amber-800 dark:text-amber-400 leading-relaxed font-medium">
            <b>Informasi Ketersediaan:</b> Tidak semua program di atas bersifat wajib atau tersedia untuk seluruh tingkatan santri baru. Silakan hubungi Sekretariat PSB melalui tombol WhatsApp untuk menanyakan detail peminatan kurikulum terkini.
          </p>
        </div>

      </div>
    </section>
  );
}
