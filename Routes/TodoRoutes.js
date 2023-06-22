const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/TodoController');

// Get all todos
router.get('/todos', getAllTodos);

// Create a new todo
router.post('/todos', createTodo);

// Update a todo by ID
router.put('/todos/:id', updateTodo);

// Delete a todo by ID
router.delete('/todos/:id', deleteTodo);

module.exports = router;
