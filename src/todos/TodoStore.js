let key = 0;
const newKey = () => ++key;

export default class TodoStore {
  constructor(todos = []) {
    this.subscribers = [];
    todos.forEach(this.add.bind(this));
  }

  add(todo) {
    this.todos = [...(this.todos || []), { ...todo, key: newKey() }];
    this.fireChange();
  }

  remove(todoToRemove) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
    this.fireChange();
  }

  update(updatedTodo) {
    this.todos = this.todos.map(
      todo =>
        todo.key === updatedTodo.key ? { ...todo, ...updatedTodo } : todo
    );
    this.fireChange();
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }
  unsubscribe(cb) {
    this.subscribers = this.subscribers.filter(sub => sub !== cb);
  }
  fireChange() {
    this.subscribers.forEach(cb => cb(this.todos));
  }
}
