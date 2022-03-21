

import {combineReducers} from 'redux';

import genero from './datosGenero-reducer';

import peliculaSeleccionada from './detallesPelicula-reducer';

import pedido from './datosPedido-reducer';

import credenciales from './datosCredenciales-reducer';

import usuario from './datosUsuario-reducer';

const rootReducer = combineReducers({
    genero, peliculaSeleccionada, pedido, credenciales, usuario
});

export default rootReducer;