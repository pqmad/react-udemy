import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";
describe('Pruebas 05-funciones', () => { 
    test('debe retornar un objeto', () => { 
        const testPrueba={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user= getUser();
        expect(user).toEqual(testPrueba)
        //para objetos se usa toEqual o el toStrickEqual
    })
    test('debe retornar un objeto', () => { 
        const testPrueba={
            uid: 'ABC567',
            username: 'Ariana'
        };
        const user= getUsuarioActivo('Ariana');
        expect(user).toEqual(testPrueba)
        //para objetos se usa toEqual o el toStrickEqual
    })
})