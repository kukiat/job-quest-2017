import React, { Component } from 'react';
import '../styles/App.css';
import TodoItem from './todo/TodoItem'
import TodoInput from './todo/TodoInput'

class App extends Component {
  state = {
    todos: [
      { id: 0, title: 'xxxx', date: new Date().toLocaleTimeString(), status: false },
      { id: 1, title: 'yyy', date: new Date().toLocaleTimeString(), status: false },
      { id: 2, title: 'xxzxzx', date: new Date().toLocaleTimeString(), status: false }
    ]
  }

  createTodo = (title) => {
    const { todos } = this.state
    this.setState({
      todos: [...todos, {
        id: todos.length,
        title,
        date: new Date().toLocaleTimeString(),
        status: false
      }]
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <TodoInput createTodo={this.createTodo}/>
        { todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
    );
  }
}

export default App;
