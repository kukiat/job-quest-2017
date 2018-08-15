const db = require('../config/firebase')

const find = () => {
  return new Promise((resolve, reject) => {
    db.database().ref('todos').once('value')
      .then(snapshot => {
        const todos = snapshot.val() || []
        resolve(todos)
      })
      .catch(err => reject(err))
  })
}

const create = ({ title, description }) => {
  return new Promise((resolve, reject) => {
    const date = new Date()
    const todo = {
      title,
      description,
      createdAt: date.toLocaleTimeString(),
      updatedAt: date.toLocaleTimeString(),
      status: false
    }
    db.database().ref('todos').push(todo)
      .then(() => resolve('create success'))
      .catch(err => reject(err))
  })
}

const update = ({ id, title, description }) => {
  return new Promise((resolve, reject) => {
    const newTodo = {
      title,
      description,
      updatedAt: new Date().toLocaleTimeString()
    }
    db.database().ref().child(`todos/${id}`).update(newTodo)
      .then(() => resolve('update success'))
      .catch(err => reject(err))
  })
}

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.database().ref().child(`todos/${id}`).remove()
      .then(() => resolve('remove success'))
      .catch(err => reject(err))
  })
}

module.exports = {
  find,
  create,
  remove,
  update
}