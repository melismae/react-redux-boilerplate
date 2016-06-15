import './main.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
// makes the containers aware of the store
import { Provider } from 'react-redux';
import todo from './store/reducers/todo.js';
import { TodoListContainer } from './containers/Todo.js';
import NoteContainer from './containers/Note.js';

import { List, Map } from 'immutable';
// import App from './components/App.js';
const store = createStore(todo);

render(<div><NoteContainer />
<Provider store={store}>
  <TodoListContainer />
</Provider></div>,document.getElementById('app'));
