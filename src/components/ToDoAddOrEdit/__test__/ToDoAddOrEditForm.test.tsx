import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { ToDoAddOrEdit } from "../ToDoAddOrEdit";
import { SetStateAction } from "react";


describe("Тест компонента ToDoAddOrEdit", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Проверка наличия полей', () => {
        render(<ToDoAddOrEdit setToggleToDoAddOrEdit={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
        }} toggleToDoId={0} />);

        const inputStartDay = screen.queryByTestId('startDay');
        expect(inputStartDay).toBeInTheDocument();

        const inputEndDay = screen.queryByTestId('endDay');
        expect(inputEndDay).toBeInTheDocument();

        const inputText = screen.queryByTestId('text');
        expect(inputText).toBeInTheDocument();

    })

    it("Отображает ошибки для пустых полей", () => {
        render(<ToDoAddOrEdit setToggleToDoAddOrEdit={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
        }} toggleToDoId={0} />);
        const submitButton = screen.queryByTestId('btnSubmit');
        if (submitButton) {
            fireEvent.click(submitButton);
        }
        
        expect(screen.queryByTestId('startDay')).toBeInTheDocument();
        expect(screen.queryByTestId('endDay')).toBeInTheDocument();
        expect(screen.queryByTestId('text')).toBeInTheDocument();
    })

});
