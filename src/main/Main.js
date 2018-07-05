import React from 'react';
import Route from 'react-router-dom/Route';

import Home from '../home';
import Search from '../search';
import Creation from '../creation';
import Game from '../game';
import Products from '../products';
import HomeTodo from '../todos';
import TwoLists from '../lists';
import TestState from '../teststate/TestState';

export default () => (
  <div className="main container">
    <Route path="/" exact strict component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/creation" exact strict component={Creation} />
    <Route path="/products" component={Products} />
    <Route path="/game/:id" component={Game} />
    <Route path="/todos" component={HomeTodo} />
    <Route path="/lists" component={TwoLists} />
    <Route path="/teststate" component={TestState} />
  </div>
);
