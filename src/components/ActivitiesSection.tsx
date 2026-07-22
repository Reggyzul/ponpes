import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Image as ImageIcon } from 'lucide-react';
import { Kegiatan } from '../types';

interface ActivitiesSectionProps {
  activities: Kegiatan[];
  onNextPageClick?: () => void;
}

export default function ActivitiesSection({ activities, onNextPageClick }: ActivitiesSectionProps) {
  return (
    <section id="activities" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Agenda Pembiasaan Harian
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Kegiatan Santri
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Pola pembinaan karakter diatur terstruktur selama 24 jam penuh, menyeimbangkan waktu belajar, ibadah, istirahat, dan bersosialisasi.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {activities.map((act, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Image Container with clearly labeled placeholder */}
                <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 relative group">
                  <img
                    src={act.imageUrl}
                    alt={act.nama}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  
                  {/* Image Placeholder Overlay */}
                  <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <ImageIcon className="h-3 w-3" /> Contoh Kegiatan
                    </span>
                    <span className="text-[10px] font-mono opacity-85 select-none">
                      [Foto: {act.nama.replace(/\s+/g, '_').toLowerCase()}.jpg]
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-xs font-semibold dark:bg-emerald-950/40 dark:text-emerald-300">
                    <Clock className="h-3.5 w-3.5 text-amber-500" />
                    <span>{act.waktu}</span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white">
                    {act.nama}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {act.deskripsi}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Daily Schedule Table */}
        <div className="mt-20 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              Jadwal Lengkap Rutinitas 24 Jam Santri
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Berikut adalah rincian lengkap pembagian waktu kegiatan santri Barokatul Qodiri sehari-hari.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-900 text-white dark:bg-emerald-950/80 text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Waktu</th>
                    <th className="px-6 py-4">Nama Kegiatan</th>
                    <th className="px-6 py-4">Keterangan / Fokus Utama</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs animate-fade-in-up">
                  {[
                    { waktu: "03.30 - 04.00", kegiatan: "Sholat Tahajud", keterangan: "Qiyamul Lail bersama di masjid" },
                    { waktu: "04.00 - 05.00", kegiatan: "Sholat Subuh", keterangan: "Sholat berjamaah dilanjutkan dzikir & doa" },
                    { waktu: "05.00 - 06.00", kegiatan: "Ngaji Subuh", keterangan: "Halaqah Al-Qur'an dan setoran hafalan harian" },
                    { waktu: "06.00 - 07.00", kegiatan: "Mandi & Bersih-bersih", keterangan: "Persiapan berpakaian rapi untuk sekolah formal" },
                    { waktu: "07.00 - 07.15", kegiatan: "Sholat Dhuha", keterangan: "Pembiasaan ibadah sunnah dhuha berjamaah" },
                    { waktu: "07.15 - 07.30", kegiatan: "Berangkat Sekolah", keterangan: "Persiapan menuju ruang kelas madrasah masing-masing" },
                    { waktu: "07.30 - 12.55", kegiatan: "Sekolah Madrasah", keterangan: "KBM Sekolah Formal RA, MI, MTs & MA" },
                    { waktu: "12.55 - 13.20", kegiatan: "Sholat Dzuhur", keterangan: "Sholat berjamaah dan istirahat sejenak" },
                    { waktu: "13.20 - 14.00", kegiatan: "Ngaji Kitab", keterangan: "Mengkaji kitab salaf klasik dasar bersama ustadz" },
                    { waktu: "14.00 - 15.30", kegiatan: "Istirahat Siang", keterangan: "Tidur siang wajib di asrama agar stamina terjaga" },
                    { waktu: "15.30 - 16.00", kegiatan: "Sholat Ashar", keterangan: "Sholat ashar berjamaah di masjid jami'" },
                    { waktu: "16.00 - 17.00", kegiatan: "Sekolah Diniah", keterangan: "Kajian tata bahasa Arab, aqidah & akhlakul karimah" },
                    { waktu: "17.00 - 18.00", kegiatan: "Istirahat Sore", keterangan: "Persiapan mandi sore dan bersiap menuju masjid" },
                    { waktu: "18.00 - 18.30", kegiatan: "Sholat Maghrib", keterangan: "Sholat berjamaah & persiapan mengaji Al-Qur'an" },
                    { waktu: "18.30 - 20.00", kegiatan: "Ngaji Al-Qur'an", keterangan: "Pemantapan tajwid, makharijul huruf & tilawah" },
                    { waktu: "20.00 - 21.30", kegiatan: "Ngaji Kitab Salaf", keterangan: "Kajian pendalaman kitab kuning lanjutan" },
                    { waktu: "21.30 - 22.15", kegiatan: "Belajar Diniah Mandiri", keterangan: "Muthola'ah pelajaran dan penyelesaian tugas kelas" },
                    { waktu: "22.15 - 03.30", kegiatan: "Istirahat Malam", keterangan: "Wajib tidur malam di kamar asrama masing-masing" }
                  ].map((row, rIdx) => (
                    <tr 
                      key={rIdx} 
                      className={`${rIdx % 2 === 0 ? 'bg-slate-50/50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-900'} hover:bg-emerald-50/20 dark:hover:bg-emerald-950/10 transition-colors`}
                    >
                      <td className="px-6 py-3.5 font-mono text-emerald-800 dark:text-emerald-400 font-bold whitespace-nowrap">
                        {row.waktu}
                      </td>
                      <td className="px-6 py-3.5 font-bold text-gray-800 dark:text-gray-200">
                        {row.kegiatan}
                      </td>
                      <td className="px-6 py-3.5 text-gray-600 dark:text-gray-400">
                        {row.keterangan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Next Page CTA Button */}
        {onNextPageClick && (
          <div className="mt-12 text-center">
            <button
              onClick={onNextPageClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-600/30 transition hover:-translate-y-0.5 cursor-pointer"
            >
              Buka Halaman Khusus Fasilitas &amp; Kegiatan &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
