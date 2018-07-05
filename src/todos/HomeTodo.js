import React from 'react';

import Todos from './Todos';
import { TodoFilters, FILTERS } from './TodoFilters';
import TODOS from './todos.data';
import TodoStore from './TodoStore';

export default class HomeTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todoStore.todos,
      activeFilter: 'ALL'
    };
    this.subscribed = todos => this.setState({ todos });
  }

  // handlers
  applyFilter = filter => this.setState({ activeFilter: filter });
  handlers = ['add', 'remove', 'update'].reduce((handlers, action) => {
    handlers[action] = todo => this.props.todoStore[action](todo);
    return handlers;
  }, {});

  componentDidMount() {
    // update state todos on store change
    this.props.todoStore.subscribe(this.subscribed);
  }

  componentWillUnmount() {
    this.props.todoStore.unsubscribe(this.subscribed);
  }

  render() {
    const todos = this.state.todos.filter(FILTERS[this.state.activeFilter]);
    return (
      <React.Fragment>
        <Todos todos={todos} {...this.handlers} />
        <br />
        <TodoFilters applyFilter={this.applyFilter} />
      </React.Fragment>
    );
  }
}

HomeTodo.defaultProps = {
  todoStore: new TodoStore(TODOS)
};
