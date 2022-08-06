import { render,screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('pruebas FIRSTAPP', () => { 
  const titulo="holis soy Madeline"; 
  const subtitulo=34;
  
        
    test('debe de hacer match con el snapshot', () => {
      const {container}=render (<FirstApp titulo={titulo} subtitulo={subtitulo}/>)
      expect(container).toMatchSnapshot();
     });

    test('mostrar el titulo en h1', () => { 
      render (<FirstApp titulo={titulo} subtitulo={subtitulo}/>)
      expect(screen.getByText(titulo)).toBeTruthy();
      expect(screen.getByTestId("test-titulo").innerHTML).toContain(titulo);
    });

    test('mostrar el subtitulo', () => {
        render (<FirstApp titulo={titulo} subtitulo={subtitulo}/>)
        expect(screen.getAllByText(subtitulo).length).toBe(2);
        
    });
 })