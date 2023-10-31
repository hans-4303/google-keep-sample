import React from "react";

/* props title, content 수신 준비 완료 */
const Note = ({ title, content }) => {
  return (
    <div className="note">
      <h1>{title || "My note"}</h1>
      <p>{content || "hey what's going on"}</p>
    </div>
  );
};

export default Note;
