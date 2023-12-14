import { authReducer } from "../../../src/auth/context"

describe('pruebas en al authReducer', () => { 
    test('retornar estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    })
 })