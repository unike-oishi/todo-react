import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/InputTodo.jsx";
import { InCompleteTodos } from "./compornents/InCompleteTodos.jsx";
import { CompleteTodos } from "./compornents/CompleteTodos";

export const App = () => {
  const [todotext, setTodoText] = useState("");
  const [incompletetodos, setInCompletetodos] = useState([]);
  const [completetodos, setCompletetodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンイベント
  const onClickAdd = () => {
    if (todotext === "") return;

    const newTodos = [...incompletetodos, todotext];
    setInCompletetodos(newTodos);
    setTodoText("");
  };

  //削除ボタンイベント
  const onClickDelete = (i) => {
    const newTodos = [...incompletetodos];
    newTodos.splice(i, 1);
    //セット
    setInCompletetodos(newTodos);
  };
  //完了ボタンイベント
  const onClickComplete = (i) => {
    const newInCompTodos = [...incompletetodos];
    newInCompTodos.splice(i, 1);

    const newCompTodos = [...completetodos, incompletetodos[i]];
    //セット
    setCompletetodos(newCompTodos);
    setInCompletetodos(newInCompTodos);
  };
  //戻すボタンイベント
  const onClickBack = (i) => {
    const newInCompTodos = [...incompletetodos, completetodos[i]];
    const newCompTodos = [...completetodos];
    //i番目から1行削除
    newCompTodos.splice(i, 1);
    //セット
    setCompletetodos(newCompTodos);
    setInCompletetodos(newInCompTodos);
  };
  //レンダリング部分
  return (
    <>
      <InputTodo
        todotext={todotext}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompletetodos.length >= 5}
      />
      {incompletetodos.length >= 5 && (
        <p style={{ color: "red" }}>５つ以上タスク溜めないように</p>
      )}
      <InCompleteTodos
        todos={incompletetodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completetodos} onClickBack={onClickBack} />
    </>
  );
};
