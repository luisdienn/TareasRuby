import type { ListOfTodos } from "../types.d";
import { Todo } from "./Todo";

interface Props {
    todos: ListOfTodos;
    onToggleCompleted: (id: string, completed: boolean) => void;
    onRemoveTodo: (id: string) => void;
}

export const Todos : React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleted}) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onToggleCompleted={onToggleCompleted}
                        onRemoveTodo={ onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

