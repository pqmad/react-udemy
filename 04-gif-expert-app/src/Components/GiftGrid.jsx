//import { useState } from "react"
//import { useEffect } from "react"
//import { GetGif } from "../helpers/GetGif"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { ItemGrid } from "./ItemGrid"


export const GiftGrid = ({categoria}) => {
    const {imagenes, isloading} = useFetchGifs(categoria)
    //console.log({imagenes,isloading})
    /*
    const [imagenes, setImagenes] = useState([])    
    useEffect(() => {
        GetGif(categoria).then(newImg => setImagenes(newImg));
    }, [])
    */
    
   
    return (
        <>
            <h3>{categoria}</h3>
            {
                isloading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {imagenes.map((img) => (
                    <ItemGrid key={img.id} {...img}/>
                ))}
            </div>
        </>     
    )
}
