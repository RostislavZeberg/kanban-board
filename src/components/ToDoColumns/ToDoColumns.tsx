import { FC, useContext, useState } from "react"
import { TodosContext } from "../../utils/Context";
import { dragging } from "../../utils/dragging";
import { ItemToDo } from "../ItemToDo";
import { ToDoAddOrEdit } from "../ToDoAddOrEdit";

interface ToDoColumnsProps {
  type: string,
  title: string,
  mark: boolean,
}

export const ToDoColumns: FC<ToDoColumnsProps> = ({ type, title, mark }) => {
  const { todos } = useContext(TodosContext);
  const [toggleToDoAddOrEdit, setToggleToDoAddOrEdit] = useState(false)
  const [toggleToDoId] = useState(0)

  const todosToDo = todos.filter(el => el.type === type).sort((a, b) => a.startDay - b.startDay);

  return (
    <div
      onDragOver={dragging(type).handleOnDragOver}
      onDrop={dragging(type).handleOnDrop}
      className="list__item item"
    >

      <div className="item__top item__top-block">
        <div className="item__top-left">
          <div className="item__icon item__icon-todo"></div>
          <h2 className="item__title">{title}</h2>
        </div>
        {mark ?
          <button
            className="btn-reset item__btn-add"
            onClick={() => setToggleToDoAddOrEdit(true)}>
            + Добавить
          </button>
          :
          null}
      </div>

      {toggleToDoAddOrEdit ?
        <ToDoAddOrEdit setToggleToDoAddOrEdit={setToggleToDoAddOrEdit} toggleToDoId={toggleToDoId} />
        :
        ''}

      {todosToDo.map(todo => (
        <ItemToDo key={todo.id} todo={todo} mark={mark} />
      ))}
    </div>
  )
}