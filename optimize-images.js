// optimize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets/images";
const outputDir = "./dist/assets/images";

// Crea la carpeta de salida si no existe
fs.mkdirSync(outputDir, { recursive: true });

// Lista de formatos a procesar
const formats = [".jpg", ".jpeg", ".png"];

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const inputPath = path.join(inputDir, file);

    // Solo procesa imágenes
    if (formats.includes(ext)) {
      const outputPath = path.join(outputDir, file.replace(ext, ".webp"));

      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true }) // ajusta el tamaño máximo si quieres
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✅ Optimized: ${file} → ${path.basename(outputPath)}`);
    }
  }
}

optimizeImages().catch((err) =>
  console.error("❌ Error optimizing images:", err)
);
