import { useState } from "react";
import { Todos } from "../components/Todos";
import 'todomvc-app-css/index.css'
import { Header } from "../components/Header";
import { Link } from "react-router-dom";


const mockTodos = [
    {
        id: '1',
        title: "Hacer la tarea",
        completed: false,
    },
    {
        id: '2',
        title: "Ver el video de React",
        completed: false,
    },
    {
        id: '3',
        title: "Codear el proyecto",
        completed: false,
    },
]


function TodoVideo() {
    const [todos, setTodos] = useState(mockTodos);

    const handleRemove = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = (id: string, completed: boolean) => {
        const newTodo = todos.map(todo => {
            if (todo.id === id) {
                return{
                    ...todo,
                    completed
                }
            }
            return todo;
        })
        setTodos(newTodo);
    }

    const handleAddTodo = (title: string) => {
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    }

    return (
        <>
<Link to="/" className="link-button">Home</Link>

        <div className="todoapp" style={{ width: '500px', textAlign: 'left' }}>
            <Header onAddTodo={handleAddTodo}/>
            <Todos
                onToggleCompleted={handleComplete}
                onRemoveTodo={handleRemove}
                todos={todos} />
        </div>
        </>
    )
}

export default TodoVideo;