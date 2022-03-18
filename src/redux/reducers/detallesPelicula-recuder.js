import {DETALLES_PELICULA} from '../types';

const estadoInicial = {
    pelicula: {},
    
};

const seleccionPeliculaReducer = (state = estadoInicial, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case DETALLES_PELICULA :
            return action.payload; // muevo el contenido sin modificar

        // case MOVIES_TITLE :
        //     return {...state, peliculas: action.payload};

        default :
            return state
    }
}

export default seleccionPeliculaReducer;