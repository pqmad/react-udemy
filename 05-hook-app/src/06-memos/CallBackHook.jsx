import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)
    
    const incrementar = useCallback(
      () => {
        setCounter((value)=> value+1)
        //setCounter(counter+1)
      },
      [],
    )
    
    // const incrementar=()=>{
    //     setCounter(counter+1)
    // }

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <ShowIncrement incremento={incrementar}/>
        </>
    )
}
