import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { TodoData } from "./data/TodoData";
import uuid from "react-uuid";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

const TodoMain = ({ children }) => {
  const [todo, setTodo] = useState(TodoData());
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  const todoInput = (inputTodo) => {
    if (!inputTodo.id) {
      todoListAdd(inputTodo);
    } else {
      const updateTodoList = todoList.map((item) => {
        if (item.id === inputTodo.id) {
          return {
            ...item,
            title: inputTodo.title,
            content: inputTodo.content,
            image: inputTodo.image,
          };
        }
        return item;
      });
      setTodoList(updateTodoList);
    }
    setTodo(TodoData());
  };

  const todoListAdd = (inputTodo) => {
    const newTodo = {
      ...inputTodo,
      id: uuid(),
    };
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todoList,
        setTodoList,
        todoInput,
        updateItemSelect,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoMain;
