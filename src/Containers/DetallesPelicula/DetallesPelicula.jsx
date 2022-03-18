import React from 'react';
import './DetallesPelicula.css';
// import axios from 'axios'; // ya no hace falta pq tengo los datos en redux
// import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';




const DetallesPelicula = (props) => {
	
// YA TENGO LOS DATOS EN REDUX ASI QUE PASO DIRECTAMENTE AL RETURN 

  // Navegar
  let navigate = useNavigate();

  const navegar = () => {
		 navigate("/pedido");
  }

	return(

		<div className="diseñoDetalles">

			<div className="contenidoDetalles">

				<div className="infoIzquierda"> 
					<img className="cartel" src={props.peliculaSeleccionada.poster} alt={props.peliculaSeleccionada.titulo}/>
				</div> 
			

				<div className="infoDerecha"> 
					<div className="datosPeliculaTitulo">{props.peliculaSeleccionada?.titulo}</div>
					<div className="datosPeliculaSinopsis">{props.peliculaSeleccionada?.sinopsis}</div>
					<button className='botonAlquilar' onClick={()=>navegar("/pedido")}>ALQUILAR</button>
				</div>	

			</div>

		</div>
		

	) 
};

export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada
}))(DetallesPelicula);

