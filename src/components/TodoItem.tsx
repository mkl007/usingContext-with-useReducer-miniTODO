import { useContext } from "react"
import { Todo } from "../interfaces/interfaces"
import { TodoContext } from "../context/TodoContext"
import { useTodo } from "../hooks/useTodo"



interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext(TodoContext)
    const { toggleTodo} = useTodo()

    return (
        <div>
            <li
                onDoubleClick={ () => toggleTodo(todo.id)}
                style={{
                    cursor: 'pointer',
                    textDecoration: todo.completed ? 'line-through' : ''
                }}
            >
                {todo.desc}
            </li>
        </div>
    )
}
