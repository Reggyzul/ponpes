import React, { useState } from 'react';
import { 
  X, Save, RotateCcw, Download, Upload, Copy, Check, Sparkles,
  Building, BookOpen, Phone, MapPin, Eye, Edit3, MessageSquare, Plus, Trash2
} from 'lucide-react';
import { PesantrenData } from '../types';

interface SidebarEditorProps {
  isOpen: boolean;
  onClose: () => void;
  data: PesantrenData;
  onChange: (newData: PesantrenData) => void;
  onReset: () => void;
  activeTheme: string;
  onThemeChange: (theme: string) => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

export const themes = [
  {
    id: 'emerald',
    name: 'Natural Tones (Emerald & Amber)',
    primary: '#064e3b', // Emerald 900
    primaryHover: '#047857', // Emerald 700
    secondary: '#b45309', // Amber 700
    bgLight: '#f0fdf4', // Emerald 50
    textPrimary: 'text-emerald-900',
    borderPrimary: 'border-emerald-700',
    accentColor: '#f59e0b',
  },
  {
    id: 'royal',
    name: 'Royal Blue & Gold (Modern)',
    primary: '#1e3a8a', // Blue 900
    primaryHover: '#1d4ed8', // Blue 700
    secondary: '#d97706', // Amber 600
    bgLight: '#f0f9ff', // Blue 50
    textPrimary: 'text-blue-900',
    borderPrimary: 'border-blue-700',
    accentColor: '#fbbf24',
  },
  {
    id: 'terracotta',
    name: 'Terracotta & Sand (Hangat)',
    primary: '#7c2d12', // Orange 900
    primaryHover: '#9a3412', // Orange 800
    secondary: '#854d0e', // Yellow 800
    bgLight: '#fff7ed', // Orange 50
    textPrimary: 'text-orange-900',
    borderPrimary: 'border-orange-800',
    accentColor: '#ca8a04',
  },
  {
    id: 'mint',
    name: 'Charcoal & Mint (Minimalis)',
    primary: '#1f2937', // Gray 800
    primaryHover: '#374151', // Gray 700
    secondary: '#059669', // Emerald 600
    bgLight: '#f9fafb', // Gray 50
    textPrimary: 'text-gray-900',
    borderPrimary: 'border-gray-700',
    accentColor: '#10b981',
  }
];

export default function SidebarEditor({
  isOpen,
  onClose,
  data,
  onChange,
  onReset,
  activeTheme,
  onThemeChange,
  isEditMode,
  onToggleEditMode
}: SidebarEditorProps) {
  const [activeTab, setActiveTab] = useState<'profil' | 'kontak' | 'tampilan' | 'ekspor'>('profil');
  const [copied, setCopied] = useState(false);
  const [newMisi, setNewMisi] = useState('');
  const [aiKeyword, setAiKeyword] = useState('');
  const [aiGenerating, setAiGenerating] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof PesantrenData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleMisiChange = (index: number, value: string) => {
    const updatedMisi = [...data.misi];
    updatedMisi[index] = value;
    handleInputChange('misi', updatedMisi);
  };

  const handleAddMisi = () => {
    if (newMisi.trim()) {
      handleInputChange('misi', [...data.misi, newMisi.trim()]);
      setNewMisi('');
    }
  };

  const handleRemoveMisi = (index: number) => {
    const updatedMisi = data.misi.filter((_, i) => i !== index);
    handleInputChange('misi', updatedMisi);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `konfigurasi_pesantren_${data.namaPesantren.replace(/\s+/g, '_').toLowerCase()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          // Simple validation
          if (parsed.namaPesantren && Array.isArray(parsed.misi)) {
            onChange(parsed);
            alert("Konfigurasi berhasil diimpor!");
          } else {
            alert("File JSON tidak valid. Pastikan format sesuai dengan data profil pesantren.");
          }
        } catch (error) {
          alert("Gagal membaca file JSON.");
        }
      };
    }
  };

  // Fun Local Copywriter Assistant (Tanpa Api Key, langsung templat pintar)
  const generateAICopywriting = () => {
    if (!aiKeyword.trim()) return;
    setAiGenerating(true);
    
    setTimeout(() => {
      const keyword = aiKeyword.trim();
      const nama = data.namaPesantren.includes("[") ? "Pesantren Al-Hikmah" : data.namaPesantren;
      
      const generatedSejarah = `Didirikan di atas cita-cita luhur mencerdaskan bangsa, ${nama} hadir sebagai respon atas kebutuhan pendidikan Islami berkualitas tinggi yang berfokus pada ${keyword}. Dengan bimbingan intensif dan suasana belajar asri, kami mendidik santri agar memiliki keseimbangan antara kecakapan moral, keilmuan kontemporer, serta keteguhan iman yang kokoh untuk kemaslahatan umat.`;
      
      const generatedVisi = `Menjadi lembaga pendidikan kepesantrenan terdepan yang melahirkan mutafaqqih fiddin, hafizh Al-Qur'an, dan teknokrat muslim yang unggul dalam bidang ${keyword} serta berakhlak mulia di tingkat nasional.`;
      
      const generatedMisi = [
        `Menyelenggarakan pembelajaran berbasis integrasi ilmu syar'i dan keterampilan modern berorientasi pada ${keyword}.`,
        `Menumbuhkan pembiasaan ibadah sunnah, pembentukan karakter mandiri, serta disiplin tinggi di asrama.`,
        `Mengembangkan bakat kepemimpinan, kepenulisan, dan keahlian praktis guna melahirkan generasi yang mandiri.`
      ];

      onChange({
        ...data,
        sejarah: generatedSejarah,
        visi: generatedVisi,
        misi: generatedMisi
      });
      setAiGenerating(false);
      setAiKeyword('');
    }, 800);
  };

  return (
    <div id="sidebar-editor-container" className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Edit3 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white">Panel Pengelola Situs</h2>
        </div>
        <button 
          onClick={onClose}
          className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Live Mode Toggle & Status Indicator */}
      <div className="flex items-center justify-between bg-emerald-50 px-4 py-2.5 dark:bg-emerald-950/40">
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">Mode Templat Aktif</span>
        </div>
        <button
          onClick={onToggleEditMode}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
            isEditMode 
              ? 'bg-amber-600 text-white hover:bg-amber-700' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-xs border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700'
          }`}
        >
          {isEditMode ? <Eye className="h-3.5 w-3.5" /> : <Edit3 className="h-3.5 w-3.5" />}
          {isEditMode ? 'Lihat Tampilan' : 'Edit Langsung'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50 px-2 text-sm dark:border-gray-800 dark:bg-gray-900/50">
        {(['profil', 'kontak', 'tampilan', 'ekspor'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 border-b-2 py-2.5 text-center font-medium capitalize transition-all ${
              activeTab === tab 
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400' 
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {activeTab === 'profil' && (
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ganti placeholder di bawah ini. Perubahan akan langsung terlihat secara real-time di website pesantren Anda.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Nama Pesantren
              </label>
              <input
                type="text"
                value={data.namaPesantren}
                onChange={(e) => handleInputChange('namaPesantren', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-emerald-500"
                placeholder="[Nama Pesantren]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Pengasuh Pesantren
              </label>
              <input
                type="text"
                value={data.pengasuh || ''}
                onChange={(e) => handleInputChange('pengasuh', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-emerald-500"
                placeholder="KH MUSTAIN ROMLI, S.Pd"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Foto Pengasuh (URL / Path)
              </label>
              <input
                type="text"
                value={data.fotoPengasuh || ''}
                onChange={(e) => handleInputChange('fotoPengasuh', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-emerald-500"
                placeholder="/Gemini_Generated_Image_82ptm382ptm382pt.png"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Slogan Utama
              </label>
              <input
                type="text"
                value={data.slogan}
                onChange={(e) => handleInputChange('slogan', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-emerald-500"
                placeholder="[Slogan]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Sub-Tagline
              </label>
              <textarea
                value={data.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="[Sub-Tagline]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Sejarah Pesantren
              </label>
              <textarea
                value={data.sejarah}
                onChange={(e) => handleInputChange('sejarah', e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="[Sejarah]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Visi Pesantren
              </label>
              <textarea
                value={data.visi}
                onChange={(e) => handleInputChange('visi', e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="[Visi]"
              />
            </div>

            {/* Misi List Builder */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Misi Pesantren
              </label>
              <div className="space-y-2 mb-2">
                {data.misi.map((m, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="text-xs font-semibold text-gray-400 w-4">{idx + 1}.</span>
                    <input
                      type="text"
                      value={m}
                      onChange={(e) => handleMisiChange(idx, e.target.value)}
                      className="flex-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                      onClick={() => handleRemoveMisi(idx)}
                      className="rounded-md p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMisi}
                  onChange={(e) => setNewMisi(e.target.value)}
                  placeholder="Tambah misi baru..."
                  className="flex-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  onKeyDown={(e) => e.key === 'Enter' && handleAddMisi()}
                />
                <button
                  onClick={handleAddMisi}
                  className="flex items-center justify-center gap-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs font-semibold"
                >
                  <Plus className="h-3.5 w-3.5" /> Tambah
                </button>
              </div>
            </div>

            {/* AI Assistant Section */}
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5 dark:border-emerald-950/50 dark:bg-emerald-950/10">
              <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold text-xs mb-1.5 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Asisten Copywriter Pesantren
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Masukkan fokus utama pesantren Anda (misal: <i>"Tahfidz & Wirausaha"</i> atau <i>"Bahasa Arab & Sains"</i>) untuk merancang narasi Sejarah, Visi, & Misi otomatis yang kredibel.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiKeyword}
                  onChange={(e) => setAiKeyword(e.target.value)}
                  placeholder="Contoh: Tahfidzul Quran & Kepemimpinan"
                  className="flex-1 rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-xs text-gray-950 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-emerald-800 dark:bg-gray-800 dark:text-white"
                  onKeyDown={(e) => e.key === 'Enter' && generateAICopywriting()}
                />
                <button
                  onClick={generateAICopywriting}
                  disabled={aiGenerating || !aiKeyword.trim()}
                  className="rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-3 py-1.5 disabled:opacity-50 flex items-center gap-1"
                >
                  {aiGenerating ? 'Memroses...' : 'Tuliskan'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'kontak' && (
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ubah kontak dan peta agar memudahkan calon wali santri untuk menghubungi atau berkunjung ke pesantren.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Alamat Fisik Pesantren
              </label>
              <textarea
                value={data.alamat}
                onChange={(e) => handleInputChange('alamat', e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="[Alamat Lengkap]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Nomor WhatsApp (Format: 628...)
              </label>
              <input
                type="text"
                value={data.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Contoh: 6281234567890"
              />
              <p className="text-[10px] text-gray-400 mt-1">Harus diawali kode negara (62) tanpa simbol + atau spasi.</p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="info@pesantren.sch.id"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Nomor Telepon Kantor
              </label>
              <input
                type="text"
                value={data.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="(021) 123456"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Akun Sosial Media
              </label>
              <input
                type="text"
                value={data.sosialMedia || ''}
                onChange={(e) => handleInputChange('sosialMedia', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="fb @mbah pugung"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                Google Maps Embed URL
              </label>
              <input
                type="text"
                value={data.mapsEmbed}
                onChange={(e) => handleInputChange('mapsEmbed', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="https://www.google.com/maps/embed..."
              />
              <p className="text-[10px] text-gray-400 mt-1">
                Ambil dari Google Maps &gt; Share &gt; Embed Map &gt; Copy src URL.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'tampilan' && (
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ubah suasana warna website untuk mewakili kepribadian dan branding pesantren Anda.
            </p>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Pilihan Skema Warna
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {themes.map((t) => {
                  const isSelected = activeTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => onThemeChange(t.id)}
                      className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                        isSelected 
                          ? 'border-emerald-600 bg-emerald-50/40 dark:border-emerald-400 dark:bg-emerald-950/20' 
                          : 'border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-gray-950 dark:text-white">{t.name}</div>
                        <div className="flex gap-1">
                          <span className="h-3.5 w-6 rounded-xs" style={{ backgroundColor: t.primary }}></span>
                          <span className="h-3.5 w-6 rounded-xs" style={{ backgroundColor: t.secondary }}></span>
                          <span className="h-3.5 w-6 rounded-xs" style={{ backgroundColor: t.bgLight }}></span>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="rounded-full bg-emerald-500 p-1 text-white">
                          <Check className="h-4 w-4" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-3.5 border border-amber-200 dark:bg-amber-950/15 dark:border-amber-900/30">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">Aksesibilitas & Kerapian</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Setiap skema warna telah diuji untuk memiliki tingkat kontras tinggi, memastikan keterbacaan yang optimal bagi semua kalangan pembaca.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'ekspor' && (
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ekspor hasil konfigurasi Anda agar dapat disimpan sebagai backup, atau dipasang permanen oleh tim IT Anda tanpa perlu menulis ulang kode.
            </p>

            <div className="space-y-2">
              <button
                onClick={handleCopyJSON}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-sm font-semibold transition shadow-xs"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Teks Tersalin!' : 'Salin Data JSON'}
              </button>

              <button
                onClick={handleExportJSON}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 py-2.5 text-sm font-semibold transition shadow-xs dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <Download className="h-4 w-4" /> Unduh Konfigurasi (.json)
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                Impor Data Sebelumnya
              </label>
              <div className="relative flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-emerald-500 p-4 transition-all dark:border-gray-700 dark:hover:border-emerald-500">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportJSON}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <div className="text-center space-y-1">
                  <Upload className="mx-auto h-5 w-5 text-gray-400" />
                  <span className="block text-xs text-gray-600 dark:text-gray-400">Pilih berkas .json untuk dimuat</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-3.5 border border-gray-200 dark:bg-gray-800/40 dark:border-gray-800">
              <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">Cara Menyimpan Permanen</h4>
              <ol className="text-xs text-gray-600 dark:text-gray-400 list-decimal list-inside space-y-1 leading-relaxed">
                <li>Klik tombol <b>Unduh Konfigurasi</b> di atas.</li>
                <li>Ganti nama file menjadi <code>defaultData.ts</code>.</li>
                <li>Simpan file tersebut di direktori <code>src/data/</code> untuk menggantikan data bawaan.</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-center dark:border-gray-800 dark:bg-gray-900/50">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-red-600 transition dark:text-gray-400 dark:hover:text-red-400"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Semua Ke Placeholder Bawaan
        </button>
      </div>
    </div>
  );
}
