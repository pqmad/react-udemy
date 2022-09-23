
//un hook es una función que retorna algo

import { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGif";

export const useFetchGifs = (categoria) => {
    const [imagenes, setImagenes] = useState([])    
    const [isloading, setisloading] = useState(true) 

    useEffect(() => {
        GetGif(categoria).then(newImg => setImagenes(newImg));
        setisloading(false);
    }, [])

  return{
    imagenes,
    isloading
  }
}
