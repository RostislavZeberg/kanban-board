import { useState, useEffect } from "react";
import "./App.scss";
import { SearchTodo } from "./components/SearchTodo";
import { ToDoList } from "./components/ToDoList";
import { TodosContext } from "./utils/Context";
import { TodoList } from "./utils/Interface";
import { getTodosFromLocalStorage } from "./utils/localStorageService";

export const App = () => {
  const [todos, setTodos] = useState<TodoList>([]);

  if (getTodosFromLocalStorage().length === 0) {
    const temp = JSON.stringify(require('../tasks.json'));
    localStorage.setItem('todos', temp);
  }

  useEffect(() => {
    const savedTodos = getTodosFromLocalStorage();
    setTodos(savedTodos);
  }, []);

  return (
    <div className="main">
      <div className="wrapper">
        <TodosContext.Provider value={{ todos, setTodos }}>
          <div className="header">
            <h1 className="title">Your tasks</h1>
            <SearchTodo />
          </div>
          <ToDoList />
        </TodosContext.Provider>
      </div>

    </div >
  );
};
