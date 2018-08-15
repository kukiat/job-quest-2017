const express = require('express')

const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.get('/todos', todoController.getAllTodos)
router.post('/todos', todoController.createTodo)
router.patch('/todos/:id', todoController.updateTodo)
router.delete('/todos/:id', todoController.deleteTodo)

module.exports = router