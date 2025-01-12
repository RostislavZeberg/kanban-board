import { memo, useContext, useEffect } from "react"
import { ItemToDo } from "../ItemToDo"
import { dragging } from "../../utils/dragging"
import { TodosContext } from "../../utils/Context"
import { getTodosFromLocalStorage, saveTodosToLocalStorage } from "../../utils/localStorageService"

export const Done = memo(() => {
    const { todos, setTodos } = useContext(TodosContext);

    useEffect(() => {
        const savedTodos = getTodosFromLocalStorage();
        setTodos(savedTodos);
    }, []);

    const todosDone = todos.filter(el => el.type === "done").sort((a, b) => a.startDay - b.startDay);

    const mark: boolean = false

    return (
        <div
            onDragOver={dragging("done").handleOnDragOver}
            onDrop={dragging("done").handleOnDrop}
            className="list__item item"
        >
            <div className="item__top item__top-block">
                <div className="item__top-left">
                    <div className="item__icon item__icon-done"></div>
                    <h2 className="item__title">Review</h2>
                </div>
            </div>
            {todosDone.map(todo => (
                <ItemToDo key={todo.id} todo={todo} mark={mark} />
            ))}
        </div>
    )
})
