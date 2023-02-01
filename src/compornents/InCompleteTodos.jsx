import React from "react";

export const InCompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, i) => {
          return (
            //roopする際は、keyが必要。正しく比較されるため
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(i)}>完了</button>
              <button onClick={() => onClickDelete(i)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
