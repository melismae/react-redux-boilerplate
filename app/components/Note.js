import React from 'react';

export default class Note extends React.Component {

  constructor(props) {
    super(props);

    //Track editing state
    this.state = {
      editing: false
    };
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionState = this.props.task.length : null
      }
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
  }

  renderNote = () => {
    const onDelete = this.props.onDelete;
    // if the user clicks a normal note, trigger editing logic
    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  };

  renderDelete = () => {
    return <button className="delete-note" onClick={this.props.onDelete}>x</button>
  };

  edit = () => {
    //Enter edit mode
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    // The user hit enter -> finish up
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {

    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
      //exit edit mode
      this.setState({
        editing: false
      });
    }
  };

  render() {
    //Render the component differently based on state
    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }
}
