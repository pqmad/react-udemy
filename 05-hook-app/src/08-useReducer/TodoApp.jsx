
import { useTodo } from '../hooks'
import { TodoAdd,TodoList} from './'


export const TodoApp = () => {
    
    
    const { todos, contador, pendientes,handleNewTodo, handleDeleteTodo, handleToggleToDo  } = useTodo()
    

    return (
        <>
            <h1>To Do: {contador}, <small>pendientes: {pendientes}</small></h1>
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
