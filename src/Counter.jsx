import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarNombre, borrarTodos } from "./counterSlice";

export default function Counter(){
    const nombres = useSelector((state) => state.counter.nombres);
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState("");

    return(
        <div className="card">
            <h1> Lista de nombres con redux </h1>

        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <button onClick={() => {dispatch(agregarNombre(nombre)); setNombre(""); }}>
                Agregar
            </button>

            <button onClick={() => dispatch(borrarTodos())}> 
                Borrar todos
            </button>

            <ul>
                {nombres.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
        </div>
    )
}