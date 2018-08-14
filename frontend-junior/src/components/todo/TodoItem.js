import React from 'react'

export default ({ todo, onStatusChange }) => {
  return (
    <div 
      style={todo.status ? { display: 'flex', backgroundColor: '#FF0000' } : { display: 'flex', backgroundColor: '#FFF' }}
      onClick={() => onStatusChange(todo.id, todo.status)}
    >
      <h3>{todo.id}</h3>
      <h3>{todo.title}</h3>
      <h3>{todo.date}</h3>
    </div>
  )
}