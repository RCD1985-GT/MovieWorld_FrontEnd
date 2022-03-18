

import {combineReducers} from 'redux';

import genero from './datosGenero-reducer';

import peliculaSeleccionada from './detallesPelicula-reducer';

import pedido from './datosPedido-reducer';

const rootReducer = combineReducers({
    genero, peliculaSeleccionada, pedido
});

export default rootReducer;