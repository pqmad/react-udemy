// import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    const {formState, onResetForm,onInputChange,username,email,password} =useForm( {
        username: "",
        email: "",
        password:""

    })
    

    return (
        <>
            <h1>FormWithCustomHook</h1>
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
            <input
                type={"password"}
                className="form-control mt-5"
                placeholder="***********"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <br/>
            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
        
        </>
    )
}
