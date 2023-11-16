import React from "react";
import ActiveNotesList from "./ActiveNotesList";
import ArchivedNotesList from "./ArchivedNotesList";

function NotesList({
  onDelete,
  onArchived,
  onRemoveArchived,
  activeData,
  archiveData,
}) {
  return (
    <>
      <ActiveNotesList
        activeData={activeData}
        onDelete={onDelete}
        onArchived={onArchived}
      />
      <ArchivedNotesList
        archiveData={archiveData}
        onDelete={onDelete}
        onArchived={onArchived}
        onRemoveArchived={onRemoveArchived}
      />
    </>
  );
}

export default NotesList;
