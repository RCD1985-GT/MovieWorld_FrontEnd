import {PEDIDO} from '../types';

const initialState = {
    pedido: ""
};

const pedidoFilmsReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL PEDIDO
        case PEDIDO :
            return action.payload;

        default :
            return state
    }
}

export default pedidoFilmsReducer;