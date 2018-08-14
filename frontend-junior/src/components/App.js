import React, { Component } from 'react';
import '../styles/App.css';
import TodoItem from './todo/TodoItem'
import TodoInput from './todo/TodoInput'
import TodoFilter from './todo/TodoFilter'

class App extends Component {
  state = {
    todos: [
      { id: 0, title: 'xxxx', date: new Date().toLocaleTimeString(), status: false },
      { id: 1, title: 'yyy', date: new Date().toLocaleTimeString(), status: true },
      { id: 2, title: 'xxzxzx', date: new Date().toLocaleTimeString(), status: false }
    ],
    filter: 'All'
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

  onStatusChange = (id, status) => {
    const { todos } = this.state
    const indexTodo = todos.findIndex(todo => todo.id === id)
    const newTodos =  [...todos]
    newTodos[indexTodo].status = !status
    this.setState({ todos: newTodos })
  }

  onFilterChange = (filter) => {
    if(filter === this.state.filter)
      return
    this.setState({ filter })
  }

  filterTodos = () => {
    const { filter, todos } = this.state
    switch(filter) {
      case 'All':
        return todos.filter(todo => todo)
      case 'Complete':
        return todos.filter(todo => todo.status === true)
      case 'Active':
        return todos.filter(todo => todo.status === false)
      default:
        return todos
    }
  }

  render() {
    const todos = this.filterTodos()
    return (
      <div className="App">
        <TodoInput createTodo={this.createTodo}/>
        <TodoFilter onFilterChange={this.onFilterChange}/>
        { todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            onStatusChange={this.onStatusChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
