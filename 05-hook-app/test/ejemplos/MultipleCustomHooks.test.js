const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-ejemplos");
const { useFetch } = require("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useFetch")
describe('prueba en el MultipleCustomHooks', () => {

    test('debe mostrar componentes por defecto', () => {

        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

        render(<MultipleCustomHooks />)
        expect(screen.getByText("Cargando..."))
        const nextButton = screen.getByRole('button', { name: "Next Quote" });
        expect(nextButton.disabled).toBeTruthy();
        screen.debug();
    })

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue(
            {
                data: [
                    {
                        author: "Ariana",
                        quote: "holis"
                    }
                ],
                isLoading: false,
                hasError: null
            }
        )

        render(<MultipleCustomHooks />);
        expect(screen.getByText("holis")).toBeTruthy()
        expect(screen.getByText("Ariana")).toBeTruthy()
        const nextButton = screen.getByRole('button', { name: "Next Quote" });
        expect(nextButton.disabled).toBeFalsy();
        screen.debug();
    })
})