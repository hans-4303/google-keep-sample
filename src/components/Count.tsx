import React from "react";

const Count = ({ count }: { count: string }) => {
  return (
    <div className="count">
      <h4>{count || "작성된 메모가 없습니다."}</h4>
    </div>
  );
};

export default Count;
