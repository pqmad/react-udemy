import { memo } from 'react'
export const Small = memo(({ valor }) => {
    console.log("me volví a dibujar :)")
    return (
        <small>{valor}</small>
    )
})

/*
memo --> para que no se redibuje cada vez, solo cuando las properties cambian se vuelve a redibujar





import React from 'react'
export const Small = React.memo(({ valor }) => {
    console.log("me volví a dibujar :)")
    return (
        <small>{valor}</small>
    )
})
*/




