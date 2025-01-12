import { memo, useContext, useState } from "react"
import { ItemToDo } from "../ItemToDo/ItemToDo"
import { ToDoAddOrEdit } from "../ToDoAddOrEdit"
import { dragging } from "../../utils/dragging"
import { TodosContext } from "../../utils/Context"

export const ToDo = memo(() => {
  const { todos } = useContext(TodosContext);
  const [toggleToDoAddOrEdit, setToggleToDoAddOrEdit] = useState(false)
  const [toggleToDoId] = useState(0)

  const todosToDo = todos.filter(el => el.type === "todo").sort((a, b) => a.startDay - b.startDay);

  const mark: boolean = true

  return (
    <div
      onDragOver={dragging("todo").handleOnDragOver}
      onDrop={dragging("todo").handleOnDrop}
      className="list__item item"
    >

      <div className="item__top item__top-block">
        <div className="item__top-left">
          <div className="item__icon item__icon-todo"></div>
          <h2 className="item__title">To Do</h2>
        </div>
        <button
          className="btn-reset item__btn-add"
          onClick={() => setToggleToDoAddOrEdit(true)}
        >+ Добавить</button>
      </div>

      {
        toggleToDoAddOrEdit ?
          <ToDoAddOrEdit setToggleToDoAddOrEdit={setToggleToDoAddOrEdit} toggleToDoId={toggleToDoId} />
          : ''
      }
      
      {
        todosToDo.map(todo => (
          <ItemToDo key={todo.id} todo={todo} mark={mark} />
        ))
      }
    </div>
  )
})