import React from "react";

const Count = ({ count }) => {
  return (
    <div className="count">
      <h4>{count || "Empty"}</h4>
    </div>
  );
};

export default Count;
