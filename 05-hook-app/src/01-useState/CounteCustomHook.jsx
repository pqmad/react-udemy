import { useCounter } from "../hooks/useCounter"

export const CounteCustomHook = () => {

    const { counter,
        incrementar,
        decrementar,
        reset} = useCounter()





    return (
        <>
            <h1>Counte CustomHook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>incrementar(2)} >+1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={()=>decrementar(3)} >-1</button>
        </>
    )
}
