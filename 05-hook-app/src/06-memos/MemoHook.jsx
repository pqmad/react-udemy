
import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const procesoPesado=(cant=100)=>{
    for (let i = 0; i < cant; i++) {
        console.log("empieza...")      
    }
    return `${cant} iteraciones realizadas`
}

export const MemoHook = () => {
    const { counter, incrementar } = useCounter(1)
    const [show, setShow] = useState(true)

    const valorMemorizado=useMemo(() => procesoPesado(counter), [counter]) //memoriza SOLO cada vez que el counter cambia
    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{valorMemorizado}</h4>
            <button
                className="btn btn-primary mt-2"
                onClick={() => incrementar(1)}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary mt-2"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
