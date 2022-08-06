import { getSaludo } from "../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.test', () => { 
    test('Debe retornar "Hola Ariana', ()=>{
        const nombre="Ariana";
        const mensaje=getSaludo(nombre);
        expect(mensaje).toBe(`Hola ${nombre}`);
    });
 }); 