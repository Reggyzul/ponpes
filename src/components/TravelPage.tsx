import React from 'react';
import { 
  ArrowLeft, Plane, CheckCircle2, MessageSquare, 
  ExternalLink, Award, Sparkles, Star, Building2, Home, Compass, PackageCheck 
} from 'lucide-react';

interface TravelPageProps {
  whatsappNumber: string;
  onBackToHome: () => void;
}

export default function TravelPage({ whatsappNumber, onBackToHome }: TravelPageProps) {
  const handleWAOrder = () => {
    const text = "Assalamu'alaikum, saya ingin konsultasi & pendaftaran Travel Umroh & Haji MURIZ MBAH PUGUNG Barokatul Qodiri.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

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

      </div>
    </div>
  );
}
