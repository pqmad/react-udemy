describe('pruebas en <DemoComponent>', () => { 
    test('no debe de fallar', ()=>{
        // 1. inicializacion
        const message1="hola mundo";

        // 2. estímulo
        const message2=message1.trim();

        // 3. observar el comportamiento
        expect(message1).toBe(message2);
    });
 }); 