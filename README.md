## Resumen de Pasos Realizados en el Proyecto

### **Preparación Inicial:**
Inicié este proyecto con la intención de desarrollar un backend en Node.js que gestione tareas a través de una API. La idea principal era tener funcionalidades para agregar, editar y eliminar tareas, además de mantener una base de datos para almacenar los datos de las mismas.

### **Modelo de Tareas:**
Comencé definiendo el modelo `task.js` utilizando Sequelize, una herramienta que me facilita definir la estructura de la tabla de tareas en mi base de datos. Este modelo incluyó campos clave como `id`, `nombre`, `descripcion`, `fechaModificacion`, `completado` y `fechaEliminacion`. Además, decidí implementar el borrado lógico, asegurándome de que las tareas marcadas como eliminadas no fueran recuperadas en futuras solicitudes GET.

### **Rutas de API:**
Para gestionar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de las tareas, creé rutas en el archivo `tasks.js`. Diseñé rutas específicas como `GET /tasks` para obtener una lista de tareas, `POST /tasks` para crear nuevas tareas, y `PUT /tasks/:id` para actualizar el estado y la descripción de las tareas. Las rutas también incluyeron lógica para marcar tareas como completadas y para establecer la fecha de eliminación.

### **Conexión a Base de Datos:**
Para establecer la conexión con la base de datos MySQL, configuré la conexión utilizando Sequelize y creé un archivo `connection.js`. Aseguré la seguridad de las credenciales de la base de datos mediante el uso de variables de entorno.

### **Despliegue en Railway:**
Decidí llevar mi proyecto en línea y elegí Railway para el despliegue. Tras crear una cuenta en Railway, configuré un nuevo proyecto y enlacé mi aplicación con Railway. Ajusté mi código para adaptarlo a los requerimientos de Railway y utilicé los comandos de Railway CLI para desplegar mi backend en línea, aprovechando su plataforma para el despliegue y la gestión de variables de entorno.

### **Mejoras Adicionales:**
Reconocí la importancia de almacenar las contraseñas de forma segura y aprendí cómo utilizar la librería `bcrypt` para hash y salting, implementando esta funcionalidad en el manejo de contraseñas en mi aplicación.

Con estos pasos, he logrado crear un backend funcional y seguro en Node.js que gestiona tareas, se conecta a una base de datos MySQL, y ha sido desplegado exitosamente en línea con la plataforma Railway. Estoy satisfecho con el progreso realizado y emocionado por las oportunidades futuras de mejora y expansión.

### **Documentación**
https://documenter.getpostman.com/view/21290432/2s9Y5crzh7
