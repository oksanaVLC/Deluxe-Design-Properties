const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Carpeta de imágenes originales
const imagesDir = path.join(__dirname, "src/assets/images");

// Extensiones de imágenes a procesar
const extensions = [".jpg", ".jpeg", ".png"];

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error("Error leyendo la carpeta de imágenes:", err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();

    if (extensions.includes(ext)) {
      const inputPath = path.join(imagesDir, file);

      // Cambiar extensión a .webp
      const outputPath = path.join(imagesDir, file.replace(ext, ".webp"));

      sharp(inputPath)
        .resize({ width: 1920 })
        .webp({ quality: 70 })
        .toFile(outputPath)
        .then((info) => {
          console.log(
            `✅ ${file} optimizada -> ${path.basename(outputPath)} (${
              info.size
            } bytes)`
          );
        })
        .catch((err) => {
          console.error(`❌ Error al procesar ${file}:`, err);
        });
    }
  });
});
