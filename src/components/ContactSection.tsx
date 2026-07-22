import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, Clock, Share2 } from 'lucide-react';
import { PesantrenData } from '../types';

interface ContactSectionProps {
  data: PesantrenData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  const handleWAClick = () => {
    const text = "Assalamu'alaikum, mohon info pendaftaran santri baru di pesantren.";
    window.open(`https://wa.me/${data.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header - Minimalist */}
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Kontak Resmi
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Hubungi Sekretariat Pesantren
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl font-sans">
            Untuk informasi pendaftaran, konsultasi program, atau kunjungan lokasi, silakan hubungi kontak di bawah.
          </p>
        </div>

        {/* Minimalist Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-4 border-t border-gray-100 dark:border-gray-800">
          
          {/* Alamat */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Alamat Pesantren</h3>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                {data.alamat}
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shrink-0">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Layanan WhatsApp</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white font-mono">
                +{data.whatsapp}
              </p>
              <button 
                onClick={handleWAClick}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition cursor-pointer"
              >
                Kirim Pesan Langsung &rarr;
              </button>
            </div>
          </div>

          {/* Telepon */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Telepon Kantor</h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white font-mono">
                {data.phone}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email</h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white font-sans">
                {data.email}
              </p>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="flex items-start gap-4 md:col-span-2">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Share2 className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Media Sosial Resmi</h3>
              <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                {data.sosialMedia || 'fb @mbah pugung'}
              </p>
            </div>
          </div>

        </div>

        {/* Minimalist Jam Pelayanan Note */}
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4 text-amber-500 shrink-0" />
          <span><b>Jam Operasional Sekretariat PSB:</b> Senin - Sabtu, 08.00 - 15.00 WIB. Hari Libur Nasional layanan buka via WhatsApp.</span>
        </div>

      </div>
    </section>
  );
}
