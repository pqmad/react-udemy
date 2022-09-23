import { useState } from "react"


export const CounterApp = () => {
    // const [counter, setcounter] = useState({
    //     c1: 0,
    //     c2: 5,
    //     c3: 10
    // })

    const [counter, setcounter] = useState({
        c1: 0,
        c2: 5,
        c3: 10
    })
    const {c1,c2,c3}=counter;
  return (
    <>
        <h1>Counter1: {c1}</h1>
        <h1>Counter2: {c2}</h1>
        <h1>Counter3: {c3}</h1>
        <hr/>
        {/* <button className="btn" onClick={()=>setcounter({c1:c1+1,c2:c2,c3:c3})}>+1</button> */}
        <button className="btn" onClick={()=>setcounter({...counter,c1:c1+1})}>+1</button>
    </>
  )
}
