import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import RemoveArchivedButton from "./RemoveArchivedButton";

function NotesItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchived,
  onRemoveArchived,
  archived,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <RemoveArchivedButton id={id} onRemoveArchived={onRemoveArchived} />
        ) : (
          <ArchiveButton id={id} onArchived={onArchived} />
        )}
      </div>
    </div>
  );
}

export default NotesItem;
