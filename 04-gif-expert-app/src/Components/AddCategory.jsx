import { useState } from "react"


export const AddCategory = ({onNuevovalor}) => {
    const [valor, setValor] = useState()
    const cambio=(event)=>{
        console.log(event.target.value)
        setValor(event.target.value)
    }
    
    const onsubmit=(event)=>{
        event.preventDefault();
        const nuevoval=valor.trim();
        if (nuevoval.length <=1) return;
            onNuevovalor(nuevoval);
            console.log(nuevoval);
            setValor("");
    }

    return (
        <form onSubmit={onsubmit}>
        <input 
            type='text' 
            placeholder="Agregar Categoria"
            onChange={cambio}
            value={valor}
        />
        </form>
    )
}
