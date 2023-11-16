import React from "react";

function RemoveArchivedButton({ id, onRemoveArchived }) {
  const handleRemoveArchived = () => {
    const shouldRemoveArchived = window.confirm("Are you sure you want to un-archive this note?");
    if (shouldRemoveArchived) {
      onRemoveArchived(id);
    }
  };

  return (
    <button
      className="note-item__remove-archive-button"
      onClick={handleRemoveArchived}
    >
      Un-Archive 📤
    </button>
  );
}

export default RemoveArchivedButton;
