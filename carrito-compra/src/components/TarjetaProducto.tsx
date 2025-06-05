import type { Producto } from "../types";

type Props = {
  producto: Producto;
  onAddToCart: (producto: Producto) => void;
};

export function TarjetaProducto({ producto, onAddToCart }: Props) {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button onClick={() => onAddToCart(producto)}>Añadir al carrito</button>
    </div>
  );
}
