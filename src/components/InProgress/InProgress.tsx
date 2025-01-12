import { memo, useContext } from "react"
import { ItemToDo } from "../ItemToDo"
import { TodosContext } from "../../utils/Context"
import { dragging } from "../../utils/dragging";

export const InProgress = memo(() => {
    const { todos } = useContext(TodosContext);

    const todosToDo = todos.filter(el => el.type === "in_progress").sort((a, b) => a.startDay - b.startDay);

    const mark: boolean = false

    return (
        <div
            onDragOver={dragging("in_progress").handleOnDragOver}
            onDrop={dragging("in_progress").handleOnDrop}
            className="list__item item"
        >
            <div className="item__top">
                <div className="item__icon item__icon-inProgress"></div>
                <h2 className="item__title">In Progress</h2>
            </div>
            {todosToDo.map(todo => (
                <ItemToDo key={todo.id} todo={todo} mark={mark} />
            ))}
        </div>
    )
})