import React, { useState } from 'react';
import { 
  ArrowLeft, Plane, CheckCircle2, MessageSquare, 
  ExternalLink, Award, Sparkles, Star, Building2, Home, Compass, PackageCheck, X 
} from 'lucide-react';

interface TravelPageProps {
  whatsappNumber: string;
  onBackToHome: () => void;
}

export default function TravelPage({ whatsappNumber, onBackToHome }: TravelPageProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleWAOrder = () => {
    const text = "Assalamu'alaikum, saya ingin konsultasi & pendaftaran Travel Umroh & Haji MURIZ MBAH PUGUNG Barokatul Qodiri.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const galleryItems = [
    {
      src: '/images/umroh_nabawi.jpg',
      title: 'Ziarah Masjid Nabawi',
      desc: 'Bimbingan ibadah intensif dan ziarah makam Rasulullah SAW di pelataran kubah hijau Masjid Nabawi, Madinah.'
    },
    {
      src: '/images/umroh_staff.jpg',
      title: 'Pelayanan Staf Bandara',
      desc: 'Pendampingan keberangkatan jamaah secara lengkap dan ramah oleh staf Muriz Travel di bandara sebelum terbang.'
    },
    {
      src: '/images/umroh_couple.jpg',
      title: 'Kekhusyukan Jamaah Ihram',
      desc: 'Kebersamaan hangat pasutri jamaah mengenakan pakaian ihram putih bersih bersiap melaksanakan ibadah umroh.'
    },
    {
      src: '/images/umroh_thumbs.jpg',
      title: 'Pendampingan di Tanah Suci',
      desc: 'Keramahan pembimbing dalam mendampingi jamaah di bandara Arab Saudi demi kenyamanan dan keselamatan perjalanan.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">

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
            <span>Unit Usaha</span>
            <span>/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">MURIZ MBAH PUGUNG</span>
          </div>
        </div>

        {/* Hero Banner Travel */}
        <div className="relative overflow-hidden rounded-3xl bg-radial from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <Plane className="h-3.5 w-3.5 text-amber-300" /> Travel Umroh &amp; Haji Resmi
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              MURIZ MBAH PUGUNG
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
              Penyelenggara Perjalanan Ibadah Umroh &amp; Haji Terpercaya, Khusyu', Amanah, dan Sesuai Sunnah Rasulullah SAW.
            </p>

            <div className="pt-2">
              <button
                onClick={handleWAOrder}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" /> Konsultasi &amp; Pendaftaran WA <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Visi & Misi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              <Award className="h-4 w-4 text-emerald-600" /> Visi Travel
            </span>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic">
              "Menjadi penyelenggara ibadah Haji dan Umroh terpercaya, khusyu', dan berorientasi pada kepuasan serta kesempurnaan ibadah jamaah sesuai tuntunan Sunnah."
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Misi Utama
            </span>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2 font-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Menyediakan pelayanan bimbingan ibadah intensif dan profesional oleh ulama/kyai pembina.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Memberikan jaminan kepastian keberangkatan dan akomodasi berkualitas tinggi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Mengutamakan kekhusyukan, keselamatan, dan kenyamanan jamaah selama di Tanah Suci.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Informasi Paket */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <PackageCheck className="h-6 w-6 text-amber-500" /> pilihan Paket Umroh &amp; Haji
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paket Silver */}
            <div className="rounded-2xl border border-slate-200 dark:border-gray-800 p-6 bg-gradient-to-br from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 space-y-3 shadow-xs">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                  Paket Silver
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Pilihan Terjangkau</span>
              </div>
              <div className="font-serif text-3xl font-black text-gray-900 dark:text-white">
                Rp 28 – 31 Juta
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Fasilitas lengkap dengan pembimbing berpengalaman, hotel nyaman, dan penerbangan resmi terpercaya.
              </p>
            </div>

            {/* Paket Gold */}
            <div className="rounded-2xl border border-amber-300 dark:border-amber-900/50 p-6 bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-900 space-y-3 shadow-xs">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold uppercase tracking-wider">
                  Paket Gold Premium
                </span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Fasilitas Ring Utama</span>
              </div>
              <div className="font-serif text-3xl font-black text-amber-600 dark:text-amber-400">
                Rp 36 – 40 Juta
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Layanan kelas atas dengan hotel paling dekat ke Masjidil Haram &amp; Masjid Nabawi serta fasilitas eksklusif.
              </p>
            </div>
          </div>
        </div>

        {/* Fasilitas & Keunggulan Travel */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Fasilitas */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-amber-500 tracking-wider flex items-center gap-2">
              <Building2 className="h-5 w-5" /> Fasilitas Travel
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <Compass className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Tempat Manasik Umroh dan Haji</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <Building2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Kantor Travel Pelayanan Resmi</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <Home className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Penginapan Khusus Jamaah</span>
              </div>
            </div>
          </div>

          {/* Keunggulan */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-2">
              <Star className="h-5 w-5" /> Keunggulan Travel
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Hotel dekat dengan Masjidil Haram dan Masjid Nabawi</span>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Terbang langsung tanpa transit</span>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Perlengkapan umroh komplit &amp; berkualitas</span>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Kepastian berangkat 100% amanah</span>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Tim &amp; pembimbing profesional berpengalaman</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Dokumentasi & Brosur Resmi */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-8">
          <div className="space-y-2 text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-amber-500" /> Dokumentasi &amp; Brosur Resmi
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Galeri Perjalanan &amp; Brosur Paket
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Dokumentasi nyata bimbingan ibadah jamaah Muriz Mbah Pugung di Makkah dan Madinah, beserta brosur paket penawaran premium.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Brochure Spotlight */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider text-left">
                Brosur Paket Premium
              </h4>
              <div 
                onClick={() => setActiveImage('/images/umroh_flyer.jpg')}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition duration-300 bg-slate-50 dark:bg-gray-950 aspect-[3/4] flex items-center justify-center"
              >
                <img
                  src="/images/umroh_flyer.jpg"
                  alt="Brosur Resmi Umrah PT Mugi Rizky"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2">
                  <div className="p-3 bg-emerald-600/90 rounded-full shadow-lg">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold tracking-wide">Klik untuk Memperbesar Brosur</span>
                </div>
                {/* Badge overlay */}
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-amber-400 text-emerald-950 text-[10px] font-extrabold rounded-md shadow-sm uppercase tracking-wider">
                  Brosur Resmi
                </span>
              </div>
            </div>

            {/* Right Column: 2x2 Real-Life Photos Grid */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider text-left">
                Dokumentasi Kegiatan Jamaah
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryItems.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveImage(item.src)}
                    className="group bg-slate-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-gray-800">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 select-none"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold rounded-lg border border-white/10">Lihat Foto</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h5 className="font-sans font-bold text-xs sm:text-sm text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h5>
                      <p className="font-sans text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/75 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
            >
              <X className="h-7 w-7" />
            </button>
            <img 
              src={activeImage} 
              alt="Zoomed documentation" 
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10 select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
