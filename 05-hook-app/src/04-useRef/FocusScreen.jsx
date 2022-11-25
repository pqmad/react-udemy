import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {
    const referencia_nombre = useRef() //hace referencia a algo
    const OnClick=()=>{
        referencia_nombre.current.select() 
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={referencia_nombre}
                type={"text"}
                placeholder="ingrese nombre"
                className="form-control mt-2"
            />
            <input
                type={"text"}
                placeholder="ingrese apellido"
                className="form-control mt-2"
            />
            <input
                type={"text"}
                placeholder="ingrese correo"
                className="form-control mt-2"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={()=>OnClick()}>
                Set Focus
            </button>
        </>
    )
}
