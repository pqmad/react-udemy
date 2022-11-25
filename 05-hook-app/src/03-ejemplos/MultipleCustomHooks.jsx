
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    const { counter, incrementar } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0]; //para que no de error al desestructurar un null -> !!null =false

    return (
        <>
            <h1>Breaking Bad</h1>
            <hr />
            {
                (isLoading)
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />

            }
            {/* se crearon componentes para que el ternario se lea mejor */ }
            <button
                className="btn btn-primary mt-2"
                disabled={isLoading}
                onClick={() => incrementar(1)}>
                Next Quote
            </button>
        </>
    )
}



// {
//     (isLoading)
//         ?
//         (
//             <LoadingQuote />
//             // <div
//             //     className="alert alert-info text-center">
//             //     Cargando...
//             // </div>
//         )
//         :
//         (
//             <Quote quote={quote} author={author} />
//             // <blockquote className="blockquote text-end">
//             //     <p className="mb-1">{quote}</p>
//             //     <footer className="blockquote-footer">{author}</footer>
//             // </blockquote>
//         )

// }
// 