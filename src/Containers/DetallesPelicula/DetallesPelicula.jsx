import React from 'react';
import './DetallesPelicula.css';
import axios from 'axios'; 
import { connect } from 'react-redux';

const DetallesPelicula = (props) => {
	
// YA TENGO LOS DATOS EN REDUX ASI QUE PASO DIRECTAMENTE AL RETURN 

  const hacerPedido = async () => {

	console.log(props.credenciales.token,"hhahahahahhahaha");

	let body = {
		peliculaId : props.peliculaSeleccionada?.id,
		usuarioId : props.credenciales?.usuarioId,
		precio : 5,
		fechaAlquiler : "2022-03-24",
		fechaDevolucion :  "2022-03-25",
   }

    let config = {
	headers: { Authorization: `Bearer ${props.credenciales.token}` }
	};

	      
	try {

		let resultado = await axios.post("http://localhost:3300/pedidos/nuevoPedido", body, config); 
		console.log(resultado);
		

	} catch (error) {
		console.log(error);
	}


	if (props.credenciales?.token !== undefined) {  
	
		return(
	
		  <div className="diseñoPedidos">
	
			  <div className="contenedorPedidos">
			
			   Gracias por alquilar {props.peliculaSeleccionada.titulo}
				
			  </div>
		  </div>
		);
	  }
};


// if (props.credenciales?.token !== undefined) {  // ESTA LINEA VA FUERA ¿?
	
// 	return(

// 	  <div className="diseñoPedidos">

//           <div className="contenedorPedidos">
		
// 		   Gracias por alquilar {props.peliculaSeleccionada.titulo}
			
//           </div>
// 	  </div>
// 	);
//   }

	return(

		<div className="diseñoDetalles">

			<div className="contenidoDetalles">

				<div className="infoIzquierda"> 
					<img className="cartel" src={props.peliculaSeleccionada.poster} alt={props.peliculaSeleccionada.titulo}/>
				</div> 
			

				<div className="infoDerecha"> 
					<div className="datosPeliculaTitulo">{props.peliculaSeleccionada?.titulo}</div>
					<div className="datosPeliculaSinopsis">{props.peliculaSeleccionada?.sinopsis}</div>
					<button className='botonAlquilar' onClick={()=>hacerPedido()}>ALQUILAR</button>
				</div>	

			</div>

		</div>
	) 
};

export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada,
	credenciales: state.credenciales
}))(DetallesPelicula);

