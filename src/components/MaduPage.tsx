import React, { useState } from 'react';
import { 
  ArrowLeft, Droplets, CheckCircle2, MessageSquare, 
  ExternalLink, ShieldCheck, Award, Sparkles, Star, Eye, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MaduPageProps {
  whatsappNumber: string;
  onBackToHome: () => void;
}

export default function MaduPage({ whatsappNumber, onBackToHome }: MaduPageProps) {
  const honeyImage = "/Gemini_Generated_Image_k01074k01074k010.avif";
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleWAOrder = () => {
    const text = "Assalamu'alaikum, saya ingin memesan MADU MBAH PUGUNG dari unit usaha Barokatul Qodiri.";
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
            <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">MADU MBAH PUGUNG</span>
          </div>
        </div>

        {/* Hero Banner Madu dengan Gambar Produk Premium */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-amber-900 to-amber-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Info Product */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
                <Droplets className="h-4 w-4 text-amber-300" /> Brand Madu Murni Alami
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                MADU MBAH PUGUNG
              </h1>
              <p className="text-sm sm:text-base text-amber-100 font-sans leading-relaxed">
                Madu Murni Alami 100% Pilihan Langsung dari Petani Lebah untuk Kesehatan, Vitalitas, dan Imunitas Keluarga.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleWAOrder}
                  className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" /> Pesan Madu via WhatsApp <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Column 2: Photo Frame Display */}
            <div className="lg:col-span-5 relative group">
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-amber-950/80 cursor-pointer max-w-sm mx-auto"
              >
                <img
                  src={honeyImage}
                  alt="MADU MBAH PUGUNG - Alami Murni"
                  className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3.5 py-2 rounded-xl bg-amber-400 text-amber-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                    <Eye className="h-4 w-4" /> Perbesar Foto Produk
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Keunggulan Utama MADU MBAH PUGUNG */}
        <div className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
              <Star className="h-4 w-4" /> Jaminan Kualitas Produk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Mengapa Memilih MADU MBAH PUGUNG?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Diproduksi dengan asas kebersihan, keaslian murni, dan khasiat kesehatan herbal thibbun nabawi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 1 */}
            <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-4 space-y-0">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 shrink-0 mt-1">
                <Droplets className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Madu Murni Langsung dari Petani Lebah</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Dipanen secara alami tanpa proses pemanasan berlebih, tanpa pemanis buatan, dan tanpa campuran bahan kimia.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-4 space-y-0">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 shrink-0 mt-1">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Dikemas dengan Aman &amp; Higienis</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Menggunakan botol kemasan standar pangan higienis berlapis segel aman untuk menjaga keutuhan rasa dan nutrisi hingga ke tangan Anda.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-4 space-y-0">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 shrink-0 mt-1">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Kaya dengan Nutrisi &amp; Antioksidan</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Kaya akan kandungan enzim alami, vitamin C &amp; B kompleks, serta asam amino esensial yang sangat berguna bagi tubuh.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-amber-50/60 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-4 space-y-0">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 shrink-0 mt-1">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Meningkatkan Daya Tahan Tubuh</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Asupan harian yang sangat baik untuk meningkatkan sistem kekebalan tubuh, memulihkan stamina lesu, dan menyembuhkan flu.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Order Callout */}
        <div className="rounded-3xl bg-amber-500 text-emerald-950 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-black">Tertarik Memesan MADU MBAH PUGUNG?</h3>
            <p className="text-xs sm:text-sm font-semibold opacity-90">
              Pengiriman siap melayani area lokal maupun luar kota melalui sekretariat unit usaha pesantren.
            </p>
          </div>
          <button
            onClick={handleWAOrder}
            className="px-6 py-3 rounded-xl bg-emerald-950 text-amber-300 hover:bg-emerald-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <MessageSquare className="h-4 w-4" /> Pesan Sekarang via WA
          </button>
        </div>

      </div>

      {/* Lightbox Modal Fullscreen */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-400/50 bg-gray-950"
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={honeyImage}
                alt="MADU MBAH PUGUNG - Perbesar Foto Produk"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
