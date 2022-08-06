import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heroes";

describe('Preubas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por id', () => { 
        const id=1;
        const heroe=getHeroeById(id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })
     test('getHeroeById debe retornar un undefined si no existe', () => { 
        const id=145;
        const heroe=getHeroeById(id);
        expect(heroe).toBeFalsy(); //para null o undefiend
     })


     test('getHeroesByOwner debe retornar un arreglo DC', () => { 
        const owner="DC";
        const heroe=getHeroesByOwner(owner);
        expect(heroe.length).toBe(3); 
        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
     })
     test('getHeroesByOwner debe retornar un arreglo marvel', () => { 
        const owner="Marvel";
        const heroe=getHeroesByOwner(owner);
        expect(heroe.length).toBe(2); 
        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
     })
 })