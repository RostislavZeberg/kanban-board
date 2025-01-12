import { TodoList } from '../utils/Interface';

const TODOS_KEY = 'todos';

export const getTodosFromLocalStorage = (): TodoList => {
    const storedTodos = localStorage.getItem(TODOS_KEY);
    if (storedTodos) {
        try {
            const todos = JSON.parse(storedTodos);
            if (Array.isArray(todos)) {
                return todos as TodoList;
            }
        } catch (e) {
            console.error("Failed to parse todos from localStorage", e);
        }
    }
    return [];
};

export const saveTodosToLocalStorage = (todos: TodoList) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};
