import { memo, useContext, useState } from "react";
import { TodosContext } from "../../utils/Context";
import { saveTodosToLocalStorage } from "../../utils/localStorageService";

export const ButtonDeleteTodo = memo(() => {
    const { todos, setTodos } = useContext(TodosContext);
    const [ viewDtnDelete, setViewDtnDelete] = useState(false);

    function handleOnDragOverDelete(e: React.DragEvent) {
        e.preventDefault();
        setViewDtnDelete(true)
    }

    function handleOnDragLeaveDelete(e: React.DragEvent) {
        e.preventDefault();
        setViewDtnDelete(false)
    }

    function handleOnDropDelete(e: React.DragEvent) {
        const newTodos = todos.filter(el => el.id.toString() !== e.dataTransfer.getData("id"));
        saveTodosToLocalStorage(newTodos);
        setTodos(newTodos)
        setViewDtnDelete(false)
    }

    const handlerDeleteTodo = () => {
        const newTodos = todos.filter(el => el.type !== "done");
        saveTodosToLocalStorage(newTodos);
        setTodos(newTodos)
    }

    return (
        <button
            onDragOver={handleOnDragOverDelete}
            onDragLeave={handleOnDragLeaveDelete}
            onDrop={handleOnDropDelete}
            onClick={handlerDeleteTodo}
                        className={viewDtnDelete ? "btn-delete btn-reset btn-delete-actin" : "btn-delete btn-reset"}
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7264 3.27586H14.0364V2.38586C14.0327 1.75568 13.7813 1.15224 13.3364 0.705863C13.1148 0.483488 12.8514 0.307154 12.5613 0.187016C12.2713 0.0668789 11.9603 0.00531256 11.6464 0.00586303H8.38641C8.07246 0.00531256 7.76152 0.0668789 7.47147 0.187016C7.18142 0.307154 6.91801 0.483488 6.69641 0.705863C6.25522 1.15386 6.00746 1.7571 6.00641 2.38586V3.27586H1.31641C1.11749 3.27586 0.926728 3.35488 0.786076 3.49553C0.645424 3.63618 0.566406 3.82695 0.566406 4.02586C0.566406 4.22478 0.645424 4.41554 0.786076 4.55619C0.926728 4.69685 1.11749 4.77586 1.31641 4.77586H2.73641V16.5359C2.73233 16.9916 2.8186 17.4437 2.99024 17.8659C3.16188 18.2882 3.41549 18.6722 3.73641 18.9959C4.39074 19.637 5.27034 19.996 6.18641 19.9959H13.8064C14.7225 19.996 15.6021 19.637 16.2564 18.9959C16.5773 18.6722 16.8309 18.2882 17.0026 17.8659C17.1742 17.4437 17.2605 16.9916 17.2564 16.5359V4.77586H18.6864C18.8853 4.77586 19.0761 4.69685 19.2167 4.55619C19.3574 4.41554 19.4364 4.22478 19.4364 4.02586C19.4364 3.82695 19.3574 3.63618 19.2167 3.49553C19.0761 3.35488 18.8853 3.27586 18.6864 3.27586H18.7264ZM7.52641 2.38586C7.52645 2.27044 7.54946 2.15618 7.5941 2.04973C7.63873 1.94329 7.70411 1.84679 7.78641 1.76586C7.95173 1.60236 8.17391 1.50919 8.40641 1.50586H11.6664C11.7834 1.50513 11.8994 1.52775 12.0076 1.5724C12.1158 1.61704 12.214 1.68281 12.2964 1.76586C12.4599 1.93118 12.5531 2.15337 12.5564 2.38586V3.27586H7.55641L7.52641 2.38586ZM8.85641 14.9959C8.85641 15.2611 8.75105 15.5154 8.56351 15.703C8.37598 15.8905 8.12162 15.9959 7.85641 15.9959C7.59119 15.9959 7.33684 15.8905 7.1493 15.703C6.96176 15.5154 6.85641 15.2611 6.85641 14.9959V9.56586C6.85641 9.30065 6.96176 9.04629 7.1493 8.85876C7.33684 8.67122 7.59119 8.56586 7.85641 8.56586C8.12162 8.56586 8.37598 8.67122 8.56351 8.85876C8.75105 9.04629 8.85641 9.30065 8.85641 9.56586V14.9959ZM13.2164 14.9959C13.2164 15.2611 13.111 15.5154 12.9235 15.703C12.736 15.8905 12.4816 15.9959 12.2164 15.9959C11.9512 15.9959 11.6968 15.8905 11.5093 15.703C11.3218 15.5154 11.2164 15.2611 11.2164 14.9959V9.56586C11.2164 9.30065 11.3218 9.04629 11.5093 8.85876C11.6968 8.67122 11.9512 8.56586 12.2164 8.56586C12.4816 8.56586 12.736 8.67122 12.9235 8.85876C13.111 9.04629 13.2164 9.30065 13.2164 9.56586V14.9959Z" fill="white" fillOpacity="0.8" />
            </svg>
        </button>
    )
})