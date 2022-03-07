import React from 'react';
import './Footer.css';
// import gc from '.assets/img/gc.png';

const Footer = () => {
	return(
	  <div className="contenedorFooter">

		<div className="arribaFooter">


			<div className="arribaIzquierdaFooter">
				<a href="#"> Contacto</a>
				<a href="#"> Aviso Legal</a>
			</div>


			<div className="arribaDerechaFooter">
				<div className="iconoFacebook">
					{/* <img src={gc}/>   */}
				</div> 
				<div className="iconoInstagram">
					<img src=".img/logoFacebookPeq" alt="facebook"/>IS
				</div>
				<div className="iconoTwitter">
					<img src="src/assets/img/logoFacebookPeq" alt="" /> TW
				</div>
			</div>
			
		</div>

		<div className="abajoFooter">
			  <div className="caja1">
				  <img src='.img/gc'></img>
			  </div>
			  <div className="caja2">
			  <img src='src/assets/img/ge'></img>
			  </div>
			  <div className="caja3">
			  <img src='src/assets/img/gc'></img>  
			  </div>
		</div>
	  </div>
	);
  };
export default Footer;