export interface Producto  {
    id: string,
    nombre: string,
    precio: number,
    descripcion: string,
    imagen?: string
}

export interface ItemCarrito{
    producto: Producto,
    cantidad: number
}

export type TipoAccionCarrito = 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY';

export type AccionCarrito = 
 | { type: 'ADD_ITEM'; payload: Producto; }
 | { type: 'REMOVE_ITEM'; payload: string; }
 | { type: 'UPDATE_QUANTITY'; payload: {productId: string; quantity: number; }; }
