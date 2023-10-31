import React, { useState } from "react";

const CreateArea = () => {
  /* 객체 형 state 생성 */
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  /* input, textarea에 연결된 함수 */
  function handleChange(event) {
    /* 이벤트 대상에서 name, value 받아오기 */
    const { name, value } = event.target;
    /* prevState => return { ...prevState, [name]: value } 형태로 작성됨
    state의 불변성 유지 */
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  /* button에 연결된 함수 */
  function submitButton(event) {
    /* 이벤트 새로 고침 방지 */
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
          />
        </p>
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
