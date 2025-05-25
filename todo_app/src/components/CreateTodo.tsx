import { useState } from "react";

interface Props {
    saveTodo: (title: string) => void;
}

export const CreateTodo : React.FC<Props> = ({saveTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveTodo(inputValue);
        setInputValue('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
                placeholder="¿Qué quieres hacer?"

            autoFocus
            style={{color: 'black'}}
        />
        </form>
    )

}
