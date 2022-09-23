import { useState } from "react"
import { AddCategory,GiftGrid } from "./Components"

export const GifExpertApp = () => {
    const [Categorias, setCategorias] = useState(['One Punch','Dragon ball'])
    const agregar=(nuevo)=>{
        if (Categorias.includes(nuevo)) {return;}
        setCategorias([nuevo,...Categorias])
    }
    return (
    <>
        {/*estara dividido en 3 partes
        titulo
        input
        listado de items
        */}
        <h1>GifExpertApp</h1>
        <AddCategory onNuevovalor={agregar}/>

        {Categorias.map(cat =>(<GiftGrid key={cat} categoria={cat}/>))}
    </>
  )
}
