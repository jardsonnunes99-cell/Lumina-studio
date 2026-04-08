import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const FOLDERS_TO_OPTIMIZE = [
  'public/images/fotos_ia',
  'public/images' // for hero-slide*
];

async function optimizeImages() {
  for (const folder of FOLDERS_TO_OPTIMIZE) {
    const dirPath = path.resolve(process.cwd(), folder);
    try {
      const files = await fs.readdir(dirPath);
      for (const file of files) {
        if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;
        
        // Skip optimizing images if not needed, but here we process all in those directories.
        // We avoid subdirectories for 'public/images' just match root level there
        const stat = await fs.stat(path.join(dirPath, file));
        if (stat.isDirectory()) continue;

        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const inputPath = path.join(dirPath, file);
        const outputPath = path.join(dirPath, `${name}.webp`);

        console.log(`Optimizing ${file} -> ${name}.webp`);
        await sharp(inputPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80, effort: 4 })
          .toFile(outputPath);
      }
    } catch (err) {
      console.log(`Skipping or error in ${folder}: `, err.message);
    }
  }
}

optimizeImages();
