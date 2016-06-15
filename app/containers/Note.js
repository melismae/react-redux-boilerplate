import uuid from 'node-uuid';
import React from 'react';
import Notes from '../components/Notes.js';

export default class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Do Something Cool'
        },
        {
          id: uuid.v4(),
          task: 'Make the Codes work'
        },
        {
          id: uuid.v4(),
          task: 'Walk dog'
        },
        {
          id: uuid.v4(),
          task: 'Eat Donuts'
        }
      ]
    }
  }

  addNote  = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }
  editNote = (id, task) => {
    //don't modify if trying to set an empty value
    if(!task.trim()) {
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && task) {
        note.task = task;
      }
      return note;
    });
    this.setState({notes});
  }
  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }
}
