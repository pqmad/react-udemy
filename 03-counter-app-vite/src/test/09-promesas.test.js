import { getHeroeByIdAsync } from "../base-pruebas/09-promesas"

describe('Pruebas de 09-promesas', () => { 
    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 
        const id=1;
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toEqual({ id: 1,  name: 'Batman',  owner: 'DC' });
                done();
            })
            
        ;
        
     })
     test('getHeroeByIdAsync debe retornar un error', (done) => { 
        const id=145;
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error =>{
                expect(error).toBe('No se pudo encontrar el héroe '+id );
                done();
            })
            
        ;
        
     })
 })