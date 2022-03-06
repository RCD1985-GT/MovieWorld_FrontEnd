import React from 'react';
import './Header.css';


const Header = () => {
	return(
	  <div className="contenedorHeader">

		<div className="logo">Movie World</div>

        <div className="secciones">
			<a href="#">Home</a>
			<a href="#">Peliculas</a>
			<a href="#">Top 20</a>
			<a href="#">Novedades</a>
		</div>

		<div className="busqueda">
			<div className="suscribete">Suscribete</div>
			<div className="lupa">Entra</div>
		</div>

		  

	  </div>
	);
  };

export default Header;