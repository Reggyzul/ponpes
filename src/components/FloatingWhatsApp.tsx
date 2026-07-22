import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

export default function FloatingWhatsApp({ whatsappNumber }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = "Assalamu'alaikum, mohon info pendaftaran santri baru di pesantren.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div id="floating-whatsapp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip message bubble */}
      {showTooltip && (
        <div className="relative rounded-2xl bg-white border border-gray-100 p-3 shadow-xl dark:bg-gray-900 dark:border-gray-800 animate-pulse-subtle max-w-xs text-right">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1.5 left-1.5 text-[10px] text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">
            Hubungi Panitia PSB
          </p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-normal">
            Tanya jawab pendaftaran via WhatsApp fast-response.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl transition-all hover:scale-110 active:scale-95 duration-300 relative group cursor-pointer"
        aria-label="Hubungi WhatsApp Panitia"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
        <MessageSquare className="h-6 w-6 relative z-10 group-hover:rotate-6 transition-transform" />
      </button>
    </div>
  );
}
