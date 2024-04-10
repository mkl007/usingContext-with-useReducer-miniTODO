import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE:  TodoState = {
    todoCount: 2,
    todos: [
        {
            id:'1',
            desc:'Recolectar las Gemas del Infinito',
            completed: false
        },
        {
            id:'2',
            desc:'Gema del alma',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

interface Props{
    children: React.JSX.Element | React.JSX.Element[]
}

export const TodoProvider = ({children} : Props) => {
    const [todoState, dispatch]  = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string ) => {
        dispatch({type: 'toggleTodo', payload: {id}})
    }

    return(
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}