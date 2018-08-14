import React from 'react'
import '../../styles/todo.css'

class TodoFilter extends React.Component {
  render() {
    const { onFilterChange } = this.props 
    const filterList = ['All', 'Complete', 'Active']
    return (
      <div className="todo-filter-container">
        { filterList.map(type => (
          <div 
            className="todo-filter-btn" 
            style={type === this.props.filter ? {} :  {borderColor: '#133778'}}
            onClick={() => onFilterChange(type)}
          >
            {type}
          </div>
        ))}
      </div>
    )
  }
}

export default TodoFilter