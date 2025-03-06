# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Instala Jest: Si aún no lo has hecho, instala Jest en tu proyecto. Puedes hacerlo con npm o yarn:
- npm install --save-dev jest @testing-library/react @testing-library/jest-dom


Configura Jest: Si aún no tienes un archivo de configuración de Jest (jest.config.js), puedes crear uno en la raíz de tu proyecto. Puedes configurar Jest según tus necesidades, pero un ejemplo básico de configuración podría ser:

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

Ejecuta las pruebas: Para ejecutar las pruebas, simplemente ejecuta el comando Jest en tu terminal en el directorio de tu proyecto donde se encuentran tus pruebas:

-npx jest