import { autorun, observable } from 'mobx'

class TodoStore {
  @observable todos = []
  @observable filter = ''
}

export default TodoStore