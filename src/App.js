import { useState } from "react";

import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  /* 노트를 담기 위한 상위 state */
  const [notes, setNotes] = useState([]);

  /* 노트 추가 위한 함수, 파라미터로 새 노트 받기 */
  function addNote(newNote) {
    /* prevState => return [...prevState, newNote]로 불변성 및 이전 자료 유지 */
    setNotes((prevState) => {
      return [...prevState, newNote];
    });
  }

  return (
    <>
      <div>
        <Header />
        {/* props에 노트 생성 함수 보내기
        CreateArea에서는 props.onAdd 형태로 작동 */}
        <CreateArea onAdd={addNote} />
        {/* 형성된 노트 배열을 map으로 반복 */}
        {notes.map((el, index) => (
          <Note key={index} id={index} title={el.title} content={el.content} />
        ))}
      </div>
    </>
  );
}

export default App;
