import { fireEvent, render,screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"

describe('CounterApp tarea', () => { 
    
    test('debe hacer match con el snapshot', () => { 
        render( <CounterApp value={100}/> )
        expect(screen.container).toMatchSnapshot();
     });

     test('debe mostrar valor inicial de 100', () => { 
        render( <CounterApp value={100}/> )
        expect(screen.getByText(100)).toBeTruthy();
     });

 })

 describe('CounterApp', () => { 
    const valorinicial=10;
    
    test('debe incremetar con el botón +1', () => { 
        render( <CounterApp value={valorinicial}/> )
        fireEvent.click(screen.getByText("+1"))
        expect(screen.getByText("11")).toBeTruthy();
     });

     test('debe disminuir con el botón -1', () => { 
        render( <CounterApp value={valorinicial}/> )
        fireEvent.click(screen.getByText("-1"))
        expect(screen.getByText("9")).toBeTruthy();
     });
     test('debe funcionar el botón Reset', () => { 
      render( <CounterApp value={valorinicial}/> )
      fireEvent.click(screen.getByRole('button', {name:'reinicar'}));
      expect(screen.getByText(valorinicial)).toBeTruthy();
   });

 })