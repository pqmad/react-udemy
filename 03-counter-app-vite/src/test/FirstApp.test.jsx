import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('pruebas FIRSTAPP', () => { 
  
    /*test('debe de hacer match con el snapshot', () => {
        const titulo="holis soy Madeline"; 
        const {container}=render (<FirstApp titulo={titulo}/>)
        expect(container).toMatchSnapshot();
     });*/
     test('mostrar el titulo en h1', () => { 
        const titulo="holis soy Madeline"; 
        const {container,getByText,getByTestId}=render (<FirstApp titulo={titulo}/>)
        expect(getByText(titulo)).toBeTruthy();
        //const h1=container.querySelector('h1');
        //expect(h1.innerHTML).toContain(titulo);
        expect(getByTestId("test-titulo").innerHTML).toContain(titulo);
      })

      test('mostrar el subtitulo', () => {
        const titulo="holis soy Madeline";  
        const subtitulo=34; 
        const {container,getByText,getAllByText}=render (<FirstApp titulo={titulo} subtitulo={subtitulo}/>)
        expect(getAllByText(subtitulo).length).toBe(2);
        
      })
 })