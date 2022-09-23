import { useState } from "react"

export const useCounter = (valor_inicial=10)=>{
    const [counter, setcounter] = useState(valor_inicial)
    const incrementar =(valor=1)=>{
        setcounter(counter+valor);
    }
    const decrementar =(valor=1)=>{
        setcounter(counter-valor);
    }
    const reset =()=>{
        setcounter(valor_inicial);
    }
    return{
        counter,
        incrementar,
        decrementar,
        reset,
    }
}