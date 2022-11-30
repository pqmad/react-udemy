import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer"

const init=()=>{
    //si el localstorage es null entonces regresa un arreglo vacío
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )
      }, [todos])

    const handleNewTodo=(todo)=>{
        const action={
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action) //para mandar la accion al reducer
    }
    
    const handleDeleteTodo=(id)=>{
        const action={
            type:'[TODO] Remove Todo',
            payload:id
        }
        dispatch(action)
    }
    
    const handleToggleToDo=(id)=>{
        const action={
            type:'[TODO] Toggle Todo',
            payload:id
        }
        dispatch(action)
    }
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleToDo,
        contador:todos.length, 
        pendientes:todos.filter(todo=>!todo.done).length
    }
}


