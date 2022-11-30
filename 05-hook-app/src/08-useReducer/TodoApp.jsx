import { useEffect, useReducer } from 'react'
import { TodoAdd,TodoList, todoReducer} from './'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'recolectar la piedra del infinito',
    //     done: false,
    // }
]
const init=()=>{
    //si el localstorage es null entonces regresa un arreglo vacío
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

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

    return (
        <>
            <h1>To Do: 10, <small>pendientes: 2</small></h1>
            <hr />
            <div className='row'>
                
                <div className="col-7">
                    <TodoList todos={todos} borrar={handleDeleteTodo} CambioEstado={handleToggleToDo}/>
                </div>
                
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd agregar={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}
