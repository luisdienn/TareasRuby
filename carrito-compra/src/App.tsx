import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { cartReducer, initialCart } from "./reducers/cartReducer";
import type { ItemCarrito } from "./types";
import type { Producto } from "./types";
import { ListaProductos } from "./components/ListaProductos";
import { CarritoCompras } from "./components/CarritoCompras";
import { BarraBusqueda } from "./components/BarraBusqueda";

const productosEjemplo: Producto[] = [
  {
    id: "1",
    nombre: "Laptop",
    descripcion: "Laptop con 16GB RAM y SSD",
    precio: 1200,
  },
  {
    id: "2",
    nombre: "Mouse",
    descripcion: "Mouse Bluetooth",
    precio: 25,
  },
  {
    id: "3",
    nombre: "Teclado",
    descripcion: "Teclado Bluetooth",
    precio: 80,
  },
];

function App() {
  //lazy loading
  const init = (): ItemCarrito[] => {
    const data = localStorage.getItem("carrito");
    return data ? JSON.parse(data) : [];
  };

  const [cartState, dispatch] = useReducer(cartReducer, [], init);
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearchChange = (term: string) => setsearchTerm(term);

  const productosFiltrados = productosEjemplo.filter((p) =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cartState));
  }, [cartState]);

  const handleAddToCart = (producto: Producto) => {
    dispatch({ type: "ADD_ITEM", payload: producto });
  };

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px", padding: "0 0 40px 0" }}>
        <h1>Carrito de Compras</h1>
        <BarraBusqueda onSearchChange={handleSearchChange} />
      </div>


      <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2>PRODUCTOS</h2>
          <ListaProductos
            productos={productosFiltrados}
            onAddToCart={handleAddToCart}
          />
        </div>


        
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2>CARRITO</h2>
          <CarritoCompras items={cartState} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}

export default App;
