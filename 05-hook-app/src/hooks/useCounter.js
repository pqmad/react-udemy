import { useState } from "react"

export const useCounter = (valor_inicial = 10) => {
    const [counter, setcounter] = useState(valor_inicial)
    const incrementar = (valor = 1) => {
        setcounter((current)=> current + valor);
    }
    const decrementar = (valor = 1) => {
        setcounter((current)=> current - valor);
    }
    const reset = () => {
        setcounter(valor_inicial);
    }
    return {
        counter,
        incrementar,
        decrementar,
        reset,
    }
}