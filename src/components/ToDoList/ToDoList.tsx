import { ButtonDeleteTodo } from "../ButtonDeleteTodo"
import { ToDoColumns } from "../ToDoColumns"

const listColumnsTodos = [
  {
    type: "todo",
    title: "To Do",
    mark: true,
  },
  {
    type: "in_progress",
    title: "In Progress",
    mark: false,
  },
  {
    type: "review",
    title: "Review",
    mark: false,
  },
  {
    type: "done",
    title: "Done",
    mark: false,
  },
]

export const ToDoList = () => {

  return (
    <div className="main__list list">
      {listColumnsTodos.map(column => (
        <ToDoColumns type={column.type} title={column.title} mark={column.mark}/>
      ))}

      <ButtonDeleteTodo />
    </div>
  )
}