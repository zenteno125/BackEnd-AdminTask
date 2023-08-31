const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { fechaEliminacion: null } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// Crear una nueva tarea
router.post('/create', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.json(newTask);
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});


// Actualizar una tarea (marcar como completada)
router.put('/:id', async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findByPk(taskId);
      
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
  
      if (req.body.descripcion) {
        task.descripcion = req.body.descripcion;
      }
  
      if (req.body.completado !== undefined) {
        task.completado = req.body.completado;
      }
  
      await task.save();
  
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
  });  

// Marcar una tarea con fecha de eliminación
router.put('/:id/deleted', async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findByPk(taskId);
      
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
  
      task.fechaEliminacion = new Date();
      await task.save();
  
      res.json({ message: 'Tarea eliminada' });
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });
  

module.exports = router;
