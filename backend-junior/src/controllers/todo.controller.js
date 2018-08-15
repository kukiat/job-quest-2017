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
    await TodoModel.create(req.body)
    respondSuccess(res)()
  }catch(err) {
    respondError(res)(err)
  }
}

module.exports = {
  getAllTodos,
  createTodo
}