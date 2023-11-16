import React from "react";
import NotesItem from "./NotesItem";

function ArchivedNotesList({
  archiveData,
  onDelete,
  onArchived,
  onRemoveArchived,
}) {
  return (
    <>
      <h2 className="notes-app__category-title">Archived Notes 🟡</h2>
      <div className="notes-list">
        {archiveData.length === 0 ? (
          <p className="notes-list__empty-message">No Archived Notes Found!</p>
        ) : (
          archiveData.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchived={onArchived}
              onRemoveArchived={onRemoveArchived}
              {...note}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ArchivedNotesList;
