import { Jimp } from 'jimp';
import path from 'path';
import fs from 'fs';

async function removeBackground() {
  const inputPath = path.resolve('public', 'final logo.jpg');
  const outPath1 = path.resolve('public', 'logo.png');
  const outPath2 = path.resolve('public', 'images', 'logo.png');
  const outPath3 = path.resolve('public', 'final-logo-transparent.png');

  console.log('Reading image:', inputPath);
  const image = await Jimp.read(inputPath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // Background color sample from top-left corner
  const cornerColor = image.getPixelColor(2, 2);
  const bgR = (cornerColor >> 24) & 0xFF;
  const bgG = (cornerColor >> 16) & 0xFF;
  const bgB = (cornerColor >> 8) & 0xFF;

  console.log(`Sampled background RGB: (${bgR}, ${bgG}, ${bgB})`);

  // Flood fill / BFS from outer border pixels to remove background
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Add outer perimeter to queue
  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    queue.push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    queue.push(0, y);
    queue.push(width - 1, y);
  }

  const threshold = 45; // Color tolerance

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];

    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const idx = y * width + x;
    if (visited[idx]) continue;
    visited[idx] = 1;

    const pixelColor = image.getPixelColor(x, y);
    const r = (pixelColor >> 24) & 0xFF;
    const g = (pixelColor >> 16) & 0xFF;
    const b = (pixelColor >> 8) & 0xFF;

    const diffR = Math.abs(r - bgR);
    const diffG = Math.abs(g - bgG);
    const diffB = Math.abs(b - bgB);

    if (diffR < threshold && diffG < threshold && diffB < threshold) {
      // Set to fully transparent
      image.setPixelColor(0x00000000, x, y);

      // Add 4-neighbors to queue
      if (x > 0 && !visited[idx - 1]) queue.push(x - 1, y);
      if (x < width - 1 && !visited[idx + 1]) queue.push(x + 1, y);
      if (y > 0 && !visited[idx - width]) queue.push(x, y - 1);
      if (y < height - 1 && !visited[idx + width]) queue.push(x, y + 1);
    }
  }

  // Remove small stray watermark icon near bottom right corner (x > 80% width, y > 80% height)
  for (let x = Math.floor(width * 0.8); x < width; x++) {
    for (let y = Math.floor(height * 0.8); y < height; y++) {
      // If pixel is outside the main emblem border (distance from center > radius)
      const centerX = width / 2;
      const centerY = height / 2;
      const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      if (dist > width * 0.42) {
        image.setPixelColor(0x00000000, x, y);
      }
    }
  }

  await image.write(outPath1);
  await image.write(outPath2);
  await image.write(outPath3);

  console.log('Transparent logo saved successfully to:');
  console.log(' -', outPath1);
  console.log(' -', outPath2);
  console.log(' -', outPath3);
}

removeBackground().catch(err => {
  console.error('Error removing background:', err);
  process.exit(1);
});
