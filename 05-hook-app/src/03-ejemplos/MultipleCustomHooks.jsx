import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    const {author,quote}= !!data && data[0]; //para que no de error al desestructurar un null -> !!null =false
    return (
        <>
            <h1>Breaking Bad</h1>
            <hr />
            {
                (isLoading)
                    ?
                    (
                        <div className="alert alert-info text-center">Cargando...</div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )

            }
             <button className="btn btn-primary mt-2" >Next Quote</button>
        </>
    )
}
// https://www.breakingbadapi.com/api/quotes/1