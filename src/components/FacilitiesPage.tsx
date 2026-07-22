import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, ArrowLeft, Search, ChevronLeft, ChevronRight, 
  Eye, Sparkles, X, Filter
} from 'lucide-react';
import { Fasilitas } from '../types';

interface FacilitiesPageProps {
  facilities: Fasilitas[];
  onBackToHome: () => void;
  onGoToActivities: () => void;
  onRegisterClick: () => void;
}

export default function FacilitiesPage({
  facilities,
  onBackToHome,
  onGoToActivities,
  onRegisterClick
}: FacilitiesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [modalItem, setModalItem] = useState<Fasilitas | null>(null);

  const categories = ['Semua', 'Asrama & Ibadah', 'Madrasah & Laboratorium', 'Olahraga & Lapangan'];

  // Filter facilities based on search
  const filteredFacilities = facilities.filter(f => 
    f.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.deskripsi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFacilities.length / itemsPerPage) || 1;
  const paginatedFacilities = filteredFacilities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header Breadcrumb & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-bold text-gray-700 dark:text-gray-200 shadow-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-emerald-600" />
            Kembali ke Beranda
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onGoToActivities}
              className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 text-xs font-bold hover:bg-amber-500/20 transition cursor-pointer"
            >
              Lihat Halaman Kegiatan Santri &rarr;
            </button>
          </div>
        </div>

        {/* Page Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-radial from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <Building className="h-3.5 w-3.5 text-amber-300" /> Halaman Khusus Fasilitas
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Sarana &amp; Prasarana Pesantren
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
              Fasilitas pembelajaran formal, nonformal, asrama tempat tinggal, serta ruang keterampilan santri Pondok Pesantren Barokatul Qodiri.
            </p>
          </div>
        </div>

        {/* Search & Stats Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari fasilitas (misal: Masjid, Asrama, Lab)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            Total Fasilitas: <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{filteredFacilities.length}</span>
          </div>
        </div>

        {/* Facilities Grid */}
        {paginatedFacilities.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">Tidak ada fasilitas yang ditemukan untuk kata kunci "{searchQuery}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paginatedFacilities.map((fac) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setModalItem(fac)}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row cursor-pointer"
              >
                <div className="sm:w-1/2 aspect-video sm:aspect-auto relative overflow-hidden bg-emerald-950/20">
                  <img
                    src={fac.imageUrl}
                    alt={fac.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-emerald-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <Eye className="h-3 w-3" /> Lihat Detail
                    </span>
                  </div>
                </div>

                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                      Sarana Pesantren
                    </span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      {fac.nama}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                      {fac.deskripsi}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Buka Spesifikasi Lengkap &rarr;
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Multi-page Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between bg-white dark:bg-gray-900 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Halaman <span className="text-gray-900 dark:text-white font-bold">{currentPage}</span> dari {totalPages}
            </span>

            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" /> Sebelumnya
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-8 w-8 rounded-lg text-xs font-bold transition cursor-pointer ${
                      currentPage === i + 1
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
              >
                Selanjutnya <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold">Siap Menjadi Santri Barokatul Qodiri?</h3>
            <p className="text-xs text-emerald-100">Pendaftaran santri baru kini dibuka secara online.</p>
          </div>
          <button
            onClick={onRegisterClick}
            className="px-6 py-3 rounded-xl bg-amber-500 text-emerald-950 hover:bg-amber-400 font-extrabold text-xs shadow-md transition cursor-pointer shrink-0"
          >
            Daftar Sekarang &rarr;
          </button>
        </div>

      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {modalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl relative"
            >
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video relative overflow-hidden bg-emerald-950/20">
                <img
                  src={modalItem.imageUrl}
                  alt={modalItem.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
                  {modalItem.nama}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {modalItem.deskripsi}
                </p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                  <button
                    onClick={() => setModalItem(null)}
                    className="px-6 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
