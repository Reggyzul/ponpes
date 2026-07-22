import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, Clock, ArrowLeft, Search, Filter, 
  ChevronLeft, ChevronRight, Eye, Sparkles, Image as ImageIcon,
  CheckCircle2, BookOpen, Layers, X
} from 'lucide-react';
import { Fasilitas, Kegiatan } from '../types';

interface FacilitiesActivitiesPageProps {
  facilities: Fasilitas[];
  activities: Kegiatan[];
  onBackToHome: () => void;
  onRegisterClick: () => void;
}

export default function FacilitiesActivitiesPage({
  facilities,
  activities,
  onBackToHome,
  onRegisterClick
}: FacilitiesActivitiesPageProps) {
  const [activeTab, setActiveTab] = useState<'facilities' | 'activities'>('facilities');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Selected item modal state
  const [modalItem, setModalItem] = useState<{
    title: string;
    description: string;
    imageUrl: string;
    time?: string;
    category?: string;
  } | null>(null);

  // Categories for Facilities
  const facilityCategories = ['Semua', 'Ibadah & Asrama', 'Pendidikan & Kitab', 'Keterampilan & Vokasi'];
  // Categories for Activities
  const activityCategories = ['Semua', 'Pagi & Subuh', 'Siang & Sekolah', 'Sore & Malam'];

  // Filter facilities
  const filteredFacilities = facilities.filter(f => {
    const matchesSearch = f.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Filter activities
  const filteredActivities = activities.filter(a => {
    const matchesSearch = a.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.waktu.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const activeItemsCount = activeTab === 'facilities' ? filteredFacilities.length : filteredActivities.length;
  const totalPages = Math.ceil(activeItemsCount / itemsPerPage) || 1;

  // Paginated slices
  const paginatedFacilities = filteredFacilities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabSwitch = (tab: 'facilities' | 'activities') => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedCategory('Semua');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top Navigation & Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-bold text-gray-700 dark:text-gray-200 shadow-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-emerald-600" />
            Kembali ke Beranda
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <span>Beranda</span>
            <span>/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Halaman Fasilitas &amp; Kegiatan</span>
          </div>
        </div>

        {/* Page Banner Header */}
        <div className="relative overflow-hidden rounded-3xl bg-radial from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Eksplorasi Pesantren (Halaman 2)
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Fasilitas Terpadu &amp; Agendanya Santri
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
              Mengenal lebih dekat lingkungan pondok, kelengkapan sarana ibadah dan asrama, serta rutinitas pembelajaran 24 jam santri Pondok Pesantren Barokatul Qodiri.
            </p>
          </div>
        </div>

        {/* Tab & Search Control Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs">
          
          {/* Main Tabs */}
          <div className="flex rounded-xl bg-gray-100 dark:bg-gray-800/80 p-1">
            <button
              onClick={() => handleTabSwitch('facilities')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'facilities'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
              }`}
            >
              <Building className="h-4 w-4" />
              Fasilitas Pesantren ({facilities.length})
            </button>
            <button
              onClick={() => handleTabSwitch('activities')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'activities'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
              }`}
            >
              <Clock className="h-4 w-4" />
              Kegiatan Santri ({activities.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={activeTab === 'facilities' ? 'Cari fasilitas (misal: Masjid, Lab)...' : 'Cari kegiatan (misal: Subuh, Kitab)...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        {/* Dynamic Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'facilities' ? (
            <motion.div
              key="tab-facilities"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {paginatedFacilities.length === 0 ? (
                <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tidak ada fasilitas yang sesuai dengan pencarian "{searchQuery}".</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {paginatedFacilities.map((fac) => (
                    <div
                      key={fac.id}
                      onClick={() => setModalItem({
                        title: fac.nama,
                        description: fac.deskripsi,
                        imageUrl: fac.imageUrl,
                        category: 'Fasilitas Utama'
                      })}
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
                            <Eye className="h-3 w-3" /> Klik Detail
                          </span>
                        </div>
                      </div>

                      <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                            Fasilitas Pesantren
                          </span>
                          <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {fac.nama}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                            {fac.deskripsi}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-gray-100 dark:border-gray-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          Lihat Dokumentasi Lengkap &rarr;
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="tab-activities"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Paginated Activity Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => setModalItem({
                      title: act.nama,
                      description: act.deskripsi,
                      imageUrl: act.imageUrl,
                      time: act.waktu,
                      category: 'Kegiatan Pembiasaan'
                    })}
                    className="group bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-pointer"
                  >
                    <div className="sm:w-40 h-32 rounded-2xl overflow-hidden relative shrink-0 bg-emerald-950/20">
                      <img
                        src={act.imageUrl}
                        alt={act.nama}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-amber-500 text-emerald-950 text-[10px] font-bold px-2 py-1 rounded-full">
                          Prinjau
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                        <Clock className="h-3.5 w-3.5 text-amber-500" />
                        <span>{act.waktu}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                        {act.nama}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {act.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Schedule Table Section */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
                      Tabel Rincian Jadwal 24 Jam Santri
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Matriks seluruh rutinitas harian di Pondok Pesantren Barokatul Qodiri.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    Terjadwal Teratur
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-emerald-900 text-white dark:bg-emerald-950/90 text-xs font-bold uppercase tracking-wider">
                          <th className="px-6 py-4">Waktu</th>
                          <th className="px-6 py-4">Nama Agenda</th>
                          <th className="px-6 py-4">Fokus Kegiatan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs">
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
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition">
                            <td className="px-6 py-3.5 font-mono font-bold text-emerald-700 dark:text-emerald-400">{row.waktu}</td>
                            <td className="px-6 py-3.5 font-bold text-gray-900 dark:text-white">{row.kegiatan}</td>
                            <td className="px-6 py-3.5 text-gray-600 dark:text-gray-300">{row.keterangan}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Multi-page Pagination Controls */}
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

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold">Tertarik dengan Sarana &amp; Pembiasaan Santri?</h3>
            <p className="text-xs sm:text-sm text-emerald-100">Daftarkan putra-putri Anda sekarang di Penerimaan Santri Baru Barokatul Qodiri.</p>
          </div>
          <button
            onClick={onRegisterClick}
            className="px-8 py-3.5 rounded-xl bg-amber-500 text-emerald-950 hover:bg-amber-400 font-extrabold text-sm shadow-lg hover:-translate-y-0.5 transition cursor-pointer shrink-0"
          >
            Daftar Sekarang &rarr;
          </button>
        </div>

      </div>

      {/* Lightbox / Detail Modal */}
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
                  alt={modalItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                {modalItem.time && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 text-xs font-bold">
                    <Clock className="h-3.5 w-3.5" /> {modalItem.time}
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
                  {modalItem.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {modalItem.description}
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
