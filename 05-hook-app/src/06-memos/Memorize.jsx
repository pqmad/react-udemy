
import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
    const { counter, incrementar } = useCounter(1)
    const [show, setShow] = useState(true)


    return (
        <>
            <h1>Counter: <Small valor={counter}/></h1>
            <hr />

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
