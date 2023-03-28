const { render, screen, fireEvent } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-ejemplos");
const { useCounter } = require("../../src/hooks/useCounter");
const { useFetch } = require("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('prueba en el MultipleCustomHooks', () => {
    const mockIncremet = jest.fn();
    useCounter.mockReturnValue(
        {
            counter: 1,
            incrementar: mockIncremet
        })
    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('debe mostrar componentes por defecto', () => {

        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

        render(<MultipleCustomHooks />)
        expect(screen.getByText("Cargando..."))
        const nextButton = screen.getByRole('button', { name: "Next Quote" });
        expect(nextButton.disabled).toBeTruthy();
        //screen.debug();
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
    });
    test('debe llamar la funcion de incremetar', () => {
        useFetch.mockReturnValue(
            {
                data: [
                    { author: "Ariana", quote: "holis" }
                ],
                isLoading: false,
                hasError: null
            })

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: "Next Quote" });
        fireEvent.click(nextButton);

        expect(mockIncremet).toHaveBeenCalled()
    });
})