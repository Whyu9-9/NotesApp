import React from "react";

function deleteButton({ id, onDelete }) {
  const handleDelete = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this note?");
    if (shouldDelete) {
      onDelete(id);
    }
  };

  return (
    <button className="note-item__delete-button" onClick={handleDelete}>
      Delete 🗑️
    </button>
  );
}

export default deleteButton;
