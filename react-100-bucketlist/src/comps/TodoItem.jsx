import React from "react";
import TodoData from "../data/TodoData";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoItem = ({ todo, setTodo, todoList, setTodoList, todoInput }) => {
  const handleListClick = (selectedItem) => {
    setTodo({
      id: selectedItem.id,
      title: selectedItem.title,
      content: selectedItem.content,
      image: selectedItem.image,
      date: selectedItem.date,
      time: selectedItem.time,
    });
  };

  return (
    <div className="box">
      <div>
        <button onClick={() => setTodo(TodoData())}>새로 작성</button>
        <TodoInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
      </div>
      <div className="list_box">
        <div className="today">
          <span>{todo.date}</span>
          <span>{todo.time}</span>
        </div>
        <div className="todo_list">
          <TodoList todoList={todoList} onSelect={handleListClick} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
