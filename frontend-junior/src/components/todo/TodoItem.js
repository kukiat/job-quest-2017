import React from 'react'
import '../../styles/todo.css'

export default ({ todo, onStatusChange }) => {
  return (
    <div 
      className="todo-item"
      onClick={() => onStatusChange(todo.id, todo.status)}
      style={todo.status ? 
        { backgroundColor: 'rgba(34, 74, 154, .5)', color: '#FFF' } 
        : { backgroundColor: '#FFF', color: '#000' } 
      }
    >
      <div className="wrap-todo-item">
        <p>{todo.title}</p>
        <p className="date">{todo.date}</p>
      </div>
    </div>
  )
}