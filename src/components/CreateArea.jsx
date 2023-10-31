import React, { useState } from "react";

import { IoIosAdd } from "react-icons/io";

/* 상위 컴포넌트에서 props로 받아온 setState */
const CreateArea = ({ onAdd }) => {
  const [isExpanded, setExpanded] = useState(false);

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

  function handleExpanded() {
    setExpanded(true);
  }

  /* button에 연결된 함수 */
  function submitButton(event) {
    /* 이벤트 새로 고침 방지 */
    event.preventDefault();
    /* props로 받아온 setState 호출하고 현 컴포넌트 note state 대입 */
    onAdd(note);
    /* 현 컴포넌트 note, isExpanded state 초기화 */
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form
        /* tabIndex 작성 시도했지만 큰 의미 없었음 */
        tabIndex={1}
        /* onMouseDown 우선도가 높음 */
        onMouseDown={handleExpanded}
        /* onBlur에서 이벤트 받기, 현재 타겟 요소가 관련 타겟 요소 갖고 있지 않다면 폼 닫기 */
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setExpanded(false);
          }
        }}
      >
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          />
        </p>
        <button onClick={submitButton}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
