import React from "react";
import CharacterLimit from './CharacterLimit';

export default class NotesInput extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });

    window.alert("Your notes has been created!");
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="note-form__title">Create New Notes 📝</h2>
        <CharacterLimit title={this.state.title} />
        <input
          className="note-input__title"
          type="text"
          placeholder="Insert notes title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength={50}
          required
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Insert notes body"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type="submit">Submit 💾</button>
      </form>
    );
  }
}
