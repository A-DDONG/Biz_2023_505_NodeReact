import React from "react";

const TodoList = ({ todoList, onSelect }) => {
  return (
    <div>
      {todoList.map((item) => (
        <div key={item.id} onClick={() => onSelect(item)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
