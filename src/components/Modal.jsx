import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __postTodos } from "../redux/modules/todosSlice";
import nextId from "react-id-generator";
import "../css/Add.css"
import Buttons from "../ele/Button";

const Modal = ({ Setmodal }) => {
  const id = nextId();

  const dispatch = useDispatch();
  const [todos, setTodos] = useState({
    id: "",
    name: "",
    title: "",
    body: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodos({ ...todos, [name]: value, nextid: id });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      todos.name.trim() === "" ||
      todos.title.trim() === "" ||
      todos.body.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__postTodos({ ...todos }));
    setTodos({
      id: "",
      name: "",
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="cancelbutton"
        onClick={() => {
          Setmodal(false);
        }}
      >
        X X X
      </div>
      <div className="objects_container">

      <label className="objects">작성자</label>
      <input className="input_user"
        onChange={onChangeHandler}
        name="name"
        type="text"
        value={todos.name}
      ></input>
      <label className="objects">제목</label>
      <input className="input_title"
        onChange={onChangeHandler}
        name="title"
        type="text"
        value={todos.title}
      ></input>
      <label className="objects">내용</label>
      <input className="input_body"
        onChange={onChangeHandler}
        name="body"
        type="text"
        value={todos.body}
      ></input>
      <Buttons size="medium">추가하기</Buttons>
      
      </div>
    </form>
  );
};

export default Modal;
