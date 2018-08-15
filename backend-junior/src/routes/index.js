const express = require('express')

const router = express.Router()
const { getAllTodos, createTodo } = require('../controllers/todo.controller')

router.get('/todos', getAllTodos)
router.post('/todos', createTodo)

module.exports = router