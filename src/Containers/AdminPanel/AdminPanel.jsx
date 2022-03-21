import React from 'react';
import './AdminPanel.css';
import { connect } from 'react-redux';
import { PEDIDO } from '../../redux/types'; // NECESITO ESTO¿?
import { DETALLES_PELICULA } from '../../redux/types';

const AdminPanel = () => {




	return(

	  <div className="diseñoAdminPanel">
          
          <div className="contenedorPanel">

                <div className="dato">VER USUARIOS</div>
                <div className="dato">BORRAR USUARIO</div>
                <div className="dato">VER PELICULAS</div>
                <div className="dato">AÑADIR PELICULA</div>
                <div className="dato">VER PEDIDOS</div>
            

          </div>




	  </div>
	);
  };

// QUE VOY A NECESITAR:
//-que conecte a Redux.... import { connect } from 'react-redux'; + connect() dentro de export default
// const AdminPanel = (props) => {...añado props


export default connect() (AdminPanel);

// export default connect((state) => ({
//     peliculaSeleccionada: state.peliculaSeleccionada,
//     pedido: state.pedido,
// 	  credenciales: state.credenciales  // NO ME TRAE LAS CREDENCIALES
// }))(AdminPanel);