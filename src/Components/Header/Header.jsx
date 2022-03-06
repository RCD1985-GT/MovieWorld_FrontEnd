import React from 'react';
import './Header.css';
// import Link from '../../Components/Link/Link';

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
			<div className="suscribete">Registrate</div>
			<div className="lupa">Acceso</div>
		</div>

		  

	  </div>
	);
  };

export default Header;