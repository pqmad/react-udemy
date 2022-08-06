import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"

export const GifExpertApp = () => {
    const [Categorias, setCategorias] = useState(['One Punch','Dragon ball'])
    const agregar=(nuevo)=>{
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

        <ol>
            {Categorias.map(cat =>{
                return <li key={cat}>{cat}</li>
            })}
        </ol>
    </>
  )
}
