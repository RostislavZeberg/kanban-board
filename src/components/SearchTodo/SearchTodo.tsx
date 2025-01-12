import { memo, useContext, useState } from "react";
import { TodosContext } from "../../utils/Context";
import { SearchTodoView } from "../SearchTodoView";
import { TodoList } from "../../utils/Interface";

export const SearchTodo = memo(() => {
    const { todos } = useContext(TodosContext);
    const [valueInput, setValueInput] = useState("");

    let todosFiter: TodoList = []

    const fromInput = valueInput.split(".")

    const date = `${Number(fromInput[2])}, ${Number(fromInput[1])}, ${Number(fromInput[0])}`
    const isDateValid = (date: string | number | Date) => !Number.isNaN(new Date(date).valueOf());

    if (isDateValid(new Date(date))) {
        todosFiter = todos.filter(el =>
            `${(new Date(el.startDay)).getDate()}.${(new Date(el.startDay)).getMonth() + 1}.${(new Date(el.startDay)).getFullYear()}` === fromInput.join('.')
            ||
            `${(new Date(el.endDay)).getDate()}.${(new Date(el.endDay)).getMonth() + 1}.${(new Date(el.endDay)).getFullYear()}` === fromInput.join('.')
        )
    } else {
        todosFiter = todos.filter(el => el.text.includes(valueInput))
    }

    const handlerSearchClear = () => {
        const searchInput = document.getElementById("search-input");
        if (searchInput !== null) {
            (searchInput as HTMLInputElement).value = "";
        }
        setValueInput("");
    };

    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="поиск..."
                id="search-input"
                onChange={(event) => setValueInput(event.target.value)}
            />
            <div className="search__icon"></div>
            <svg
                onClick={handlerSearchClear}
                className="search__clear"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                    fill="white"
                    fillOpacity="0.6"
                />
            </svg>
            <ul
                className={
                    valueInput !== "" && todos.length !== 0
                        ? "search__list list-reset"
                        : "search__list-None"
                }
                id="search-list"
                style={{ position: "absolute", top: 40 }}
            >
                {todosFiter.map((todo) => (
                    <li
                        className="search__item list-reset"
                        key={todo.id}
                    >
                        <SearchTodoView
                            todo={todo}
                            setValueInput={setValueInput}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
})