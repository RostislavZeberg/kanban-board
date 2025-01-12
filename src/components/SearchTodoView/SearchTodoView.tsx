import { FC } from "react"
import { Todo } from "../../utils/Interface"

interface SearchTodoViewProps {
    todo: Todo;
    setValueInput: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchTodoView: FC<SearchTodoViewProps> = ({ todo, setValueInput }) => {
    const dateStart = new Date(todo.startDay);
    const formattedDateStart = `${dateStart.getDate()}.${dateStart.getMonth() + 1}.${dateStart.getFullYear()}`;

    const dateEnd = new Date(todo.endDay);
    const formattedDateEnd = `${dateEnd.getDate()}.${dateEnd.getMonth() + 1}.${dateEnd.getFullYear()}`;

    return (
        <>
            <div className="todo__descr"><span className="todo__span">Начало:</span> {formattedDateStart}</div>
            <div className="todo__descr"><span className="todo__span">Окончание:</span> {formattedDateEnd}</div>
            <div className="todo__descr"><span className="todo__span">Описание:</span> {todo.text}</div>
        </>
    )
}