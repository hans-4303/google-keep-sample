import { useState } from "react";

import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
import Count from "./components/Count";

import { defaultNote, creatingNote } from "./models/note.model";

function App() {
  /* 노트를 담기 위한 상위 state */
  const [notes, setNotes] = useState<defaultNote[]>([]);

  /* 노트 추가 위한 함수, 파라미터로 새 노트 받기 */
  function addNote(newNote: creatingNote) {
    /* prevState => return [...prevState, newNote]로 불변성 및 이전 자료 유지 */
    setNotes((prevState) => {
      return [...prevState, newNote];
    });
  }

  /* 노트 수정 위한 함수, 파라미터로 수정할 내용 받기 */
  function updateNotes({ id, title, content }: defaultNote) {
    const _notes: defaultNote[] = [];
    for (let i = 0; i < notes.length; i++) {
      if (i === id) {
        _notes.push({ id, title, content });
      } else {
        _notes.push(notes[i]);
      }
    }
    setNotes(_notes);
  }

  /* 노트 삭제 위한 함수, 파라미터로 id 받고 호출 시 해당 노트 삭제 */
  function deleteNotes(id: number) {
    /* prevState => return [...prevState.filter((el, index))]로 불변성 및 이전 자료 유지 */
    setNotes((prevState) => {
      return [...prevState.filter((el, index) => index !== id)];
    });
  }

  return (
    <>
      <div>
        <Header />
        <Count
          count={
            notes.length === 0
              ? "작성된 메모가 없습니다."
              : `현재 ${notes.length}개 메모가 표시됩니다.`
          }
        />
        {/* props에 노트 생성 함수 보내기
        CreateArea에서는 props.onAdd 형태로 작동 */}
        <CreateArea onAdd={addNote} />
        {/* 형성된 노트 배열을 map으로 반복 */}
        {notes.map((el, index) => (
          <Note
            key={index}
            id={index}
            title={el.title}
            content={el.content}
            onDelete={deleteNotes}
            onUpdate={updateNotes}
          />
        ))}
      </div>
    </>
  );
}

export default App;
