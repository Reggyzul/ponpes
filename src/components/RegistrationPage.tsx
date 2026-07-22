import React from 'react';
import { ArrowLeft, Sparkles, UserPlus, FileText } from 'lucide-react';
import { ProgramPendidikan } from '../types';
import RegistrationForm from './RegistrationForm';

interface RegistrationPageProps {
  programs: ProgramPendidikan[];
  whatsappNumber: string;
  namaPesantren: string;
  onBackToHome: () => void;
}

export default function RegistrationPage({
  programs,
  whatsappNumber,
  namaPesantren,
  onBackToHome
}: RegistrationPageProps) {
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
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Formulir Pendaftaran</span>
          </div>
        </div>

        {/* Page Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-radial from-emerald-950 via-emerald-900 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 blur-3xl rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-widest">
              <UserPlus className="h-3.5 w-3.5 text-amber-300" /> Halaman Khusus Pendaftaran Online
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Pendaftaran Santri Baru (PSB)
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
              Silakan isi formulir pendaftaran di bawah ini secara cermat. Bukti pendaftaran dan kartu registrasi digital akan langsung diterbitkan secara otomatis.
            </p>
          </div>
        </div>

        {/* Registration Form Component */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-xl">
          <RegistrationForm 
            programs={programs}
            whatsappNumber={whatsappNumber}
            namaPesantren={namaPesantren}
          />
        </div>

      </div>
    </div>
  );
}
