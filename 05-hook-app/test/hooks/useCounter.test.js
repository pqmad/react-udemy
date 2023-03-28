import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"

describe('prueba en el useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter,
            incrementar,
            decrementar,
            reset, } = result.current;
        expect(counter).toBe(10);
        expect(incrementar).toEqual(expect.any(Function));
        expect(decrementar).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('debe retornar valor 100 en el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    })


    test('debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const {incrementar } = result.current;
        act(() => {
            incrementar();
            incrementar(2);
        })
        expect(result.current.counter).toBe(103);
    })

    test('debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrementar } = result.current;
        act(() => {
            decrementar();
            decrementar(2);
        })
        expect(result.current.counter).toBe(97);
    })

    test('debe reestablecer el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const {
            decrementar,
            reset, } = result.current;
        act(() => {
            decrementar(20);
            reset();

        })
        expect(result.current.counter).toBe(100);
    })
})