import type { AccionCarrito, ItemCarrito } from "../types";

type Props ={
    items: ItemCarrito[];
    dispatch: React.Dispatch<AccionCarrito>
}


export function CarritoCompras({ items, dispatch }: Props) {
    const total = items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
    
    return(
        <div>
            {items.map(item => (
                <div key = {item.producto.id}>
                    <p>{item.producto.nombre} (${item.producto.precio}) x {item.cantidad}</p>
                    <button onClick={() => dispatch({type: 'UPDATE_QUANTITY', payload: {productId: item.producto.id, quantity: item.cantidad-+1}})}> - </button>
                    <button onClick={() => dispatch({type: 'UPDATE_QUANTITY', payload: {productId: item.producto.id, quantity: item.cantidad +1}})}> + </button>
                    <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item.producto.id})}> Eliminar </button>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>


    );
}