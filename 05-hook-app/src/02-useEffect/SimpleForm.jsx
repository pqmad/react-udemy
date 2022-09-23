import { useEffect, useState } from "react"


export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: "ariana",
        email: "ariana@yahoo.com"
    })

    const { username, email } = formState
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setformState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
        console.log("el useEffect")
    }, [])

    useEffect(() => {
        console.log("cambio en el formulario")
    }, [formState])

    useEffect(() => {
        console.log("cambio en el email")
    }, [email ])

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type={"text"}
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type={"email"}
                className="form-control mt-5"
                placeholder="ariana@gmial.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
