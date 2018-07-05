import React from 'react';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTodo: '' };
  }

  // handlers
  toggleTodo = todo => () => this.props.update({ ...todo, done: !todo.done });
  removeTodo = todo => () => this.props.remove(todo);
  handleKeyPress = ({ key, target }) => {
    if ('Enter' === key) {
      this.props.add({ label: target.value, done: false });
      this.setState({ newTodo: '' });
    } else {
      this.setState(prevState => ({ newTodo: prevState.newTodo + key }));
    }
  };

  //render
  render() {
    const { todos } = this.props;
    const { newTodo } = this.state;

    return (
      <div>
        <div>
          <input type="checkbox" />
          <input type="text" onKeyPress={this.handleKeyPress} value={newTodo} />
        </div>
        <TodoList
          todos={todos}
          toggle={this.toggleTodo}
          remove={this.removeTodo}
        />
      </div>
    );
  }
}

// Todos.defaultProps = {
//   filter: 'ALL'
// };

const TodoList = ({ todos, toggle, remove }) =>
  todos.map(todo => (
    <Todo {...todo} toggle={toggle(todo)} remove={remove(todo)} />
  ));

const Todo = ({ label, done, toggle, remove }) => (
  <div className={done ? 'done' : 'undone'}>
    <input type="checkbox" checked={done} onChange={toggle} />
    {label}
    <span className="removetodo" onClick={remove}>
      remove
    </span>
  </div>
);

// const TodoFilters = ({ applyFilter }) => {
//   const filterComponents = Object.keys(filters).map(f => (
//     <Filter key={f} label={f} onClick={applyFilter(f)} />
//   ));
//   return <div className="filters">{filterComponents}</div>;
// };

// const Filter = ({ label, onClick }) => (
//   <span className="filter" onClick={onClick}>
//     {label}
//   </span>
// );

// const filters = {
//   ALL: todo => todo,
//   DONE: ({ done }) => done,
//   NOTDONE: ({ done }) => !done
// };

// const filterTodos = filterKey => () => console.log(`filter : ${filterKey}`);
