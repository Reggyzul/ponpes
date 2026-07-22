import React from 'react';
import { ArrowUp, BookOpen, Heart } from 'lucide-react';
import { PesantrenData } from '../types';

interface FooterSectionProps {
  data: PesantrenData;
  onScrollToTop: () => void;
}

export default function FooterSection({ data, onScrollToTop }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 dark:bg-black transition-colors pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-800 pb-12">
          
          {/* Column 1: School Profile info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <img src="/logo.avif" alt="Logo Barokatul Qodiri" className="h-8 w-8 object-contain" />
              <span className="font-serif text-lg font-extrabold uppercase tracking-tight">
                {data.namaPesantren}
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {data.slogan}
            </p>
            <div className="text-[10px] text-amber-500 font-semibold bg-amber-500/5 rounded-lg border border-amber-500/10 p-3 max-w-sm leading-relaxed select-none">
              <b>Pemberitahuan Templat:</b> Website ini menggunakan placeholder data agar mudah dikelola dan disesuaikan secara dinamis. Informasi spesifik di atas bukanlah fakta final hingga diubah oleh pengelola resmi.
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-sans text-sm font-bold uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-white transition">Tentang Kami</a>
              <a href="#programs" className="hover:text-white transition">Program</a>
              <a href="#features" className="hover:text-white transition">Keunggulan</a>
              <a href="#facilities" className="hover:text-white transition">Fasilitas</a>
              <a href="#activities" className="hover:text-white transition">Kegiatan</a>
              <a href="#admission-steps" className="hover:text-white transition">Alur PSB</a>
              <a href="#registration" className="hover:text-white transition">Registrasi Online</a>
              <a href="#contact" className="hover:text-white transition">Hubungi Kami</a>
            </div>
          </div>

          {/* Column 3: Social & Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-sans text-sm font-bold uppercase tracking-wider">
              Kontak Singkat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>WA: <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white transition">+{data.whatsapp}</a></li>
              <li>Tlp: <span>{data.phone}</span></li>
              <li className="truncate">Email: <span>{data.email}</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyrights & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-gray-500">
          <div className="text-center md:text-left space-y-2">
            <p>
              &copy; {currentYear} {data.namaPesantren}. Hak Cipta Dilindungi.
            </p>
            <div className="flex justify-center md:justify-start gap-4 py-1">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold underline decoration-amber-500 underline-offset-4">Profesional</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold underline decoration-emerald-500 underline-offset-4">Islami</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold underline decoration-amber-500 underline-offset-4">Mandiri</span>
            </div>
            <p className="text-[10px] text-gray-600">
              Dirancang secara profesional &amp; responsif dengan nuansa Islami modern.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:text-white px-4 py-2 text-xs font-semibold text-gray-400 transition cursor-pointer"
          >
            <span>Kembali Ke Atas</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
