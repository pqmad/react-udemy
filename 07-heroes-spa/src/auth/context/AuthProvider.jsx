import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


// const initialState = {
//     logged: false,
// }
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user
    }
    // return user ? { logged: true, user } : { logged: false };
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {},init);

    const login = (name = "") => {
        const user = {
            name: name,
            id: 123,
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: types.login,
            payload: user
        })
        
    }


    const logout = () => {

        localStorage.removeItem('user');
        dispatch({
            type: types.logout,
            payload: null
        })
    }
    return (
        <AuthContext.Provider value={{...state, login: login, logout:logout}}>
            {children}
        </AuthContext.Provider>
    )
}
