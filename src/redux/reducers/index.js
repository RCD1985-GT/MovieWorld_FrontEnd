

import {combineReducers} from 'redux';

import genero from './datosGenero-reducer';

import peliculaSeleccionada from './detallesPelicula-recuder';


const rootReducer = combineReducers({
    genero, peliculaSeleccionada
});

export default rootReducer;