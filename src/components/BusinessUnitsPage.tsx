import React, { useState } from 'react';
import { 
  ArrowLeft, Plane, Droplets, CheckCircle2, MessageSquare, 
  ExternalLink, ShieldCheck, Award, MapPin, Sparkles, Star, 
  Building2, Home, Compass, UserCheck, PackageCheck 
} from 'lucide-react';

interface BusinessUnitsPageProps {
  whatsappNumber: string;
  onBackToHome: () => void;
  initialSubUnit?: 'travel' | 'madu' | 'all';
}

export default function BusinessUnitsPage({
  whatsappNumber,
  onBackToHome,
  initialSubUnit = 'all'
}: BusinessUnitsPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'travel' | 'madu'>(initialSubUnit);

  const handleWAOrder = (unitName: string) => {
    const text = `Assalamu'alaikum, saya ingin konsultasi & informasi pendaftaran unit usaha ${unitName} Barokatul Qodiri.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Top Header Controls */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6">
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
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Unit Usaha Pesantren</span>
          </div>
        </div>

        {/* Hero Banner Unit Usaha */}
        <div className="relative overflow-hidden rounded-3xl bg-radial from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Kemandirian &amp; Pelayanan Ummat
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Unit Usaha Barokatul Qodiri
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
              Dukung kemandirian ekonomi pesantren dan dapatkan pelayanan terbaik dari usaha resmi kami: Travel Umroh &amp; Haji <b>MURIZ MBAH PUGUNG</b> serta <b>MADU MBAH PUGUNG</b>.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-amber-400 text-emerald-950 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Semua Unit Usaha
              </button>
              <button
                onClick={() => setActiveTab('travel')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'travel'
                    ? 'bg-amber-400 text-emerald-950 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Plane className="h-3.5 w-3.5" /> MURIZ MBAH PUGUNG
              </button>
              <button
                onClick={() => setActiveTab('madu')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'madu'
                    ? 'bg-amber-400 text-emerald-950 shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Droplets className="h-3.5 w-3.5" /> MADU MBAH PUGUNG
              </button>
            </div>
          </div>
        </div>

        {/* Content Section Grid */}
        <div className="space-y-12">
          
          {/* SUB UNIT 1: TRAVEL UMROH & HAJI - MURIZ MBAH PUGUNG */}
          {(activeTab === 'all' || activeTab === 'travel') && (
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 sm:p-10 shadow-lg space-y-10">
              
              {/* Header Title & CTA */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Plane className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Travel Umroh &amp; Haji Resmi</span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                      MURIZ MBAH PUGUNG
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-sans">
                      Penyelenggara Perjalanan Ibadah Umroh &amp; Haji Terpercaya, Amanah, dan Sesuai Sunnah.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleWAOrder('MURIZ MBAH PUGUNG (Travel Umroh)')}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer shrink-0"
                >
                  <MessageSquare className="h-4 w-4" /> Konsultasi Travel WA <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Visi & Misi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50/50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    <Award className="h-4 w-4 text-emerald-600" /> Visi Travel
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic">
                    "Menjadi penyelenggara ibadah Haji dan Umroh terpercaya, khusyu', dan berorientasi pada kepuasan serta kesempurnaan ibadah jamaah sesuai tuntunan Rasulullah SAW."
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Misi Utama
                  </span>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1.5 font-medium leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Menyediakan pelayanan bimbingan ibadah intensif dan profesional oleh ulama/kyai pembina.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Memberikan jaminan kepastian keberangkatan dan akomodasi terjamin berkualitas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Mengutamakan kekhusyukan, keamanan, dan pelayanan prima jemaah di Tanah Suci.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Informasi Paket */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <PackageCheck className="h-5 w-5 text-amber-500" /> Informasi Paket Umroh &amp; Haji
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Paket Silver */}
                  <div className="rounded-2xl border border-slate-200 dark:border-gray-800 p-6 bg-gradient-to-br from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 space-y-3 shadow-xs">
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                        Paket Silver
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Pilihan Populer</span>
                    </div>
                    <div className="font-serif text-2xl font-black text-gray-900 dark:text-white">
                      Rp 28 – 31 Juta
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      Fasilitas lengkap dengan pembimbing berpengalaman, hotel nyaman, dan jaminan penerbangan resmi.
                    </p>
                  </div>

                  {/* Paket Gold */}
                  <div className="rounded-2xl border border-amber-300 dark:border-amber-900/50 p-6 bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-900 space-y-3 shadow-xs">
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold uppercase tracking-wider">
                        Paket Gold Premium
                      </span>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Fasilitas Eksklusif</span>
                    </div>
                    <div className="font-serif text-2xl font-black text-amber-600 dark:text-amber-400">
                      Rp 36 – 40 Juta
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      Layanan kelas atas dengan lokasi hotel paling dekat dengan ring utama Masjidil Haram &amp; Masjid Nabawi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fasilitas & Keunggulan Travel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                
                {/* Fasilitas Travel */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider flex items-center gap-1.5">
                    <Building2 className="h-4 w-4" /> Fasilitas Utama Travel
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                      <Compass className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Tempat Manasik Umroh &amp; Haji Praktis</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                      <Building2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Kantor Pelayanan Travel Resmi</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                      <Home className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Penginapan Khusus Jamaah</span>
                    </div>
                  </div>
                </div>

                {/* Keunggulan Travel */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-1.5">
                    <Star className="h-4 w-4" /> Keunggulan Utama
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Hotel dekat dengan Masjidil Haram &amp; Masjid Nabawi</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Terbang langsung tanpa transit</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Perlengkapan umroh komplit &amp; berkualitas</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Jaminan Kepastian Berangkat</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Tim Lapangan &amp; Pembimbing Profesional</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          )}

          {/* SUB UNIT 2: MADU MBAH PUGUNG */}
          {(activeTab === 'all' || activeTab === 'madu') && (
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 sm:p-10 shadow-lg space-y-8">
              
              {/* Header Title & CTA */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 shrink-0">
                    <Droplets className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Brand Produk Madu Alami</span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                      MADU MBAH PUGUNG
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-sans">
                      Madu murni alami pilihan langsung dari petani lebah untuk menjaga stamina dan imunitas tubuh.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleWAOrder('MADU MBAH PUGUNG')}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer shrink-0"
                >
                  <MessageSquare className="h-4 w-4" /> Pesan Madu via WA <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Keunggulan Madu Mbah Pugung Grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase text-amber-500 tracking-wider flex items-center gap-1.5">
                  <Star className="h-4 w-4" /> Keunggulan Utama MADU MBAH PUGUNG
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* 1 */}
                  <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 space-y-2">
                    <Droplets className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Langsung dari Petani Lebah</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Dipanen secara alami 100% murni langsung dari peternakan lebah terpercaya tanpa campuran bahan kimia.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 space-y-2">
                    <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Dikemas dengan Aman</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Proses pengemasan menggunakan botol higienis berlapis tersegel rapat sehingga keutuhan rasa dan khasiat terjamin.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 space-y-2">
                    <Sparkles className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Kaya Nutrisi Alami</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Mengandung enzim aktif, vitamin, mineral penting, serta zat antioksidan alami tinggi yang dibutuhkan tubuh.
                    </p>
                  </div>

                  {/* 4 */}
                  <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 space-y-2">
                    <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Meningkatkan Daya Tahan Tubuh</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Berfungsi efektif memulihkan stamina, menyembuhkan flu/batuk, serta memperkuat imun harian seluruh keluarga.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
