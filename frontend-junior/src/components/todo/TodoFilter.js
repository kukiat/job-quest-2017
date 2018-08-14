import React from 'react'

class TodoFilter extends React.Component {
  render() {
    const { onFilterChange } = this.props 
    return (
      <div style={{ display: 'flex' }}>
        <button onClick={() => onFilterChange('All')}>All</button>
        <button onClick={() => onFilterChange('Complete')}>Complete</button>
        <button onClick={() => onFilterChange('Active')}>Active</button>
      </div>
    )
  }
}

export default TodoFilter