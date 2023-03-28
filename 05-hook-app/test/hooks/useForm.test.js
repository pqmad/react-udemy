import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('prueba en el useForm', () => {

    const initialForm = {
        name: "Ariana",
        email: "ariana@gmail.com"
    };

    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        //console.log(result.current)
        expect(result.current).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
        );
    })

    test('debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange } = result.current;
        const NewName = "MADELINE";

        act(() => {
            onInputChange({ target: { name: "name", value: NewName } });
        })

        expect(result.current.name).toBe(NewName);
        expect(result.current.formState.name).toBe(NewName);
    })

    test('debe realizar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange, onResetForm } = result.current;
        const NewName = "MADELINE";

        act(() => {
            onInputChange({ target: { name: "name", value: NewName } });
            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    })
})