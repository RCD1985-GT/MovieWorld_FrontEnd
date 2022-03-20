import React from 'react';
import './Pedido.css';
import { connect } from 'react-redux';



const Pedido = (props) => {


	return(


	  <div className="diseñoPedido">

          <div className="contenedorPedido">
		
			Hola,{props.credenciales.nombre} Gracias por alquilar {props.peliculaSeleccionada.titulo}
			
          </div>
	  </div>
	);
  };


export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada,
	credenciales: state.credenciales  // NO ME TARE LAS CREDENCIALES
}))(Pedido);