import { render, screen } from '@testing-library/react';
import { userContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Ariana'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <userContext.Provider value={{ user: null }}>
                <HomePage />
            </userContext.Provider>
        );
        // screen.debug()
        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');

    });


    test('debe de mostrar el componente CON el usuario', () => {

        render( 
            <userContext.Provider value={{ user }}>
                <HomePage /> 
            </userContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); 
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
    });

});