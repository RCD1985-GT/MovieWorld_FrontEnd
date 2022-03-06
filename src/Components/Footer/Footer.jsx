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
			<div className="arribaDerechaFooter">

				<div className="iconoFacebook"></div>
				<div className="iconoInstagram"></div>
				<div className="iconoTwitter"></div>

				
			{/* <a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos"></a>
			<a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos"></a>
			<a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos"></a> */}
			</div>
		</div>

		<div className="abajoFooter">
			  <div className="caja1">
				  <img src='./assets/img/ue'></img>
			  </div>
			  <div className="caja2">
			  <img src='./assets/img/ge'></img>
			  </div>
			  <div className="caja3">
			  <img src='./assets/img/gc'></img>  
			  </div>
		</div>
	  </div>
	);
  };
export default Footer;