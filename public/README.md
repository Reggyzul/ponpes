# Folder Public Assets

Folder ini digunakan untuk menyimpan asset statis seperti gambar, logo, ikon, dsb.

### Cara Penggunaan:
1. Simpan gambar Anda di folder `public/` atau `public/images/`.
   Contoh: `public/images/logo.png`
2. Panggil gambar di komponen React / HTML langsung menggunakan path dari root (`/`):
   ```tsx
   <img src="/images/logo.png" alt="Logo" />
   ```
