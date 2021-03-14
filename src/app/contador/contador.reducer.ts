import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";

//estadoi inicial de nuestra aplicacion
export const initialState = 0;

//creamos las acciones de nuestro reducer
const _contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),

    //forma simple
    // // on(multiplicar, (state, props) => state * props.numero)
    //usando detructuracion del objeto props
    on(multiplicar, (state, { numero }) => state * numero),

    on(dividir, (state, { numero }) => state / numero),
    on(reset, (state) => 0)
);

//exportamos nuestro reducer
export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}


//#region SIN USAR EL REDUCER DE LA DOCUMENTACION

// export function contadorReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case incrementar.type:
//             return state + 1;
//         case decrementar.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }

//#endregion