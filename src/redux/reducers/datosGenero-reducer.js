import {GENERO} from '../types';

const initialState = {
    genero: ""
};

const busquedaFilmsReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case GENERO :
            return action.payload;

        default :
            return state
    }
}

export default busquedaFilmsReducer;