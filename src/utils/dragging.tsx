import { useContext, useState } from "react";
import { saveTodosToLocalStorage } from "./localStorageService";
import { TodosContext } from "./Context";

export function dragging(typeName: string) {
    const { todos, setTodos } = useContext(TodosContext);

    function handleOnDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleOnDrop(e: React.DragEvent) {
        todos.filter(el => el.id.toString() === e.dataTransfer.getData("id"))[0].type = typeName
        saveTodosToLocalStorage(todos);
        setTodos([...todos])
    }

    return { handleOnDragOver, handleOnDrop }
}
