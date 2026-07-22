import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, Phone, AlertCircle, RefreshCw, Printer, User, Award } from 'lucide-react';
import { RegistrasiSiswa, ProgramPendidikan } from '../types';

interface RegistrationFormProps {
  programs: ProgramPendidikan[];
  whatsappNumber: string;
  namaPesantren: string;
}

export default function RegistrationForm({ programs, whatsappNumber, namaPesantren }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrasiSiswa>({
    namaLengkap: '',
    jenisKelamin: 'Laki-laki',
    tempatLahir: '',
    tanggalLahir: '',
    namaWali: '',
    noHpWali: '',
    programPilihan: programs[0]?.nama || 'Program Tahfidzul Qur\'an',
    alamatLengkap: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrasiSiswa, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regCard, setRegCard] = useState<{
    idReg: string;
    tanggalDaftar: string;
    data: RegistrasiSiswa;
  } | null>(null);

  const validateForm = (): boolean => {
    const tempErrors: Partial<Record<keyof RegistrasiSiswa, string>> = {};
    if (!formData.namaLengkap.trim()) tempErrors.namaLengkap = 'Nama lengkap wajib diisi.';
    if (!formData.tempatLahir.trim()) tempErrors.tempatLahir = 'Tempat lahir wajib diisi.';
    if (!formData.tanggalLahir) tempErrors.tanggalLahir = 'Tanggal lahir wajib diisi.';
    if (!formData.namaWali.trim()) tempErrors.namaWali = 'Nama wali wajib diisi.';
    if (!formData.alamatLengkap.trim()) tempErrors.alamatLengkap = 'Alamat lengkap wajib diisi.';
    
    // Validate Indonesian WhatsApp/Phone
    const phoneRegex = /^(08|628|\+628)[0-9]{8,13}$/;
    if (!formData.noHpWali.trim()) {
      tempErrors.noHpWali = 'No HP Wali wajib diisi.';
    } else if (!phoneRegex.test(formData.noHpWali.replace(/\s+/g, ''))) {
      tempErrors.noHpWali = 'Nomor HP tidak valid. Masukkan nomor WhatsApp aktif (contoh: 08123456789).';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof RegistrasiSiswa]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Mock API Submission call
    setTimeout(() => {
      const regId = `PSB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const today = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setRegCard({
        idReg: regId,
        tanggalDaftar: today,
        data: formData
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setFormData({
      namaLengkap: '',
      jenisKelamin: 'Laki-laki',
      tempatLahir: '',
      tanggalLahir: '',
      namaWali: '',
      noHpWali: '',
      programPilihan: programs[0]?.nama || 'Program Tahfidzul Qur\'an',
      alamatLengkap: ''
    });
    setRegCard(null);
    setErrors({});
  };

  const handleSendToWhatsApp = () => {
    if (!regCard) return;
    const { idReg, data } = regCard;
    const msg = `Assalamu'alaikum Warahmatullahi Wabarakatuh.%0A%0A*KONFIRMASI PENDAFTARAN SANTRI BARU*%0A---------------------------------------%0A*No. Registrasi:* ${idReg}%0A*Nama Calon Santri:* ${data.namaLengkap}%0A*Jenis Kelamin:* ${data.jenisKelamin}%0A*Program Pilihan:* ${data.programPilihan}%0A*Nama Wali:* ${data.namaWali}%0A*No. HP Wali:* ${data.noHpWali}%0A*Alamat:* ${data.alamatLengkap}%0A---------------------------------------%0AMohon panduan untuk tahapan ujian seleksi dan administrasi berkas selanjutnya. Syukran Jazakumullah Khairan.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="registration" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Pendaftaran Santri Baru (PSB)
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Formulir Registrasi Online
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Isi data calon santri secara lengkap dan akurat di bawah ini. Pastikan nomor kontak wali aktif untuk koordinasi tes seleksi.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="rounded-3xl border border-gray-100 bg-gray-50/50 p-6 md:p-10 dark:border-gray-800 dark:bg-gray-900/30 shadow-xs">
          
          {!regCard ? (
            /* Input Form Screen */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category: Data Diri */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <User className="h-4 w-4" /> 1. Identitas Calon Santri
                </h3>
                <hr className="border-gray-200 dark:border-gray-800" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Nama Lengkap Santri
                    </label>
                    <input
                      type="text"
                      name="namaLengkap"
                      value={formData.namaLengkap}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:bg-gray-800 dark:text-white ${
                        errors.namaLengkap ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    {errors.namaLengkap && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.namaLengkap}
                      </p>
                    )}
                  </div>

                  {/* Jenis Kelamin */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Jenis Kelamin
                    </label>
                    <select
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Laki-laki">Laki-laki (Santriwan)</option>
                      <option value="Perempuan">Perempuan (Santriwati)</option>
                    </select>
                  </div>

                  {/* Tempat Lahir */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Tempat Lahir
                    </label>
                    <input
                      type="text"
                      name="tempatLahir"
                      value={formData.tempatLahir}
                      onChange={handleChange}
                      placeholder="Contoh: Bandung"
                      className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:bg-gray-800 dark:text-white ${
                        errors.tempatLahir ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    {errors.tempatLahir && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.tempatLahir}
                      </p>
                    )}
                  </div>

                  {/* Tanggal Lahir */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      name="tanggalLahir"
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:bg-gray-800 dark:text-white ${
                        errors.tanggalLahir ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    {errors.tanggalLahir && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.tanggalLahir}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Category: Wali */}
              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Award className="h-4 w-4" /> 2. Wali & Program Pilihan
                </h3>
                <hr className="border-gray-200 dark:border-gray-800" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nama Wali */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Nama Orang Tua / Wali
                    </label>
                    <input
                      type="text"
                      name="namaWali"
                      value={formData.namaWali}
                      onChange={handleChange}
                      placeholder="Masukkan nama ayah/ibu/wali"
                      className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:bg-gray-800 dark:text-white ${
                        errors.namaWali ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    {errors.namaWali && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.namaWali}
                      </p>
                    )}
                  </div>

                  {/* No HP Wali */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      No. WhatsApp Aktif Wali
                    </label>
                    <input
                      type="text"
                      name="noHpWali"
                      value={formData.noHpWali}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
                      className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:bg-gray-800 dark:text-white ${
                        errors.noHpWali ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    {errors.noHpWali && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.noHpWali}
                      </p>
                    )}
                  </div>

                  {/* Program Pilihan */}
                  <div className="space-y-1 md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Program Pilihan Utama
                    </label>
                    <select
                      name="programPilihan"
                      value={formData.programPilihan}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                      {programs.map((p) => (
                        <option key={p.id} value={p.nama}>{p.nama}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Alamat Lengkap */}
              <div className="space-y-1 pt-2">
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Alamat Rumah Lengkap
                </label>
                <textarea
                  name="alamatLengkap"
                  value={formData.alamatLengkap}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Masukkan jalan, dusun, RT/RW, kecamatan, kabupaten, provinsi"
                  className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs focus:border-emerald-500 focus:outline-hidden dark:bg-gray-800 dark:text-white ${
                    errors.alamatLengkap ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  }`}
                />
                {errors.alamatLengkap && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.alamatLengkap}
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-4 shadow-lg shadow-emerald-900/10 transition-all hover:scale-101 active:scale-99 disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      Memverifikasi Data Calon Santri...
                    </>
                  ) : (
                    <>
                      <FileText className="h-5 w-5" />
                      Kirim Formulir Pendaftaran
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Registration Card Success Screen */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              {/* Top Banner */}
              <div className="text-center space-y-2">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-extrabold text-emerald-800 dark:text-emerald-400">Pendaftaran Berhasil Dikirim!</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Data calon santri baru telah terdaftar sementara di sistem penerimaan. Berikut adalah kartu registrasi Anda.
                </p>
              </div>

              {/* Visual Card (Printed) */}
              <div 
                id="printable-reg-card"
                className="bg-white border-2 border-dashed border-emerald-300 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm text-gray-900 dark:bg-gray-950 dark:border-emerald-800 dark:text-gray-100 relative overflow-hidden"
              >
                {/* Background watermarked symbol */}
                <div className="absolute -bottom-10 -right-10 text-emerald-500/5 select-none pointer-events-none transform -rotate-12">
                  <FileText className="h-64 w-64" />
                </div>

                {/* Header Card */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-emerald-50 pb-4 dark:border-gray-800 gap-2">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-emerald-800 dark:text-emerald-400 uppercase">{namaPesantren}</h4>
                    <p className="text-[10px] text-gray-400">Kartu Tanda Bukti Registrasi PSB (Sementara)</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 text-center dark:bg-emerald-950/40 dark:border-emerald-900">
                    <span className="block text-[9px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">No. Registrasi</span>
                    <span className="font-mono text-xs font-extrabold text-emerald-950 dark:text-emerald-100">{regCard.idReg}</span>
                  </div>
                </div>

                {/* Details list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Nama Lengkap Santri</span>
                    <span className="font-semibold text-sm text-gray-950 dark:text-white">{regCard.data.namaLengkap}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Jenis Kelamin</span>
                    <span className="font-semibold text-sm text-gray-950 dark:text-white">{regCard.data.jenisKelamin}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Tempat, Tanggal Lahir</span>
                    <span className="font-semibold text-sm text-gray-950 dark:text-white">{regCard.data.tempatLahir}, {regCard.data.tanggalLahir}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Program Pilihan Utama</span>
                    <span className="font-semibold text-sm text-emerald-700 dark:text-emerald-400">{regCard.data.programPilihan}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Nama Wali</span>
                    <span className="font-semibold text-sm text-gray-950 dark:text-white">{regCard.data.namaWali}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">No. WhatsApp Wali</span>
                    <span className="font-semibold text-sm text-gray-950 dark:text-white">{regCard.data.noHpWali}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Alamat Lengkap</span>
                    <span className="font-semibold text-sm text-gray-950 dark:text-white leading-relaxed">{regCard.data.alamatLengkap}</span>
                  </div>
                </div>

                <div className="border-t border-emerald-50 dark:border-gray-800 pt-4 text-[10px] text-gray-500 dark:text-gray-400 space-y-1">
                  <span className="block font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Langkah Selanjutnya:</span>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Kirimkan foto/screenshot kartu bukti registrasi ini ke WhatsApp Panitia melalui tombol di bawah.</li>
                    <li>Siapkan dokumen fotokopi KK, Akta Kelahiran, dan Ijazah terakhir untuk tahap ujian wawancara luring.</li>
                    <li>Jadwal pelaksanaan seleksi lisan dan tilawah akan diinfokan via pesan tertulis WhatsApp.</li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleSendToWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3 px-4 shadow-md shadow-emerald-950/10 cursor-pointer"
                >
                  <Phone className="h-5 w-5" /> Kirim Bukti ke WhatsApp
                </button>

                <button
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-base py-3 px-4 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <Printer className="h-5 w-5" /> Cetak Kartu PSB
                </button>

                <button
                  onClick={handleReset}
                  className="rounded-xl border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 font-semibold text-base py-3 px-6 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30 cursor-pointer"
                >
                  Daftar Lagi
                </button>
              </div>

            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
