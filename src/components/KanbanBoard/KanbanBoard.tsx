import { useEffect, useState } from "react";
import { TodosContext } from "../../utils/Context";
import { TodoList } from "../../utils/Interface";
import { SearchTodo } from "../SearchTodo";
import { ToDoList } from "../ToDoList";
import { getTodosFromLocalStorage } from "../../utils/localStorageService";

export const KanbanBoard = () => {
    const [todos, setTodos] = useState<TodoList>([]);

    useEffect(() => {
        const dataTasks = getTodosFromLocalStorage();
        if (dataTasks.length === 0) {
            const temp = JSON.stringify(require('../../../tasks.json'));
            localStorage.setItem('todos', temp);
        };
        const savedTodos = dataTasks;
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
    )
};