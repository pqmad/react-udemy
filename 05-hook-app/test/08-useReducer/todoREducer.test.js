import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('pruebas en el todoReducer', () => {
    const inicial = [{
        id: 1,
        description: 'demo tofo',
        done: false,
    }]
    test('debe regresar el estado inicial', () => {
        const newstate = todoReducer(inicial, {});
        expect(newstate).toBe(inicial) // verificar que sea exasctamente el mismo objeto
    })
    test('debe agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'demo add todo',
                done: false,
            }
        }
        const newstate = todoReducer(inicial, action);
        expect(newstate.length).toBe(2) // verificar que sea exasctamente el mismo objeto
        expect(newstate).toContain(action.payload) // verificar que sea exasctamente el mismo objeto
    })
    test('debe eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        }
        const newstate = todoReducer(inicial, action);
        expect(newstate.length).toBe(0)
    })

    test('debe cambiar estado en un todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }
        const newstate = todoReducer(inicial, action);
        expect(newstate[0].done).toBe(true)
    })
})