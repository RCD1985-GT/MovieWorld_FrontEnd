import React from 'react';
import './Infantil.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Infantil = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui");

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

	return(
	  <div className="diseñoInfantiol">
		  <div className="contenedorInfantil">
			 INFANTIL
		  </div>
	  </div>
	);
  };
export default Infantil;