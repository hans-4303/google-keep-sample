import React from "react";
import { MdDelete } from "react-icons/md";

/* props title, content 수신 준비 완료 */
const Note = ({ title, content, onDelete, id }) => {
  return (
    <div className="note">
      <h1>{title || "My note"}</h1>
      <p>{content || "hey what's going on"}</p>
      {/* 삭제 위한 버튼, 이벤트 사용 없으며 setState 포함 함수 및 각 컴포넌트 id를 props로 받고 활용하기 */}
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </div>
  );
};

export default Note;
