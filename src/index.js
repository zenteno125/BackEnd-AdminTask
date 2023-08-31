<<<<<<< HEAD
require('dotenv').config(); // Cargar las variables de entorno desde .env

const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks'); // Importa las rutas de tareas
const db = require('./database/connection'); // Importa la conexión a la base de datos

const app = express();

// Configura middleware
app.use(bodyParser.json());

// Configura las rutas bajo la ruta base '/api'
app.use('/api', taskRoutes); // Utiliza las rutas de tareas bajo '/api'

// Inicia la conexión a la base de datos y luego el servidor
db.sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
=======
require('dotenv').config(); // Cargar las variables de entorno desde .env

const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks'); // Importa las rutas de tareas
const db = require('./database/connection'); // Importa la conexión a la base de datos

const app = express();

// Configura middleware
app.use(bodyParser.json());

// Configura las rutas bajo la ruta base '/api'
app.use('/api', taskRoutes); // Utiliza las rutas de tareas bajo '/api'

// Inicia la conexión a la base de datos y luego el servidor
db.sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
>>>>>>> 1383875674f1d94783b2cb65fa3aac2332553bb5
