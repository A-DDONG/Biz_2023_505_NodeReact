import React from "react";

const TodoInput = ({ todo, setTodo, todoInput }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="input">
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
        onBlur={() => {
          if (todo.title && todo.content) {
            todoInput(todo);
          }
        }}
        placeholder="제목을 입력하세요"
      />
      <textarea
        name="content"
        value={todo.content}
        onChange={handleInputChange}
        onBlur={() => {
          if (todo.title && todo.content) {
            todoInput(todo);
          }
        }}
        placeholder="내용을 입력하세요"
      />
    </div>
  );
};

export default TodoInput;
