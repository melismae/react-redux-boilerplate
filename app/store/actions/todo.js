//generating passable lol unique ids
const uid = () => Math.random().toString(34).slice(2);

//think of each action as a simple js object with a type and payload properties
//the type property helps us decide what to do with the payload when we process the action later
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}
