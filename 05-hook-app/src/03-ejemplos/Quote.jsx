import { useRef, useState } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    useLayoutEffect(() => {
        const{width,height}=(pRef.current.getBoundingClientRect())
        setBoxSize({width, height})
    }, [quote])

    
    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <p ref={pRef} className="mb-1">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
            <hr/>
        </>
    )
}


/*
useLayoutEffect --->
Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica.
*/