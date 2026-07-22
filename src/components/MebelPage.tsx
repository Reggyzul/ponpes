import React, { useState } from 'react';
import { 
  ArrowLeft, Hammer, CheckCircle2, MessageSquare, 
  ExternalLink, ShieldCheck, Award, Sparkles, Star, PackageCheck, Heart, Eye, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MebelPageProps {
  whatsappNumber: string;
  onBackToHome: () => void;
}

interface ProductItem {
  id: string;
  nama: string;
  deskripsi: string;
  imageUrl: string;
  tag: string;
}

export default function MebelPage({ whatsappNumber, onBackToHome }: MebelPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWAOrder = (productName?: string) => {
    const text = productName 
      ? `Assalamu'alaikum, saya tertarik memesan produk "${productName}" dari MEBEL MBAH PUGUNG.`
      : "Assalamu'alaikum, saya ingin konsultasi produk furniture di MEBEL MBAH PUGUNG.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const mebelProducts: ProductItem[] = [
    {
      id: "mebel-1",
      nama: "Bangku Jati Klasik Ukir Emas",
      deskripsi: "Bangku panjang dari kayu jati emas dengan ukiran khas halus bercat aksen emas premium.",
      imageUrl: "/images/MEBEL 1.avif",
      tag: "Bangku & Kursi"
    },
    {
      id: "mebel-2",
      nama: "Set Kursi Tamu Jati Ukir Jepara",
      deskripsi: "Set meja dan kursi tamu mewah dari kayu jati solid berkualitas tinggi dengan pahatan ornamen bernilai seni tinggi.",
      imageUrl: "/images/MEBEL 3.avif",
      tag: "Set Ruang Tamu"
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
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">MEBEL MBAH PUGUNG</span>
          </div>
        </div>

        {/* Hero Banner Mebel */}
        <div className="relative overflow-hidden rounded-3xl bg-radial from-amber-950 via-amber-900 to-amber-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <Hammer className="h-3.5 w-3.5 text-amber-300" /> Kriya &amp; Industri Kayu Berkualitas
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              MEBEL MBAH PUGUNG
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
              Menghadirkan Produk Mebel &amp; Furniture Kayu Jati dan Kayu Pilihan Hasil Karya Pengrajin Berpengalaman. Indah, Kokoh, dan Berkarakter Seni Tinggi.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleWAOrder()}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" /> Hubungi Workshop Mebel WA <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Galeri Karya Furniture Unggulan */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="h-4 w-4" /> Portofolio Produk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Galeri Produk Unggulan Kami
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Berikut adalah beberapa contoh produk furniture asli karya workshop Mebel Mbah Pugung yang siap dipesan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mebelProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                {/* Image Frame */}
                <div 
                  onClick={() => setSelectedImage(prod.imageUrl)}
                  className="aspect-[4/3] bg-amber-950/20 relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={prod.imageUrl}
                    alt={prod.nama}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3.5 py-2 rounded-xl bg-amber-400 text-amber-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                      <Eye className="h-4 w-4" /> Perbesar Gambar
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {prod.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {prod.nama}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-medium">
                      {prod.deskripsi}
                    </p>
                  </div>

                  <button
                    onClick={() => handleWAOrder(prod.nama)}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 dark:bg-gray-950 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-300 transition flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    Tanya Detail &amp; Harga via WA &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visi & Misi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              <Award className="h-4 w-4 text-amber-600" /> Visi Mebel
            </span>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic">
              "Menghadirkan produk furniture/mebel kayu berkualitas tinggi, kokoh, berestetika seni tinggi untuk keindahan serta kenyamanan hunian Anda secara amanah."
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4 text-amber-600" /> Misi Kerja
            </span>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2 font-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Menggunakan bahan baku kayu jati emas dan kayu keras pilihan berkualitas terbaik.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Dikerjakan oleh tukang kayu dan pengrajin ahli dengan detail ukiran serta sambungan yang presisi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Melayani kustomisasi model / custom order (Lemari, Kursi, Meja Belajar, dll) dengan harga kompetitif.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Keunggulan & Daya Tarik Mebel Mbah Pugung */}
        <div className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
              <Star className="h-4 w-4" /> Keunggulan Kami
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Mengapa Memilih MEBEL MBAH PUGUNG?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Kombinasi kualitas material, keahlian tangan pengrajin, dan kontribusi nyata kemandirian santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1 */}
            <div className="bg-slate-50 dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Kayu Pilihan Berkualitas Tinggi</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Material kayu Jati, Mahoni, dan Akasia pilihan yang dikeringkan sempurna untuk mencegah retak, menyusut, atau melengkung.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-slate-50 dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Desain Custom (Bebas Kustomisasi)</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Konsultasikan ukuran, model (minimalis skandinavia, klasik ukiran mewah, industrial modern), dan warna finishing sesuai dekorasi ruang Anda.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="bg-slate-50 dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Finishing Halus &amp; Premium</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Menggunakan pelitur/melamin impor berkilau halus, tahan goresan ringan, serta duco putih solid berkualitas tinggi yang awet.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-slate-50 dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Dukungan Ekonomi Kemandirian</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Seluruh profit unit usaha dialokasikan langsung untuk pembiayaan beasiswa belajar santri yatim piatu dan sarana belajar pondok.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Jenis Layanan & Produk Kami */}
        <div className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
          <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <PackageCheck className="h-5 w-5 text-amber-500" /> Macam Produk Furniture yang Kami Layani
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              🚪 Kusen &amp; Pintu Kayu Jati
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              🛋️ Kursi &amp; Sofa Tamu
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              🛏️ Tempat Tidur / Dipan
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              📚 Meja Belajar &amp; Rak Buku
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              🕌 Mimbar Masjid Ukiran
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              🍽️ Set Meja Makan
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              👕 Lemari Pakaian Minimalis
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 font-bold text-xs">
              📐 Kustomisasi Desain Apapun!
            </div>
          </div>
        </div>

        {/* Footer Order Callout */}
        <div className="rounded-3xl bg-amber-500 text-emerald-950 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-black">Punya Kebutuhan Desain Mebel Khusus?</h3>
            <p className="text-xs sm:text-sm font-semibold opacity-90">
              Kirimkan sketsa desain dan ukuran produk Anda, tim pengrajin ahli kami siap merealisasikannya secara rapi.
            </p>
          </div>
          <button
            onClick={() => handleWAOrder()}
            className="px-6 py-3 rounded-xl bg-emerald-950 text-amber-300 hover:bg-emerald-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <MessageSquare className="h-4 w-4" /> Hubungi Workshop via WA
          </button>
        </div>

      </div>

      {/* Lightbox Modal Fullscreen */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-400/50 bg-gray-950"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                alt="Furniture Perbesar"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
