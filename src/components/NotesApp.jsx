import React from "react";
import { getInitialData } from "../utils";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchivedNote = this.onArchivedNote.bind(this);
    this.onRemoveArchivedNote = this.onRemoveArchivedNote.bind(this);
  }

  onAddNote = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Date.now(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  };

  onSearchNote(event) {
    const captureValue = event.target.value.toLowerCase();

    this.setState({ search: captureValue });
  }

  onDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  onArchivedNote = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: true,
        };
      }
      return note;
    });

    this.setState({ notes });
  };

  onRemoveArchivedNote = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: false,
        };
      }
      return note;
    });

    this.setState({ notes });
  };

  render() {
    const searchData = !this.state.search ? this.state.notes : this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search)
    );
    const activeData = searchData.filter((note) => !note.archived);
    const archiveData = searchData.filter((note) => note.archived);

    return (
      <>
        <NotesHeader onSearch={this.onSearchNote} />
        <NotesInput addNote={this.onAddNote} />
        <NotesList
          notes={this.state.notes}
          activeData={activeData}
          archiveData={archiveData}
          onDelete={this.onDeleteNote}
          onArchived={this.onArchivedNote}
          onRemoveArchived={this.onRemoveArchivedNote}
        />
      </>
    );
  }
}
