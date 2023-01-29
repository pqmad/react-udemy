
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-ejemplos";

export const Layout = () => {
    const { counter, incrementar } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0]; 

    return (
        <>
            <h1>Breaking Bad</h1>
            <hr />
            {
                (isLoading)
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />

            }
            <button
                className="btn btn-primary mt-2"
                disabled={isLoading}
                onClick={() => incrementar(1)}>
                Next Quote
            </button>
        </>
    )
}
