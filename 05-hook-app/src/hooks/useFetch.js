import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [estado, setEstado] = useState({
        data:null,
        isLoading:true,
        hasError: null
    })
    
    const getFetch=async()=>{
        setEstado({
            ...estado,
            isLoading:true
        })
        const resp= await fetch(url);
        const data = await resp.json();
        //console.log(data);
        setEstado({
            data,
            isLoading:false,
            hasError:null
        })
    }
    
    useEffect(() => {
        getFetch();
    }, [url])
    //retornar así para que se lea mejor que devuelve...
    return{
        data:           estado.data,
        isLoading:      estado.isLoading,
        hasError:       estado.hasError
    };
}
