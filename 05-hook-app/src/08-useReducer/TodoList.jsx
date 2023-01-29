
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], borrar, CambioEstado }) => {

    return (
        <ul className='list-group'>
            {
                todos.map((todo) =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        borrar={borrar}
                        CambioEstado={CambioEstado}
                    />
                )
            }
        </ul>
    )
}
