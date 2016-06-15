//reducer takes a state and an action, then uses them to compute a new state

import { List, Map } from 'immutable';

const init = List([]);

export default function (todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      //iterates over the list
      return todos.map(t => {
        //find the todo which has an id that matches the action id
        if (t.get('id') === action.payload) {
          //call update which takes a key and function, returns a new copy of the map with isDone replaced (if was false, now true)
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });

    default:
      return todos;
  }
}
