
export const TodoItem = ({ todo, borrar, CambioEstado }) => {
    const { id, description, done } = todo


    return (
        <li className='list-group-item d-flex justify-content-between'>
            <h4
                onClick={() => CambioEstado(id)}
                className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
                aria-label='h4'
            >
                {description}
            </h4>
            <button
                onClick={() => borrar(id)}
                className="btn btn-danger mt-2"
            >
                Borrar
            </button>
        </li>
    )
}
