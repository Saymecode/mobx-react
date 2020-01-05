import React from 'react';
import './App.css';
import { observer } from 'mobx-react'

export default @observer class App extends React.Component{
  filter(e) {
    this.props.store.filter = e.target.value
  }

  createNewTodo(e) {
    if(e.which === 13) {
      this.props.store.createNewTodo(e.target.value)
      e.target.value = ''
    }
  }

  toggleChecked(todo) {
    todo.checked = !todo.checked
  }

  render () {
    const { filter, filtredTodos } = this.props.store
    const todosList = filtredTodos.map((todo)=>{
      let parts = filter ? todo.value.split(new RegExp(`(${filter})`, 'gi')) : [todo.value]

      return <li key={todo.id}>
        <input type="checkbox" value={todo.checked} onChange={this.toggleChecked.bind(this, todo)} checked={todo.checked}/>
        { parts.map(part => filter && part.toLowerCase() === filter.toLowerCase() ? <b key={todo.id + Math.random()}>{part}</b> : part)}
      </li>;
    })

    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <div>
            <label htmlFor="create">Create Task (Press Enter):</label>
          </div>
          <div>
            <input name='create' className='create' onKeyPress={this.createNewTodo.bind(this)}/>
          </div>
        </div>
        <br/>
        <div>
          <div>
            <label htmlFor="filter">Filter:</label>
          </div>
          <div>
            <input name='filter' className='filter' value={filter} onChange={this.filter.bind(this)}/>
          </div>
        </div>
        <ul>
          {todosList}
        </ul>
      </div>
    )
  }
}
