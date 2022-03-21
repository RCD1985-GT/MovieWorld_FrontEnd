import {USUARIO} from '../types';

const initialState = {
    usuario: ""
};

const usuarioReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO
        case USUARIO :
            return action.payload;

        default :
            return state
    }
}

export default usuarioReducer;