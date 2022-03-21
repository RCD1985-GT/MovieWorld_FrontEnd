import React from 'react';
import './Pedido.css';
import { connect } from 'react-redux';
import { USUARIO } from '../../redux/types';



const Pedido = (props) => {

// // Funcion hacer pedido
// const hacerPedido = (pedido) => {
            
// 	console.log(pedido);
// 	//Guardamos la pelicula seleccionada en REDUX al alquilar la pelicula
// 	props.dispatch({type:PEDIDO, payload: Pedido});

// 	}

 // Hook
//  const [pedidos, setPedidos] = useState([]);



// const hacerPedido = async () => {

// 	try {

// 		let resultado = await axios.post("http://localhost:3300/pedidos/nuevoPedido");
// 		console.log(resultado);
// 		setPedidos(resultado.data); // SE GUARDA EL PEDIDO EN EL HOOK


// 	} catch (error) {
// 		console.log(error);
// 	}


// if (credenciales?.token != undefined) {
	// AÑADIR QUE SINO HAY TOKEN TE REDIRIGA A REGISTRO
	return(


	  <div className="diseñoPedido">

          <div className="contenedorPedido">
		
		  {props.usuario.nombre} Gracias por alquilar {props.peliculaSeleccionada.titulo}
			{/* // NO TRAE EL NOMBRE */}
          </div>
	  </div>
	);

	//AQUI VA EL ELSE
  };


export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada,
	credenciales: state.credenciales, // NO ME TRAE LAS CREDENCIALES
	usuario: state.usuario // NO FUNCIONA USUARIO
}))(Pedido);