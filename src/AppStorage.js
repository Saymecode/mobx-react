import { computed, observable } from 'mobx'

class Task {
  @observable value
  @observable id
  @observable checked

  constructor (value) {
    this.value = value
    this.id = Date.now() + Math.random()
    this.checked = false
  }
}

class TodoStore {
  @observable todos = [new Task('Learn MobX'), new Task('Learn React')]
  @observable filter = ''
  @computed get filtredTodos() {
    return this.todos.filter((todo) => {
      if(!this.filter) {
        return true
      }

      return todo.value.match(new RegExp(this.filter, 'gi'))
    })
  }
  createNewTodo(value) {
    this.todos.push(new Task(value))
  }
}

export default new TodoStore()