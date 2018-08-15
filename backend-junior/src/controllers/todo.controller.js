const { respondResult, respondError, respondSuccess } = require('../utils/response')
const TodoModel = require('../models/todo')

const getAllTodos = async (req, res, next) => {
  try {
    const value = await TodoModel.find()
    const todos = Object.keys(value).map(key => Object.assign(value[key], { id: key }))
    respondResult(res)(todos)
  }catch(err) {
    respondError(res)(err)
  }
}

const createTodo = async (req, res, next) => {
  try {
    const message = await TodoModel.create(req.body)
    respondSuccess(res)(message)
  }catch(err) {
    respondError(res)(err)
  }
}

const updateTodo = async (req, res, next) => {
  try {
    const request = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description
    }
    const message = await TodoModel.update(request)
    respondSuccess(res)(message)
  }catch(err) {
    respondError(res)(err)
  }
}

const deleteTodo = async (req, res, next) => {
  try {
    const message = await TodoModel.remove(req.params.id)
    respondSuccess(res)(message)
  }catch(err) {
    respondError(res)(err)
  }
}


module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo
}