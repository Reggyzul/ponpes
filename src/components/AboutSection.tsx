import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, BookOpen } from 'lucide-react';
import { PesantrenData } from '../types';

interface AboutSectionProps {
  data: PesantrenData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const pimpinanImage = "/images/Gemini_Generated_Image_bvkjypbvkjypbvkj.avif";

  return (
    <section id="about" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Mengenal Lebih Dekat
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Tentang Pesantren &amp; Pimpinan
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Sejarah, Stats, & Pimpinan Profil */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                Sejarah Singkat &amp; Landasan Nilai
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {data.sejarah}
              </p>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-amber-100 bg-amber-50/20 p-4 text-center dark:border-gray-800 dark:bg-gray-900/50">
                <div className="font-serif text-2xl font-bold text-emerald-700 dark:text-emerald-400">2002</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wider">Tahun Berdiri</div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-center dark:border-gray-800 dark:bg-gray-900/50">
                <div className="font-serif text-2xl font-bold text-emerald-700 dark:text-emerald-400">7</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Santri Perintis</div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-center dark:border-gray-800 dark:bg-gray-900/50">
                <div className="font-serif text-2xl font-bold text-emerald-700 dark:text-emerald-400">Aktif</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Formal &amp; Nonformal</div>
              </div>
            </div>

            {/* Kepemimpinan Pondok Pesantren (Stacked Cards) */}
            <div className="pt-4 space-y-6">
              <h4 className="font-serif text-lg font-extrabold text-gray-900 dark:text-white border-l-4 border-emerald-600 pl-3">
                Dewan Pengasuh &amp; Pimpinan Pondok
              </h4>

              {/* Card 1: Pengasuh Pondok - KH MUSTAIN ROMLI, S.Pd */}
              {data.pengasuh && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-3xl border border-emerald-200/80 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/30 dark:from-emerald-950/40 dark:via-gray-900 dark:to-amber-950/20 shadow-md flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group"
                >
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  {/* Photo Portrait Frame */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-emerald-600/30 dark:ring-emerald-400/30 shadow-md transform group-hover:scale-103 transition-transform duration-300 bg-emerald-900/10 flex items-center justify-center">
                      <img 
                        src={(data.fotoPengasuh && data.fotoPengasuh !== "/images/kh-mustain-romli.jpg") ? data.fotoPengasuh : "/Gemini_Generated_Image_82ptm382ptm382pt.avif"} 
                        alt={data.pengasuh}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.dataset.tried) {
                            target.dataset.tried = "1";
                            target.src = "/Gemini_Generated_Image_82ptm382ptm382pt.avif";
                          }
                        }}
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-emerald-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md border border-white dark:border-gray-900 flex items-center gap-1">
                      <Award className="w-3 h-3 text-emerald-950" /> Utama
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center sm:text-left space-y-1.5 flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold tracking-wider uppercase">
                      Pengasuh Pondok Pesantren
                    </span>
                    <h5 className="font-serif text-xl font-black text-emerald-950 dark:text-emerald-50 tracking-tight">
                      {data.pengasuh}
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-medium">
                      Membimbing para santri dengan keteladanan akhlak mulia, penguatan sanad keilmuan kitab salaf, serta pengawasan arah spritual pesantren.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Card 2: Pimpinan Pondok - M Adnan Prabowo, M.Ag */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="p-6 rounded-3xl border border-emerald-200/80 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/30 dark:from-emerald-950/40 dark:via-gray-900 dark:to-amber-950/20 shadow-md flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group"
              >
                <div className="absolute -left-8 -top-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Photo Portrait Frame */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-emerald-600/30 dark:ring-emerald-400/30 shadow-md transform group-hover:scale-103 transition-transform duration-300 bg-emerald-900/10 flex items-center justify-center">
                    <img 
                      src={pimpinanImage} 
                      alt="M Adnan Prabowo, M.Ag"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/Gemini_Generated_Image_82ptm382ptm382pt.avif";
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[11px] font-bold tracking-wider uppercase">
                    Pimpinan Pondok Pesantren
                  </span>
                  <h5 className="font-serif text-xl font-black text-emerald-950 dark:text-emerald-50 tracking-tight">
                    M Adnan Prabowo, M.Ag
                  </h5>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-medium">
                    Mengelola manajemen operasional pesantren, menyelaraskan program kurikulum sekolah formal-nonformal, serta memimpin pengembangan sarana prasarana santri.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 2: Visi & Misi */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visi - Natural Amber Sand Card */}
            <div className="bg-amber-50/70 dark:bg-amber-950/20 p-7 rounded-3xl border border-amber-100 dark:border-amber-900/30 shadow-xs transition-colors">
              <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                <Award className="h-4 w-4" /> Visi Pesantren
              </div>
              <p className="font-serif text-amber-950 dark:text-amber-100 text-base font-medium italic leading-relaxed pl-1 mt-4">
                "{data.visi}"
              </p>
              <div className="mt-4 w-12 h-1 bg-amber-300 dark:bg-amber-600 rounded-full"></div>
            </div>

            {/* Misi - Clean Natural Emerald/White Card */}
            <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-sm transition-colors">
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Misi Pesantren
              </div>
              
              <ul className="space-y-3.5 mt-5">
                {data.misi.map((m, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-sans font-medium">{m}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
