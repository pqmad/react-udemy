//esto para hacer un formulario general

import { useState } from "react"

export const useForm = (inicialForm = {}) => {
    const [formState, setformState] = useState(inicialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setformState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setformState(inicialForm)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
