import { useState } from "react";

type Props = {
    onSearchChange: (searchTerm: string) => void
}

export function BarraBusqueda({ onSearchChange }: Props) {
    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        onSearchChange(value);
    };

    return (
        <div>
            <input
                value={search}
                type="text"
                placeholder="Buscar productos..."
                onChange={handleChange}
            />
        </div>
    );
}