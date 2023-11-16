import React from "react";
import NotesItem from "./NotesItem";

function ActiveNotesList({ activeData, onDelete, onArchived }) {
  return (
    <>
      <h2 className="notes-app__category-title">Active Notes 🟢</h2>
      <div className="notes-list">
        {activeData.length === 0 ? (
          <p className="notes-list__empty-message">No Active Notes Found!</p>
        ) : (
          activeData.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchived={onArchived}
              {...note}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ActiveNotesList;
