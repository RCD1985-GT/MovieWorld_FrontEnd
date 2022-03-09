import React from 'react';
import './CienciaFiccion.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const CienciaFiccion = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoCienciaFiccion">
		  <div className="contenedorCienciaFiccion">
			 CIENCIA FICCION
		  </div>
	  </div>
	);
  };
export default CienciaFiccion;