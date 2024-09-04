const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

// Configurar Helmet para usar CSP
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],  // Permitir recursos solo desde el mismo origen
       scriptSrc: ["'self'", "'unsafe-eval'", "https://trusted.cdn.com", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
      styleSrc: ["'self'", "https://trusted.styles.com"],  // Permitir estilos desde el mismo origen y CDN de confianza
      imgSrc: ["'self'", "data:", "https://trusted.images.com"],  // Permitir imágenes desde el mismo origen, datos en línea y CDN de confianza
      connectSrc: ["'self'", "https://www.google-analytics.com", "https://www.googletagmanager.com"],
      fontSrc: ["'self'", "https://fonts.example.com"],  // Permitir fuentes desde el mismo origen y CDN de fuentes de confianza
      frameSrc: ["'none'"],  // Bloquear la inclusión de frames
      objectSrc: ["'none'"],  // Bloquear la inclusión de objetos
      upgradeInsecureRequests: [],  // Forzar la actualización de solicitudes inseguras a seguras
    },
  })
);

// Servir archivos estáticos de la carpeta build
app.use(express.static(path.join(__dirname, '../build')));

// Manejar todas las solicitudes y servir el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


