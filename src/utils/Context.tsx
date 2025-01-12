import { createContext } from "react";
import { TodoList } from "./Interface";

type ContextTodosParams = {
    todos: TodoList;
    setTodos: (todos:TodoList) => void;
};
export const TodosContext = createContext<ContextTodosParams>({
    todos: [],
    setTodos: (todos) => { },
})