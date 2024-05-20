const {dataBase}  = require('./db'); // Requiere tu archivo de configuración de Sequelize

// Función para verificar la conexión
async function verificarConexion() {
  try {
    // Intenta autenticarte en la base de datos
    await dataBase.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Llamada a la función de verificación
verificarConexion();



// Para verificar la conexión, me muevo hasta la carpeta "src", utilizando cd hasta llegar allí, y luego ejecuto este comando: node testConnectDb.js
