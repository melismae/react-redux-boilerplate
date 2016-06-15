// this container creates a "store aware" container to wrap around the components
// created after writing the action & reducer

import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { addTodo, toggleTodo } from '../store/actions/todo.js';

//container for TodoList component
export const TodoListContainer = connect(
  function mapStateToProps(state) {
    return {
      todos: state
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    }
  }
)(TodoList)
