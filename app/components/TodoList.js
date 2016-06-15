import React from 'react';
import { Todo } from './Todo';

 export function TodoList(props) {

  const { todos, toggleTodo, addTodo } = props;

  //triggered by the event in the input below
  const onSubmit = (e) => {
    const input = e.target;
    const text = input.value;
    const isEnterKey = e.which == 13;
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  }

  //triggered by the onClick in each li below
  const toggleClick = id => e => toggleTodo(id);

  return (
    <div className='todo'>
      <input type='text'
            placeholder='Add'
            className='togo_entry'
            onKeyDown={onSubmit} />
      <ul className='todo_list'>
        {todos.map(t => (
          <li key={t.get('id')}
              className='todo_item'
              onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  )
}
