import { 
  PesantrenData, 
  ProgramPendidikan, 
  Keunggulan, 
  Fasilitas, 
  Kegiatan, 
  Testimoni, 
  BeritaArtikel, 
  AlurPendaftaran, 
  FAQItem, 
  GaleriItem 
} from '../types';

export const defaultProfil: PesantrenData = {
  namaPesantren: "BAROKATUL QODIRI",
  slogan: "Membentuk generasi Intelektual, Religius dan Berkarakter",
  tagline: "Pendidikan Berbasis Kitab-Kitab Salaf Terintegrasi Pengembangan Berbasis Keterampilan di Pesisir Barat.",
  sejarah: "Ponpes barokatul qodiri di dirikan pada tahun 2002 berawal dari tanah wakaf dari keluarga habib alwi asegaf, pada awal berdiri pondok pesantren barokatul qodiri memiliki 7 santri perintis yang selain mengaji juga ikut membantu dalam pembangunan ponpes barokatul qodiri. Sekarang ponpes barokatul qodiri sudah berkembang bukan hanya dari bangunan makin banyak namun santri dan lembagapun juga bertambah baik formal ra, mi, mts dan ma maupun nonformal majelis taklim dan dzikir manaqib.",
  visi: "Membentuk generasi Intelektual, Religius dan Berkarakter",
  misi: [
    "Meningkatkan pemahaman dan pendalaman kitab-kitab salaf, serta mengintegrasi pengembangan berbasis keterampilan.",
    "Mewujudkan pribadi yang mengamalkan ajaran islam dan berasas Ahlussunnah Waljama’ah.",
    "Membentuk Pribadi yang berakhlak mulia dan berprestasi tinggi."
  ],
  alamat: "Jl. Pesantren Desa Padang Rindu, Kec. Pesisir Utara, Kab. Pesisir Barat, Lampung",
  whatsapp: "6282286859292",
  email: "info@barokatulqodiri.ponpes.id",
  phone: "+62 822-8685-9292",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.65997230495!2d103.81577965!3d-5.1852109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e472df37f81fbc1%3A0xe54d90fcfd84dcf6!2sPesisir%20Utara%2C%20Kabupaten%20Pesisir%20Barat%2C%20Lampung!5e0!3m2!1sid!4v1710000000000!5m2!1sid",
  pengasuh: "KH MUSTAIN ROMLI, S.Pd",
  fotoPengasuh: "/Gemini_Generated_Image_82ptm382ptm382pt.avif",
  sosialMedia: "fb @mbah pugung"
};

export const defaultPrograms: ProgramPendidikan[] = [
  {
    id: "prog-1",
    nama: "Madrasah Formal (RA, MI, MTs, MA)",
    deskripsi: "Pendidikan sekolah terakreditasi nasional mulai dari Raudhatul Athfal (RA), Madrasah Ibtidaiyah (MI), Madrasah Tsanawiyah (MTs), hingga Madrasah Aliyah (MA) yang memadukan sains, teknologi, dan akhlakul karimah.",
    icon: "GraduationCap"
  },
  {
    id: "prog-2",
    nama: "Kajian Kitab Salaf (Kitab Kuning)",
    deskripsi: "Pendalaman komprehensif kitab-kitab klasik mu'tabarah dalam bidang Fiqih, Nahwu Sharaf, Tauhid, Tafsir, dan Akhlak guna mencetak generasi mutafaqqih fiddin.",
    icon: "Scroll"
  },
  {
    id: "prog-3",
    nama: "Pengembangan Berbasis Keterampilan",
    deskripsi: "Integrasi vokasional dan keterampilan digital santri melalui sarana Laboratorium Komputer dan praktik lapangan mandiri.",
    icon: "Combine"
  },
  {
    id: "prog-4",
    nama: "Majelis Taklim (Nonformal)",
    deskripsi: "Wadah belajar kajian agama Islam bagi santri dan masyarakat luas guna mewujudkan kehidupan berlandaskan nilai-nilai Al-Qur'an dan Sunnah.",
    icon: "Users"
  },
  {
    id: "prog-5",
    nama: "Majelis Dzikir & Manaqib",
    deskripsi: "Halaqah dzikir spiritual dan pembacaan Manaqib rutin sebagai sarana penguatan batin, pembinaan karakter Islami yang kokoh, dan berazas Ahlussunnah Waljama'ah.",
    icon: "Sparkles"
  }
];

export const defaultKeunggulan: Keunggulan[] = [
  {
    id: "keunggulan-1",
    judul: "Pendidikan Kaffah Terintegrasi",
    deskripsi: "Memadukan pendidikan formal umum dengan khazanah keilmuan pesantren salaf secara harmonis.",
    icon: "Combine"
  },
  {
    id: "keunggulan-2",
    judul: "Keluarga Sanad Keilmuan Jelas",
    deskripsi: "Dibimbing langsung oleh KH Mustain Romli, S.Pd bersama asatidzah berkompeten yang mengedepankan keteladanan akhlak mulia.",
    icon: "Award"
  },
  {
    id: "keunggulan-3",
    judul: "Berprestasi Tinggi & Kompetitif",
    deskripsi: "Membuktikan diri bersaing di kancah kabupaten hingga provinsi dengan raihan juara olimpiade sains terintegrasi.",
    icon: "Compass"
  },
  {
    id: "keunggulan-4",
    judul: "Asas Ahlussunnah Waljama'ah",
    deskripsi: "Menanamkan pemahaman keagamaan moderat yang toleran, kokoh, dan berakhlak mulia di tengah masyarakat.",
    icon: "Building"
  }
];

export const defaultFasilitas: Fasilitas[] = [
  {
    id: "fasilitas-1",
    nama: "Masjid Barokatul Qodiri",
    deskripsi: "Pusat ibadah sholat berjamaah harian, majelis dzikir, pembacaan manaqib, serta kegiatan pengajian asrama.",
    imageUrl: "/images/masjid.avif"
  },
  {
    id: "fasilitas-2",
    nama: "Asrama Santri yang Representatif",
    deskripsi: "Hunian asrama yang dirancang bersih, tertib, dan aman guna melatih kedisiplinan dan kemandirian harian.",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fasilitas-3",
    nama: "Ruang Kelas Pembelajaran Kondusif",
    deskripsi: "Fasilitas ruang belajar bagi jenjang RA, MI, MTs, dan MA dengan pencahayaan dan sirkulasi yang mendukung kenyamanan.",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fasilitas-4",
    nama: "Laboratorium Komputer",
    deskripsi: "Mendukung pengembangan keterampilan berbasis komputer untuk menyiapkan santri yang melek teknologi digital modern.",
    imageUrl: "/labkom.avif"
  },
  {
    id: "fasilitas-5",
    nama: "Lapangan Olahraga Luas",
    deskripsi: "Sarana bermain dan berolahraga guna menjaga stamina jasmani santri agar senantiasa sehat dan bugar.",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fasilitas-6",
    nama: "Aula Serbaguna",
    deskripsi: "Gedung utama untuk menyelenggarakan pengajian akbar, pertemuan wali santri, pentas seni, dan orientasi.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800"
  }
];

export const defaultKegiatan: Kegiatan[] = [
  {
    id: "keg-1",
    nama: "Sholat Tahajud & Pembiasaan Batin",
    waktu: "03.30 - 04.00",
    deskripsi: "Bangun malam bersama untuk melaksanakan sholat tahajud, istighfar, dan dzikir fajar di masjid pesantren.",
    imageUrl: "/tahajud.avif"
  },
  {
    id: "keg-2",
    nama: "Sholat Subuh & Ngaji Subuh",
    waktu: "04.00 - 06.00",
    deskripsi: "Sholat subuh berjamaah dilanjutkan pengajian al-quran dan setoran hafalan harian santri.",
    imageUrl: "/subuh.avif"
  },
  {
    id: "keg-3",
    nama: "Pembelajaran Madrasah Formal (RA/MI/MTs/MA)",
    waktu: "07.30 - 12.55",
    deskripsi: "Santri mengikuti kegiatan belajar mengajar sekolah formal untuk menguasai ilmu sains dan pengetahuan umum.",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "keg-4",
    nama: "Ngaji Kitab Salafiyah",
    waktu: "13.20 - 14.00 & 20.00 - 21.30",
    deskripsi: "Mengkaji kitab-kitab klasik kuning bersama ustadz pembimbing, mendalami hukum fiqih, tafsir, dan tauhid.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "keg-5",
    nama: "Sekolah Diniah Madrasah",
    waktu: "16.00 - 17.00",
    deskripsi: "Pendidikan keagamaan khusus sore hari untuk memperkuat dasar tata bahasa Arab (Nahwu & Sharaf).",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
  }
];

export const defaultTestimoni: Testimoni[] = [
  {
    id: "testi-1",
    nama: "H. Abdullah Rahman",
    peran: "Wali Santri Kelas XII MA",
    teks: "Alhamdulillah sejak mondok di Barokatul Qodiri, akhlak putra saya menjadi sangat santun, berbakti kepada orang tua, dan memiliki kemandirian yang luar biasa. Sangat bersyukur.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    isExample: true
  },
  {
    id: "testi-2",
    nama: "Ustadz M. Ilyas",
    peran: "Alumni Ponpes Barokatul Qodiri",
    teks: "Pondok ini menanamkan cinta mendalam terhadap Kitab-Kitab Salaf dan Dzikir Manaqib, yang menjadi bekal saya mengabdi di tengah masyarakat sekarang berasas Ahlussunnah Waljama’ah.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    isExample: true
  }
];

export const defaultBerita: BeritaArtikel[] = [
  {
    id: "berita-1",
    judul: "Juara 1 OMI Biologi Terintegrasi Kemenag Pesisir Barat Tahun 2025",
    kategori: "Prestasi",
    tanggal: "12 Februari 2025",
    ringkasan: "Prestasi gemilang diraih oleh santri Barokatul Qodiri yang berhasil menduduki peringkat pertama dalam kompetisi bergengsi OMI Biologi Terintegrasi.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "berita-2",
    judul: "Raihan Juara 2 OMI Kimia Terintegrasi Kemenag Pesisir Barat Tahun 2025",
    kategori: "Prestasi",
    tanggal: "13 Februari 2025",
    ringkasan: "Delegasi sains pesantren membuktikan keunggulan dengan menyabet trofi Juara 2 OMI Kimia di tingkat Kemenag Pesisir Barat.",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "berita-3",
    judul: "Sukses Sabet Juara 3 OMI Ekonomi Terintegrasi Kemenag Pesisir Barat Tahun 2025",
    kategori: "Prestasi",
    tanggal: "14 Februari 2025",
    ringkasan: "Menggenapi kejuaraan, santri Barokatul Qodiri meraih Juara 3 OMI Ekonomi dalam persaingan ketat madrasah se-kabupaten.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  }
];

export const defaultAlur: AlurPendaftaran[] = [
  {
    step: 1,
    judul: "Registrasi Online / Hubungi WA",
    deskripsi: "Mengisi formulir online melalui website ini atau langsung menghubungi nomor WhatsApp Center kami."
  },
  {
    step: 2,
    judul: "Tes Lisan & Wawancara",
    deskripsi: "Calon santri mengikuti tes membaca Al-Qur'an dasar, materi tajwid, serta wawancara kesiapan orang tua."
  },
  {
    step: 3,
    judul: "Pengumuman & Daftar Ulang",
    deskripsi: "Hasil seleksi akan disampaikan langsung, dilanjutkan administrasi berkas dan daftar ulang asrama."
  },
  {
    step: 4,
    judul: "Masuk Asrama & Orientasi",
    deskripsi: "Santri baru dipandu memasuki asrama Barokatul Qodiri dan mengikuti masa Ta'aruf orientasi nilai kepesantrenan."
  }
];

export const defaultFAQ: FAQItem[] = [
  {
    id: "faq-1",
    pertanyaan: "Bagaimana cara melakukan pendaftaran online?",
    jawaban: "Silakan isi formulir pendaftaran di bagian bawah halaman ini. Data Anda akan terekam, kemudian panitia akan menghubungi Anda melalui nomor WhatsApp yang diberikan."
  },
  {
    id: "faq-2",
    pertanyaan: "Apakah ada biaya pendaftaran?",
    jawaban: "Informasi detail mengenai administrasi, seragam, dan SPP bulanan asrama dapat langsung ditanyakan kepada petugas administrasi kami melalui tautan WA chat."
  }
];

export const defaultGaleri: GaleriItem[] = [
  {
    id: "gal-1",
    judul: "Keluarga Besar Barokatul Qodiri",
    kategori: "Acara",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-2",
    judul: "Pengajian Rutin Majelis Taklim",
    kategori: "Kegiatan",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800"
  }
];
