const { respondResult, respondError } = require('../utils/response')

const getAllTodo = (req, res, next) => {
  try {
    const todos =  
    [
      { id: 0, title: 'xxwdwdxxx', description: 'xxxxxx', status: false, date: '' },
      { id: 1, title: 'xxxxx', description: 'xxxxxx', status: false, date: '' },
      { id: 2, title: 'xxxxx', description: 'xxxxxx', status: false, date: '' }
    ]
    respondResult(res)(todos)
  }catch(err) {
    respondError(res)(err)
  }
}

module.exports = {
  getAllTodo
}