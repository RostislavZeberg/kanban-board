import '@testing-library/jest-dom'
import {render} from "@testing-library/react"
import { ToDoList } from '../ToDoList'

it('Проверяем что компоненты рендерится', async () => {
    render(<ToDoList/>)
})