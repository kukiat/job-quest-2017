import React from 'react'

export default ({ todo }) => {
  return (
    <div style={{ display: 'flex' }}>
      <h3>{todo.id}</h3>
      <h3>{todo.title}</h3>
      <h3>{todo.date}</h3>
    </div>
  )
}