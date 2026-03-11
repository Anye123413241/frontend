// Configuración para despliegue
// Después de deployar el backend en Railway, reemplaza con tu URL
// Ejemplo: https://rompecabezas-production.up.railway.app
window.SOCKET_URL = window.SOCKET_URL || 
  (window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : 'https://TU-BACKEND.railway.app');
