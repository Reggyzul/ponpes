import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public';

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}

async function convertAll() {
  const files = getFiles(publicDir);
  const supportedExtensions = ['.png', '.jpg', '.jpeg', '.jfif'];

  console.log(`Menemukan ${files.length} file di folder public.`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (supportedExtensions.includes(ext)) {
      const outputName = file.substring(0, file.length - ext.length) + '.avif';
      
      try {
        console.log(`Mengonversi: ${file} -> ${outputName}`);
        await sharp(file)
          .avif({ quality: 80 })
          .toFile(outputName);
        console.log(`Berhasil mengonversi: ${outputName}`);
      } catch (err) {
        console.error(`Gagal mengonversi ${file}:`, err);
      }
    }
  }
}

convertAll();
