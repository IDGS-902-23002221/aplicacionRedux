import { createSlice } from "@reduxjs/toolkit";

// guarda nombres
const initialState = {
    nombres: [], 
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        agregarNombre: (state, action) => {
            state.nombres.push(action.payload);
        },
        quitarNombre: (state) => {
            state.nombres.pop();
        },
        borrarTodos: (state) => {
            state.nombres = []
        },
       
    },
});


// estas son las accion  
// estas osn para disparar 
// lass acciones que tenemos en nuestro slice 
export const {agregarNombre, quitarNombre, borrarTodos} = counterSlice.actions;

// esto es el reducer 
// es el que se va a exportar
// para que lo podamos usar en nuestro store 
export default counterSlice.reducer;