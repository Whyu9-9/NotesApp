import React from "react";

function ArchiveButton({ id, onArchived }) {
  const handleArchived = () => {
    const shouldArchived = window.confirm("Are you sure you want to archive this note?");
    if (shouldArchived) {
      onArchived(id);
    }
  };

  return (
    <button className="note-item__archive-button" onClick={handleArchived}>
      Archive 📥
    </button>
  );
}

export default ArchiveButton;
