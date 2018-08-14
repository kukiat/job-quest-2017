import React from 'react'
import '../../styles/todo.css'
import { validate } from '../../utils/validate'

class TodoInput extends React.Component {
  state = {
    title: '',
    alert: false
  }

  handleInput = (e) => {
    this.setState({ title: e.target.value})
  }

  onEnter = (e) => {
    const { title: validateTitle } = validate(this.state.title)
    if(e.keyCode === 13) {
      if(!validateTitle) {
        this.setState({ alert: true })
        return
      }
      this.props.createTodo(this.state.title)
      this.setState({ 
        title: '', 
        alert: false 
      })
    }
  }
  
  render() {
    const { title, alert } = this.state
    return (
      <div className="wrap-todo-input">
        <input 
          className="todo-input" 
          type="text" 
          placeholder="Todo here"
          value={title} 
          onChange={this.handleInput}
          onKeyUp={this.onEnter}
        />
        {alert && <h4>Text should be 5-25 charactors</h4>}
      </div>
    )
  }
}

export default TodoInput