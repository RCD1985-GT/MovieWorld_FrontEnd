import React from 'react';
import './Header.css';


const Header = () => {
	return(
	  <div className="contenedorHeader">

		<div className="logo">Movie World</div>

        <div className="secciones">
			<a href="#">Inicio</a>
			<a href="#">Peliculas</a>
			<a href="#">Series</a>
			<a href="#">Kids</a>
		</div>

		<div className="busqueda">
			<div className="suscribete">Suscribete</div>
			<div className="lupa">Login</div>
		</div>

		  

	  </div>
	);
  };

export default Header;