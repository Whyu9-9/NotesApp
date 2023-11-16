import React from "react";

function NotesHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <div className="note-search">
        <input
          onChange={(event) => onSearch(event)}
          type="text"
          placeholder="Search by title 🔍"
        />
      </div>
    </div>
  );
}

export default NotesHeader;
