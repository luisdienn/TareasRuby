import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Todo() {

    type Tarea = {
        descripcion: string;
        completada: boolean;
        id: number;
    }

    const [descripcion, setDescripcion] = useState("");
    const [tareas, setTareas] = useState<Tarea[]>([]);

    const handleAgregar = () => {
        setTareas([...tareas, { descripcion: descripcion, completada: false, id: Date.now() }]);

    }



    const eliminarTarea = (id: number) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    return (

        <div>

            <Link to="/" className="link-button">Home</Link>

            <h1>Lista de tareas</h1>
            <div style={{ paddingRight: "10px", display: "flex", justifyContent: "space-between", paddingBottom: "40px" }}>
                <input style={{ width: "200px", borderRadius: "5px", border: "1px solid #ccc", padding: "px" }} type="text" placeholder="Nueva tarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

                <Button onClick={handleAgregar} text="Agregar" classes="bg-yellow color-black hover-yellow" />


            </div>

            {tareas.length === 0 ? (
                <h3>No hay tareas</h3>
            ) : (
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <span>{tarea.descripcion}</span>
                            <Button onClick={() => eliminarTarea(tarea.id)} text="Completada" classes="bg-green color-black hover-green" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todo
