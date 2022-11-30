import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ agregar }) => {
    const { description, onInputChange, onResetForm } = useForm({ description: ' ' })
    
    const submitForm = (e) => {
        e.preventDefault();
        if(description.length<=1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        agregar(newTodo);
        onResetForm();
    }
    
    return (
        <form onSubmit={submitForm}>
            <input
                type={"text"}
                placeholder="que hago?"
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type={"submit"}
                className="btn btn-primary mt-2"
            >
                Submit
            </button>
        </form>
    )
}
