import { memo } from "react";

export const ShowIncrement = memo(({incremento}) => {
    console.log("me volví a dibujar :)")
    return (
        <button
            className="btn btn-primary mt-2"
            onClick={() => {incremento(5);}}
        >
            Incrementar
        </button>
    )
})
