import React from 'react';
import './Footer.css';


const Footer = () => {
	return(
	  <div className="contenedorFooter">

		<div className="arribaFooter">
			<div className="arribaIzquierdaFooter">
				<a href="#"> Contacto</a>
				<a href="#"> Aviso Legal</a>
			</div>
			<div className="arribaDerechaFooter">ICONOS</div>
		</div>

		<div className="abajoFooter">
			  <div className="caja1">Union Europea</div>
			  <div className="caja2">Gobiero España</div>
			  <div className="caja3">Generalitat Cataluña</div>
		</div>
	  </div>
	);
  };
export default Footer;