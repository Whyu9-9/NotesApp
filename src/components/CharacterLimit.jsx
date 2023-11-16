import React from "react";

function CharacterLimit({ title, maxLength = 50 }) {
  const remainingCharacters = maxLength - title.length;

  const getClass = () => {
    if (remainingCharacters <= 10) {
      return "danger";
    } else if (remainingCharacters <= 30) {
      return "warning";
    } else {
      return "";
    }
  };

  return (
    <p className="note-input__title__char-limit">
      Remaining Characters:
      <span className={getClass()}> {remainingCharacters}</span>
    </p>
  );
}

export default CharacterLimit;
