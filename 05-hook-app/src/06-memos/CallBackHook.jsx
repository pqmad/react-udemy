import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementar = useCallback(
    (aumento) => {
      setCounter((value) => value + aumento)
      //setCounter(counter+1)
    },
    [],
  )

  // useEffect(() => {
  //     incrementar();
  // }, [incrementar])

  // const incrementar=()=>{
  //     setCounter(counter+1)
  // }

  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />
      <ShowIncrement incremento={incrementar} />
    </>
  )
}
