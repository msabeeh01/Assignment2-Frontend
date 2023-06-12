import React from 'react';
import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {student: action.payload, admin: null};
        case 'LOGIN_ADMIN':
            return {admin: action.payload, student: null};
        case 'LOGOUT':
            localStorage.removeItem('studentNum');
            localStorage.removeItem('admin')
            return {student: null, admin: null};
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        student: JSON.parse(localStorage.getItem('studentNum'))|| null,
        admin: JSON.parse(localStorage.getItem('admin'))|| null
    })

    console.log("AuthContext state: ", state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}