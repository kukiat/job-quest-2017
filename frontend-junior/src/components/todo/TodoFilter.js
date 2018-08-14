import React from 'react'
import '../../styles/todo.css'

class TodoFilter extends React.Component {
  render() {
    const { onFilterChange } = this.props 
    const filterList = ['All', 'Complete', 'Active']
    return (
      <div>
        { filterList.map(type => (
          <button onClick={() => onFilterChange(type)}>{type}</button>
        ))}
      </div>
    )
  }
}

export default TodoFilter