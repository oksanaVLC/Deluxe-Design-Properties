const sharp = require("sharp");

sharp("src\\assets\\images\\3.jpg")
  .resize({ width: 1920 }) // <-- aquí agregas resize
  .webp({ quality: 70 }) // opcional: calidad del webp
  .toFile("src\\assets\\images\\3-small.webp", (err, info) => {
    if (err) {
      console.error("Error al convertir la imagen:", err);
    } else {
      console.log("Imagen redimensionada y convertida con éxito:", info);
    }
  });
