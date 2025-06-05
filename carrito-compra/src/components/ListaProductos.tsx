import type { Producto } from "../types";
import { TarjetaProducto } from "./TarjetaProducto";

type Props ={
    productos: Producto[];
    onAddToCart: (producto: Producto) => void;
}

export function ListaProductos({ productos, onAddToCart }: Props) {
    return(
        <>
        <div>
            {productos.map((p => (
                <TarjetaProducto key={p.id} producto={p} onAddToCart={onAddToCart} />

            )))}
        </div>

        

        </>
    );
}