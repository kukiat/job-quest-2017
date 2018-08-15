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
      date: {
        createdAt: date.toLocaleTimeString(),
        updatedAt: date.toLocaleTimeString()
      },
      status: false
    }
    db.database().ref('todos').push(todo)
      .then(() => resolve('create success'))
      .catch(err => reject(err))
  })
}

module.exports = {
  find,
  create,
}