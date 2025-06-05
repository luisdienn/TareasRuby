import type { ItemCarrito, AccionCarrito } from "../types";

export const initialCart: ItemCarrito[] = [];

export function cartReducer( state: ItemCarrito[], action: AccionCarrito): ItemCarrito[]{
    switch (action.type) {
        case 'ADD_ITEM':{
            const existe = state.find(item => item.producto.id === action.payload.id);
            if(existe){
                return state.map(item => 
                    item.producto.id === action.payload.id?
                    {...item, cantidad: item.cantidad + 1} : item
                );
            }
            return [...state, { producto: action.payload, cantidad: 1 }];
        }
        case 'REMOVE_ITEM': {
            return state.filter(item => item.producto.id !== action.payload);
        }
        case 'UPDATE_QUANTITY':{
            return state.map(item => 
                item.producto.id === action.payload.productId ?
                { ...item, cantidad: action.payload.quantity } : item
            )
            .filter(item => item.cantidad > 0);
        }
        default:
            return state;
    }
}



