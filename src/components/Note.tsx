import React, { useState, ChangeEvent } from "react";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { defaultNote, editNote } from "@/models/note.model";

/* props title, content 수신 준비 완료 */
const Note = ({ id, title, content, onDelete, onUpdate }: {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
  onUpdate: ({id, title, content}: defaultNote) => void;
}) => {
  /* 노트 편집 상황인지 */
  const [editNote, setEditNote] = useState(false);
  /* 현재 노트 값들 받아오기 */
  const [currentNote, setCurrentNote] = useState<editNote>({
    id,
    editTitle: title,
    editContent: content,
  });

  /* 편집 여부 조작 함수, 조건부 렌더링 및 현재 노트 스프레드 연산 */
  function handleEdit() {
    setEditNote(true);
    setCurrentNote((prevState) => ({ ...prevState }));
  }

  /* 노트 편집 함수 */
  function handleInputEdit(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    /* 이벤트 발생 요소 및 name, value 받아오기 */
    const { name, value } = event.target;
    /* 스프레드로 불변성 지키고 이벤트 발생 요소 값 dispatch */
    setCurrentNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  /* 업데이트 취소 함수 */
  function updateCancel() {
    /* 편집 모드 끄기 */
    setEditNote(false);
    /* 편집 이전 상태로 노트 되돌리기 */
    setCurrentNote({ id, editTitle: title, editContent: content });
  }

  /* 노트 업데이트 함수 */
  function updateNote() {
    /* 상위 컴포넌트에서 정의된 onUpdate 호출, 편집된 note 내용 보내기 */
    onUpdate({
      id: currentNote.id,
      title: currentNote.editTitle,
      content: currentNote.editContent,
    });
    /* 편집 모드 끄기 */
    setEditNote(false);
  }

  return (
    <div>
      {editNote ? (
        <div className="note">
          <input
            type="text"
            name="editTitle"
            /* 왜 defaultValue인지 알아보기 */
            defaultValue={currentNote.editTitle}
            onChange={handleInputEdit}
            className="edit-input"
          />
          <textarea
            name="editContent"
            defaultValue={currentNote.editContent}
            rows={1}
            onChange={handleInputEdit}
            className="edit-input"
          />
          {/* 노트 업데이트 및 업데이트 취소 UI */}
          <button onClick={updateNote}>
            <MdSave size={25} />
          </button>
          <button onClick={updateCancel}>
            <MdCancel size={25} />
          </button>
        </div>
      ) : (
        <div className="note">
          <h1>{title || "My note"}</h1>
          <p>{content || "hey what's going on"}</p>
          {/* 삭제 위한 버튼, 이벤트 사용 없으며 setState 포함 함수 및 각 컴포넌트 id를 props로 받고 활용하기 */}
          <button onClick={() => onDelete(id)}>
            <MdDelete size={25} />
          </button>
          {/* 수정 위한 버튼, 이벤트 사용 없음 */}
          <button onClick={handleEdit}>
            <MdEdit size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
