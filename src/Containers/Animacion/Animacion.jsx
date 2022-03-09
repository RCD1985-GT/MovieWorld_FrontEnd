import React from 'react';
import './Animacion.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Animacion = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoAnimacion">
		  <div className="contenedorAnimacion">
			  ANIMACION
		  </div>
	  </div>
	);
  };
export default Animacion;