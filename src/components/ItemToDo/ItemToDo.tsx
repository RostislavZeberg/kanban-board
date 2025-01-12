import { FC, useState } from "react"
import { Todo } from "../../utils/Interface"
import { ToDoAddOrEdit } from "../ToDoAddOrEdit";

interface ItemToDoProps {
    todo: Todo,
    mark: boolean,
}

export const ItemToDo: FC<ItemToDoProps> = ({ todo, mark }) => {
    const [toggleToDoAddOrEdit, setToggleToDoAddOrEdit] = useState(false)
    const [toggleToDoId, setToggleToDoId] = useState(0)

    const dateStart = new Date(todo.startDay);
    const formattedDateStart = `${dateStart.getDate()}.${dateStart.getMonth() + 1}.${dateStart.getFullYear()}`;
  
    const dateEnd = new Date(todo.endDay);
    const formattedDateEnd = `${dateEnd.getDate()}.${dateEnd.getMonth() + 1}.${dateEnd.getFullYear()}`;

    const handlerShowToDoEdit = () => {
        setToggleToDoAddOrEdit(true)
        setToggleToDoId(todo.id)
    }

    function handleOnDrag(e: React.DragEvent, id: string) {
        e.dataTransfer.setData("id", id);
    }

    return (
        <div
            draggable
            onDragStart={(e) => {
                handleOnDrag(e, todo.id.toString());
            }}
            className={todo.type !== "done" ?
                (dateEnd > new Date() ?
                    "item__todo todo"
                    : "item__todo todo todo-error")
                : "item__todo todo"
            }
        >
            <>
                <div className="todo__descr"><span className="todo__span">Начало:</span> {formattedDateStart}</div>
                <div className="todo__descr"><span className="todo__span">Окончание:</span> {formattedDateEnd}</div>
                <div className="todo__descr"><span className="todo__span">Описание:</span> {todo.text}</div>
                {mark ?
                    <button onClick={handlerShowToDoEdit} type="submit" className="btn-reset">
                        <svg className="todo__btn" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.08" />
                            <path d="M26.5793 10.9449C26.2042 10.57 25.6956 10.3594 25.1653 10.3594C24.6349 10.3594 24.1263 10.57 23.7512 10.9449L22.1063 12.5909L27.4093 17.8939L29.0543 16.2499C29.2401 16.0642 29.3874 15.8437 29.488 15.601C29.5886 15.3583 29.6403 15.0982 29.6403 14.8354C29.6403 14.5727 29.5886 14.3126 29.488 14.0699C29.3874 13.8272 29.2401 13.6067 29.0543 13.4209L26.5793 10.9449ZM25.9953 19.3079L20.6922 14.0049L11.8572 22.8399L10.7812 29.2199L17.1612 28.1429L25.9953 19.3079Z" fill="white" />
                        </svg>
                    </button>
                    : ''}
            </>
            {toggleToDoAddOrEdit ? <ToDoAddOrEdit toggleToDoId={toggleToDoId} setToggleToDoAddOrEdit={setToggleToDoAddOrEdit} /> : ''}
        </div>

    )
}