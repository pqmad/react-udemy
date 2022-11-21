import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
      console.log("mensaje montado")
    
      return () => {
        console.log("mensaje desmontado")
      }
    }, [])
    
    return (
        <>
            <h3>Ya existe el usuario</h3>
        </>
    )
}
