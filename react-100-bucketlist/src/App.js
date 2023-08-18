import React, { useState } from "react";
import TodoData from "./data/TodoData";
import TodoItem from "./comps/TodoItem";
import "./css/main.css";

function App() {
  const [todo, setTodo] = useState(TodoData());
  const [todoList, setTodoList] = useState([]);

  const todoInput = (inputTodo) => {
    if (!inputTodo.id) {
      const newTodo = {
        ...inputTodo,
        id: Math.random().toString(36).substr(2, 9), // Simple ID generator
      };
      setTodoList([newTodo, ...todoList]);
    } else {
      const updatedList = todoList.map((t) =>
        t.id === inputTodo.id ? inputTodo : t
      );
      setTodoList(updatedList);
    }
    setTodo(TodoData());
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="title">
            오늘은 내 생의 <br />
            가장 젊은 날
          </h1>
        </header>
        <TodoItem
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
          todoInput={todoInput}
        />
      </div>
    </div>
  );
}

export default App;
