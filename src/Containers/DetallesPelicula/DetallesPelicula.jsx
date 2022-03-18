import React from 'react';
import './DetallesPelicula.css';
// import axios from 'axios'; // ya no hace falta pq tengo los datos en redux
// import { useState, useEffect } from "react";
import { connect } from 'react-redux';




const DetallesPelicula = (props) => {
	
// YA TENGO LOS DATOS EN REDUX ASI QUE PASO DIRECTAMENTE AL RETURN LINEA 45

 /* Navegar

  Hook
  const [peliculas, setPeliculas] = useState([]);


  UseEffect de montaje // YA NO NECISTO XQ DATOS ESTAN EN REDUX
  useEffect(() => {
	traePeliculas();
	}, []);


 Funcion traer peliculas

 const traePeliculas = async () => {..YA NO LA NECESITO XQ LOS DATOS LOS RECIBO DE REDUX

	try {

		let resultado = await axios.get("http://localhost:3300/peliculas");

		setPeliculas(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
		console.log("ha traido y guardado las pelis")

	} catch (error) {
		console.log(error);
	}
}

if (peliculas[0]?.id != undefined) {
	aqui mapeo porque ya las tengo*/

	return(

		<div className="diseñoDetalles">

			<div className="contenidoDetalles">

				<div className="infoIzquierda"> 
					<img className="cartel" src={props.peliculaSeleccionada.poster} alt={props.peliculaSeleccionada.titulo}/>
				</div> 
			

				<div className="infoDerecha"> 
					<div className="datosPeliculaTitulo">{props.peliculaSeleccionada?.titulo}</div>
					<div className="datosPeliculaSinopsis">{props.peliculaSeleccionada?.sinopsis}</div>
				</div>	

			</div>

		</div>
		

	) 
};

export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada
}))(DetallesPelicula);

