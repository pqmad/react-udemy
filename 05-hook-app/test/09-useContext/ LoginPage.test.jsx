import { fireEvent, render, screen } from "@testing-library/react";
import { userContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <userContext.Provider value={{ user: null }}>
                <LoginPage />
            </userContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');


    });


    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <userContext.Provider value={{ user: null, setuser: setUserMock }}>
                <LoginPage />
            </userContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: "mad",
            email: "mad@gmail.com",
        }
        )


    });


});