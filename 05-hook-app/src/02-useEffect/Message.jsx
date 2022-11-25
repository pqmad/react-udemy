import { useEffect, useState } from "react"

export const Message = () => {
  const [Coords, setCoords] = useState({x:0,y:0})
    useEffect(() => {
      // console.log("mensaje montado")
      const onMouseMove=({x,y})=>{
        // const coords={x,y}
        setCoords({x,y})
      }

      window.addEventListener('mousemove',onMouseMove
      // (event)=>{
      //   console.log(":)")
      //   // console.log(event)
      // }
      )
      return () => {
        window.removeEventListener('mousemove',onMouseMove)
        // console.log("mensaje desmontado")
      }
    }, [])
    
    return (
        <>
            <h3>Ya existe el usuario</h3>
            {JSON.stringify(Coords)}
        </>
    )
}
