import React from 'react'
import '../../styles/todo.css'

class TodoInput extends React.Component {
  state = {
    title: '',
  }

  handleInput = (e) => {
    this.setState({ title: e.target.value})
  }

  onEnter = (e) => {
    if(e.keyCode === 13) {
      this.props.createTodo(this.state.title)
      this.setState({ title: '' })
    }
  }
  
  render() {
    const { title } = this.state
    return (
      <input 
        className="todo-input" 
        type="text" 
        placeholder="Todo here"
        value={title} 
        onChange={this.handleInput}
        onKeyUp={this.onEnter}
      />
    )
  }
}

export default TodoInput