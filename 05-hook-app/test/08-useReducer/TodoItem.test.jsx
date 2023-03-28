import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Demo',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());


    test('debe de mostrar el Todo Pendiente de completar', () => {

        render(
            <TodoItem
                todo={todo}
                CambioEstado={onToggleTodoMock}
                borrar={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const textElement = screen.getByLabelText('h4');
        expect(textElement.className).toContain('align-self-center');
        expect(textElement.className).not.toContain('text-decoration-line-through');

    });


    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                CambioEstado={onToggleTodoMock}
                borrar={onDeleteTodoMock}
            />
        );

        const textElement = screen.getByLabelText('h4');
        expect(textElement.className).toContain('text-decoration-line-through');

    });


    test('h4 debe de llamar el ToggleTodo al hacer click', () => {

        render(
            <TodoItem
                todo={todo}
                CambioEstado={onToggleTodoMock}
                borrar={onDeleteTodoMock}
            />
        );

        const textElement = screen.getByLabelText('h4');
        fireEvent.click(textElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('button debe de llamar el deleteTodo', () => {

        render(
            <TodoItem
                todo={todo}
                CambioEstado={onToggleTodoMock}
                borrar={onDeleteTodoMock}
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });



});