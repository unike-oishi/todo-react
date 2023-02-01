import React from "react";

const inputStyle = {
  backgroundColor: "rgb(214, 192, 165)",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todotext, onChange, onClick, disabled } = props;

  return (
    <div style={inputStyle}>
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todotext}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
