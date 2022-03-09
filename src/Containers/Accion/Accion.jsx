import React from 'react';
import './Accion.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Accion = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoAccion">
		  <div className="contenedorAccion">
			  ACCION
		  </div>
	  </div>
	);
  };
export default Accion;

