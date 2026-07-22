export interface PesantrenData {
  namaPesantren: string;
  slogan: string;
  tagline: string;
  sejarah: string;
  visi: string;
  misi: string[];
  alamat: string;
  whatsapp: string;
  email: string;
  phone: string;
  mapsEmbed: string;
  pengasuh?: string;
  fotoPengasuh?: string;
  sosialMedia?: string;
}

export interface ProgramPendidikan {
  id: string;
  nama: string;
  deskripsi: string;
  icon: string;
}

export interface Keunggulan {
  id: string;
  judul: string;
  deskripsi: string;
  icon: string;
}

export interface Fasilitas {
  id: string;
  nama: string;
  deskripsi: string;
  imageUrl: string;
}

export interface Kegiatan {
  id: string;
  nama: string;
  waktu: string;
  deskripsi: string;
  imageUrl: string;
}

export interface Testimoni {
  id: string;
  nama: string;
  peran: string;
  teks: string;
  avatarUrl: string;
  isExample: boolean;
}

export interface BeritaArtikel {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  ringkasan: string;
  imageUrl: string;
}

export interface AlurPendaftaran {
  step: number;
  judul: string;
  deskripsi: string;
}

export interface FAQItem {
  id: string;
  pertanyaan: string;
  jawaban: string;
}

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: string;
  imageUrl: string;
}

export interface RegistrasiSiswa {
  namaLengkap: string;
  jenisKelamin: 'Laki-laki' | 'Perempuan';
  tempatLahir: string;
  tanggalLahir: string;
  namaWali: string;
  noHpWali: string;
  programPilihan: string;
  alamatLengkap: string;
}
