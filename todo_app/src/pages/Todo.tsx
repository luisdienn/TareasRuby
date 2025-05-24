import { useState } from "react";
import { Link } from "react-router-dom";

function Todo() {

    type Tarea = {
        descripcion: string;
        completada: boolean;
        id: number;
    }

    const [descripcion, setDescripcion] = useState("");
    const [tareas, setTareas] = useState<Tarea[]>([]);

    const eliminarTarea = (id: number) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    return (
        
        <div>
            
            <Link to="/" className="link-button">Home</Link>
            
            <h1>Lista de tareas</h1>
            <div style={{ paddingRight: "10px", display: "flex", justifyContent: "space-between" }}>
                <input style={{ width: "200px", borderRadius: "5px", border: "1px solid #ccc", padding: "px" }} type="text" placeholder="Nueva tarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />


                <button onClick={() => {
                    setTareas([...tareas, { descripcion: descripcion, completada: false, id: Date.now() }]);
                }}>Agregar</button>
            </div>
            <br />
            <br />
            {tareas.length === 0 ? (
                <p>No hay tareas</p>
            ) : (
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                            <span>{tarea.descripcion}</span>
                            <button onClick={() => eliminarTarea(tarea.id)}>
                                Completada
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todo
