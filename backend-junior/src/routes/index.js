const express = require('express')

const router = express.Router()
const { getAllTodo } = require('../controllers')

router.get('/todos', getAllTodo)

module.exports = router