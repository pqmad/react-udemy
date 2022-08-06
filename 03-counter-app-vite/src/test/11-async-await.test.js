import { getImagen } from "../base-pruebas/11-async-await"

describe('Pruebas 11-async-await', () => { 
    test('debe retornar url de la imagen', async() => { 
        const url=await getImagen();
        expect(url).toEqual(expect.any(String));
     })
    

 })