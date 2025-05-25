import type { Todo as TodoType } from "../types.d";

interface Props extends TodoType {
    onToggleCompleted: (id: string, completed: boolean) => void;
    onRemoveTodo: (id: string) => void;
}

export const Todo : React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleted}) => {
    return (
        <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={(e) => {onToggleCompleted(id, e.target.checked)}}/>
            <label>{title}</label>
            <button className="destroy" onClick={() => {onRemoveTodo(id)}}/>
        </div>
    )
}
