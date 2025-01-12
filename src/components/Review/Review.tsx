import { memo, useContext } from "react"
import { ItemToDo } from "../ItemToDo"
import { dragging } from "../../utils/dragging"
import { TodosContext } from "../../utils/Context"

export const Review = memo(() => {
    const { todos, setTodos } = useContext(TodosContext);
    const todosToDo = todos.filter(el => el.type === "review").sort((a, b) => a.startDay - b.startDay);

    const mark: boolean = false

    return (
        <div
            onDragOver={dragging("review").handleOnDragOver}
            onDrop={dragging("review").handleOnDrop}
            className="list__item item"
        >
            <div className="item__top">
                <div className="item__icon item__icon-review"></div>
                <h2 className="item__title">Review</h2>
            </div>
            {todosToDo.map(todo => (
                <ItemToDo key={todo.id} todo={todo} mark={mark} />
            ))}
        </div>
    )
})