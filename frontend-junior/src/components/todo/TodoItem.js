import React from 'react'
import '../../styles/todo.css'

export default ({ todo, onStatusChange }) => {
  return (
    <div 
      className="todo-item"
      onClick={() => onStatusChange(todo.id, todo.status)}
    >
      <div className="wrap-todo-item">
        <p>{todo.title}</p>
        <p className="date">{todo.date}</p>
      </div>
    </div>
  )
}